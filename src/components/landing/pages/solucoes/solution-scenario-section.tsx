import { illustrationAssets } from '@/config/illustrations';
import { cn } from '@/lib/utils';
import { formatIndex } from '@/i18n';
import { ActionLink, ArtPlaceholder, SectionHeading } from '../../primitives';
import { InstitutionalSection } from '../../institutional/content-sections';
import type {
  ContentItem,
  PageHeading,
  PageImage,
  PageLink,
  SectionIdentity,
} from '../../institutional/types';
import { micro } from '../../styles';

export function SolutionScenarioSection({
  heading,
  title,
  description,
  points,
  image,
  link,
  imageSide,
  ...identity
}: SectionIdentity & {
  heading: PageHeading;
  title: string;
  description: string;
  points: readonly ContentItem[];
  image: PageImage;
  link: PageLink;
  imageSide: 'left' | 'right';
}) {
  const asset = illustrationAssets[image.asset];

  return (
    <InstitutionalSection {...identity}>
      <div className="p-6 md:p-8">
        <SectionHeading {...heading} />
      </div>
      <article id={`${identity.id}-cenario`} className="scroll-mt-22 border-t border-border">
        <div className="grid min-w-0 md:grid-cols-2">
          <div className={cn('min-w-0 p-6 md:p-8', imageSide === 'left' && 'md:order-2')}>
            <p className={cn(micro, 'mb-4 text-foreground-2')}>{formatIndex(identity.index)}</p>
            <h3 className="font-display text-2xl/7 font-medium text-foreground">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-2">{description}</p>
            <ActionLink href={link.href} secondary className="mt-6 w-fit">
              {link.label}
            </ActionLink>
          </div>
          <div
            className={cn(
              'flex min-w-0 items-center justify-center border-t border-border bg-card p-6 md:border-t-0 md:p-8',
              imageSide === 'left' ? 'md:order-1 md:border-r' : 'md:border-l',
            )}
          >
            <div className="w-full max-w-xl">
              <ArtPlaceholder
                src={asset.src}
                width={asset.width}
                height={asset.height}
                label={image.alt}
                className="w-full rounded-md border bg-background/90"
              />
              {image.caption && (
                <p className="mt-3 text-sm leading-relaxed text-foreground-2">{image.caption}</p>
              )}
            </div>
          </div>
        </div>
        <ul className="grid border-t border-border lg:grid-cols-3">
          {points.map((point, pointIndex) => (
            <li
              key={point.id}
              className={cn(
                'min-w-0 border-b border-border p-6 md:p-8',
                pointIndex < points.length - 1 && 'lg:border-r',
              )}
            >
              <p className={cn(micro, 'mb-3 text-foreground-2')}>{formatIndex(pointIndex + 1)}</p>
              <h4 className="text-base leading-snug font-medium text-foreground">{point.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-foreground-2">{point.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </InstitutionalSection>
  );
}
