'use client';

import { useEffect, useRef, useState, type HTMLAttributes } from 'react';
import { Slider as SliderPrimitive } from '@base-ui/react/slider';
import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { springs } from '@/lib/springs';
import { cn } from '@/lib/utils';

// Adapted from BoringUI SliderComfortable's scrubber variant:
// https://boringui.dev/r/base/slider.json. Uses the installed Base UI and the
// project's tokens; omits unused range/pips modes and respects reduced motion.
type SliderComfortableProps = Omit<HTMLAttributes<HTMLDivElement>, 'onChange' | 'defaultValue'> & {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label: string;
  formatValue?: (value: number) => string;
  disabled?: boolean;
  variant?: 'scrubber';
};

export function SliderComfortable({
  value,
  onChange,
  min = 0,
  max = 100,
  step = 1,
  label,
  formatValue = String,
  disabled = false,
  className,
  variant: _variant,
  ...props
}: SliderComfortableProps) {
  const container = useRef<HTMLDivElement>(null);
  const thumb = useRef<HTMLInputElement>(null);
  const dragging = useRef(false);
  const [focused, setFocused] = useState(false);
  const reduced = useReducedMotion();
  const fraction = max > min ? Math.max(0, Math.min(1, (value - min) / (max - min))) : 0;
  const progress = useMotionValue(fraction);
  const fill = useTransform(progress, (position) => `${position * 100}%`);
  const handle = useTransform(
    progress,
    (position) => `clamp(0.75rem, ${position * 100}%, calc(100% - 0.75rem))`,
  );

  useEffect(() => {
    const animation = animate(progress, fraction, reduced ? { duration: 0 } : springs.fast);
    return () => animation.stop();
  }, [fraction, progress, reduced]);

  function scrub(clientX: number) {
    const rect = container.current?.getBoundingClientRect();
    if (!rect?.width || max <= min) return;
    const position = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    const next = Math.max(
      min,
      Math.min(max, min + Math.round((position * (max - min)) / step) * step),
    );
    progress.set((next - min) / (max - min));
    onChange(Number(next.toFixed(6)));
  }

  return (
    <div
      {...props}
      ref={container}
      className={cn(
        'relative flex min-h-12 w-full touch-pan-y items-center justify-between gap-3 overflow-hidden rounded-input border border-accent bg-muted/30 px-4 text-sm select-none',
        !disabled && 'cursor-ew-resize',
        disabled && 'opacity-50',
        focused && 'ring-2 ring-ring ring-offset-2 ring-offset-background',
        className,
      )}
      onPointerDown={(event) => {
        if (disabled || (event.pointerType === 'mouse' && event.button !== 0)) return;
        event.preventDefault();
        dragging.current = true;
        thumb.current?.focus({ preventScroll: true });
        event.currentTarget.setPointerCapture(event.pointerId);
        scrub(event.clientX);
      }}
      onPointerMove={(event) => {
        if (dragging.current) scrub(event.clientX);
      }}
      onPointerUp={() => {
        dragging.current = false;
      }}
      onPointerCancel={() => {
        dragging.current = false;
      }}
      onLostPointerCapture={() => {
        dragging.current = false;
      }}
    >
      <SliderPrimitive.Root
        value={[value]}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
        onValueChange={(next) => onChange(Array.isArray(next) ? next[0] : next)}
        className="pointer-events-none absolute inset-0 opacity-0"
      >
        <SliderPrimitive.Control className="h-full w-full">
          <SliderPrimitive.Track className="block h-full w-full">
            <SliderPrimitive.Indicator />
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            inputRef={thumb}
            getAriaLabel={() => label}
            getAriaValueText={() => formatValue(value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            className="block size-12 outline-none"
          />
        </SliderPrimitive.Control>
      </SliderPrimitive.Root>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 bg-primary/10"
        style={{ width: fill }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-3 w-px bg-primary/60"
        style={{ left: handle }}
      />
      <span
        aria-hidden="true"
        className="pointer-events-none relative min-w-0 text-muted-foreground"
      >
        {label}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none relative shrink-0 font-medium tabular-nums"
      >
        {formatValue(value)}
      </span>
    </div>
  );
}

export type { SliderComfortableProps };
