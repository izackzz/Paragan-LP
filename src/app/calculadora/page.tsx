import { InstitutionalShell } from '@/components/landing/institutional';
import { PageStructuredData } from '@/components/landing/page-structured-data';
import { ViabilityCalculator } from '@/components/landing/pages/calculadora/viability-calculator';
import { calculatorCopy } from '@/i18n/messages/pages/calculadora';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/calculadora', ...calculatorCopy.metadata });

export default function CalculatorPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={calculatorCopy.metadata.title}
        description={calculatorCopy.metadata.description}
        pathname="/calculadora"
      />
      <ViabilityCalculator />
    </InstitutionalShell>
  );
}
