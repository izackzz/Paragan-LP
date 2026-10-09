'use client';

import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { t } from '@/i18n';
import {
  renderAsciiVariants,
  type AsciiAspect,
  type AsciiRender,
  type AsciiVariant,
} from './render-ascii-variants';
import { decodeFrames, type RenderModel, type RenderFit } from './render-ascii-data';
import { createAsciiRenderer } from './render-ascii-pixi';
import { createGridRenderer } from './render-ascii-webgl';

export interface RenderAsciiProps {
  render: AsciiRender;
  /** Visual model; all models read the same frame JSON. Defaults to halftone. */
  model?: RenderModel;
  /** Container ratio. Defaults to the generated video's aspect; content uses contain. */
  aspect?: AsciiAspect;
  /** Cover fills the host without distortion, cropping overflow. Defaults to contain. */
  fit?: RenderFit;
  /** Grid pitch in CSS pixels for halftone/pixels; defaults to 6/8 respectively. */
  cellSize?: number;
  /** Hide decorative/background animations from assistive technology. */
  decorative?: boolean;
  className?: string;
  label?: string;
}

export function RenderAscii({ render, model = 'halftone', ...props }: RenderAsciiProps) {
  return (
    <AsciiPlayer
      key={`${render}:${model}`}
      config={renderAsciiVariants[render]}
      model={model}
      {...props}
    />
  );
}

function AsciiPlayer({
  config,
  model = 'halftone',
  fit = 'contain',
  cellSize,
  decorative = false,
  aspect = config.aspect,
  className,
  label = t(`artwork.defaults.${model}`),
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
      const response = await fetch(`${config.src}?format=2`, { signal: controller.signal });
      if (!response.ok) throw new Error('Could not load ASCII frames');
      const frames: unknown = await response.json();
      const data = decodeFrames(frames, config, model);
      if (cancelled || !host) return;

      const renderer =
        model === 'ascii'
          ? await createAsciiRenderer(data, config, fit)
          : createGridRenderer(data, config.aspect, model, fit, cellSize);
      dispose = () => renderer.destroy();
      if (cancelled) {
        dispose();
        return;
      }

      let frame = Math.min(config.posterFrame, data.frames.length - 1);
      let raf = 0;
      let previousTime = 0;
      let elapsed = 0;
      let visible = false;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const scheme = window.matchMedia('(prefers-color-scheme: dark)');
      const draw = () => renderer.draw(frame);
      const tick = (time: number) => {
        raf = 0;
        if (previousTime) elapsed += time - previousTime;
        previousTime = time;
        const steps = Math.floor(elapsed / (1000 / config.fps));
        if (steps) {
          elapsed %= 1000 / config.fps;
          frame = (frame + steps) % data.frames.length;
          draw();
        }
        raf = requestAnimationFrame(tick);
      };
      const syncPlayback = () => {
        cancelAnimationFrame(raf);
        raf = 0;
        previousTime = 0;
        if (motion.matches) {
          frame = Math.min(config.posterFrame, data.frames.length - 1);
          draw();
        } else if (visible && !document.hidden) {
          raf = requestAnimationFrame(tick);
        }
      };
      const resize = () => {
        const { width, height } = host.getBoundingClientRect();
        if (!width || !height) return;
        renderer.resize(width, height, window.devicePixelRatio || 1);
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
          renderer.setTint(red, green, blue);
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
        renderer.destroy();
      };
      renderer.canvas.className = 'block h-full w-full';
      renderer.canvas.setAttribute('aria-hidden', 'true');
      host.appendChild(renderer.canvas);
      resize();
      syncTheme();
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
  }, [config, model, fit, cellSize]);

  return (
    <div
      className={cn('relative w-full overflow-hidden text-primary', className)}
      style={{ aspectRatio: aspect }}
      aria-hidden={decorative || undefined}
    >
      <div
        ref={hostRef}
        role={decorative ? undefined : 'img'}
        aria-label={decorative ? undefined : label}
        aria-busy={status === 'loading'}
        className="absolute inset-0"
      />
      {status === 'loading' && (
        <span role="status" className="sr-only">
          {t('artwork.loading')}
        </span>
      )}
      {status === 'error' && (
        <p
          role="alert"
          className="absolute inset-0 grid place-items-center p-6 text-center text-sm text-foreground-3"
        >
          {t('artwork.failed')}
        </p>
      )}
    </div>
  );
}
