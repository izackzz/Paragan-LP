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
        <div className="flex flex-col justify-end gap-3 border-t border-border p-6 md:p-8">
          <h3 className="text-base font-medium">Condições sob sua gestão.</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Taxas e comissões por seller para refletir o seu modelo de negócio.
          </p>
        </div>
        <div className="border-t border-border bg-card p-6 md:border-x md:p-8">
          <ArtPlaceholder
            width={600}
            height={500}
            label="Composição de saldo"
            className={cn('rounded-none border-0')}
          />
        </div>
        <div className="flex flex-col justify-end gap-3 border-t border-border p-6 md:p-8">
          <h3 className="text-base font-medium">Disponível, pendente, reservado.</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Supervisione solicitações de saque e acompanhe a origem de cada valor.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
