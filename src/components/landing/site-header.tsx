'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Brand } from './primitives';
import { FluidGroup } from './fluid-group';
import { ThemeToggle } from './theme-toggle';
import { icons } from '@/lib/icon-map';
import { frame } from './styles';
import { cn } from '@/lib/utils';
import { content, t } from '@/i18n';
import { destinations } from '@/config/site';

const menus = Object.entries(content('navigation'));

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const MenuIcon = open ? icons.x : icons.menu;
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xs">
      <div
        className={cn(frame, 'px-5 md:px-7 xl:px-10')}
        onKeyDown={(event) => {
          if (event.key === 'Escape' && open) {
            setOpen(false);
            document.getElementById('navigation-toggle')?.focus();
          }
        }}
      >
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Brand />
          <NavigationMenu
            viewport={false}
            aria-label={t('accessibility.primaryNavigation')}
            className="hidden xl:flex"
          >
            <NavigationMenuList>
              {menus.map(([id, menu]) => (
                <NavigationMenuItem key={id}>
                  <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <p className="border-b border-border px-3 pt-2 pb-4 text-sm text-muted-foreground">
                      {menu.intro}
                    </p>
                    <FluidGroup className={cn('grid gap-1 pt-2', (id === 'platform' || id === 'developers') && 'grid-cols-2')}>
                      {Object.entries(menu.items).map(([itemId, { title, description }]) => (
                        <NavigationMenuLink key={itemId} asChild>
                          <Link
                            href={
                              destinations.header.items[
                                itemId as keyof typeof destinations.header.items
                              ]
                            }
                          >
                            <span className="font-medium">{title}</span>
                            <span className="text-xs leading-relaxed text-muted-foreground">
                              {description}
                            </span>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </FluidGroup>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ))}
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle())}>
                  <Link href={destinations.header.actions.plans}>{t('actions.plans')}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="primary" size="sm" className={cn('hidden sm:inline-flex')}>
              <Link href={destinations.header.actions.contact}>{t('actions.contact')}</Link>
            </Button>
            <Button
              id="navigation-toggle"
              variant="secondary"
              size="icon-lg"
              className={cn('min-h-11 min-w-11 xl:hidden')}
              aria-label={t(
                open ? 'accessibility.closeNavigation' : 'accessibility.openNavigation',
              )}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              <MenuIcon size={22} />
            </Button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label={t('accessibility.mobileNavigation')}
            className="max-h-dvh overflow-y-auto border-t border-border pb-24 xl:hidden"
          >
            {menus.map(([id, menu]) => (
              <details key={id} className="group/mobile-menu border-b border-border py-2">
                <summary className="flex min-h-12 cursor-pointer list-none items-center justify-between gap-3 rounded-md px-3 text-sm font-medium marker:hidden">
                  {menu.title}
                  <span
                    aria-hidden="true"
                    className="transition-transform group-open/mobile-menu:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <FluidGroup axis="y" className="pb-3">
                  {Object.entries(menu.items).map(([itemId, { title, description }]) => (
                    <Link
                      key={itemId}
                      href={
                        destinations.header.items[itemId as keyof typeof destinations.header.items]
                      }
                      onClick={() => setOpen(false)}
                      className="flex flex-col gap-1 rounded-md px-3 py-3 text-sm"
                    >
                      <span>{title}</span>
                      <span className="text-xs text-muted-foreground">{description}</span>
                    </Link>
                  ))}
                </FluidGroup>
              </details>
            ))}
            <FluidGroup axis="y" className="py-3">
              {(['plans'] as const).map((action) => (
                <Link
                  key={action}
                  href={destinations.header.actions[action]}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm"
                >
                  {t(`actions.${action}`)}
                </Link>
              ))}
            </FluidGroup>
            <Button asChild variant="primary" className={cn('w-full')}>
              <Link href={destinations.header.actions.contact} onClick={() => setOpen(false)}>
                {t('actions.contact')}
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
