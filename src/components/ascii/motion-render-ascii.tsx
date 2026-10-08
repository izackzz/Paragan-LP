'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { decodeFrames, fittedBox, cellProfile } from './render-ascii-data';
import { renderAsciiVariants, type AsciiRender, type AsciiVariant } from './render-ascii-variants';
import { MotionAsciiField, brushWeight, motionScale, usesPrimaryColor } from './motion-ascii-field';
import type { RenderAsciiProps } from './render-ascii';

export interface MotionRenderAsciiProps extends Omit<RenderAsciiProps, 'render'> {
  render?: AsciiRender;
  /** Custom generated JSON, including legacy frames. */
  source?: AsciiVariant;
  brushRadius?: number;
  scaleFactor?: 2 | 3;
  accentColor?: string;
  baseOpacity?: number;
  holdDuration?: number;
  fadeDuration?: number;
  fallback?: ReactNode;
}

export function MotionRenderAscii(props: MotionRenderAsciiProps) {
  // Reinitialize loading/fallback and interaction memory when the source or
  // rendering settings change, without disturbing ordinary CSS theme updates.
  const key = JSON.stringify([
    props.source ?? props.render,
    props.model,
    props.fit,
    props.cellSize,
    props.brushRadius,
    props.scaleFactor,
    props.accentColor,
    props.baseOpacity,
    props.holdDuration,
    props.fadeDuration,
  ]);
  return <MotionAsciiPlayer key={key} {...props} />;
}

function MotionAsciiPlayer({
  render,
  source,
  model = 'halftone',
  fit = 'contain',
  cellSize,
  aspect,
  className,
  decorative = true,
  label = 'Paragan em pontos interativos',
  brushRadius = 180,
  scaleFactor = 3,
  accentColor,
  baseOpacity = 1,
  holdDuration = 2000,
  fadeDuration = 3000,
  fallback,
}: MotionRenderAsciiProps) {
  const config = source ?? (render ? renderAsciiVariants[render] : undefined);
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState<AsciiVariant>();
  const ready = loaded === config;

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    if (!host || !canvas || !config) return;
    const context = canvas.getContext('2d');
    if (!context) return;
    const controller = new AbortController();
    let dispose = () => {};
    let cancelled = false;

    async function initialize() {
      if (!config || !host || !canvas || !context) return;
      if (
        ![brushRadius, holdDuration, fadeDuration, baseOpacity].every(Number.isFinite) ||
        brushRadius <= 0 ||
        holdDuration < 0 ||
        fadeDuration <= 0 ||
        baseOpacity < 0 ||
        baseOpacity > 1 ||
        ![2, 3].includes(scaleFactor)
      ) {
        throw new Error('Invalid motion settings');
      }
      const response = await fetch(config.src, { signal: controller.signal });
      if (!response.ok) throw new Error('Could not load motion frames');
      const data = decodeFrames(await response.json(), config, model);
      if (cancelled) return;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      const scheme = window.matchMedia('(prefers-color-scheme: dark)');
      const colorProbe = document.createElement('span');
      colorProbe.style.display = 'none';
      host.appendChild(colorProbe);
      const colorCanvas = document.createElement('canvas');
      colorCanvas.width = colorCanvas.height = 1;
      const colors = colorCanvas.getContext('2d', { willReadFrequently: true });
      if (!colors) {
        colorProbe.remove();
        throw new Error('Color conversion unavailable');
      }
      let palette: string[] = [];
      let width = 1,
        height = 1,
        pitchX = 6,
        pitchY = 6,
        size = 3;
      let columns = 1,
        rows = 1;
      let box = fittedBox(1, 1, config.aspect, fit);
      let field = new MotionAsciiField(1, holdDuration, fadeDuration);
      let xs = new Float32Array(1),
        ys = new Float32Array(1);
      let sampled = new Float32Array(1);
      let frame = -1,
        raf = 0,
        lastDraw = 0,
        visible = false;
      const start = performance.now();
      let pointer: { x: number; y: number } | null = null;
      let previous: { x: number; y: number } | null = null;
      let bounds = host.getBoundingClientRect();
      const readColor = (color: string) => {
        colors.clearRect(0, 0, 1, 1);
        colors.fillStyle = color;
        colors.fillRect(0, 0, 1, 1);
        return colors.getImageData(0, 0, 1, 1).data;
      };
      const theme = () => {
        const base = readColor(getComputedStyle(host).color);
        colorProbe.style.color = 'var(--primary)';
        const primary = readColor(getComputedStyle(colorProbe).color);
        colorProbe.style.color =
          accentColor ??
          (usesPrimaryColor(base, primary) ? 'var(--muted-foreground)' : 'var(--primary)');
        const accent = readColor(getComputedStyle(colorProbe).color);
        palette = Array.from({ length: 101 }, (_, n) => {
          const t = n / 100;
          return `rgba(${[0, 1, 2].map((i) => Math.round(base[i] + (accent[i] - base[i]) * t)).join(',')},${(base[3] + (accent[3] - base[3]) * t) / 255})`;
        });
        draw(performance.now(), true);
      };
      const stamp = (x: number, y: number, now: number, retrigger = false) => {
        const radius = Math.min(brushRadius, Math.max(64, width * 0.35));
        const left = Math.max(0, Math.floor((x - radius - box.x) / pitchX));
        const right = Math.min(columns - 1, Math.ceil((x + radius - box.x) / pitchX));
        const top = Math.max(0, Math.floor((y - radius - box.y) / pitchY));
        const bottom = Math.min(rows - 1, Math.ceil((y + radius - box.y) / pitchY));
        for (let row = top; row <= bottom; row++)
          for (let col = left; col <= right; col++) {
            const i = row * columns + col;
            const dx = xs[i] - x,
              dy = ys[i] - y;
            const distance = Math.hypot(dx, dy);
            if (distance >= radius) continue;
            const angle = i * 2.399963;
            field.paint(
              i,
              brushWeight(distance, radius),
              distance > 0.001 ? dx / distance : Math.cos(angle),
              distance > 0.001 ? dy / distance : Math.sin(angle),
              now,
              radius * 1.4,
              retrigger,
            );
          }
      };
      const sample = (nextFrame: number) => {
        const cells = data.frames[nextFrame];
        for (let row = 0; row < rows; row++)
          for (let col = 0; col < columns; col++) {
            const i = row * columns + col;
            const x = Math.max(
              0,
              Math.min(data.columns - 1, ((col + 0.5) / columns) * data.columns - 0.5),
            );
            const y = Math.max(0, Math.min(data.rows - 1, ((row + 0.5) / rows) * data.rows - 0.5));
            const x0 = Math.floor(x),
              y0 = Math.floor(y);
            const x1 = Math.min(data.columns - 1, x0 + 1),
              y1 = Math.min(data.rows - 1, y0 + 1);
            const a =
              cells[y0 * data.columns + x0] * (1 - (x - x0)) +
              cells[y0 * data.columns + x1] * (x - x0);
            const b =
              cells[y1 * data.columns + x0] * (1 - (x - x0)) +
              cells[y1 * data.columns + x1] * (x - x0);
            sampled[i] =
              model === 'ascii'
                ? cells[row * data.columns + col]
                : a * (1 - (y - y0)) + b * (y - y0);
          }
        frame = nextFrame;
      };
      function draw(now: number, force = false) {
        if (!context || !config || !palette.length) return;
        const nextFrame = motion.matches
          ? Math.min(config.posterFrame, data.frames.length - 1)
          : Math.floor(((now - start) * config.fps) / 1000) % data.frames.length;
        if (frame !== nextFrame) sample(nextFrame);
        if (pointer && !motion.matches && !force) {
          const from = previous ?? pointer;
          const steps = Math.min(
            128,
            Math.max(
              1,
              Math.ceil(
                Math.hypot(pointer.x - from.x, pointer.y - from.y) /
                  Math.max(4, Math.min(pitchX, pitchY)),
              ),
            ),
          );
          for (let s = 1; s <= steps; s++)
            stamp(
              from.x + ((pointer.x - from.x) * s) / steps,
              from.y + ((pointer.y - from.y) * s) / steps,
              now,
            );
          previous = pointer;
        }
        field.prune(now);
        for (const index of field.active) field.advance(index, now);
        lastDraw = now;
        context.clearRect(0, 0, width, height);
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.font = `${Math.min(pitchY * 0.8, pitchX * 1.6)}px monospace`;
        for (let i = 0; i < sampled.length; i++) {
          const amount = motion.matches ? 0 : field.value(i, now);
          const level = Math.min(6, Math.round(sampled[i]));
          if (!level) continue;
          context.fillStyle = palette[Math.round(amount * 100)];
          context.globalAlpha =
            (baseOpacity + (1 - baseOpacity) * amount) *
            (model === 'pixels' ? level / 6 : 0.25 + (0.75 * level) / 6);
          const scale = motionScale(model, amount, scaleFactor);
          const x = xs[i] + (model === 'pixels' ? 0 : field.offsetX[i]);
          const y = ys[i] + (model === 'pixels' ? 0 : field.offsetY[i]);
          if (model === 'ascii') {
            context.fillText('.:-=+X'[level - 1], x, y);
          } else if (model === 'pixels') {
            const side = size * scale;
            context.fillRect(xs[i] - side / 2, ys[i] - side / 2, side, side);
          } else {
            context.beginPath();
            context.arc(x, y, (size * Math.sqrt(level / 6)) / 2, 0, Math.PI * 2);
            context.fill();
          }
        }
        context.globalAlpha = 1;
      }
      const tick = (now: number) => {
        raf = 0;
        if (!visible || document.hidden || motion.matches) return;
        if (now - lastDraw >= 1000 / 60) draw(now);
        if (pointer || field.active.size || data.frames.length > 1)
          raf = requestAnimationFrame(tick);
      };
      const wake = () => {
        if (visible && !document.hidden && !motion.matches && !raf)
          raf = requestAnimationFrame(tick);
      };
      const resize = () => {
        bounds = host.getBoundingClientRect();
        width = bounds.width;
        height = bounds.height;
        if (!width || !height) return;
        const dpr = Math.min(2, window.devicePixelRatio || 1);
        canvas.width = Math.round(width * dpr);
        canvas.height = Math.round(height * dpr);
        context.setTransform(dpr, 0, 0, dpr, 0, 0);
        box = fittedBox(width, height, config.aspect, fit);
        const profile = cellProfile(model === 'pixels' ? 'pixels' : 'halftone', cellSize);
        // Bound CPU work even in unusually large hosts; cells remain square.
        const pitch = Math.max(profile.pitch, Math.sqrt((box.width * box.height) / 16000));
        columns = model === 'ascii' ? data.columns : Math.ceil(box.width / pitch);
        rows = model === 'ascii' ? data.rows : Math.ceil(box.height / pitch);
        pitchX = box.width / columns;
        pitchY = box.height / rows;
        size = profile.size;
        const count = columns * rows;
        field = new MotionAsciiField(count, holdDuration, fadeDuration);
        sampled = new Float32Array(count);
        xs = Float32Array.from({ length: count }, (_, i) => box.x + ((i % columns) + 0.5) * pitchX);
        ys = Float32Array.from(
          { length: count },
          (_, i) => box.y + (Math.floor(i / columns) + 0.5) * pitchY,
        );
        frame = -1;
        pointer = previous = null;
        draw(performance.now(), true);
        wake();
      };
      const move = (event: PointerEvent) => {
        if (event.pointerType === 'touch' || motion.matches) return;
        const next = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
        const from = pointer ?? next;
        const steps = Math.min(
          128,
          Math.max(
            1,
            Math.ceil(
              Math.hypot(next.x - from.x, next.y - from.y) / Math.max(4, Math.min(pitchX, pitchY)),
            ),
          ),
        );
        const now = performance.now();
        // Preserve even fast passes that enter and leave between animation frames.
        for (let s = 1; s <= steps; s++)
          stamp(
            from.x + ((next.x - from.x) * s) / steps,
            from.y + ((next.y - from.y) * s) / steps,
            now,
          );
        pointer = previous = next;
        wake();
      };
      const leave = () => {
        pointer = previous = null;
        wake();
      };
      const press = (event: PointerEvent) => {
        if (motion.matches) return;
        stamp(event.clientX - bounds.left, event.clientY - bounds.top, performance.now(), true);
        wake();
      };
      const refreshBounds = () => {
        bounds = host.getBoundingClientRect();
      };
      const sync = () => {
        cancelAnimationFrame(raf);
        raf = 0;
        if (!visible || document.hidden) pointer = previous = null;
        if (motion.matches) {
          field = new MotionAsciiField(columns * rows, holdDuration, fadeDuration);
          pointer = previous = null;
        }
        if (visible && !document.hidden) {
          draw(performance.now(), true);
          wake();
        }
      };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        sync();
      });
      const resizer = new ResizeObserver(resize);
      const themeObserver = new MutationObserver(theme);
      for (let element: HTMLElement | null = host; element; element = element.parentElement) {
        themeObserver.observe(element, {
          attributes: true,
          attributeFilter: ['class', 'style', 'data-theme'],
        });
      }
      host.addEventListener('pointermove', move);
      host.addEventListener('pointerleave', leave);
      host.addEventListener('pointercancel', leave);
      host.addEventListener('pointerdown', press);
      window.addEventListener('scroll', refreshBounds, { passive: true, capture: true });
      window.addEventListener('resize', resize);
      motion.addEventListener('change', sync);
      scheme.addEventListener('change', theme);
      let density = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
      const syncDensity = () => {
        density.removeEventListener('change', syncDensity);
        density = window.matchMedia(`(resolution: ${window.devicePixelRatio}dppx)`);
        density.addEventListener('change', syncDensity);
        resize();
      };
      density.addEventListener('change', syncDensity);
      document.addEventListener('visibilitychange', sync);
      dispose = () => {
        cancelAnimationFrame(raf);
        observer.disconnect();
        resizer.disconnect();
        themeObserver.disconnect();
        host.removeEventListener('pointermove', move);
        host.removeEventListener('pointerleave', leave);
        host.removeEventListener('pointercancel', leave);
        host.removeEventListener('pointerdown', press);
        window.removeEventListener('scroll', refreshBounds, true);
        window.removeEventListener('resize', resize);
        motion.removeEventListener('change', sync);
        scheme.removeEventListener('change', theme);
        density.removeEventListener('change', syncDensity);
        document.removeEventListener('visibilitychange', sync);
        colorProbe.remove();
      };
      theme();
      resize();
      observer.observe(host);
      resizer.observe(host);
      setLoaded(config);
    }
    void initialize().catch(() => {
      dispose();
    });
    return () => {
      cancelled = true;
      controller.abort();
      dispose();
    };
  }, [
    config,
    model,
    fit,
    cellSize,
    brushRadius,
    scaleFactor,
    accentColor,
    baseOpacity,
    holdDuration,
    fadeDuration,
  ]);

  return (
    <div
      ref={hostRef}
      className={cn('relative w-full overflow-hidden text-primary', className)}
      style={{ aspectRatio: aspect ?? config?.aspect }}
      aria-hidden={decorative || undefined}
      role={decorative ? undefined : 'img'}
      aria-label={decorative ? undefined : label}
    >
      {!ready && <div className="pointer-events-none absolute inset-0">{fallback}</div>}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className={cn('absolute inset-0 block h-full w-full', !ready && 'invisible')}
      />
    </div>
  );
}
