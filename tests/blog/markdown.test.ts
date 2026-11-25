import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compileMarkdown, nodeText } from '../../src/lib/blog/compile';
import { frontMatterSchema } from '../../src/lib/blog/schema';
import mock from '../../public/blog/mock-post.json';

const metadata = frontMatterSchema.parse(mock.posts[0].frontMatter);

test('texto inline preserva palavras e espaços editoriais sem inserir separadores', async () => {
  const compiled = await compileMarkdown(
    '## trans**ação** com *Pix*\n\ntrans**ação** e [recebi`mento`](/plataforma).',
    metadata,
  );
  assert.equal(compiled.headings[0].title, 'transação com Pix');
  assert.equal(compiled.headings[0].id, 'section-transacao-com-pix');
  assert.equal(nodeText(compiled.ast.children[1]), 'transação e recebimento.');
  assert.equal(compiled.wordCount, 6);
});

test('H1 inicial formatado igual ao título editorial é deduplicado', async () => {
  const compiled = await compileMarkdown('# trans**ação**\n\nConteúdo.', {
    ...metadata,
    title: 'transação',
  });
  assert.equal(compiled.ast.children.length, 1);
  assert.equal(compiled.ast.children[0].type, 'paragraph');
});

test('blocos, células e quebras explícitas continuam separados na contagem', async () => {
  const compiled = await compileMarkdown(
    'um  \ndois\n\ntrês\n\n- quatro\n- cinco\n\n| seis | sete |\n| --- | --- |\n| oito | nove |',
    metadata,
  );
  assert.equal(compiled.wordCount, 9);
  assert.match(nodeText(compiled.ast.children[0]), /um\s+dois/);
});
