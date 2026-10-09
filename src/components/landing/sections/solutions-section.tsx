import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('audience');
const solutions = Object.entries(copy.items);

export function SolutionsSection() {
  return (
    <section id="solucoes" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.audience)}>{copy.label}</SectionLabel>
      <div className={cn(padding, 'flex flex-col justify-start')}>
        <SectionHeading
          eyebrow={copy.heading.eyebrow}
          title={copy.heading.primary}
          muted={copy.heading.secondary}
        />
      </div>
      <Reveal>
        {solutions.map(([id, solution], index) => (
          <div key={id} className="grid border-t border-border md:grid-cols-3">
            <div
              className={cn(
                'flex min-w-0 flex-col justify-center bg-card p-6 md:col-span-2 md:p-10',
                index % 2 === 1 && 'md:order-2',
              )}
            >
              <ArtPlaceholder
                width={1200}
                height={640}
                label={solution.image}
                className={cn('rounded-none border-0')}
              />
            </div>
            <div
              className={cn(
                'flex flex-col items-start justify-end gap-4 border-t border-border p-6 md:border-t-0 md:border-l md:p-8',
                index % 2 === 1 && 'md:order-1 md:border-r md:border-l-0',
              )}
            >
              <h3 className="text-base font-medium">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <ActionLink secondary className="mt-3 text-sm">
                {solution.cta}
              </ActionLink>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
