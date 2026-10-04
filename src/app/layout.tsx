import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ExperienceProvider } from '@/components/landing/experience-provider';
import { Analytics } from '@vercel/analytics/next';

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
  title: 'Paragan — O modelo de excelência para fintechs com marca própria.',
  description:
    'Infraestrutura white label para fintechs eficientes: gateway, checkout, sellers e gestão financeira sob a marca da sua operação.',
  icons: { icon: '/brand-icon.svg', apple: '/assets/brand/paragan-fav.png' },
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang="pt-BR"
      className={`${faktum.variable} ${galano.variable} ${rationalMix.variable} h-full scroll-pt-22 antialiased selection:bg-accent selection:text-foreground`}
    >
      <body className="min-h-full bg-background text-foreground motion-reduce:**:animate-none motion-reduce:**:transition-none">
        <ExperienceProvider>
          {children}
          <Analytics />
        </ExperienceProvider>
      </body>
    </html>
  );
}
