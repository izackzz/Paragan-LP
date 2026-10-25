import {
  InstitutionalShell,
  PageHero,
  InstitutionalSection,
  ModulePairsSection,
  RelatedLinksSection,
} from '@/components/landing/institutional';
import { PlatformPanelTour } from '@/components/landing/pages/plataforma/panel-tour';
import {
  CapabilityIntro,
  CapabilitySection,
} from '@/components/landing/pages/plataforma/capability-section';
import { Reveal } from '@/components/landing/reveal';
import { plataformaCopy as copy } from '@/i18n/messages/pages/plataforma';
import { pageMetadata } from '@/lib/page-metadata';
import { PageStructuredData } from '@/components/landing/page-structured-data';

export const metadata = pageMetadata({ pathname: '/plataforma', ...copy.metadata });

const total = 6;

export default function PlatformPage() {
  return (
    <InstitutionalShell>
      <PageStructuredData
        title={copy.metadata.title}
        description={copy.metadata.description}
        pathname="/plataforma"
      />
      <PageHero {...copy.hero} />
      <nav
        aria-label={copy.sectionIndexLabel}
        className="landing-frame grid grid-cols-2 border-b border-border text-sm md:grid-cols-3 xl:grid-cols-6"
      >
        {copy.sectionIndex.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            className="min-h-11 border-r border-b border-border px-3 py-3 text-foreground-2 hover:bg-hover focus-visible:z-10 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-brand"
          >
            <span className="mr-2 font-mono text-foreground-2">0{index + 1}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <InstitutionalSection id="paineis" label={copy.panels.label} index={1} total={total}>
        <PlatformPanelTour />
      </InstitutionalSection>
      <ModulePairsSection
        id="identidade"
        index={2}
        total={total}
        indexTone="readable"
        {...copy.identity}
      />
      <InstitutionalSection id="gestao-sellers" label={copy.sellers.label} index={3} total={total}>
        <CapabilityIntro heading={copy.sellers.heading} />
        {copy.sellers.items.map((item, index) => (
          <CapabilitySection
            key={item.id}
            id={item.id}
            index={index + 1}
            label={copy.sellers.label}
            title={item.title}
            summary={item.description}
            image={item.image}
            items={item.points ?? []}
          />
        ))}
      </InstitutionalSection>
      <InstitutionalSection
        id="multiadquirencia"
        label={copy.acquiring.label}
        index={4}
        total={total}
      >
        <Reveal>
          <CapabilitySection
            id="roteamento"
            index={1}
            label={copy.acquiring.label}
            title={copy.acquiring.heading.title}
            summary={`${copy.acquiring.heading.muted} ${copy.acquiring.heading.description}`}
            image={{ asset: 'acquiring', alt: copy.acquiring.imageAlt }}
            items={copy.acquiring.items}
            link={copy.acquiring.link}
            headingLevel={2}
          />
        </Reveal>
      </InstitutionalSection>
      <InstitutionalSection
        id="arquitetura"
        label={copy.architecture.label}
        index={5}
        total={total}
      >
        <Reveal>
          <CapabilitySection
            id="contextos"
            index={1}
            label={copy.architecture.label}
            title={`${copy.architecture.heading.title} ${copy.architecture.heading.muted}`}
            summary={copy.architecture.description}
            image={{ asset: 'architecture', alt: copy.architecture.imageAlt }}
            items={copy.architecture.items}
            headingLevel={2}
          />
        </Reveal>
      </InstitutionalSection>
      <RelatedLinksSection id="continuar" index={6} total={total} {...copy.related} />
    </InstitutionalShell>
  );
}
