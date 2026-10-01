import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from "../primitives";
import { Card, CardGroup, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Reveal } from "../reveal";
import { frame, section, padding, micro, textCard, cardTitle, cardDescription, gridThree } from "../styles";
import { cn } from "@/lib/utils";

export function CheckoutSection() {
  return <section id="checkout" className={cn(frame, section)}><SectionLabel number="03">EXPERIÊNCIA DE VENDA</SectionLabel><Reveal className={padding}>
    <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"><SectionHeading eyebrow="Do produto ao pagamento" title="Seus sellers têm uma oferta." muted="Entregue a experiência." description="Produtos, ofertas, cupons e order bumps conectados a um checkout com a sua identidade. Mais recursos para vender. Mais contexto para acompanhar." /><ActionLink href="#contato" secondary>Conhecer o checkout</ActionLink></div>
    <div className="mt-12 overflow-hidden rounded-xl border border-border [&_figure]:rounded-none [&_figure]:border-0 [&_figcaption]:hidden"><div className="flex justify-between gap-5 p-4 text-muted-foreground md:px-6 md:py-5"><span className={micro}>UMA JORNADA, DO INÍCIO AO FIM</span><span className={micro}>DESKTOP + MOBILE</span></div>
      {/* PRINT CHECKOUT (1440×760): screenshot Catalyst desktop em primeiro plano,
          recorte mobile à direita integrado na própria arte, produto fictício, oferta,
          cupom, bump, métodos aptos e total claramente visíveis. Fundo claro/menta,
          sem cartões reais, PAN, contatos ou logos de processadores. Não usar imagem
          de stock. Futuro Lottie pode destacar a seleção de oferta, nunca aprovar cobrança. */}
      <ArtPlaceholder width={1440} height={760} label="Checkout Catalyst · desktop e mobile" />
    </div>
    <CardGroup columns={3} className={cn(gridThree, "border-t")}>
      <Card className={textCard}><CardHeader><p className={cn(micro, "mb-4 text-brand")}>01 / COMPONHA</p><CardTitle className={cardTitle}>Uma oferta, várias possibilidades.</CardTitle><CardDescription className={cardDescription}>Crie produtos e ofertas avulsas ou recorrentes. Compartilhe links por oferta e organize seu catálogo.</CardDescription></CardHeader></Card>
      <Card className={textCard}><CardHeader><p className={cn(micro, "mb-4 text-brand")}>02 / PERSONALIZE</p><CardTitle className={cardTitle}>Cada detalhe tem uma função.</CardTitle><CardDescription className={cardDescription}>Ajuste aparência, cupons e produtos adicionais para apresentar sua oferta com clareza.</CardDescription></CardHeader></Card>
      <Card className={textCard}><CardHeader><p className={cn(micro, "mb-4 text-brand")}>03 / ACOMPANHE</p><CardTitle className={cardTitle}>A venda não termina no clique.</CardTitle><CardDescription className={cardDescription}>Acompanhe pedidos e confirmação. Na entrega digital, conecte a compra ao acesso autorizado.</CardDescription></CardHeader></Card>
    </CardGroup>
  </Reveal></section>;
}
