'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Only fade edges with undisplayed content; the scrollbar stays unobstructed. */
export function ScrollFade({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [edges, setEdges] = useState({ start: false, end: false });
  useEffect(() => {
    const root = ref.current;
    const viewport = root?.querySelector<HTMLElement>('[data-slot="scroll-area-viewport"]');
    if (!viewport) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const start = viewport.scrollLeft > 1;
        const end = viewport.scrollWidth - viewport.clientWidth - viewport.scrollLeft > 1;
        setEdges((previous) =>
          previous.start === start && previous.end === end ? previous : { start, end },
        );
      });
    };
    const observer = new ResizeObserver(update);
    observer.observe(viewport);
    if (viewport.firstElementChild) observer.observe(viewport.firstElementChild);
    viewport.querySelectorAll('pre, table').forEach((element) => observer.observe(element));
    viewport.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      viewport.removeEventListener('scroll', update);
    };
  }, []);
  return (
    <div
      ref={ref}
      data-slot="scroll-fade"
      data-start={edges.start || undefined}
      data-end={edges.end || undefined}
      className={cn('relative w-full min-w-0', className)}
    >
      {children}
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 bottom-3 left-0 z-20 w-5 bg-linear-to-r from-(--scroll-fade-background) to-transparent transition-opacity duration-200 motion-reduce:transition-none',
          edges.start ? 'opacity-100' : 'opacity-0',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'pointer-events-none absolute inset-y-0 right-0 bottom-3 z-20 w-5 bg-linear-to-l from-(--scroll-fade-background) to-transparent transition-opacity duration-200 motion-reduce:transition-none',
          edges.end ? 'opacity-100' : 'opacity-0',
        )}
      />
    </div>
  );
}
