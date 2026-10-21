import { InstitutionalSection, type SectionIdentity } from '@/components/landing/institutional';
import { ArtPlaceholder, SectionHeading } from '@/components/landing/primitives';
import { FluidGroup } from '@/components/landing/fluid-group';
import { Reveal } from '@/components/landing/reveal';
import { cardTitle, cardDescription } from '@/components/landing/styles';
import { illustrationAssets } from '@/config/illustrations';
import { contratacaoCopy } from '@/i18n/messages/pages/contratacao';

const copy = contratacaoCopy.responsibilities;
const artwork = illustrationAssets[copy.image.asset];

export function ResponsibilitiesSection(identity: SectionIdentity) {
  return (
    <InstitutionalSection {...identity}>
      <Reveal>
        <div className="grid md:grid-cols-3">
          <div className="min-w-0 border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
            <SectionHeading {...copy.heading} />
          </div>
          <div className="min-w-0 bg-card p-6 md:col-span-2 md:p-10">
            <ArtPlaceholder
              src={artwork.src}
              width={artwork.width}
              height={artwork.height}
              label={copy.image.alt}
              className="rounded-md border bg-background/90"
            />
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              {copy.image.caption}
            </p>
          </div>
        </div>
        <FluidGroup
          as="ul"
          className="grid border-t border-border md:grid-cols-3"
          itemClassName="rounded-none border-b border-border last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"
        >
          {copy.items.map((item) => (
            <div key={item.id} className="h-full p-6 md:p-8">
              <h3 className={cardTitle}>{item.title}</h3>
              <p className={cardDescription}>{item.description}</p>
            </div>
          ))}
        </FluidGroup>
        <div className="border-t border-border p-6 md:p-8">
          <h3 className={cardTitle}>{copy.maintenance.title}</h3>
          <p className={cardDescription}>{copy.maintenance.description}</p>
        </div>
      </Reveal>
    </InstitutionalSection>
  );
}
