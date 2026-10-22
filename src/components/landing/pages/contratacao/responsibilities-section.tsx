import { cn } from '@/lib/utils';
import { formatIndex } from '@/i18n';
import { InstitutionalSection, type SectionIdentity } from '@/components/landing/institutional';
import { ArtPlaceholder, SectionHeading } from '@/components/landing/primitives';
import { Reveal } from '@/components/landing/reveal';
import { micro } from '@/components/landing/styles';
import { illustrationAssets } from '@/config/illustrations';
import { contratacaoCopy } from '@/i18n/messages/pages/contratacao';

const copy = contratacaoCopy.responsibilities;
const artwork = illustrationAssets[copy.image.asset];

export function ResponsibilitiesSection(identity: SectionIdentity) {
  return (
    <InstitutionalSection {...identity}>
      <Reveal>
        <div className="grid border-b border-border md:grid-cols-2">
          <div className="min-w-0 p-6 md:p-8">
            <SectionHeading {...copy.heading} />
          </div>
          <div className="flex min-w-0 items-center justify-center border-t border-border bg-card p-6 md:border-t-0 md:border-l md:p-8">
            <div className="w-full max-w-xl">
              <ArtPlaceholder
                src={artwork.src}
                width={artwork.width}
                height={artwork.height}
                label={copy.image.alt}
                className="w-full rounded-md border bg-background/90"
              />
              <p className="mt-3 text-sm leading-relaxed text-foreground-2">{copy.image.caption}</p>
            </div>
          </div>
        </div>
        <ul className="grid border-b border-border md:grid-cols-3">
          {copy.items.map((item, index) => (
            <li
              key={item.id}
              id={item.id}
              className={cn(
                'min-w-0 border-b border-border p-6 last:border-b-0 md:border-r md:border-b-0 md:p-8 md:last:border-r-0',
              )}
            >
              <p className={cn(micro, 'mb-3 text-foreground-2')}>{formatIndex(index + 1)}</p>
              <h3 className="text-base leading-snug font-medium text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground-2">{item.description}</p>
            </li>
          ))}
        </ul>
        <div className="grid gap-3 border-t border-border p-6 md:grid-cols-[1fr_2fr] md:items-start md:p-8">
          <div>
            <p className={cn(micro, 'mb-2 text-foreground-2')}>{copy.maintenance.eyebrow}</p>
            <h3 className="text-base leading-snug font-medium text-foreground">
              {copy.maintenance.title}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-foreground-2">
            {copy.maintenance.description}
          </p>
        </div>
      </Reveal>
    </InstitutionalSection>
  );
}
