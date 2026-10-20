import type { MetadataRoute } from 'next';
import { siteSeo } from '@/config/seo';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: `${siteSeo.url}/sitemap.xml`,
  };
}
