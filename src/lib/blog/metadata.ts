import type { Metadata } from 'next';
import { siteSeo } from '@/config/seo';
import { blogCopy } from '@/i18n/messages/pages/blog';
import type { BlogPost } from './types';
import { absoluteUrl, listingUrl, postUrl } from './urls';

export function listingMetadata(
  page: number,
  category: string | undefined,
  categoryName: string | undefined,
  noindex: boolean,
): Metadata {
  const title = [
    categoryName,
    blogCopy.title,
    page > 1 ? blogCopy.page(page) : undefined,
    siteSeo.name,
  ]
    .filter(Boolean)
    .join(' — ');
  const pathname = listingUrl(page, category);
  return {
    title,
    description: blogCopy.description,
    alternates: {
      canonical: absoluteUrl(pathname),
      types: { 'application/rss+xml': '/blog/feed.xml' },
    },
    robots: { index: !noindex, follow: true, googleBot: { index: !noindex, follow: true } },
    openGraph: {
      type: 'website',
      title,
      description: blogCopy.description,
      url: absoluteUrl(pathname),
      locale: siteSeo.locale,
      siteName: siteSeo.name,
      images: [siteSeo.image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: blogCopy.description,
      images: [siteSeo.image.url],
    },
  };
}
export function articleMetadata(post: BlogPost): Metadata {
  const fm = post.frontMatter;
  const title = fm.seo.meta_title ?? fm.title;
  const description = fm.seo.meta_description ?? fm.excerpt;
  const image = fm.seo.og_image ?? fm.cover_image ?? siteSeo.image.url;
  const canonical = fm.seo.canonical ?? absoluteUrl(postUrl(post.slug));
  return {
    title,
    description,
    authors: post.authors.map(({ name, url }) => ({ name, url })),
    alternates: { canonical, types: { 'application/rss+xml': '/blog/feed.xml' } },
    robots: {
      index: !fm.mock && !fm.seo.noindex,
      follow: true,
      googleBot: { index: !fm.mock && !fm.seo.noindex, follow: true },
    },
    openGraph: {
      type: 'article',
      title,
      description,
      url: canonical,
      locale: siteSeo.locale,
      siteName: siteSeo.name,
      publishedTime: fm.date,
      modifiedTime: fm.updated_at ?? fm.date,
      authors: post.authors.map((author) => author.url ?? author.name),
      section: post.category.name,
      tags: fm.tags,
      images: [{ url: absoluteUrl(image), alt: fm.seo.og_image_alt ?? fm.cover_alt ?? fm.title }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: absoluteUrl(image), alt: fm.seo.og_image_alt ?? fm.title }],
    },
  };
}
