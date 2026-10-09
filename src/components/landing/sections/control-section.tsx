import { SectionContent, ContentModule } from '../section-content';
import { ArtPlaceholder, ActionLink } from '../primitives';
import { micro } from '../styles';
import { content, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('structure').operation;
const capabilities = content('capabilities').items;
const contexts = content('operations').contexts;

export function ControlSection() {
  return (
    <SectionContent
      id="operacao"
      number={presentation.sections.operations}
      title={copy.title}
      label={copy.label}
      description={copy.description}
      dark
    >
      <div className="grid border-t border-border lg:grid-cols-12">
        <div className="lg:col-span-5 lg:border-r lg:border-border">
          <ContentModule
            title={copy.identity}
            editorial
            description={capabilities.identity.description}
            items={copy.identityItems}
          />
          <div className="border-t border-border">
            <ContentModule
              id="condicoes-comerciais"
              title={copy.terms}
              editorial
              description={contexts.commercial.description}
              items={copy.termsItems}
            />
          </div>
          <div className="border-t border-border">
            <ContentModule
              title={copy.governance}
              editorial
              description={contexts.management.description}
              items={copy.governanceItems}
            />
          </div>
        </div>
        <div className="min-w-0 border-t border-border bg-card p-6 md:p-8 lg:col-span-7 lg:border-t-0">
          <p className={`${micro} mb-6 text-accent-2`}>{copy.task}</p>
          <ArtPlaceholder width={1000} height={850} label={contexts.commercial.illustration} dark />
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{copy.caption}</p>
          <p className={`${micro} mt-3 text-muted-foreground`}>{t('structure.demo')}</p>
        </div>
      </div>
      <details className="group border-t border-border">
        <summary className="flex min-h-16 cursor-pointer items-center justify-between gap-4 p-6 text-sm font-medium md:px-8">
          {copy.complementary}
        </summary>
        <p className="px-6 text-sm leading-relaxed text-muted-foreground md:px-8">
          {capabilities.engagement.description}
        </p>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {copy.engagement.map((item) => (
            <ContentModule key={item.title} {...item} />
          ))}
        </div>
      </details>
      <div className="border-t border-border p-6 md:p-8">
        <ActionLink origin="operacao">{t('actions.explore')}</ActionLink>
      </div>
    </SectionContent>
  );
}
