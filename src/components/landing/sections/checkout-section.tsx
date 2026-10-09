import { SectionLabel, ArtPlaceholder, ActionLink } from '../primitives';
import { frame, section, padding, micro, cardTitle, cardDescription } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { destinations, presentation } from '@/config/site';

const copy = content('sales');
const checkoutSteps = Object.entries(copy.steps);

export function CheckoutSection() {
  return (
    <section id="checkout" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.sales)}>{copy.label}</SectionLabel>
      <div className={padding}>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium">
              {copy.heading.eyebrow}
            </p>
            <h2 className="text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
              {copy.heading.primary}
              <br />
              <span className="text-foreground-3">{copy.heading.secondary}</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              {copy.heading.description}
            </p>
          </div>
          <ActionLink href={destinations.contact} secondary>
            {t('actions.checkout')}
          </ActionLink>
        </div>

        <div className="relative isolate mt-12 overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative z-10 flex justify-between gap-5 border-b border-border bg-background/70 p-4 text-foreground-3 backdrop-blur-sm md:px-6 md:py-5">
            <span className={micro}>{copy.journeyLabel}</span>
            <span className={cn(micro, 'hidden sm:block')}>{copy.devicesLabel}</span>
          </div>
          {/* PRINT CHECKOUT (1440×760): screenshot Catalyst desktop em primeiro plano,
              recorte mobile à direita integrado na própria arte, produto fictício, oferta,
              cupom, bump, métodos aptos e total claramente visíveis. Fundo carvão com
              acentos Paragan; sem PAN, contatos ou logos de processadores. Não usar stock. */}
          <div className="relative z-10 [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
            <ArtPlaceholder width={1440} height={760} className="p-1.5" label={copy.illustration} />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {checkoutSteps.map(([id, step], index) => (
          <div
            key={id}
            className="min-w-0 border-t border-border p-6 md:border-r md:p-8 md:last:border-r-0"
          >
            <p className={cn(micro, 'mb-4 text-accent-2')}>
              {t('accessibility.itemIndex', {
                number: formatIndex(index + 1),
                label: step.eyebrow,
              })}
            </p>
            <h3 className={cardTitle}>{step.title}</h3>
            <p className={cardDescription}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
