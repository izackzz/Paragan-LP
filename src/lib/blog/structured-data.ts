import { siteSeo } from '@/config/seo';
import { blogCopy } from '@/i18n/messages/pages/blog';
import { absoluteUrl, postUrl } from './urls';
import type { BlogPost } from './types';

export const serializeJsonLd = (data: unknown) => JSON.stringify(data).replace(/</g, '\\u003c');
export function articleStructuredData(post: BlogPost) {
  const fm = post.frontMatter;
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    '@id': absoluteUrl(postUrl(post.slug)),
    headline: fm.title,
    description: fm.excerpt,
    image: absoluteUrl(fm.seo.og_image ?? fm.cover_image ?? siteSeo.image.url),
    datePublished: fm.date,
    dateModified: fm.updated_at ?? fm.date,
    author: post.authors.map((author) => ({
      '@type': author.kind === 'organization' ? 'Organization' : 'Person',
      name: author.name,
      url: author.url,
    })),
    publisher: {
      '@type': 'Organization',
      name: siteSeo.name,
      url: siteSeo.url,
      logo: { '@type': 'ImageObject', url: absoluteUrl('/brand-icon.svg') },
    },
    mainEntityOfPage: fm.seo.canonical ?? absoluteUrl(postUrl(post.slug)),
    inLanguage: fm.lang,
    wordCount: post.wordCount,
    isPartOf: { '@type': 'Blog', '@id': absoluteUrl('/blog') },
  };
}
export function listingStructuredData(posts: BlogPost[], pathname: string) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog',
        '@id': absoluteUrl('/blog'),
        name: `${blogCopy.title} ${siteSeo.name}`,
        url: absoluteUrl('/blog'),
        inLanguage: 'pt-BR',
      },
      {
        '@type': 'CollectionPage',
        '@id': absoluteUrl(pathname),
        name: blogCopy.title,
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: posts.map((post, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: post.frontMatter.title,
            url: absoluteUrl(postUrl(post.slug)),
          })),
        },
      },
    ],
  };
}
