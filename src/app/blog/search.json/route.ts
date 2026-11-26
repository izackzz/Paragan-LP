import { getPublishedPosts } from '@/lib/blog/repository';
export const dynamic = 'force-static';
export const revalidate = 60;
export async function GET() {
  const index = (await getPublishedPosts()).map(({ slug, frontMatter, authors, category }) => ({
    slug,
    title: frontMatter.title,
    excerpt: frontMatter.excerpt,
    tags: frontMatter.tags,
    authors,
    category,
  }));
  return Response.json(index, {
    headers: { 'X-Robots-Tag': 'noindex', 'X-Content-Type-Options': 'nosniff' },
  });
}
