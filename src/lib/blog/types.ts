import type { Root } from 'mdast';
import type { z } from 'zod';
import type { frontMatterSchema } from './schema';

declare module 'mdast' {
  interface Data {
    id?: string;
  }
}

export type FrontMatter = z.infer<typeof frontMatterSchema>;
export type Author = {
  name: string;
  id?: string;
  url?: string;
  avatar?: string;
  role?: string;
  kind?: 'person' | 'organization';
};
export type Category = { slug: string; name: string; description: string };
export type CodeToken = { content: string; color?: string; fontStyle?: number };
export type CompiledCode = { language: string; title: string; lines: CodeToken[][] };
export type BlogPost = {
  slug: string;
  frontMatter: FrontMatter;
  sourceMarkdown: string;
  bodyMarkdown: string;
  authors: Author[];
  category: Category;
  ast: Root;
  headings: { id: string; title: string; depth: number }[];
  code: Record<string, CompiledCode>;
  images: Record<
    string,
    { src: string; alt: string; width: number; height: number; caption?: string }
  >;
  wordCount: number;
  readingMinutes: number;
};
export type BlogData = { schemaVersion: number; sourceHash: string; posts: BlogPost[] };
export type SearchPost = Pick<BlogPost, 'slug' | 'category' | 'authors'> & {
  title: string;
  excerpt: string;
  tags: string[];
};
