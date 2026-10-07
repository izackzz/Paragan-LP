'use client';

import { useEffect, useRef, useState } from 'react';
import config from './ascii-config.json';

const CELL_WIDTH = 10;
const CELL_HEIGHT = 20;

function validateFrames(value: unknown): asserts value is string[] {
  if (
    !Array.isArray(value) ||
    !value.length ||
    !value.every((frame) => {
      if (typeof frame !== 'string') return false;
      const rows = frame.split('\n');
      return (
        rows.length === config.rows &&
        rows.every(
          (row) =>
            row.length === config.columns && [...row].every((char) => config.ramp.includes(char)),
        )
      );
    })
  )
    throw new Error('Invalid ASCII frames');
}

export function AsciiBrand() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    let cancelled = false;
    const controller = new AbortController();
    let dispose = () => {};

    async function initialize() {
      const [PIXI, response] = await Promise.all([
        import('pixi.js'),
        fetch('/brand/trevo-ascii.json', { signal: controller.signal }),
      ]);
      if (!response.ok) throw new Error('Could not load ASCII frames');
      const frames: unknown = await response.json();
      validateFrames(frames);
      if (cancelled || !host) return;

      const app = new PIXI.Application();
      await app.init({
        width: 1,
        height: 1,
        autoStart: false,
        sharedTicker: false,
        autoDensity: true,
        resolution: window.devicePixelRatio || 1,
        backgroundAlpha: 0,
        preference: 'webgl',
        powerPreference: 'low-power',
        antialias: false,
      });
      dispose = () => app.destroy({ removeView: true }, { children: true });
      if (cancelled) {
        dispose();
        return;
      }

      // Seven glyphs share one small atlas. Only sprite texture references change
      // during playback; there is no per-frame text rasterization or texture upload.
      const atlas = document.createElement('canvas');
      const atlasScale = Math.max(2, Math.ceil(window.devicePixelRatio || 1));
      atlas.width = CELL_WIDTH * config.ramp.length * atlasScale;
      atlas.height = CELL_HEIGHT * atlasScale;
      const context = atlas.getContext('2d');
      if (!context) throw new Error('Canvas 2D unavailable');
      context.scale(atlasScale, atlasScale);
      context.font = '16px monospace';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillStyle = '#ffffff';
      [...config.ramp].forEach((char, index) => {
        context.fillText(char, (index + 0.5) * CELL_WIDTH, CELL_HEIGHT / 2);
      });
      const atlasTexture = PIXI.Texture.from(atlas);
      const textures = [...config.ramp].map(
        (_, index) =>
          new PIXI.Texture({
            source: atlasTexture.source,
            frame: new PIXI.Rectangle(
              index * CELL_WIDTH * atlasScale,
              0,
              CELL_WIDTH * atlasScale,
              CELL_HEIGHT * atlasScale,
            ),
          }),
      );
      const glyphs = new PIXI.Container();
      glyphs.eventMode = 'none';
      app.stage.addChild(glyphs);
      const sprites = Array.from({ length: config.columns * config.rows }, (_, index) => {
        const sprite = new PIXI.Sprite(textures[0]);
        sprite.width = CELL_WIDTH;
        sprite.height = CELL_HEIGHT;
        sprite.position.set(
          (index % config.columns) * CELL_WIDTH,
          Math.floor(index / config.columns) * CELL_HEIGHT,
        );
        glyphs.addChild(sprite);
        return sprite;
      });
      const encoded = frames.map((frame) =>
        Uint8Array.from(frame.replaceAll('\n', ''), (char) => config.ramp.indexOf(char)),
      );
      let frame = Math.min(config.posterFrame, encoded.length - 1);
      let paintedFrame = -1;
      let raf = 0;
      let previousTime = 0;
      let elapsed = 0;
      let visible = false;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const scheme = window.matchMedia('(prefers-color-scheme: dark)');
      const draw = () => {
        if (paintedFrame !== frame) {
          const cells = encoded[frame];
          sprites.forEach((sprite, index) => {
            sprite.visible = cells[index] !== 0;
            sprite.texture = textures[cells[index]];
          });
          paintedFrame = frame;
        }
        app.render();
      };
      const tick = (time: number) => {
        raf = 0;
        if (previousTime) elapsed += time - previousTime;
        previousTime = time;
        const steps = Math.floor(elapsed / (1000 / config.fps));
        if (steps) {
          elapsed %= 1000 / config.fps;
          frame = (frame + steps) % encoded.length;
          draw();
        }
        raf = requestAnimationFrame(tick);
      };
      const syncPlayback = () => {
        cancelAnimationFrame(raf);
        raf = 0;
        previousTime = 0;
        if (motion.matches) {
          frame = config.posterFrame;
          draw();
        } else if (visible && !document.hidden) {
          raf = requestAnimationFrame(tick);
        }
      };
      const resize = () => {
        const size = host.getBoundingClientRect().width;
        if (!size) return;
        app.renderer.resize(size, size, window.devicePixelRatio || 1);
        glyphs.scale.set(size / (config.columns * CELL_WIDTH));
        draw();
      };
      const tintCanvas = document.createElement('canvas');
      tintCanvas.width = tintCanvas.height = 1;
      const tintContext = tintCanvas.getContext('2d', { willReadFrequently: true });
      const syncTheme = () => {
        if (tintContext) {
          tintContext.clearRect(0, 0, 1, 1);
          tintContext.fillStyle = getComputedStyle(host).color;
          tintContext.fillRect(0, 0, 1, 1);
          const [red, green, blue] = tintContext.getImageData(0, 0, 1, 1).data;
          glyphs.tint = (red << 16) | (green << 8) | blue;
        }
        draw();
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        syncPlayback();
      });
      const resizer = new ResizeObserver(resize);
      const themeObserver = new MutationObserver(syncTheme);
      for (let element: HTMLElement | null = host; element; element = element.parentElement) {
        themeObserver.observe(element, {
          attributes: true,
          attributeFilter: ['class', 'style', 'data-theme'],
        });
      }
      // Re-arm the query when moving the window between displays with different DPR.
      let density = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      const syncDensity = () => {
        density.removeEventListener('change', syncDensity);
        density = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        density.addEventListener('change', syncDensity);
        resize();
      };
      dispose = () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        resizer.disconnect();
        themeObserver.disconnect();
        motion.removeEventListener('change', syncPlayback);
        scheme.removeEventListener('change', syncTheme);
        density.removeEventListener('change', syncDensity);
        document.removeEventListener('visibilitychange', syncPlayback);
        app.destroy({ removeView: true }, { children: true });
        textures.forEach((texture) => texture.destroy());
        atlasTexture.destroy(true);
      };
      app.canvas.className = 'block h-full w-full';
      app.canvas.setAttribute('aria-hidden', 'true');
      host.appendChild(app.canvas);
      syncTheme();
      resize();
      observer.observe(host);
      resizer.observe(host);
      motion.addEventListener('change', syncPlayback);
      scheme.addEventListener('change', syncTheme);
      density.addEventListener('change', syncDensity);
      document.addEventListener('visibilitychange', syncPlayback);
      setStatus('ready');
    }

    void initialize().catch(() => {
      dispose();
      dispose = () => {};
      if (!cancelled) setStatus('error');
    });
    return () => {
      cancelled = true;
      controller.abort();
      dispose();
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[min(80svh,42rem)]">
      <div
        ref={hostRef}
        role="img"
        aria-label="Trevo Paragan animado em caracteres ASCII"
        aria-busy={status === 'loading'}
        className="absolute inset-0 text-foreground"
      />
      {status === 'loading' && (
        <span role="status" className="sr-only">
          Carregando animação
        </span>
      )}
      {status === 'error' && (
        <p
          role="alert"
          className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-foreground-3"
        >
          Não foi possível carregar a animação ASCII.
        </p>
      )}
    </div>
  );
}
