import Link from 'next/link';
import {
  InstitutionalShell,
  PageFaqSection,
  PageHero,
  RelatedLinksSection,
  StepsSection,
} from '@/components/landing/institutional';
import { SolutionScenarioSection } from '@/components/landing/pages/solucoes/solution-scenario-section';
import { PageStructuredData } from '@/components/landing/page-structured-data';
import { formatIndex } from '@/i18n';
import type { PageImage } from '@/components/landing/institutional/types';
import { solucoesCopy as copy } from '@/i18n/messages/pages/solucoes';
import { pageMetadata } from '@/lib/page-metadata';

const pathname = '/solucoes';

export const metadata = pageMetadata({ pathname, ...copy.metadata });

const total = 7;
const scenarios = [
  { id: 'lancamento', content: copy.launch, asset: 'launch', href: '/plataforma' },
  {
    id: 'migracao',
    content: copy.migration,
    asset: 'migration',
    href: '/contratacao#implantacao',
  },
  { id: 'plataformas', content: copy.platforms, asset: 'seller', href: '/integracoes' },
  { id: 'projeto', content: copy.project, asset: 'projectPlanning', href: '/contato' },
] as const satisfies readonly {
  id: string;
  content: typeof copy.launch | typeof copy.migration | typeof copy.platforms | typeof copy.project;
  asset: PageImage['asset'];
  href: string;
}[];

const relatedDestinations = {
  plataforma: '/plataforma',
  integracoes: '/integracoes',
  financeiro: '/financeiro',
  digital: '/checkout#entrega-digital',
  implantacao: '/contratacao#implantacao',
  contato: '/contato',
} as const;

const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: copy.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

export default function SolucoesPage() {
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
              className="inline-flex min-h-11 min-w-11 items-center justify-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand"
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
          { label: copy.hero.primaryAction, href: '/contato' },
          {
            label: copy.hero.secondaryAction,
            href: '/solucoes#lancamento',
            secondary: true,
          },
        ]}
      />
      <nav
        aria-label={copy.scenarioNavigation.label}
        className="landing-frame border-b border-border"
      >
        <ol className="grid grid-cols-2 md:grid-cols-4">
          {scenarios.map(({ id, content }, index) => (
            <li
              key={id}
              className={
                index === 0 || index === 2
                  ? 'border-r border-border'
                  : index === 1
                    ? 'md:border-r md:border-border'
                    : undefined
              }
            >
              <Link
                href={`#${id}`}
                className="flex min-h-11 items-center gap-2 px-3 py-2 text-sm text-foreground-2 underline-offset-4 hover:text-foreground hover:underline focus-visible:outline-2 focus-visible:outline-brand md:px-5"
              >
                <span className="font-mono text-foreground-2">{formatIndex(index + 1)}</span>
                <span>{content.label}</span>
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      {scenarios.map(({ id, content, asset, href }, index) => (
        <SolutionScenarioSection
          key={id}
          id={id}
          index={index + 1}
          total={total}
          label={content.label}
          heading={content.heading}
          title={content.title}
          description={content.description}
          points={content.points}
          image={{ asset, alt: content.imageAlt, caption: content.caption }}
          imageSide={index % 2 === 0 ? 'left' : 'right'}
          link={{ label: content.linkLabel, href }}
        />
      ))}
      <StepsSection id="implantacao" index={5} total={total} {...copy.deployment} />
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
