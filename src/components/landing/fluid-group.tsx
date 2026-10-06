'use client';

import { Children, useRef, type ReactNode } from 'react';
import { useFluidHover, useRegisterFluidHoverItem } from '@/hooks/use-fluid-hover';
import { FluidHoverHighlight } from '@/components/fluid-hover-highlight';
import { cn } from '@/lib/utils';

function FluidItem({
  children,
  index,
  register,
  as = 'div',
}: {
  children: ReactNode;
  index: number;
  register: ReturnType<typeof useFluidHover>['registerItem'];
  as?: 'div' | 'li';
}) {
  const ref = useRef<HTMLElement | null>(null);
  const Item = as;
  useRegisterFluidHoverItem(register, index, ref);
  return (
    <Item
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      data-fluid-hover-wrapper="true"
      className={cn('relative z-10 min-w-0', as === 'li' && 'rounded-md')}
    >
      {children}
    </Item>
  );
}

export function FluidGroup({
  children,
  className,
  axis = 'xy',
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  axis?: 'x' | 'y' | 'xy';
  as?: 'div' | 'ul';
}) {
  const ref = useRef<HTMLElement | null>(null);
  const Container = as;
  const hover = useFluidHover(ref, { axis, gapClick: false });
  return (
    <Container
      ref={(node: HTMLElement | null) => {
        ref.current = node;
      }}
      role={as === 'ul' ? 'list' : undefined}
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
      {as === 'ul' ? (
        <li
          aria-hidden="true"
          role="presentation"
          className="pointer-events-none absolute inset-0 list-none"
        >
          <FluidHoverHighlight hover={hover} />
        </li>
      ) : (
        <FluidHoverHighlight hover={hover} />
      )}
      {Children.toArray(children).map((child, index) => (
        <FluidItem
          key={index}
          index={index}
          register={hover.registerItem}
          as={as === 'ul' ? 'li' : 'div'}
        >
          {child}
        </FluidItem>
      ))}
    </Container>
  );
}
