import { test } from 'node:test';
import assert from 'node:assert/strict';
import { compileMarkdown } from '../../src/lib/blog/compile';
import { frontMatterSchema } from '../../src/lib/blog/schema';
import { safeUrl } from '../../src/lib/blog/urls';
import { serializeJsonLd } from '../../src/lib/blog/structured-data';
import mock from '../../public/blog/mock-post.json';
const metadata = frontMatterSchema.parse(mock.posts[0].frontMatter);
test('protocolos, controles e autoridades relativas são bloqueados', () => {
  for (const url of [
    'javascript:alert(1)',
    'java\nscript:alert(1)',
    '//evil.test/x',
    'data:text/html,x',
    'vbscript:evil',
    '/\\evil.test',
  ])
    assert.equal(safeUrl(url), false, url);
  assert.ok(safeUrl('/plataforma'));
  assert.ok(safeUrl('https://example.com/x'));
});
test('HTML ativo e imagens sem dimensões falham antes da publicação', async () => {
  await assert.rejects(compileMarkdown('<script>alert(1)</script>', metadata), /HTML/);
  await assert.rejects(compileMarkdown('[x](javascript:alert%281%29)', metadata), /URL/);
  await assert.rejects(compileMarkdown('![Imagem](/missing.png)', metadata), /largura/);
  await assert.rejects(compileMarkdown('![](/missing.png)', metadata), /alternativo/);
  await assert.rejects(compileMarkdown('# Outro título', metadata), /H2/);
});
test('JSON-LD não permite fechar o script', () => {
  const serialized = serializeJsonLd({ title: '</script><script>alert(1)</script>' });
  assert.equal(serialized.includes('</script>'), false);
  assert.equal(JSON.parse(serialized).title, '</script><script>alert(1)</script>');
});
