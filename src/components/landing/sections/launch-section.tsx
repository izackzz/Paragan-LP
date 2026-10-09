import { SectionLabel, SectionHeading } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding, cardTitle, cardDescription } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('onboarding');
const steps = Object.entries(copy.steps);

export function LaunchSection() {
  return (
    <section id="implantacao" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.onboarding)}>
        {copy.label}
      </SectionLabel>
      <Reveal>
        <div className={cn(padding, 'flex flex-col justify-start')}>
          <SectionHeading
            eyebrow={copy.heading.eyebrow}
            title={copy.heading.primary}
            muted={copy.heading.secondary}
            description={copy.heading.description}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([id, { title, description }], index) => (
            <div
              key={id}
              className="min-w-0 border-t border-border p-6 md:p-8 md:odd:border-r xl:border-r xl:last:border-r-0"
            >
              <span className="mb-7 block font-mono text-3xl tracking-tighter text-brand">
                {formatIndex(index + 1)}
              </span>
              <h3 className={cardTitle}>{title}</h3>
              <p className={cardDescription}>{description}</p>
            </div>
          ))}
        </div>
        <p className="border-t border-border p-6 text-xs leading-relaxed text-muted-foreground md:p-8">
          {copy.note}
        </p>
      </Reveal>
    </section>
  );
}
