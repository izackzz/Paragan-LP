import {
  InstitutionalShell,
  PageHero,
  InstitutionalSection,
  ModulePairsSection,
  EditorialSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import { PlatformPanelTour } from '@/components/landing/pages/plataforma/panel-tour';
import { ActionLink, ArtPlaceholder, SectionHeading } from '@/components/landing/primitives';
import { FluidGroup } from '@/components/landing/fluid-group';
import { Reveal } from '@/components/landing/reveal';
import { padding, micro } from '@/components/landing/styles';
import { illustrationAssets } from '@/config/illustrations';
import { plataformaCopy as copy } from '@/i18n/messages/pages/plataforma';
import { formatIndex } from '@/i18n';
import { pageMetadata } from '@/lib/page-metadata';

export const metadata = pageMetadata({ pathname: '/plataforma', ...copy.metadata });

const total = 6;

export default function PlatformPage() {
  return (
    <InstitutionalShell>
      <PageHero {...copy.hero} />
      <InstitutionalSection id="paineis" label={copy.panels.label} index={1} total={total}>
        <PlatformPanelTour />
      </InstitutionalSection>
      <ModulePairsSection id="identidade" index={2} total={total} {...copy.identity} />
      <EditorialSection id="gestao-sellers" index={3} total={total} {...copy.sellers} />
      <InstitutionalSection
        id="multiadquirencia"
        label={copy.acquiring.label}
        index={4}
        total={total}
      >
        <Reveal>
          <div className={padding}>
            <SectionHeading {...copy.acquiring.heading} />
          </div>
          <div className="grid border-t border-border md:grid-cols-2">
            <div className="flex min-w-0 flex-col justify-center gap-6 bg-card p-6 md:border-r md:border-border md:p-8">
              <ArtPlaceholder
                {...illustrationAssets.acquiring}
                label={copy.acquiring.imageAlt}
                className="rounded-md border bg-background/90"
              />
              <ActionLink href={copy.acquiring.link.href} secondary className="w-fit text-sm">
                {copy.acquiring.link.label}
              </ActionLink>
            </div>
            <FluidGroup
              as="ul"
              axis="y"
              className="border-t border-border md:border-t-0 [&>li+li]:border-t"
            >
              {copy.acquiring.items.map((item, index) => (
                <div key={item.id} className="flex gap-4 p-6 md:p-8">
                  <span aria-hidden="true" className={`${micro} shrink-0 text-brand`}>
                    {formatIndex(index + 1)}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </FluidGroup>
          </div>
        </Reveal>
      </InstitutionalSection>
      <InstitutionalSection
        id="arquitetura"
        label={copy.architecture.label}
        index={5}
        total={total}
      >
        <Reveal>
          <div className="grid md:grid-cols-3">
            <div className="border-b border-border p-6 md:border-r md:border-b-0 md:p-8">
              <div className="flex flex-col gap-6">
                <SectionHeading {...copy.architecture.heading} />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {copy.architecture.description}
                </p>
              </div>
            </div>
            <div className="flex min-w-0 items-center bg-card p-6 md:col-span-2 md:p-10">
              <ArtPlaceholder
                {...illustrationAssets.architecture}
                label={copy.architecture.imageAlt}
                className="rounded-md border bg-background/90"
              />
            </div>
          </div>
          <FluidGroup className="grid md:grid-cols-3 md:[&>div+div]:border-l">
            {copy.architecture.items.map((item) => (
              <div key={item.id} className="h-full border-t border-border p-6 md:p-8">
                <h3 className="text-sm font-medium">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </FluidGroup>
        </Reveal>
      </InstitutionalSection>
      <RelatedLinksSection id="continuar" index={6} total={total} {...copy.related} />
    </InstitutionalShell>
  );
}
