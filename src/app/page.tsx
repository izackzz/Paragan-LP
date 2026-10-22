import Link from 'next/link';
import type { Metadata } from 'next';
import { SiteHeader } from '@/components/landing/site-header';
import { SiteFooter } from '@/components/landing/site-footer';
import { HeroSection } from '@/components/landing/sections/hero-section';
import { PlatformSection } from '@/components/landing/sections/platform-section';
import { ControlSection } from '@/components/landing/sections/control-section';
import { CheckoutSection } from '@/components/landing/sections/checkout-section';
import { FinanceSection } from '@/components/landing/sections/finance-section';
import { IntegrationsSection } from '@/components/landing/sections/integrations-section';
import { ScaleSection } from '@/components/landing/sections/scale-section';
import { SolutionsSection } from '@/components/landing/sections/solutions-section';
import { LaunchSection } from '@/components/landing/sections/launch-section';
import { FaqSection } from '@/components/landing/sections/faq-section';
import { ContactSection } from '@/components/landing/sections/contact-section';
import { content, locale, t } from '@/i18n';
import { destinations } from '@/config/site';
import { siteSeo } from '@/config/seo';

const homeMetadata = content('homeMetadata');

export const metadata: Metadata = {
  title: homeMetadata.title,
  description: homeMetadata.description,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: siteSeo.name,
    locale: siteSeo.locale,
    title: t('metadata.socialTitle'),
    description: t('metadata.socialDescription'),
    images: [{ ...siteSeo.image, alt: t('metadata.socialImageAlt') }],
  },
};

const websiteId = `${siteSeo.url}/#website`;
const organizationId = `${siteSeo.url}/#organization`;
const pageId = `${siteSeo.url}/#webpage`;
const faqId = `${siteSeo.url}/#perguntas`;
const homeQuestions = content('questions');

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': organizationId,
      name: siteSeo.name,
      url: `${siteSeo.url}/`,
      logo: `${siteSeo.url}/favicon-primary.png`,
      description: t('metadata.description'),
    },
    {
      '@type': 'WebSite',
      '@id': websiteId,
      url: `${siteSeo.url}/`,
      name: siteSeo.name,
      description: t('metadata.description'),
      inLanguage: 'pt-BR',
      publisher: { '@id': organizationId },
    },
    {
      '@type': 'WebPage',
      '@id': pageId,
      url: `${siteSeo.url}/`,
      name: homeMetadata.title,
      description: homeMetadata.description,
      inLanguage: locale,
      isPartOf: { '@id': websiteId },
      publisher: { '@id': organizationId },
      mainEntity: { '@id': faqId },
    },
    {
      '@type': 'FAQPage',
      '@id': faqId,
      url: `${siteSeo.url}/#perguntas`,
      name: `${homeQuestions.heading.primary} ${homeQuestions.heading.secondary}`,
      inLanguage: locale,
      isPartOf: { '@id': pageId },
      mainEntityOfPage: { '@id': pageId },
      mainEntity: Object.values(homeQuestions.items).map(({ question, answer }) => ({
        '@type': 'Question',
        name: question,
        acceptedAnswer: { '@type': 'Answer', text: answer },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
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
        <PlatformSection />
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
