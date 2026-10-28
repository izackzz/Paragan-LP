# Paragan LP — r2

## Fase 9 — Refinar `/plataforma`

- [x] `plataforma/page.tsx` + capacidade editorial: índice local, artes proporcionais e argumentos em grade.
- [x] `plataforma.ts` + `page-structured-data.tsx`: copy, metadata e WebPage/BreadcrumbList coerentes.
- [x] `/plataforma`: ESLint, Prettier e `tsc --noEmit --incremental false`.
- [x] `/checkout`: jornada 2×2, editorial com arte proporcional, breadcrumb e SEO específico.
- [x] `/financeiro`: composição 1:2, editorial com pontos full-width, breadcrumb e FAQ estruturado.
- [x] `/integracoes`: acesso 2×2, editoriais 1:1 com pontos full-width, breadcrumb e FAQ estruturado.
- [x] `/solucoes`: índice navegável, cenários 1:1 com pontos full-width, breadcrumb e FAQ estruturado.
- [x] `/contratacao`: escopo 2×2, implantação sequencial, responsabilidades equilibradas, calculadora e SEO.
- [x] `/contato`: hero conciso, formulário/briefing acessível, breadcrumb e ContactPage estruturado.
- [x] `/calculadora`: hierarquia de premissas/resultados, alvos acessíveis, breadcrumb e SEO.
- [x] `/`: metadata própria, WebPage/Organization/WebSite/FAQ graph, contraste medido e tour responsivo.
- [x] [P1] `/plataforma`: índices legíveis em claro e breadcrumb com alvo 44×44.
- [x] [P1] `/checkout`: índices legíveis, painéis FAQ associados e FAQPage estruturado.
- [x] [P1] `/financeiro`: índices legíveis, painéis FAQ associados e breadcrumb 44×44.
- [x] [P1] `/checkout`: contrastes legíveis, FAQ ligado por id e alvos 44×44.

## Fase 1 — Refinamento visual e conteúdo

- [x] `fluid-hover-highlight.tsx` + blocos contíguos: raio medido por item; uma divisória por contato.
- [x] `sections/*` + `public/assets/illustrations/`: usar `ArtPlaceholder` local e remover ilustrações externas.
- [x] `button.tsx` + landing: fundos visíveis, CTA platinado, tabs `rounded-md`, escala sem valores arbitrários e copy reforçada.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 3 — Correções finais de aceitação

- [x] `globals.css` + `site-header.tsx` + `card.tsx` + hero: CTA platinado, sem ghost e invisibilidade explícita ao cliente final.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 2 — Fechamento de aceitação

- [x] `use-fluid-hover.ts` + `fluid-group.tsx`: fallback de raio só para wrapper declarado.
- [x] `src/**/*.tsx`: substituir utilitários Tailwind com valores arbitrários por escala semântica ou token nomeado.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 4 — Cards de navegação do hero

- [x] `hero-section.tsx` + `tabs.tsx`: cards quadrados com título, kicker, descrição e Hugeicons.

## Fase 5 — Hierarquia dos cards do hero

- [x] `tabs.tsx`: reduzir kicker/descrição e reforçar hierarquia do título.

## Fase 6 — Plataforma em pares

### Copy e numeração

- [x] `platform-section.tsx`: `01 / IDENTIDADE` — “Sua marca, em cada contato.”; painel, checkout, domínio e comunicação próprios.
- [x] `platform-section.tsx`: `02 / REGRAS COMERCIAIS` — “Seu modelo vira regra.”; taxas, comissões e condições por seller.
- [x] `platform-section.tsx`: `03 / PESSOAS` — “Cada pessoa, no seu papel.”; equipe, carteiras e permissões.
- [x] `platform-section.tsx`: `04 / RELACIONAMENTO` — “Uma base para cultivar.”; campanhas, rankings e premiações para sellers.
- [x] `platform-section.tsx`: `05 / ADQUIRÊNCIA` — “Rotas com direção.”; processadores, prioridades e regras de pagamento.
- [x] `platform-section.tsx`: `06 / GESTÃO FINANCEIRA` — “Cada valor, no contexto.”; saldos, extrato, reservas e solicitações de saque.
- [x] `platform-section.tsx`: `07 / CHECKOUT` — “Da oferta ao pagamento.”; produtos, ofertas, cupons e adicionais.
- [x] `platform-section.tsx`: `08 / INTEGRAÇÕES` — “Conecte a operação.”; API, webhooks e histórico de entrega.

### Composição e verificação

- [x] `platform-section.tsx`: quatro pares `01–02 / 03–04 / 05–06 / 07–08`; frames de cantos retos, cards quadrados, ilustração em meia área, padding e bordas de `1px`.
- [x] `globals.css`: substituir `A BB / C D E / FF G`; sticky dos pares com espaço vertical suficiente, mobile empilhado e movimento reduzido respeitado.
- [x] `platform-section.tsx`: ESLint + Prettier + `tsc --noEmit --incremental false`; `git diff --check`.

## Fase 7 — Tema claro e alternância na navbar

- [x] `globals.css`: tokens claros; preservar paleta escura, superfícies e contraste.
- [x] `lib/theme.ts` + `layout.tsx` + `theme-toggle.tsx` + `site-header.tsx`: detectar `prefers-color-scheme` antes do paint; botão sol/lua desktop/mobile, persistência e sincronização.
- [x] Arquivos alterados: Prettier + ESLint + `tsc --noEmit --incremental false`; teste direcionado de preferência, clique e storage indisponível.

## Fase 8 — Páginas complementares e navegação institucional

### Escopo e destinos

- [x] `src/config/site.ts`: manter `/` como conversão; criar `/plataforma`, `/checkout`, `/financeiro`, `/integracoes`, `/solucoes`, `/contratacao`, `/contato`.
- [x] `navigation` + `site.ts`: Plataforma → `/plataforma`, `/checkout`, `/plataforma#gestao-sellers`, `/financeiro`, `/plataforma#multiadquirencia`, `/checkout#assinaturas`.
- [x] `navigation` + `site.ts`: Soluções → `/solucoes#lancamento`, `/solucoes#migracao`, `/solucoes#plataformas`, `/checkout#entrega-digital`.
- [x] `navigation` + `site.ts`: substituir Desenvolvedores por Integrações; visão geral → `/integracoes`, API → `#api`, webhooks → `#webhooks`, apps → `#apps`, sempre com pathname.
- [x] `navigation` + `site.ts`: remover Conteúdos, Parceiros e Sobre a Paragan; trocar Empresa/Planos por Contratação → `/contratacao`; CTA → `/contato`.
- [x] Documentação externa: não divulgar nesta rodada; não rotular resumo institucional como documentação ou referência completa da API.

### Base compartilhada — agente principal, antes dos workers

- [x] `src/components/landing/`: extrair shell institucional com header/footer únicos, skip-link e hero com um `h1`; preservar layout da home.
- [x] `institutional/*` + `primitives.tsx`: extrair templates da home com copy, IDs, destinos e índice/total por página; manter defaults da home.
- [x] `src/i18n/messages/pages/*`: separar copy tipada por página com import direto; conteúdo técnico com funcionamento, dependências e limites, sem simples troca de sinônimos.
- [x] `src/config/illustrations.ts`: reutilizar exclusivamente assets existentes e screenshots; nenhuma ilustração nova ou placeholder externo nas páginas.
- [x] `hero-section.tsx` + `site.ts`: especialista → `/contato`; ver em ação → `/#previa-produto`, com ID no frame existente; marca → `/#inicio`.
- [x] `site-footer.tsx` + `site.ts`: manter o mesmo footer em todas as páginas; atualizar destinos globais e corrigir hashes relativos; remover perfil social genérico sem URL oficial.
- [x] `primitives.tsx` + `site-footer.tsx`: início da página atual com âncora local existente; home com pathname explícito; CTA de exploração com destino coerente ao rótulo.

### Worker direto — `/plataforma`

- [x] `src/app/plataforma/page.tsx` + copy própria: hero dedicado → prévias admin/seller/staff → módulos selecionados de `PlatformSection` → `ControlSection` → `ScaleSection` → links relacionados.
- [x] `/plataforma`: detalhar marca/domínio, papéis e carteira em `#gestao-sellers`, rotas e habilitações em `#multiadquirencia`, isolamento/responsabilidades em `#arquitetura`; reutilizar artes 04–08, 15–17 e 22.
- [x] `/plataforma`: links contextuais para `/checkout`, `/financeiro`, `/integracoes`, `/contratacao` e `/contato`; não criar página sobre equipe institucional.

### Worker direto — `/checkout`

- [x] `src/app/checkout/page.tsx` + copy própria: hero dedicado → `CheckoutSection` → blocos derivados de `PlatformSection`/`SolutionsSection` para `#assinaturas` e `#entrega-digital` → `IntegrationsSection` selecionada → FAQ específico.
- [x] `/checkout`: explicar produto/oferta, cupom/adicional, pedido/pagamento, recorrência condicionada e arquivos/links autorizados; reutilizar screenshot do checkout e artes 10, 11, 20 e 21; não prometer LMS.
- [x] `/checkout`: links contextuais para `/financeiro`, `/integracoes`, `/solucoes` e `/contato`.

### Worker direto — `/financeiro`

- [x] `src/app/financeiro/page.tsx` + copy própria: hero dedicado → `FinanceSection` → recorte comercial/financeiro de `ControlSection` → pares derivados de `PlatformSection` → FAQ específico.
- [x] `/financeiro`: explicar taxas/comissões, custos registrados, saldos/reservas, lançamentos/estornos e saques; reutilizar artes 05, 09, 16–18; distinguir registro interno de liquidação e resultado de lucro contábil.
- [x] `/financeiro`: links contextuais para `/plataforma#multiadquirencia`, `/checkout`, `/contratacao` e `/contato`.

### Worker direto — `/integracoes`

- [x] `src/app/integracoes/page.tsx` + copy própria: hero dedicado → `IntegrationsSection` → blocos derivados de `PlatformSection` em `#api`, `#webhooks`, `#apps` → recorte de `ScaleSection` → FAQ específico.
- [x] `/integracoes`: explicar escopos/autenticação, eventos/entregas e fronteiras entre apps, processadores e sistemas próprios; reutilizar artes 08, 11, 20–22; não publicar catálogo de parceiros como disponibilidade homologada.
- [x] `/integracoes`: links contextuais para `/plataforma#multiadquirencia`, `/checkout`, `/contratacao` e `/contato`; documentação externa somente com destino confirmado.

### Worker direto — `/solucoes`

- [x] `src/app/solucoes/page.tsx` + copy própria: hero dedicado → `SolutionsSection` expandida com `#lancamento`, `#migracao`, `#plataformas` e definição de projeto → recortes de plataforma/checkout → `LaunchSection` → FAQ específico.
- [x] `/solucoes`: listar contexto, fluxos necessários e dependências por cenário usando as grades existentes; reutilizar artes 12–14 e screenshots; sem novas páginas por segmento.
- [x] `/solucoes`: lançamento → `/plataforma`; migração → `/contratacao#implantacao`; plataformas → `/integracoes` e `/financeiro`; venda digital → `/checkout#entrega-digital`; avaliação → `/contato`.

### Worker direto — `/contratacao`

- [x] `src/app/contratacao/page.tsx` + copy própria: hero dedicado → grade derivada de `PlatformSection` para uso/implantação/customizações/terceiros → `LaunchSection` em `#implantacao` → recorte de `ScaleSection` → FAQ específico.
- [x] `/contratacao`: explicar escopo, composição de custos, habilitações, aceite, manutenção e responsabilidades; sem tabela fictícia de planos, prazos, SLA ou preços; reutilizar artes 14 e 22 se necessárias.
- [x] `/contratacao`: links contextuais para `/solucoes#migracao`, `/integracoes`, `/plataforma` e `/contato`.

### Worker direto — `/contato`

- [x] `src/app/contato/page.tsx` + copy própria: somente hero dedicado + `ContactSection` existente, além do header/footer compartilhados; links de retorno dentro desses blocos.
- [x] `/contato`: preservar formulário e comportamento existentes, sem WhatsApp adicional nem novos avisos de mock; hero com atalho ao formulário e contratação, sem prometer agendamento.

### Orquestração e aceite

- [x] Implementação: despachar um worker direto GPT-6.1 Sol por página, paralelizando somente arquivos isolados; escrita restrita ao `Paragan-LP`, leitura de docs/repos irmãos permitida; base compartilhada e commits ficam com o agente principal.
- [x] Cada rota: hero/copy próprios, mesmo footer, sequência intencional de seções, assets existentes e ao menos dois destinos relacionados dentro do conteúdo; `/contato` mantém apenas hero/formulário.
- [x] CTA de navegação: link real ou âncora existente; nenhum botão inerte; preservar ações funcionais de tabs, tema, menu e formulário.
- [x] Home: manter narrativa, ordem e visual; limitar alterações a destinos, IDs e adaptações compartilhadas sem regressão.
- [x] `src/app/sitemap.ts` + metadata por rota: incluir somente páginas publicadas, canonical/título/descrição próprios; não listar `/ascii` e `/globe` como institucionais.
- [x] Arquivos alterados: typecheck, lint e formatação direcionados; conferir rotas/âncoras, navegação desktop/mobile, temas e reduced motion; sem build ou deploy nesta etapa.

### Correções da revisão em navegador

- [x] [P1] `accordion.tsx`: observar resize do grupo; fundo expandido acompanha largura e conteúdo sem overflow ao trocar breakpoint.
- [x] [P1] `action-link.tsx` + `primitives.tsx`: compor Link/Button no cliente; CTA renderiza uma única âncora, sem botão externo inerte.
- [x] [P1] `layout.tsx`: inicializar tema com `next/script` antes da hidratação; preferência do sistema e persistência manual funcionais.

## Fase 9 — Acessibilidade e contraste por rota

- [x] [P1] `/financeiro`: índices legíveis, FAQ com painéis associados e breadcrumb 44×44.
- [x] [P1] `/integracoes`: FAQ acessível e breadcrumb 44×44.
- [x] [P1] `/solucoes`: FAQ acessível e breadcrumb 44×44.
- [x] [P1] `/contratacao`: FAQ acessível e breadcrumb 44×44.
- [x] [P1] `/calculadora`: contraste AA e alvos de toque 44×44.

## Fase 10 — Mega menu institucional

- [x] `mega-menu.tsx` + `config/navigation.ts`: 1–3 colunas, destaque/ilustração opcionais e placeholder local; largura independente dos triggers.
- [x] `site-header.tsx`: categorias mobile, Voltar, foco, Escape e fechamento ao navegar; temas e reduced motion preservados.
- [x] `src/app/*/page.tsx` + `page-structured-data.tsx`: remover breadcrumbs visuais e `BreadcrumbList`.
- [x] Arquivos alterados: lint, formatação, typecheck e navegador; variantes de colunas/arte, desktop/mobile e JSON-LD.

## Fase 11 — Accordions no menu mobile

- [x] `mobile-menu-disclosure.tsx` + header: expansão fluida principal/categorias/grupos; painéis fechados inertes, Escape e reduced motion.
- [x] `mega-menu.tsx`: raios suaves, superfícies por nível e hierarquia de texto mobile; desktop preservado.
- [x] Verificação: lint/typecheck, animação medida por frame, navegação/teclado e contraste nos dois temas.

## Fase 12 — Blog editorial com Markdown, JSON e UI de referência Vercel

### 12.1 Escopo, referência e limites

- [x] `src/app/blog/`: entregar galeria `/blog/`, artigo `/blog/[slug]`, categorias e paginação; sem CMS, banco, autenticação ou API Gateway.
- [ ] `src/components/landing/pages/blog/`: reproduzir composição dos dois HTMLs fornecidos por Zack; não importar Geist, CSS compilado, tracking, textos ou assets da Vercel.
- [x] `DESIGN.md` + blog: preservar frame de 84rem, header/footer, fontes Galano/Faktum/Rational Mix, temas claro/escuro e tokens existentes.
- [x] `src/components/landing/pages/blog/`: usar componentes shadcn/ui/BoringUI; composições editoriais próprias somente sobre primitivos locais, sem biblioteca paralela.
- [ ] Conteúdo inicial: localizar os `.md` reais com Front Matter; não tratar `draft.md` do checkout como post nem publicar o exemplo fornecido como conteúdo real.
- [x] Conteúdo inicial: se os `.md` não estiverem disponíveis, registrar caminho pendente e usar o mock público solicitado; demais exemplos ficam exclusivamente em fixtures.
- [x] `public/blog/mock-post.json`: disponibilizar um post Lorem ipsum completo em Markdown com Front Matter estruturado, `mock: true` e `seo.noindex: true`.
- [ ] `repository.ts`: usar `public/blog/mock-post.json` como fonte inicial de demonstração; validar pelo mesmo schema e compilar Markdown no servidor, sem fetch client para conteúdo essencial.
- [x] Blog mock: exibir aviso de demonstração na galeria/artigo, aplicar `noindex` às páginas que o exibem e excluir mock de sitemap/feed; substituir pela fonte editorial quando disponível.
- [ ] `node_modules/next/dist/docs/`: conferir guias da versão instalada para params assíncronos, metadata, geração estática, imagens e route handlers antes da implementação.

### 12.2 Organização dos arquivos

- [x] `content/blog/posts/*.md`: fontes editoriais versionadas; nome de arquivo independente do slug público explícito.
- [x] `content/blog/authors.json` + `content/blog/categories.json`: cadastros editoriais com IDs estáveis, nomes, descrições e mídia opcional.
- [ ] `public/images/blog/<slug>/` + `public/images/blog/authors/`: mídia local por artigo/autor; preservar caminhos legados válidos como `/images/posts/`.
- [ ] `scripts/blog/generate.mts`: entrada única para importar, validar e gerar dados; helpers em `scripts/blog/` somente quando necessários.
- [ ] `src/lib/blog/{types,schema,normalize,compile,urls}.ts`: contratos, validação, normalização, compilação e URLs; módulos Node fora de imports client.
- [ ] `src/lib/blog/{repository,metadata,structured-data,feed}.ts`: leitura pública server-only e projeções SEO/feed, sem lógica editorial nas rotas.
- [x] `src/content/blog.generated.json`: arquivo JSON consolidado com todos os posts publicados, Markdown integral, Front Matter, dados normalizados e árvore compilada.
- [x] `src/content/blog-search.generated.json`: projeção leve da busca; sem Markdown, AST ou campos editoriais privados.
- [ ] `src/components/landing/pages/blog/`: separar galeria, cards, navegação, artigo, autores, ações, estados e estilos; não misturar parser nos componentes.
- [ ] `src/components/landing/pages/blog/markdown/`: mapa de nós e componentes de texto, heading, código, tabela, imagem, citação e nota de rodapé.
- [x] `src/i18n/messages/pages/blog.ts`: copy de interface, metadata da galeria, estados, aria-labels, datas e pluralização em pt-BR.
- [ ] `tests/blog/fixtures/`: Markdown de cobertura, Front Matter inválido, URLs inseguras e metadados extensos; nenhum fixture listado no blog público.

### 12.3 Contrato editorial e Front Matter

- [x] `schema.ts`: validar com Zod `title`, `slug`, `date`, `author`, `layout: post`, `draft`, `excerpt`, `cover_image`, `tags` e `seo`; aceitar o YAML fornecido sem alteração.
- [ ] `schema.ts`: exigir título, slug explícito, data válida com timezone, autoria e descrição efetiva em posts publicados; erro informa arquivo e campo.
- [ ] `schema.ts`: acrescentar opcionais `updated_at`, `authors`, `category`, `featured`, `featured_order`, `cover_alt`, dimensões, legenda, crédito e `lang`.
- [ ] `schema.ts`: aceitar SEO opcional `meta_title`, `meta_description`, `canonical`, `og_image`, `og_image_alt` e `noindex`; não inventar campos preenchidos pelo autor.
- [ ] `normalize.ts`: converter `author: string` em lista normalizada; resolver múltiplos autores por ID ou objeto, sem criar links/perfis fictícios.
- [ ] `normalize.ts`: autor desconhecido mantém nome original sem avatar; cadastro opcional fornece bio, cargo, URL HTTPS e imagem com dimensões.
- [ ] `normalize.ts`: categoria ausente vira `Geral`; categorias explícitas resolvem cadastro; tags não viram categorias automaticamente.
- [ ] `normalize.ts`: deduplicar tags por forma normalizada, preservando label editorial; não criar páginas de tag/autor nesta entrega.
- [ ] `normalize.ts`: preservar Front Matter original como dados JSON e documento Markdown integral em `sourceMarkdown`; normalizar datas para ISO sem perder o offset textual original.
- [x] `normalize.ts`: manter corpo sem Front Matter em `bodyMarkdown`; não truncar conteúdo, listas, tabelas, referências ou blocos de código.
- [ ] `schema.ts`: rejeitar slugs duplicados, barras, traversal, caracteres de controle e slugs reservados `category`, `page`, `feed.xml` e `search`.
- [ ] `schema.ts`: rejeitar data inválida, `updated_at < date`, campos booleanos textuais e referências locais inexistentes em posts publicados.
- [ ] `schema.ts`: campos adicionais de Front Matter permanecem em `frontMatter`; exposição pública exige allowlist, sem descartar dados da fonte `.md`.
- [x] `normalize.ts`: `draft: true` e data futura não entram em artefatos públicos, slugs, busca, sitemap, feed ou relacionados.
- [ ] Publicação agendada: usar instante UTC único por geração; publicação futura exige nova geração/deploy, sem promessa de scheduler inexistente.

### 12.4 Pipeline Markdown → JSON → componentes

- [ ] `package.json`: adicionar `gray-matter`, parser YAML seguro, Zod, unified/remark-parse/remark-gfm/remark-rehype e Shiki; conferir versões e licenças, atualizar lockfile.
- [ ] `scripts/blog/generate.mts`: descobrir fontes em ordem estável; parsear YAML sem execução de tags, limitar tamanho/profundidade e falhar com diagnóstico acionável.
- [ ] `compile.ts`: compilar CommonMark + GFM em árvore JSON serializável e tipada; sem execução de MDX, JSX, imports, expressões ou componentes vindos do post.
- [x] `compile.ts`: gerar IDs determinísticos e únicos de headings, preservar acentos no texto e resolver headings repetidos com sufixos estáveis.
- [ ] `compile.ts`: extrair texto, word count, tempo estimado a 220 palavras/minuto e índice H2/H3; mínimo de um minuto para artigo não vazio.
- [x] `compile.ts`: destacar código no build com Shiki, linguagens sob demanda e fallback plaintext; serializar tokens, nunca carregar o highlighter no navegador.
- [ ] `compile.ts`: preservar linhas vazias, tabs, caracteres escapados e conteúdo literal do código; metadados opcionais de fence limitados a título, linguagem e linhas destacadas.
- [ ] `compile.ts`: resolver links `.md`, imagens relativas e âncoras para URLs públicas; referência interna inexistente falha na validação de conteúdo.
- [ ] `compile.ts`: bloquear HTML bruto ativo, scripts, handlers, estilos e protocolos perigosos; nó não suportado gera erro explícito, não omissão silenciosa.
- [ ] `compile.ts`: inventariar HTML/extensões presentes nos posts reais; suportar HTML editorial apenas via allowlist sanitizada e testes antes de aceitar a fonte.
- [ ] `blog.generated.json`: incluir `schemaVersion`, hash das fontes, autores/categorias públicos e posts com fonte integral, corpo, metadata, AST, headings, mídia e métricas.
- [ ] `generate.mts`: resultado determinístico e escrita atômica; falha não substitui JSON anterior por saída parcial, mas bloqueia o pipeline.
- [ ] `generate.mts`: derivar índice por slug, ordenação `date desc + slug`, destaques editoriais e projeção de busca a partir do mesmo conjunto publicado.
- [x] `package.json`: criar `blog:generate` e `blog:check`; check recompila em memória e acusa JSON desatualizado sem modificar arquivos.
- [x] `package.json` + fluxo de build existente: gerar conteúdo antes do build; build nunca depende de leitura dos `.md` por request nem de serviço externo.
- [ ] Desenvolvimento: documentar comando de regeneração após editar `.md`; não adicionar watcher/daemon permanente nesta primeira entrega.

### 12.5 Componentes shadcn/ui e BoringUI

- [ ] `docs/refs/boringui/`: consultar `registry.json`, docs e `files[].content` de cada candidato; respeitar `components.json` `base-nova` e não presumir APIs pela demo.
- [x] `src/components/ui/{card,button,input,label,select}.tsx`: reutilizar implementação instalada; confirmar props locais antes de compor, sem sobrescrita automática pelo CLI.
- [ ] `post-card.tsx`: compor `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent` e `CardFooter` locais; headings semânticos explícitos e link único por card.
- [ ] `blog-toolbar.tsx`: categorias desktop como links reais; seletor mobile com `Select` local em ilha client, fallback de links disponível sem JavaScript.
- [ ] `blog-search.tsx`: `Input` + `Label` + `Button` locais; consultar BoringUI `input-group` somente se necessário para prefixo/limpar, sem instalar por decoração.
- [ ] `copy-button.tsx`: compor `Button` local para URL, Markdown e código; sucesso/falha em live region, sem forçar `InputCopy` de campo sobre texto editorial.
- [ ] `markdown/code-block.tsx`: consultar BoringUI `code-block` e variante Base UI antes de adotar; adaptar cabeçalho/cópia à árvore Shiki server-side sem highlighter client duplicado.
- [ ] `src/components/ui/pagination.tsx`: adicionar primitivo shadcn compatível com `base-nova` somente se ausente; usar links Next com nomes acessíveis e `aria-current`.
- [ ] `article-actions.tsx`: ações de cópia via dropdown BoringUI/Base UI apenas após consulta do registry; trigger, Escape, teclado, foco de retorno e erro de clipboard verificáveis.
- [ ] Instalações necessárias: usar registry configurado/URL oficial Base UI, revisar diff e dependências; não instalar catálogo, provider ou tokens globais redundantes.
- [ ] `font-weight.ts` + componentes blog: pesos estáticos disponíveis nas fontes locais; não ativar animação de eixo variável em Faktum/Galano estáticas.

### 12.6 Galeria — composição fiel à referência

- [ ] `blog-index.tsx`: frame institucional → título `Blog` → toolbar → destaques → grade cronológica → paginação; sem hero ilustrado, thumbnails obrigatórias ou cards de dashboard.
- [ ] `blog.module.css`: container editorial próprio dentro de `landing-frame`; preservar alinhamento das bordas globais e padding `px-5 md:px-7 xl:px-10`.
- [ ] Galeria: título Faktum regular `text-4xl lg:text-5xl`, topo `pt-8 md:pt-10 lg:pt-12`, margem inferior `mb-6 lg:mb-8`.
- [ ] Toolbar: categorias à esquerda, busca e RSS à direita, divisor inferior discreto; desktop sem wrap confuso, mobile com seletor e busca expansível.
- [ ] Categorias: `Todos` + cadastros com posts públicos; rótulos reais em pt-BR, estado ativo sublinhado e `aria-current`, sem categorias fictícias da Vercel.
- [ ] `featured-posts.tsx`: até três destaques por `featured_order` e data; ausência de destaques remove seção inteira sem lacuna artificial.
- [ ] `post-card.tsx`: variante destaque com data/categoria → título 32px → excerpt 14px/20px → autores; padding 24px e base 32px.
- [ ] Destaques: grade 12 colunas, gap 24px, spans 12/6/4 em base/lg/xl; respiro até lista `mb-6 lg:mb-24`.
- [ ] Destaques: ritmo visual próximo de 420px no desktop via min-height, nunca max-height que corte conteúdo; mobile com altura natural e títulos completos.
- [ ] `post-card.tsx`: variante regular com data/categoria 14px → título 24px → autores 14px; sem excerpt visível, mantendo excerpt nos dados SEO/busca.
- [ ] Lista regular: spans 12/6/4, gap 24px, padding desktop 24px e borda inferior mobile com respiro 40px; sem bordas duplas.
- [ ] Cards: superfície `background`, hover `hover`, raio discreto; título `foreground`, excerpt/metadados `foreground-3`, sem scale, tilt ou sombra elevada.
- [ ] Cards: título Faktum, texto Galano, autores ao rodapé; alinhamento por grid/min-height responsiva sem truncar a única versão acessível do título.
- [ ] `author-list.tsx`: avatares 16px com borda sutil e overlap mínimo; nomes quebram naturalmente, excedentes com `+N` e nome acessível completo.
- [ ] Cards: avatares decorativos quando o nome já está adjacente; fallback de iniciais sem avatar externo genérico e sem novo request por autor desconhecido.
- [ ] Paginação: 12 itens por página, excluindo destaques da primeira página geral; categorias listam seus posts sem seção de destaques e sem duplicação/perda entre páginas.
- [ ] Rodapé da grade: link real `Mais publicações` para próxima página, navegação anterior/números acessível; não implementar infinite scroll dependente de JS.
- [ ] Conteúdo curto: um ou dois posts ocupam colunas naturais; sem placeholders públicos ou cópias de cards para preencher a grade.

### 12.7 Busca, categorias e navegação

- [ ] `repository.ts`: expor `getPublishedPosts`, `getPostBySlug`, `getCategories`, `getFeaturedPosts` e `getPage`; mesma regra pública para todas as rotas.
- [ ] `blog-search.tsx`: carregar índice leve só ao focar/abrir busca; buscar título, excerpt, tags, categoria e autores, normalizando caixa/acentos.
- [ ] Busca: resultados em painel com links reais e quantidade anunciada; não aplicar `role=listbox` sem implementar todo o contrato de combobox.
- [ ] Busca: limitar painel a oito resultados com scroll próprio, debounce de 150ms, limpar, Escape e foco de retorno; não carregar corpo completo de todos os posts.
- [ ] Busca mobile: botão com alvo 44px expande campo sem overlay cobrindo header; label explícita, sem perda do termo ao redimensionar.
- [ ] Busca: estados inicial, carregando índice, nenhum resultado e falha com tentar novamente; galeria server-rendered permanece disponível durante falha.
- [ ] `src/app/blog/category/[category]/page.tsx`: categoria por slug cadastrado, metadata própria e estado ativo; desconhecida ou sem conteúdo publicado retorna 404.
- [ ] `src/app/blog/page/[page]/page.tsx` + `category/[category]/page/[page]/page.tsx`: páginas estáticas e canonicals próprios; número inválido/fora do limite retorna 404.
- [ ] `urls.ts`: URL canônica sem barra final conforme padrão atual; `/blog/` deve resolver para `/blog` sem alterar `trailingSlash` global nem criar versões indexáveis duplicadas.
- [ ] Paginação página 1: redirecionar permanentemente para índice/categoria raiz; links internos sempre apontam para destino canônico.
- [ ] `src/config/site.ts` + header/footer + copy: adicionar Blog como destino institucional real em desktop/mobile; preservar menus existentes sem reintroduzir seção genérica Conteúdos.

### 12.8 Artigo — composição fiel à referência

- [x] `src/app/blog/layout.tsx`: montar `InstitutionalShell` uma única vez para todas as rotas blog; páginas filhas sem segundo main, header ou footer.
- [ ] `article-page.tsx`: header editorial → grade de corpo/metadados → CTA final → footer compartilhado; sem hero ilustrado obrigatório nem índice lateral extra ausente na referência.
- [ ] `article-header.tsx`: link simples `Blog` acima do H1, autores abaixo; não criar breadcrumb visual completo nem `BreadcrumbList`, conforme convenção atual.
- [ ] `blog.module.css`: grade de 12 colunas com gap 24px; header/corpo span 12 base, span 7/start 2 em lg e span 6/start 4 em xl.
- [ ] `article-meta.tsx`: aside span 3/start 10 em lg e span 2/start 11 em xl; no mobile antecede corpo com data, leitura e ações que podem quebrar linha.
- [ ] Header: margem inferior 48px/64px, gap 20px; título Faktum 40px/48px regular com quebra balanceada, sem peso sintético 450 da Geist.
- [ ] Autores: nomes como links `rel=author` somente com perfil real; nomes sem truncamento e sem links dentro de outro link.
- [ ] Metadados: `<time dateTime>` ISO, data em pt-BR/America-Sao_Paulo e leitura pluralizada; data de atualização visível somente quando informada e distinta.
- [ ] Corpo: largura máxima de leitura próxima a 640px, Galano 16px/28px mobile e 18px/32px desktop, `foreground-2`; não aplicar opacidade ao artigo inteiro.
- [ ] Ritmo: gap entre blocos 24px; H2 com intervalo superior 48px, H3 com 40px, sem intervalo extra no primeiro heading do corpo.
- [ ] Aside: fluxo normal inicialmente; não adicionar sticky, progress bar, newsletter, comentários ou compartilhamento social sem necessidade do escopo.
- [ ] `article-actions.tsx`: menu `Copiar` oferece link canônico e Markdown completo; confirmação/falha textual e fallback de seleção manual se Clipboard API indisponível.
- [ ] CTA final: título editorial + ações `/contato` e `/plataforma`, gap 16px, margem superior 80px/160px; copy Paragan e `ActionLink` existentes, sem CTA da Vercel.
- [ ] Cover: preservar como mídia SEO por padrão, sem inserir hero que altere referência; exibição editorial somente por opção explícita, sem duplicar imagem já presente no corpo.

### 12.9 Renderização Markdown completa e trabalhada

- [ ] `markdown/renderer.tsx`: renderizar AST validada como elementos React sem HTML arbitrário; conteúdo integral presente no HTML inicial, sem fetch client para leitura.
- [ ] `markdown/text.tsx`: parágrafos, quebras, ênfase, strong, del, escapes, entidades e texto Unicode com espaçamento preservado e semântica nativa.
- [ ] Headings: H1 pertence ao título editorial; H1 inicial idêntico é deduplicado, demais H1 do corpo são erro editorial com orientação para H2.
- [ ] `markdown/heading.tsx`: H2 32px, H3 24px/28px, H4–H6 hierárquicos; IDs estáveis, scroll margin acima do header e âncora acessível no hover/foco.
- [ ] Headings mobile: ícone de âncora dentro da área segura, sem margem negativa que provoque overflow; heading continua legível sem hover.
- [ ] `markdown/link.tsx`: links inline sublinhados com underline-offset, internos via Next Link e externos com protocolo permitido; `_blank` somente explícito com `noopener noreferrer`.
- [ ] Links: suportar referências, autolinks GFM, âncoras, HTTPS e mailto; bloquear `javascript:`, `data:`, `vbscript:` e URLs ofuscadas após normalização.
- [ ] `markdown/list.tsx`: `ul`, `ol`, `start`, listas aninhadas e parágrafos internos; markers discretos, indentação 20px e gap 8px, sem perder estrutura.
- [ ] Task lists GFM: checkbox shadcn/BoringUI somente leitura ou input nativo desabilitado corretamente nomeado; preservar marcado/desmarcado sem interação falsa.
- [ ] `markdown/inline-code.tsx`: Rational Mix, fundo semântico sutil, hairline e padding compacto; strings longas quebram no mobile sem cortar conteúdo.
- [ ] `markdown/code-block.tsx`: frame `rounded-lg`, header com arquivo/linguagem e copiar; mono 13px/20px, números decorativos, scroll horizontal local e texto original copiável.
- [ ] Código: linguagem desconhecida usa plaintext; linhas destacadas sem depender só de cor, tokens Shiki com contraste nos dois temas e sem cores novas globais arbitrárias.
- [ ] `markdown/blockquote.tsx`: citação editorial 24px/32px regular com respiro 36px; citações aninhadas preservadas, sem transformar qualquer blockquote em depoimento inventado.
- [ ] Citação atribuída: somente com metadados explícitos validados; nome, cargo e avatar opcionais, sem inferir autoria por regex frágil no texto.
- [ ] `markdown/table.tsx`: GFM com alinhamentos, `<thead>`, `<tbody>`, `th scope=col`, hairlines e células confortáveis; wrapper rolável/focável e nomeado quando necessário.
- [ ] Tabelas: limitar scroll ao componente, manter conteúdo completo, não converter em cards nem usar `FilterTable`/grid interativo para tabela editorial estática.
- [ ] `markdown/image.tsx`: `figure`/`figcaption`, alt editorial, dimensões conhecidas, `sizes` correto e Next Image; imagem isolada fora de `<p>` para HTML válido.
- [x] Mídia: mesma largura da coluna de texto, sem variante wide; `ArtPlaceholder` local dentro de frame com borda e raio, sem sobrepor aside.
- [ ] Mídia: legenda/crédito e variantes light/dark/mobile somente via manifesto validado; ausência de variantes usa imagem única, sem requests quadruplicados por CSS oculto.
- [ ] Imagens externas: allowlist HTTPS explícita em `next.config.ts`; sem fetch arbitrário durante request, SVG inline não confiável ou domínio Vercel copiado.
- [ ] `markdown/footnotes.tsx`: notas GFM numeradas, IDs únicos prefixados, backlinks com nomes acessíveis e scroll margin consistente.
- [ ] `markdown/thematic-break.tsx`: separador hairline com margem editorial; suportar nós CommonMark/GFM restantes ou rejeitar explicitamente antes da publicação.
- [ ] Extensões não padrão: matemática, Mermaid, vídeo/iframe e MDX não executam automaticamente; conteúdo real que dependa delas exige decisão de suporte no checklist antes de publicar.

### 12.10 SEO técnico e dados estruturados

- [ ] `metadata.ts`: helper blog separado de `pageMetadata` institucional; artigo usa Open Graph `article`, sem regressão do tipo `website` nas outras páginas.
- [ ] Metadata artigo: título SEO → título editorial, descrição SEO → excerpt; canonical absoluto, idioma, autores, published/modified time, seção e tags coerentes com o conteúdo visível.
- [ ] Metadata: imagem OG → cover → `siteSeo.image`; URLs absolutas, alt e dimensões verdadeiras; Twitter `summary_large_image` com a mesma identidade editorial.
- [ ] `schema.ts`: canonical externo permitido somente como decisão editorial explícita; artigo com canonical externo não entra no sitemap local como URL preferencial.
- [ ] Galeria/categoria/paginação: títulos e descrições próprios, canonical por página; nunca canonicalizar páginas 2+ para primeira página nem usar keywords como promessa de ranking.
- [ ] `structured-data.ts`: grafo `Blog`, `CollectionPage` e `ItemList` na galeria; posições/URLs correspondem exclusivamente aos posts exibidos naquela página.
- [ ] Artigo JSON-LD: `BlogPosting`, `headline`, `description`, `image`, `datePublished`, `dateModified`, `author`, `publisher`, `mainEntityOfPage`, `inLanguage`, `wordCount` e `isPartOf`.
- [ ] Publisher: reutilizar identidade/URL Paragan e logo público real; `Person` para pessoa, `Organization` para autoria institucional explícita; sem perfis `sameAs` inventados.
- [ ] JSON-LD: serializar escapando `<` como em `page-structured-data.tsx`; bloquear quebra de `<script>` em título, texto ou Front Matter.
- [ ] `src/app/sitemap.ts`: incluir blog, posts indexáveis, categorias e páginas válidas; `lastModified` de atualização/publicação real, nunca `new Date()` por request.
- [ ] `src/app/robots.ts` + metadata: preservar regras existentes; conteúdo `noindex` excluído de sitemap, sem bloquear por robots.txt a leitura da diretiva.
- [ ] `src/app/blog/feed.xml/route.ts`: RSS 2.0 estático com título, excerpt, URL, GUID, autor e datas reais; XML escapado, Content-Type correto e link RSS funcional na toolbar.
- [ ] Feed: listar somente posts publicados indexáveis com canonical local; autodiscovery em metadata da área blog e canal apontando à URL canônica da galeria.
- [x] SEO: HTML inicial contém título, autores, data, texto completo e links de navegação; galeria/categoria/paginação rastreáveis sem JavaScript.

### 12.11 Performance, fronteiras e segurança

- [ ] `repository.ts`: importar JSON apenas no servidor com `server-only`; páginas, metadata, sitemap e feed compartilham leitura/memoização, sem round-trip HTTP interno.
- [ ] Client props: enviar somente projeções necessárias a busca, seletor e cópia; nunca serializar todo o corpus/AST em provider ou props de uma galeria client.
- [x] Artigo: manter renderer e syntax highlighting server-side; ilhas client só para ações, sem transformar layout/blog inteiro em `use client`.
- [ ] Markdown integral para cópia: disponibilizar somente o documento publicado atual via rota estática `/blog/[slug]/source.md`, carregada sob demanda; drafts nunca acessíveis.
- [ ] `source.md/route.ts`: `text/markdown; charset=utf-8`, `X-Content-Type-Options: nosniff` e `X-Robots-Tag: noindex`; slug validado pelo repositório, sem path de filesystem do usuário.
- [ ] Assets: dimensões reservadas, lazy loading abaixo da dobra e preload somente para LCP real; não priorizar todos os avatares/cards.
- [ ] `next.config.ts`: avaliar qualidades adicionais 75/85 apenas para blog mantendo 100 atual; selecionar qualidade conforme mídia sem piorar screenshots existentes.
- [ ] Blog: conteúdo visível sem reveal obrigatório, sem novo Lenis, canvas/WebGL ou animação por parágrafo; reduced motion mantém leitura e navegação nativas.
- [ ] Orçamento: nenhuma biblioteca de parsing/Shiki no bundle client; índice de busca com alerta acima de 100KB gzip e medição da amostra real antes de otimização adicional.
- [ ] Metas de produção: LCP ≤2,5s, CLS ≤0,1 e INP ≤200ms quando mensuráveis; distinguir laboratório em dev de evidência real em produção.

### 12.12 Estados, acessibilidade e validação direcionada

- [ ] `blog-empty.tsx`: catálogo sem posts e categoria vazia tratada conforme contrato; mensagem editorial sem posts falsos e CTA de retorno útil.
- [ ] `src/app/blog/not-found.tsx`: slug/categoria/página ausente com retorno ao blog; status HTTP 404 real, sem soft-404 com artigo vazio.
- [ ] `src/app/blog/error.tsx`: erro inesperado com tentar novamente e retorno; nunca publicar stack trace, caminho local ou Front Matter bruto como mensagem.
- [ ] Loading: skeleton apenas nas transições realmente assíncronas de busca; não suspender texto estático atrás de spinner cosmético.
- [ ] Teclado: skip-link, categorias, busca, resultados, paginação, headings, dropdown e copiar acessíveis; foco não cortado por card/frame ou coberto pelo header.
- [ ] Temas: medir contraste AA 4,5:1 para corpo/metadados/código e 3:1 para elementos grandes/controles; foco visível e alvos de toque ≥44px.
- [ ] Responsividade: conferir 360/390/768/1024/1280/1440px, zoom 200%, tela baixa, título longo, múltiplos autores, tabela larga e URL/código extenso; sem scroll lateral global.
- [ ] `tests/blog/content.test.ts`: fixture YAML do pedido aceita; fonte integral preservada, datas/offsets, drafts/futuros, duplicatas, categorias e ordem de paginação verificadas.
- [ ] `tests/blog/markdown.test.ts`: CommonMark/GFM, títulos repetidos, links relativos, código literal, tabelas, imagens, listas/notas e HTML inválido cobertos por testes direcionados.
- [ ] `tests/blog/security.test.ts`: protocolos ofuscados, traversal, tags YAML, raw HTML ativo e payload `</script>` bloqueados sem apagar conteúdo silenciosamente.
- [ ] `tests/blog/seo.test.ts`: canonicals, metadata article, OG fallback, JSON-LD parseável, sitemap/feed e exclusão de drafts/noindex consistentes.
- [ ] `tests/blog/repository.test.ts`: 0/1/3/13+ posts, destaques, categorias e páginas sem duplicação/perda; página 1 normalizada e fora do limite em 404.
- [x] `package.json`: runner mínimo para testes direcionados via Node/tsx e React server render quando necessário; não adicionar suíte E2E inteira para validar o parser.
- [x] Verificação de implementação: `blog:check`, ESLint/Prettier dos arquivos alterados e `pnpm exec tsc --noEmit --incremental false`; registrar ruído preexistente sem ampliar escopo.
- [x] Navegador dev: comparar galeria/artigo com HTML de referência nos dois temas; validar categorias, busca, cópia, RSS, paginação, teclado e leitura sem JS.
- [ ] Aceite SEO: inspecionar HTML inicial e respostas 200/404/redirect das rotas; dados estruturados coerentes, nenhum draft em arquivo público e nenhum post dependente de hidratação.
- [ ] Encerramento: marcar somente checkboxes implementados; sem build fora de Docker, release ou deploy automático nesta fase de planejamento.
