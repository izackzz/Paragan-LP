'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { ArtPlaceholder, ActionLink } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, micro, eyebrow, dot } from '../styles';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { StripPattern } from '../strip-pattern';
import { icons } from '@/lib/icon-map';

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
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 hero-background"
      />
      <StripPattern tone="warm" className="-z-10 hero-strip-pattern opacity-50" />
      <Image
        src="/assets/brand/big-clower.svg"
        width={260}
        height={260}
        alt=""
        aria-hidden="true"
        className="hero-brand-mark"
      />
      <div className={cn(micro, 'flex justify-between pt-7 text-muted-foreground')}>
        <span>[ SUA MARCA ]</span>
        <span>[ SUAS REGRAS ]</span>
      </div>
      <div className="pt-12 pb-9 text-center md:pt-17 md:pb-12">
        <p className={eyebrow}>
          <span className={dot} />
          Infraestrutura de pagamentos white label
        </p>
        <h1
          id="hero-title"
          className="text-5xl leading-none font-normal tracking-tighter text-balance sm:text-6xl md:text-7xl xl:text-8xl"
        >
          O modelo de excelência
          <br className="sm:hidden" /> para a sua fintech.
          <br />
          <span className="text-foreground-3">Sua marca, em cada pagamento.</span>
        </h1>
        <p className="mx-auto mt-7 mb-8 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
          Gateway, checkout, sellers e gestão financeira em uma operação eficiente, configurada para
          a sua marca. Seu cliente final nunca vê o nome Paragan: no checkout e no pagamento, ele vê
          somente a sua marca.
        </p>
        <FluidGroup className="mx-auto flex w-fit flex-wrap justify-center gap-3" axis="x">
          <ActionLink>Desenhar minha operação</ActionLink>
          <ActionLink href="#plataforma" secondary>
            Explorar a plataforma
          </ActionLink>
        </FluidGroup>
        <p className="mx-auto mt-5 max-w-65 text-xs leading-relaxed text-muted-foreground sm:max-w-none">
          Para a sua fintech, a Paragan é a parceira B2B que sustenta a infraestrutura.
        </p>
      </div>
      <div className="overflow-hidden rounded-2xl border border-border [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
        <Tabs defaultValue="gateway">
          <TabsList
            radius="none"
            className="grid w-full grid-cols-3 gap-0 rounded-none border-b border-border bg-card p-0"
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
                className="min-h-32 min-w-0 flex-col items-stretch justify-start gap-4 rounded-none border-r border-solid border-border px-3 py-4 text-left last:border-r-0 sm:px-5"
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
              />
              <p className="flex justify-between gap-4 bg-card p-4 text-xs leading-relaxed text-foreground-3 md:px-6">
                {preview.caption}
                <span className={cn(micro, 'hidden shrink-0 md:block')}>PRÉVIA DO PRODUTO</span>
              </p>
            </TabPanel>
          ))}
        </Tabs>
      </div>
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
