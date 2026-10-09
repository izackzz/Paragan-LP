import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('connectivity');

export function IntegrationsSection() {
  return (
    <section id="integracoes" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.connectivity)}>
        {copy.label}
      </SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-47 flex flex-col justify-start gap-8">
            <SectionHeading title={copy.heading.primary} muted={copy.heading.secondary} />
            <div className="flex flex-col items-start gap-6">
              <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
              <ActionLink secondary>{t('actions.integration')}</ActionLink>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-col justify-center bg-card p-6 md:col-span-2 md:p-10">
          <p className={cn(micro, 'mb-6 text-muted-foreground')}>{copy.illustrationLabel}</p>
          <ArtPlaceholder
            width={1200}
            height={720}
            label={copy.illustration}
            className={cn('rounded-none border-0')}
          />
        </div>
        <div className="border-t border-border bg-card p-6 md:col-span-2 md:p-10">
          <ArtPlaceholder
            width={1200}
            height={600}
            label={copy.eventsIllustration}
            className={cn('rounded-none border-0')}
          />
        </div>
        <div className="flex flex-col justify-end gap-4 border-t border-border p-6 md:border-l md:p-8">
          <h3 className="text-base font-medium">{copy.events.title}</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">{copy.events.description}</p>
          <p className="text-xs leading-relaxed text-muted-foreground">{copy.events.note}</p>
        </div>
      </Reveal>
    </section>
  );
}
