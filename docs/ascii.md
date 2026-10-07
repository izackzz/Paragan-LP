# RenderAscii

## Gerar uma animação

Requisitos: Node/pnpm e `ffmpeg`/`ffprobe` disponíveis no terminal. Execute na raiz de `Paragan-LP`:

```bash
pnpm generate:ascii docs/refs/video/clover.mp4 --name clover --aspect 1/1
pnpm generate:ascii docs/refs/video/shark.mp4 --name shark --aspect 16/9
```

Para outro vídeo, use um caminho relativo ao terminal atual ou absoluto:

```bash
pnpm generate:ascii /caminho/animacao.mp4 --name animacao --aspect 16/9
```

- `--name`: chave usada na prop `render`. Sem esta opção, reutiliza a variante do mesmo output ou usa o nome do vídeo sem extensão.
- `--aspect`: proporção do conteúdo gerado. Sem esta opção, preserva a proporção de origem (reconhece 1:1 e 16:9). O crop usa o limite do conteúdo útil de **todos os frames**, com margem de segurança, sem zoom variável. Expande a moldura até a proporção solicitada; adiciona padding se necessário, sem cortar conteúdo ou esticar a imagem.
- O JSON contém uma única grade de pixels quadrados, com **96 amostras no menor eixo**: **1:1 → 96×96**, **16:9 → 171×96**, **9:16 → 96×171**. Arredondamento do eixo maior pode variar a proporção em menos de uma célula.
- No ASCII, essa grade é reamostrada por área uma vez para as métricas monospace originais: **1:1 → 96×48**, **16:9 → 171×48**, **9:16 → 96×85**. Fontes, espaçamentos e escala uniforme permanecem iguais.
- No halftone, a grade permanece quadrada. O maior dot tem diâmetro `1x`; a distância entre centros é `2x`, garantindo gap horizontal/vertical mínimo de `1x`. Dots menores aumentam o espaço livre.
- FPS: preserva a taxa original até 30 FPS. Luminância, inversão do fundo e threshold são calculados offline.
- Nomes de arquivos: letras, números, pontos, `_` e `-`, sem espaços. O caminho das pastas pode conter espaços se estiver entre aspas.

O comando grava `public/ascii/<nome-do-video>.json` e atualiza automaticamente o objeto `renderAsciiVariants` em `src/components/ascii/render-ascii-variants.ts`. O formato v2 usa `{ version: 2, encoding: 'trimmed-rows', columns, rows, frames }`. Cada linha é `null` (vazia) ou `[colunaInicial, intensidades]`, sem padding nas bordas. As intensidades são `1–6` ou espaço, mapeadas para `.` / `:` / `-` / `=` / `+` / `X` no ASCII. Os dois modos compartilham o mesmo JSON; não há cópia separada por modelo.

JSONs legados `Array<string>` continuam compatíveis. A conversão para v2 ocorre ao regenerar cada vídeo. Apenas `clover.mp4` foi regenerado nesta rodada.

Repetir o comando **sobrescreve** o JSON e atualiza a variante, sem duplicá-la. Vídeos com o mesmo nome-base, mesmo em pastas diferentes, compartilham o mesmo output. Usar uma chave existente em `--name` troca a fonte dessa variante.

O registro é gerado automaticamente: não edite seu objeto manualmente. Inclua no versionamento tanto os JSONs quanto o `.ts` atualizado. Não há geração durante build ou no navegador.

## Usar no React/Next.js

```tsx
import { RenderAscii } from '@/components/ascii/render-ascii';

<RenderAscii render="clover" model="halftone" aspect="1/1" className="text-primary" />
<RenderAscii render="shark" model="ascii" className="max-w-lg text-brand" />
```

Após gerar a variante `animacao` do exemplo:

```tsx
<RenderAscii render="animacao" aspect="16/9" className="text-primary" />
```

`render` tem autocomplete baseado nas variantes geradas. `className` controla tamanho e cor (o canvas herda a cor CSS). `label` personaliza a descrição acessível.

`aspect` controla o **container**, não refaz o crop. O padrão é a proporção registrada no `.ts`. Se o container e a origem tiverem proporções diferentes, o conteúdo é centralizado com espaço livre, sem distorção. Para mudar o crop de verdade, regenere com `--aspect`.

O componente mantém DPR, resize, cleanup, pausa fora da viewport/aba oculta e frame estático com `prefers-reduced-motion`. Apenas o JSON da variante selecionada é carregado; nenhum vídeo é usado no frontend. Decodificação e reamostragem ocorrem uma vez; texturas ficam em um atlas compartilhado, e células sempre vazias não alocam sprites. Resize usa escala uniforme, sem deformar caracteres ou dots.

Teste direcionado: `node --test scripts/ascii-processing.test.mjs`.
