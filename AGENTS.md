<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## BoringUI — consulta local obrigatória

- Não usar `@boringui/mcp-server`: o pacote retornou 404 no npm. A referência é o registry oficial, não um MCP.
- Começar por `docs/refs/boringui/README.md` e buscar nome/descrição em `docs/refs/boringui/registry.json`; não carregar o catálogo inteiro no contexto.
- Antes de escolher um componente, ler `docs/refs/boringui/docs/<nome>.md` e `docs/refs/boringui/registry/<nome>.json`. O JSON contém implementação em `files[].content`, dependências, CSS e tokens; não inventar props pela aparência do preview.
- Consultar `docs/refs/boringui/docs/interface-cheat-sheet.md`, `motion.md`, `sizes.md`, `surfaces.md` e `typography.md` conforme a mudança. Texto extraído pode omitir exemplos interativos; confirmar a API no código do JSON.
- Escolher por necessidade: FAQ → `accordion`; ações → `button`; métricas → `number-flow`/`blur-number`; alternância de conteúdo → `tabs`/`tabs-subtle`; feedback → `banner`/`toast`; cópia → `input-copy`; formulários → `input-group`/`select`/`checkbox-group`. Consultar o catálogo para os demais. Não adicionar componentes sem função na LP.
- Conferir `src/components/ui`, `package.json` e `components.json` antes de instalar. A LP usa `base-nova`: preferir Base UI quando houver variante em `registry/base/<nome>.json`. O catálogo nomeia essas variantes `<nome>-base`, mas a URL publicada é `/r/base/<nome>.json` (não `/r/<nome>-base.json`, que retorna 404). Não misturar APIs Radix/Base UI nem sobrescrever componentes locais automaticamente.
- `components.json` já registra `@boringui`. Quando a tarefa exigir instalação, usar `pnpm dlx shadcn@latest add @boringui/<nome>` para o item padrão, ou a URL Base UI documentada, após conferir o item correspondente. Revisar dependências transitivas, CSS e providers; não instalar o catálogo inteiro.
- Respeitar `DESIGN.md`, tokens e fontes da LP. Animação de peso exige fonte variável compatível (a documentação recomenda Inter); preservar foco, teclado, contraste e `prefers-reduced-motion`. Manter client boundaries mínimas.
- Snapshot não é código instalado nem licença para copiar sem conferir os termos upstream. Atualizar quando necessário com `python3 scripts/sync-boringui.py`; conferir data e hashes em `manifest.json`.
