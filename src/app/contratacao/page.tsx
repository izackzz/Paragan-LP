import {
  InstitutionalShell,
  PageHero,
  ModulePairsSection,
  StepsSection,
  PageFaqSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import { ResponsibilitiesSection } from '@/components/landing/pages/contratacao/responsibilities-section';
import { contratacaoCopy as copy } from '@/i18n/messages/pages/contratacao';
import { pageMetadata } from '@/lib/page-metadata';

const pathname = '/contratacao';
const total = 5;
const sections = {
  scope: { id: 'escopo', index: 1, total },
  deployment: { id: 'implantacao', index: 2, total },
  responsibilities: { id: 'responsabilidades', index: 3, total },
  faq: { id: 'perguntas', index: 4, total },
  related: { id: 'proximos-passos', index: 5, total },
} as const;
const destinations = {
  contato: '/contato',
  plataforma: '/plataforma',
  integracoes: '/integracoes',
  migracao: '/solucoes#migracao',
  implantacao: `${pathname}#${sections.deployment.id}`,
} as const;

export const metadata = pageMetadata({ pathname, ...copy.metadata });

export default function ContratacaoPage() {
  return (
    <InstitutionalShell>
      <PageHero
        {...copy.hero}
        links={[
          { label: copy.hero.primaryAction, href: destinations.contato },
          { label: copy.hero.secondaryAction, href: destinations.implantacao, secondary: true },
        ]}
      />
      <ModulePairsSection {...sections.scope} {...copy.scope} />
      <StepsSection {...sections.deployment} {...copy.deployment} />
      <ResponsibilitiesSection {...sections.responsibilities} label={copy.responsibilities.label} />
      <PageFaqSection {...sections.faq} {...copy.faq} />
      <RelatedLinksSection
        {...sections.related}
        label={copy.related.label}
        heading={copy.related.heading}
        items={copy.related.items.map((item) => ({ ...item, href: destinations[item.id] }))}
      />
    </InstitutionalShell>
  );
}
