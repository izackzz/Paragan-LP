import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { BlogPost } from '@/lib/blog/types';
import { postUrl } from '@/lib/blog/urls';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import { AuthorList } from './author-list';
import { cn } from '@/lib/utils';
import { PostCover } from './post-cover';
import styles from './blog.module.css';

export function formatPostDate(date: string, short = false) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: short ? 'long' : 'short',
    year: short ? undefined : 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date));
}
export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  return (
    <article className={cn(styles.postCard, featured && styles.featuredCard)}>
      {featured && <PostCover post={post} fallback />}
      <div className={styles.cardContent}>
        <div className={styles.cardMeta}>
          <span className={styles.categoryLabel}>{post.category.name}</span>
          <time dateTime={post.frontMatter.date}>{formatPostDate(post.frontMatter.date)}</time>
        </div>
        <h3 className={styles.cardTitle}>
          <Link className={styles.cardLink} href={postUrl(post.slug)}>
            {post.frontMatter.title}
          </Link>
        </h3>
        <p className={styles.cardExcerpt}>{post.frontMatter.excerpt}</p>
        <div className={styles.cardFooter}>
          <AuthorList authors={post.authors} />
          <ArrowUpRight size={18} aria-hidden="true" className={styles.cardArrow} />
        </div>
        {post.frontMatter.mock && <p className={styles.cardNotice}>{copy.mock}</p>}
      </div>
    </article>
  );
}
