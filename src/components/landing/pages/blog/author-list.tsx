import type { Author } from '@/lib/blog/types';
import { blogCopy } from '@/i18n/messages/pages/blog';

export function AuthorList({ authors, linked = false }: { authors: Author[]; linked?: boolean }) {
  return (
    <div
      className="flex min-w-0 items-start gap-2 text-sm text-foreground"
      aria-label={blogCopy.authors}
    >
      <div aria-hidden="true" className="mt-0.5 flex shrink-0 -space-x-1">
        {authors.slice(0, 3).map((author, index) => (
          <span
            key={`${author.name}-${index}`}
            className="flex size-4 items-center justify-center overflow-hidden rounded-full border border-border bg-surface-2 font-mono text-xs leading-none"
          >
            {author.name.slice(0, 1)}
          </span>
        ))}
      </div>
      <span className="min-w-0 leading-relaxed wrap-anywhere">
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
