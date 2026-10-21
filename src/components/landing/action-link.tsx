'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowUpRight } from '@hugeicons/core-free-icons';
import { HugeiconsIcon } from '@hugeicons/react';
import { Button } from '@/components/ui/button';
import { destinations } from '@/config/site';
import { cn } from '@/lib/utils';

// Compose the slotted Link on the client, rather than passing a deferred
// server child into Button's isValidElement check across the RSC boundary.
export function ActionLink({
  children,
  href = destinations.contact,
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
        <HugeiconsIcon icon={ArrowUpRight} size={15} aria-hidden="true" />
      </Link>
    </Button>
  );
}
