import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mapBlogRow, blogArticleRowSchema } from '../../src/lib/blog/supabase-mapper';
import { compileMarkdown } from '../../src/lib/blog/compile';

const row = {
  slug: 'integracao-editorial',
  title: 'Integração editorial',
  excerpt: 'Conteúdo usado somente no teste automatizado.',
  published_at: '2026-11-01T10:00:00+00:00',
  updated_at: '2026-11-02T10:00:00+00:00',
  lang: 'pt-BR',
  tags: ['pagamentos'],
  featured: true,
  featured_order: 0,
  cover_image: null,
  cover_alt: null,
  seo: { noindex: true },
  is_demo: false,
  category: { slug: 'tecnologia', name: 'Tecnologia', description: '' },
  authors: [
    {
      position: 0,
      author: {
        id: 'd6933772-3d89-448d-b23e-fb139d11604e',
        name: 'Equipe de teste',
        role: null,
        kind: 'organization',
        url: null,
        avatar_url: null,
      },
    },
  ],
  media: [
    {
      src: '/images/blog/teste.png',
      alt: 'Diagrama de teste',
      width: 1200,
      height: 675,
      caption: null,
      position: 0,
    },
  ],
};

test('normaliza relações, valores nulos e SEO sem enviar Markdown ao feed', () => {
  const post = mapBlogRow({ ...row, body_markdown: 'Não faz parte do resumo.' });
  assert.equal(post.frontMatter.author, 'Equipe de teste');
  assert.equal(post.authors[0].avatar, undefined);
  assert.equal(post.frontMatter.seo.noindex, true);
  assert.equal(post.images['/images/blog/teste.png'].width, 1200);
  assert.equal('body_markdown' in post, false);
  assert.equal('bodyMarkdown' in post, false);
});

test('autoria ordenada e publicação agendada com edição anterior à data', () => {
  const post = mapBlogRow({
    ...row,
    updated_at: '2026-10-31T10:00:00+00:00',
    authors: [
      { ...row.authors[0], position: 1, author: { ...row.authors[0].author, name: 'Segundo' } },
      { ...row.authors[0], position: 0, author: { ...row.authors[0].author, name: 'Primeiro' } },
    ],
  });
  assert.equal(post.authors[0].name, 'Primeiro');
  assert.equal(post.frontMatter.updated_at, undefined);
});

test('rejeita publicação sem autor, SEO inseguro e relações inválidas', () => {
  assert.throws(() => mapBlogRow({ ...row, authors: [] }));
  assert.throws(() => mapBlogRow({ ...row, category: null }));
  assert.throws(() => mapBlogRow({ ...row, seo: { canonical: 'javascript:alert(1)' } }));
  assert.throws(() =>
    mapBlogRow({
      ...row,
      authors: [
        {
          ...row.authors[0],
          author: { ...row.authors[0].author, url: 'javascript:alert(1)' },
        },
      ],
    }),
  );
});

test('Markdown remoto usa a mesma compilação segura, imagens e índices', async () => {
  const article = blogArticleRowSchema.parse({
    ...row,
    body_markdown: '## Integração\n\n![Diagrama](/images/blog/teste.png)',
  });
  const post = mapBlogRow(article);
  const compiled = await compileMarkdown(article.body_markdown, post.frontMatter);
  assert.equal(compiled.headings[0].id, 'section-integracao');
  assert.equal(compiled.images['/images/blog/teste.png'].height, 675);
  await assert.rejects(compileMarkdown('<script>alert(1)</script>', post.frontMatter), /HTML/);
});
