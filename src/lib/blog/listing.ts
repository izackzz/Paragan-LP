import type { BlogPost } from './types';
export const pageSize = 12;
export function getListing(posts: BlogPost[], page = 1, category?: string) {
  const filtered = category ? posts.filter((post) => post.category.slug === category) : posts;
  const featured = category
    ? []
    : filtered
        .filter((post) => post.frontMatter.featured)
        .sort((a, b) => a.frontMatter.featured_order - b.frontMatter.featured_order)
        .slice(0, 3);
  const regular = filtered.filter((post) => !featured.includes(post));
  const pages = Math.max(1, Math.ceil(regular.length / pageSize));
  return {
    featured: page === 1 ? featured : [],
    posts: regular.slice((page - 1) * pageSize, page * pageSize),
    pages,
    valid:
      Number.isInteger(page) && page >= 1 && page <= pages && (!category || filtered.length > 0),
    noindex: filtered.some((post) => post.frontMatter.mock || post.frontMatter.seo.noindex),
  };
}
