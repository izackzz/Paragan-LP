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
import { MotionRenderAscii } from '../ascii/motion-render-ascii';
import { content, t } from '@/i18n';
import { destinations } from '@/config/site';

const copy = content('footer');
const groups = Object.entries(destinations.footer.groups).map(([id, links]) => ({
  id,
  title: copy.groups[id as keyof typeof copy.groups].title,
  links: Object.entries(links).map(([linkId, href]) => ({
    id: linkId,
    href,
    label: t(`footer.groups.${id}.items.${linkId}` as Parameters<typeof t>[0]),
  })),
}));
const socialIcons = {
  instagram: InstagramIcon,
  twitter: NewTwitterIcon,
  telegram: TelegramIcon,
  whatsapp: WhatsappIcon,
};
const socialChannels = Object.entries(copy.social).map(([id, label]) => ({
  id,
  label,
  icon: socialIcons[id as keyof typeof socialIcons],
  url: destinations.social[id as keyof typeof destinations.social],
}));

function socialDestination(value: string | undefined) {
  if (value) {
    try {
      const url = new URL(value);
      if (url.protocol === 'https:') return { href: url.href, external: true };
    } catch {
      // Keep a working contact link until an official profile is configured.
    }
  }
  return { href: destinations.footer.contact, external: false };
}

const badges = Object.entries(copy.badges);
const linkClass =
  'flex min-h-11 w-full items-center gap-2 rounded-md bg-transparent px-3 py-2 text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground focus-visible:relative focus-visible:z-20 focus-visible:-outline-offset-2';

export function SiteFooter() {
  return (
    <footer
      aria-label={t('accessibility.footer')}
      className="dark border-t border-border bg-background text-foreground"
    >
      <div className={frame}>
        <div className="stripes flex flex-wrap items-center gap-3 border-b border-border px-6 py-4 md:px-8">
          <p className={cn(micro, 'text-muted-foreground')}>{copy.eyebrow}</p>
          <p className="text-xs text-muted-foreground md:ml-auto">{copy.tagline}</p>
        </div>

        <div className="grid lg:grid-cols-2">
          <div
            id="footer-brand"
            className="relative isolate flex scroll-mt-25 flex-col items-start overflow-hidden p-6 md:border-r md:p-8"
          >
            <Link
              href={destinations.footer.home}
              aria-label={t('brand.home')}
              className="relative z-10 inline-flex min-h-12 items-center gap-3 bg-transparent"
            >
              <AppLogo aria-hidden="true" className="h-10 w-auto" />
            </Link>
            <p className="relative z-10 mt-6 max-w-sm text-base leading-relaxed font-normal tracking-tight">
              {t('brand.promise')}
              <br />
              <span className="text-muted-foreground">{t('brand.supportingPromise')}</span>
            </p>
            <ActionLink href={destinations.contact} className="relative z-10 mt-6">
              {t('actions.explore')}
            </ActionLink>
            <RenderAscii
              render="clover"
              aspect="1/1"
              className="pointer-events-none absolute top-1/2 right-0 size-135 translate-x-1/2 -translate-y-1/2 text-primary"
              label={t('artwork.clover.dots')}
            />
          </div>

          <div className="flex flex-col justify-center border-t border-border p-6 md:p-8 lg:border-t-0">
            <ul className="mb-5 grid list-none grid-cols-2 gap-3 border-b border-border pb-5 text-sm leading-relaxed text-muted-foreground">
              {badges.map(([id, name]) => (
                <li key={id}>{name}</li>
              ))}
            </ul>
            <nav aria-label={t('accessibility.socialNavigation')}>
              <FluidGroup
                as="ul"
                className="m-0 grid list-none grid-cols-2 gap-1 rounded-lg border border-border p-2"
              >
                {socialChannels.map((channel) => {
                  const destination = socialDestination(channel.url);
                  return (
                    <Link
                      key={channel.id}
                      href={destination.href}
                      target={destination.external ? '_blank' : undefined}
                      rel={destination.external ? 'noopener noreferrer' : undefined}
                      className={linkClass}
                      aria-label={t(
                        destination.external
                          ? 'accessibility.externalLink'
                          : 'accessibility.contactLink',
                        { label: channel.label },
                      )}
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
          aria-label={t('accessibility.footerNavigation')}
          className="grid gap-5 border-t border-border p-6 md:grid-cols-3 md:p-8"
        >
          {groups.map((group, index) => (
            <Fragment key={group.id}>
              <section
                className="flex min-w-0 flex-col gap-0.5 rounded-md border p-2"
                aria-labelledby={`footer-menu-${index}`}
              >
                <h2
                  id={`footer-menu-${index}`}
                  className="rounded-md bg-surface-1 px-3 py-2 text-sm font-medium"
                >
                  {group.title}
                </h2>
                <FluidGroup as="ul" axis="y" className="m-0 grid list-none gap-0">
                  {group.links.map(({ id, label, href }) => (
                    <Link key={id} href={href} className={linkClass}>
                      {label}
                    </Link>
                  ))}
                </FluidGroup>
              </section>

              {index < groups.length - 1 && (
                <span className="hidden h-px w-full bg-border max-md:block" />
              )}
            </Fragment>
          ))}
        </nav>

        <div className="overflow-hidden border-y border-border px-6 py-6 md:px-8 md:py-8">
          <MotionRenderAscii
            render="paragan-wordmark"
            model="halftone"
            className="text-foreground"
            baseOpacity={0.2}
            fallback={<AppWordMark aria-hidden="true" className="h-auto w-full opacity-20" />}
          />
        </div>
        <div className="flex flex-wrap items-center gap-3 px-6 py-4 md:px-8">
          <p className="text-xs text-muted-foreground">
            {t('brand.copyright', { year: String(new Date().getFullYear()) })}
          </p>
          <FluidGroup as="ul" className="m-0 ml-auto list-none p-0">
            <Link href={destinations.footer.home} className={cn(linkClass, 'text-xs')}>
              {t('actions.backToTop')}
            </Link>
          </FluidGroup>
        </div>
      </div>
    </footer>
  );
}
