import type { ReactNode } from 'react';
import { SectionHeading, SectionLabel } from './primitives';
import { frame, section, padding, micro } from './styles';
import { cn } from '@/lib/utils';
import { formatIndex } from '@/i18n';

export function SectionContent({ id, number, title, description, children, dark = false }: {
  id: string; number: number; title: string; description: string; children: ReactNode; dark?: boolean;
}) {
  const body = <>
    <SectionLabel number={formatIndex(number)}>{title}</SectionLabel>
    <div className={padding}><SectionHeading eyebrow={title} title={title} description={description} /></div>
    {children}
  </>;
  return dark ? <section id={id} className="dark scroll-mt-22 bg-background text-foreground"><div className={cn(frame, section)}>{body}</div></section> : <section id={id} className={cn(frame, section)}>{body}</section>;
}

export function ContentModule({ title, description, items, children, id }: {
  title: string; description: string; items?: readonly string[]; children?: ReactNode; id?: string;
}) {
  return <div id={id} className="min-w-0 scroll-mt-40 p-6 md:p-8">
    <h3 className="font-display text-2xl/7 font-medium text-foreground">{title}</h3>
    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>
    {items && <ul className="mt-5 list-none border-t border-border">{items.map(item => <li key={item} className="border-b border-border py-3 text-sm text-foreground-2">{item}</li>)}</ul>}
    {children}
  </div>;
}

export function StructuredRecords({ records }: { records: readonly { title: string; fields: readonly { label: string; value: string }[] }[] }) {
  return <div className="grid min-w-0">{records.map(record => <div key={record.title} className="border-t border-border p-6 md:p-8">
    <h3 className="text-base font-medium">{record.title}</h3>
    <dl className="mt-4 grid gap-4">{record.fields.map(field => <div key={field.label} className="grid gap-1 md:grid-cols-2 md:gap-4">
      <dt className={cn(micro, 'text-muted-foreground')}>{field.label}</dt><dd className="min-w-0 text-sm leading-relaxed text-foreground-2">{field.value}</dd>
    </div>)}</dl>
  </div>)}</div>;
}
