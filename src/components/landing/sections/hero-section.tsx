'use client';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { ArtPlaceholder } from '../primitives';
import { FluidGroup } from '../fluid-group';
import { frame, micro, eyebrow } from '../styles';
import { cn } from '@/lib/utils';
import { Frame } from '@/components/ui/frame';
import { Button } from '@/components/ui/button';
import { IconAffiliates, IconGateways, IconSwatchBook } from '@/components/assets/custom-icons';
import { content, t } from '@/i18n';
import Link from 'next/link';
import { ContactIntentLink } from '../contact-intent-link';
import { destinations } from '@/config/site';

const copy = content('introduction');
const previewIcons = { gateway: IconGateways, seller: IconAffiliates, checkout: IconSwatchBook };
const previews = Object.entries(copy.previews).map(([value, preview]) => ({
  ...preview,
  value,
  icon: previewIcons[value as keyof typeof previewIcons],
}));

export function HeroSection() {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className={cn(frame, 'relative isolate scroll-mt-22 overflow-clip border-b border-border')}
    >
      <div className="mx-auto max-w-3xl px-5 pt-16 pb-12 text-left md:px-7 md:pt-25 md:pb-8 lg:text-center xl:px-10">
        <p className={eyebrow}>{copy.eyebrow}</p>
        <h1
          id="hero-title"
          className="max-w-4xl text-3xl font-medium tracking-tight text-balance lg:text-5xl/12"
        >
          {copy.heading.primary}
          <br />
          <span className="text-foreground-3">{copy.heading.secondary}</span>
        </h1>
        <p className="mt-6 mb-7 max-w-2xl text-base leading-7 text-muted-foreground md:mx-auto md:text-lg">
          {copy.description}
        </p>
        <div className="flex w-full flex-col gap-2 sm:flex-row lg:justify-center">
          <Button asChild size="lg" className="w-full sm:w-fit" variant="cta">
            <ContactIntentLink origin="inicio">{t('actions.consult')}</ContactIntentLink>
          </Button>
          <Button asChild size="lg" className="w-full sm:w-fit" variant="secondary">
            <Link href={destinations.productPreview}>{t('actions.demo')}</Link>
          </Button>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <span className="mb-2 block font-mono text-caption">{copy.previewLabel}</span>
          {copy.supporting.primary}{' '}
          <span className="text-accent-2">{copy.supporting.emphasis}</span>
        </p>
      </div>
      <div id="previa-produto" className="scroll-mt-22">
        <Frame className="mx-5 md:mx-7 xl:mx-10 [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
          <Tabs defaultValue="gateway">
            <TabsList
              radius="none"
              hoverAxis="xy"
              className={cn(
                'flex w-full flex-col items-stretch gap-0 rounded-none border-b border-border bg-card p-0 sm:flex-row',
              )}
              aria-label={t('accessibility.previewTabs')}
            >
              {previews.map((preview) => (
                <TabItem
                  key={preview.value}
                  value={preview.value}
                  label={preview.label}
                  eyebrow={preview.eyebrow}
                  description={preview.description}
                  icon={preview.icon}
                  className={cn(
                    'min-h-28 w-full min-w-0 flex-none flex-col items-stretch justify-start gap-2 rounded-none border-b border-solid border-border px-3 py-4 text-left last:border-b-0 sm:flex-1 sm:border-r sm:border-b-0 sm:px-5 sm:last:border-r-0',
                  )}
                />
              ))}
            </TabsList>
            {previews.map((preview) => (
              <TabPanel key={preview.value} value={preview.value}>
                {/* DIREÇÃO DE ARTE — HERO (1600×860): produzir três prints reais separados.
              Gateway: overview com composição financeira, sellers e fila operacional.
              Seller: dashboard com vendas, saldo e acesso aos produtos.
              Checkout: oferta, resumo e formulário lado a lado. Usar a mesma marca
              demonstrativa nos três, dados explicitamente fictícios, sem PII nem logos
              de terceiros. Captura frontal nítida, margens 40px, nada em perspectiva.
              Futuro motion: só transição de contexto, sem números subindo artificialmente. */}
                <ArtPlaceholder
                  width={1600}
                  height={860}
                  label={preview.image}
                  priority={preview.value === 'gateway'}
                  className="p-1.5"
                />
                <p className="flex flex-col justify-between gap-4 border-t bg-card p-4 text-xs leading-relaxed text-foreground-3 md:flex-row md:px-6">
                  {preview.caption}
                  <span className={cn(micro, 'shrink-0')}>{t('structure.demo')}</span>
                </p>
              </TabPanel>
            ))}
          </Tabs>
        </Frame>
      </div>
      <div className="text-display mx-0 grid min-h-32 items-center py-6 text-lg">
        <FluidGroup className="grid grid-cols-2 lg:grid-cols-4 [&_span]:block [&_span]:border-border [&_span]:px-2 [&_span]:py-4 [&_span]:text-center [&_span]:text-sm [&_span]:font-medium">
          <span>{copy.attributes.branding}</span>
          <span className="border-l">{copy.attributes.tenancy}</span>
          <span className="border-t lg:border-t-0 lg:border-l">{copy.attributes.acquiring}</span>
          <span className="border-t border-l lg:border-t-0">{copy.attributes.connectivity}</span>
        </FluidGroup>
      </div>
    </section>
  );
}
