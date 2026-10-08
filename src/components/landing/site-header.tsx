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

const menus = [
  {
    title: 'Plataforma',
    intro: 'Uma operação completa, com a sua marca.',
    items: [
      ['Gateway white label', 'Identidade e condições comerciais da sua operação.'],
      ['Checkout', 'Da oferta à experiência de pagamento.'],
      ['Gestão de sellers', 'Sua base, seus papéis e suas permissões.'],
      ['Financeiro', 'Receitas, custos, saldos e reservas.'],
      ['Multiadquirência', 'Processadores e regras de roteamento.'],
      ['Assinaturas', 'Ofertas e cobranças recorrentes.'],
    ],
  },
  {
    title: 'Soluções',
    intro: 'Infraestrutura para o seu modelo de negócio.',
    items: [
      ['Lançar minha fintech', 'Transforme pagamentos em um negócio próprio.'],
      ['Migrar minha operação', 'Evolua além dos limites da plataforma atual.'],
      ['Plataformas e marketplaces', 'Conecte participantes, produtos e pagamentos.'],
      ['Produtos digitais', 'Venda e entrega em uma experiência integrada.'],
    ],
  },
  {
    title: 'Desenvolvedores',
    intro: 'Conecte seu ecossistema à Paragan.',
    items: [
      ['Documentação', 'Conceitos e guias de implementação.'],
      ['Referência da API', 'Recursos e contratos de integração.'],
      ['Webhooks', 'Eventos que acompanham sua operação.'],
      ['Integrações', 'Conexões com os seus sistemas.'],
    ],
  },
  {
    title: 'Empresa',
    intro: 'Conheça quem está nos bastidores.',
    items: [
      ['Sobre a Paragan', 'Um modelo de excelência para fintechs.'],
      ['Conteúdos', 'Perspectivas sobre operações de pagamentos.'],
      ['Parceiros', 'Construa novas possibilidades conosco.'],
      ['Fale com a equipe', 'Vamos entender seu próximo passo.'],
    ],
  },
];

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
            aria-label="Navegação principal"
            className="hidden xl:flex"
          >
            <NavigationMenuList>
              {menus.map((menu) => (
                <NavigationMenuItem key={menu.title}>
                  <NavigationMenuTrigger>{menu.title}</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <p className="border-b border-border px-3 pt-2 pb-4 text-sm text-muted-foreground">
                      {menu.intro}
                    </p>
                    <FluidGroup className="grid grid-cols-2 gap-1 pt-2">
                      {menu.items.map(([title, description]) => (
                        <NavigationMenuLink key={title} asChild>
                          <Link href="#">
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
                  <Link href="#">Planos</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild variant="primary" size="sm" className={cn('hidden sm:inline-flex')}>
              <Link href="#">ENTRAR EM CONTATO</Link>
            </Button>
            <Button
              id="navigation-toggle"
              variant="secondary"
              size="icon-lg"
              className={cn('min-h-11 min-w-11 xl:hidden')}
              aria-label={open ? 'Fechar navegação' : 'Abrir navegação'}
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
            aria-label="Navegação mobile"
            className="max-h-dvh overflow-y-auto border-t border-border pb-24 xl:hidden"
          >
            {menus.map((menu) => (
              <details key={menu.title} className="group/mobile-menu border-b border-border py-2">
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
                  {menu.items.map(([title, description]) => (
                    <Link
                      key={title}
                      href="#"
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
              {['Planos', 'Entrar'].map((title) => (
                <Link
                  key={title}
                  href="#"
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-3 text-sm"
                >
                  {title}
                </Link>
              ))}
            </FluidGroup>
            <Button asChild variant="primary" className={cn('w-full')}>
              <Link href="#" onClick={() => setOpen(false)}>
                ENTRAR EM CONTATO
              </Link>
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
