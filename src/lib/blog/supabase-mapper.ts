import { z } from 'zod';
import { authorSchema, categorySchema, frontMatterSchema } from './schema';
import type { BlogPostSummary } from './types';
import { safeUrl } from './urls';

const mediaSchema = z.object({
  src: z.string().refine((value) => safeUrl(value, true), 'URL de mídia não permitida'),
  alt: z.string().trim().min(1),
  width: z.number().int().positive(),
  height: z.number().int().positive(),
  caption: z.string().nullable(),
  position: z.number().int().nonnegative(),
});
const rowAuthorSchema = z.object({
  position: z.number().int().nonnegative(),
  author: z.object({
    id: z.string().uuid(),
    name: z.string().min(1),
    role: z.string().nullable(),
    kind: z.enum(['person', 'organization']),
    url: z.string().nullable(),
    avatar_url: z.string().nullable(),
  }),
});
export const blogRowSchema = z.object({
  slug: z.string(),
  title: z.string(),
  excerpt: z.string(),
  published_at: z.string(),
  updated_at: z.string(),
  lang: z.literal('pt-BR'),
  tags: z.array(z.string()),
  featured: z.boolean(),
  featured_order: z.number(),
  cover_image: z.string().nullable(),
  cover_alt: z.string().nullable(),
  seo: z.record(z.string(), z.unknown()),
  is_demo: z.boolean(),
  category: categorySchema,
  authors: z.array(rowAuthorSchema).min(1, 'Artigo publicado precisa de autoria'),
  media: z.array(mediaSchema),
});
export const blogArticleRowSchema = blogRowSchema.extend({
  body_markdown: z.string().min(1).max(1_000_000),
});

export function mapBlogRow(value: unknown): BlogPostSummary {
  const row = blogRowSchema.parse(value);
  const authors = [...row.authors]
    .sort((a, b) => a.position - b.position)
    .map(({ author }) =>
      authorSchema.parse({
        id: author.id,
        name: author.name,
        role: author.role ?? undefined,
        kind: author.kind,
        url: author.url ?? undefined,
        avatar: author.avatar_url ?? undefined,
      }),
    );
  const media = [...row.media].sort((a, b) => a.position - b.position);
  const frontMatter = frontMatterSchema.parse({
    title: row.title,
    slug: row.slug,
    excerpt: row.excerpt,
    date: row.published_at,
    updated_at:
      Date.parse(row.updated_at) >= Date.parse(row.published_at) ? row.updated_at : undefined,
    author: authors[0].name,
    authors,
    category: row.category.slug,
    tags: row.tags,
    lang: row.lang,
    featured: row.featured,
    featured_order: row.featured_order,
    cover_image: row.cover_image ?? undefined,
    cover_alt: row.cover_alt ?? undefined,
    mock: row.is_demo,
    images: Object.fromEntries(
      media.map((image) => [
        image.src,
        {
          width: image.width,
          height: image.height,
          caption: image.caption ?? undefined,
        },
      ]),
    ),
    seo: row.seo,
  });
  return {
    slug: frontMatter.slug,
    frontMatter,
    authors,
    category: row.category,
    images: Object.fromEntries(
      media.map((image) => [
        image.src,
        {
          src: image.src,
          alt: image.alt,
          width: image.width,
          height: image.height,
          caption: image.caption ?? undefined,
        },
      ]),
    ),
  };
}
