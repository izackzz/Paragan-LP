'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, section, padding, micro } from '../styles';
import { cn } from '@/lib/utils';
import { content, formatIndex, t } from '@/i18n';
import { destinations, presentation } from '@/config/site';

const copy = content('operations');
const contexts = Object.entries(copy.contexts).map(([id, context]) => ({ ...context, id }));

export function ControlSection() {
  return (
    <section id="controle" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number={formatIndex(presentation.sections.operations)}>
          {copy.label}
        </SectionLabel>
        <div className={padding}>
          <div className="flex flex-col justify-start">
            <SectionHeading
              align="center"
              eyebrow={copy.heading.eyebrow}
              title={copy.heading.primary}
              muted={copy.heading.secondary}
              description={copy.heading.description}
            />
          </div>
          <Tabs defaultValue={contexts[0].id} className="mt-14">
            <TabsList
              aria-label={t('accessibility.contextTabs')}
              className={cn('mx-auto mb-7 flex w-full max-w-full p-1 md:w-fit')}
            >
              {contexts.map((context) => (
                <TabItem
                  key={context.id}
                  value={context.id}
                  label={context.title}
                  className="min-h-12 flex-1 justify-center px-3 md:px-6"
                />
              ))}
            </TabsList>
            {contexts.map((context) => (
              <TabPanel
                key={context.id}
                value={context.id}
                className="grid overflow-hidden rounded-xl border border-border md:grid-cols-2"
              >
                <div className="px-6 py-8 xl:px-8 xl:py-11">
                  <p className={cn(micro, 'text-brand')}>
                    {t('operations.contextLabel', { context: context.title })}
                  </p>
                  <h3 className="my-5 text-3xl leading-tight tracking-tighter">
                    {context.heading}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">{context.description}</p>
                  <FluidGroup axis="y" className="my-7">
                    {Object.entries(context.items).map(([id, item], index) => (
                      <p
                        key={id}
                        className="flex items-center gap-3.5 border-b border-border px-2 py-3.5 text-xs"
                      >
                        <span className={cn(micro, 'text-brand')}>{formatIndex(index + 1)}</span>
                        {item}
                      </p>
                    ))}
                  </FluidGroup>
                  <ActionLink href={destinations.contact} className="w-full">
                    {t('actions.explore')}
                  </ActionLink>
                </div>
                <div className="flex min-w-0 items-center border-t border-border bg-card p-6 md:border-t-0 md:border-l md:py-9 [&_figure]:w-full">
                  {/* PRINT CONTROLE (1000×850): capturar uma tela real para cada aba: Operação =
              lista de sellers com status e revisão; Comercial = configuração por seller;
              Financeiro = visão consolidada com saldos/reserva. Tema escuro, recorte frontal,
              um detalhe em destaque sem falsear capacidades. Todo dado de demo identificado.
              A imagem muda por aba; não animar valores financeiros nem simular sucesso. */}
                  <ArtPlaceholder width={1000} height={850} label={context.illustration} dark />
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
