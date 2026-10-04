import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@/lib/utils';

/** Outer radius follows the inner radius plus the border and the padded inset. */
export function Frame({
  children,
  className,
  shiny = false,
  ...props
}: ComponentPropsWithoutRef<'div'> & { shiny?: boolean }) {
  return (
    <div
      className={cn(
        'min-w-0 frame-outline border border-border p-1.5',
        shiny && 'frame-shiny',
        className,
      )}
      {...props}
    >
      <div className="overflow-hidden rounded-xl border">{children}</div>
    </div>
  );
}
