# Paragan Landing — guia de design e construção

> Referência da implementação existente em `Paragan-LP`, registrada em 08/10/2026. Este documento descreve a identidade da homepage e estabelece como construir componentes e páginas integradas sem redesenhá-la.
>
> **Atual** significa comportamento identificado no código. **Diretriz** significa regra para novas implementações; não implica que o recurso já exista. A leitura foi feita no checkout, sem inspeção visual em navegador ou certificação de acessibilidade.

## 1. Identidade e princípios

A linguagem é **editorial, técnica e modular**, com interações fluidas: uma página longa organizada como uma estrutura contínua, não como uma coleção de cartões flutuantes.

- Um eixo central delimitado por linhas verticais; seções conectadas por hairlines horizontais.
- Fundos neutros com matiz violeta discreto, vermelho-alaranjado de marca e âmbar de apoio.
- Grandes intervalos entre argumentos; densidade moderada dentro de cada módulo.
- Títulos de duas intensidades: afirmação principal forte, continuação em cor secundária.
- Grades sem gaps quando fazem parte da estrutura; cantos arredondados nos controles e frames internos.
- Motion curto e funcional nos controles; motion editorial mais lento na entrada de seções.
- Highlight compartilhado que viaja entre itens, em vez de vários cartões saltando ou ampliando.
- Demonstrações frontais do produto, arte ASCII/halftone e texturas de linhas diagonais.
- Áreas escuras locais em pontos de destaque, mesmo quando o tema global é claro.

**Não introduzir:** estética de dashboard na página de marketing, gradientes de fundo multicoloridos, sombras grandes em todos os cards, ícones de famílias aleatórias, títulos extrabold, escala/tilt em hover, CTAs brilhantes em cada linha ou nova paleta por página.

## 2. Fontes de verdade

| Assunto | Arquivo |
| --- | --- |
| Tokens, temas, frame, stripes, bordas brilhantes | `src/app/globals.css` |
| Fontes locais, idioma, tema inicial, provider global | `src/app/layout.tsx` |
| Composição da homepage | `src/app/page.tsx` |
| Classes editoriais compartilhadas | `src/components/landing/styles.ts` |
| Marca, CTA, índice, heading, imagem de demonstração | `src/components/landing/primitives.tsx` |
| Header e footer | `src/components/landing/site-header.tsx`, `site-footer.tsx` |
| Scroll e política de reduced motion | `src/components/landing/experience-provider.tsx` |
| Entrada editorial | `src/components/landing/reveal.tsx` |
| Grupos fluidos de conteúdo | `src/components/landing/fluid-group.tsx` |
| Medição e resolução de proximidade | `src/hooks/use-fluid-hover.ts` |
| Overlay fluido compartilhado | `src/components/fluid-hover-highlight.tsx` |
| Tempos de spring | `src/lib/springs.ts` |
| Primitivos composicionais | `src/components/ui/` |
| Densidade, geometria, superfícies | `src/lib/size-context.tsx`, `shape-context.tsx`, `surface-context.tsx`, `surface-classes.ts` |
| Conteúdo e tradução | `src/i18n/index.ts`, `src/i18n/messages/pt-BR.ts` |
| Links, numeração e configuração de apresentação | `src/config/site.ts` |
| Arte da marca e ícones próprios | `src/components/assets/` |
| Renderização ASCII | `src/components/ascii/` |

Em caso de diferença entre este registro e uma alteração posterior, conferir esses arquivos e atualizar o guia. Não copiar tokens para um segundo stylesheet.

## 3. Sistema de cores

### 3.1 Política de uso

Os valores canônicos são **OKLCH**, declarados como variáveis CSS e expostos ao Tailwind 4 por `@theme inline`. Usar classes semânticas como `bg-background`, `text-foreground-3`, `border-border`, `bg-hover`, `text-brand`.

Aplicar transparência no uso (`bg-card/40`, `bg-background/90`, `border-border/60`) sem criar novas cores para cada contexto. `--hover` e `--active` já contêm alpha: a opacidade adicional multiplica essa transparência.

### 3.2 Paleta principal atual

| Token | Claro | Escuro | Papel |
| --- | --- | --- | --- |
| `background` | `oklch(0.985 0.004 305)` | `oklch(0.095 0.046 305)` | Canvas |
| `foreground` | `oklch(0.22 0.028 305)` | `oklch(0.97 0.006 305)` | Informação principal |
| `foreground-2` | `oklch(0.34 0.024 305)` | `oklch(0.84 0.012 305)` | Texto secundário forte |
| `foreground-3` | `oklch(0.44 0.02 305)` | `oklch(0.68 0.016 305)` | Descrições e continuação de títulos |
| `foreground-4` | `oklch(0.49 0.018 305)` | `oklch(0.56 0.016 305)` | Informação terciária |
| `card` | `oklch(1 0 0)` | `oklch(0.175 0.038 305)` | Mídia e painéis |
| `border` | `oklch(0.85 0.012 305)` | `oklch(0.34 0.028 305)` | Estrutura e separadores |
| `input` | `oklch(0.62 0.018 305)` | `oklch(0.44 0.024 305)` | Token disponível; campos atuais usam `border-accent` |
| `accent-1` / `brand` | `oklch(0.6299 0.2432 31)` | Igual | Marca, índices, foco |
| `accent-2` | `oklch(0.7652 0.1752 62.57)` | Igual | Ênfase âmbar, rótulos |
| `success` | `oklch(0.46 0.13 148)` | `oklch(0.74 0.17 148)` | Feedback positivo |

`primary` e `destructive` usam atualmente a mesma fórmula: `color-mix(in oklab, var(--accent-1) 92%, black)`. Erro não pode ser comunicado apenas por essa cor: ela também representa a marca.

### 3.3 Aliases semânticos

- `primary-foreground`: branco; conteúdo sobre ação primária.
- `card-foreground`, `popover-foreground`, `secondary-foreground`, `accent-foreground`: informação sobre a superfície correspondente.
- `muted` / `secondary`: `base-3-700` — `oklch(0.94 0.008 305)` no claro e `oklch(0.215 0.034 305)` no escuro.
- `muted-foreground`: equivalente visual a `foreground-3`.
- `accent`: `surface-active` — `oklch(0.91 0.012 305)` no claro e `oklch(0.255 0.03 305)` no escuro.
- `popover`: branco no claro; `oklch(0.215 0.034 305)` no escuro.
- `ring` / `focus-ring`: `accent-1`.
- `destructive-light`: `oklch(0.95 0.025 31)` no claro; `oklch(0.2 0.08 31)` no escuro.
- `overlay`: canais `0 0 0` no claro e `255 255 255` no escuro; não é sozinho uma declaração de cor completa.

### 3.4 Estados cromáticos

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `hover` | `oklch(0.22 0.028 305 / 0.06)` | `oklch(1 0 0 / 0.06)` | Preview transitório |
| `active` | `oklch(0.22 0.028 305 / 0.1)` | `oklch(1 0 0 / 0.1)` | Ênfase de estado |
| `selected` | `oklch(0.88 0.016 305)` | `oklch(0.4 0.02 305)` | Token de seleção disponível |

Não assumir que todo componente selecionado usa `bg-selected`: `Card` utiliza `bg-active`; tabs utilizam um indicador de superfície; interesses do formulário utilizam variante primária e borda própria.

### 3.5 Escala de superfícies

| Nível | Claro | Escuro |
| --- | --- | --- |
| 1 | `oklch(0.97 0.006 305)` | `oklch(0.135 0.042 305)` |
| 2 | `card` | `card` |
| 3 | `base-3-700` | `base-3-700` |
| 4 | `surface-active` | `surface-active` |
| 5 | `oklch(0.88 0.014 305)` | `oklch(0.3 0.027 305)` |
| 6 | `oklch(0.85 0.016 305)` | `oklch(0.35 0.024 305)` |
| 7 | `oklch(0.82 0.018 305)` | `oklch(0.4 0.02 305)` |
| 8 | `oklch(0.79 0.02 305)` | `oklch(0.45 0.018 305)` |

**Diretriz:** usar principalmente canvas, card e níveis baixos. Reservar níveis altos para diferenças funcionais de camada; não empilhar oito fundos numa seção. A escala escurece no claro e clareia no escuro: não interpretar o número como uma luminosidade universal.

Os tokens `chart-*` e `sidebar-*` existem, mas não definem a linguagem editorial da landing. O gradiente platinum também está disponível, sem ser a aparência padrão dos CTAs atuais: início `oklch(0.94 0.008 260)`, meio `oklch(0.78 0.018 260)`, fim `oklch(0.98 0.004 260)`, texto `oklch(0.22 0.025 260)`.

## 4. Temas e áreas de contraste

**Atual:** dois temas, `light` e `dark`. O seletor visual é a classe `.dark`; `data-theme` registra o estado, mas não substitui essa classe no CSS.

- Sem preferência manual, seguir `prefers-color-scheme`.
- Persistir a escolha em `localStorage` na chave `paragan-lp-theme`.
- O script de tema roda no `<head>` antes da pintura.
- `data-theme-preference` distingue escolha `manual` de `system`.
- `ThemeToggle` acompanha mudanças do sistema e sincronização entre abas.
- Controle, contato e footer possuem `.dark` local e permanecem escuros no tema claro.
- Popovers em portal não herdam necessariamente a `.dark` de uma seção. O contato aplica `className="dark"` em `SelectContent` explicitamente.

**Diretriz:** novas páginas herdam esse mecanismo; não criar um provider de tema concorrente, novas chaves de armazenamento ou cores fixas para forçar dark. Usar áreas escuras como mudança editorial de assunto, não em todos os cards.

## 5. Tipografia e hierarquia

### 5.1 Famílias e pesos reais

| Família | Token / classe | Pesos carregados | Aplicação |
| --- | --- | --- | --- |
| Neue Galano | `--font-galano` / `font-sans` | 400, 500, 600 | Corpo, labels, navegação |
| Neue Faktum | `--font-faktum` / `font-display` | 400, 500 | Headings e identidade editorial |
| Neue Rational Mix | `--font-rational-mix` / `font-mono` | Regular | Índices e informação técnica |

Fontes WOFF2 locais em `public/fonts/`, carregadas por `next/font/local`. O documento usa `tabular-nums` e antialiasing. Recursos `ss01` e `ss02` são habilitados globalmente; headings/display também usam `ss03`.

Não pedir peso 700/800 à Faktum sem carregar o arquivo correspondente. Não substituir as fontes por uma Google Font em páginas internas.

### 5.2 Escala editorial aplicada

Valores em px abaixo pressupõem raiz de 16px; a implementação usa rem e utilitários.

| Papel | Classes atuais | Resultado de referência |
| --- | --- | --- |
| Hero H1 | `text-3xl font-medium tracking-tight text-balance lg:text-5xl/12` | 30px mobile; 48px / 48px em `lg` |
| Heading de seção | `text-3xl leading-tight font-medium tracking-tight md:text-4xl` | 30px → 36px |
| Argumento de módulo plataforma | `font-display text-2xl/7` | 24px / 28px |
| Título de painel | `text-3xl leading-tight tracking-tighter` | 30px |
| Título de solução/formulário | `text-base` ou `text-lg font-medium` | 16–18px |
| Título de card | `text-sm leading-snug font-medium tracking-tight` | 14px |
| Descrição editorial | `text-sm leading-relaxed md:text-base` | 14px → 16px |
| Descrição hero | `text-base leading-7 md:text-lg` | 16px → 18px |
| Corpo de card / FAQ | `text-sm leading-relaxed` ou `leading-7` | 14px |
| Micro editorial | `font-display text-xs leading-relaxed font-normal tracking-wider uppercase` | 12px |
| Metadado compacto | `text-caption` | 11px; não usar para corpo longo |
| Texto de controle da biblioteca | `text-control` | 13px |

### 5.3 Hierarquia de conteúdo

1. **Mensagem principal:** `foreground`, título curto, peso 500.
2. **Continuação da mensagem:** `foreground-3` ou `muted-foreground`, mesmo tamanho, peso compatível.
3. **Explicação:** corpo menor, `muted-foreground`, leitura confortável.
4. **Contexto e navegação:** índice, eyebrow, legenda; acento apenas quando tem função.

Hero: título em duas linhas e descrição limitada a `max-w-2xl`. `SectionHeading`: bloco `max-w-2xl`, descrição `max-w-xl`, margem de 20px entre título e descrição e eyebrow 24px acima do título.

**Diretrizes:** um H1 por página; H2 para seções; H3 para argumentos subordinados. Não tornar todo título âmbar. Não usar caixa alta em parágrafos. Aplicar `text-balance` em chamadas curtas, não justificar texto. O `CardTitle` atual renderiza `span`: quando necessário, criar o heading semântico explicitamente, sem assumir que o slot é H3.

## 6. Layout, largura e ritmo

### 6.1 Frame central

`landing-frame` é a unidade de alinhamento de header, seções e footer:

| Viewport | Largura do frame | Margem externa por lado |
| --- | --- | --- |
| Base | `calc(100% - 1.5rem)` | 12px |
| ≥ 48rem (`md`) | `calc(100% - 2.5rem)` | 20px |
| ≥ 80rem (`xl`) | `calc(100% - 5rem)` | 40px |

Largura máxima **75rem / 1200px**, centralizada, com bordas laterais de 1px. Acima do limite, as margens crescem simetricamente.

As faixas `.landing-side-stripes` são fixas, sem eventos de ponteiro, `z-60`, e acompanham a largura externa do frame, incluindo seu limite máximo. Não colocá-las dentro de um container com largura diferente.

### 6.2 Padding editorial compartilhado

`padding` em `landing/styles.ts`:

| Faixa | Horizontal | Superior | Inferior |
| --- | --- | --- | --- |
| Base | 20px (`px-5`) | 48px | 48px |
| `md` | 28px (`px-7`) | 64px | 64px |
| `xl` | 40px (`px-10`) | 88px (`pt-22`) | 72px (`pb-18`) |

Existem módulos que usam `p-6 md:p-8` (24 → 32px), mídia `md:p-10` (40px) e plataforma `p-6 lg:p-12` (24 → 48px). Essas variações pertencem ao tipo de bloco, não autorizam espaçamento aleatório.

### 6.3 Escala operacional de espaços

| Espaço | Uso típico |
| --- | --- |
| 4–8px | Ícone/label, opções compactas, CTAs irmãos |
| 12–16px | Grupos internos, passos, relações próximas |
| 20px | Campos de formulário; separação heading/descrição |
| 24px | Padding base de painéis; eyebrow/título |
| 28–32px | Conteúdo desktop intermediário |
| 40–48px | Mídia e módulos de demonstração |
| 56–64px | Heading até um conjunto principal; respiro editorial |
| 72–88px | Intervalo de seção em desktop amplo |

### 6.4 Grades e proporções

- Cards conectados: `gap-0`, linha compartilhada, borda externa da seção.
- Três benefícios: uma coluna no mobile, três em `md`.
- Conteúdo + mídia: grade de três colunas em `md`, texto 1/3 e mídia 2/3.
- Soluções: mídia 2/3, texto 1/3, alternância de lado em desktop.
- FAQ: duas colunas em `md`.
- Contato: duas colunas em `lg`.
- Plataforma: pares em duas colunas apenas em `lg`; uma coluna abaixo disso.
- Implantação: 1 coluna → 2 em `md` → 4 em `xl`.

Não fixar altura de cartões editoriais para compensar textos diferentes. A plataforma usa linhas `auto auto`; os módulos se dimensionam pelo conteúdo e preservam a mídia horizontal abaixo do header.

## 7. Densidade dos componentes

A landing é **arejada no macro e precisa no micro**. Não confundir texto de 14px com falta de espaço.

| Contexto | Densidade / regra |
| --- | --- |
| Hero | Poucos elementos, grande respiro, dois CTAs no máximo |
| Heading de seção | Um argumento, uma continuação e uma descrição opcional |
| Card editorial | 20–32px de padding, título 14px, descrição 14px |
| Módulo plataforma | 24–48px, argumento 24px, mídia larga |
| Lista de benefícios | Linhas separadas, padding vertical 14–20px |
| Navegação | Links 14px; alvo principal ≥ 44px |
| FAQ | Trigger ≥ 64px; resposta 14px / 28px |
| Formulário | Gap 20px entre campos; 8px label/campo; campo 44px |
| Footer | Links 14px em alvos ≥ 44px; metadados 12px |

**Atual na biblioteca:** `SizeProvider` oferece `default` e `compact`. Default: controle 36px, texto 13px, ícone 16px, gap 8px. Compact: controle 28px, texto 12px, ícone 14px, gap 4px. Essa é a escala dos primitivos, não a altura desejada para todos os alvos públicos da landing; o formulário e a navegação ampliam controles explicitamente.

**Diretriz:** reservar `compact` para pequenas áreas técnicas. Não envolver uma página de marketing inteira em densidade compacta. Em touch, ampliar alvos a pelo menos 44×44px; os tamanhos `icon-sm`, `icon`, `icon-lg` e `CardButton` da biblioteca não garantem esse tamanho sozinhos.

## 8. Bordas, geometria e elevação

### 8.1 Hairlines e propriedade das bordas

- Estrutura editorial: `1px solid var(--border)`.
- Divisores internos da biblioteca Card: `bg-border/60`.
- Uma aresta compartilhada deve ter **um único proprietário**: não somar a borda direita do card A com a esquerda do B.
- No mobile, divisórias entre colunas viram separadores horizontais.
- Em grades alternadas, ajustar `border-l`, `border-r` e `order` em conjunto.
- Não usar `divide-*` sem verificar as bordas que os componentes já desenham.

`CardGroup` suprime alguns divisores junto ao item hovered/selected. A plataforma usa regras próprias em `.platform-pair` para dividir os módulos por viewport. `.bento-group` tem regras disponíveis para sete tiles, mas não é a composição da plataforma atual: não tratá-la como grade obrigatória da homepage.

### 8.2 Raios reais

Base `--radius: 0.625rem` (10px):

| Token / classe | Raio |
| --- | --- |
| `rounded-sm` | 6px |
| `rounded-md` | 8px |
| `rounded-input` | 8px fixos |
| `rounded-lg` | 10px |
| `rounded-xl` | 14px |
| `rounded-2xl` | 18px |
| `rounded-3xl` | 22px |
| `rounded-4xl` | 26px |
| `rounded-pill` | 20px fixos |
| `rounded-pill-focus` | 22px fixos |
| `rounded-none` | 0 |
| `rounded-full` | Cápsula/círculo conforme dimensões |

`rounded-xs` é utilizado em pequenas mídias e links focados; não é redefinido pelo mapa de raios do projeto. `rounded-pill` não é sinônimo de `rounded-full`.

**Uso aplicado:** borda externa de seção e grades contínuas quadradas; controles e links aproximadamente 8px; painéis e mídia composta 14px; eyebrows em cápsula. A biblioteca tem `ShapeProvider`, mas o layout atual não o monta. `useShape()` tem fallback `pill`; várias composições da landing sobrescrevem isso com `rounded-none` ou `rounded-md`.

Não inferir um raio CSS a partir de `bgRadius` do contexto: há números auxiliares legados que não coincidem com todos os tokens CSS. Para o highlight, usar o raio computado do elemento medido. Comentários sobre superellipse na biblioteca não demonstram que o efeito está aplicado no CSS atual.

### 8.3 Frame de mídia

`Frame` compõe:

1. Container com `border-border`, padding `p-1.5` (6px).
2. Raio externo `calc(var(--radius) * 1.4 + 0.375rem + 1px)` — 21px na raiz padrão.
3. Container interno com `overflow-hidden rounded-xl border` — 14px.
4. `shiny` opcional aplica `frame-shiny` ao frame externo.

Preservar a relação **raio externo = raio interno + padding + borda**. Não repetir frames aninhados em cada imagem.

### 8.4 Sombras

No claro, `shadow-1` a `shadow-8` usam cor `oklch(0.22 0.028 305 / 0.12)` e deslocamento/blur: `1/2`, `2/4`, `4/8`, `8/16`, `12/24`, `16/32`, `24/48`, `32/64px`.

No escuro, a escala é reconstruída com contornos inset, highlights de topo e drops em camadas. Os highlights brancos variam entre 1% e 6%; `dm-drop` usa preto a 18%. Não substituir essa lógica por um glow branco genérico.

**Diretriz:** página e grids dependem de linhas e superfícies, não de sombra. Reservar elevação para overlays e casos funcionais. O select atual usa `shadow-md`; nem toda sombra aplicada hoje é um token `shadow-surface-*`.

## 9. Estados: contrato visual e funcional

| Estado | Aparência / comportamento esperado |
| --- | --- |
| Repouso | Hierarquia legível, controle identificável sem depender de hover |
| Hover | Preview discreto; overlay fluido ou mudança de superfície/cor |
| Focus-visible | Ring de marca, alvo claro, nunca só mudança de texto |
| Pressed | Feedback durante ativação; distinto de hover quando o componente precisar |
| Selected | Estado persistente ligado à seleção real; não confundir com proximidade |
| Open | Trigger mantém identificação de aberto; conteúdo associado e acessível |
| Disabled | 50% de opacidade nos primitivos aplicáveis; impedir ativação e tab indevido |
| Loading | Preservar dimensões, bloquear duplicidade, mostrar feedback e anunciar estado |
| Invalid / error | Cor destrutiva + mensagem textual associada ao controle |
| Success | Texto explícito; verde sem substituir a informação |
| Read-only | Permitir seleção/cópia; não tratar como disabled |

**Atual:** o `Button` tem prop `active`, porém suas variantes CVA não acrescentam estilos para `true`/`false`. Passar `active` sozinho não cria aparência pressed/selected. O formulário comunica seleção também por `variant`, classes e `aria-pressed`.

**Atual:** `Button loading` desabilita o controle e mantém conteúdo invisível para preservar sua largura, mas não renderiza spinner visível nem acrescenta `aria-busy` por conta própria. As classes de spinner existem no CSS. **Diretriz para fluxos assíncronos:** completar feedback visual e anúncio acessível antes de usar loading; não documentar o spinner como pronto.

Focus global: outline com offset 2px e `focus-ring`; links têm raio menor. Primitivos podem usar `ring-2` ou `ring-3` próprios. Conferir a combinação para evitar foco duplo, oculto por clipping ou coberto por outro layer.

## 10. Fluid hover: mecânica e aplicação

### 10.1 Sensação desejada

Um único preenchimento acompanha a escolha provável do usuário dentro de um grupo. O texto não pula; o layout não aumenta; cards informativos continuam informativos. Hover é **preview**, não seleção nem navegação automática.

### 10.2 Infraestrutura atual

- `useFluidHover(ref, options)`: mede itens, resolve o alvo e expõe handlers.
- `FluidHoverHighlight`: desenha um overlay absoluto `bg-hover`, sem eventos de ponteiro.
- `FluidGroup`: adapta qualquer sequência de filhos; `axis="xy"` por padrão; suporta `div` e `ul`.
- `CardGroup`: registra cards diretamente, oferece layout e highlight próprios.
- Tabs têm indicadores dedicados e integração de proximidade; não são apenas um `FluidGroup`.

**Escolha:** usar `CardGroup` para a anatomia Card; `FluidGroup` para links, listas e grupos simples. Não envolver `CardGroup` em outro grupo fluido para produzir dois highlights sobre os mesmos itens.

### 10.3 Eixos e hit-testing

| Eixo | Aplicação |
| --- | --- |
| `x` | Faixa horizontal de itens |
| `y` | Menu/lista vertical |
| `xy` | Grade com linhas e colunas; distancia euclidiana ao centro |

O item que contém o ponteiro vence; fora dos itens, o centro mais próximo determina o preview. O hook considera scroll, bordas e escala de ancestrais transformados. Um preview pode continuar sobre o card próximo quando o cursor passa por um gap.

O hook genérico permite redirecionar clique no gap ao item ativo e tem `gapClick: true` como default. **Na landing, `FluidGroup` e `CardGroup` usam `gapClick: false`**: clicar no espaço vazio não aciona card, link ou CTA. Preservar essa decisão nas novas composições de marketing.

### 10.4 Geometria e camadas

- Container `relative`; `FluidGroup` também usa `isolate`.
- Overlay atrás do conteúdo, `pointer-events-none`.
- Itens do `FluidGroup`: `relative z-10 min-w-0`.
- Wrapper `data-fluid-hover-wrapper="true"` delega o raio visual ao primeiro filho.
- Medir posição/tamanho no espaço de layout, não usar retângulo já transformado como coordenada de layout.
- Só montar o overlay quando `isMeasured` confirma medições válidas.
- Registro, resize de item e resize de container disparam medição agrupada por frame.
- Popups mantidos ocultos precisam de `remeasure()` ao reaparecer; não adicionar isso indiscriminadamente em toda mudança de children.
- Movimento de layout durante animação pode exigir `measureItems()` por frame, como no accordion; é uma exceção.

Entrada inicia no alvo medido, com fade, em vez de deslizar da posição de uma sessão anterior. `sessionRef` muda na entrada do mouse e reinicia o highlight. Saída elimina o índice ativo e faz fade curto. Atributos `data-fluid-hover-active` e `data-fluid-hover-active-index` permitem inspecionar o estado real.

### 10.5 Teclado e touch

`FluidGroup` acompanha foco por capture e limpa o highlight quando o foco sai do grupo. O overlay não substitui foco visível. `CardGroup` atual não tem a mesma ponte de focus capture; os links/botões sobrepostos dos cards mantêm seus rings próprios.

Touch não precisa reproduzir proximidade: conteúdo e ações devem estar disponíveis em repouso, e a seleção ocorre por toque. Não esconder uma ação indispensável atrás de `hover`. Cards informativos podem receber tinta discreta, mas não devem receber cursor de link nem `tabIndex` apenas por decoração.

## 11. Motion e efeitos de superfície

### 11.1 Tokens de spring

| Tier | Entrada | Bounce | Saída | Uso |
| --- | --- | --- | --- | --- |
| `spring.fast` | 80ms | 0 | 60ms | Highlight e resposta curta |
| `spring.moderate` | 160ms | 0 | 120ms | Seleção, foco, painel curto |
| `spring.slow` | 240ms | 0.12 | 160ms | Movimento mais amplo quando apropriado |

`FluidHoverHighlight` usa `fast` e fade de opacidade de 80ms. Reduced motion elimina deslocamento; mantém esse fade curto. CSS global também desativa animações e transições CSS sob a preferência reduzida.

### 11.2 Entrada editorial e scroll

`Reveal`: `initial={false}`, anima uma vez ao entrar 12% no viewport, deslocamento Y de 14px até 0, opacidade 0.75 até 1, duração 450ms, easing `[0.22, 1, 0.36, 1]`. Não começa escondendo o conteúdo no HTML.

`ExperienceProvider`: Lenis com `autoRaf`, duração 0.95s, wheel suave e `syncTouch: false`. Hash, histórico e foco permanecem nativos. Com reduced motion, Lenis não é instanciado.

**Diretriz:** não criar uma segunda instância de Lenis por página nem interceptar todos os anchors. Não repetir reveals em cada palavra, número ou ícone.

### 11.3 Stripes

Textura `.stripes`: gradiente repetido a 315°, linha de 1px a 5% da cor de primeiro plano, período de 8px. Usada nas margens fixas, etiquetas editoriais e algumas faixas. `--stripes-color` permite trocar a cor sem copiar a implementação.

É decoração de fundo: não competir com texto, não ser elemento interativo, não virar fundo de todos os campos.

### 11.4 CTAs shiny

`shiny-01`, `shiny-02`, `shiny-secondary` combinam preenchimento, borda cônica e brilho. Ciclo base de 3s; segundo ciclo reverso com duração de 7.5s fica pausado até interação. Hover/focus muda spread de 5% para 20% e offset para 95°, além da cor de shine. Hover acrescenta iluminação inset com transição de 300ms.

No tema claro, o preenchimento usa `primary` e o texto permanece claro. No escuro, o CTA usa base escura com contorno/shine de marca. `shiny-secondary` adiciona textura pontilhada e não exibe os pseudo-elementos decorativos before/after.

`frame-shiny` ilumina a faixa de padding do frame, com máscara para não cobrir seu conteúdo; reage a hover, focus-visible e focus-within, e possui fallback reduced-motion explícito. `.shiny-border` existe como outro efeito disponível, mas não precisa ser adotado em cada card.

**Diretriz:** brilho em ação principal ou peça de demonstração especial; no restante, superfície e hairline. Não aplicar scale, bounce e shine simultaneamente. Não copiar os keyframes por componente.

## 12. Catálogo de componentes

### 12.1 Marca

Reutilizar `AppLogo`, `AppWordMark`, `AppBrandMark` conforme exports dos arquivos de marca, sem redesenhar a marca em texto ou SVG novo. `Brand` usa link com alvo mínimo de 44px e logo de 32px de altura. Footer usa logo de 40px.

Logo decorativo dentro de link nomeado: `aria-hidden`; link com nome acessível. Preservar proporções, sem esticar largura/altura independentemente.

### 12.2 SectionLabel

Faixa de contexto: índice de marca + label + assinatura opcional em telas maiores. Micro uppercase, stripes, altura mínima 56px, padding vertical 16px, fundo `background/90`, blur discreto, borda inferior.

`sticky top-20 z-20` fica abaixo do header de 80px. A numeração atual considera 10 seções após o hero. **Para outra página**, o índice e o total precisam corresponder à narrativa local; a implementação atual lê `presentation.sectionCount` globalmente e não possui prop de total por página. Não exibir “01 de 10” em uma página de três seções sem adaptar esse contrato.

### 12.3 SectionHeading

Props atuais: `eyebrow`, `title`, `muted`, `description`, `align` (`left`, `center`, `right`), `className`. H2 com continuação opcional em nova linha. Preferir esse componente a repetir o bloco de classes.

Alinhamento centrado para panorama/demonstração; esquerdo para conteúdo lateral e leitura; direito apenas quando a composição justificar. Não alternar alinhamento aleatoriamente entre cards irmãos.

### 12.4 Button e ActionLink

| Variante atual | Função visual |
| --- | --- |
| `primary` | Faktum + `shiny-01`; ação de marca |
| `secondary` | `surface-1`, hover `surface-2`, contorno de muted |
| `cta` | `shiny-02`; CTA principal do hero/formulário |
| `cta-2` | Faktum + `shiny-secondary`; alternativa texturizada |
| `ghost` | Transparente, hover `surface-1` |

| Tamanho | Padding / texto / ícone |
| --- | --- |
| `xs` | 12×8px; 12px; ícone 12px |
| `sm` | 16×12px; 14px; ícone 14px |
| `md` | 20×12px; 16px; ícone 16px |
| `lg` | 32×16px; 18px; ícone 20px |
| `icon-sm` / `icon` / `icon-lg` | 32 / 36 / 40px quadrados |

`ActionLink` compõe `Button asChild` com `Link`, variante primária ou secundária, seta diagonal e overrides de marketing: altura mínima 44px, raio 8px, padding 20×12px e texto 16px. Navegação usa link; ação de interface usa button. Não inserir um botão dentro de outro link/botão.

### 12.5 Card e CardGroup

Anatomia: `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`, `CardAction`; mídia opcional com `CardMedia`/`CardImage`; complementos `CardEyebrow`, `CardFeature`, `CardButton`.

Card base é transparente e sem borda. `CardGroup` controla `orientation`, `columns`, `border`, `separated`, `fluidHover`:

- Grupo conectado: `separated={false}`, sem gap; dividers internos.
- Tiles separados: `separated`, gap base de 8px; a landing pode sobrescrever para `gap-0`.
- `border="outlined"`: um contorno do grupo ou contorno de cada tile quando separado.
- `orientation="inline"`: mídia e texto em uma linha; não obrigatório para conteúdo editorial.

Card clicável usa `href` ou `onClick`, com overlay stretched a `z-20`; ações próprias a `z-30`. Fornecer `label`, pois o título não nomeia automaticamente esse overlay. Links externos usam `noopener noreferrer`.

Seleção persistente: `selected`, preenchimento `bg-active` e título enfatizado. Hover **não** torna o título bold. Disabled remove o overlay interativo e reduz opacidade.

Na landing, cards quadrados e divisões de seção prevalecem sobre o shape default da biblioteca. Não marcar um card como clicável sem destino real.

### 12.6 Tabs

Anatomia: `Tabs`, `TabsList`, `TabItem`, `TabPanel`; valores de aba estáveis e panel correspondente. `TabsList` aceita `radius="md" | "none"` e `hoverAxis`.

Há três camadas: indicador persistente de seleção, preview de hover e ring de foco. Seleção usa spring moderate; hover usa fast. Preview sobre outra aba reduz a opacidade do indicador selecionado para 0.85; highlight de hover chega a 0.4.

Abas simples: label 14px, selecionado semibold, ícone ativo com stroke 2 em vez de 1.5. Abas ricas: eyebrow, título display 16px, descrição 12px, ícone de 20px. A ativação por foco está habilitada no primitivo.

Hero: tabs ricas quadradas, altura mínima 112px, coluna no mobile e linha em `sm`. Controle: tabs compactas de contexto com alvo mínimo de 48px. Não converter tabs em links para páginas; tabs mudam contexto dentro da mesma área.

### 12.7 Accordion / FAQ

Reutilizar `AccordionGroup`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`. FAQ atual usa `type="single"`, primeira pergunta aberta, bordas horizontais e raio zero.

Pergunta: índice colorido, texto 14px, altura mínima 64px. Resposta: borda superior, padding horizontal 24px, topo 16px, base 24px, texto `foreground-2` com line-height 28px. Mantém heading contextual lateral sticky em desktop.

Não trocar por uma lista de divs com `onClick`. Preservar semântica de expansão e navegação por teclado do primitivo.

### 12.8 Campos e seleção

- `Label` visível e ligado por `htmlFor`/`id`.
- `Input`: base 36px, no contato 44px; raio 8px; `bg-muted/40`; `border-accent`; placeholder muted; foco borda ring + ring 3px a 50%.
- `Textarea`: mesma superfície, padding 14×10px, resize vertical, base mínima 80px; mensagem do contato mínima 128px.
- `SelectTrigger`: base 36px, contato 44px; conteúdo em portal com superfície popover, borda, raio 8px, scroll vertical e feedback de opção focada.
- `aria-invalid`: borda destrutiva e ring destrutivo a 20%; mensagem associada ainda precisa ser fornecida pelo formulário.
- Interesses: grupo com borda, padding 4px, gap 4px, uma coluna → duas em `sm`; botões com `aria-pressed`, alvo ≥ 44px e texto que pode quebrar.

**Atual:** o contato gera um briefing local com `FormData`, apresenta textarea read-only e permite copiar. Não envia lead a um backend. Há sucesso/falha de cópia via `role="status"`; não há fluxo de envio remoto ou estados de network implementados.

**Diretriz para formulários futuros:** loading perceptível, erro perto do campo, retry sem perda de dados, status acessível, validação coerente e confirmação apenas após sucesso real. Não reutilizar a mensagem “pronto para copiar” como prova de entrega comercial.

## 13. Organização da homepage

Header global → hero → dez seções indexadas → footer:

| Ordem | Componente / ID | Padrão |
| --- | --- | --- |
| Hero | `HeroSection` / `inicio` | Heading + CTAs + frame com três previews + quatro atributos |
| 01 | `PlatformSection` / `plataforma` | Heading central, ASCII discreto, quatro pares de módulos |
| 02 | `ControlSection` / `controle` | Banda dark, tabs de contexto, texto e mídia |
| 03 | `CheckoutSection` / `checkout` | Heading/CTA, mídia em painel, três passos |
| 04 | `FinanceSection` / `financeiro` | Texto 1/3, mídia 2/3 e benefícios |
| 05 | `IntegrationsSection` / `integracoes` | Texto/mídia 1:2, segunda linha alternada |
| 06 | `ScaleSection` / `escala` | Argumento lateral, mídia e benefícios |
| 07 | `SolutionsSection` / `solucoes` | Linhas com mídia 2/3 alternada e argumento 1/3 |
| 08 | `LaunchSection` / `implantacao` | Heading e quatro etapas numeradas |
| 09 | `FaqSection` / `perguntas` | Introdução lateral e accordion |
| 10 | `ContactSection` / `contato` | Banda dark, argumento lateral e formulário |

A sequência conta uma história: promessa → capacidades → operação → venda → financeiro → integração → escala → público → implantação → dúvidas → conversa. **Uma página dedicada mantém a gramática, não precisa copiar as onze seções.**

## 14. Navegação, sticky e camadas

### 14.1 Header

Sticky no topo, `z-50`, fundo `background/90`, blur discreto, borda inferior. Linha interna com altura mínima 80px. Desktop completo apenas em `xl`; abaixo disso, menu móvel. CTA do header visível a partir de `sm`; toggle de tema permanece disponível.

Menu desktop: introdução e links em duas colunas com fluid hover. Menu mobile: disclosures nativos `details/summary`, links verticais, fechamento ao navegar e Escape devolvendo foco ao toggle. `aria-expanded` e `aria-controls` no toggle. Não abrir navegação por hover como única forma de acesso.

### 14.2 Offsets e z-index

| Elemento | Referência atual |
| --- | --- |
| Skip link focado | `z-100` |
| Stripes laterais | `z-60`, sem pointer events |
| Header / overlays de navegação | `z-50` |
| SectionLabel | `z-20`, `top-20` / 80px |
| Texto sobre arte | `z-10` |
| Arte de fundo / highlight | `z-0` ou camada abaixo do conteúdo |
| Overlay clicável de Card | `z-20`, ações `z-30` no contexto do card |
| Âncoras editoriais | `scroll-mt-22` / 88px |
| Texto lateral sticky | `top-47` / 188px |

Stack de plataforma sticky: habilitado somente em largura ≥ 64rem, altura ≥ 56rem e sem reduced motion; offset 11.75rem / 188px. Fora disso, os pares fluem normalmente.

**Diretriz:** manter z-index no contexto local, sem adicionar `z-[9999]`. Sticky deve preservar leitura em telas baixas, zoom e conteúdo longo; não copiar um offset sem levar header e etiqueta em conta.

### 14.3 Footer

Sempre dark. Faixa editorial striped; bloco de marca/CTA/ASCII e bloco de badges/redes; três grupos de links a partir de `md`; wordmark amplo em halftone com fallback SVG; faixa legal e retorno ao topo.

Usar o mesmo footer nas páginas dedicadas. Não multiplicar menus com organização diferente por rota. Links sociais aceitam HTTPS válido; fallback atual leva a contato. Perfis configurados não equivalem a verificação editorial de titularidade.

## 15. Imagens, ícones e arte

### 15.1 Demonstrações do produto

`ArtPlaceholder` usa `next/image`, dimensões explícitas, altura automática, `sizes` responsivo e `preload` opcional. Sem `src`, usa `placehold.co`, sem otimização, com label de placeholder acessível.

**Importante:** as cores e a fonte Poppins dos placeholders são parâmetros temporários do serviço externo, não tokens ou tipografia da Paragan.

| Área | Proporção / resolução de referência |
| --- | --- |
| Hero | 1600×860 |
| Módulo plataforma | 1000×500 |
| Controle | 1000×850 |
| Checkout | 1440×760 |
| Financeiro | 1200×800 |
| Integrações | 1200×720 e 1200×600 |
| Escala | 1200×700 |
| Soluções | 1200×640 |

Para trocar a arte: manter proporção e reserva de espaço, atualizar `sizes` quando a largura real mudar, usar captura frontal legível, dados fictícios explicitamente identificados e marca de demonstração consistente. Não mostrar PII, PAN, tokens, credenciais ou valores simulados como resultados reais.

Evitar perspectivas que impossibilitem leitura, números animados artificialmente, telas inconsistentes entre abas e logos de terceiros sem autorização. Apenas a mídia prioritária acima da dobra precisa de preload; não priorizar todas as imagens.

### 15.2 Ícones

Há ícones próprios e Hugeicons; a biblioteca também possui abstração `icons`/`IconComponent`. Preferir os assets e o mapa existentes. Stroke usual 1.5, com mudança pontual para 2 em interação; tamanhos usuais 14–20px, mídia de card 18px dentro de tile 32px.

Ícone acompanhando label: decorativo. Controle apenas com ícone: nome acessível e alvo adequado. Não usar emojis como substitutos, nem misturar filled e outline arbitrariamente.

### 15.3 ASCII / halftone

`RenderAscii` e `MotionRenderAscii` são a camada expressiva da marca. A plataforma usa shark/halftone; footer usa clover e wordmark/halftone. Renderizadores possuem tratamento de visibilidade e preferência de movimento; manter essa infraestrutura em vez de iniciar loops independentes na página.

Arte de fundo: sem eventos de ponteiro, contraste reduzido, conteúdo acima, sem alterar fluxo. Arte meramente decorativa deve ser escondida da árvore acessível; quando informativa, fornecer label. Wordmark animado tem fallback SVG visível enquanto a renderização não está pronta.

Não usar o canvas para texto essencial, nem bloquear navegação enquanto WebGL/Pixi/Three carrega. Novas artes precisam de dimensão/proporção estável, cleanup dos recursos e fallback compatível com indisponibilidade do renderer.

## 16. Responsividade e overflow

Breakpoints usados: `sm` 40rem / 640px; `md` 48rem / 768px; `lg` 64rem / 1024px; `xl` 80rem / 1280px. São as referências Tailwind padrão utilizadas pelo código, não uma nova escala customizada.

- Mobile primeiro: grades em uma coluna, texto antes da demonstração quando isso facilita compreensão.
- Hero alinhado à esquerda abaixo de `lg`; centralizado a partir de `lg`.
- CTAs do hero em coluna e largura total; a partir de `sm`, em linha e largura de conteúdo.
- Substituir bordas verticais por horizontais ao empilhar.
- Colunas flex/grid com `min-w-0`; mídia com `w-full` e altura automática.
- `text-balance` para headlines, quebra natural para descrições e botões de interesse.
- Não truncar proposta de valor, erro de formulário ou label principal para manter altura igual.
- Metadados longos: quebra segura; dados técnicos podem ter área própria de scroll horizontal quando necessário.
- Clipping só em mídia/efeito e onde o ring de foco não será cortado.
- Menu mobile tem scroll próprio e espaço inferior; não fazer a página inteira rolar lateralmente.

**Diretriz de inspeção futura:** conferir 360/390px, 768px, 1024px, 1280px e tela ampla; também zoom 200%, altura curta, conteúdo traduzido mais longo e teclado. Isso é critério de qualidade, não verificação executada neste registro.

## 17. Acessibilidade e qualidade percebida

Preservar skip link, `main id="conteudo" tabIndex={-1}`, idioma pt-BR, landmarks e foco visível. Em novas páginas, uma região principal e IDs únicos, com `aria-labelledby` ligado ao heading correspondente quando aplicável.

Diretrizes obrigatórias para componentes novos:

- Contraste WCAG AA: 4.5:1 para texto normal; 3:1 para texto grande e indicadores de UI relevantes. Medir composição real com transparências; os tokens não comprovam contraste de toda combinação.
- Navegação completa por teclado; ordem DOM acompanha a narrativa mesmo com `order` visual.
- Hover não contém informação exclusiva; selected/open/error têm sinais não cromáticos.
- Alvos públicos preferencialmente ≥ 44×44px; ring visível em todos os temas.
- Erros associados por `aria-describedby`; `aria-invalid` quando inválido.
- Status assíncronos via `role="status"`/live region sem anúncios duplicados.
- Reduced motion do sistema respeitado, sem scroll suavizado obrigatório.
- Imagens com alt funcional; decoração com alt vazio/aria-hidden conforme elemento.
- Formulários preservam valores após erro; read-only permite copiar.
- Links externos seguros; não marcar placeholder como recurso entregue.

O documento não declara conformidade medida da homepage. Algumas primitivas compactas e os estados incompletos de loading requerem atenção antes de reutilização em fluxos novos.

## 18. Arquitetura para páginas dedicadas integradas

### 18.1 Stack e limites

Stack atual: Next.js App Router 16.3.7, React 19.2.8, TypeScript, Tailwind 4, Base UI/Radix, Framer Motion, Lenis, next-intl e fontes locais. A landing é um repositório próprio; não importar layout de dashboard do `Paragan-GatewayFront`.

Antes de implementar código Next.js, ler os guias relevantes em `node_modules/next/dist/docs/`, conforme `AGENTS.md`. Este guia de design não substitui o contrato da versão instalada.

### 18.2 Responsabilidade das pastas

| Local | Responsabilidade |
| --- | --- |
| `src/app/<rota>/page.tsx` | Composição da página e metadata específica |
| `src/app/layout.tsx` | Fontes, CSS global, tema inicial e experiência global |
| `src/components/ui/` | Primitivos sem copy de negócio |
| `src/components/landing/` | Shell e linguagem editorial compartilhada |
| `src/components/landing/sections/` | Seções já existentes da homepage |
| `src/components/landing/pages/<tema>/` | Convenção proposta para seções exclusivas de uma página dedicada |
| `src/components/assets/` | Marca e ícones reutilizáveis |
| `src/hooks/` | Interações reutilizáveis, sem copy |
| `src/lib/` | Helpers, tokens comportamentais e contextos |
| `src/i18n/messages/pt-BR.ts` | Copy, labels, metadados e textos acessíveis |
| `src/config/site.ts` | Destinos, índices, configuração e dados não textuais |
| `public/` | Arquivos de mídia e fontes |

`landing/pages/<tema>/` é uma **diretriz de extensão**, não uma pasta já criada. Só extrair uma abstração compartilhada quando duas composições reais precisarem dela; não criar um framework de páginas para resolver uma rota isolada.

### 18.3 Server/client

Composição, conteúdo editorial, metadata e seções estáticas permanecem server components quando possível. Isolar `'use client'` em tabs, formulário, menu, hover e renderização interativa. Um server component pode compor filhos client; não tornar toda a página client só por usar um `FluidGroup`.

Reutilizar o `ExperienceProvider` do layout. Hoje header/footer pertencem a `page.tsx`, não ao layout global. Uma nova rota deve compô-los explicitamente ou compartilhar um shell de marketing extraído deliberadamente; não duplicá-los simultaneamente na página e num layout aninhado.

### 18.4 Contrato de shell

Toda página pública integrada deve manter:

1. Fontes e tokens do layout global.
2. Faixas laterais alinhadas ao frame, quando usar o mesmo shell editorial.
3. Skip link apontando ao `main` local.
4. `SiteHeader` compartilhado, sem menu paralelo.
5. Hero específico, com único H1.
6. Seções com `frame`, `section`, headings e densidade estabelecida.
7. Conversão coerente: CTA ao contato ou fluxo específico efetivamente implementado.
8. `SiteFooter` compartilhado.

**Atenção aos anchors atuais:** `destinations.home = '#inicio'` e `contact = '#contato'` são relativos à rota atual; vários itens de header estão em `'#'`. Em páginas dedicadas, configurar destinos reais e usar `/#inicio`, `/#contato` ou âncoras locais existentes conforme a intenção. Não reutilizar os defaults de `Brand`/`ActionLink` sem confirmar que o destino existe naquela página.

Se marcar rota ativa, usar `aria-current="page"`; estado de hover ou menu aberto não significa rota ativa. Slugs e destinos vivem em config, nunca em traduções.

### 18.5 Conteúdo e i18n

O projeto tem locale explícito `pt-BR`, sem negociação pelo browser ou rotas de locale. `t()` resolve textos e mensagens ICU; `content()` recupera blocos estruturados tipados; `formatIndex()` gera dois dígitos sem agrupamento. Chaves faltantes geram erro, não fallback silencioso.

Criar namespace por página e subgrupos claros: hero, benefícios, demonstração, dúvidas e CTA. Não hardcodar labels, aria-labels ou metadata no JSX. URLs, dimensões de mídia e contagem de seções não são tradução.

### 18.6 Modelos editoriais para extensão

Os exemplos abaixo são padrões de composição, **não rotas já implementadas**:

| Página | Sequência recomendada |
| --- | --- |
| Produto: gateway / checkout / financeiro | Hero específico → demonstração → capacidades em grid → fluxo operacional → integração → FAQ → CTA |
| Solução por público | Hero contextual → problema/resultado → mídia e argumentos alternados 2:1 → implantação → FAQ → CTA |
| Integrações / API | Hero técnico → arquitetura em 1:2 → capacidades/eventos → exemplos técnicos legíveis → recursos reais → CTA |
| Empresa / sobre | Hero editorial → posicionamento → princípios em grid → marca/arte → contato |
| Contato dedicado | Hero curto → bloco de conversa/formulário → informação de próximos passos → footer |
| Legal / privacidade | Header comum → título/metadata → texto em largura de leitura limitada → navegação de conteúdo opcional → footer |

Para página legal, manter leitura em `max-w-2xl` e títulos sem exagero; não colocar cada parágrafo dentro de um card nem aplicar reveal a cada item. Para exemplos de API, usar mono e contraste legível, sem secrets reais e sem transformar o conteúdo em dashboard.

### 18.7 O que pode variar e o que não pode

**Pode variar:** assunto, número de seções, alinhamento do heading conforme layout, proporção de mídia adequada à demonstração, presença de FAQ, sequência editorial, arte específica e ação principal.

**Não pode variar sem revisão do sistema:** paleta, famílias tipográficas, frame de 75rem, estratégia de tema, mecânica de fluid hover, escala de motion, anatomia de controles, padrões de foco, centralização de copy e organização do shell.

## 19. Receita para um componente novo

1. Definir se é primitivo, composição editorial compartilhada ou peça exclusiva da página.
2. Procurar `Button`, `CardGroup`, `Tabs`, `Accordion`, `Frame`, `SectionHeading` e `FluidGroup` antes de criar HTML equivalente.
3. Usar cores semânticas e a escala de espaços do contexto.
4. Determinar quem possui cada borda e qual é o raio visual do alvo.
5. Separar hover, foco, seleção e aberto; implementar apenas os estados aplicáveis, sem simular os inexistentes.
6. Manter alvos e mensagens acessíveis; definir comportamento touch e reduced motion.
7. Garantir tamanho natural, `min-w-0`, mídia proporcional e ausência de overflow horizontal acidental.
8. Manter texto em i18n e destinos em config.
9. Isolar client state e efeitos apenas onde necessários.
10. Comparar com um componente irmão real da homepage, não com uma referência externa de outro sistema.

## 20. Checklist de consistência para futuras entregas

Este checklist é critério de revisão, não registro de testes executados para este documento.

- Frame, linhas externas e alinhamento do header/footer coincidem com a homepage.
- Nenhuma paleta, família de fonte ou provider de tema paralelo foi introduzido.
- Títulos mantêm intensidade principal/secundária e semântica H1/H2/H3.
- Padding pertence ao contexto: heading, card, mídia, formulário ou navegação.
- Arestas compartilhadas não têm borda dupla.
- Hover fluido é único por grupo, não altera layout e não aciona espaços vazios da landing.
- Focus-visible permanece nítido em tema claro, escuro e bandas escuras locais.
- Seleção persiste sem depender do mouse; hover não é seleção.
- Loading, erro, sucesso e disabled são reais e perceptíveis quando aplicáveis.
- Touch e teclado acessam todas as ações essenciais.
- Motion reduzido não mantém deslocamento ou scroll suavizado obrigatório.
- Mídia reserva espaço, tem alt correto e não vaza dados sensíveis.
- Header, footer e CTA apontam a rotas/âncoras válidas naquela página.
- Copy nova está no catálogo e a numeração corresponde ao total local.
- Nenhum placeholder ou demo é apresentado como funcionalidade entregue ou resultado real.

## 21. Limites conhecidos do estado atual

Para não confundir documentação com implementação:

- Vários links do header ainda usam `'#'`; não são páginas dedicadas prontas.
- CTAs do hero são `Button` sem destino/handler no componente atual.
- Demonstrações de produto ainda usam imagens de placeholder externas.
- Formulário prepara briefing e cópia local; não executa envio remoto.
- Prop `active` de Button não define aparência por si só.
- Prop `loading` de Button preserva espaço, mas ainda precisa de indicador visível/anúncio para um fluxo assíncrono completo.
- Densidade/shape/surface da biblioteca não significam providers globais ativos no layout da landing.
- `SectionLabel` usa o total global da homepage; páginas com outro total precisam de contrato adequado.
- As rotas `src/app/ascii/page.tsx` e `src/app/globe/page.tsx` existem, mas não são o modelo de shell comercial definido pela homepage.
- Contraste, renderização responsiva e sensação de motion não foram medidos em navegador na elaboração deste arquivo.

Esses limites não justificam redesenhar a identidade. A extensão deve completar comportamentos mantendo a estrutura visual documentada.
