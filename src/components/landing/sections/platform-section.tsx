import { Card, CardGroup, CardHeader, CardContent } from '@/components/ui/card';
import { SectionLabel, SectionHeading, ArtPlaceholder } from '../primitives';
import { Reveal } from '../reveal';
import { frame, section, padding } from '../styles';
import { cn } from '@/lib/utils';
import {
  IconSwatchBook,
  IconSettings,
  IconAdmins,
  IconGift,
  IconAcquirers,
  IconReports,
  IconCheckout,
  IconWebhook,
} from '@/components/assets/custom-icons';
import { RenderAscii } from '@/components/ascii/render-ascii';
import { content, formatIndex, t } from '@/i18n';
import { presentation } from '@/config/site';

const copy = content('capabilities');
const moduleIcons = {
  identity: IconSwatchBook,
  policies: IconSettings,
  people: IconAdmins,
  engagement: IconGift,
  acquiring: IconAcquirers,
  finance: IconReports,
  checkout: IconCheckout,
  integrations: IconWebhook,
};
const modules = Object.entries(copy.items).map(([id, item], index) => ({
  ...item,
  id,
  number: formatIndex(index + 1),
  icon: moduleIcons[id as keyof typeof moduleIcons],
}));
const platformPairs = Array.from({ length: Math.ceil(modules.length / 2) }, (_, index) =>
  modules.slice(index * 2, index * 2 + 2),
);

export function PlatformSection() {
  return (
    <section id="plataforma" className={cn(frame, section)}>
      <SectionLabel number={formatIndex(presentation.sections.capabilities)}>
        {copy.label}
      </SectionLabel>
      <Reveal>
        <div className={cn('relative isolate overflow-hidden', padding)}>
          <div className="relative z-10">
            <SectionHeading
              eyebrow={copy.heading.eyebrow}
              title={copy.heading.primary}
              muted={copy.heading.secondary}
              description={copy.heading.description}
              align="center"
            />
          </div>
          <RenderAscii
            render="shark"
            aspect="16/9"
            model="halftone"
            cellSize={4}
            className="pointer-events-none absolute -bottom-1/4 left-1/2 z-0 h-120 w-auto max-w-full -translate-x-1/2 text-accent opacity-50"
            fit="cover"
            label={t('artwork.shark')}
          />
        </div>
        <div className="platform-stack relative isolate grid gap-0">
          {platformPairs.map((pair, pairIndex) => (
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
                {pair.map((module) => (
                  <Card
                    key={module.id}
                    className="platform-card rounded-none bg-background p-6 lg:p-12"
                  >
                    <CardHeader className="h-fit min-w-0 gap-4 mask-b-from-75%">
                      <h3 className="text-md flex items-center gap-2 font-normal tracking-wide text-accent-2 uppercase">
                        <module.icon
                          aria-hidden="true"
                          className="size-5 shrink-0"
                          strokeWidth={1.5}
                        />
                        <span>
                          {t('accessibility.itemIndex', {
                            number: module.number,
                            label: module.eyebrow,
                          })}
                        </span>
                      </h3>
                      <p className="pb-6 font-display text-2xl/7 text-muted-foreground">
                        <span className="font-medium text-foreground">{module.title}</span>{' '}
                        {module.description}
                      </p>
                    </CardHeader>
                    <CardContent className="h-fit min-h-0 min-w-0 overflow-hidden rounded-sm border p-0!">
                      {/* Arte reservada por módulo, sem números ou resultados simulados. */}
                      <ArtPlaceholder
                        width={1000}
                        height={500}
                        label={module.illustration}
                        className="h-fit w-full [&_img]:h-fit [&_img]:w-full [&_img]:rounded-none"
                      />
                    </CardContent>
                  </Card>
                ))}
              </CardGroup>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
