import Link from 'next/link';
import { Brand, ActionLink } from './primitives';
import { FluidGroup } from './fluid-group';
import { frame, micro } from './styles';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const groups = [
  {
    title: 'PLATAFORMA',
    links: [
      ['Visão geral', '#plataforma'],
      ['Controle da operação', '#controle'],
      ['Gestão financeira', '#financeiro'],
    ],
  },
  {
    title: 'PRODUTO',
    links: [
      ['Checkout & ofertas', '#checkout'],
      ['Integrações', '#integracoes'],
      ['Segurança & escala', '#escala'],
    ],
  },
  {
    title: 'PRÓXIMO PASSO',
    links: [
      ['Para quem é', '#solucoes'],
      ['Implantação', '#implantacao'],
      ['Perguntas frequentes', '#perguntas'],
      ['Vamos conversar', '#contato'],
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="dark bg-background text-foreground">
      <div className={frame}>
        <div className="grid grid-cols-2 gap-x-5 gap-y-9 px-6 py-10 md:grid-cols-4 md:gap-9 md:px-9 md:py-14">
          <div>
            <Brand />
            <p className="mt-5 max-w-52 text-sm leading-6 text-foreground-3">
              Sua marca na frente.
              <br />
              Uma operação conectada por trás.
            </p>
            <ActionLink className="mt-6 text-sm">Criar minha fintech</ActionLink>
          </div>
          {groups.map((group) => (
            <div key={group.title}>
              <h2 className={cn(micro, 'mb-4 text-foreground-3')}>{group.title}</h2>
              <FluidGroup axis="y">
                {group.links.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="block min-h-11 rounded-md px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {label}
                  </Link>
                ))}
              </FluidGroup>
            </div>
          ))}
        </div>
        <div className="overflow-hidden border-y border-border px-5 pt-6 md:px-8">
          <Image
            src="/brand-naming.svg"
            width={1230}
            height={360}
            alt=""
            aria-hidden="true"
            className="h-auto w-full opacity-10"
          />
        </div>
        <div
          className={cn(
            micro,
            'flex flex-wrap items-center justify-between gap-5 px-5 py-5 text-foreground-3 md:px-8',
          )}
        >
          <span>© {new Date().getFullYear()} Paragan</span>
          <span className="hidden md:block">INFRAESTRUTURA PARA O SEU PRÓXIMO CAPÍTULO</span>
          <FluidGroup axis="x">
            <Link
              href="#inicio"
              className="block rounded-md px-3 py-3 text-xs transition-colors hover:text-foreground"
            >
              Voltar ao início ↑
            </Link>
          </FluidGroup>
        </div>
      </div>
    </footer>
  );
}
