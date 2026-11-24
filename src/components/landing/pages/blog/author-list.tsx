import type { Author } from '@/lib/blog/types';
import { blogCopy } from '@/i18n/messages/pages/blog';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';
import { AppBrandMark } from '@/components/assets/brand/brandmark';
import styles from './blog.module.css';

export function AuthorList({
  authors,
  linked = false,
  detailed = false,
}: {
  authors: Author[];
  linked?: boolean;
  detailed?: boolean;
}) {
  if (detailed) {
    return (
      <ul role="list" aria-label={blogCopy.authors} className={styles.authors}>
        {authors.map((author, index) => (
          <li key={`${author.name}-${index}`} className={styles.author}>
            <Avatar aria-hidden="true" className="size-9 shrink-0">
              {author.avatar && <AvatarImage src={author.avatar} alt="" />}
              <AvatarFallback className="border border-border bg-surface-1 p-2 text-brand">
                <AppBrandMark className="size-full" aria-hidden="true" />
              </AvatarFallback>
            </Avatar>
            <div className="min-w-0">
              {linked && author.url ? (
                <a href={author.url} rel="author noopener noreferrer" className={styles.authorLink}>
                  {author.name}
                </a>
              ) : (
                <span className="text-sm font-medium text-foreground">{author.name}</span>
              )}
              {author.role && (
                <p className="text-xs leading-relaxed text-foreground-3">{author.role}</p>
              )}
            </div>
          </li>
        ))}
      </ul>
    );
  }
  return (
    <div className="flex min-w-0 items-center gap-2 text-xs text-foreground-3">
      <AvatarGroup aria-hidden="true" className="shrink-0 -space-x-2">
        {authors.slice(0, 3).map((author, index) => (
          <Avatar
            key={`${author.name}-${index}`}
            className="size-8 bg-background ring-2 ring-background"
          >
            {author.avatar && <AvatarImage src={author.avatar} alt="" />}
            <AvatarFallback className="border border-border bg-card p-1.5 text-brand">
              <AppBrandMark className="size-full" aria-hidden="true" />
            </AvatarFallback>
          </Avatar>
        ))}
      </AvatarGroup>
      <span className="min-w-0 leading-snug wrap-anywhere">
        {authors.map((author, index) => (
          <span key={`${author.name}-${index}`}>
            {index > 0 && ', '}
            {linked && author.url ? (
              <a
                href={author.url}
                rel="author noopener noreferrer"
                className="underline-offset-4 hover:underline"
              >
                {author.name}
              </a>
            ) : (
              author.name
            )}
          </span>
        ))}
      </span>
    </div>
  );
}
