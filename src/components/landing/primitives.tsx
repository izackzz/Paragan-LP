import Link from 'next/link';
import Image from 'next/image';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Frame } from '@/components/ui/frame';
import { micro } from './styles';
import { ArrowUpRight } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';

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
        <HugeiconsIcon icon={ArrowUpRight} size={15} />
      </Link>
    </Button>
  );
}

export function SectionLabel({ number, children }: { number: string; children: ReactNode }) {
  return (
    <div
      className={cn(
        micro,
        'dots sticky top-20 z-20 flex min-h-14 items-center gap-3 border-b border-border bg-background/90 px-5 py-4 text-muted-foreground backdrop-blur-xs md:px-8',
      )}
    >
      <span className="text-brand">[ {number} / 10 ]</span>
      <span>{children}</span>
      <span className="ml-auto hidden sm:block" aria-hidden="true">
        PARAGAN / WHITE LABEL
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
  description?: ReactNode;
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'left' && 'mr-auto text-left',
        align === 'center' && 'mx-auto text-center',
        align === 'right' && 'ml-auto text-right',
      )}
    >
      {eyebrow && (
        <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-xs font-medium">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
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
            'mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base',
          align === 'left' && 'mr-auto',
          align === 'center' && 'mx-auto',
          align === 'right' && 'ml-auto',
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
  frame = false,
  src,
  className,
  frameClassName,
}: {
  width: number;
  height: number;
  label: string;
  dark?: boolean;
  priority?: boolean;
  frame?: boolean;
  src?: string;
  className?: string;
  frameClassName?: string;
}) {
  const image = (
    <Image
      src={
        src ??
        `https://placehold.co/${width}x${height}/${dark ? '171717/eeeeee' : 'edf2ee/7d9285'}.png?font=poppins&text=${encodeURIComponent(label)}`
      }
      width={width}
      height={height}
      alt={src ? label : `Espaço reservado: ${label}`}
      unoptimized={!src}
      preload={priority}
      sizes="(max-width: 768px) 92vw, (max-width: 1280px) 80vw, 1120px"
      className="h-auto w-full rounded-sm"
    />
  );

  return (
    <figure className={cn('m-0 overflow-hidden rounded-sm', className)}>
      {/* Placeholder temporário global. O briefing de composição e a direção da futura
        arte/print/Lottie ficam imediatamente antes de cada uso deste componente. */}
      {frame ? <Frame className={cn(frameClassName)}>{image}</Frame> : image}
    </figure>
  );
}
