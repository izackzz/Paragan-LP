# RenderAscii

## Gerar uma animação

Requisitos: Node/pnpm e `ffmpeg`/`ffprobe` disponíveis no terminal. Execute na raiz de `Paragan-LP`:

```bash
pnpm generate:ascii docs/refs/video/ascii-clover.mp4 --name clover --aspect 1/1
pnpm generate:ascii docs/refs/video/trevo.mp4 --name trevo --aspect 16/9
```

Para outro vídeo, use um caminho relativo ao terminal atual ou absoluto:

```bash
pnpm generate:ascii /caminho/animacao.mp4 --name animacao --aspect 16/9
```

- `--name`: chave usada na prop `render`. Sem esta opção, reutiliza a variante do mesmo output ou usa o nome do vídeo sem extensão.
- `--aspect`: proporção do conteúdo gerado. Faz crop central se necessário, sem esticar o vídeo. Sem esta opção, preserva a proporção de origem (reconhece 1:1 e 16:9).
- O **menor eixo visual** tem resolução fixa, independentemente da resolução de entrada. Em paisagem (`aspect >= 1`), são **48 linhas** e `colunas = round(96 × aspect)`. Em retrato (`aspect < 1`), são **96 colunas** e `linhas = round(48 / aspect)`. A equivalência 96 colunas/48 linhas compensa a célula monospace, duas vezes mais alta que larga.
- Exemplos: **1:1 → 96×48**, **16:9 → 171×48**, **4:3 → 128×48**, **9:16 → 96×85**. O eixo maior cresce proporcionalmente, mantendo a mesma densidade visual no eixo menor.
- FPS: preserva a taxa original até 30 FPS. Luminância, inversão do fundo e threshold são calculados offline.
- Nomes de arquivos: letras, números, pontos, `_` e `-`, sem espaços. O caminho das pastas pode conter espaços se estiver entre aspas.

O comando grava `public/ascii/<nome-do-video>.json` e atualiza automaticamente o objeto `renderAsciiVariants` em `src/components/ascii/render-ascii-variants.ts`. Os JSONs continuam sendo apenas `Array<string>`; metadados ficam no `.ts`.

Repetir o comando **sobrescreve** o JSON e atualiza a variante, sem duplicá-la. Vídeos com o mesmo nome-base, mesmo em pastas diferentes, compartilham o mesmo output. Usar uma chave existente em `--name` troca a fonte dessa variante.

O registro é gerado automaticamente: não edite seu objeto manualmente. Inclua no versionamento tanto os JSONs quanto o `.ts` atualizado. Não há geração durante build ou no navegador.

## Usar no React/Next.js

```tsx
import { RenderAscii } from '@/components/ascii/render-ascii';

<RenderAscii render="clover" aspect="1/1" className="text-primary" />
<RenderAscii render="trevo" className="max-w-lg text-brand" />
```

Após gerar a variante `animacao` do exemplo:

```tsx
<RenderAscii render="animacao" aspect="16/9" className="text-primary" />
```

`render` tem autocomplete baseado nas variantes geradas. `className` controla tamanho e cor (o canvas herda a cor CSS). `label` personaliza a descrição acessível.

`aspect` controla o **container**, não refaz o crop. O padrão é a proporção registrada no `.ts`. Se o container e a origem tiverem proporções diferentes, o conteúdo é centralizado com espaço livre, sem distorção. Para mudar o crop de verdade, regenere com `--aspect`.

O componente mantém DPR, resize, cleanup, pausa fora da viewport/aba oculta e frame estático com `prefers-reduced-motion`. Apenas o JSON da variante selecionada é carregado; nenhum vídeo é usado no frontend.
