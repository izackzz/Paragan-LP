import { Card, CardGroup, CardHeader, CardContent } from '@/components/ui/card';
import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding } from '../styles';
import { cn } from '@/lib/utils';
import {
  IconSwatchBook,
  IconSettings,
  IconAdmins,
  IconGift,
  IconAcquirers,
  IconReports,
  IconCheckout,
  IconWebhook,
} from '@/components/assets/custom-icons';
import { RenderAscii } from '@/components/ascii/render-ascii';

const platformPairs = [
  [
    {
      number: '01',
      eyebrow: 'Identidade',
      icon: IconSwatchBook,
      title: 'Sua marca, em cada contato.',
      description:
        'Painel, checkout, domínio e comunicação com a sua identidade. Uma experiência que seus sellers reconhecem como sua.',
      illustration: 'Sua identidade, em cada ponto de contato',
    },
    {
      number: '02',
      eyebrow: 'Regras comerciais',
      icon: IconSettings,
      title: 'Seu modelo vira regra.',
      description:
        'Configure taxas, comissões e condições por seller. Organize o padrão da operação e as particularidades de cada relacionamento.',
      illustration: 'Regras que refletem o seu negócio',
    },
  ],
  [
    {
      number: '03',
      eyebrow: 'Pessoas',
      icon: IconAdmins,
      title: 'Cada pessoa, no seu papel.',
      description:
        'Organize equipe, carteiras e permissões. Delegue responsabilidades para cada pessoa atuar no contexto certo da operação.',
      illustration: 'Pessoas, papéis e permissões',
    },
    {
      number: '04',
      eyebrow: 'Relacionamento',
      icon: IconGift,
      title: 'Uma base para cultivar.',
      description:
        'Estruture campanhas, rankings e premiações para seus sellers. Conecte o relacionamento com a base à sua estratégia comercial.',
      illustration: 'Crescimento com reconhecimento',
    },
  ],
  [
    {
      number: '05',
      eyebrow: 'Adquirência',
      icon: IconAcquirers,
      title: 'Rotas com direção.',
      description:
        'Organize processadores, prioridades e regras de pagamento. Conduza cada operação conforme os métodos e parceiros habilitados.',
      illustration: 'Uma política. Rotas elegíveis.',
    },
    {
      number: '06',
      eyebrow: 'Gestão financeira',
      icon: IconReports,
      title: 'Cada valor, no contexto.',
      description:
        'Acompanhe saldos disponíveis, pendentes e reservados. Consulte o extrato e supervisione solicitações de saque com fluxo de aprovação.',
      illustration: 'Saldos, reservas e movimentações',
    },
  ],
  [
    {
      number: '07',
      eyebrow: 'Checkout',
      icon: IconCheckout,
      title: 'Da oferta ao pagamento.',
      description:
        'Conecte produtos, ofertas, cupons e adicionais em um checkout com a sua marca. Acompanhe os pedidos e a confirmação do pagamento.',
      illustration: 'Checkout white label',
    },
    {
      number: '08',
      eyebrow: 'Integrações',
      icon: IconWebhook,
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
      <Reveal>
        <div className={cn('relative isolate overflow-hidden', padding)}>
          <div className="relative z-10">
            <SectionHeading
              eyebrow="Mais do que processar"
              title="Uma marca própria merece"
              muted="uma operação à altura."
              description="Sua marca, suas regras e seu jeito de operar. Da configuração ao pagamento, oito frentes conectadas para conduzir o negócio com mais contexto."
              align="center"
            />
          </div>
          <RenderAscii
            render="shark"
            aspect="16/9"
            model="halftone"
            cellSize={8}
            className="pointer-events-none absolute -bottom-1/4 left-1/2 z-0 h-100 w-auto max-w-full -translate-x-1/2 text-primary"
            fit="cover"
            label="Shark"
          />
        </div>
        <div className="platform-stack relative isolate grid gap-0">
          {platformPairs.map((pair, pairIndex) => (
            <div
              key={pair[0].number}
              className="platform-pair border-t border-border bg-background"
              style={{ zIndex: pairIndex + 1 }}
            >
              <CardGroup
                columns={2}
                separated
                className="grid-cols-1 gap-0 rounded-none md:grid-cols-1 lg:grid-cols-2 [&>div]:rounded-none"
              >
                {pair.map((module) => (
                  <Card
                    key={module.number}
                    className="platform-card rounded-none bg-background p-6 lg:p-12"
                  >
                    <CardHeader className="min-w-0 h-fit gap-4 mask-b-from-75%">
                      <h3 className="flex items-center gap-2 text-md text-accent-2 uppercase tracking-wide font-normal">
                        <module.icon
                          aria-hidden="true"
                          className="size-5 shrink-0"
                          strokeWidth={1.5}
                        />
                        <span>
                          {module.number} / {module.eyebrow}
                        </span>
                      </h3>
                      <p className="text-2xl/7 font-display pb-6 text-muted-foreground">
                        <span className="font-medium text-foreground">{module.title}</span>{' '}
                        {module.description}
                      </p>
                    </CardHeader>
                    <CardContent className="p-0! h-fit min-h-0 min-w-0 overflow-hidden rounded-sm border">
                      {/* Arte reservada por módulo, sem números ou resultados simulados. */}
                      <ArtPlaceholder
                        width={1000}
                        height={500}
                        label={module.illustration}
                        className="h-fit w-full [&_img]:h-fit [&_img]:w-full [&_img]:rounded-none"
                      />
                    </CardContent>
                  </Card>
                ))}
              </CardGroup>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
