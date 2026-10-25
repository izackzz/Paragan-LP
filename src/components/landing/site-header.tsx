'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
import { springs } from '@/lib/springs';

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const reducedMotion = useReducedMotion();
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
        <motion.nav
          id="mobile-navigation"
          aria-hidden={!open}
          inert={!open}
          aria-label={t('accessibility.mobileNavigation')}
          initial={false}
          animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
          transition={reducedMotion ? { duration: 0 } : { ...springs.slow, bounce: 0 }}
          className="overflow-hidden xl:hidden"
        >
          <div
            className="my-3 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-background p-3"
            style={{ maxHeight: 'calc(100dvh - 6.5rem)' }}
          >
            <MobileMegaMenu menus={megaMenus} onNavigate={() => setOpen(false)} />
            <div className="mt-3 rounded-xl border border-border bg-surface-2 p-1">
              <Link
                href={destinations.header.actions.plans}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center rounded-lg px-3 py-3 text-sm font-medium text-foreground-2 hover:bg-surface-3"
              >
                {t('actions.plans')}
              </Link>
            </div>
            <div className="mt-3">
              <Button asChild variant="primary" className="min-h-11 w-full rounded-xl">
                <Link href={destinations.header.actions.contact} onClick={() => setOpen(false)}>
                  {t('actions.contact')}
                </Link>
              </Button>
            </div>
          </div>
        </motion.nav>
      </div>
    </header>
  );
}
