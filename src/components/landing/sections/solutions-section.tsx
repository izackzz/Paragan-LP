import { ActionLink } from '../primitives';
import { SectionContent, ContentModule } from '../section-content';
import { Reveal } from '../reveal';
import { micro } from '../styles';
import { content } from '@/i18n';
import { contactScenarios, presentation } from '@/config/site';

const copy = content('structure').scenarios;

export function SolutionsSection() {
  return <SectionContent id="solucoes" number={presentation.sections.audience} title={copy.title} description={copy.description}>
    <Reveal>
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {contactScenarios.map(id => {
          const item = copy.items[id];
          return <article id={`cenario-${id}`} key={id} className="flex min-w-0 scroll-mt-40 flex-col border-t border-border md:odd:border-r xl:border-r xl:last:border-r-0">
            <p className={`${micro} px-6 pt-6 text-accent-2 md:px-8`}>{item.label}</p>
            <ContentModule title={item.title} description={item.description} items={item.scope} />
            <div className="mt-auto flex flex-col items-start gap-5 p-6 pt-0 md:p-8 md:pt-0">
              <p className="text-sm leading-relaxed text-muted-foreground">{item.requirement}</p>
              <ActionLink scenario={id} origin="solucoes" secondary>{item.cta}</ActionLink>
            </div>
          </article>;
        })}
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {copy.roles.map(role => <div key={role.title} className="border-t border-border md:odd:border-r xl:border-r xl:last:border-r-0"><ContentModule {...role} /></div>)}
      </div>
    </Reveal>
  </SectionContent>;
}
