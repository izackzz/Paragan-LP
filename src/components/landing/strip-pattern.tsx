import { cn } from '@/lib/utils';

const tones = {
  brand:
    'bg-[repeating-linear-gradient(-45deg,color-mix(in_oklab,var(--accent-1)_18%,transparent)_0_1px,transparent_1px_10px)]',
  warm: 'bg-[repeating-linear-gradient(-45deg,color-mix(in_oklab,var(--accent-2)_14%,transparent)_0_1px,transparent_1px_12px)]',
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
