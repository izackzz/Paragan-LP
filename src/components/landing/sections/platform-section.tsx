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
import { frame, section, padding, micro, cardTitle, cardDescription } from '../styles';
import { cn } from '@/lib/utils';
import { Frame } from '@/components/ui/frame';

const card =
  'relative isolate min-w-0 gap-3 overflow-hidden rounded-none bg-card/40 p-4 md:p-5 [&_[data-slot=card-header]]:mb-0 [&_[data-slot=card-header]]:p-0 [&_[data-slot=card-content]]:p-0 [&_figure]:aspect-[4/1] [&_figure]:w-full [&_figure]:rounded-none [&_figure]:border-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover [&_figcaption]:hidden';

const wideCard = 'md:grid md:grid-cols-2 md:items-start md:gap-4 md:[&_figure]:aspect-square';

export function PlatformSection() {
  return (
    <section id="plataforma" className={cn(frame, section)}>
      <SectionLabel number="01">A PLATAFORMA</SectionLabel>
      <Reveal className={padding}>
        <div className="flex flex-col justify-start">
          <SectionHeading
            eyebrow="Mais do que processar"
            title="Uma marca própria merece"
            muted="uma operação à altura."
            description="O que acontece antes e depois do pagamento também define o seu negócio. Sua marca lidera a experiência do cliente final; a Paragan sustenta a excelência operacional ao seu lado."
          />
        </div>
        <Frame className="mt-8">
          <CardGroup
            columns={3}
            separated
            className="platform-grid grid-cols-1 gap-0 rounded-none md:grid-cols-3 [&>div]:rounded-none"
          >
            <Card className={card}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-2 text-accent-2')}>01 / IDENTIDADE</p>
                <CardTitle className={cardTitle}>Sua marca não termina no logo.</CardTitle>
                <CardDescription className={cardDescription}>
                  Painel, checkout, domínio e comunicação. Uma experiência que seus sellers
                  reconhecem como sua.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* ARTE WL (1000×440): composição com painel desktop e recorte de checkout mobile
              de uma única marca fictícia. Evidenciar logo, tema e domínio próprios. Sem
              números de resultado. Fundo menta, janelas frontais, hierarquia editorial. */}
                <ArtPlaceholder
                  width={1000}
                  height={440}
                  label="Sua identidade, em cada ponto de contato"
                />
              </CardContent>
            </Card>
            <Card className={cn(card, wideCard)}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-2 text-accent-2')}>02 / REGRAS COMERCIAIS</p>
                <CardTitle className={cardTitle}>O modelo é seu.</CardTitle>
                <CardDescription className={cardDescription}>
                  Configure taxas, comissões e condições por seller. Dê forma à sua estratégia
                  comercial.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* LOTTIE FUTURO (600×490): três fichas de configuração “padrão”, “por meio” e
              “por seller” convergem para uma regra aplicada. Sem percentuais inventados;
              animação curta acionada na entrada, versão estática com a mesma leitura. */}
                <ArtPlaceholder
                  width={600}
                  height={490}
                  label="Regras que refletem o seu negócio"
                />
              </CardContent>
            </Card>
            <Card className={cn(card, 'relative isolate overflow-hidden')}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-2 text-accent-2')}>03 / PESSOAS</p>
                <CardTitle className={cardTitle}>Delegue. Sem perder a visão.</CardTitle>
                <CardDescription className={cardDescription}>
                  Carteiras, equipe e permissões para cada pessoa atuar no contexto certo.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* ARTE EQUIPE (600×390): matriz simplificada de papéis com três cartões
              “Operação”, “Financeiro”, “Atendimento”; destaque de permissões diferentes.
              Não usar avatares de pessoas reais nem sugerir acesso cruzado entre tenants. */}
                <ArtPlaceholder width={600} height={390} label="Pessoas, papéis e permissões" />
              </CardContent>
            </Card>
            <Card className={cn(card, 'relative isolate overflow-hidden')}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-2 text-accent-2')}>04 / ADQUIRÊNCIA</p>
                <CardTitle className={cardTitle}>Alternativas com direção.</CardTitle>
                <CardDescription className={cardDescription}>
                  Organize processadores, prioridades e regras para conduzir seus pagamentos.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* LOTTIE ROTAS (600×390): entrada Pix/cartão/boleto passa por filtro de
              elegibilidade e alcança uma configuração autorizada. Linhas finas verdes,
              estados legíveis, sem nomes/logos e sem promessa de aprovação. */}
                <ArtPlaceholder
                  width={800}
                  height={500}
                  label="Uma política. Rotas elegíveis."
                  dark
                />
              </CardContent>
            </Card>
            <Card className={cn(card, 'relative isolate overflow-hidden')}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-2 text-accent-2')}>05 / RELACIONAMENTO</p>
                <CardTitle className={cardTitle}>Uma base que faz parte.</CardTitle>
                <CardDescription className={cardDescription}>
                  Campanhas, rankings e premiações para estruturar sua relação com os sellers.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                {/* ARTE REWARDS (600×390): trilha com três marcos e insígnia central abstrata;
              pequenos cartões de prêmio sem marcas reais. Diferenciar jornada acumulada
              de ranking por campanha. Não fabricar nomes de clientes ou faturamento. */}
                <ArtPlaceholder width={600} height={390} label="Crescimento com reconhecimento" />
              </CardContent>
            </Card>
            <Card className={cn(card, wideCard)}>
              <CardHeader>
                <p className={cn(micro, 'mb-2 text-accent-2')}>06 / CHECKOUT</p>
                <CardTitle className={cardTitle}>Uma compra com a sua marca.</CardTitle>
                <CardDescription className={cardDescription}>
                  Produtos e ofertas conectados à experiência de pagamento.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ArtPlaceholder width={600} height={390} label="Checkout white label" />
              </CardContent>
            </Card>
            <Card className={card}>
              <CardHeader>
                <p className={cn(micro, 'mb-2 text-accent-2')}>07 / INTEGRAÇÕES</p>
                <CardTitle className={cardTitle}>Seu ecossistema conectado.</CardTitle>
                <CardDescription className={cardDescription}>
                  API e webhooks para unir os processos da operação.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ArtPlaceholder width={600} height={390} label="API e webhooks" />
              </CardContent>
            </Card>
          </CardGroup>
        </Frame>
      </Reveal>
    </section>
  );
}
