import Link from 'next/link';
import type { ReactNode } from 'react';
import { t } from '@/i18n';
import { SiteHeader } from '../site-header';
import { SiteFooter } from '../site-footer';

const contentAnchor = '#conteudo';

/** Owns the public landmarks; do not wrap in a second marketing shell. */
export function InstitutionalShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div aria-hidden="true" className="stripes landing-side-stripes left-0" />
      <div aria-hidden="true" className="stripes landing-side-stripes right-0" />
      <Link
        href={contentAnchor}
        className="fixed -top-20 left-4 z-100 rounded-lg bg-foreground px-5 py-3.5 text-background focus:top-3"
      >
        {t('accessibility.skipContent')}
      </Link>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
