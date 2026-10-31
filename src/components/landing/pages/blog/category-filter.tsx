'use client';
import { VelocityTabs } from '@/components/ui/velocity-tabs';
import type { Category } from '@/lib/blog/types';
import { listingUrl } from '@/lib/blog/urls';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';

export function CategoryFilter({
  categories,
  selected,
}: {
  categories: Category[];
  selected?: string;
}) {
  const tabs = [
    { value: 'all', label: copy.all, href: '/blog' },
    ...categories.map((category) => ({
      value: category.slug,
      label: category.name,
      href: listingUrl(1, category.slug),
    })),
  ];
  return (
    <div className="max-w-full min-w-0 overflow-x-auto py-1">
      <VelocityTabs
        tabs={tabs}
        value={selected ?? 'all'}
        aria-label={copy.categories}
        className="w-max min-w-64 rounded-xl border-border bg-surface-1 p-1"
        tabClassName="min-h-10 px-5 whitespace-nowrap"
        indicatorClassName="rounded-lg bg-foreground shadow-sm"
      />
    </div>
  );
}
