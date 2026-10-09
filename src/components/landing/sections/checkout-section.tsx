import { SectionContent, ContentModule } from '../section-content';
import { ArtPlaceholder, ActionLink } from '../primitives';
import { micro } from '../styles';
import { content, formatIndex, t } from '@/i18n';
import { presentation, destinations } from '@/config/site';

const copy = content('structure').checkout;

export function CheckoutSection() {
  return (
    <SectionContent
      id="checkout"
      number={presentation.sections.sales}
      title={copy.title}
      label={copy.label}
      description={copy.description}
    >
      <div className="px-6 pb-8 md:px-8">
        <ActionLink href={destinations.checkoutDemo} secondary>
          {t('actions.demo')}
        </ActionLink>
      </div>
      <div
        id="demonstracao-checkout"
        className="scroll-mt-40 border-t border-border bg-card p-6 md:p-8"
      >
        <div className="grid items-start gap-6 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-8">
            <ArtPlaceholder width={1440} height={760} label={copy.desktop} />
          </div>
          <div className="mx-auto w-full max-w-xs lg:col-span-4">
            <ArtPlaceholder width={390} height={760} label={copy.mobile} />
          </div>
        </div>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{copy.caption}</p>
        <p className={`${micro} mt-3 text-muted-foreground`}>{t('structure.demo')}</p>
      </div>
      <div className="grid md:grid-cols-2 xl:grid-cols-4">
        {copy.steps.map((step, index) => (
          <div
            key={step.title}
            className="border-t border-border md:odd:border-r xl:border-r xl:last:border-r-0"
          >
            <p className={`${micro} px-6 pt-6 text-accent-2 md:px-8`}>{formatIndex(index + 1)}</p>
            <ContentModule {...step} />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2">
        {[copy.recurrence, copy.split].map((item) => (
          <div key={item.title} className="border-t border-border md:first:border-r">
            <ContentModule {...item}>
              <ActionLink className="mt-5" origin="checkout" secondary>
                {t('structure.details')}
              </ActionLink>
            </ContentModule>
          </div>
        ))}
      </div>
    </SectionContent>
  );
}
