import Image from 'next/image';
import type { BlogPostSummary } from '@/lib/blog/types';
import styles from './blog.module.css';

export function PostCover({
  post,
  fallback = false,
  preload = false,
}: {
  post: BlogPostSummary;
  fallback?: boolean;
  preload?: boolean;
}) {
  const image = post.frontMatter.cover_image
    ? { src: post.frontMatter.cover_image, alt: post.frontMatter.cover_alt ?? '' }
    : fallback
      ? Object.values(post.images)[0]
      : undefined;

  if (!image) return null;

  return (
    <div className={styles.cover}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={
          fallback
            ? '(min-width: 1440px) 390px, (min-width: 1024px) 30vw, (min-width: 768px) 45vw, 90vw'
            : '(min-width: 1024px) 720px, 90vw'
        }
        preload={preload}
        className={styles.coverImage}
      />
    </div>
  );
}
