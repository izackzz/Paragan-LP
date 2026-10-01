import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ExperienceProvider } from "@/components/landing/experience-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Paragan — Seu gateway. Sua marca. O controle da operação.",
  description: "Infraestrutura de pagamentos white label para conectar sellers, checkout, regras comerciais e gestão financeira em uma operação sob sua marca.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-pt-22 antialiased selection:bg-accent selection:text-foreground`}
    >
      <body className="min-h-full bg-background text-foreground motion-reduce:[&_*]:animate-none motion-reduce:[&_*]:transition-none"><ExperienceProvider>{children}</ExperienceProvider></body>
    </html>
  );
}
