import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { frame } from '@/components/landing/styles';
import { ActionLink } from '@/components/landing/primitives';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import type { BlogPost } from '@/lib/blog/types';
import { absoluteUrl, postUrl } from '@/lib/blog/urls';
import { articleStructuredData, serializeJsonLd } from '@/lib/blog/structured-data';
import { cn } from '@/lib/utils';
import { MarkdownRenderer } from './markdown/renderer';
import { AuthorList } from './author-list';
import { ArticleActions } from './article-actions';
import { formatPostDate } from './post-card';
import styles from './blog.module.css';

export function ArticlePage({ post }: { post: BlogPost }) {
  const fm = post.frontMatter;
  return (
    <div id="inicio" className={cn(frame, styles.container)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleStructuredData(post)) }}
      />
      <div className={styles.grid}>
        <header className={styles.articleHeader}>
          <Link
            href="/blog"
            className="group inline-flex min-h-11 w-fit items-center gap-1 text-sm text-foreground-3 hover:text-foreground"
          >
            <ArrowLeft size={14} aria-hidden="true" />
            {copy.title}
          </Link>
          <h1 className={styles.title}>{fm.title}</h1>
          <AuthorList authors={post.authors} linked />
        </header>
      </div>
      <div className={styles.grid}>
        <aside aria-label={copy.published} className={styles.meta}>
          <time dateTime={fm.date}>{formatPostDate(fm.date)}</time>
          <p>{copy.reading(post.readingMinutes)}</p>
          {fm.updated_at && fm.updated_at !== fm.date && (
            <p>
              {copy.updated} <time dateTime={fm.updated_at}>{formatPostDate(fm.updated_at)}</time>
            </p>
          )}
          <ArticleActions
            url={absoluteUrl(postUrl(post.slug))}
            sourceUrl={`${postUrl(post.slug)}/source.md`}
          />
        </aside>
        <article className={styles.body}>
          {fm.mock && (
            <p className="mb-6 rounded-lg border border-border bg-surface-1 px-4 py-3 text-sm text-foreground-3">
              {copy.mockDescription}
            </p>
          )}
          <MarkdownRenderer post={post} />
        </article>
      </div>
      <section className={styles.cta} aria-labelledby="blog-cta">
        <h2
          id="blog-cta"
          className="max-w-2xl font-display text-3xl leading-tight font-normal tracking-tight text-balance lg:text-4xl"
        >
          {copy.cta}
        </h2>
        <div className="flex flex-wrap gap-4">
          <ActionLink href="/contato">{copy.contact}</ActionLink>
          <ActionLink href="/plataforma" secondary>
            {copy.platform}
          </ActionLink>
        </div>
      </section>
    </div>
  );
}
