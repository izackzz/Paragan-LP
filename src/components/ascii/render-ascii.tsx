'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  renderAsciiVariants,
  type AsciiAspect,
  type AsciiRender,
  type AsciiVariant,
} from './render-ascii-variants';

const CELL_WIDTH = 10;
const DOT_TEXTURE_SIZE = 20;

function validateFrames(value: unknown, config: AsciiVariant): asserts value is string[] {
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

export interface RenderAsciiProps {
  render: AsciiRender;
  /** Container ratio. Defaults to the generated video's aspect; content uses contain. */
  aspect?: AsciiAspect;
  className?: string;
  label?: string;
}

export function RenderAscii({ render, ...props }: RenderAsciiProps) {
  return <AsciiPlayer key={render} config={renderAsciiVariants[render]} {...props} />;
}

function AsciiPlayer({
  config,
  aspect = config.aspect,
  className,
  label = 'Animação halftone em pontos',
}: Omit<RenderAsciiProps, 'render'> & { config: AsciiVariant }) {
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
        fetch(config.src, { signal: controller.signal }),
      ]);
      if (!response.ok) throw new Error('Could not load ASCII frames');
      const frames: unknown = await response.json();
      validateFrames(frames, config);
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

      // The ramp is an intensity encoding. Render it as square dot textures;
      // all levels share one atlas, with no per-frame rasterization or uploads.
      const atlas = document.createElement('canvas');
      const atlasScale = Math.max(2, Math.ceil(window.devicePixelRatio || 1));
      atlas.width = DOT_TEXTURE_SIZE * config.ramp.length * atlasScale;
      atlas.height = DOT_TEXTURE_SIZE * atlasScale;
      const context = atlas.getContext('2d');
      if (!context) throw new Error('Canvas 2D unavailable');
      context.scale(atlasScale, atlasScale);
      context.fillStyle = '#ffffff';
      [...config.ramp].forEach((_, index) => {
        if (index === 0) return;
        const intensity = index / (config.ramp.length - 1);
        // Radius follows sqrt(intensity) so dot area tracks luminance.
        const radius = DOT_TEXTURE_SIZE * 0.45 * Math.sqrt(intensity);
        context.globalAlpha = 0.25 + 0.75 * intensity;
        context.beginPath();
        context.arc(
          (index + 0.5) * DOT_TEXTURE_SIZE,
          DOT_TEXTURE_SIZE / 2,
          radius,
          0,
          Math.PI * 2,
        );
        context.fill();
      });
      const atlasTexture = PIXI.Texture.from(atlas);
      const textures = [...config.ramp].map(
        (_, index) =>
          new PIXI.Texture({
            source: atlasTexture.source,
            frame: new PIXI.Rectangle(
              index * DOT_TEXTURE_SIZE * atlasScale,
              0,
              DOT_TEXTURE_SIZE * atlasScale,
              DOT_TEXTURE_SIZE * atlasScale,
            ),
          }),
      );
      const glyphs = new PIXI.Container();
      glyphs.eventMode = 'none';
      app.stage.addChild(glyphs);
      const [aspectWidth, aspectHeight] = config.aspect.split('/').map(Number);
      const gridWidth = config.columns * CELL_WIDTH;
      const gridHeight = (gridWidth * aspectHeight) / aspectWidth;
      const cellHeight = gridHeight / config.rows;
      // Preserve the existing sample grid while keeping each dot circular (1:1).
      const dotSize = Math.min(CELL_WIDTH, cellHeight);
      const sprites = Array.from({ length: config.columns * config.rows }, (_, index) => {
        const sprite = new PIXI.Sprite(textures[0]);
        sprite.width = dotSize;
        sprite.height = dotSize;
        sprite.position.set(
          (index % config.columns) * CELL_WIDTH + (CELL_WIDTH - sprite.width) / 2,
          Math.floor(index / config.columns) * cellHeight + (cellHeight - sprite.height) / 2,
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
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        app.renderer.resize(width, height, window.devicePixelRatio || 1);
        const scale = Math.min(width / gridWidth, height / gridHeight);
        glyphs.scale.set(scale);
        glyphs.position.set((width - gridWidth * scale) / 2, (height - gridHeight * scale) / 2);
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
  }, [config]);

  return (
    <div
      className={cn('relative w-full overflow-hidden text-primary', className)}
      style={{ aspectRatio: aspect }}
    >
      <div
        ref={hostRef}
        role="img"
        aria-label={label}
        aria-busy={status === 'loading'}
        className="absolute inset-0"
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
