import { getPostBySlug, getPublishedPosts } from '@/lib/blog/repository';
export const dynamic = 'force-static';
export const dynamicParams = false;
export function generateStaticParams() {
  return getPublishedPosts().map(({ slug }) => ({ slug }));
}
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = getPostBySlug((await params).slug);
  return new Response(post?.sourceMarkdown ?? '', {
    status: post ? 200 : 404,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
