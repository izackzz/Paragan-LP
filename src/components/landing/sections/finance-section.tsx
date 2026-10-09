import { SectionContent, ContentModule, StructuredRecords } from '../section-content';
import { ArtPlaceholder, ActionLink } from '../primitives';
import { micro } from '../styles';
import { Reveal } from '../reveal';
import { content, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('structure').finance;
const ledger = content('ledger');
const context = content('operations').contexts.finance;

export function FinanceSection() {
  return (
    <SectionContent
      id="financeiro"
      number={presentation.sections.ledger}
      title={copy.title}
      label={copy.label}
      description={copy.description}
    >
      <Reveal>
        <div className="grid border-t border-border lg:grid-cols-12">
          <div className="min-w-0 bg-card p-6 md:p-8 lg:col-span-7 lg:border-r lg:border-border">
            <p className={`${micro} mb-6 text-accent-2`}>{copy.example}</p>
            <ArtPlaceholder width={1200} height={800} label={context.illustration} />
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              {context.description}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy.caption}</p>
            <p className={`${micro} mt-3 text-muted-foreground`}>{t('structure.demo')}</p>
          </div>
          <div className="min-w-0 lg:col-span-5 lg:[&>div>div]:border-t-0">
            <StructuredRecords records={[{ title: copy.composition, fields: copy.fields }]} />
            <div className="grid gap-3 px-6 pb-6 text-sm leading-relaxed text-muted-foreground md:px-8 md:pb-8">
              <p>{copy.note}</p>
              <p>{copy.dependency}</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {Object.values(ledger.items).map((item, index) => (
            <div
              key={item.title}
              className="border-t border-border md:odd:border-r xl:border-r xl:last:border-r-0"
            >
              <ContentModule
                title={copy.modules[index]}
                description={item.description}
                items={copy.items[index]}
              />
            </div>
          ))}
        </div>
        <div className="border-t border-border p-6 md:p-8">
          <ActionLink origin="financeiro" secondary>
            {copy.cta}
          </ActionLink>
        </div>
      </Reveal>
    </SectionContent>
  );
}
