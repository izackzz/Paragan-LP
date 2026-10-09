import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('reliability');

export function ScaleSection() {
  return (
    <section id="escala" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.reliability)}>
        {copy.label}
      </SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-47 flex flex-col justify-start gap-6">
            <SectionHeading title={copy.heading.primary} muted={copy.heading.secondary} />
            <p className="text-sm leading-relaxed text-muted-foreground">{copy.description}</p>
          </div>
        </div>
        <div className="bg-card p-6 md:col-span-2 md:p-10">
          <ArtPlaceholder
            width={1200}
            height={700}
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
