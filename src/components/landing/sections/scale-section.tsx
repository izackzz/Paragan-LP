import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Card, CardGroup, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Reveal } from '../reveal';
import {
  frame,
  section,
  padding,
  micro,
  textCard,
  cardTitle,
  cardDescription,
  gridThree,
} from '../styles';
import { cn } from '@/lib/utils';

export function ScaleSection() {
  return (
    <section id="escala" className="dark scroll-mt-22 bg-background text-foreground">
      <div className={cn(frame, section)}>
        <SectionLabel number="06">ESTRUTURA PARA EVOLUIR</SectionLabel>
        <Reveal className={padding}>
          <SectionHeading
            eyebrow="Crescimento com fundamento"
            title="Amplie sua operação."
            muted="Preserve o comando."
            description="Crescer exige mais do que processar mais pagamentos. Exige separar responsabilidades, acompanhar exceções e manter consistência em cada etapa."
          />
          <div className="mt-12">
            {/* LOTTIE ARQUITETURA (1440×430): camadas horizontais de tenants isolados, fila de
          eventos e observabilidade. Trilhas em verde sobre carvão com espaçamento amplo.
          Cada evento mantém identificador abstrato até seu destino. Sem mapa global,
          números de TPS, uptime ou gráficos ascendentes não comprovados. */}
            <ArtPlaceholder
              width={1440}
              height={430}
              label="Isolamento · consistência · observabilidade"
              dark
            />
          </div>
          <CardGroup columns={3} className={cn(gridThree, 'mt-8')}>
            <Card className={textCard}>
              <CardHeader>
                <p className={cn(micro, 'mb-4 text-brand')}>FRONTEIRAS CLARAS</p>
                <CardTitle className={cardTitle}>Cada contexto no seu lugar.</CardTitle>
                <CardDescription className={cardDescription}>
                  Arquitetura multi-tenant e permissões para delimitar dados, pessoas e ações.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className={textCard}>
              <CardHeader>
                <p className={cn(micro, 'mb-4 text-brand')}>INTEGRIDADE FINANCEIRA</p>
                <CardTitle className={cardTitle}>Estados, não suposições.</CardTitle>
                <CardDescription className={cardDescription}>
                  Idempotência e reconciliação para tratar repetições, falhas e resultados
                  pendentes.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className={textCard}>
              <CardHeader>
                <p className={cn(micro, 'mb-4 text-brand')}>VISIBILIDADE OPERACIONAL</p>
                <CardTitle className={cardTitle}>Saiba onde olhar.</CardTitle>
                <CardDescription className={cardDescription}>
                  Filas, métricas e registros contextualizados para acompanhar a saúde da
                  infraestrutura.
                </CardDescription>
              </CardHeader>
            </Card>
          </CardGroup>
        </Reveal>
      </div>
    </section>
  );
}
