import { SectionContent, ContentModule } from '../section-content';
import { ActionLink } from '../primitives';
import { micro } from '../styles';
import { content, t } from '@/i18n';
import { evidenceResources, presentation, type ContactSubject } from '@/config/site';

const copy = content('structure').trust;

export function ScaleSection() {
  return (
    <SectionContent
      id="estrutura"
      number={presentation.sections.reliability}
      title={copy.title}
      label={copy.label}
      description={copy.description}
    >
      <div className="grid md:grid-cols-2">
        {copy.pillars.map((item, index) => (
          <div key={item.title} className="border-t border-border md:odd:border-r">
            <ContentModule title={item.title} description={item.description}>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
              <ActionLink
                origin="estrutura"
                subject={(['isolation', 'integrity', 'recovery', 'support'] as const)[index]}
                secondary
                className="mt-5"
              >
                {t('structure.technical')}
              </ActionLink>
            </ContentModule>
          </div>
        ))}
      </div>
      <div id="evidencias" className="scroll-mt-40 border-t border-border">
        <h3 className="px-6 py-6 font-display text-2xl/7 font-medium md:px-8">{copy.library}</h3>
        <div className="grid md:grid-cols-2">
          {evidenceResources.map((id) => {
            const item = copy.resources[id];
            return (
              <div key={id} className="border-t border-border md:odd:border-r">
                <p className={`${micro} px-6 pt-6 text-accent-2 md:px-8`}>{item.type}</p>
                <ContentModule title={item.title} description={item.description}>
                  <ActionLink
                    origin="estrutura"
                    subject={
                      (
                        {
                          documentation: 'documentation',
                          sandbox: 'sandbox',
                          demonstrations: 'demonstration',
                          reports: 'reports',
                          operations: 'support',
                        } satisfies Record<typeof id, ContactSubject>
                      )[id]
                    }
                    secondary
                    className="mt-5"
                  >
                    {id === 'demonstrations' ? t('structure.preview') : t('structure.technical')}
                  </ActionLink>
                </ContentModule>
              </div>
            );
          })}
        </div>
      </div>
      <div id="responsaveis" className="scroll-mt-40 border-t border-border">
        <ContentModule
          title={copy.responsible}
          description={copy.company}
          items={[copy.team, copy.role]}
        >
          <ActionLink origin="estrutura" subject="support" secondary className="mt-5">
            {t('structure.technical')}
          </ActionLink>
        </ContentModule>
      </div>
      <div id="referencias-institucionais" className="scroll-mt-40 border-t border-border">
        <ContentModule title={copy.references} description={copy.referencesNote} />
      </div>
    </SectionContent>
  );
}
