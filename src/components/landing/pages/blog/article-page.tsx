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
import { ArticleToc } from './article-toc';
import { PostCover } from './post-cover';
import { listingUrl } from '@/lib/blog/urls';

export function ArticlePage({ post }: { post: BlogPost }) {
  const fm = post.frontMatter;
  return (
    <div id="inicio" className={cn(frame, styles.container, styles.articleContainer)}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleStructuredData(post)) }}
      />
      <div className={styles.articleLayout}>
        <header className={styles.articleHeader}>
          <Link href="/blog" className={styles.backLink}>
            <ArrowLeft size={14} aria-hidden="true" />
            {copy.back}
          </Link>
          <h1 className={styles.title}>{fm.title}</h1>
          <p className={styles.articleExcerpt}>{fm.excerpt}</p>
          <div className={styles.meta}>
            <time dateTime={fm.date}>{formatPostDate(fm.date)}</time>
            <span aria-hidden="true">·</span>
            <span>{copy.reading(post.readingMinutes)}</span>
            {fm.updated_at && fm.updated_at !== fm.date && (
              <span>
                {copy.updated} <time dateTime={fm.updated_at}>{formatPostDate(fm.updated_at)}</time>
              </span>
            )}
          </div>
          <AuthorList authors={post.authors} linked detailed />
        </header>
        <aside className={styles.sidebar}>
          <div className={styles.articleTopics}>
            <Link href={listingUrl(1, post.category.slug)} className={styles.topicLink}>
              {post.category.name}
            </Link>
          </div>
          <ArticleToc headings={post.headings} />
          <ArticleActions
            url={absoluteUrl(postUrl(post.slug))}
            sourceUrl={`${postUrl(post.slug)}/source.md`}
          />
        </aside>
        <article className={styles.body} aria-label={fm.title}>
          <PostCover post={post} preload />
          {fm.mock && <p className={styles.articleNotice}>{copy.mockDescription}</p>}
          <MarkdownRenderer post={post} />
          {fm.tags.length > 0 && (
            <footer className={styles.articleTags} aria-label={copy.topics}>
              <span className={styles.sectionLabel}>{copy.topics}</span>
              <ul role="list">
                {fm.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </footer>
          )}
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
