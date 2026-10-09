import Link from 'next/link';
import { SiteHeader } from '@/components/landing/site-header';
import { SiteFooter } from '@/components/landing/site-footer';
import { HeroSection } from '@/components/landing/sections/hero-section';
import { ControlSection } from '@/components/landing/sections/control-section';
import { CheckoutSection } from '@/components/landing/sections/checkout-section';
import { FinanceSection } from '@/components/landing/sections/finance-section';
import { IntegrationsSection } from '@/components/landing/sections/integrations-section';
import { ScaleSection } from '@/components/landing/sections/scale-section';
import { SolutionsSection } from '@/components/landing/sections/solutions-section';
import { LaunchSection } from '@/components/landing/sections/launch-section';
import { FaqSection } from '@/components/landing/sections/faq-section';
import { ContactSection } from '@/components/landing/sections/contact-section';
import { t } from '@/i18n';
import { destinations } from '@/config/site';

export default function Home() {
  return (
    <>
      <div aria-hidden="true" className="stripes landing-side-stripes left-0" />
      <div aria-hidden="true" className="stripes landing-side-stripes right-0" />
      <Link
        href={destinations.content}
        className="fixed -top-20 left-4 z-100 rounded-lg bg-foreground px-5 py-3.5 text-background focus:top-3"
      >
        {t('accessibility.skipContent')}
      </Link>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1}>
        <HeroSection />
        <SolutionsSection />
        <ControlSection />
        <FinanceSection />
        <CheckoutSection />
        <IntegrationsSection />
        <ScaleSection />
        <LaunchSection />
        <FaqSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
