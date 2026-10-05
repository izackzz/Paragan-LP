import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section } from '../styles';
import { cn } from '@/lib/utils';

export function ScaleSection() {
  return (
    <section id="escala" className={cn(frame, section)}>
      <SectionLabel number="06">ESTRUTURA PARA EVOLUIR</SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-47 flex flex-col justify-start gap-6">
            <SectionHeading title="Cresça a operação." muted="Preserve o comando." />
            <p className="text-sm leading-relaxed text-muted-foreground">
              Pessoas, dados e responsabilidades no contexto certo, mesmo quando a sua base cresce.
            </p>
          </div>
        </div>
        <div className="bg-card p-6 md:col-span-2 md:p-10">
          <ArtPlaceholder
            width={1200}
            height={700}
            label="Arquitetura da operação"
            className={cn('rounded-none border-0')}
          />
        </div>
        {[
          ['Fronteiras claras', 'Isolamento por tenant e permissões para cada papel.'],
          [
            'Consistência financeira',
            'Estados e tratamento de repetições para acompanhar cada pagamento.',
          ],
          ['Visibilidade operacional', 'Métricas, filas e registros para entender o que acontece.'],
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
