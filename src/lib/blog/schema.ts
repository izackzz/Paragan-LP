import { z } from 'zod';
import { safeUrl } from './urls';

const slug = z
  .string()
  .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  .refine(
    (value) => !['category', 'page', 'search', 'feed', 'feed-xml'].includes(value),
    'Slug reservado',
  );
const date = z.iso.datetime({ offset: true });
const imagePath = z
  .string()
  .refine((value) => safeUrl(value, true), 'Imagem deve usar caminho local ou HTTPS');
export const authorSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(1),
  url: z.string().url().startsWith('https://').optional(),
  avatar: imagePath.optional(),
  role: z.string().optional(),
  kind: z.enum(['person', 'organization']).default('person'),
});
export const categorySchema = z.object({ slug, name: z.string().min(1), description: z.string() });
export const frontMatterSchema = z
  .object({
    title: z.string().min(1),
    slug,
    date,
    updated_at: date.optional(),
    author: z.string().min(1),
    authors: z.array(z.union([z.string().min(1), authorSchema])).optional(),
    layout: z.literal('post').default('post'),
    draft: z.boolean().default(false),
    mock: z.boolean().default(false),
    excerpt: z.string().min(1),
    category: z.string().default('Geral'),
    tags: z.array(z.string().min(1)).default([]),
    lang: z.literal('pt-BR').default('pt-BR'),
    featured: z.boolean().default(false),
    featured_order: z.number().int().nonnegative().default(0),
    cover_image: imagePath.optional(),
    cover_alt: z.string().optional(),
    images: z
      .record(
        z.string(),
        z.object({
          width: z.number().int().positive(),
          height: z.number().int().positive(),
          caption: z.string().optional(),
        }),
      )
      .default({}),
    seo: z
      .object({
        meta_title: z.string().min(1).optional(),
        meta_description: z.string().min(1).optional(),
        canonical: z.string().url().startsWith('https://').optional(),
        og_image: imagePath.optional(),
        og_image_alt: z.string().optional(),
        noindex: z.boolean().default(false),
      })
      .default({ noindex: false }),
  })
  .refine((value) => !value.updated_at || Date.parse(value.updated_at) >= Date.parse(value.date), {
    path: ['updated_at'],
    message: 'Atualização anterior à publicação',
  });
