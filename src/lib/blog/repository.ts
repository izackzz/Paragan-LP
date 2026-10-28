import 'server-only';
import data from '@/content/blog.generated.json';
import type { BlogData } from './types';
import { getListing } from './listing';
import { absoluteUrl, postUrl } from './urls';

const posts = (data as unknown as BlogData).posts;
export const getPublishedPosts = () => posts;
export const getPostBySlug = (slug: string) => posts.find((post) => post.slug === slug);
export const getCategories = () => [
  ...new Map(posts.map((post) => [post.category.slug, post.category])).values(),
];
export const getPage = (page = 1, category?: string) => getListing(posts, page, category);
export const getIndexablePosts = () =>
  posts.filter(
    (post) =>
      !post.frontMatter.mock &&
      !post.frontMatter.seo.noindex &&
      (!post.frontMatter.seo.canonical ||
        post.frontMatter.seo.canonical === absoluteUrl(postUrl(post.slug))),
  );
export function getListingParams(category?: string) {
  return Array.from({ length: getPage(1, category).pages }, (_, index) => ({
    page: String(index + 1),
  }));
}
