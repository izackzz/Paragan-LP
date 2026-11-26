# Publicação por webhook / n8n

`POST https://paragan.com.br/api/blog/posts`

A rota cria artigos, categorias, autoria e vínculos em **uma transação**.
Não altera nem sobrescreve artigos existentes. Não envia emails e não aceita
upload binário. Imagens precisam estar no bucket público `blog-assets` ou em
arquivos locais conhecidos da landing.

## Credenciais

- `BLOG_WEBHOOK_API_KEY`: chave entregue ao n8n.
- `BLOG_INGESTION_KEY`: credencial **somente da landing**, nunca entregar ao n8n.
- As duas são geradas com `crypto.randomBytes(32)`, sem prefixo `NEXT_PUBLIC_`.
- `node scripts/blog/generate-webhook-keys.mjs` gera valores ausentes em
  `.env.local`, preserva valores existentes e aplica `chmod 600`.
- O script exibe somente o hash SHA-256 da credencial interna. Registre esse hash
  em `blog_private.ingestion_keys` via administração autenticada; nunca o segredo.
- Este ambiente já foi configurado e o hash já foi registrado.
- No deploy, configure as duas variáveis **com os mesmos valores locais**.
  Gerar outra credencial interna exige registrar seu hash antes de usá-la.

O banco usa um papel NOLOGIN limitado a criação. A função pública é
`SECURITY INVOKER`; a função privilegiada fica em schema não exposto e exige
a credencial interna antes de qualquer operação. O site não usa `service_role`.
As tabelas públicas continuam sem permissão de escrita para visitantes.

Para revogar/rotacionar a credencial interna, desabilite o hash antigo em
`blog_private.ingestion_keys`, registre o novo hash e atualize a variável do servidor.
Para rotacionar a chave do n8n, atualize `BLOG_WEBHOOK_API_KEY` no servidor e na
credencial do n8n. Nunca envie chaves em URL, JSON, logs ou exports de workflows.

## HTTP Request no n8n

- **Method:** POST.
- **URL:** endereço da landing + `/api/blog/posts`.
- **Authentication:** credencial Header Auth.
- **Name:** `Authorization`.
- **Value:** `Bearer ` seguido do valor de `BLOG_WEBHOOK_API_KEY` do `.env.local`.
- **Headers:** `Content-Type: application/json` e `Idempotency-Key`.
- **Body:** JSON, conforme o exemplo abaixo.

Use uma `Idempotency-Key` derivada do identificador **estável da publicação**:
`blog:origem:artigo-123:v1`. Não derive do ID da execução do n8n, de `$now` nem
gere outro UUID a cada retry. Aceita 8–128 caracteres alfanuméricos e `._:-`.

```json
{
  "slug": "como-organizar-sua-operacao-de-pagamentos",
  "title": "Como organizar sua operação de pagamentos",
  "excerpt": "Os fundamentos para estruturar uma operação de pagamentos.",
  "body_markdown": "## Antes de começar\n\nSeu conteúdo em Markdown.\n\n## Próximos passos\n\nO restante do artigo.",
  "status": "published",
  "category": {
    "slug": "operacoes",
    "name": "Operações",
    "description": "Conteúdos sobre operações de pagamentos."
  },
  "authors": [
    {
      "slug": "equipe-paragan",
      "name": "Equipe Paragan",
      "kind": "organization"
    }
  ],
  "tags": ["pagamentos", "operacoes"],
  "featured": false,
  "seo": {
    "meta_description": "Os fundamentos para estruturar uma operação de pagamentos.",
    "noindex": false
  }
}
```

Sem `status`, salva como **draft**. Para publicar, envie `"status": "published"`.
Sem `published_at`, a publicação usa a hora do banco. Uma data ISO 8601 com fuso
no futuro agenda a visibilidade. Rascunhos e agendados retornam URL, mas ela dá 404
até estarem públicos. Este endpoint não converte um rascunho existente em publicado;
por enquanto essa edição é administrativa.

Autores aceitam `role`, `url` HTTPS e `avatar`; a ordem do array define a assinatura.
Slugs de categorias/autores existentes são reutilizados **sem alterar seus dados**.
Use nomes de autor/categoria com até 120 caracteres e slugs únicos.

Capas aceitam `cover_image` e `cover_alt` obrigatório. Para cada imagem no Markdown,
envie `media` com `src`, `alt`, `width`, `height` e `caption` opcional. Exemplo:

```json
{
  "media": [
    {
      "src": "https://zaamwnkdbidondtryjsj.supabase.co/storage/v1/object/public/blog-assets/diagrama-v1.webp",
      "alt": "Fluxo de uma operação de pagamentos",
      "width": 1200,
      "height": 675
    }
  ]
}
```

Use H2/H3 no corpo. HTML bruto, URLs perigosas, imagens sem dimensões e campos
desconhecidos são rejeitados. Limites: JSON até 1 MB, corpo até 900 mil caracteres,
8 autores, 32 mídias, 30 tags. Nenhuma imagem é baixada pelo webhook.

## Respostas e retries

- **201:** criado; `data` contém `id`, `slug`, `status`, `published_at`, `url`.
- **200:** retry idêntico, mesma publicação; `replayed: true`.
- **400:** JSON inválido ou `Idempotency-Key` ausente/inválida.
- **401:** chave inválida.
- **409:** slug existente ou mesma chave de idempotência com conteúdo diferente.
- **413 / 415 / 422:** tamanho, tipo de conteúdo ou conteúdo inválido.
- **429:** limite global de 60 criações/minuto; respeite `Retry-After: 60`.
- **503:** indisponibilidade ou invalidação pendente; repita com a **mesma chave
  e o mesmo JSON**. Um timeout não significa que o banco não gravou.

A idempotência é persistente no banco e serializada por chave, inclusive entre
instâncias concorrentes da landing. Replays não contam no limite de criações.
Slugs existentes nunca são sobrescritos, mesmo usando outra chave.

Após criar ou repetir uma requisição, o servidor expira o cache do blog, incluindo
feed, categorias, artigo, busca, RSS, Markdown e sitemap. A próxima visita busca
dados novos; abas já abertas não recebem atualização em tempo real.

Use HTTPS e mantenha os limites do proxy compatíveis com o limite de 1 MB da rota.
Não configure um workflow para ignorar 409/422 e continuar publicando.

## Verificações

Testes do handler: `pnpm exec tsx --test tests/blog/ingestion.test.ts`.
O arquivo `supabase/tests/blog_ingestion.sql` verifica autenticação, publicação,
RLS de rascunhos, conflitos, idempotência, rollback atômico e limite de criações,
sem deixar fixtures no banco.

O advisor não apontou novos alertas para esta integração. Permanece o alerta
preexistente de [execução pública de `public.rls_auto_enable()`](https://supabase.com/docs/guides/database/database-linter?lint=0028_anon_security_definer_function_executable),
não alterado por este trabalho.
