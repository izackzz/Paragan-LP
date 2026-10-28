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
      <Link href={postUrl(post.slug)} className="block h-full rounded-sm outline-offset-4">
        <Card
          className={cn(
            'h-full rounded-sm p-6 pb-8 transition-colors hover:bg-hover',
            featured ? 'lg:min-h-105' : 'border-b border-border lg:border-0',
          )}
        >
          <CardHeader className="gap-5 p-0">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-sm">
              <time dateTime={post.frontMatter.date}>
                {formatPostDate(post.frontMatter.date, true)}
              </time>
              <span className="text-foreground-3">{post.category.name}</span>
            </div>
            <Heading
              className={cn(
                'w-full font-display font-normal tracking-tight text-balance wrap-anywhere',
                featured
                  ? 'text-3xl leading-tight lg:min-h-48'
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
