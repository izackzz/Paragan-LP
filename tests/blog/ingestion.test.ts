import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  authenticates,
  createBlogIngestionHandler,
  IngestionError,
  type IngestionResult,
} from '../../src/lib/blog/ingestion-handler';

const key = 'test_webhook_12345678901234567890123456789012';
const post = {
  slug: 'webhook-verification',
  title: 'Artigo de teste',
  excerpt: 'Fixture somente para teste.',
  body_markdown: '## Introdução\n\nConteúdo editorial de teste.',
  category: { slug: 'tecnologia', name: 'Tecnologia' },
  authors: [{ slug: 'equipe-paragan', name: 'Equipe Paragan', kind: 'organization' }],
};
const result: IngestionResult = {
  post: {
    id: 'd6933772-3d89-448d-b23e-fb139d11604e',
    slug: post.slug,
    status: 'draft',
    published_at: null,
  },
  replayed: false,
};
function request(body: unknown = post, headers: Record<string, string> = {}) {
  return new Request('https://landing.example/api/blog/posts', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      'Idempotency-Key': 'test:publication:0001',
      ...headers,
    },
    body: typeof body === 'string' ? body : JSON.stringify(body),
  });
}
function fixture(overrides: Partial<Parameters<typeof createBlogIngestionHandler>[0]> = {}) {
  let writes = 0;
  let refreshes = 0;
  const handler = createBlogIngestionHandler({
    apiKey: () => key,
    write: async (payload, idempotency) => {
      writes++;
      assert.equal(payload.status, 'draft');
      assert.equal(payload.authors[0].kind, 'organization');
      assert.equal(idempotency, 'test:publication:0001');
      return result;
    },
    refresh: (slug) => {
      refreshes++;
      assert.equal(slug, post.slug);
    },
    ...overrides,
  });
  return { handler, writes: () => writes, refreshes: () => refreshes };
}
test('autenticação rejeita chave ausente/incorreta sem ler o payload', async () => {
  for (const authorization of ['', `Bearer ${'x'.repeat(key.length)}`, key]) {
    const f = fixture();
    const response = await f.handler(request('invalid JSON', { Authorization: authorization }));
    assert.equal(response.status, 401);
    assert.equal(f.writes(), 0);
    assert.ok(!JSON.stringify(await response.json()).includes(key));
  }
  assert.equal(authenticates(`bearer ${key}`, key), true);
});
test('sem configuração falha fechado, sem acessar o banco', async () => {
  const f = fixture({ apiKey: () => undefined });
  assert.equal((await f.handler(request())).status, 503);
  assert.equal(f.writes(), 0);
});
test('exige JSON e Idempotency-Key estável', async () => {
  const f = fixture();
  assert.equal((await f.handler(request(post, { 'Content-Type': 'text/plain' }))).status, 415);
  assert.equal((await f.handler(request(post, { 'Content-Encoding': 'gzip' }))).status, 415);
  assert.equal((await f.handler(request(post, { 'Idempotency-Key': '' }))).status, 400);
  assert.equal((await f.handler(request('{invalid'))).status, 400);
  assert.equal(f.writes(), 0);
});
test('limita bytes inclusive sem Content-Length e com tamanho declarado falso', async () => {
  const f = fixture();
  assert.equal((await f.handler(request(post, { 'Content-Length': '1000001' }))).status, 413);
  const oversized = 'x'.repeat(1_000_001);
  assert.equal((await f.handler(request(oversized))).status, 413);
  assert.equal((await f.handler(request(oversized, { 'Content-Length': '1' }))).status, 413);
  assert.equal(f.writes(), 0);
});
test('rejeita campos extras, autores duplicados e capa sem alt', async () => {
  for (const payload of [
    { ...post, service_role: 'forbidden' },
    { ...post, authors: [post.authors[0], post.authors[0]] },
    { ...post, cover_image: '/capa.png' },
    { ...post, cover_image: 'https://untrusted.example/capa.png', cover_alt: 'Capa' },
  ]) {
    const f = fixture();
    assert.equal((await f.handler(request(payload))).status, 422);
    assert.equal(f.writes(), 0);
  }
});
test('rejeita HTML e Markdown inválido antes de persistir', async () => {
  for (const body_markdown of [
    '<script>alert(1)</script>',
    '![Imagem](/nao-cadastrada.png)',
    '[x](javascript:alert%281%29)',
  ]) {
    const f = fixture();
    const response = await f.handler(request({ ...post, body_markdown }));
    assert.equal(response.status, 422);
    assert.equal(f.writes(), 0);
  }
});
test('cria rascunho por padrão e invalida cache após a confirmação', async () => {
  const f = fixture();
  const response = await f.handler(request());
  assert.equal(response.status, 201);
  assert.equal(response.headers.get('cache-control'), 'no-store');
  assert.equal(response.headers.get('idempotency-key'), 'test:publication:0001');
  const body = await response.json();
  assert.equal(body.data.status, 'draft');
  assert.ok(body.data.url.endsWith(`/blog/${post.slug}`));
  assert.equal(body.replayed, false);
  assert.equal(f.writes(), 1);
  assert.equal(f.refreshes(), 1);
});
test('retry retorna 200 e repara invalidação sem criar uma nova publicação', async () => {
  const f = fixture({ write: async () => ({ ...result, replayed: true }) });
  const response = await f.handler(request());
  assert.equal(response.status, 200);
  assert.equal((await response.json()).replayed, true);
  assert.equal(f.refreshes(), 1);
});
test('conflitos e rate limit são explícitos, sem invalidar cache', async () => {
  for (const status of [409, 429]) {
    const f = fixture({
      write: async () => {
        throw new IngestionError(status, 'TEST_ERROR', 'Erro controlado');
      },
    });
    const response = await f.handler(request());
    assert.equal(response.status, status);
    assert.equal(f.refreshes(), 0);
    if (status === 429) assert.equal(response.headers.get('retry-after'), '60');
  }
});
test('falha depois do commit pede retry; erros internos não vazam', async () => {
  const f = fixture({
    refresh: () => {
      throw new Error('private secret');
    },
  });
  const response = await f.handler(request());
  assert.equal(response.status, 503);
  assert.equal((await response.json()).error.code, 'REFRESH_PENDING');
  const unavailable = fixture({
    write: async () => {
      throw new Error('database password');
    },
  });
  const failure = await unavailable.handler(request());
  assert.equal(failure.status, 503);
  assert.ok(!(await failure.text()).includes('password'));
});
