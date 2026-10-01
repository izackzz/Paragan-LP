'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Brand, ActionLink } from './primitives';
import { FluidGroup } from './fluid-group';
import { icons } from '@/lib/icon-map';
import { frame } from './styles';
import { cn } from '@/lib/utils';
import Image from 'next/image';
const navLink =
  'block min-h-11 rounded-lg px-3 py-3.5 text-xs text-muted-foreground transition-colors hover:text-foreground';

const links = [
  { href: '#plataforma', label: 'Plataforma' },
  { href: '#checkout', label: 'Checkout' },
  { href: '#integracoes', label: 'Integrações' },
  { href: '#escala', label: 'Por que Paragan' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const Menu = open ? icons.x : icons.menu;
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-lg">
      <div className="border-b border-border bg-card/80 text-center">
        <Link
          href="#controle"
          className="inline-flex min-h-9 items-center gap-2 px-4 text-xs text-foreground-2 transition-colors hover:text-accent-2"
        >
          <Image src="/brand-icon.svg" width={15} height={15} alt="" aria-hidden="true" />
          <span className="rounded-xs bg-accent-1/15 px-1.5 py-0.5 font-mono text-xs tracking-wide text-accent-1 uppercase">
            PARAGAN
          </span>
          <span>Infraestrutura para quem quer operar com a própria marca</span>
          <span aria-hidden="true" className="text-accent-2">
            ↗
          </span>
        </Link>
      </div>
      <div
        className={cn(
          frame,
          'flex h-17 items-center justify-between gap-6 px-4 md:h-19 md:px-6 xl:px-8',
        )}
      >
        <Brand />
        <nav aria-label="Navegação principal" className="hidden lg:block">
          <FluidGroup axis="x" className="flex items-center gap-1">
            {links.map((link) => (
              <Link key={link.href} href={link.href} className={navLink}>
                {link.label}
              </Link>
            ))}
          </FluidGroup>
        </nav>
        <div className="flex items-center gap-3">
          <ActionLink className="hidden sm:inline-flex">Vamos conversar</ActionLink>
          <Button
            variant="ghost"
            size="icon-lg"
            className="min-h-11 min-w-11 lg:hidden"
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
          className={cn(frame, 'border-t border-border px-5 pt-3 pb-5 lg:hidden')}
        >
          <FluidGroup axis="y">
            {[...links, { href: '#contato', label: 'Vamos conversar' }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={navLink}
              >
                {link.label}
              </Link>
            ))}
          </FluidGroup>
        </nav>
      )}
    </header>
  );
}
