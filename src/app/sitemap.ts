import type { MetadataRoute } from 'next';
import { siteSeo } from '@/config/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
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
}
