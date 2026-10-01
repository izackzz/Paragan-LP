import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { ExperienceProvider } from '@/components/landing/experience-provider';
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-22 antialiased selection:bg-accent selection:text-foreground`}
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
