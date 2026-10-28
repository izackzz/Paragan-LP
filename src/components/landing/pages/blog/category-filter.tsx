'use client';
import { useRouter } from 'next/navigation';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select';
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
  const router = useRouter();
  return (
    <div className="lg:hidden">
      <Select
        value={selected ?? 'all'}
        onValueChange={(value) => router.push(listingUrl(1, value === 'all' ? undefined : value))}
      >
        <SelectTrigger
          aria-label={copy.categories}
          className="min-h-11 min-w-36 rounded-md border-border bg-background text-sm"
        >
          <SelectValue>
            {categories.find((category) => category.slug === selected)?.name ?? copy.all}
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">{copy.all}</SelectItem>
          {categories.map((category) => (
            <SelectItem key={category.slug} value={category.slug}>
              {category.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
