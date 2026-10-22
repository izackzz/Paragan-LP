# Paragan LP — r2

## Fase 9 — Refinar `/plataforma`

- [x] `plataforma/page.tsx` + capacidade editorial: índice local, artes proporcionais e argumentos em grade.
- [x] `plataforma.ts` + `page-structured-data.tsx`: copy, metadata e WebPage/BreadcrumbList coerentes.
- [x] `/plataforma`: ESLint, Prettier e `tsc --noEmit --incremental false`.
- [x] `/checkout`: jornada 2×2, editorial com arte proporcional, breadcrumb e SEO específico.
- [x] `/financeiro`: composição 1:2, editorial com pontos full-width, breadcrumb e FAQ estruturado.
- [x] `/integracoes`: acesso 2×2, editoriais 1:1 com pontos full-width, breadcrumb e FAQ estruturado.

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
