import Image from 'next/image';
import { ArtPlaceholder, ActionLink } from './primitives';
import { content, formatIndex } from '@/i18n';
import { integrationSlots } from '@/config/site';
import { micro } from './styles';

const copy = content('structure').integrations;

export function IntegrationCards() {
  return (
    <div>
      {(['acquiring', 'tools'] as const).map((group) => (
        <div key={group}>
          <p className={`${micro} border-t border-border px-6 py-5 text-accent-2 md:px-8`}>
            {copy.groups[group]}
          </p>
          <div className="grid md:grid-cols-2">
            {integrationSlots[group].map((slot, index) => (
              <article
                key={slot.id}
                id={slot.id}
                className={`min-w-0 scroll-mt-40 border-t border-border p-6 md:p-8 ${index % 2 === 0 ? 'md:border-r' : ''}`}
              >
                <div className="mb-5 flex min-h-16 items-center justify-between gap-3 border-b border-border pb-5">
                  {slot.logoSrc ? (
                    <Image
                      src={slot.logoSrc}
                      width={160}
                      height={64}
                      alt={copy.slots[group].logo}
                      className="h-12 w-auto max-w-full object-contain"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">{copy.slots[group].logo}</span>
                  )}
                  <span className={`${micro} text-muted-foreground`}>{formatIndex(index + 1)}</span>
                </div>
                <h3 className="text-base font-medium">{copy.slots[group].title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {copy.slots[group].description}
                </p>
                <div className="mt-5">
                  <ArtPlaceholder
                    width={640}
                    height={360}
                    src={slot.illustrationSrc}
                    label={copy.slots[group].illustration}
                    alt={copy.slots[group].alt}
                  />
                </div>
                <dl className="mt-5 grid gap-3">
                  {copy.fields.map((field) => (
                    <div key={field.label}>
                      <dt className="text-xs text-muted-foreground">{field.label}</dt>
                      <dd className="mt-1 text-sm leading-relaxed">{field.value}</dd>
                    </div>
                  ))}
                </dl>
                <ActionLink origin="integracoes" subject={group} secondary className="mt-5">
                  {copy.groupCta[group]}
                </ActionLink>
              </article>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
