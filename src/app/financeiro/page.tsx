import {
  InstitutionalShell,
  InstitutionalSection,
  PageHero,
  ModulePairsSection,
  EditorialSection,
  StepsSection,
  PageFaqSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import { ArtPlaceholder, SectionHeading } from '@/components/landing/primitives';
import { Reveal } from '@/components/landing/reveal';
import { cardTitle, cardDescription } from '@/components/landing/styles';
import { illustrationAssets } from '@/config/illustrations';
import { financeiroCopy as copy } from '@/i18n/messages/pages/financeiro';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/financeiro', ...copy.metadata });

const total = 6;
const composition = illustrationAssets.financialComposition;

export default function FinanceiroPage() {
  return (
    <InstitutionalShell>
      <PageHero
        eyebrow={copy.hero.eyebrow}
        title={copy.hero.title}
        muted={copy.hero.muted}
        description={copy.hero.description}
        links={[
          { label: copy.hero.primaryAction, href: '/contato' },
          { label: copy.hero.secondaryAction, href: '#composicao', secondary: true },
        ]}
      />

      <InstitutionalSection id="composicao" label={copy.overview.label} index={1} total={total}>
        <Reveal>
          <div className="grid md:grid-cols-3">
            <div className="min-w-0 border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
              <div className="sticky top-47">
                <SectionHeading
                  {...copy.overview.heading}
                  description={copy.overview.description}
                />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-center bg-card p-6 md:col-span-2 md:p-10">
              <ArtPlaceholder
                src={composition.src}
                width={composition.width}
                height={composition.height}
                label={copy.overview.imageAlt}
                className="rounded-md border bg-background/90"
              />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                {copy.overview.caption}
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4">
            {copy.overview.items.map((item) => (
              <div
                key={item.id}
                className="min-w-0 border-t border-border p-6 md:p-8 md:odd:border-r xl:border-r xl:last:border-r-0"
              >
                <h3 className={cardTitle}>{item.title}</h3>
                <p className={cardDescription}>{item.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </InstitutionalSection>

      <ModulePairsSection
        id="condicoes-comerciais"
        label={copy.commercial.label}
        index={2}
        total={total}
        heading={copy.commercial.heading}
        items={[
          {
            id: 'taxas-por-seller',
            ...copy.commercial.fees,
            image: {
              asset: 'policies',
              alt: copy.commercial.fees.imageAlt,
            },
            link: {
              label: copy.commercial.fees.link,
              href: '/plataforma#multiadquirencia',
            },
          },
          {
            id: 'comissoes',
            ...copy.commercial.commissions,
            image: {
              asset: 'controlCommercial',
              alt: copy.commercial.commissions.imageAlt,
            },
            link: { label: copy.commercial.commissions.link, href: '/contato' },
          },
        ]}
      />

      <EditorialSection
        id="saldos-e-reservas"
        label={copy.balances.label}
        index={3}
        total={total}
        heading={copy.balances.heading}
        items={[
          {
            id: 'liberacao-do-saldo',
            title: copy.balances.title,
            description: copy.balances.description,
            imageSide: 'right',
            image: {
              asset: 'finance',
              alt: copy.balances.imageAlt,
            },
            points: copy.balances.points,
          },
        ]}
      />

      <StepsSection
        id="extrato-e-saques"
        label={copy.movement.label}
        index={4}
        total={total}
        heading={copy.movement.heading}
        items={copy.movement.items}
        note={copy.movement.note}
      />

      <PageFaqSection
        id="perguntas"
        label={copy.faq.label}
        index={5}
        total={total}
        heading={copy.faq.heading}
        items={copy.faq.items}
      />

      <RelatedLinksSection
        id="proximos-passos"
        label={copy.related.label}
        index={6}
        total={total}
        heading={copy.related.heading}
        items={[
          { id: 'checkout', ...copy.related.checkout, href: '/checkout' },
          { id: 'integracoes', ...copy.related.integrations, href: '/integracoes' },
          { id: 'contratacao', ...copy.related.contracting, href: '/contratacao' },
          { id: 'contato', ...copy.related.contact, href: '/contato' },
        ]}
      />
    </InstitutionalShell>
  );
}
