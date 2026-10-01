'use client';

import { Children, useRef, type ReactNode } from 'react';
import { useFluidHover, useRegisterFluidHoverItem } from '@/hooks/use-fluid-hover';
import { FluidHoverHighlight } from '@/components/fluid-hover-highlight';
import { cn } from '@/lib/utils';

function FluidItem({
  children,
  index,
  register,
}: {
  children: ReactNode;
  index: number;
  register: ReturnType<typeof useFluidHover>['registerItem'];
}) {
  const ref = useRef<HTMLDivElement>(null);
  useRegisterFluidHoverItem(register, index, ref);
  return (
    <div ref={ref} className="relative z-10 min-w-0">
      {children}
    </div>
  );
}

export function FluidGroup({
  children,
  className,
  axis = 'xy',
}: {
  children: ReactNode;
  className?: string;
  axis?: 'x' | 'y' | 'xy';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hover = useFluidHover(ref, { axis, gapClick: false });
  return (
    <div
      ref={ref}
      className={cn('relative isolate', className)}
      {...hover.handlers}
      onFocusCapture={(event) => {
        const items = Array.from(event.currentTarget.children).filter((item) =>
          item.classList.contains('z-10'),
        );
        const index = items.findIndex((item) => item.contains(event.target));
        if (index >= 0) hover.setActiveIndex(index);
      }}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) hover.setActiveIndex(null);
      }}
    >
      <FluidHoverHighlight hover={hover} className="rounded-lg" />
      {Children.toArray(children).map((child, index) => (
        <FluidItem key={index} index={index} register={hover.registerItem}>
          {child}
        </FluidItem>
      ))}
    </div>
  );
}
