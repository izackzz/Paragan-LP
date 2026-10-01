import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding } from '../styles';
import { cn } from '@/lib/utils';

const solutions = [
  {
    title: 'Sua fintech, do seu jeito.',
    description:
      'Para fundadores e operadores que querem lançar uma marca ou deixar para trás uma plataforma limitada.',
    image: 'Operação de pagamentos white label',
    cta: 'Desenhar minha fintech',
  },
  {
    title: 'Uma plataforma. Muitos negócios.',
    description:
      'Conecte sellers, condições comerciais e integrações ao ecossistema que você já construiu.',
    image: 'Plataforma e rede de sellers',
    cta: 'Conectar meu negócio',
  },
  {
    title: 'Da oferta ao recebimento.',
    description:
      'Produtos digitais, checkout e acompanhamento da compra na mesma experiência de marca.',
    image: 'Oferta e experiência de compra',
    cta: 'Conhecer a plataforma',
  },
];

export function SolutionsSection() {
  return (
    <section id="solucoes" className={cn(frame, section)}>
      <SectionLabel number="07">PARA O SEU MODELO DE NEGÓCIO</SectionLabel>
      <div className={padding}>
        <SectionHeading
          eyebrow="Para quem quer ir além"
          title="Pagamentos como negócio."
          muted="Uma estrutura para cada ambição."
        />
      </div>
      <Reveal>
        {solutions.map((solution, index) => (
          <div key={solution.title} className="grid border-t border-border md:grid-cols-3">
            <div
              className={cn(
                'flex min-w-0 flex-col justify-center bg-card p-6 md:col-span-2 md:p-10',
                index % 2 === 1 && 'md:order-2',
              )}
            >
              <ArtPlaceholder
                width={1200}
                height={640}
                label={solution.image}
                className={cn('rounded-none border-0')}
              />
            </div>
            <div
              className={cn(
                'flex flex-col items-start justify-end gap-4 border-t border-border p-6 md:border-t-0 md:border-l md:p-8',
                index % 2 === 1 && 'md:order-1 md:border-r md:border-l-0',
              )}
            >
              <h3 className="text-base font-medium">{solution.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {solution.description}
              </p>
              <ActionLink secondary className="mt-3 text-sm">
                {solution.cta}
              </ActionLink>
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
