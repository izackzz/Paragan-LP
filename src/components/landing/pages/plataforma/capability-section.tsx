import { illustrationAssets } from '@/config/illustrations';
import { formatIndex } from '@/i18n';
import type { ContentItem, PageHeading, PageImage, PageLink } from '../../institutional/types';
import { ActionLink, ArtPlaceholder, SectionHeading } from '../../primitives';
import { micro } from '../../styles';
import { cn } from '@/lib/utils';

export function CapabilitySection({
  id,
  index,
  label,
  title,
  summary,
  image,
  items,
  link,
  headingLevel = 3,
}: {
  id: string;
  index: number;
  title?: string;
  summary: string;
  label: string;
  image: PageImage;
  items: readonly ContentItem[];
  link?: PageLink;
  headingLevel?: 2 | 3;
}) {
  const asset = illustrationAssets[image.asset];
  const Title = headingLevel === 2 ? 'h2' : 'h3';
  const ItemTitle = headingLevel === 2 ? 'h3' : 'h4';
  return (
    <div id={id} className="scroll-mt-22 border-t border-border">
      <div className={`grid gap-6 p-6 md:items-end md:p-8 ${link ? 'md:grid-cols-2' : ''}`}>
        <div className="min-w-0">
          <p className={`${micro} mb-4 text-foreground-2`}>
            {formatIndex(index)} / {label}
          </p>
          {title && (
            <Title className="font-display text-2xl/7 font-medium text-foreground">{title}</Title>
          )}
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-foreground-2">{summary}</p>
        </div>
        {link && (
          <ActionLink href={link.href} secondary className="w-fit text-sm">
            {link.label}
          </ActionLink>
        )}
      </div>
      <div className="border-t border-border bg-card p-5 md:px-8 md:py-6">
        <ArtPlaceholder
          src={asset.src}
          width={asset.width}
          height={asset.height}
          label={image.alt}
          className="mx-auto w-full max-w-2xl rounded-md border bg-background/90"
        />
      </div>
      <ul
        className={cn(
          'grid border-t border-border md:grid-cols-2',
          items.length % 3 === 0 && 'xl:grid-cols-3',
        )}
      >
        {items.map((item, itemIndex) => (
          <li
            key={item.id}
            className={cn(
              'min-w-0 border-b border-border p-6 md:p-7 md:odd:border-r',
              items.length % 3 === 0 && 'xl:border-r xl:nth-[3n]:border-r-0',
            )}
          >
            <p className={`${micro} mb-3 text-foreground-2`}>{formatIndex(itemIndex + 1)}</p>
            <ItemTitle className="text-base leading-snug font-medium text-foreground">
              {item.title}
            </ItemTitle>
            <p className="mt-2 text-sm leading-relaxed text-foreground-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function CapabilityIntro({ heading }: { heading: PageHeading }) {
  return (
    <div className="p-6 md:p-8">
      <SectionHeading {...heading} />
    </div>
  );
}
