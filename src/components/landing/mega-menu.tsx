'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { icons, type IconName } from '@/lib/icon-map';
import { cn } from '@/lib/utils';
import { FluidGroup } from './fluid-group';

export type MegaMenuLink = {
  id: string;
  title: string;
  href: string;
  description?: string;
  icon?: IconName;
};

export type MegaMenuColumn = {
  id: string;
  title?: string;
  items: readonly MegaMenuLink[];
};

export type MegaMenuDefinition = {
  id: string;
  title: string;
  intro: string;
  columns:
    | readonly [MegaMenuColumn]
    | readonly [MegaMenuColumn, MegaMenuColumn]
    | readonly [MegaMenuColumn, MegaMenuColumn, MegaMenuColumn];
  promotion?: {
    title: string;
    description: string;
    label: string;
    href: string;
    showIllustration?: boolean;
    placeholderLabel: string;
    illustration?: { src: string; alt: string; width: number; height: number };
  };
};

const columns = { 1: 'grid-cols-1', 2: 'grid-cols-2', 3: 'grid-cols-3' };

/** Navigation links, not an application role="menu": native Tab/Link behavior stays intact. */
export function MegaMenuPanel({
  menu,
  mobile = false,
  onNavigate,
}: {
  menu: MegaMenuDefinition;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();
  const Arrow = icons['arrow-right'];
  const Artwork = icons.dashboard;
  return (
    <div className={cn('flex min-w-0', mobile ? 'flex-col' : 'items-stretch')}>
      <div className="min-w-0 flex-1">
        <p className="border-b border-border px-5 py-4 text-sm leading-relaxed text-foreground-2 md:px-6">
          {menu.intro}
        </p>
        <div
          data-mega-menu-columns={menu.columns.length}
          className={cn(
            'grid',
            mobile ? menu.columns.length > 1 && 'sm:grid-cols-2' : columns[menu.columns.length],
          )}
        >
          {menu.columns.map((column, index) => (
            <div
              key={column.id}
              className={cn(
                'min-w-0 p-3 md:p-4',
                mobile && index === 2 && 'sm:col-span-2',
                index > 0 &&
                  (mobile
                    ? index === 2
                      ? 'border-t border-border'
                      : 'border-t border-border sm:border-t-0 sm:border-l'
                    : 'border-l border-border'),
              )}
            >
              {column.title && (
                <p className="px-3 pt-2 pb-3 text-sm font-medium text-foreground-2">
                  {column.title}
                </p>
              )}
              <FluidGroup as="ul" axis="y" className="space-y-1">
                {column.items.map((item) => {
                  const Icon = item.icon && icons[item.icon];
                  const current = !item.href.includes('#') && pathname === item.href;
                  const link = (
                    <Link
                      href={item.href}
                      aria-current={current ? 'page' : undefined}
                      onClick={onNavigate}
                      className="group/mega-link flex min-h-11 min-w-0 items-start gap-3 rounded-md p-3 text-foreground outline-offset-2 transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-focus-ring"
                    >
                      {Icon && (
                        <span className="flex size-10 shrink-0 items-center justify-center rounded-md border border-border bg-background text-foreground-2 transition-colors group-hover/mega-link:border-foreground-4">
                          <Icon size={20} />
                        </span>
                      )}
                      <span className="min-w-0 flex-1 self-center">
                        <span className="block text-sm leading-snug font-medium text-pretty">
                          {item.title}
                        </span>
                        {item.description && (
                          <span className="mt-1 block text-sm leading-relaxed text-pretty text-foreground-2">
                            {item.description}
                          </span>
                        )}
                      </span>
                    </Link>
                  );
                  return mobile ? (
                    <div key={item.id}>{link}</div>
                  ) : (
                    <NavigationMenuLink
                      key={item.id}
                      asChild
                      className="flex-row p-0 hover:text-foreground"
                    >
                      {link}
                    </NavigationMenuLink>
                  );
                })}
              </FluidGroup>
            </div>
          ))}
        </div>
      </div>
      {menu.promotion && (
        <div
          className={cn(
            'p-4',
            mobile ? 'border-t border-border' : 'w-80 shrink-0 border-l border-border',
          )}
        >
          <Link
            href={menu.promotion.href}
            onClick={onNavigate}
            className="group/mega-promotion flex h-full min-h-11 flex-col overflow-hidden rounded-xl border border-border bg-surface-1 text-foreground transition-colors hover:bg-hover focus-visible:outline-2 focus-visible:outline-focus-ring"
          >
            {menu.promotion.showIllustration !== false &&
              (menu.promotion.illustration ? (
                <Image
                  {...menu.promotion.illustration}
                  alt={menu.promotion.illustration.alt}
                  className="aspect-video w-full object-contain"
                  sizes="288px"
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="stripes flex aspect-video flex-col items-center justify-center gap-3 border-b border-dashed border-border bg-background/50 text-foreground-3"
                >
                  <span className="flex size-12 items-center justify-center rounded-xl border border-dashed border-border bg-background">
                    <Artwork size={24} />
                  </span>
                  <span className="font-mono text-xs">{menu.promotion.placeholderLabel}</span>
                </div>
              ))}
            <div className="flex flex-1 flex-col items-start p-5">
              <p className="font-display text-xl leading-tight font-medium text-pretty">
                {menu.promotion.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground-2">
                {menu.promotion.description}
              </p>
              <span className="mt-5 flex items-center gap-2 text-sm font-medium text-foreground">
                {menu.promotion.label}
                <Arrow size={16} />
              </span>
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export function DesktopMegaMenu({
  menus,
  label,
  action,
}: {
  menus: readonly MegaMenuDefinition[];
  label: string;
  action: { title: string; href: string };
}) {
  const [value, setValue] = useState('');
  useEffect(() => {
    const media = matchMedia('(min-width: 80rem)');
    const close = () => setValue('');
    media.addEventListener('change', close);
    return () => media.removeEventListener('change', close);
  }, []);
  return (
    <NavigationMenu
      value={value}
      onValueChange={setValue}
      viewport={false}
      aria-label={label}
      className="hidden xl:flex"
    >
      <NavigationMenuList>
        {menus.map((menu) => (
          <NavigationMenuItem key={menu.id} value={menu.id}>
            <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
            <NavigationMenuContent
              className="fixed top-20 left-1/2 -translate-x-1/2 overflow-y-auto overscroll-contain rounded-2xl p-0 shadow-lg"
              style={{
                width: `${(menu.columns.length + (menu.promotion ? 1 : 0)) * 20}rem`,
                maxWidth: 'calc(100vw - 2rem)',
                maxHeight: 'calc(100dvh - 6rem)',
              }}
            >
              <MegaMenuPanel menu={menu} onNavigate={() => setValue('')} />
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href={action.href}>{action.title}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export function MobileMegaMenu({
  menus,
  backLabel,
  onNavigate,
}: {
  menus: readonly MegaMenuDefinition[];
  backLabel: string;
  onNavigate: () => void;
}) {
  const [active, setActive] = useState<string | null>(null);
  const back = useRef<HTMLButtonElement>(null);
  const menu = menus.find((item) => item.id === active);
  const Arrow = icons['chevron-right'];
  useEffect(() => {
    if (active) back.current?.focus();
  }, [active]);
  if (menu) {
    return (
      <div>
        <button
          ref={back}
          type="button"
          onClick={() => {
            setActive(null);
            requestAnimationFrame(() => document.getElementById(`mobile-menu-${menu.id}`)?.focus());
          }}
          className="flex min-h-14 w-full items-center gap-3 border-b border-border px-5 text-left text-sm font-medium hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-ring"
        >
          <span className="rotate-180">
            <Arrow size={18} />
          </span>
          {backLabel}
          <span className="ml-auto text-foreground-3">{menu.title}</span>
        </button>
        <MegaMenuPanel menu={menu} mobile onNavigate={onNavigate} />
      </div>
    );
  }
  return (
    <ul className="divide-y divide-border">
      {menus.map((item) => (
        <li key={item.id}>
          <button
            id={`mobile-menu-${item.id}`}
            type="button"
            onClick={() => setActive(item.id)}
            className="flex min-h-14 w-full items-center justify-between gap-3 rounded-md px-5 py-4 text-left text-base font-medium hover:bg-hover focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-focus-ring"
          >
            {item.title}
            <Arrow size={18} />
          </button>
        </li>
      ))}
    </ul>
  );
}
