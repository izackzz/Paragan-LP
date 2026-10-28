import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import {
  codeToTokens,
  createCssVariablesTheme,
  bundledLanguages,
  type BundledLanguage,
} from 'shiki';
import type { Nodes, Root } from 'mdast';
import type { BlogPost, FrontMatter } from './types';
import { categorySlug, safeUrl } from './urls';

const theme = createCssVariablesTheme({ name: 'paragan-blog', variablePrefix: '--blog-code-' });
export function nodeText(node: Nodes): string {
  if ('value' in node) return node.value;
  return 'children' in node ? node.children.map(nodeText).join(' ') : '';
}
export async function compileMarkdown(
  body: string,
  metadata: FrontMatter,
  sourceSlugs: Record<string, string> = {},
) {
  const ast = unified().use(remarkParse).use(remarkGfm).parse(body) as Root;
  const headings: BlogPost['headings'] = [];
  const code: BlogPost['code'] = {};
  const images: BlogPost['images'] = {};
  const ids = new Map<string, number>();
  const definitions = new Map<string, { url: string; title?: string | null }>();
  const footnotes = new Set<string>();
  function collect(node: Nodes) {
    if (node.type === 'definition') definitions.set(node.identifier, node);
    if (node.type === 'footnoteDefinition') {
      if (footnotes.has(node.identifier)) throw new Error(`Nota duplicada: ${node.identifier}`);
      footnotes.add(node.identifier);
    }
    if ('children' in node) node.children.forEach(collect);
  }
  collect(ast);
  const first = ast.children[0];
  if (first?.type === 'heading' && first.depth === 1 && nodeText(first) === metadata.title)
    ast.children.shift();
  async function visit(node: Nodes): Promise<void> {
    delete node.position;
    if (node.type === 'html')
      throw new Error('HTML bruto não suportado; use Markdown editorial seguro');
    if (node.type === 'heading') {
      if (node.depth === 1) throw new Error('Use H2 no corpo; o título do artigo já é H1');
      const title = nodeText(node);
      const base = `section-${categorySlug(title) || 'secao'}`;
      const count = ids.get(base) ?? 0;
      ids.set(base, count + 1);
      const id = count ? `${base}-${count + 1}` : base;
      node.data = { id };
      headings.push({ id, title, depth: node.depth });
    }
    if (node.type === 'footnoteReference' && !footnotes.has(node.identifier))
      throw new Error(`Nota inexistente: ${node.identifier}`);
    if (node.type === 'linkReference' || node.type === 'imageReference') {
      const definition = definitions.get(node.identifier);
      if (!definition) throw new Error(`Referência inexistente: ${node.identifier}`);
      // Resolve references once, before serializing the tree.
      const resolved =
        node.type === 'linkReference'
          ? {
              type: 'link' as const,
              url: definition.url,
              title: definition.title,
              children: node.children,
            }
          : { type: 'image' as const, url: definition.url, title: definition.title, alt: node.alt };
      Object.keys(node).forEach((key) => delete (node as unknown as Record<string, unknown>)[key]);
      Object.assign(node, resolved);
    }
    if (node.type === 'link' || node.type === 'image') {
      if (node.type === 'image' && node.url.startsWith('./'))
        node.url = `/images/blog/${metadata.slug}/${node.url.slice(2)}`;
      if (node.type === 'link' && /\.md(?:#|$)/.test(node.url) && !node.url.includes(':')) {
        const [filename, hash] = node.url.replace(/^\.\//, '').split('#');
        const slug = sourceSlugs[filename];
        if (!slug) throw new Error(`Post referenciado inexistente: ${filename}`);
        node.url = `/blog/${slug}${hash ? `#section-${categorySlug(hash)}` : ''}`;
      }
      if (!safeUrl(node.url, node.type === 'image'))
        throw new Error(`URL não permitida: ${node.url}`);
    }
    if (node.type === 'image') {
      if (!node.alt?.trim()) throw new Error(`Imagem sem texto alternativo: ${node.url}`);
      const dimensions = metadata.images[node.url];
      if (!dimensions)
        throw new Error(`Informe largura/altura em images[${node.url}] no Front Matter`);
      images[node.url] = { src: node.url, alt: node.alt, ...dimensions };
    }
    if (node.type === 'code') {
      const id = `code-${Object.keys(code).length + 1}`;
      node.data = { id };
      const language = node.lang || 'text';
      let result;
      const lang = Object.hasOwn(bundledLanguages, language)
        ? (language as BundledLanguage)
        : 'text';
      try {
        result = await codeToTokens(node.value, { lang, theme });
      } catch {
        result = await codeToTokens(node.value, { lang: 'text', theme });
      }
      code[id] = {
        language,
        title:
          node.meta
            ?.match(/(?:^|\s)title=(?:"([^"]+)"|(\S+))/)
            ?.slice(1)
            .find(Boolean) || language,
        lines: result.tokens.map((line) =>
          line.map(({ content, color, fontStyle }) => ({ content, color, fontStyle })),
        ),
      };
    }
    if ('children' in node) for (const child of node.children) await visit(child);
  }
  await visit(ast);
  function resolveAnchors(node: Nodes) {
    if (node.type === 'link' && node.url.startsWith('#')) {
      const hash = decodeURIComponent(node.url.slice(1));
      const heading = headings.find((item) => item.id === hash || item.id === `section-${hash}`);
      if (!heading) throw new Error(`Âncora inexistente: ${node.url}`);
      node.url = `#${heading.id}`;
    }
    if ('children' in node) node.children.forEach(resolveAnchors);
  }
  resolveAnchors(ast);
  const wordCount = nodeText(ast).trim().split(/\s+/u).filter(Boolean).length;
  return {
    ast,
    headings,
    code,
    images,
    wordCount,
    readingMinutes: Math.max(1, Math.ceil(wordCount / 220)),
  };
}
