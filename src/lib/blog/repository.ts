import 'server-only';
import { cache } from 'react';
import { stringify } from 'yaml';
import type { BlogPost, BlogPostSummary } from './types';
import { getListing } from './listing';
import { absoluteUrl, postUrl } from './urls';
import { compileMarkdown } from './compile';
import { blogSelect, readBlogRows } from './supabase';
import { blogArticleRowSchema, mapBlogRow } from './supabase-mapper';

export const getPublishedPosts = cache(async (): Promise<BlogPostSummary[]> => {
  const posts: BlogPostSummary[] = [];
  // Explicit pagination avoids silently truncating the archive at PostgREST's cap.
  for (let offset = 0; ; offset += 100) {
    const rows = await readBlogRows({ select: blogSelect, limit: '100', offset: String(offset) });
    posts.push(...rows.map(mapBlogRow));
    if (rows.length < 100) break;
  }
  return posts;
});

export const getPostBySlug = cache(async (slug: string): Promise<BlogPost | undefined> => {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return undefined;
  const rows = await readBlogRows({
    select: `${blogSelect},body_markdown`,
    slug: `eq.${slug}`,
    limit: '1',
  });
  if (!rows.length) return undefined;
  const row = blogArticleRowSchema.parse(rows[0]);
  const summary = mapBlogRow(row);
  const compiled = await compileMarkdown(row.body_markdown, summary.frontMatter);
  return {
    ...summary,
    ...compiled,
    bodyMarkdown: row.body_markdown,
    sourceMarkdown: `---\n${stringify(summary.frontMatter)}---\n\n${row.body_markdown}`,
  };
});

export const getCategories = cache(async () => [
  ...new Map(
    (await getPublishedPosts()).map((post) => [post.category.slug, post.category]),
  ).values(),
]);
export const getPage = async (page = 1, category?: string) =>
  getListing(await getPublishedPosts(), page, category);
export const getIndexablePosts = async () =>
  (await getPublishedPosts()).filter(
    (post) =>
      !post.frontMatter.mock &&
      !post.frontMatter.seo.noindex &&
      (!post.frontMatter.seo.canonical ||
        post.frontMatter.seo.canonical === absoluteUrl(postUrl(post.slug))),
  );
