import Link from 'next/link';
import Image from 'next/image';
import { HugeiconsIcon } from '@hugeicons/react';
import {
  InstagramIcon,
  NewTwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  ArrowUpRight01Icon,
} from '@hugeicons/core-free-icons';
import { FluidGroup } from './fluid-group';
import { frame, micro } from './styles';
import { cn } from '@/lib/utils';

const groups = [
  {
    title: 'Plataforma',
    links: [
      ['Gateway white label', '/#plataforma'],
      ['Controle da operação', '/#controle'],
      ['Checkout e ofertas', '/#checkout'],
      ['Gestão financeira', '/#financeiro'],
      ['API e webhooks', '/#integracoes'],
      ['Segurança e escala', '/#escala'],
    ],
  },
  {
    title: 'Soluções',
    links: [
      ['Lançar minha fintech', '/#solucoes'],
      ['Modernizar a operação', '/#solucoes'],
      ['Plataformas e marketplaces', '/#solucoes'],
      ['Produtos digitais', '/#checkout'],
      ['Implantação', '/#implantacao'],
      ['Conversar sobre meu projeto', '/#contato'],
    ],
  },
  {
    title: 'Recursos',
    links: [
      ['Integrações', '/#integracoes'],
      ['Perguntas frequentes', '/#perguntas'],
      ['Segurança da plataforma', '/#escala'],
      ['Conhecer a operação', '/#controle'],
      ['Logotipo SVG', '/brand-naming.svg'],
      ['Símbolo SVG', '/brand-icon.svg'],
    ],
  },
  {
    title: 'Paragan',
    links: [
      ['Nosso modelo de excelência', '#footer-brand'],
      ['A plataforma', '/#plataforma'],
      ['Para o seu negócio', '/#solucoes'],
      ['Fale com a equipe', '/#contato'],
      ['Solicitar termos de uso', '/#contato'],
      ['Solicitar política de privacidade', '/#contato'],
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

const badges = [
  { name: 'Reclame Aqui', src: '/assets/badges/reclame-aqui-placeholder.svg' },
  { name: 'PCI DSS', src: '/assets/badges/pci-dss-placeholder.svg' },
  { name: 'Amazon Web Services', src: '/assets/badges/aws-placeholder.svg' },
  { name: 'Tecnologia da plataforma', src: '/assets/badges/technology-placeholder.svg' },
];

const linkClass =
  'flex min-h-12 w-full items-center gap-3 bg-transparent px-5 py-3 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:relative focus-visible:z-20 focus-visible:-outline-offset-2 lg:px-7';

function FooterRail() {
  return (
    <div aria-hidden="true" className="grid grid-cols-2 border-y border-border">
      {[0, 1].map((index) => (
        <div
          key={index}
          className={cn('flex items-center gap-3 p-3', index === 1 && 'border-l border-border')}
        >
          <span className="h-2 flex-1 rounded-full border border-border" />
          <span className="size-2 rounded-full border border-border" />
          <span className="h-2 flex-1 rounded-full border border-border" />
        </div>
      ))}
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer
      aria-label="Rodapé Paragan"
      className="dark border-t border-border bg-background text-foreground"
    >
      <div className={frame}>
        <div aria-hidden="true" className="dots h-16 border-b border-border md:h-24" />
        <div className="grid grid-cols-2">
          <p
            className={cn(micro, 'border-r border-border px-5 py-6 text-muted-foreground lg:px-7')}
          >
            Paragan / Próximas conexões
          </p>
          <p className="flex items-center justify-end px-5 py-6 text-xs text-muted-foreground lg:px-7">
            Sua marca. Seu próximo capítulo.
          </p>
        </div>
        <FooterRail />

        <div className="grid lg:grid-cols-2">
          <div
            id="footer-brand"
            className="relative isolate flex min-h-80 scroll-mt-25 flex-col items-start overflow-hidden px-6 py-10 md:px-10 lg:p-12"
          >
            <Link
              href="/#inicio"
              aria-label="Paragan — início"
              className="relative z-10 inline-flex min-h-12 items-center gap-3 bg-transparent"
            >
              <Image src="/brand-icon.svg" width={44} height={44} alt="" className="size-11" />
              <Image
                src="/brand-naming.svg"
                width={205}
                height={60}
                alt="Paragan"
                className="h-10 w-auto"
              />
            </Link>
            <h2 className="relative z-10 mt-8 max-w-sm text-2xl leading-snug font-medium tracking-tight md:text-3xl">
              Um modelo de excelência.
              <br />
              <span className="text-muted-foreground">Uma operação com a sua marca.</span>
            </h2>
            <p className="relative z-10 mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              De <span className="text-foreground">paragon</span>: aquilo que serve de referência.
              Esse é o padrão que buscamos em cada conexão, decisão e experiência da sua operação.
            </p>
            <Link
              href="/#contato"
              className="relative z-10 mt-6 inline-flex min-h-11 items-center gap-2 bg-transparent text-sm text-foreground transition-colors hover:text-accent-2"
            >
              Construa seu próximo capítulo
              <HugeiconsIcon icon={ArrowUpRight01Icon} size={16} aria-hidden="true" />
            </Link>
            <div
              aria-hidden="true"
              className="dots pointer-events-none absolute inset-x-0 bottom-0 h-32 opacity-30"
            />
            <Image
              src="/brand-icon.svg"
              width={256}
              height={256}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -bottom-12 size-64 opacity-5"
            />
          </div>

          <div className="border-t border-border lg:border-t-0 lg:border-l">
            <div className="grid grid-cols-2">
              {badges.map((badge, index) => (
                <div
                  key={badge.name}
                  className={cn(
                    'min-w-0 p-5 lg:p-7',
                    index % 2 === 1 && 'border-l border-border',
                    index >= 2 && 'border-t border-border',
                  )}
                >
                  <p className="text-xs leading-relaxed text-muted-foreground">{badge.name}</p>
                  <Image
                    src={badge.src}
                    width={192}
                    height={72}
                    alt={`Espaço reservado para o selo ${badge.name}`}
                    className="mt-3 h-16 w-full object-contain object-left"
                  />
                  <p className="mt-2 text-xs text-muted-foreground">Imagem reservada</p>
                </div>
              ))}
            </div>
            <nav aria-label="Redes sociais da Paragan">
              <FluidGroup className="footer-social-links grid grid-cols-2 [&>div]:rounded-none">
                {socialChannels.map((channel) => {
                  const destination = socialDestination(channel.url);
                  return (
                    <Link
                      key={channel.label}
                      href={destination.href}
                      target={destination.external ? '_blank' : undefined}
                      rel={destination.external ? 'noopener noreferrer' : undefined}
                      className={cn(linkClass, 'gap-2 px-3 sm:gap-3 sm:px-5 lg:px-7')}
                      aria-label={`${channel.label}${destination.external ? ' — abre em nova aba' : ' — contato'}`}
                    >
                      <HugeiconsIcon
                        icon={channel.icon}
                        size={20}
                        aria-hidden="true"
                        className="shrink-0"
                      />
                      <span>{channel.label}</span>
                      <HugeiconsIcon
                        icon={ArrowUpRight01Icon}
                        size={14}
                        aria-hidden="true"
                        className="ml-auto hidden shrink-0 sm:block"
                      />
                    </Link>
                  );
                })}
              </FluidGroup>
            </nav>
          </div>
        </div>

        <FooterRail />
        <div aria-hidden="true" className="h-12 border-b border-border md:h-16" />
        <nav
          aria-label="Navegação do rodapé"
          className="footer-menu-columns grid sm:grid-cols-2 lg:grid-cols-4"
        >
          {groups.map((group, index) => (
            <section
              key={group.title}
              className="footer-menu-column min-w-0"
              aria-labelledby={`footer-menu-${index}`}
            >
              <h2
                id={`footer-menu-${index}`}
                className="flex min-h-16 items-center border-b border-border px-5 py-4 text-sm font-medium lg:px-7"
              >
                {group.title}
              </h2>
              <FluidGroup axis="y" className="footer-links [&>div]:rounded-none">
                {group.links.map(([label, href]) => (
                  <Link key={label} href={href} className={linkClass}>
                    {label}
                  </Link>
                ))}
              </FluidGroup>
            </section>
          ))}
        </nav>

        <div className="overflow-hidden border-y border-border px-6 py-8 md:px-10 md:py-12">
          <Image
            src="/brand-naming.svg"
            width={1230}
            height={360}
            alt=""
            aria-hidden="true"
            className="h-auto w-full opacity-20"
          />
        </div>
        <div className="grid border-b border-border lg:grid-cols-4">
          <p className="flex min-h-14 items-center border-b border-border px-5 py-4 text-xs text-muted-foreground lg:border-r lg:border-b-0 lg:px-7">
            © {new Date().getFullYear()} Paragan
          </p>
          <FluidGroup className="footer-legal-links grid sm:grid-cols-3 lg:col-span-3 [&>div]:rounded-none">
            <Link href="/#contato" className={linkClass}>
              Solicitar termos
            </Link>
            <Link href="/#contato" className={linkClass}>
              Privacidade e dados
            </Link>
            <Link href="/#contato" className={linkClass}>
              Contato e suporte
            </Link>
          </FluidGroup>
        </div>
        <FluidGroup className="grid md:grid-cols-2 [&>div]:rounded-none">
          <Link href="/#contato" className={cn(linkClass, 'min-h-16')}>
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent-2" />
            Vamos construir seu próximo capítulo
          </Link>
          <Link
            href="/#inicio"
            className={cn(
              linkClass,
              'min-h-16 border-t border-border md:justify-end md:border-t-0 md:border-l',
            )}
          >
            Voltar ao início ↑
          </Link>
        </FluidGroup>
        <FooterRail />
      </div>
    </footer>
  );
}
