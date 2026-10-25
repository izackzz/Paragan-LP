import {
  InstitutionalShell,
  PageHero,
  StepsSection,
  PageFaqSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import {
  IntegrationsAccessSection,
  IntegrationsEditorialSection,
} from '@/components/landing/pages/integracoes/integrations-editorial';
import { PageStructuredData } from '@/components/landing/page-structured-data';
import { integracoesCopy as copy } from '@/i18n/messages/pages/integracoes';
import { pageMetadata } from '@/lib/page-metadata';

const pathname = '/integracoes';
const total = 7;
const destinations = {
  api: `${pathname}#api`,
  acquiring: '/plataforma#multiadquirencia',
  checkout: '/checkout',
  contracting: '/contratacao',
  contact: '/contato',
} as const;

const relatedDestinations = {
  plataforma: destinations.acquiring,
  checkout: destinations.checkout,
  contratacao: destinations.contracting,
  contato: destinations.contact,
} as const;

export const metadata = pageMetadata({ pathname, ...copy.metadata });

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: copy.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function IntegracoesPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={copy.metadata.title}
        description={copy.metadata.description}
        pathname={pathname}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c'),
        }}
      />
      <PageHero
        {...copy.hero}
        links={[
          { label: copy.hero.primaryAction, href: destinations.contact },
          { label: copy.hero.secondaryAction, href: destinations.api, secondary: true },
        ]}
      />
      <IntegrationsEditorialSection
        id="ecossistema"
        index={1}
        total={total}
        label={copy.ecosystem.label}
        heading={copy.ecosystem.heading}
        items={copy.ecosystem.items.map((item) => ({
          ...item,
          image: {
            ...item.image,
            asset: item.id === 'sistemas' ? 'architecture' : 'acquiring',
          },
          link:
            'linkLabel' in item
              ? { label: item.linkLabel, href: destinations.acquiring }
              : undefined,
        }))}
      />
      <IntegrationsAccessSection id="api" index={2} total={total} {...copy.api} />
      <IntegrationsEditorialSection id="webhooks" index={3} total={total} {...copy.webhooks} />
      <IntegrationsEditorialSection
        id="apps"
        index={4}
        total={total}
        label={copy.apps.label}
        heading={copy.apps.heading}
        items={copy.apps.items.map((item) => ({
          ...item,
          image: { ...item.image, asset: 'architecture' },
          link: { label: item.linkLabel, href: destinations.checkout },
        }))}
      />
      <StepsSection id="preparacao" index={5} total={total} {...copy.validation} />
      <PageFaqSection
        id="perguntas"
        index={6}
        total={total}
        accessibilityMode="readable"
        {...copy.faq}
      />
      <RelatedLinksSection
        id="proximos-passos"
        index={7}
        total={total}
        label={copy.related.label}
        heading={copy.related.heading}
        items={copy.related.items.map((item) => ({
          ...item,
          href: relatedDestinations[item.id],
        }))}
      />
    </InstitutionalShell>
  );
}
