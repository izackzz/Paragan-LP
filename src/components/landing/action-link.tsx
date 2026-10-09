'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { HugeiconsIcon } from '@hugeicons/react';
import { ArrowUpRight } from '@hugeicons/core-free-icons';
import { cn } from '@/lib/utils';
import {
  destinations,
  type ContactOrigin,
  type ContactScenario,
  type ContactSubject,
} from '@/config/site';
import { ContactIntentLink } from './contact-intent-link';

export function ActionLink({
  children,
  href = destinations.contact,
  secondary = false,
  className,
  scenario,
  origin,
  subject,
}: {
  children: ReactNode;
  href?: string;
  secondary?: boolean;
  className?: string;
  scenario?: ContactScenario;
  origin?: ContactOrigin;
  subject?: ContactSubject;
}) {
  const contents = (
    <>
      {children}
      <HugeiconsIcon icon={ArrowUpRight} size={15} aria-hidden="true" />
    </>
  );
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
      {scenario || origin || subject ? (
        <ContactIntentLink scenario={scenario} origin={origin} subject={subject}>
          {contents}
        </ContactIntentLink>
      ) : (
        <Link href={href}>{contents}</Link>
      )}
    </Button>
  );
}
