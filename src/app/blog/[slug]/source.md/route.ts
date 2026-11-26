import { getPostBySlug } from '@/lib/blog/repository';
export const dynamic = 'force-static';
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const post = await getPostBySlug((await params).slug);
  return new Response(post?.sourceMarkdown ?? '', {
    status: post ? 200 : 404,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Robots-Tag': 'noindex',
      'X-Content-Type-Options': 'nosniff',
    },
  });
}
