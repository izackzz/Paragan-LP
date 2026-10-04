import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, micro } from '../styles';
import { cn } from '@/lib/utils';

export function IntegrationsSection() {
  return (
    <section id="integracoes" className={cn(frame, section)}>
      <SectionLabel number="05">CONEXÕES QUE FAZEM SENTIDO</SectionLabel>
      <Reveal className="grid md:grid-cols-3">
        <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
          <div className="sticky top-25 flex flex-col justify-start gap-8">
            <SectionHeading title="Conecte seu negócio." muted="Mantenha o controle." />
            <div className="flex flex-col items-start gap-6">
              <p className="text-sm leading-relaxed text-muted-foreground">
                API, webhooks e processamento em uma infraestrutura que conversa com os seus
                sistemas.
              </p>
              <ActionLink secondary>Avaliar integração</ActionLink>
            </div>
          </div>
        </div>
        <div className="flex min-w-0 flex-col justify-center bg-card p-6 md:col-span-2 md:p-10">
          <p className={cn(micro, 'mb-6 text-muted-foreground')}>01 / Seu ecossistema</p>
          <ArtPlaceholder
            width={1200}
            height={720}
            label="Conexões da operação"
            className={cn('rounded-none border-0')}
          />
        </div>
        <div className="border-t border-border bg-card p-6 md:col-span-2 md:p-10">
          <ArtPlaceholder
            width={1200}
            height={600}
            label="API e entrega de eventos"
            className={cn('rounded-none border-0')}
          />
        </div>
        <div className="flex flex-col justify-end gap-4 border-t border-border p-6 md:border-l md:p-8">
          <h3 className="text-base font-medium">Cada evento, no contexto certo.</h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Contratos documentados, permissões por escopo e histórico de entrega. Integre sem perder
            a rastreabilidade.
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            Métodos e parceiros disponíveis são definidos no escopo da sua operação.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
