'use client';
import {
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { SectionLabel, SectionHeading } from '../primitives';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('questions');
const questions = Object.entries(copy.items);

export function FaqSection() {
  return (
    <section id="perguntas" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.questions)}>
        {copy.label}
      </SectionLabel>
      <div className="grid gap-0 md:grid-cols-2">
        <div className="relative isolate px-5 py-12 md:border-r md:border-border md:px-8 md:py-13 md:[&_h2]:text-3xl">
          <div className="sticky top-47 flex flex-col justify-start">
            <SectionHeading
              eyebrow={copy.heading.eyebrow}
              title={copy.heading.primary}
              muted={copy.heading.secondary}
              description={
                <>
                  {copy.heading.description}
                  <br />
                  {copy.heading.continuation}
                </>
              }
            />
          </div>
        </div>
        <AccordionGroup
          type="single"
          defaultValue={questions[0][0]}
          className="grid w-full max-w-full content-start gap-0 rounded-none border-0 p-0 [&>div]:rounded-none max-sm:border-t"
        >
          {questions.map(([id, { question, answer }], index) => (
            <AccordionItem
              key={id}
              value={id}
              index={index}
              className="overflow-hidden rounded-none border-0 border-b border-border bg-transparent p-0 last:border-b-0"
            >
              <AccordionTrigger className="min-h-16 rounded-none border-0 px-6 py-4">
                <span className="flex items-baseline gap-3.5 text-left text-sm leading-relaxed font-medium md:gap-5">
                  <span className={cn(micro, 'shrink-0 text-accent-1')}>
                    {formatIndex(index + 1)}
                  </span>
                  {question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="border-t border-border p-0 [&>div]:p-0">
                <p className="px-6 pt-4 pb-6 text-sm leading-7 text-foreground-2">{answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </div>
    </section>
  );
}
