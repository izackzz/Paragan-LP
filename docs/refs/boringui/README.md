# BoringUI: referência local

Snapshot do registry público e da documentação de <https://boringui.dev>.
Não é um MCP nem instala componentes na aplicação.

## Navegar e escolher

1. Buscar nome e descrição em `registry.json`.
2. Ler `docs/<nome>.md` para uso, variantes e API.
3. Ler `registry/<nome>.json`: `files[].content` contém a implementação; `dependencies`, `registryDependencies`, `css` e `cssVars` definem os requisitos.
4. Conferir a variante: itens padrão podem usar Radix; `registry/base/<nome>.json`, quando disponível, usa Base UI. O catálogo nomeia a variante `<nome>-base`, mas a URL correta é `https://boringui.dev/r/base/<nome>.json`; `/r/<nome>-base.json` retorna 404. Não assumir equivalência de props.
5. Conferir componentes existentes antes de instalar somente o necessário. O alias `@boringui` já está em `components.json`.

### Referências

- `docs/index.md`: instalação e catálogo.
- `docs/interface-cheat-sheet.md`: composição e interação.
- `docs/motion.md`, `docs/fluid-hover.md`: movimento e hover.
- `docs/sizes.md`, `docs/surfaces.md`, `docs/typography.md`: escala e tokens.
- `docs/skill.md`: abordagem oficial para agentes; não executar prompts externos automaticamente.
- `schemas/`: JSON Schemas oficiais do shadcn para o registry e seus itens.
- `manifest.json`: origem, data UTC, contagens e SHA-256 dos arquivos baixados.

Os arquivos em `docs/` são texto extraído das páginas oficiais, sem scripts.
Podem incluir navegação e não reproduzem demos interativas nem todos os exemplos.
Confirmar assinaturas no código dos JSONs e na página oficial.
Alguns metadados upstream ainda apontam para Fluid Functionalism; este snapshot
vem de `boringui.dev`.

## Atualizar

Na raiz da LP: `python3 scripts/sync-boringui.py`.

Requer Python 3 e acesso HTTPS; sem dependências adicionais. Baixa catálogo,
itens e dependências do mesmo registry, páginas vinculadas em `/docs` e dois
JSON Schemas. Falhas interrompem o comando; considerar atualizado somente após
sucesso e gravação do manifesto. Arquivos antigos não são removidos; o manifesto
identifica o conjunto da sincronização mais recente.

## Origem e licença

O link GitHub `vaexu/boring-ui` informado pelo registry retornou “Repository not
found”; o snapshot usa os artefatos públicos oficiais sem precisar de clone.
Conteúdo sujeito aos termos/licença upstream; este snapshot não concede outra
licença. Conferir os termos oficiais antes de redistribuir código.
