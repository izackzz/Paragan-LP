import { SectionLabel, SectionHeading } from '../primitives';
import { Card, CardGroup, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Reveal } from '../reveal';
import { frame, section, padding, textCard, cardTitle, cardDescription } from '../styles';
import { cn } from '@/lib/utils';

const steps = [
  [
    'Entender seu negócio',
    'Sua base, seus meios de pagamento e o que você quer controlar. Começamos pelas decisões que importam.',
  ],
  [
    'Desenhar a operação',
    'Definimos recursos, parceiros e responsabilidades. O escopo fica claro antes da configuração.',
  ],
  [
    'Configurar e validar',
    'Identidade, acessos e integrações. Validamos os fluxos previstos com os parceiros habilitados.',
  ],
  [
    'Preparar a ativação',
    'Alinhamos critérios de entrada e acompanhamento. O próximo passo tem responsáveis definidos.',
  ],
];

export function LaunchSection() {
  return (
    <section id="implantacao" className={cn(frame, section)}>
      <SectionLabel number="08">DO PLANO À OPERAÇÃO</SectionLabel>
      <Reveal className={padding}>
        <SectionHeading
          eyebrow="Começar com direção"
          title="Seu próximo capítulo"
          muted="começa com um escopo claro."
          description="Cada operação tem seu ponto de partida. A implantação conecta o que sua empresa quer construir ao que precisa funcionar."
        />
        <CardGroup columns={4} className="mt-12 grid-cols-1! md:grid-cols-2! xl:grid-cols-4!">
          {steps.map(([title, description], index) => (
            <Card key={title} className={textCard}>
              <CardHeader>
                <span className="mb-7 block font-mono text-3xl tracking-tighter text-brand">
                  0{index + 1}
                </span>
                <CardTitle className={cardTitle}>{title}</CardTitle>
                <CardDescription className={cardDescription}>{description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </CardGroup>
        <p className="border-t border-border px-5 pt-6 text-xs leading-relaxed text-muted-foreground">
          Escopo, investimento e prazo são definidos conforme integrações e requisitos da sua
          operação.
        </p>
      </Reveal>
    </section>
  );
}
