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
- No halftone, a grade de exibição se adapta ao tamanho real do canvas. Por padrão, o maior dot tem diâmetro de **3px CSS**, com pitch de **6px** e gap mínimo de **3px**. Aumentar o canvas adiciona células, sem ampliar os dots. DPR aumenta a resolução física do canvas, não o tamanho visual das células.
- No modo `pixels`, cada quadrado tem **6px CSS**, pitch de **8px** e gap de **2px**. O tamanho é fixo; a intensidade controla a opacidade.
- FPS: preserva a taxa original até 30 FPS. Luminância, inversão do fundo e threshold são calculados offline.
- Nomes de arquivos: letras, números, pontos, `_` e `-`, sem espaços. O caminho das pastas pode conter espaços se estiver entre aspas.

O comando grava `public/ascii/<nome-do-video>.json` e atualiza automaticamente o objeto `renderAsciiVariants` em `src/components/ascii/render-ascii-variants.ts`. O formato v2 usa `{ version: 2, encoding: 'trimmed-rows', columns, rows, frames }`. Cada linha é `null` (vazia) ou `[colunaInicial, intensidades]`, sem padding nas bordas. As intensidades são `1–6` ou espaço, mapeadas para `.` / `:` / `-` / `=` / `+` / `X` no ASCII. Todos os modos compartilham o mesmo JSON; não há cópia separada por modelo.

JSONs legados `Array<string>` continuam compatíveis. A conversão para v2 ocorre ao regenerar cada vídeo. Apenas `clover.mp4` foi regenerado nesta rodada.

Repetir o comando **sobrescreve** o JSON e atualiza a variante, sem duplicá-la. Vídeos com o mesmo nome-base, mesmo em pastas diferentes, compartilham o mesmo output. Usar uma chave existente em `--name` troca a fonte dessa variante.

O registro é gerado automaticamente: não edite seu objeto manualmente. Inclua no versionamento tanto os JSONs quanto o `.ts` atualizado. Não há geração durante build ou no navegador.

## Usar no React/Next.js

```tsx
import { RenderAscii } from '@/components/ascii/render-ascii';

<RenderAscii render="clover" model="halftone" aspect="1/1" className="text-primary" />
<RenderAscii render="clover" model="pixels" className="size-135 text-primary" />
<RenderAscii render="shark" model="ascii" className="max-w-lg text-brand" />
```

Após gerar a variante `animacao` do exemplo:

```tsx
<RenderAscii render="animacao" aspect="16/9" className="text-primary" />
```

`render` tem autocomplete baseado nas variantes geradas. `className` controla tamanho e cor (o canvas herda a cor CSS). `label` personaliza a descrição acessível.

`aspect` controla o **container**, não refaz o crop. O padrão é a proporção registrada no `.ts`. `fit="contain"` mantém todo o conteúdo centralizado, com espaço livre quando necessário. `fit="cover"` preenche o container, cortando o excedente sem esticar a imagem. Para mudar o crop dos dados, regenere com `--aspect`.

`cellSize` define o pitch em pixels CSS para `halftone`/`pixels` (mínimo 2). O gap é metade do pitch no halftone e um quarto no pixels. O padrão não depende de `size-135`, fullscreen ou DPR.

Exemplo de fundo de seção:

```tsx
<section className="relative isolate min-h-screen overflow-hidden">
  <RenderAscii
    render="clover"
    model="pixels"
    fit="cover"
    decorative
    className="pointer-events-none absolute inset-0 -z-10 h-full w-full text-primary"
  />
  {/* Conteúdo da seção */}
</section>
```

O componente mantém DPR, resize, cleanup, pausa fora da viewport/aba oculta e frame estático com `prefers-reduced-motion`. Apenas o JSON da variante selecionada é carregado; nenhum vídeo é usado no frontend. Halftone/pixels usam um shader WebGL: um draw call por frame, uma textura de intensidades reutilizada e nenhuma alocação de sprites ou cópia dos frames ao redimensionar. O ASCII mantém Pixi, atlas monospace e sprites apenas nas células utilizadas.

Novas células reamostram a imagem com interpolação bilinear, mantendo a forma e os dots nítidos. Isso **não recupera detalhes descartados na geração do JSON**: a resolução de conteúdo continua limitada às amostras do vídeo convertido.

Teste direcionado: `node --test scripts/ascii-processing.test.mjs`.
