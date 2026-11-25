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
const editorialText = z.string().refine((value) => value.trim().length > 0, {
  message: 'Informe texto editorial, não apenas espaços',
});
const imagePath = z
  .string()
  .refine((value) => safeUrl(value, true), 'Imagem deve usar caminho local ou HTTPS');
export const authorSchema = z.object({
  id: z.string().optional(),
  name: editorialText,
  url: z.string().url().startsWith('https://').optional(),
  avatar: imagePath.optional(),
  role: z.string().optional(),
  kind: z.enum(['person', 'organization']).default('person'),
});
export const categorySchema = z.object({ slug, name: z.string().min(1), description: z.string() });
export const frontMatterSchema = z
  .object({
    title: editorialText,
    slug,
    date,
    updated_at: date.optional(),
    author: editorialText,
    authors: z
      .array(z.union([editorialText, authorSchema]))
      .min(1)
      .optional(),
    layout: z.literal('post').default('post'),
    draft: z.boolean().default(false),
    mock: z.boolean().default(false),
    excerpt: editorialText,
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
        meta_title: editorialText.optional(),
        meta_description: editorialText.optional(),
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
