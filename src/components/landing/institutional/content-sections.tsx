import type { ReactNode } from 'react';
import Link from 'next/link';
import { illustrationAssets } from '@/config/illustrations';
import { formatIndex, t } from '@/i18n';
import { cn } from '@/lib/utils';
import { Card, CardGroup, CardHeader, CardContent } from '@/components/ui/card';
import {
  AccordionGroup,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion';
import { SectionLabel, SectionHeading, ArtPlaceholder, ActionLink, ArrowIcon } from '../primitives';
import { Reveal } from '../reveal';
import { FluidGroup } from '../fluid-group';
import { frame, section, padding, micro, cardTitle, cardDescription } from '../styles';
import type {
  ContentItem,
  EditorialItem,
  ModuleItem,
  PageHeading,
  PageImage,
  PageLink,
  QuestionItem,
  SectionIdentity,
} from './types';

type HeadedSection = SectionIdentity & { heading: PageHeading };

/** Also usable around a bespoke ScreenshotTour or a page-specific composition. */
export function InstitutionalSection({
  id,
  label,
  index,
  total,
  children,
}: SectionIdentity & { children: ReactNode }) {
  return (
    <section id={id} aria-label={label} className={cn(frame, section)}>
      <SectionLabel number={formatIndex(index)} total={total}>
        {label}
      </SectionLabel>
      {children}
    </section>
  );
}

function SectionIntro({ heading, center = false }: { heading: PageHeading; center?: boolean }) {
  return (
    <div className={padding}>
      <SectionHeading {...heading} align={center ? 'center' : 'left'} />
    </div>
  );
}

function ContentImage({ image }: { image: PageImage }) {
  const artwork = illustrationAssets[image.asset];
  return (
    <>
      <ArtPlaceholder
        src={artwork.src}
        width={artwork.width}
        height={artwork.height}
        label={image.alt}
        className="rounded-md border bg-background/90"
      />
      {image.caption && (
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{image.caption}</p>
      )}
    </>
  );
}

/** PlatformSection's paired cards, including its existing responsive sticky policy. */
export function ModulePairsSection({
  heading,
  items,
  indexTone = 'brand',
  ...identity
}: HeadedSection & {
  items: readonly ModuleItem[];
  indexTone?: 'brand' | 'readable';
}) {
  const pairs = Array.from({ length: Math.ceil(items.length / 2) }, (_, index) =>
    items.slice(index * 2, index * 2 + 2),
  );
  return (
    <InstitutionalSection {...identity}>
      <Reveal>
        <SectionIntro heading={heading} center />
        <div className="platform-stack relative isolate grid gap-0">
          {pairs.map((pair, pairIndex) => (
            <div
              key={pair[0].id}
              className="platform-pair border-t border-border bg-background"
              style={{ zIndex: pairIndex + 1 }}
            >
              <CardGroup
                columns={2}
                separated
                className="grid-cols-1 gap-0 rounded-none md:grid-cols-1 lg:grid-cols-2 [&>div]:rounded-none"
              >
                {pair.map((item, itemIndex) => (
                  <Card
                    key={item.id}
                    id={item.id}
                    className="platform-card scroll-mt-22 rounded-none bg-background p-6 lg:p-12"
                  >
                    <CardHeader className="h-fit min-w-0 gap-4">
                      <p
                        className={cn(
                          'flex items-center gap-2 text-sm font-normal tracking-wide uppercase',
                          indexTone === 'readable' ? 'text-foreground-2' : 'text-accent-2',
                        )}
                      >
                        {item.icon && <span aria-hidden="true">{item.icon}</span>}
                        {t('accessibility.itemIndex', {
                          number: formatIndex(pairIndex * 2 + itemIndex + 1),
                          label: item.eyebrow,
                        })}
                      </p>
                      <h3 className="font-display text-2xl/7 font-medium text-foreground">
                        {item.title}
                      </h3>
                      <p className="pb-6 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                      {item.link && (
                        <ActionLink href={item.link.href} secondary className="mb-6 w-fit text-sm">
                          {item.link.label}
                        </ActionLink>
                      )}
                    </CardHeader>
                    {item.image && (
                      <CardContent className="h-fit min-h-0 min-w-0 p-0!">
                        <ContentImage image={item.image} />
                      </CardContent>
                    )}
                  </Card>
                ))}
              </CardGroup>
            </div>
          ))}
        </div>
      </Reveal>
    </InstitutionalSection>
  );
}

/** Connected 2:3 editorial rows for text and illustration. */
export function EditorialSection({
  heading,
  items,
  ...identity
}: HeadedSection & { items: readonly EditorialItem[] }) {
  return (
    <InstitutionalSection {...identity}>
      <SectionIntro heading={heading} />
      <Reveal>
        {items.map((item, index) => {
          const imageOnRight = item.imageSide ? item.imageSide === 'right' : index % 2 === 1;
          return (
            <div
              key={item.id}
              id={item.id}
              className="grid scroll-mt-22 border-t border-border md:grid-cols-5"
            >
              <div
                className={cn(
                  'flex min-w-0 flex-col items-start justify-center gap-4 p-6 md:col-span-2 md:p-8',
                  !imageOnRight && 'md:order-2',
                )}
              >
                {item.heading ? (
                  <SectionHeading {...item.heading} />
                ) : (
                  <h3 className="text-base font-medium">{item.title}</h3>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                {item.points && (
                  <FluidGroup as="ul" axis="y" className="w-full border-t border-border">
                    {item.points.map((point) => (
                      <div key={point.id} className="border-b border-border py-4">
                        <h4 className={cardTitle}>{point.title}</h4>
                        <p className={cardDescription}>{point.description}</p>
                      </div>
                    ))}
                  </FluidGroup>
                )}
                {item.link && (
                  <ActionLink href={item.link.href} secondary className="mt-3 text-sm">
                    {item.link.label}
                  </ActionLink>
                )}
              </div>
              <div
                className={cn(
                  'flex min-w-0 flex-col justify-center border-t border-border bg-card p-6 md:col-span-3 md:border-t-0 md:p-10',
                  imageOnRight ? 'md:border-l' : 'md:order-1 md:border-r',
                )}
              >
                <ContentImage image={item.image} />
              </div>
            </div>
          );
        })}
      </Reveal>
    </InstitutionalSection>
  );
}

export function StepsSection({
  heading,
  items,
  note,
  ...identity
}: HeadedSection & { items: readonly ContentItem[]; note?: string }) {
  return (
    <InstitutionalSection {...identity}>
      <Reveal>
        <SectionIntro heading={heading} />
        <ol className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <li
              key={item.id}
              className="min-w-0 border-t border-border p-6 md:p-8 md:odd:border-r xl:border-r xl:last:border-r-0 xl:nth-[4n]:border-r-0"
            >
              <span
                aria-hidden="true"
                className="mb-7 block font-mono text-3xl tracking-tighter text-brand"
              >
                {formatIndex(index + 1)}
              </span>
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardDescription}>{item.description}</p>
            </li>
          ))}
        </ol>
        {note && (
          <p className="border-t border-border p-6 text-xs leading-relaxed text-muted-foreground md:p-8">
            {note}
          </p>
        )}
      </Reveal>
    </InstitutionalSection>
  );
}

export function PageFaqSection({
  heading,
  items,
  accessibilityMode = 'default',
  ...identity
}: HeadedSection & {
  items: readonly QuestionItem[];
  accessibilityMode?: 'default' | 'readable';
}) {
  return (
    <InstitutionalSection {...identity}>
      <div className="grid gap-0 md:grid-cols-2">
        <div className="px-5 py-12 md:border-r md:border-border md:px-8 md:py-13 md:[&_h2]:text-3xl">
          <div className="sticky top-47">
            <SectionHeading {...heading} />
          </div>
        </div>
        <AccordionGroup
          type="single"
          defaultValue={items[0]?.id}
          className="grid w-full max-w-full content-start gap-0 rounded-none border-0 p-0 max-md:border-t [&>div]:rounded-none"
        >
          {items.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              index={index}
              className="overflow-hidden rounded-none border-0 border-b border-border bg-transparent p-0 last:border-b-0"
            >
              <AccordionTrigger
                {...(accessibilityMode === 'readable'
                  ? {
                      id: `page-faq-trigger-${item.id}`,
                      'aria-controls': `page-faq-panel-${item.id}`,
                    }
                  : {})}
                className="min-h-16 rounded-none border-0 px-6 py-4 focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-inset"
              >
                <span className="flex items-baseline gap-3.5 text-left text-sm leading-relaxed font-medium md:gap-5">
                  <span
                    className={cn(
                      micro,
                      'shrink-0',
                      accessibilityMode === 'readable' ? 'text-foreground-2' : 'text-accent-1',
                    )}
                  >
                    {formatIndex(index + 1)}
                  </span>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent
                panelId={accessibilityMode === 'readable' ? `page-faq-panel-${item.id}` : undefined}
                labelledBy={
                  accessibilityMode === 'readable' ? `page-faq-trigger-${item.id}` : undefined
                }
                className="border-t border-border p-0 [&>div]:p-0"
              >
                <p className="px-6 pt-4 pb-6 text-sm leading-7 text-foreground-2">{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </AccordionGroup>
      </div>
    </InstitutionalSection>
  );
}

export function RelatedLinksSection({
  heading,
  items,
  ...identity
}: HeadedSection & { items: readonly (ContentItem & Pick<PageLink, 'href'>)[] }) {
  return (
    <InstitutionalSection {...identity}>
      <SectionIntro heading={heading} />
      <FluidGroup className="grid grid-cols-1 border-t border-border md:grid-cols-2">
        {items.map((item, index) => (
          <Link
            key={item.id}
            href={item.href}
            className={cn(
              'flex h-full min-h-11 items-start justify-between gap-6 border-border p-6 md:p-8',
              index < items.length - 1 && 'border-b',
              index % 2 === 0 && index < items.length - 1 && 'md:border-r',
              index >= Math.floor((items.length - 1) / 2) * 2 && 'md:border-b-0',
            )}
          >
            <div className="min-w-0">
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardDescription}>{item.description}</p>
            </div>
            <span className="shrink-0 text-brand">
              <ArrowIcon />
            </span>
          </Link>
        ))}
      </FluidGroup>
    </InstitutionalSection>
  );
}
