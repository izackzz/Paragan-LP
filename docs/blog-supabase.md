# Blog no Supabase

Projeto: `zaamwnkdbidondtryjsj`. O site lê a Data API no servidor com uma
**publishable key**, nunca com `service_role`. Configure `SUPABASE_URL` e
`SUPABASE_PUBLISHABLE_KEY` em cada ambiente; veja `.env.example`.

## Estrutura

- `blog_categories`: slug, nome e descrição.
- `blog_authors`: autoria pública, cargo, avatar e URL opcional.
- `blog_posts`: título, resumo, Markdown, categoria, tags, capa, destaque e SEO.
- `blog_post_authors`: vínculo e ordem dos autores (`position`, a partir de zero).
- `blog_media`: URLs, textos alternativos, dimensões e legendas das imagens do corpo.

RLS permite somente leitura de artigos com `status = 'published'` e
`published_at <= now()`. Categorias, autores e mídias só aparecem quando ligados
a uma publicação visível. Visitantes e usuários comuns não podem escrever.
A gestão fica no Supabase Studio ou no MCP autenticado, não no navegador da LP.
Novos artigos também podem ser enviados ao endpoint autenticado
`POST /api/blog/posts`; veja [publicação por webhook / n8n](./blog-webhook.md).

## Publicar

1. Cadastre a categoria e os autores.
2. Crie o artigo como `draft`, com slug único e estável.
3. Preencha `body_markdown`; use H2/H3, sem HTML bruto. Links entre artigos usam
   `/blog/<slug>`; links locais usam `#section-<slug-do-heading>`.
4. Vincule pelo menos um autor em `blog_post_authors`.
5. Cadastre cada imagem do Markdown em `blog_media`, com a mesma URL, `alt`,
   `width` e `height`. Capas usam `cover_image` e `cover_alt`.
6. Preencha `published_at` com data/hora e fuso; altere `status` para `published`.
   Uma data futura agenda a visibilidade sem cron. `archived` retira a publicação.

`seo` aceita `meta_title`, `meta_description`, `canonical`, `og_image`,
`og_image_alt` e `noindex`. `noindex` não torna conteúdo privado: use `draft`.
Não armazene observações internas, credenciais ou dados privados nos campos públicos.

## Mídia

O bucket `blog-assets` é **público**, limitado a imagens raster de até 10 MiB.
Não envie imagens privadas de rascunhos: arquivos desse bucket podem ser acessados
pela URL mesmo antes de o artigo ser publicado. Uploads são administrativos.

URL: `https://zaamwnkdbidondtryjsj.supabase.co/storage/v1/object/public/blog-assets/<arquivo>`.
Use nomes versionados para substituir imagens. O otimizador aceita somente esse
bucket do projeto, além dos hosts já existentes na LP. Arquivos locais em `public`
continuam suportados.

## Atualização e falhas

Feed, artigo, busca, RSS, fonte Markdown e sitemap consultam o mesmo repositório.
O cache revalida a cada 60 segundos **sob demanda**, sem build para novos slugs.
A primeira visita após o prazo pode receber a versão anterior enquanto a próxima é
gerada. Retirar ou editar uma publicação não é uma revogação instantânea de cópias
já públicas/cacheadas. Em falha de atualização, o Next.js pode manter a versão
anterior; uma falha sem cache chega ao error boundary, não vira um acervo vazio.

Não há fallback silencioso para os JSONs gerados. Os comandos `blog:generate` e
os arquivos em `content/blog` ficam apenas como ferramentas/fixtures legadas.
O post Lorem ipsum não é importado para o Supabase.

Migrations locais espelham as versões aplicadas pelo MCP. Não reaplique uma
migration já registrada. Testes SQL em `supabase/tests/blog_rls.sql` usam
transação com rollback e não deixam artigos no banco.
