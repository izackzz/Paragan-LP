import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from '@/components/ui/card';
import Link from 'next/link';
import type { BlogPost } from '@/lib/blog/types';
import { postUrl } from '@/lib/blog/urls';
import { AuthorList } from './author-list';
import { cn } from '@/lib/utils';

export function formatPostDate(date: string, short = false) {
  return new Intl.DateTimeFormat('pt-BR', {
    day: 'numeric',
    month: short ? 'long' : 'short',
    year: short ? undefined : 'numeric',
    timeZone: 'America/Sao_Paulo',
  }).format(new Date(date));
}
export function PostCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
  const Heading = featured ? 'h2' : 'h3';
  return (
    <article className="h-full min-w-0">
      <Link href={postUrl(post.slug)} className="block h-full rounded-2xl outline-offset-4">
        <Card
          className={cn(
            'h-full rounded-2xl p-6 transition-colors hover:bg-hover',
            featured
              ? 'min-h-80 border border-border bg-card hover:border-blue-500/30'
              : 'border border-border/70 bg-card/40',
          )}
        >
          <CardHeader className="gap-5 p-0">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <time dateTime={post.frontMatter.date}>
                {formatPostDate(post.frontMatter.date, true)}
              </time>
              <span className="rounded-full bg-blue-500/8 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-400">
                {post.category.name}
              </span>
            </div>
            <Heading
              className={cn(
                'w-full font-display font-normal tracking-tight text-balance wrap-anywhere',
                featured
                  ? 'text-3xl leading-tight lg:min-h-24'
                  : 'text-2xl leading-snug lg:min-h-24',
              )}
            >
              <CardTitle
                className={cn(
                  'font-display font-normal',
                  featured ? 'text-3xl leading-tight' : 'text-2xl leading-snug',
                )}
              >
                {post.frontMatter.title}
              </CardTitle>
            </Heading>
          </CardHeader>
          {featured && (
            <CardContent className="mt-auto px-0 pt-5">
              <CardDescription className="text-sm leading-5 text-foreground-3">
                {post.frontMatter.excerpt}
              </CardDescription>
            </CardContent>
          )}
          <CardFooter className="relative z-auto mt-auto px-0 pt-5">
            <AuthorList authors={post.authors} />
          </CardFooter>
        </Card>
      </Link>
    </article>
  );
}
