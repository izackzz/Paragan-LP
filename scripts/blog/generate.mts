import { createHash } from 'node:crypto';
import { readFile, readdir, mkdir, writeFile, rename } from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';
import { parse, stringify } from 'yaml';
import { z } from 'zod';
import { frontMatterSchema, authorSchema, categorySchema } from '../../src/lib/blog/schema';
import { compileMarkdown } from '../../src/lib/blog/compile';
import type { BlogData, BlogPost } from '../../src/lib/blog/types';
import { isPublished, normalizeTags } from '../../src/lib/blog/normalize';

const root = process.cwd();
const read = (file: string) => readFile(path.join(root, file), 'utf8');
const authors = z.array(authorSchema).parse(JSON.parse(await read('content/blog/authors.json')));
const categories = z
  .array(categorySchema)
  .parse(JSON.parse(await read('content/blog/categories.json')));
const files = (await readdir(path.join(root, 'content/blog/posts')))
  .filter((file) => file.endsWith('.md'))
  .sort();
const sources: { file: string; raw: unknown; body: string; source: string }[] = [];
for (const file of files) {
  const source = await read(`content/blog/posts/${file}`);
  if (Buffer.byteLength(source) > 1_000_000) throw new Error(`${file}: fonte excede 1MB`);
  const parsed = matter(source, {
    engines: { yaml: (text: string) => parse(text, { maxAliasCount: 0 }) },
  });
  sources.push({ file, raw: parsed.data, body: parsed.content, source });
}
// Explicit public demonstration, not an unpublished post or an editorial fallback.
const mock = JSON.parse(await read('public/blog/mock-post.json')) as {
  posts: { frontMatter: unknown; bodyMarkdown: string }[];
};
if (files.length === 0)
  for (const post of mock.posts) {
    sources.push({
      file: 'public/blog/mock-post.json',
      raw: post.frontMatter,
      body: post.bodyMarkdown,
      source: `---\n${stringify(post.frontMatter)}---\n\n${post.bodyMarkdown}`,
    });
  }
const now = Date.now();
const sourceSlugs = Object.fromEntries(
  sources.map((item) => [item.file, frontMatterSchema.parse(item.raw).slug]),
);
const posts: BlogPost[] = [];
const seen = new Set<string>();
for (const item of sources) {
  try {
    const frontMatter = frontMatterSchema.parse(item.raw);
    if (seen.has(frontMatter.slug)) throw new Error(`Slug duplicado: ${frontMatter.slug}`);
    seen.add(frontMatter.slug);
    if (!isPublished(frontMatter, now)) continue;
    frontMatter.tags = normalizeTags(frontMatter.tags);
    const category = categories.find(
      (value) => value.slug === frontMatter.category || value.name === frontMatter.category,
    );
    if (!category) throw new Error(`Categoria não cadastrada: ${frontMatter.category}`);
    const resolvedAuthors = (frontMatter.authors ?? [frontMatter.author]).map((author) =>
      typeof author === 'string'
        ? (authors.find((value) => value.id === author || value.name === author) ?? {
            name: author,
          })
        : author,
    );
    const compiled = await compileMarkdown(item.body, frontMatter, sourceSlugs);
    for (const image of Object.values(compiled.images)) {
      if (!image.src.startsWith('/'))
        throw new Error(
          'Imagens externas exigem configuração de allowlist; use mídia local nesta entrega',
        );
      const file = path.resolve(root, 'public', `.${image.src}`);
      if (!file.startsWith(path.join(root, 'public') + path.sep))
        throw new Error('Caminho de imagem inválido');
      await readFile(file);
    }
    posts.push({
      slug: frontMatter.slug,
      frontMatter,
      authors: resolvedAuthors,
      category,
      bodyMarkdown: item.body,
      sourceMarkdown: item.source,
      ...compiled,
    });
  } catch (error) {
    throw new Error(`${item.file}: ${error instanceof Error ? error.message : error}`);
  }
}
posts.sort(
  (a, b) =>
    Date.parse(b.frontMatter.date) - Date.parse(a.frontMatter.date) || a.slug.localeCompare(b.slug),
);
function validateLinks(node: import('mdast').Nodes) {
  if (node.type === 'link' && /^\/blog\/[^/]+(?:#|$)/.test(node.url)) {
    const [pathname, hash] = node.url.split('#');
    const target = posts.find((post) => `/blog/${post.slug}` === pathname);
    if (!target || (hash && !target.headings.some((heading) => heading.id === hash)))
      throw new Error(`Link interno inválido: ${node.url}`);
  }
  if ('children' in node) node.children.forEach(validateLinks);
}
posts.forEach((post) => validateLinks(post.ast));
const data: BlogData = {
  schemaVersion: 1,
  sourceHash: createHash('sha256')
    .update(JSON.stringify({ sources, authors, categories }))
    .digest('hex'),
  posts,
};
const search = posts.map(({ slug, frontMatter, authors, category }) => ({
  slug,
  title: frontMatter.title,
  excerpt: frontMatter.excerpt,
  tags: frontMatter.tags,
  authors,
  category,
}));
for (const [file, value] of [
  ['src/content/blog.generated.json', data],
  ['src/content/blog-search.generated.json', search],
] as const) {
  const output = `${JSON.stringify(value, null, 2)}\n`;
  if (process.argv.includes('--check')) {
    if ((await read(file).catch(() => '')) !== output)
      throw new Error(`${file} desatualizado: execute pnpm blog:generate`);
  } else {
    await mkdir(path.dirname(path.join(root, file)), { recursive: true });
    await writeFile(path.join(root, `${file}.tmp`), output);
    await rename(path.join(root, `${file}.tmp`), path.join(root, file));
  }
}
console.log(
  `Blog: ${posts.length} post(s) validado(s)${process.argv.includes('--check') ? '; JSON atualizado' : '; JSON gerado'}.`,
);
