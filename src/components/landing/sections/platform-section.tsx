import {
  Card,
  CardGroup,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding, micro, cardTitle } from '../styles';
import { cn } from '@/lib/utils';
import { Frame } from '@/components/ui/frame';

const platformPairs = [
  [
    {
      number: '01',
      eyebrow: 'IDENTIDADE',
      title: 'Sua marca, em cada contato.',
      description:
        'Painel, checkout, domínio e comunicação com a sua identidade. Uma experiência que seus sellers reconhecem como sua.',
      illustration: 'Sua identidade, em cada ponto de contato',
    },
    {
      number: '02',
      eyebrow: 'REGRAS COMERCIAIS',
      title: 'Seu modelo vira regra.',
      description:
        'Configure taxas, comissões e condições por seller. Organize o padrão da operação e as particularidades de cada relacionamento.',
      illustration: 'Regras que refletem o seu negócio',
    },
  ],
  [
    {
      number: '03',
      eyebrow: 'PESSOAS',
      title: 'Cada pessoa, no seu papel.',
      description:
        'Organize equipe, carteiras e permissões. Delegue responsabilidades para cada pessoa atuar no contexto certo da operação.',
      illustration: 'Pessoas, papéis e permissões',
    },
    {
      number: '04',
      eyebrow: 'RELACIONAMENTO',
      title: 'Uma base para cultivar.',
      description:
        'Estruture campanhas, rankings e premiações para seus sellers. Conecte o relacionamento com a base à sua estratégia comercial.',
      illustration: 'Crescimento com reconhecimento',
    },
  ],
  [
    {
      number: '05',
      eyebrow: 'ADQUIRÊNCIA',
      title: 'Rotas com direção.',
      description:
        'Organize processadores, prioridades e regras de pagamento. Conduza cada operação conforme os métodos e parceiros habilitados.',
      illustration: 'Uma política. Rotas elegíveis.',
    },
    {
      number: '06',
      eyebrow: 'GESTÃO FINANCEIRA',
      title: 'Cada valor, no contexto.',
      description:
        'Acompanhe saldos disponíveis, pendentes e reservados. Consulte o extrato e supervisione solicitações de saque com fluxo de aprovação.',
      illustration: 'Saldos, reservas e movimentações',
    },
  ],
  [
    {
      number: '07',
      eyebrow: 'CHECKOUT',
      title: 'Da oferta ao pagamento.',
      description:
        'Conecte produtos, ofertas, cupons e adicionais em um checkout com a sua marca. Acompanhe os pedidos e a confirmação do pagamento.',
      illustration: 'Checkout white label',
    },
    {
      number: '08',
      eyebrow: 'INTEGRAÇÕES',
      title: 'Conecte a operação.',
      description:
        'Integre seus sistemas por API e webhooks. Consulte o histórico de entrega dos eventos para acompanhar o que acontece em cada conexão.',
      illustration: 'API e webhooks: eventos no contexto',
    },
  ],
] as const;

export function PlatformSection() {
  return (
    <section id="plataforma" className={cn(frame, section)}>
      <SectionLabel number="01">A PLATAFORMA</SectionLabel>
      <Reveal className={padding}>
        <SectionHeading
          eyebrow="Mais do que processar"
          title="Uma marca própria merece"
          muted="uma operação à altura."
          description="Sua marca, suas regras e seu jeito de operar. Da configuração ao pagamento, oito frentes conectadas para conduzir o negócio com mais contexto."
        />
        <div className="platform-stack relative isolate mt-8 grid gap-4">
          {platformPairs.map((pair, pairIndex) => (
            <div
              key={pair[0].number}
              className="platform-pair grid gap-4 bg-background lg:grid-cols-2"
              style={{ zIndex: pairIndex + 1 }}
            >
              {pair.map((module) => (
                <Frame
                  key={module.number}
                  className="min-w-0 rounded-none! bg-background [&>div]:rounded-none"
                >
                  <CardGroup
                    columns={1}
                    separated
                    className="gap-0 rounded-none [&>div]:rounded-none"
                  >
                    <Card className="platform-card rounded-none bg-background p-0">
                      <CardHeader className="min-w-0 p-4 md:p-6">
                        <p className={cn(micro, 'mb-2 text-accent-2')}>
                          {module.number} / {module.eyebrow}
                        </p>
                        <CardTitle className={cardTitle}>{module.title}</CardTitle>
                        <CardDescription className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                          {module.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="min-h-0 min-w-0 border-t border-border bg-card p-0">
                        {/* Arte reservada por módulo, sem números ou resultados simulados. */}
                        <ArtPlaceholder
                          width={1000}
                          height={500}
                          label={module.illustration}
                          className="h-full w-full rounded-none [&_img]:h-full [&_img]:w-full [&_img]:rounded-none [&_img]:object-cover"
                        />
                      </CardContent>
                    </Card>
                  </CardGroup>
                </Frame>
              ))}
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
