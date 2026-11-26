import { z } from 'zod';
import { frontMatterSchema } from './schema';
import { safeUrl } from './urls';
import { normalizeTags } from './normalize';
import { compileMarkdown } from './compile';

const slug = z
  .string()
  .min(1)
  .max(160)
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .refine((value) => !['category', 'page', 'search', 'feed', 'feed-xml'].includes(value));
const text = (max: number) => z.string().trim().min(1).max(max);
const image = z
  .string()
  .max(2048)
  .refine((value) => {
    if (!safeUrl(value, true)) return false;
    if (value.startsWith('/')) return true;
    const url = new URL(value);
    return (
      url.origin === 'https://zaamwnkdbidondtryjsj.supabase.co' &&
      url.pathname.startsWith('/storage/v1/object/public/blog-assets/') &&
      !url.search &&
      !url.hash
    );
  }, 'Use uma imagem local ou do bucket blog-assets deste projeto.');

export const ingestionSchema = z
  .strictObject({
    slug,
    title: text(200),
    excerpt: text(600),
    body_markdown: text(900_000),
    status: z.enum(['draft', 'published']).default('draft'),
    published_at: z.iso.datetime({ offset: true }).optional(),
    category: z.strictObject({
      slug,
      name: text(120),
      description: z.string().trim().max(1000).default(''),
    }),
    authors: z
      .array(
        z.strictObject({
          slug,
          name: text(120),
          role: text(160).optional(),
          kind: z.enum(['person', 'organization']).default('person'),
          url: z.string().url().startsWith('https://').max(2048).optional(),
          avatar: image.optional(),
        }),
      )
      .min(1)
      .max(8)
      .refine(
        (authors) => new Set(authors.map((author) => author.slug)).size === authors.length,
        'Não repita slugs de autores.',
      ),
    tags: z.array(text(80)).max(30).default([]).transform(normalizeTags),
    featured: z.boolean().default(false),
    featured_order: z.number().int().min(0).max(10000).default(0),
    cover_image: image.optional(),
    cover_alt: text(500).optional(),
    media: z
      .array(
        z.strictObject({
          src: image,
          alt: text(500),
          width: z.number().int().positive().max(20000),
          height: z.number().int().positive().max(20000),
          caption: text(1000).optional(),
        }),
      )
      .max(32)
      .default([])
      .refine(
        (media) => new Set(media.map((item) => item.src)).size === media.length,
        'Não repita URLs de mídia.',
      ),
    seo: z
      .strictObject({
        meta_title: text(200).optional(),
        meta_description: text(600).optional(),
        canonical: z.string().url().startsWith('https://').max(2048).optional(),
        og_image: image.optional(),
        og_image_alt: text(500).optional(),
        noindex: z.boolean().default(false),
      })
      .default({ noindex: false }),
  })
  .refine((post) => !post.cover_image || !!post.cover_alt, {
    path: ['cover_alt'],
    message: 'Informe o texto alternativo da capa.',
  });

export type IngestionPost = z.infer<typeof ingestionSchema>;
export async function validateIngestionMarkdown(post: IngestionPost) {
  const metadata = frontMatterSchema.parse({
    ...post,
    date: post.published_at ?? new Date().toISOString(),
    author: post.authors[0].name,
    category: post.category.slug,
    images: Object.fromEntries(
      post.media.map((item) => [
        item.src,
        {
          width: item.width,
          height: item.height,
          caption: item.caption,
        },
      ]),
    ),
  });
  await compileMarkdown(post.body_markdown, metadata);
}
