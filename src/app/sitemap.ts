import type { MetadataRoute } from 'next';
import { siteSeo } from '@/config/seo';
import { getIndexablePosts, getCategories, getPage } from '@/lib/blog/repository';
import { absoluteUrl, listingUrl, postUrl } from '@/lib/blog/urls';

export default function sitemap(): MetadataRoute.Sitemap {
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
  const posts = getIndexablePosts();
  if (!posts.length) return institutional;
  const lastModified = new Date(
    Math.max(
      ...posts.map((post) => Date.parse(post.frontMatter.updated_at ?? post.frontMatter.date)),
    ),
  );
  const listings: MetadataRoute.Sitemap = [];
  for (const category of [undefined, ...getCategories().map((item) => item.slug)]) {
    if (getPage(1, category).noindex) continue;
    for (let page = 1; page <= getPage(1, category).pages; page++)
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
