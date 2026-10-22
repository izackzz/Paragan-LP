import Link from 'next/link';
import {
  InstitutionalShell,
  ModulePairsSection,
  PageFaqSection,
  PageHero,
  RelatedLinksSection,
  InstitutionalSection,
} from '@/components/landing/institutional';
import { CheckoutEditorialSection } from '@/components/landing/pages/checkout/checkout-editorial';
import { PageStructuredData } from '@/components/landing/page-structured-data';
import { formatIndex } from '@/i18n';
import { cardDescription, cardTitle, micro } from '@/components/landing/styles';
import { checkoutPage as copy } from '@/i18n/messages/pages/checkout';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/checkout', ...copy.metadata });

const total = 7;

export default function CheckoutPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={copy.metadata.title}
        description={copy.metadata.description}
        pathname="/checkout"
        homeLabel={copy.breadcrumb.home}
        pageLabel={copy.breadcrumb.current}
      />
      <nav
        aria-label={copy.breadcrumb.label}
        className="landing-frame flex items-center border-b border-border px-5 py-2 text-sm text-foreground-2 md:px-7 xl:px-10"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link
              className="inline-flex min-h-11 items-center underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-brand"
              href="/"
            >
              {copy.breadcrumb.home}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className="text-foreground">
            {copy.breadcrumb.current}
          </li>
        </ol>
      </nav>
      <PageHero {...copy.hero} />
      <InstitutionalSection id="jornada" index={1} total={total} label={copy.journey.label}>
        <div className="p-6 md:p-8">
          <h2 className="text-3xl leading-tight font-medium tracking-tight md:text-4xl">
            {copy.journey.heading.title}{' '}
            <span className="text-foreground-2">{copy.journey.heading.muted}</span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground-2">
            {copy.journey.heading.description}
          </p>
        </div>
        <ol className="grid grid-cols-1 border-t border-border md:grid-cols-2">
          {copy.journey.items.map((item, i) => (
            <li key={item.id} className="min-w-0 border-b border-border p-6 md:p-8 md:odd:border-r">
              <span aria-hidden="true" className={`${micro} mb-4 block text-foreground-2`}>
                {formatIndex(i + 1)}
              </span>
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardDescription}>{item.description}</p>
            </li>
          ))}
        </ol>
        <p className="border-t border-border p-6 text-sm leading-relaxed text-foreground-2 md:p-8">
          {copy.journey.note}
        </p>
      </InstitutionalSection>
      <ModulePairsSection id="configuracao" index={2} total={total} {...copy.composition} />
      <CheckoutEditorialSection id="assinaturas" index={3} total={total} {...copy.subscriptions} />
      <CheckoutEditorialSection id="entrega-digital" index={4} total={total} {...copy.delivery} />
      <CheckoutEditorialSection id="integracoes" index={5} total={total} {...copy.integrations} />
      <PageFaqSection id="perguntas" index={6} total={total} {...copy.faq} />
      <RelatedLinksSection id="proximas-conexoes" index={7} total={total} {...copy.related} />
    </InstitutionalShell>
  );
}
