import { cn } from '@/lib/utils';
import { formatIndex } from '@/i18n';
import { ActionLink, SectionHeading } from '../../primitives';
import { InstitutionalSection } from '../../institutional/content-sections';
import type {
  ContentItem,
  ModuleItem,
  PageHeading,
  SectionIdentity,
} from '../../institutional/types';
import { micro } from '../../styles';

export function ContractingScopeSection({
  heading,
  items,
  proposalNote,
  calculatorNote,
  calculatorLabel,
  calculatorHref,
  ...identity
}: SectionIdentity & {
  heading: PageHeading;
  items: readonly ModuleItem[];
  proposalNote: string;
  calculatorNote: string;
  calculatorLabel: string;
  calculatorHref: string;
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
      <div className="grid gap-4 border-t border-border p-6 md:grid-cols-[2fr_1fr] md:items-center md:p-8">
        <div>
          <p className="text-base font-medium text-foreground">{proposalNote}</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground-2">{calculatorNote}</p>
        </div>
        <ActionLink href={calculatorHref} secondary className="w-fit">
          {calculatorLabel}
        </ActionLink>
      </div>
    </InstitutionalSection>
  );
}

export function ContractingDeploymentSection({
  heading,
  items,
  note,
  ...identity
}: SectionIdentity & {
  heading: PageHeading;
  items: readonly ContentItem[];
  note?: string;
}) {
  return (
    <InstitutionalSection {...identity}>
      <div className="p-6 md:p-8">
        <SectionHeading {...heading} />
      </div>
      <ol className="grid border-t border-border md:grid-cols-2">
        {items.map((item, index) => (
          <li
            key={item.id}
            id={item.id}
            className={cn(
              'min-w-0 border-b border-border p-6 md:p-8',
              index % 2 === 0 && 'md:border-r',
            )}
          >
            <p aria-hidden="true" className="mb-4 font-mono text-2xl text-foreground-2">
              {formatIndex(index + 1)}
            </p>
            <h3 className="text-base leading-snug font-medium text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-foreground-2">{item.description}</p>
          </li>
        ))}
      </ol>
      {note && (
        <p className="border-t border-border p-6 text-sm leading-relaxed text-foreground-2 md:p-8">
          {note}
        </p>
      )}
    </InstitutionalSection>
  );
}
