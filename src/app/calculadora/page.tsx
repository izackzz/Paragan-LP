import Link from 'next/link';
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
        homeLabel={calculatorCopy.breadcrumb.home}
        pageLabel={calculatorCopy.breadcrumb.current}
      />
      <nav
        aria-label={calculatorCopy.breadcrumb.label}
        className="landing-frame flex items-center border-b border-border px-5 py-2 text-sm text-foreground-2 md:px-7 xl:px-10"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link
              className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand"
              href="/"
            >
              {calculatorCopy.breadcrumb.home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {calculatorCopy.breadcrumb.current}
          </li>
        </ol>
      </nav>
      <ViabilityCalculator />
    </InstitutionalShell>
  );
}
