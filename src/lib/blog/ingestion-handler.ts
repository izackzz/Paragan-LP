import { createHash, timingSafeEqual } from 'node:crypto';
import { ingestionSchema, validateIngestionMarkdown, type IngestionPost } from './ingestion-schema';
import { absoluteUrl, postUrl } from './urls';

const maxBytes = 1_000_000;
export class IngestionError extends Error {
  constructor(
    public status: number,
    public code: string,
    message: string,
  ) {
    super(message);
  }
}
export type IngestionResult = {
  post: { id: string; slug: string; status: 'draft' | 'published'; published_at: string | null };
  replayed: boolean;
};
type Dependencies = {
  apiKey: () => string | undefined;
  write: (post: IngestionPost, idempotencyKey: string) => Promise<IngestionResult>;
  refresh: (slug: string) => void | Promise<void>;
};

function reply(status: number, body: unknown, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: {
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      'X-Robots-Tag': 'noindex',
      ...headers,
    },
  });
}
export function authenticates(header: string | null, expected: string) {
  const supplied = header?.match(/^Bearer ([A-Za-z0-9_-]{32,256})$/i)?.[1];
  if (!supplied) return false;
  const hash = (value: string) => createHash('sha256').update(value).digest();
  return timingSafeEqual(hash(supplied), hash(expected));
}
async function readBody(request: Request): Promise<unknown> {
  const length = request.headers.get('content-length');
  if (length && (!/^\d+$/.test(length) || Number(length) > maxBytes)) {
    throw new IngestionError(413, 'BODY_TOO_LARGE', 'O JSON deve ter no máximo 1 MB.');
  }
  if (!request.body) throw new IngestionError(400, 'INVALID_JSON', 'Envie um objeto JSON.');
  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) {
        await reader.cancel();
        throw new IngestionError(413, 'BODY_TOO_LARGE', 'O JSON deve ter no máximo 1 MB.');
      }
      chunks.push(value);
    }
    const bytes = Buffer.concat(chunks);
    return JSON.parse(new TextDecoder('utf-8', { fatal: true }).decode(bytes));
  } catch (error) {
    if (error instanceof IngestionError) throw error;
    throw new IngestionError(400, 'INVALID_JSON', 'O corpo deve ser JSON UTF-8 válido.');
  } finally {
    reader.releaseLock();
  }
}

export function createBlogIngestionHandler(deps: Dependencies) {
  return async function POST(request: Request) {
    const key = deps.apiKey();
    if (!key || key.length < 32)
      return reply(503, { error: { code: 'NOT_CONFIGURED', message: 'Publicação indisponível.' } });
    if (!authenticates(request.headers.get('authorization'), key)) {
      return reply(
        401,
        { error: { code: 'UNAUTHORIZED', message: 'Chave de API inválida.' } },
        { 'WWW-Authenticate': 'Bearer realm="blog-ingestion"' },
      );
    }
    if (
      request.headers.get('content-type')?.split(';')[0].trim().toLowerCase() !==
        'application/json' ||
      !['identity', null].includes(request.headers.get('content-encoding'))
    ) {
      return reply(415, {
        error: { code: 'UNSUPPORTED_MEDIA_TYPE', message: 'Use application/json sem compressão.' },
      });
    }
    const idempotencyKey = request.headers.get('idempotency-key');
    if (!idempotencyKey || !/^[A-Za-z0-9][A-Za-z0-9._:-]{7,127}$/.test(idempotencyKey)) {
      return reply(400, {
        error: {
          code: 'IDEMPOTENCY_KEY_REQUIRED',
          message: 'Envie Idempotency-Key com 8 a 128 caracteres.',
        },
      });
    }
    try {
      const parsed = ingestionSchema.safeParse(await readBody(request));
      if (!parsed.success) {
        return reply(422, {
          error: {
            code: 'INVALID_POST',
            message: 'Revise os campos da publicação.',
            fields: parsed.error.issues.map((issue) => ({
              path: issue.path.join('.'),
              message: issue.message,
            })),
          },
        });
      }
      try {
        await validateIngestionMarkdown(parsed.data);
      } catch (error) {
        return reply(422, {
          error: {
            code: 'INVALID_MARKDOWN',
            message: error instanceof Error ? error.message.slice(0, 300) : 'Markdown inválido.',
          },
        });
      }
      const result = await deps.write(parsed.data, idempotencyKey);
      try {
        // Also run on replay: a retry repairs a previous failure after DB commit.
        await deps.refresh(result.post.slug);
      } catch {
        return reply(503, {
          error: {
            code: 'REFRESH_PENDING',
            message:
              'Artigo salvo. Repita a mesma requisição com a mesma Idempotency-Key para atualizar o cache.',
          },
        });
      }
      return reply(
        result.replayed ? 200 : 201,
        {
          data: { ...result.post, url: absoluteUrl(postUrl(result.post.slug)) },
          replayed: result.replayed,
        },
        { 'Idempotency-Key': idempotencyKey },
      );
    } catch (error) {
      if (error instanceof IngestionError) {
        return reply(
          error.status,
          { error: { code: error.code, message: error.message } },
          error.status === 429 ? { 'Retry-After': '60' } : undefined,
        );
      }
      return reply(503, {
        error: {
          code: 'INGESTION_UNAVAILABLE',
          message: 'Não foi possível confirmar a publicação. Repita com a mesma Idempotency-Key.',
        },
      });
    }
  };
}
