import type { MetadataRoute } from 'next';
import { siteSeo } from '@/config/seo';
import { getIndexablePosts, getCategories, getPage } from '@/lib/blog/repository';
import { absoluteUrl, listingUrl, postUrl } from '@/lib/blog/urls';

export const revalidate = 60;
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const institutional = [
    '/',
    '/plataforma',
    '/checkout',
    '/financeiro',
    '/integracoes',
    '/solucoes',
    '/contratacao',
    '/contato',
    '/calculadora',
  ].map((pathname) => ({ url: `${siteSeo.url}${pathname}` }));
  const posts = await getIndexablePosts();
  if (!posts.length) return institutional;
  const lastModified = new Date(
    Math.max(
      ...posts.map((post) => Date.parse(post.frontMatter.updated_at ?? post.frontMatter.date)),
    ),
  );
  const listings: MetadataRoute.Sitemap = [];
  for (const category of [undefined, ...(await getCategories()).map((item) => item.slug)]) {
    const data = await getPage(1, category);
    if (data.noindex) continue;
    for (let page = 1; page <= data.pages; page++)
      listings.push({ url: absoluteUrl(listingUrl(page, category)), lastModified });
  }
  return [
    ...institutional,
    ...listings,
    ...posts.map((post) => ({
      url: absoluteUrl(postUrl(post.slug)),
      lastModified: post.frontMatter.updated_at ?? post.frontMatter.date,
    })),
  ];
}
