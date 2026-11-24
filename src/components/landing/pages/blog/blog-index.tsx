import Link from 'next/link';
import { Rss, ArrowLeft, ArrowRight } from 'lucide-react';
import { getCategories, getPage } from '@/lib/blog/repository';
import { listingUrl } from '@/lib/blog/urls';
import { listingStructuredData, serializeJsonLd } from '@/lib/blog/structured-data';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import { frame } from '@/components/landing/styles';
import { cn } from '@/lib/utils';
import { PostCard } from './post-card';
import { BlogSearch } from './blog-search';
import { CategoryFilter } from './category-filter';
import styles from './blog.module.css';

export function BlogIndex({ page = 1, category }: { page?: number; category?: string }) {
  const data = getPage(page, category);
  const categories = getCategories();
  const allPosts = [...data.featured, ...data.posts];
  return (
    <div className={cn(frame, styles.container)} id="inicio">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(listingStructuredData(allPosts, listingUrl(page, category))),
        }}
      />
      <header className={styles.indexHeader}>
        <div>
          <p className={styles.eyebrow}>{copy.eyebrow}</p>
          <h1 className={styles.indexTitle}>{copy.title}</h1>
          <p className={styles.indexDescription}>{copy.description}</p>
        </div>
        <div className={styles.searchTools}>
          <BlogSearch />
          <a href="/blog/feed.xml" aria-label={copy.feed} className={styles.iconLink}>
            <Rss size={16} aria-hidden="true" />
          </a>
        </div>
      </header>
      <div className={styles.filterBar}>
        <CategoryFilter categories={categories} selected={category} />
        <span className={styles.archiveLabel}>{copy.archive}</span>
      </div>
      {allPosts.some((post) => post.frontMatter.mock) && (
        <p className={styles.demoNotice}>{copy.mockDescription}</p>
      )}
      {data.featured.length > 0 && (
        <section aria-labelledby="blog-featured" className={styles.featuredSection}>
          <h2 id="blog-featured" className={styles.sectionLabel}>
            {copy.featured}
          </h2>
          <ul role="list" className={styles.featuredGrid}>
            {data.featured.map((post) => (
              <li className="min-w-0" key={post.slug}>
                <PostCard post={post} featured />
              </li>
            ))}
          </ul>
        </section>
      )}
      {(data.posts.length > 0 || allPosts.length === 0) && (
        <section aria-labelledby="blog-posts" className={styles.postsSection}>
          <h2 className={styles.sectionLabel} id="blog-posts">
            {copy.posts}
          </h2>
          {allPosts.length === 0 ? (
            <div className={styles.emptyState}>
              <h3 className="font-display text-3xl">{copy.empty}</h3>
              <p className="mt-4 text-foreground-3">{copy.emptyDescription}</p>
            </div>
          ) : (
            <ul role="list" className={styles.postsGrid}>
              {data.posts.map((post) => (
                <li className="min-w-0" key={post.slug}>
                  <PostCard post={post} />
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
      {data.pages > 1 && (
        <nav aria-label={copy.pagination} className={styles.pagination}>
          {page > 1 && (
            <Link
              rel="prev"
              className={styles.paginationLink}
              href={listingUrl(page - 1, category)}
            >
              <ArrowLeft size={16} aria-hidden="true" />
              {copy.previous}
            </Link>
          )}
          <span aria-current="page" className="text-sm text-foreground-3">
            {copy.page(page)}
          </span>
          {page < data.pages && (
            <Link
              rel="next"
              className={styles.paginationLink}
              href={listingUrl(page + 1, category)}
            >
              {copy.more}
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          )}
        </nav>
      )}
    </div>
  );
}
