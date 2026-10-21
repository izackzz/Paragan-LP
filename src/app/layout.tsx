import type { Metadata } from 'next';
import localFont from 'next/font/local';
import Script from 'next/script';
import './globals.css';
import { ExperienceProvider } from '@/components/landing/experience-provider';
import { Analytics } from '@vercel/analytics/next';
import { themeScript } from '@/lib/theme';
import { locale, t } from '@/i18n';
import { siteSeo } from '@/config/seo';

const faktum = localFont({
  src: [
    { path: '../../public/fonts/neue-faktum/Neue Faktum Regular.woff2', weight: '400' },
    { path: '../../public/fonts/neue-faktum/Neue Faktum Medium.woff2', weight: '500' },
  ],
  variable: '--font-faktum',
});

const galano = localFont({
  src: [
    { path: '../../public/fonts/neue-galano/Neue Galano Regular.woff2', weight: '400' },
    { path: '../../public/fonts/neue-galano/Neue Galano Medium.woff2', weight: '500' },
    { path: '../../public/fonts/neue-galano/Neue Galano SemiBold.woff2', weight: '600' },
  ],
  variable: '--font-galano',
});

const rationalMix = localFont({
  src: '../../public/fonts/neue-rational-mix/Neue Rational Mix Regular.woff2',
  variable: '--font-rational-mix',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteSeo.url),
  title: t('metadata.title'),
  description: t('metadata.description'),
  applicationName: siteSeo.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    type: 'website',
    siteName: siteSeo.name,
    locale: siteSeo.locale,
    title: t('metadata.socialTitle'),
    description: t('metadata.socialDescription'),
    images: [{ ...siteSeo.image, alt: t('metadata.socialImageAlt') }],
  },
  twitter: {
    card: 'summary_large_image',
    title: t('metadata.socialTitle'),
    description: t('metadata.socialDescription'),
    images: [{ url: siteSeo.image.url, alt: t('metadata.socialImageAlt') }],
  },
  icons: {
    icon: { url: '/favicon-primary.png', type: 'image/png', sizes: '180x180' },
    apple: '/favicon-primary.png',
  },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${faktum.variable} ${galano.variable} ${rationalMix.variable} h-full scroll-pt-22 tabular-nums antialiased selection:bg-accent selection:text-foreground`}
    >
      <head>
        <Script
          id="paragan-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeScript }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground motion-reduce:**:animate-none motion-reduce:**:transition-none">
        <ExperienceProvider>
          {children}
          <Analytics />
        </ExperienceProvider>
      </body>
    </html>
  );
}
