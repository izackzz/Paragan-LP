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
      <h1 className={cn(styles.title, 'mb-4')}>{copy.title}</h1>
      <p className="mb-8 max-w-xl text-base leading-relaxed text-foreground-3">
        {copy.description}
      </p>
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
        <CategoryFilter categories={categories} selected={category} />
        <div className="flex w-full items-center gap-3 sm:ml-auto sm:w-auto">
          <BlogSearch />
          <a
            href="/blog/feed.xml"
            aria-label={copy.feed}
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-border text-foreground-3 hover:bg-hover hover:text-foreground"
          >
            <Rss size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
      {allPosts.some((post) => post.frontMatter.mock) && (
        <div className="mt-6 rounded-xl border border-blue-500/15 bg-blue-500/5 px-5 py-4 text-sm text-foreground-3">
          <p className="mb-1 font-medium text-foreground">{copy.mock}</p>
          <p>{copy.mockDescription}</p>
        </div>
      )}
      {data.featured.length > 0 && (
        <section aria-label={copy.featured} className="mt-8 mb-8 lg:mb-12">
          <h2 className="sr-only">{copy.featured}</h2>
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {data.featured.map((post) => (
              <li className="min-w-0" key={post.slug}>
                <PostCard post={post} featured />
              </li>
            ))}
          </ul>
        </section>
      )}
      <section aria-labelledby="blog-posts" className="mt-10 lg:mt-8">
        <h2 className="sr-only" id="blog-posts">
          {copy.posts}
        </h2>
        {allPosts.length === 0 ? (
          <div className="py-24">
            <h3 className="font-display text-3xl">{copy.empty}</h3>
            <p className="mt-4 text-foreground-3">{copy.emptyDescription}</p>
          </div>
        ) : (
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {data.posts.map((post) => (
              <li className="min-w-0" key={post.slug}>
                <PostCard post={post} />
              </li>
            ))}
          </ul>
        )}
      </section>
      {data.pages > 1 && (
        <nav
          aria-label={copy.pagination}
          className="mt-16 flex flex-wrap items-center justify-center gap-4"
        >
          {page > 1 && (
            <Link
              rel="prev"
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm hover:bg-hover"
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
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-5 text-sm hover:bg-hover"
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
