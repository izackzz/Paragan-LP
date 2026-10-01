"use client";
import { AccordionGroup, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { SectionLabel, SectionHeading } from "../primitives";
import { frame, section, micro } from "../styles";
import { cn } from "@/lib/utils";

const questions = [
  ["A Paragan é para quem quer operar um gateway?", "Sim. A Paragan é uma infraestrutura white label para empresas que querem construir ou modernizar uma operação de pagamentos sob sua marca. Você administra seu gateway e oferece aos seus sellers uma experiência própria de venda e gestão."],
  ["O que posso personalizar e controlar?", "Identidade visual, temas, domínios configurados, condições comerciais, gestão de sellers e permissões da equipe. O gateway também organiza configurações de adquirência, reservas e fluxos de saque dentro do escopo contratado e das capacidades dos parceiros."],
  ["Quais meios de pagamento posso oferecer?", "O fluxo contempla cartão, Pix e boleto conforme os processadores e configurações habilitados. A disponibilidade de cada meio, parcelamento e recorrência é confirmada no desenho da operação. A existência de um método no catálogo não substitui sua ativação com o parceiro."],
  ["O checkout inclui produtos e assinaturas?", "Você pode organizar produtos, ofertas avulsas ou recorrentes, cupons e order bumps. As assinaturas dependem do meio e do provedor elegível. Para produtos digitais, há entrega com acesso autorizado aos conteúdos adquiridos; isso não equivale a uma plataforma de cursos completa."],
  ["Posso integrar meus sistemas atuais?", "A plataforma oferece API e webhooks para conectar processos externos. Na avaliação técnica, identificamos os fluxos necessários, as permissões e os parceiros envolvidos. Migração de dados, contratos e tokens exige análise específica."],
  ["Como funcionam a contratação e a implantação?", "A primeira conversa serve para entender seu modelo, recursos prioritários e integrações. A partir disso, são definidos escopo, composição comercial, responsabilidades e critérios de ativação. O prazo acompanha esses requisitos, sem uma promessa genérica para todas as operações."],
];

export function FaqSection() {
  return <section id="perguntas" className={cn(frame, section)}><SectionLabel number="09">ANTES DE COMEÇARMOS</SectionLabel><div className="grid md:grid-cols-[0.8fr_1.4fr]"><div className="border-b border-border px-6 py-10 md:border-r md:border-b-0 md:px-8 md:py-13 [&_h2]:text-3xl"><SectionHeading eyebrow="Perguntas frequentes" title="Clareza antes" muted="do próximo passo." description="O que vale entender para desenhar sua operação com a Paragan." /></div><AccordionGroup type="single" defaultValue="faq-0">{questions.map(([question, answer], index) => <AccordionItem key={question} value={`faq-${index}`} index={index} className="border-b rounded-none"><AccordionTrigger className="min-h-20 px-5 sm:px-8"><span className="flex items-baseline gap-3.5 text-left text-sm leading-relaxed font-medium md:gap-5"><span className={cn(micro, "shrink-0 text-brand")}>0{index + 1}</span>{question}</span></AccordionTrigger><AccordionContent><p className="pt-1 pr-3 pb-6 pl-8 text-sm leading-7 text-muted-foreground md:pr-7 md:pl-14">{answer}</p></AccordionContent></AccordionItem>)}</AccordionGroup></div></section>;
}
