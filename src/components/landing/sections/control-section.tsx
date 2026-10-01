'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, section, padding, micro } from '../styles';
import { cn } from '@/lib/utils';

const contexts = [
  {
    id: 'operacao',
    title: 'Operação',
    heading: 'A visão de quem dirige o negócio.',
    description:
      'Acompanhe sellers, decisões de cadastro e prioridades operacionais. Tenha contexto para agir, não apenas uma lista de transações.',
    items: [
      'Base de sellers e status',
      'Carteiras e permissões',
      'Revisão e histórico de decisões',
    ],
  },
  {
    id: 'comercial',
    title: 'Comercial',
    heading: 'Sua estratégia vira configuração.',
    description:
      'Defina condições comerciais e organize as exceções da sua base. O relacionamento com cada seller pode ter regras claras, sem controles paralelos.',
    items: [
      'Condições por seller',
      'Comissão fixa, percentual ou híbrida',
      'Campanhas e reconhecimento',
    ],
  },
  {
    id: 'financeiro',
    title: 'Financeiro',
    heading: 'Entenda o caminho de cada valor.',
    description:
      'Conecte receita, taxas, saldos e reservas. Acompanhe solicitações de saque e a composição financeira da operação com informações no contexto certo.',
    items: ['Disponível, pendente e reservado', 'Supervisão de saques', 'Visão por competência'],
  },
];

export function ControlSection() {
  return (
    <section id="controle" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number="02">NO COMANDO</SectionLabel>
        <div className={padding}>
          <SectionHeading
            align="center"
            eyebrow="Decisões conectadas"
            title="O controle não está em um botão."
            muted="Está em toda a operação."
            description="Marca, condições comerciais, pessoas e dinheiro. Diferentes perspectivas do mesmo negócio, com você no centro das decisões."
          />
          <Tabs defaultValue="operacao" className="mt-14">
            <TabsList
              aria-label="Perspectivas da operação"
              className="mx-auto mb-7 flex! w-full max-w-full p-1 md:w-fit"
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
                className="grid overflow-hidden rounded-xl border border-border md:grid-cols-[0.85fr_1.15fr]"
              >
                <div className="px-6 py-8 xl:px-8 xl:py-11">
                  <p className={cn(micro, 'text-brand')}>GATEWAY ADMIN / {context.title}</p>
                  <h3 className="my-5 text-3xl leading-tight tracking-tighter">
                    {context.heading}
                  </h3>
                  <p className="text-sm leading-7 text-muted-foreground">{context.description}</p>
                  <FluidGroup axis="y" className="my-7">
                    {context.items.map((item, index) => (
                      <p
                        key={item}
                        className="flex items-center gap-3.5 border-b border-border px-2 py-3.5 text-xs"
                      >
                        <span className={cn(micro, 'text-brand')}>0{index + 1}</span>
                        {item}
                      </p>
                    ))}
                  </FluidGroup>
                  <ActionLink href="#contato">Explorar minha operação</ActionLink>
                </div>
                <div className="flex min-w-0 items-center border-t border-border bg-card p-6 md:border-t-0 md:border-l md:py-9 [&_figure]:w-full">
                  {/* PRINT CONTROLE (1000×850): capturar uma tela real para cada aba: Operação =
              lista de sellers com status e revisão; Comercial = configuração por seller;
              Financeiro = visão consolidada com saldos/reserva. Tema escuro, recorte frontal,
              um detalhe em destaque sem falsear capacidades. Todo dado de demo identificado.
              A imagem muda por aba; não animar valores financeiros nem simular sucesso. */}
                  <ArtPlaceholder
                    width={1000}
                    height={850}
                    label={`Visão ${context.title.toLowerCase()} do gateway`}
                    dark
                  />
                </div>
              </TabPanel>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
}
