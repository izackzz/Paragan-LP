import { SectionLabel, SectionHeading, ArtPlaceholder } from "../primitives";
import { Card, CardGroup, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Reveal } from "../reveal";
import { frame, section, padding, card, cardTitle, cardDescription, gridThree, textLink } from "../styles";
import { cn } from "@/lib/utils";

export function SolutionsSection() {
  return <section id="solucoes" className={cn(frame, section)}><SectionLabel number="07">PARA O SEU MODELO DE NEGÓCIO</SectionLabel><Reveal className={padding}><SectionHeading align="center" eyebrow="Diferentes ambições. Uma base sólida." title="Pagamentos como produto." muted="Do seu jeito de fazer negócio." description="Para empresas que querem construir uma operação própria, oferecer mais à sua base e conectar pagamentos à sua estratégia." />
    <CardGroup columns={3} separated className={cn(gridThree, "mt-14 gap-3.5! [&_[data-slot=card-header]]:pt-6 [&_[data-slot=card-footer]]:mt-auto [&_[data-slot=card-footer]]:p-0")}>
      <Card className={card}><CardContent>
        {/* ARTE GATEWAYS (700×490): central de comando abstrata com três painéis alinhados,
            marca fictícia e símbolo de configuração. Composição geométrica, fundo menta;
            comunicar direção operacional, não banco ou autorização regulatória. */}
        <ArtPlaceholder width={700} height={490} label="Sua operação de pagamentos" />
      </CardContent><CardHeader><CardTitle className={cardTitle}>Gateways & operações próprias</CardTitle><CardDescription className={cardDescription}>Lance sua marca ou modernize a operação. Conecte condições comerciais, sellers e gestão em uma mesma base.</CardDescription></CardHeader><CardFooter><Link href="#contato" className={textLink}>Desenhar meu gateway <span aria-hidden="true">↗</span></Link></CardFooter></Card>
      <Card className={card}><CardContent>
        {/* ARTE PLATAFORMAS (700×490): três participantes com blocos de alocação ligados
            a uma plataforma central. Sem valores percentuais, marcas externas ou alegação
            de split bancário imediato. Mesma linguagem geométrica dos outros dois cards. */}
        <ArtPlaceholder width={700} height={490} label="Uma plataforma, vários participantes" />
      </CardContent><CardHeader><CardTitle className={cardTitle}>Plataformas & marketplaces</CardTitle><CardDescription className={cardDescription}>Organize participantes, regras de distribuição e integrações. Tenha contexto para supervisionar cada etapa.</CardDescription></CardHeader><CardFooter><Link href="#contato" className={textLink}>Conectar minha plataforma <span aria-hidden="true">↗</span></Link></CardFooter></Card>
      <Card className={card}><CardContent>
        {/* ARTE DIGITAL (700×490): produto digital e duas ofertas se conectam ao checkout
            e a um arquivo autorizado. Não desenhar aulas, certificados ou comunidade;
            o escopo demonstrado é venda, cobrança e acesso aos entregáveis. */}
        <ArtPlaceholder width={700} height={490} label="Da oferta ao acesso digital" />
      </CardContent><CardHeader><CardTitle className={cardTitle}>Ecossistemas de produtos digitais</CardTitle><CardDescription className={cardDescription}>Entregue à sua rede de sellers produtos, checkout e recorrência, com acompanhamento da compra e acesso digital.</CardDescription></CardHeader><CardFooter><Link href="#contato" className={textLink}>Estruturar minha operação <span aria-hidden="true">↗</span></Link></CardFooter></Card>
    </CardGroup>
  </Reveal></section>;
}
