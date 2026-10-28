import index from '@/content/blog-search.generated.json';
export const dynamic = 'force-static';
export function GET() {
  return Response.json(index, {
    headers: { 'X-Robots-Tag': 'noindex', 'X-Content-Type-Options': 'nosniff' },
  });
}
