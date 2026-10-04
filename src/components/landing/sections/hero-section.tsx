'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { ArtPlaceholder } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, micro, eyebrow } from '../styles';
import { cn } from '@/lib/utils';
import { Frame } from '@/components/ui/frame';
import { Button } from '@/components/ui/button';
import { IconAffiliates, IconGateways, IconSwatchBook } from '@/components/assets/custom-icons';

const previews = [
  {
    value: 'gateway',
    label: 'Seu gateway',
    eyebrow: 'OPERAÇÃO',
    description: 'Visão consolidada do negócio.',
    icon: IconGateways,
    image: 'Painel do gateway',
    caption: 'Condições comerciais, sellers e financeiro. A operação vista de cima.',
  },
  {
    value: 'seller',
    label: 'Seus sellers',
    eyebrow: 'GESTÃO DE BASE',
    description: 'Vendas, produtos e recebimentos.',
    icon: IconAffiliates,
    image: 'Experiência do seller',
    caption: 'Vendas, produtos e recebimentos. O dia a dia da sua base, conectado.',
  },
  {
    value: 'checkout',
    label: 'Seu checkout',
    eyebrow: 'PAGAMENTO',
    description: 'Oferta e jornada com a sua marca.',
    icon: IconSwatchBook,
    image: 'Checkout white label',
    caption: 'Do produto à confirmação. Uma jornada de compra com a sua identidade.',
  },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={cn(frame, 'relative isolate scroll-mt-22 overflow-clip border-b border-border')}
    >
      <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 text-left md:px-7 md:pt-25 md:pb-8 lg:text-center xl:px-10">
        <p className={eyebrow}>White label para plataformas de vendas digitais</p>
        <h1
          id="hero-title"
          className="max-w-4xl text-3xl font-medium tracking-tight text-balance lg:text-5xl/12"
        >
          Sua plataforma. Sua marca
          <br />
          <span className="text-foreground-3">Você no controle da operação</span>
        </h1>
        <p className="mt-6 mb-7 max-w-2xl text-base leading-7 text-muted-foreground md:mx-auto md:text-lg">
          Entendemos seu negócio para construir tudo, migração ou construção, com escala planejada e
          produtos que evoluem junto ao mercado
        </p>
        <div className="flex w-full flex-col gap-2 sm:flex-row lg:justify-center">
          <Button size="lg" className="w-full sm:w-fit" variant="cta">
            FALAR COM UM ESPECIALISTA
          </Button>
          <Button size="lg" className="w-full sm:w-fit" variant="secondary">
            VER EM AÇÃO
          </Button>
        </div>
        {/* <div className="mt-30 flex w-full flex-col gap-2 sm:flex-row lg:justify-center">
          <Button size="sm" className="w-full sm:w-fit" variant="primary">
            PRIMARY
          </Button>
          <Button size="sm" className="w-full sm:w-fit" variant="secondary">
            SECONDARY
          </Button>
          <Button size="sm" className="w-full sm:w-fit" variant="cta">
            CTA
          </Button>
          <Button size="sm" className="w-full sm:w-fit" variant="cta-2">
            CTA-02
          </Button>
          <Button size="sm" className="w-full sm:w-fit" variant="ghost">
            GHOST
          </Button>
        </div> */}
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Gateway, checkout, split, produtos, membros, e muito mais... Personalize com sua marca e
          concentre seu time no que realmente gera crescimento:{' '}
          <span className="text-accent-2">produto, clientes e escala.</span>
        </p>
      </div>
      <Frame className="mx-5 md:mx-7 xl:mx-10 [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
        <Tabs defaultValue="gateway">
          <TabsList
            radius="none"
            hoverAxis="xy"
            className={cn(
              'flex w-full flex-col items-stretch gap-0 rounded-none border-b border-border bg-card p-0 sm:flex-row',
            )}
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
                  'min-h-28 w-full min-w-0 flex-none flex-col items-stretch justify-start gap-2 rounded-none border-b border-solid border-border px-3 py-4 text-left last:border-b-0 sm:flex-1 sm:border-r sm:border-b-0 sm:px-5 sm:last:border-r-0',
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
                className="p-1.5"
              />
              <p className="flex justify-between gap-4 border-t bg-card p-4 text-xs leading-relaxed text-foreground-3 md:px-6">
                {preview.caption}
                <span className={cn(micro, 'hidden shrink-0 md:block')}>PRÉVIA DO PRODUTO</span>
              </p>
            </TabPanel>
          ))}
        </Tabs>
      </Frame>
      <div className="text-display mx-0 grid min-h-32 items-center py-6 text-lg">
        <FluidGroup className="grid grid-cols-2 lg:grid-cols-4 [&_span]:block [&_span]:border-border [&_span]:px-2 [&_span]:py-4 [&_span]:text-center [&_span]:text-sm [&_span]:font-medium">
          <span>White label</span>
          <span className="border-l">Multi-tenant</span>
          <span className="border-t lg:border-t-0 lg:border-l">Multiadquirência</span>
          <span className="border-t border-l lg:border-t-0">API + Webhooks</span>
        </FluidGroup>
      </div>
    </section>
  );
}
