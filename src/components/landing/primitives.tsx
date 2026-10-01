import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { dot, micro } from './styles';

export function ArrowIcon({ size = 16 }: { size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function Brand({ className }: { className?: string }) {
  return (
    <Link
      href="#inicio"
      aria-label="Paragan — início"
      className={cn('inline-flex min-h-11 items-center py-1', className)}
    >
      <Image
        src="/brand-naming.svg"
        width={123}
        height={36}
        alt="Paragan"
        priority
        className="h-8 w-auto"
      />
    </Link>
  );
}

export function ActionLink({
  children,
  href = '#contato',
  secondary = false,
  className,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <Button
      asChild
      variant={secondary ? 'secondary' : 'primary'}
      size="lg"
      className={cn(
        'min-h-11 rounded-md px-5 py-3 text-base font-medium motion-reduce:transition-none',
        className,
      )}
    >
      <Link href={href}>
        {children}
        <ArrowIcon size={15} />
      </Link>
    </Button>
  );
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        micro,
        'relative flex min-h-14 items-center gap-3 border-b border-border px-5 py-4 text-muted-foreground before:absolute before:-top-0.5 before:-left-0.5 before:size-1 before:bg-brand after:absolute after:-top-0.5 after:-right-0.5 after:size-1 after:bg-brand md:px-8',
      )}
    >
      <span className="text-brand">[ {number} / 10 ]</span>
      <span>{children}</span>
      <span className="ml-auto hidden sm:block" aria-hidden="true">
        PARAGAN / INFRASTRUCTURE
      </span>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  muted,
  description,
  align = 'left',
}: {
  eyebrow?: string;
  title: string;
  muted?: string;
  description?: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center')}>
      {eyebrow && (
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium">
          <span className={dot} aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="text-4xl leading-tight font-normal tracking-tighter text-balance md:text-5xl xl:text-6xl">
        {title}
        {muted && (
          <>
            <br />
            <span className="text-muted-foreground">{muted}</span>
          </>
        )}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export function ArtPlaceholder({
  width,
  height,
  label,
  dark = true,
  priority = false,
  src,
  className,
}: {
  width: number;
  height: number;
  label: string;
  dark?: boolean;
  priority?: boolean;
  src?: string;
  className?: string;
}) {
  return (
    <figure
      className={cn('m-0 overflow-hidden rounded-lg border border-border bg-muted', className)}
    >
      {/* Placeholder temporário global. O briefing de composição e a direção da futura
        arte/print/Lottie ficam imediatamente antes de cada uso deste componente. */}
      <Image
        src={
          src ??
          `https://placehold.co/${width}x${height}/${dark ? '14241f/779589' : 'edf2ee/7d9285'}.png?font=releway&text=${encodeURIComponent(label)}`
        }
        width={width}
        height={height}
        alt={src ? label : `Espaço reservado: ${label}`}
        unoptimized={!src}
        preload={priority}
        sizes="(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 1120px"
        className="h-auto w-full"
      />
      <figcaption
        className={cn(
          micro,
          'flex flex-wrap items-center gap-2 border-t border-border px-3 py-2.5 text-muted-foreground',
        )}
      >
        <span className={dot} aria-hidden="true" />
        DIREÇÃO VISUAL <span aria-hidden="true">/</span> {label}
      </figcaption>
    </figure>
  );
}
