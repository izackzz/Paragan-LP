'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brand } from './primitives';
import { DesktopMegaMenu, MobileMegaMenu } from './mega-menu';
import { ThemeToggle } from './theme-toggle';
import { icons } from '@/lib/icon-map';
import { frame } from './styles';
import { cn } from '@/lib/utils';
import { t } from '@/i18n';
import { destinations } from '@/config/site';
import { megaMenus } from '@/config/navigation';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const MenuIcon = open ? icons.x : icons.menu;

  useEffect(() => {
    const media = matchMedia('(min-width: 80rem)');
    const close = () => setOpen(false);
    media.addEventListener('change', close);
    return () => media.removeEventListener('change', close);
  }, []);

  useEffect(() => {
    if (!open) return;
    const outside = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target))
        setOpen(false);
    };
    document.addEventListener('pointerdown', outside);
    return () => document.removeEventListener('pointerdown', outside);
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur-xs"
      onBlurCapture={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape' && open) {
          setOpen(false);
          toggleRef.current?.focus();
        }
      }}
    >
      <div className={cn(frame, 'px-5 md:px-7 xl:px-10')}>
        <div className="flex min-h-20 items-center justify-between gap-4">
          <Brand />
          <DesktopMegaMenu
            menus={megaMenus}
            label={t('accessibility.primaryNavigation')}
            action={{ title: t('actions.plans'), href: destinations.header.actions.plans }}
          />
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
              <Link href={destinations.header.actions.contact}>{t('actions.contact')}</Link>
            </Button>
            <Button
              ref={toggleRef}
              id="navigation-toggle"
              variant="secondary"
              size="icon-lg"
              className="min-h-11 min-w-11 xl:hidden"
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
        <nav
          id="mobile-navigation"
          hidden={!open}
          aria-label={t('accessibility.mobileNavigation')}
          className="overflow-y-auto overscroll-contain border-t border-border pb-6 xl:hidden"
          style={{ maxHeight: 'calc(100dvh - 5rem)' }}
        >
          {open && (
            <MobileMegaMenu
              menus={megaMenus}
              backLabel={t('megaMenu.back')}
              onNavigate={() => setOpen(false)}
            />
          )}
          <div className="border-t border-border px-3 py-3">
            <Link
              href={destinations.header.actions.plans}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 py-3 text-sm hover:bg-hover"
            >
              {t('actions.plans')}
            </Link>
          </div>
          <div className="px-3">
            <Button asChild variant="primary" className="min-h-11 w-full">
              <Link href={destinations.header.actions.contact} onClick={() => setOpen(false)}>
                {t('actions.contact')}
              </Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
