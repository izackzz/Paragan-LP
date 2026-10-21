import {
  InstitutionalShell,
  PageHero,
  EditorialSection,
  ModulePairsSection,
  StepsSection,
  PageFaqSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
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

export default function IntegracoesPage() {
  return (
    <InstitutionalShell>
      <PageHero
        {...copy.hero}
        links={[
          { label: copy.hero.primaryAction, href: destinations.contact },
          { label: copy.hero.secondaryAction, href: destinations.api, secondary: true },
        ]}
      />
      <EditorialSection
        id="ecossistema"
        index={1}
        total={total}
        label={copy.ecosystem.label}
        heading={copy.ecosystem.heading}
        items={copy.ecosystem.items.map((item) => ({
          ...item,
          link:
            'linkLabel' in item
              ? { label: item.linkLabel, href: destinations.acquiring }
              : undefined,
        }))}
      />
      <ModulePairsSection id="api" index={2} total={total} {...copy.api} />
      <EditorialSection id="webhooks" index={3} total={total} {...copy.webhooks} />
      <EditorialSection
        id="apps"
        index={4}
        total={total}
        label={copy.apps.label}
        heading={copy.apps.heading}
        items={copy.apps.items.map((item) => ({
          ...item,
          link: { label: item.linkLabel, href: destinations.checkout },
        }))}
      />
      <StepsSection id="preparacao" index={5} total={total} {...copy.validation} />
      <PageFaqSection id="perguntas" index={6} total={total} {...copy.faq} />
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
