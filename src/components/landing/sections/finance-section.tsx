import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { Reveal } from '../reveal';
import { frame, section, padding, dot } from '../styles';
import { cn } from '@/lib/utils';
import { DotPattern } from '../dot-pattern';
import { StripPattern } from '../strip-pattern';

export function FinanceSection() {
  return (
    <section id="financeiro" className={cn(frame, section)}>
      <SectionLabel number="04">GESTÃO FINANCEIRA</SectionLabel>
      <Reveal className={cn(padding, 'grid items-center gap-8 md:grid-cols-2 xl:gap-16')}>
        <div>
          <SectionHeading
            eyebrow="Clareza para decidir"
            title="Volume é uma parte."
            muted="Entender o resultado é outra."
            description="Defina suas condições comerciais e acompanhe o que compõe a operação. Taxas, custos, saldos e reservas ganham contexto para a próxima decisão."
          />
          <FluidGroup
            axis="y"
            className="my-7 [&_h3]:mb-1.5 [&_h3]:text-sm [&_h3]:font-medium [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-muted-foreground [&>.z-10]:border-b [&>.z-10]:border-border [&>.z-10]:px-2 [&>.z-10]:py-4"
          >
            <div>
              <h3>Condições sob sua gestão</h3>
              <p>Modelos de comissão e regras por seller para refletir sua estratégia.</p>
            </div>
            <div>
              <h3>Disponibilidade sem adivinhação</h3>
              <p>
                Separe saldo disponível, pendente e reservado. Supervisione as solicitações de
                saque.
              </p>
            </div>
            <div>
              <h3>Uma visão que conecta</h3>
              <p>
                Acompanhe a composição financeira por competência, com receitas e custos
                identificados.
              </p>
            </div>
          </FluidGroup>
          <ActionLink href="#contato" secondary>
            Entender os controles financeiros
          </ActionLink>
        </div>
        <div className="relative isolate overflow-hidden rounded-xl border border-border bg-card p-4 md:p-5 [&_figcaption]:hidden [&_figure]:relative [&_figure]:z-10 [&_figure]:border-0 [&_img]:max-h-115 [&_img]:object-contain md:[&_img]:max-h-none">
          <DotPattern color="text-accent-2" opacity={12} className="-z-10" />
          <StripPattern className="-z-10 opacity-45" />
          {/* ARTE FINANCEIRO (900×1080): recorte real do consolidado por competência,
          com receita operacional, custos informados, reservas e saldo separados.
          Incluir legenda “dados demonstrativos” na arte definitiva; não desenhar
          lucro garantido, percentuais de crescimento ou valores de clientes.
          Composição vertical, cartões alinhados e hierarquia que destaca a origem do valor. */}
          <ArtPlaceholder width={900} height={1080} label="Do valor da venda à visão da operação" />
          <div className="flex items-center justify-center gap-2 pt-5 text-xs text-muted-foreground">
            <span className={dot} />A informação certa. No contexto certo.
          </div>
        </div>
      </Reveal>
    </section>
  );
}
