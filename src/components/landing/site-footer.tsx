import Link from 'next/link';
import { Fragment } from 'react';
import { AppLogo } from '@/components/assets/brand/logo';
import { AppWordMark } from '@/components/assets/brand/wordmark';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  InstagramIcon,
  NewTwitterIcon,
  TelegramIcon,
  WhatsappIcon,
} from '@hugeicons/core-free-icons';
import { FluidGroup } from './fluid-group';
import { frame, micro } from './styles';
import { cn } from '@/lib/utils';
import { ActionLink } from './primitives';
import { RenderAscii } from '../ascii/render-ascii';

const groups = [
  {
    title: 'Plataforma',
    links: [
      ['Visão geral', '/#plataforma'],
      ['Checkout', '/#checkout'],
      ['Gestão financeira', '/#financeiro'],
    ],
  },
  {
    title: 'Recursos',
    links: [
      ['Integrações', '/#integracoes'],
      ['Implantação', '/#implantacao'],
      ['Perguntas frequentes', '/#perguntas'],
    ],
  },
  {
    title: 'Paragan',
    links: [
      ['Nosso modelo de excelência', '#footer-brand'],
      ['Para o seu negócio', '/#solucoes'],
      ['Fale com a equipe', '/#contato'],
    ],
  },
] as const;

const socialChannels = [
  { label: 'Instagram', icon: InstagramIcon, url: process.env.PARAGAN_INSTAGRAM_URL },
  { label: 'X (Twitter)', icon: NewTwitterIcon, url: process.env.PARAGAN_X_URL },
  { label: 'Telegram', icon: TelegramIcon, url: process.env.PARAGAN_TELEGRAM_URL },
  { label: 'WhatsApp', icon: WhatsappIcon, url: process.env.PARAGAN_WHATSAPP_URL },
];

function socialDestination(value: string | undefined) {
  if (value) {
    try {
      const url = new URL(value);
      if (url.protocol === 'https:') return { href: url.href, external: true };
    } catch {
      // Keep a working contact link until an official profile is configured.
    }
  }
  return { href: '/#contato', external: false };
}

const badges = ['Reclame Aqui', 'PCI DSS', 'Amazon Web Services', 'Tecnologia da plataforma'];
const linkClass =
  'flex min-h-11 w-full items-center gap-2 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:relative focus-visible:z-20 focus-visible:-outline-offset-2';

export function SiteFooter() {
  return (
    <footer
      aria-label="Rodapé Paragan"
      className="dark border-t border-border bg-background text-foreground"
    >
      <div className={frame}>
        <div className="dots flex flex-wrap items-center gap-3 border-b border-border px-6 py-4 md:px-8">
          <p className={cn(micro, 'text-muted-foreground')}>Paragan / Próximas conexões</p>
          <p className="text-xs text-muted-foreground md:ml-auto">
            Sua marca. Seu próximo capítulo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2">
          <div
            id="footer-brand"
            className="relative isolate flex scroll-mt-25 flex-col items-start overflow-hidden p-6 md:border-r md:p-8"
          >
            <Link
              href="/#inicio"
              aria-label="Paragan — início"
              className="relative z-10 inline-flex min-h-12 items-center gap-3 bg-transparent"
            >
              <AppLogo aria-hidden="true" className="h-10 w-auto" />
            </Link>
            <p className="relative z-10 mt-6 max-w-sm text-base leading-relaxed font-normal tracking-tight">
              Um modelo de excelência.
              <br />
              <span className="text-muted-foreground">Uma operação com a sua marca.</span>
            </p>
            <ActionLink href="#contato" className="relative z-10 mt-6">
              Explorar minha operação
            </ActionLink>
            <RenderAscii
              render="clover"
              aspect="1/1"
              className="pointer-events-none absolute top-1/2 right-0 size-135 translate-x-1/2 -translate-y-1/2 text-primary"
              label="Trevo Paragan animado em pontos halftone"
            />
          </div>

          <div className="flex flex-col justify-center border-t border-border p-6 md:p-8 lg:border-t-0">
            <ul className="mb-5 grid list-none grid-cols-2 gap-3 border-b border-border pb-5 text-sm leading-relaxed text-muted-foreground">
              {badges.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <nav aria-label="Redes sociais da Paragan">
              <FluidGroup
                as="ul"
                className="m-0 grid list-none grid-cols-2 gap-1 rounded-lg border border-border p-2"
              >
                {socialChannels.map((channel) => {
                  const destination = socialDestination(channel.url);
                  return (
                    <Link
                      key={channel.label}
                      href={destination.href}
                      target={destination.external ? '_blank' : undefined}
                      rel={destination.external ? 'noopener noreferrer' : undefined}
                      className={linkClass}
                      aria-label={`${channel.label}${destination.external ? ' — abre em nova aba' : ' — contato'}`}
                    >
                      <HugeiconsIcon
                        icon={channel.icon}
                        size={18}
                        aria-hidden="true"
                        className="shrink-0"
                      />
                      <span>{channel.label}</span>
                    </Link>
                  );
                })}
              </FluidGroup>
            </nav>
          </div>
        </div>

        <nav
          aria-label="Navegação do rodapé"
          className="grid gap-5 border-t border-border p-6 md:grid-cols-3 md:p-8"
        >
          {groups.map((group, index) => (
            <Fragment key={group.title}>
              <section className="min-w-0 gap-0.5 border p-2 rounded-md flex flex-col" aria-labelledby={`footer-menu-${index}`}>
                <h2 id={`footer-menu-${index}`} className="rounded-md bg-surface-1 px-3 py-2 text-sm font-medium">
                  {group.title}
                </h2>
                <FluidGroup as="ul" axis="y" className="m-0 grid list-none gap-0">
                  {group.links.map(([label, href]) => (
                    <Link key={label} href={href} className={linkClass}>
                      {label}
                    </Link>
                  ))}
                </FluidGroup>
              </section>

              {index < groups.length - 1 && <span className="hidden h-px w-full bg-border max-md:block" />}
            </Fragment>
          ))}
        </nav>

        <div className="overflow-hidden border-y border-border px-6 py-6 md:px-8 md:py-8">
          <AppWordMark aria-hidden="true" className="h-auto w-full opacity-20" />
        </div>
        <div className="flex flex-wrap items-center gap-3 px-6 py-4 md:px-8">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Paragan</p>
          <FluidGroup as="ul" className="m-0 ml-auto list-none p-0">
            <Link href="/#inicio" className={cn(linkClass, 'text-xs')}>
              Voltar ao início ↑
            </Link>
          </FluidGroup>
        </div>
      </div>
    </footer>
  );
}
