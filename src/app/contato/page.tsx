import Link from 'next/link';
import { InstitutionalShell, PageHero } from '@/components/landing/institutional';
import { ContactSection } from '@/components/landing/sections/contact-section';
import { PageStructuredData } from '@/components/landing/page-structured-data';
import { contatoCopy as copy } from '@/i18n/messages/pages/contato';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/contato', ...copy.metadata });

export default function ContatoPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={copy.metadata.title}
        description={copy.metadata.description}
        pathname="/contato"
        homeLabel={copy.breadcrumb.home}
        pageLabel={copy.breadcrumb.current}
        pageType="ContactPage"
      />
      <nav
        aria-label={copy.breadcrumb.label}
        className="landing-frame flex items-center border-b border-border px-5 py-2 text-sm text-foreground-2 md:px-7 xl:px-10"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link
              className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand"
              href="/"
            >
              {copy.breadcrumb.home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {copy.breadcrumb.current}
          </li>
        </ol>
      </nav>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        muted={copy.hero.muted}
        description={copy.hero.description}
        links={[{ label: copy.hero.primaryAction, href: '/contratacao', secondary: true }]}
      />
      <ContactSection index={1} total={1} variant="page" pageCopy={copy.form} />
    </InstitutionalShell>
  );
}
