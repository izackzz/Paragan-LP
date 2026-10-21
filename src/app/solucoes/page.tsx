import {
  EditorialSection,
  InstitutionalShell,
  PageFaqSection,
  PageHero,
  RelatedLinksSection,
  StepsSection,
} from '@/components/landing/institutional';
import type { PageImage } from '@/components/landing/institutional/types';
import { solucoesCopy as copy } from '@/i18n/messages/pages/solucoes';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/solucoes', ...copy.metadata });

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

export default function SolucoesPage() {
  return (
    <InstitutionalShell>
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
      {scenarios.map(({ id, content, asset, href }, index) => (
        <EditorialSection
          key={id}
          id={id}
          index={index + 1}
          total={total}
          label={content.label}
          heading={content.heading}
          items={[
            {
              id: `${id}-cenario`,
              title: content.title,
              description: content.description,
              points: content.points,
              imageSide: index % 2 === 0 ? 'left' : 'right',
              image: { asset, alt: content.imageAlt, caption: content.caption },
              link: { label: content.linkLabel, href },
            },
          ]}
        />
      ))}
      <StepsSection id="implantacao" index={5} total={total} {...copy.deployment} />
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
