import type { MetadataRoute } from 'next';
import { siteSeo } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: `${siteSeo.url}/` }];
}
