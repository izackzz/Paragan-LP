import 'server-only';
import { z } from 'zod';
import type { IngestionPost } from './ingestion-schema';
import { IngestionError } from './ingestion-handler';

const resultSchema = z.object({
  post: z.object({
    id: z.string().uuid(),
    slug: z.string(),
    status: z.enum(['draft', 'published']),
    published_at: z.string().nullable(),
  }),
  replayed: z.boolean(),
});
export async function ingestPost(post: IngestionPost, idempotencyKey: string) {
  const endpoint = process.env.SUPABASE_URL;
  const publishableKey = process.env.SUPABASE_PUBLISHABLE_KEY;
  const ingestionKey = process.env.BLOG_INGESTION_KEY;
  if (!endpoint || !publishableKey?.startsWith('sb_publishable_') || !ingestionKey) {
    throw new IngestionError(503, 'NOT_CONFIGURED', 'Publicação indisponível.');
  }
  const url = new URL('/rest/v1/rpc/blog_ingest_post', endpoint);
  if (url.protocol !== 'https:') throw new Error('HTTPS obrigatório.');
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      apikey: publishableKey,
      'X-Blog-Ingestion-Key': ingestionKey,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ p_payload: post, p_idempotency_key: idempotencyKey }),
    cache: 'no-store',
    signal: AbortSignal.timeout(15_000),
  });
  if (!response.ok) {
    // Never forward upstream errors or log keys/payloads.
    if (response.status === 409)
      throw new IngestionError(
        409,
        'CONFLICT',
        'Slug já cadastrado ou Idempotency-Key reutilizada com conteúdo diferente.',
      );
    if (response.status === 429)
      throw new IngestionError(429, 'RATE_LIMITED', 'Limite de 60 criações por minuto atingido.');
    throw new IngestionError(
      503,
      'INGESTION_UNAVAILABLE',
      'Publicação indisponível. Repita com a mesma Idempotency-Key.',
    );
  }
  return resultSchema.parse(await response.json());
}
