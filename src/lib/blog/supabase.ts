import 'server-only';

// The website never uses an administrative key or a visitor's auth session.
// RLS is therefore applied to every read, including Markdown and search.
export const blogSelect = [
  'slug,title,excerpt,published_at,updated_at,lang,tags,featured,featured_order',
  'cover_image,cover_alt,seo,is_demo',
  'category:blog_categories(slug,name,description)',
  'authors:blog_post_authors(position,author:blog_authors(id,name,role,kind,url,avatar_url))',
  'media:blog_media(src,alt,width,height,caption,position)',
].join(',');

export async function readBlogRows(query: Record<string, string>): Promise<unknown[]> {
  const endpoint = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_PUBLISHABLE_KEY;
  if (!endpoint || !key?.startsWith('sb_publishable_')) {
    throw new Error('Configure SUPABASE_URL e SUPABASE_PUBLISHABLE_KEY para o blog.');
  }
  const url = new URL('/rest/v1/blog_posts', endpoint);
  if (url.protocol !== 'https:') throw new Error('SUPABASE_URL deve usar HTTPS.');
  url.search = new URLSearchParams({
    status: 'eq.published',
    order: 'published_at.desc,slug.asc',
    ...query,
  }).toString();
  const response = await fetch(url, {
    headers: { apikey: key, Accept: 'application/json' },
    next: { revalidate: 60, tags: ['blog'] },
    signal: AbortSignal.timeout(10_000),
  });
  if (!response.ok) {
    // Do not log upstream bodies, credentials, or unpublished editorial content.
    throw new Error(`Não foi possível carregar o blog (Supabase HTTP ${response.status}).`);
  }
  const data: unknown = await response.json();
  if (!Array.isArray(data)) throw new Error('Resposta inválida do conteúdo do blog.');
  return data;
}
