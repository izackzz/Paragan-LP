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

test('tempo de leitura usa 220 palavras por minuto com mínimo de um minuto', async () => {
  for (const [words, minutes] of [
    [1, 1],
    [220, 1],
    [221, 2],
  ]) {
    const compiled = await compileMarkdown(Array(words).fill('palavra').join(' '), metadata);
    assert.equal(compiled.wordCount, words);
    assert.equal(compiled.readingMinutes, minutes);
  }
});

test('links e imagens relativos usam URLs públicas e âncoras existentes', async () => {
  const image = `/images/blog/${metadata.slug}/foto.png`;
  const compiled = await compileMarkdown(
    '## Configuração segura\n\n[Seção](#configuracao-segura)\n\n![Foto](./foto.png)',
    { ...metadata, images: { [image]: { width: 640, height: 480 } } },
  );
  assert.match(JSON.stringify(compiled.ast), /"url":"#section-configuracao-segura"/);
  assert.deepEqual(compiled.images[image], {
    src: image,
    alt: 'Foto',
    width: 640,
    height: 480,
  });
  await assert.rejects(compileMarkdown('[Seção](#ausente)', metadata), /Âncora inexistente/);
});
