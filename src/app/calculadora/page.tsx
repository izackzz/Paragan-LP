import { InstitutionalShell } from '@/components/landing/institutional';
import { ViabilityCalculator } from '@/components/landing/pages/calculadora/viability-calculator';
import { calculatorCopy } from '@/i18n/messages/pages/calculadora';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/calculadora', ...calculatorCopy.metadata });

export default function CalculatorPage() {
  return (
    <InstitutionalShell>
      <ViabilityCalculator />
    </InstitutionalShell>
  );
}
