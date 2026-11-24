import Link from 'next/link';
import { FluidGroup } from '@/components/landing/fluid-group';
import type { Category } from '@/lib/blog/types';
import { listingUrl } from '@/lib/blog/urls';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import styles from './blog.module.css';

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
    <nav aria-label={copy.categories} className={styles.categoryNav}>
      <FluidGroup axis="x" as="ul" className={styles.categoryList}>
        {tabs.map((tab) => (
          <Link
            key={tab.value}
            href={tab.href}
            aria-current={tab.value === (selected ?? 'all') ? 'page' : undefined}
            className={styles.categoryLink}
          >
            {tab.label}
          </Link>
        ))}
      </FluidGroup>
    </nav>
  );
}
