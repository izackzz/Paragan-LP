# Paragan LP — r2

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
