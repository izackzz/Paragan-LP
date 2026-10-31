import type { Author } from '@/lib/blog/types';
import { blogCopy } from '@/i18n/messages/pages/blog';
import { Avatar, AvatarImage, AvatarFallback, AvatarGroup } from '@/components/ui/avatar';
import { AppBrandMark } from '@/components/assets/brand/brandmark';

export function AuthorList({ authors, linked = false }: { authors: Author[]; linked?: boolean }) {
  return (
    <div
      className="flex min-w-0 items-center gap-3 text-sm text-foreground"
      aria-label={blogCopy.authors}
    >
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
