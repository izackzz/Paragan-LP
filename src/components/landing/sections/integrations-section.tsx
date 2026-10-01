import { Card, CardGroup, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import {
  frame,
  section,
  padding,
  micro,
  textCard,
  cardTitle,
  cardDescription,
  gridThree,
} from '../styles';
import { cn } from '@/lib/utils';
import { DotPattern } from '../dot-pattern';
import { StripPattern } from '../strip-pattern';

export function IntegrationsSection() {
  return (
    <section id="integracoes" className={cn(frame, section)}>
      <SectionLabel number="05">CONEXÕES QUE FAZEM SENTIDO</SectionLabel>
      <Reveal className={padding}>
        <SectionHeading
          align="center"
          eyebrow="Uma base conectada"
          title="Seu negócio tem um ecossistema."
          muted="Os pagamentos fazem parte dele."
          description="Conecte sistemas por API e webhooks. Organize configurações de processamento e acompanhe eventos sem perder o contexto da operação."
        />
        <div className="relative isolate mt-12 overflow-hidden rounded-xl border border-border bg-card p-4 md:p-8 [&_figure]:relative [&_figure]:z-10 [&_figure]:border-0">
          <DotPattern solid grow="x" color="text-accent-1" opacity={10} className="-z-10" />
          <StripPattern className="-z-10 opacity-60" />
          {/* LOTTIE ECOSSISTEMA (1440×500): nó “Sua operação” central, quatro grupos externos:
          sistemas próprios, processamento, eventos e financeiro. Linhas discretas indicam
          fluxo em ambas as direções. Sem logos de parceiros não homologados, sem explosões
          ou órbitas infinitas. Poster estático deve explicar todo o fluxo sozinho. */}
          <ArtPlaceholder
            width={1440}
            height={500}
            src="/assets/illustrations/acquirer-cover.svg"
            label="Sua operação conectada ao seu ecossistema"
            dark
          />
        </div>
        <CardGroup columns={3} className={gridThree}>
          <Card className={textCard}>
            <CardHeader>
              <p className={cn(micro, 'mb-4 text-brand')}>API</p>
              <CardTitle className={cardTitle}>Integre com clareza.</CardTitle>
              <CardDescription className={cardDescription}>
                Contratos documentados, acesso por escopo e operações com tratamento de
                idempotência.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className={textCard}>
            <CardHeader>
              <p className={cn(micro, 'mb-4 text-brand')}>WEBHOOKS</p>
              <CardTitle className={cardTitle}>Eventos que dão contexto.</CardTitle>
              <CardDescription className={cardDescription}>
                Assinatura, histórico e tentativas de entrega. Encaminhe eventos por produto para
                cada integração.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className={textCard}>
            <CardHeader>
              <p className={cn(micro, 'mb-4 text-brand')}>MULTIADQUIRÊNCIA</p>
              <CardTitle className={cardTitle}>Configuração com critério.</CardTitle>
              <CardDescription className={cardDescription}>
                Métodos, prioridades e regras de elegibilidade conforme os parceiros habilitados
                para sua operação.
              </CardDescription>
            </CardHeader>
          </Card>
        </CardGroup>
        <div className="flex flex-col items-start justify-between gap-6 border-t border-border pt-6 md:flex-row md:items-center">
          <p className="text-xs leading-relaxed text-muted-foreground">
            Disponibilidade por método e parceiro é confirmada no desenho da sua operação.
          </p>
          <ActionLink href="#contato" secondary>
            Avaliar minha integração
          </ActionLink>
        </div>
      </Reveal>
    </section>
  );
}
