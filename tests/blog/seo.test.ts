import { test } from 'node:test';
import assert from 'node:assert/strict';
import { articleMetadata, listingMetadata } from '../../src/lib/blog/metadata';
import { articleStructuredData } from '../../src/lib/blog/structured-data';
import { getListing } from '../../src/lib/blog/listing';
import { escapeXml, renderFeed } from '../../src/lib/blog/feed';
import type { BlogPost } from '../../src/lib/blog/types';
import generated from '../../src/content/blog.generated.json';
const post = generated.posts[0] as unknown as BlogPost;
test('mock usa canonical real, article metadata e noindex também para Google', () => {
  const metadata = articleMetadata(post);
  assert.equal(metadata.alternates?.canonical, 'https://paragan.com.br/blog/lorem-ipsum');
  assert.equal((metadata.openGraph as { type: string }).type, 'article');
  assert.equal((metadata.robots as { index: boolean }).index, false);
  assert.equal(
    listingMetadata(2, undefined, undefined, false).alternates?.canonical,
    'https://paragan.com.br/blog/page/2',
  );
  assert.equal(articleStructuredData(post).wordCount, post.wordCount);
});
test('paginação de 0/1/3/13+ posts e destaques não duplica nem perde conteúdo', () => {
  for (const count of [0, 1, 3, 13, 28]) {
    const posts = Array.from({ length: count }, (_, index) => ({
      ...post,
      slug: `post-${index}`,
      frontMatter: { ...post.frontMatter, featured: index < 3 },
    }));
    const first = getListing(posts);
    const all = first.featured.concat(
      ...Array.from({ length: first.pages }, (_, index) => getListing(posts, index + 1).posts),
    );
    assert.equal(all.length, count);
    assert.equal(new Set(all.map((post) => post.slug)).size, count);
    assert.equal(getListing(posts, first.pages + 1).valid, false);
    assert.equal(getListing(posts, 0).valid, false);
  }
  assert.equal(getListing([post], 1, 'ausente').valid, false);
  assert.equal(getListing([post], 1, 'demonstracao').featured.length, 0);
});
test('feed XML escapado e válido mesmo sem publicações indexáveis', () => {
  assert.equal(escapeXml('<>&"\''), '&lt;&gt;&amp;&quot;&apos;');
  assert.ok(!renderFeed([]).includes('<item>'));
  assert.ok(
    renderFeed([
      { ...post, frontMatter: { ...post.frontMatter, title: '<Demonstração>' } },
    ]).includes('&lt;Demonstração&gt;'),
  );
});
