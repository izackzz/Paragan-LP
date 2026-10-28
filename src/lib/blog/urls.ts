import { siteSeo } from '../../config/seo';

export function postUrl(slug: string) {
  return `/blog/${slug}`;
}
export function listingUrl(page = 1, category?: string) {
  const base = category ? `/blog/category/${category}` : '/blog';
  return page === 1 ? base : `${base}/page/${page}`;
}
export function absoluteUrl(path: string) {
  return new URL(path, siteSeo.url).href;
}
export function categorySlug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
export function safeUrl(value: string, image = false): boolean {
  if (/[\u0000-\u0020\u007f\\]/.test(value) || value.startsWith('//')) return false;
  if (value.startsWith('/') || (!image && value.startsWith('#'))) return true;
  try {
    return (image ? ['https:'] : ['https:', 'mailto:']).includes(new URL(value).protocol);
  } catch {
    return false;
  }
}
