import { cn } from '@/lib/utils';

const tones = {
  brand: 'strip-pattern-brand',
  warm: 'strip-pattern-warm',
};

export function StripPattern({
  className,
  tone = 'brand',
}: {
  className?: string;
  tone?: keyof typeof tones;
}) {
  return (
    <span
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0', tones[tone], className)}
    />
  );
}
