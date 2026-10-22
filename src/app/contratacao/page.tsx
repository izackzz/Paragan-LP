import Link from 'next/link';
import {
  InstitutionalShell,
  PageHero,
  PageFaqSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import {
  ContractingDeploymentSection,
  ContractingScopeSection,
} from '@/components/landing/pages/contratacao/contracting-sections';
import { ResponsibilitiesSection } from '@/components/landing/pages/contratacao/responsibilities-section';
import { PageStructuredData } from '@/components/landing/page-structured-data';
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
  calculadora: '/calculadora',
  plataforma: '/plataforma',
  integracoes: '/integracoes',
  migracao: '/solucoes#migracao',
  implantacao: `${pathname}#${sections.deployment.id}`,
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

export default function ContratacaoPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={copy.metadata.title}
        description={copy.metadata.description}
        pathname={pathname}
        homeLabel={copy.breadcrumb.home}
        pageLabel={copy.breadcrumb.current}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData).replace(/</g, '\\u003c'),
        }}
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
        {...copy.hero}
        links={[
          { label: copy.hero.primaryAction, href: destinations.contato },
          { label: copy.hero.secondaryAction, href: destinations.implantacao, secondary: true },
        ]}
      />
      <ContractingScopeSection
        {...sections.scope}
        {...copy.scope}
        calculatorHref={destinations.calculadora}
      />
      <ContractingDeploymentSection {...sections.deployment} {...copy.deployment} />
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
