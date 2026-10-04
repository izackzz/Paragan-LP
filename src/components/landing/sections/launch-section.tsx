import { SectionLabel, SectionHeading } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding, cardTitle, cardDescription } from '../styles';
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
      <Reveal>
        <div className={padding}>
          <SectionHeading
            eyebrow="Começar com direção"
            title="Seu próximo capítulo"
            muted="começa com um escopo claro."
            description="Cada operação tem seu ponto de partida. A implantação conecta o que sua empresa quer construir ao que precisa funcionar."
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {steps.map(([title, description], index) => (
            <div
              key={title}
              className="min-w-0 border-t border-border p-6 md:p-8 md:odd:border-r xl:border-r xl:last:border-r-0"
            >
              <span className="mb-7 block font-mono text-3xl tracking-tighter text-brand">
                0{index + 1}
              </span>
              <h3 className={cardTitle}>{title}</h3>
              <p className={cardDescription}>{description}</p>
            </div>
          ))}
        </div>
        <p className="border-t border-border p-6 text-xs leading-relaxed text-muted-foreground md:p-8">
          Escopo, investimento e prazo são definidos conforme integrações e requisitos da sua
          operação.
        </p>
      </Reveal>
    </section>
  );
}
