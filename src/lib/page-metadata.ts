import type { Metadata } from 'next';
import { siteSeo } from '@/config/seo';

export type PageMetadataInput = {
  pathname: `/${string}`;
  title: string;
  description: string;
  imageAlt: string;
};

/** Every route overrides inherited home copy in both social metadata formats. */
export function pageMetadata({
  pathname,
  title,
  description,
  imageAlt,
}: PageMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: { canonical: pathname },
    openGraph: {
      type: 'website',
      url: pathname,
      siteName: siteSeo.name,
      locale: siteSeo.locale,
      title,
      description,
      images: [{ ...siteSeo.image, alt: imageAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [{ url: siteSeo.image.url, alt: imageAlt }],
    },
  };
}
