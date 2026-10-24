import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { destinations, presentation } from '@/config/site';
import { illustrationAssets } from '@/config/illustrations';

const copy = content('ledger');

export function FinanceSection() {
  return (
    <section id="financeiro" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.ledger)}>{copy.label}</SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="grid md:col-span-3 md:grid-cols-5">
          <div className="border-b border-border p-6 md:col-span-2 md:border-r md:border-b-0 md:p-8">
            <div className="sticky top-47 flex flex-col justify-start gap-5">
              <SectionHeading title={copy.heading.primary} muted={copy.heading.secondary} />
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
              <ActionLink href={destinations.finance} secondary>
                {t('actions.controls')}
              </ActionLink>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-card p-6 md:col-span-3 md:p-10">
            <p className={cn(micro, 'mb-6 text-muted-foreground')}>{copy.illustrationLabel}</p>
            <ArtPlaceholder
              src={illustrationAssets.financialComposition.src}
              width={illustrationAssets.financialComposition.width}
              height={illustrationAssets.financialComposition.height}
              label={copy.illustration}
              className={cn('rounded-md border bg-background/90')}
            />
          </div>
        </div>
        {Object.entries(copy.items).map(([id, { title, description }]) => (
          <div
            key={id}
            className="flex flex-col gap-3 border-t border-border p-6 last:border-r-0 md:border-r md:p-8"
          >
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
