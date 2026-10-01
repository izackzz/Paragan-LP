'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brand, ActionLink } from './primitives';
import { FluidGroup } from './fluid-group';
import { icons } from '@/lib/icon-map';
import { cn } from '@/lib/utils';

const links = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#checkout', label: 'Checkout' },
  { href: '#integracoes', label: 'Integrações' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 32);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  const Menu = open ? icons.x : icons.menu;
  return (
    <header className="pointer-events-none sticky top-3 z-50 px-3 md:px-6">
      <div
        className={cn(
          'pointer-events-auto mx-auto border border-border bg-background/85 backdrop-blur-xs transition-all duration-300 motion-reduce:transition-none',
          scrolled ? 'w-fit max-w-full rounded-2xl' : 'w-full max-w-7xl rounded-md',
        )}
        onKeyDown={(event) => {
          if (event.key === 'Escape') {
            setOpen(false);
            document.getElementById('navigation-toggle')?.focus();
          }
        }}
      >
        <div className="flex min-h-20 items-center justify-between gap-4 px-4 py-3 md:px-6">
          <Brand />
          <nav aria-label="Navegação principal" className="hidden items-center gap-2 lg:flex">
            <FluidGroup axis="x" className="flex items-center gap-1">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </FluidGroup>
          </nav>
          <div className="flex items-center gap-2">
            <ActionLink className="hidden text-sm sm:inline-flex">Lançar minha fintech</ActionLink>
            <Button
              id="navigation-toggle"
              variant="secondary"
              size="icon-lg"
              className={cn('min-h-11 min-w-11 lg:hidden')}
              aria-label={open ? 'Fechar navegação' : 'Abrir navegação'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              onClick={() => setOpen(!open)}
            >
              <Menu size={22} />
            </Button>
          </div>
        </div>
        {open && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="flex flex-col gap-2 border-t border-border p-4 lg:hidden"
          >
            <FluidGroup axis="y">
              {[...links, { href: '#contato', label: 'Lançar minha fintech' }].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-4 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </FluidGroup>
          </nav>
        )}
      </div>
    </header>
  );
}
