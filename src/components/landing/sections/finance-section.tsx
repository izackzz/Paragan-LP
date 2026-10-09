import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('ledger');

export function FinanceSection() {
  return (
    <section id="financeiro" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.ledger)}>{copy.label}</SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-47 flex flex-col justify-start gap-5">
            <SectionHeading title={copy.heading.primary} muted={copy.heading.secondary} />
            <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
            <ActionLink secondary>{t('actions.controls')}</ActionLink>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-card p-6 md:col-span-2 md:p-10">
          <p className={cn(micro, 'mb-6 text-muted-foreground')}>{copy.illustrationLabel}</p>
          <ArtPlaceholder
            width={1200}
            height={800}
            label={copy.illustration}
            className={cn('rounded-none border-0')}
          />
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
