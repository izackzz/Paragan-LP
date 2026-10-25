'use client';

import { useId, useState, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { icons } from '@/lib/icon-map';
import { springs } from '@/lib/springs';
import { cn } from '@/lib/utils';

/** Keep closed regions mounted for stable ARIA targets and reversible height transitions. */
export function MobileMenuDisclosure({
  title,
  children,
  group = false,
}: {
  title: string;
  children: ReactNode;
  group?: boolean;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();
  const reducedMotion = useReducedMotion();
  const Chevron = icons['chevron-right'];
  return (
    <div
      className={cn(
        'min-w-0 rounded-xl border border-border',
        group ? 'bg-surface-2' : 'bg-surface-1',
      )}
    >
      <button
        id={`${id}-trigger`}
        type="button"
        aria-expanded={open}
        aria-controls={`${id}-panel`}
        onClick={() => setOpen(!open)}
        className={cn(
          'flex min-h-12 w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-ring',
          group
            ? 'text-sm font-medium text-foreground-2'
            : 'min-h-14 text-base font-medium text-foreground',
          open && 'bg-surface-3',
        )}
      >
        {title}
        <motion.span
          aria-hidden="true"
          animate={{ rotate: open ? 90 : 0 }}
          transition={reducedMotion ? { duration: 0 } : springs.moderate}
          className="shrink-0 text-foreground-3"
        >
          <Chevron size={18} />
        </motion.span>
      </button>
      <motion.div
        id={`${id}-panel`}
        role="region"
        aria-labelledby={`${id}-trigger`}
        aria-hidden={!open}
        inert={!open}
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={reducedMotion ? { duration: 0 } : { ...springs.slow, bounce: 0 }}
        className="overflow-hidden rounded-b-xl"
      >
        <div className={cn('min-w-0', group ? 'p-2' : 'p-3 pt-1')}>{children}</div>
      </motion.div>
    </div>
  );
}
