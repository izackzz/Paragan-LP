import { test } from 'node:test';
import assert from 'node:assert/strict';
import { frontMatterSchema } from '../../src/lib/blog/schema';
import { normalizeTags, isPublished } from '../../src/lib/blog/normalize';
import { compileMarkdown } from '../../src/lib/blog/compile';
import mock from '../../public/blog/mock-post.json';

const raw = mock.posts[0].frontMatter;
const metadata = frontMatterSchema.parse(raw);
test('Front Matter do pedido é aceito sem alteração de contrato', () => {
  const value = frontMatterSchema.parse({
    title: 'O Guia Definitivo do Formato Perfeito para Blog',
    slug: 'guia-formato-perfeito-blog',
    date: '2026-10-28T10:15:00-03:00',
    author: 'Nome do Autor',
    layout: 'post',
    draft: false,
    excerpt: 'Descubra a combinação de Markdown com Front Matter.',
    cover_image: '/images/posts/guia-formato.jpg',
    tags: ['markdown', 'Blogging', 'cms'],
    seo: {
      meta_title: 'Guia de Formato para Blog',
      meta_description: 'Aprenda a estruturar os seus posts.',
    },
  });
  assert.equal(value.date, '2026-10-28T10:15:00-03:00');
  assert.equal(value.cover_image, '/images/posts/guia-formato.jpg');
});
test('schema rejeita campos inválidos e datas impossíveis', () => {
  for (const patch of [
    { slug: '../segredo' },
    { slug: 'category' },
    { draft: 'false' },
    { date: '2026-02-30T10:15:00-03:00' },
    { date: '2026-10-28' },
    { updated_at: '2025-01-01T00:00:00Z' },
  ]) {
    assert.equal(
      frontMatterSchema.safeParse({ ...raw, ...patch }).success,
      false,
      JSON.stringify(patch),
    );
  }
});
test('rascunhos e futuros não ficam públicos; instante da geração é explícito', () => {
  const now = Date.parse(metadata.date);
  assert.ok(isPublished(metadata, now));
  assert.equal(isPublished({ ...metadata, draft: true }, now), false);
  assert.equal(isPublished(metadata, now - 1), false);
  assert.deepEqual(normalizeTags([' Markdown ', 'markdown', 'Segurança', 'seguranca']), [
    'Markdown',
    'Segurança',
  ]);
});
test('mock completo compila em árvore serializável com imagem alinhada e código literal', async () => {
  const compiled = await compileMarkdown(mock.posts[0].bodyMarkdown, metadata);
  assert.ok(compiled.headings.length >= 5);
  assert.equal(compiled.images['/images/blog/illustration-placeholder.svg'].width, 1200);
  assert.ok(compiled.ast.children.some((node) => node.type === 'table'));
  assert.ok(compiled.ast.children.some((node) => node.type === 'footnoteDefinition'));
  assert.equal(compiled.code['code-1'].title, 'demonstracao.json');
  assert.equal(compiled.ast.children[0].type, 'paragraph');
  assert.ok(compiled.wordCount > 100);
  assert.doesNotThrow(() => JSON.parse(JSON.stringify(compiled)));
});
test('IDs estáveis, duplicatas e links de referência', async () => {
  const compiled = await compileMarkdown(
    '## Olá mundo\n\n## Olá mundo\n\n[Início](#ola-mundo)\n\n[Plataforma][p]\n\n[p]: /plataforma',
    metadata,
  );
  assert.deepEqual(
    compiled.headings.map((item) => item.id),
    ['section-ola-mundo', 'section-ola-mundo-2'],
  );
  assert.match(JSON.stringify(compiled.ast), /#section-ola-mundo/);
  assert.match(JSON.stringify(compiled.ast), /"url":"\/plataforma"/);
});
test('Markdown entre posts usa slug explícito e valida referência inexistente', async () => {
  const compiled = await compileMarkdown('[Post](./arquivo.md#secao)', metadata, {
    'arquivo.md': 'slug-editorial',
  });
  assert.match(JSON.stringify(compiled.ast), /\/blog\/slug-editorial#section-secao/);
  await assert.rejects(compileMarkdown('[Post](./ausente.md)', metadata), /inexistente/);
});
test('linguagem desconhecida preserva conteúdo e linhas vazias', async () => {
  const literal = '<script>\n\n\tconst x = "<>&";';
  const compiled = await compileMarkdown(`\`\`\`unknown\n${literal}\n\`\`\``, metadata);
  const restored = compiled.code['code-1'].lines
    .map((line) => line.map((token) => token.content).join(''))
    .join('\n');
  assert.equal(restored, literal);
});
