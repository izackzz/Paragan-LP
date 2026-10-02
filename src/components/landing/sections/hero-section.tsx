'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { ArtPlaceholder } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, micro, eyebrow } from '../styles';
import { cn } from '@/lib/utils';
import { icons } from '@/lib/icon-map';
import { Frame } from '@/components/ui/frame';
import { Button } from '@/components/ui/button';

const previews = [
  {
    value: 'gateway',
    label: 'Seu gateway',
    eyebrow: 'OPERAÇÃO',
    description: 'Visão consolidada do negócio.',
    icon: icons.dashboard,
    image: 'Painel do gateway',
    caption: 'Condições comerciais, sellers e financeiro. A operação vista de cima.',
  },
  {
    value: 'seller',
    label: 'Seus sellers',
    eyebrow: 'GESTÃO DE BASE',
    description: 'Vendas, produtos e recebimentos.',
    icon: icons.users,
    image: 'Experiência do seller',
    caption: 'Vendas, produtos e recebimentos. O dia a dia da sua base, conectado.',
  },
  {
    value: 'checkout',
    label: 'Seu checkout',
    eyebrow: 'PAGAMENTO',
    description: 'Oferta e jornada com a sua marca.',
    icon: icons['credit-card'],
    image: 'Checkout white label',
    caption: 'Do produto à confirmação. Uma jornada de compra com a sua identidade.',
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={cn(
        frame,
        'relative isolate scroll-mt-22 overflow-clip border-b border-border px-5 md:px-7 xl:px-10',
      )}
    >
      <div className="max-w-3xl pt-16 pb-12 md:pt-24 md:pb-16">
        <p className={eyebrow}>Para quem quer lançar ou evoluir sua fintech</p>
        <h1
          id="hero-title"
          className="max-w-4xl text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl"
        >
          Sua fintech merece crescer.
          <br />
          <span className="text-foreground-3">Sem os limites da sua plataforma.</span>
        </h1>
        <p className="mt-6 mb-7 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Gateway, checkout e gestão financeira em uma plataforma all-in-one com sua marca.
        </p>
        <div className='flex flex-row gap-2'>

        <Button variant="shiny-1">ENTRAR EM CONTATO</Button>
        <Button variant="shiny-2">ENTRAR EM CONTATO</Button>
        <Button variant="shiny-secondary">ENTRAR EM CONTATO</Button>
        </div>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-foreground-2">
          Plataforma no ar em 1 dia <span className="px-2 text-foreground-4">/</span> Pronta para
          operação regularizada em até 7 dias
        </p>
        <p className="mt-2 max-w-xl text-xs leading-relaxed text-muted-foreground">
          Ativação sujeita à documentação e aprovação dos parceiros. Para o cliente final, só a sua
          marca aparece.
        </p>
      </div>
      <Frame className="[&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
        <Tabs defaultValue="gateway">
          <TabsList
            radius="none"
            className={cn('flex w-full gap-0 rounded-none border-b border-border bg-card p-0')}
            aria-label="Prévias da plataforma"
          >
            {previews.map((preview) => (
              <TabItem
                key={preview.value}
                value={preview.value}
                label={preview.label}
                eyebrow={preview.eyebrow}
                description={preview.description}
                icon={preview.icon}
                className={cn(
                  'min-h-28 min-w-0 flex-1 flex-col items-stretch justify-start gap-2 rounded-none border-r border-solid border-border px-3 py-4 text-left last:border-r-0 sm:px-5',
                )}
              />
            ))}
          </TabsList>
          {previews.map((preview) => (
            <TabPanel key={preview.value} value={preview.value}>
              {/* DIREÇÃO DE ARTE — HERO (1600×860): produzir três prints reais separados.
              Gateway: overview com composição financeira, sellers e fila operacional.
              Seller: dashboard com vendas, saldo e acesso aos produtos.
              Checkout: oferta, resumo e formulário lado a lado. Usar a mesma marca
              demonstrativa nos três, dados explicitamente fictícios, sem PII nem logos
              de terceiros. Captura frontal nítida, margens 40px, nada em perspectiva.
              Futuro motion: só transição de contexto, sem números subindo artificialmente. */}
              <ArtPlaceholder
                width={1600}
                height={860}
                label={preview.image}
                priority={preview.value === 'gateway'}
                className='p-1.5'
                frameClassName='shiny-border'
              />
              <p className="flex justify-between gap-4 bg-card p-4 text-xs leading-relaxed text-foreground-3 md:px-6">
                {preview.caption}
                <span className={cn(micro, 'hidden shrink-0 md:block')}>PRÉVIA DO PRODUTO</span>
              </p>
            </TabPanel>
          ))}
        </Tabs>
      </Frame>
      <div className="grid min-h-32 items-center gap-4 py-6 lg:grid-cols-4 lg:gap-8">
        <span className="text-center text-xs leading-relaxed text-muted-foreground lg:text-left">
          Para quem transforma
          <br />
          <strong className="font-medium text-foreground">pagamentos em negócio.</strong>
        </span>
        <FluidGroup className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:col-span-3 [&_span]:block [&_span]:px-2 [&_span]:py-4 [&_span]:text-center [&_span]:text-sm [&_span]:font-medium">
          <span>White label</span>
          <span>Multi-tenant</span>
          <span>Multiadquirência</span>
          <span>API + Webhooks</span>
        </FluidGroup>
      </div>
    </section>
  );
}
