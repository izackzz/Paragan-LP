import * as React from 'react';
import { Input as InputPrimitive } from '@base-ui/react/input';
import { cn } from '@/lib/utils';

function Input({
  className,
  type,
  dense,
  ...props
}: React.ComponentProps<'input'> & { dense?: boolean }) {
  return (
    <InputPrimitive
      type={type}
      data-slot="input"
      className={cn(
        'flex h-9 w-full min-w-0 rounded-input border border-accent bg-muted/40 text-sm transition-all outline-none placeholder:text-muted-foreground focus:z-5 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-destructive/20',
        dense ? 'px-5 py-5' : 'px-3.5 py-1.5',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
