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
        pageType="ContactPage"
      />
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
