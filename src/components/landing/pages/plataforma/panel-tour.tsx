'use client';

import Image from 'next/image';
import { illustrationAssets } from '@/config/illustrations';
import { plataformaCopy } from '@/i18n/messages/pages/plataforma';
import { Tabs, TabsList, TabItem, TabPanel } from '@/components/ui/tabs';
import { Frame } from '@/components/ui/frame';
import { ScreenshotTour } from '@/components/landing/screenshot-tour';
import { ActionLink, SectionHeading } from '@/components/landing/primitives';
import { Reveal } from '@/components/landing/reveal';
import { padding } from '@/components/landing/styles';

const copy = plataformaCopy.panels;

export function PlatformPanelTour() {
  return (
    <Reveal>
      <div className={padding}>
        <SectionHeading {...copy.heading} align="center" />
      </div>
      <Frame className="mx-5 md:mx-7 xl:mx-10 [&_figcaption]:hidden [&_figure]:rounded-none [&_figure]:border-0">
        <Tabs defaultValue="gateway">
          <TabsList
            aria-label={copy.tabsLabel}
            radius="none"
            hoverAxis="xy"
            className="flex w-full flex-col items-stretch gap-0 rounded-none border-b border-border bg-card p-0 sm:flex-row"
          >
            {copy.items.map((panel) => (
              <TabItem
                key={panel.id}
                value={panel.id}
                label={panel.label}
                eyebrow={panel.eyebrow}
                description={panel.description}
                className="min-h-28 w-full min-w-0 flex-none flex-col items-stretch justify-start gap-2 rounded-none border-b border-border px-5 py-4 text-left last:border-b-0 sm:flex-1 sm:border-r sm:border-b-0 sm:last:border-r-0"
              />
            ))}
          </TabsList>
          {copy.items.map((panel) => {
            const artwork = illustrationAssets[panel.asset];
            return (
              <TabPanel key={panel.id} value={panel.id}>
                <div className="grid gap-4 border-b border-border bg-card p-6 md:grid-cols-3 md:gap-8 md:p-8">
                  <h3 className="font-display text-2xl/7">{panel.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground md:col-span-2">
                    {panel.body}
                  </p>
                </div>
                <ScreenshotTour width={artwork.width} height={artwork.height}>
                  <Image
                    src={artwork.src}
                    alt={panel.alt}
                    width={artwork.width}
                    height={artwork.height}
                    sizes="200vw"
                    quality={100}
                    className="block h-full w-full"
                  />
                </ScreenshotTour>
              </TabPanel>
            );
          })}
        </Tabs>
      </Frame>
      <p className="px-5 pt-4 pb-8 text-xs leading-relaxed text-muted-foreground md:px-7 xl:px-10">
        {copy.demo}
      </p>
      <div className="flex flex-col items-start gap-5 border-t border-border p-6 md:flex-row md:items-center md:justify-between md:gap-10 md:p-8">
        <div className="max-w-xl">
          <h3 className="text-sm font-medium">{copy.buyer}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {copy.buyerDescription}
          </p>
        </div>
        <ActionLink href={copy.buyerHref} secondary className="shrink-0 text-sm">
          {copy.buyerLink}
        </ActionLink>
      </div>
    </Reveal>
  );
}
