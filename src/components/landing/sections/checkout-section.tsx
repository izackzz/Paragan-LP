import { Card, CardGroup, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { SectionLabel, ArtPlaceholder, ActionLink } from '../primitives';
import {
  frame,
  section,
  padding,
  micro,
  card,
  cardTitle,
  cardDescription,
  gridThree,
} from '../styles';
import { cn } from '@/lib/utils';

const checkoutSteps = [
  {
    number: '01',
    eyebrow: 'COMPONHA',
    title: 'Uma oferta, várias possibilidades.',
    description:
      'Crie produtos e ofertas avulsas ou recorrentes. Compartilhe links por oferta e organize seu catálogo.',
  },
  {
    number: '02',
    eyebrow: 'PERSONALIZE',
    title: 'Cada detalhe tem uma função.',
    description:
      'Ajuste aparência, cupons e produtos adicionais para apresentar sua oferta com clareza.',
  },
  {
    number: '03',
    eyebrow: 'ACOMPANHE',
    title: 'A venda não termina no clique.',
    description:
      'Acompanhe pedidos e confirmação. Na entrega digital, conecte a compra ao acesso autorizado.',
  },
];

export function CheckoutSection() {
  return (
    <section id="checkout" className={cn(frame, section)}>
      <SectionLabel number="03">EXPERIÊNCIA DE VENDA</SectionLabel>
      <div className={padding}>
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm font-medium">
              Do produto ao pagamento
            </p>
            <h2 className="text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl">
              Seus sellers têm uma oferta.
              <br />
              <span className="text-foreground-3">Entregue a experiência.</span>
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Produtos, ofertas, cupons e order bumps conectados a um checkout com a sua identidade.
              Mais recursos para vender. Mais contexto para acompanhar.
            </p>
          </div>
          <ActionLink href="#contato" secondary>
            Conhecer o checkout
          </ActionLink>
        </div>

        <div className="relative isolate mt-12 overflow-hidden rounded-xl border border-border bg-card">
          <div className="relative z-10 flex justify-between gap-5 border-b border-border bg-background/70 p-4 text-foreground-3 backdrop-blur-sm md:px-6 md:py-5">
            <span className={micro}>UMA JORNADA, DO INÍCIO AO FIM</span>
            <span className={cn(micro, 'hidden sm:block')}>DESKTOP + MOBILE</span>
          </div>
          {/* PRINT CHECKOUT (1440×760): screenshot Catalyst desktop em primeiro plano,
              recorte mobile à direita integrado na própria arte, produto fictício, oferta,
              cupom, bump, métodos aptos e total claramente visíveis. Fundo carvão com
              acentos Paragan; sem PAN, contatos ou logos de processadores. Não usar stock. */}
          <div className="relative z-10 [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
            <ArtPlaceholder
              width={1440}
              height={760}
              className='p-1.5'
              label="Checkout Catalyst · desktop e mobile"
            />
          </div>
        </div>

        <CardGroup columns={3} className={cn(gridThree, 'mt-5 border rounded-xl overflow-hidden')}>
          {checkoutSteps.map((step) => (
            <Card key={step.number} className={cn(card, 'relative isolate overflow-hidden')}>
              <CardHeader className="relative z-10">
                <p className={cn(micro, 'mb-4 text-accent-2')}>
                  {step.number} / {step.eyebrow}
                </p>
                <CardTitle className={cardTitle}>{step.title}</CardTitle>
                <CardDescription className={cardDescription}>{step.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </CardGroup>
      </div>
    </section>
  );
}
