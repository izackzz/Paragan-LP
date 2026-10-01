# Paragan LP — r2

## Fase 1 — Refinamento visual e conteúdo

- [x] `fluid-hover-highlight.tsx` + blocos contíguos: raio medido por item; uma divisória por contato.
- [x] `sections/*` + `public/assets/illustrations/`: usar `ArtPlaceholder` local e remover ilustrações externas.
- [x] `button.tsx` + landing: fundos visíveis, CTA platinado, tabs `rounded-md`, escala sem valores arbitrários e copy reforçada.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 3 — Correções finais de aceitação

- [x] `globals.css` + `site-header.tsx` + `card.tsx` + hero: CTA platinado, sem ghost e invisibilidade explícita ao cliente final.
- [ ] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 2 — Fechamento de aceitação

- [x] `use-fluid-hover.ts` + `fluid-group.tsx`: fallback de raio só para wrapper declarado.
- [x] `src/**/*.tsx`: substituir utilitários Tailwind com valores arbitrários por escala semântica ou token nomeado.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.
