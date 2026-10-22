import { illustrationAssets } from '@/config/illustrations';
import { cn } from '@/lib/utils';
import { formatIndex } from '@/i18n';
import { ActionLink, ArtPlaceholder, SectionHeading } from '../../primitives';
import { InstitutionalSection } from '../../institutional/content-sections';
import type { EditorialItem, ModuleItem, SectionIdentity } from '../../institutional/types';
import { micro } from '../../styles';

export function IntegrationsAccessSection({
  heading,
  items,
  ...identity
}: SectionIdentity & {
  heading: Parameters<typeof SectionHeading>[0];
  items: readonly ModuleItem[];
}) {
  return (
    <InstitutionalSection {...identity}>
      <div className="p-6 md:p-8">
        <SectionHeading {...heading} />
      </div>
      <ul className="grid border-t border-border md:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={item.id}
            id={item.id}
            className={cn(
              'min-w-0 border-b border-border p-6 md:p-8',
              index % 2 === 0 && 'md:border-r',
            )}
          >
            <p className={cn(micro, 'mb-4 text-foreground-2')}>
              {formatIndex(index + 1)} / {item.eyebrow}
            </p>
            <h3 className="font-display text-xl/7 font-medium text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground-2">{item.description}</p>
          </li>
        ))}
      </ul>
    </InstitutionalSection>
  );
}

export function IntegrationsEditorialSection({
  heading,
  items,
  ...identity
}: SectionIdentity & {
  heading: Parameters<typeof SectionHeading>[0];
  items: readonly EditorialItem[];
}) {
  return (
    <InstitutionalSection {...identity}>
      <div className="p-6 md:p-8">
        <SectionHeading {...heading} />
      </div>
      {items.map((item, index) => {
        const asset = illustrationAssets[item.image.asset];
        return (
          <article key={item.id} id={item.id} className="scroll-mt-22 border-t border-border">
            <div className="grid min-w-0 md:grid-cols-2">
              <div className={cn('min-w-0 p-6 md:p-8', item.imageSide === 'left' && 'md:order-2')}>
                <p className={cn(micro, 'mb-4 text-foreground-2')}>{formatIndex(index + 1)}</p>
                {item.heading ? (
                  <div>
                    {item.heading.eyebrow && (
                      <p className={cn(micro, 'mb-3 text-foreground-2')}>{item.heading.eyebrow}</p>
                    )}
                    <h3 className="font-display text-2xl/7 font-medium text-foreground">
                      {item.heading.title}
                      {item.heading.muted && (
                        <>
                          <br />
                          <span className="text-foreground-2">{item.heading.muted}</span>
                        </>
                      )}
                    </h3>
                  </div>
                ) : (
                  <h3 className="font-display text-2xl/7 font-medium text-foreground">
                    {item.title}
                  </h3>
                )}
                <p className="mt-3 text-sm leading-relaxed text-foreground-2">
                  {item.heading?.description ?? item.description}
                </p>
                {item.link && (
                  <ActionLink href={item.link.href} secondary className="mt-6 w-fit">
                    {item.link.label}
                  </ActionLink>
                )}
              </div>
              <div
                className={cn(
                  'flex min-w-0 items-center justify-center border-t border-border bg-card p-6 md:border-t-0 md:p-8',
                  item.imageSide === 'left' ? 'md:order-1 md:border-r' : 'md:border-l',
                )}
              >
                <div className="w-full max-w-xl">
                  <ArtPlaceholder
                    src={asset.src}
                    width={asset.width}
                    height={asset.height}
                    label={item.image.alt}
                    className="w-full rounded-md border bg-background/90"
                  />
                  {item.image.caption && (
                    <p className="mt-3 text-sm leading-relaxed text-foreground-2">
                      {item.image.caption}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {item.points && item.points.length > 0 && (
              <ul
                className={cn(
                  'grid border-t border-border',
                  item.points.length === 3 && 'lg:grid-cols-3',
                  item.points.length === 2 && 'md:grid-cols-2',
                  item.points.length > 3 && 'md:grid-cols-2',
                )}
              >
                {item.points.map((point, pointIndex) => (
                  <li
                    key={point.id}
                    className={cn(
                      'min-w-0 border-b border-border p-6 md:p-8',
                      item.points!.length === 2 && pointIndex === 1 && 'md:border-l',
                      item.points!.length === 3 && 'lg:border-r lg:last:border-r-0',
                      item.points!.length > 3 && pointIndex % 2 === 1 && 'md:border-l',
                    )}
                  >
                    <p className={cn(micro, 'mb-3 text-foreground-2')}>
                      {formatIndex(pointIndex + 1)}
                    </p>
                    <h4 className="text-base leading-snug font-medium text-foreground">
                      {point.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-foreground-2">
                      {point.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </InstitutionalSection>
  );
}
