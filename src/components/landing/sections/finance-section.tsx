import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';

export function FinanceSection() {
  return (
    <section id="financeiro" className={cn(frame, section)}>
      <SectionLabel number="04">GESTÃO FINANCEIRA</SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-47 flex flex-col justify-start gap-5">
            <SectionHeading title="Seu financeiro." muted="Sem pontos cegos." />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Volume não é resultado. Enxergue taxas, receitas, reservas e recebimentos na mesma
              operação.
            </p>
            <ActionLink secondary>Conhecer os controles</ActionLink>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-card p-6 md:col-span-2 md:p-10">
          <p className={cn(micro, 'mb-6 text-muted-foreground')}>01 / Visão financeira</p>
          <ArtPlaceholder
            width={1200}
            height={800}
            label="Receitas, custos e saldos"
            className={cn('rounded-none border-0')}
          />
        </div>
        {[
          [
            'Entenda seus custos.',
            'Consulte a visão financeira por competência e acompanhe custos de adquirência, condições comerciais e comissões. Entenda o que compõe a sua operação.',
          ],
          [
            'Planeje seus recebimentos.',
            'Diferencie saldos disponíveis, pendentes e reservados. Consulte as datas previstas de liberação para organizar os próximos passos com mais contexto.',
          ],
          [
            'Acompanhe cada movimentação.',
            'Consulte o extrato de pagamentos, taxas e estornos. Supervisione solicitações de saque com fluxo de aprovação e acompanhe o caminho de cada valor.',
          ],
        ].map(([title, description]) => (
          <div
            key={title}
            className="flex flex-col gap-3 border-t border-border p-6 last:border-r-0 md:border-r md:p-8"
          >
            <h3 className="text-sm font-medium">{title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
