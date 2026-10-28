import { getIndexablePosts } from '@/lib/blog/repository';
import { renderFeed } from '@/lib/blog/feed';
export const dynamic = 'force-static';
export function GET() {
  return new Response(renderFeed(getIndexablePosts()), {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
