import { SectionContent, ContentModule } from '../section-content';
import { IntegrationCards } from '../integration-cards';
import { ArtPlaceholder, ActionLink } from '../primitives';
import { content, t } from '@/i18n';
import { presentation, integrationCatalog } from '@/config/site';

const copy = content('structure').integrations;
const acquiring = content('capabilities').items.acquiring;

export function IntegrationsSection() {
  return (
    <SectionContent
      id="integracoes"
      number={presentation.sections.connectivity}
      title={copy.title}
      label={copy.label}
      description={copy.description}
    >
      <div className="grid border-t border-border lg:grid-cols-12">
        <div className="lg:col-span-4 lg:border-r lg:border-border">
          <ContentModule
            title={copy.processing}
            description={acquiring.description}
            items={copy.controls}
          >
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{copy.contracts}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy.activation}</p>
          </ContentModule>
        </div>
        <div
          id="catalogo-integracoes"
          className="min-w-0 scroll-mt-40 lg:col-span-8 lg:[&>div>div]:border-t-0"
        >
          <h3 className="p-6 text-base font-medium md:p-8">{copy.catalog}</h3>
          {!integrationCatalog.published && (
            <p className="px-6 text-sm leading-relaxed text-muted-foreground md:px-8">
              {copy.catalogNote}
            </p>
          )}
          <div className="p-6 md:p-8">
            <ActionLink origin="integracoes" subject="integration" secondary>
              {t('structure.details')}
            </ActionLink>
          </div>
          <IntegrationCards />
        </div>
      </div>
      <div className="grid md:grid-cols-2">
        {(['api', 'webhooks'] as const).map((id) => (
          <div
            key={id}
            id={id}
            className="min-w-0 scroll-mt-40 border-t border-border md:first:border-r"
          >
            <ContentModule
              title={copy[id].title}
              description={copy[id].description}
              items={copy[id].items}
            >
              <div className="mt-6">
                <ArtPlaceholder
                  width={1200}
                  height={600}
                  label={copy[id].preview}
                  alt={copy[id].alt}
                />
              </div>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {copy[id].caption}
              </p>
              <ActionLink origin="integracoes" subject={id} secondary className="mt-5">
                {copy[id].link}
              </ActionLink>
            </ContentModule>
          </div>
        ))}
      </div>
      <div
        id="recursos-tecnicos"
        className="flex scroll-mt-40 flex-col items-start gap-3 border-t border-border p-6 sm:flex-row md:p-8"
      >
        <ActionLink origin="integracoes" subject="documentation" secondary>
          {copy.documentation}
        </ActionLink>
        <ActionLink origin="integracoes" subject="integration">
          {copy.cta}
        </ActionLink>
      </div>
    </SectionContent>
  );
}
