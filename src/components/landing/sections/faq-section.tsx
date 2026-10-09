import { AccordionGroup, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { SectionLabel, SectionHeading, ActionLink } from '../primitives';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('structure').faq;

export function FaqSection() {
  return <section id="perguntas" className={cn(frame, section)}>
    <SectionLabel number={formatIndex(presentation.sections.questions)}>{copy.title}</SectionLabel>
    <div className="grid md:grid-cols-12">
      <div className="p-6 md:col-span-4 md:border-r md:border-border md:p-8">
        <div className="sticky top-47"><SectionHeading eyebrow={copy.title} title={copy.title} description={copy.description} /></div>
      </div>
      <div className="min-w-0 border-t border-border md:col-span-8 md:border-t-0">
        <AccordionGroup type="single" defaultValue="question-0" className="grid w-full content-start gap-0 rounded-none border-0 p-0 [&>div]:rounded-none">
          {copy.items.map((item, index) => <AccordionItem key={item.question} value={`question-${index}`} index={index} className="overflow-hidden rounded-none border-0 border-b border-border bg-transparent p-0">
            <AccordionTrigger className="min-h-16 rounded-none border-0 px-6 py-4">
              <span className="flex items-baseline gap-3.5 text-left text-sm leading-relaxed font-medium md:gap-5"><span className={cn(micro, 'shrink-0 text-accent-1')}>{formatIndex(index + 1)}</span>{item.question}</span>
            </AccordionTrigger>
            <AccordionContent className="border-t border-border p-0 [&>div]:p-0"><div className="grid gap-3 px-6 pt-4 pb-6 text-sm leading-7 text-foreground-2"><p>{item.answer}</p><p className="text-muted-foreground">{item.condition}</p></div></AccordionContent>
          </AccordionItem>)}
        </AccordionGroup>
        <div className="p-6 md:p-8"><ActionLink origin="perguntas" secondary>{copy.cta}</ActionLink></div>
      </div>
    </div>
  </section>;
}
