import { cn } from '@/lib/utils';

// Same primary/active treatment as ContactSection's interest selector; the
// Button variant owns the existing shiny-01 animated border and shine.
export function selectionStyle(active: boolean) {
  return cn(
    'min-h-11 min-w-0 rounded-md border-2 font-display text-xs font-normal whitespace-normal shadow-none focus-visible:z-10',
    active
      ? 'border-primary text-primary-foreground shadow-[inset_0_1ex_2rem_2px_color-mix(in_srgb,var(--primary)_50%,transparent)]!'
      : 'border-accent bg-muted/40',
  );
}
