# Paragan LP — r1

## Fase 1 — Wireframe e primeira versão

### 1.1 Direção visual

- [x] `docs/refs/`: analisar composição integral e recortes UXBrand/Mintlify; grade editorial, alternância claro/escuro e mídia de produto.
- [x] `styles.ts` + componentes: Tailwind v4 para canvas, grade, tipografia e responsividade; `globals.css` restrito a imports/tokens/base.
- [x] `components/ui/`: instalar Boring UI Card/CardGroup, Button, Tabs, Accordion e Fluid Hover via registry; shadcn Input/Textarea/Label.
- [x] `lib/icon-map.tsx`: manter somente Hugeicons; remover seletor/atalho de biblioteca do registry.

### 1.2 Wireframe por seção

- [x] `sections/hero-section.tsx`: coordenadas → eyebrow → headline central → apoio → dois CTAs → abas gateway/seller/checkout → print 1600×860 → faixa de capacidades.
- [x] `sections/platform-section.tsx`: título central → bento 2+1 / 1+1+1; identidade 1000×440, regras 600×490, equipe/rotas/rewards 600×390.
- [x] `sections/control-section.tsx`: faixa escura → título central → abas operação/comercial/financeiro → texto 40% + print 60% (1000×850); uma perspectiva por vez.
- [x] `sections/checkout-section.tsx`: título e CTA → palco 1440×760 → três colunas compor/personalizar/acompanhar.
- [x] `sections/finance-section.tsx`: texto 50% + arte vertical 900×1080 50%; condições, disponibilidade e composição.
- [x] `sections/integrations-section.tsx`: título central → diagrama 1440×500 → API/webhooks/multiadquirência → CTA e condição de disponibilidade.
- [x] `sections/scale-section.tsx`: faixa escura → título → diagrama 1440×430 → isolamento/integridade/observabilidade; sem métricas inventadas.
- [x] `sections/solutions-section.tsx`: título central → três cards com arte 700×490, cenário e link de contato.
- [x] `sections/launch-section.tsx`: título à esquerda → quatro etapas numeradas → nota de escopo/prazo/investimento.
- [x] `sections/faq-section.tsx`: introdução 35% + accordion 65%; seis objeções com resposta, teclado e hover fluido.
- [x] `sections/contact-section.tsx`: faixa escura → proposta 45% + formulário 55%; resumo local explícito sem simular envio comercial.
- [x] `site-footer.tsx`: marca + três grupos de links válidos → wordmark editorial → copyright e retorno ao início.

### 1.3 Interação e mídias

- [x] `experience-provider.tsx`: Lenis global com cleanup, touch nativo e reduced motion; MotionConfig respeita preferência do sistema.
- [x] `fluid-group.tsx` + CardGroup/Tabs/Accordion: Fluid Hover nos conjuntos, foco por teclado e ausência de ação implícita nos espaços da navegação.
- [x] `reveal.tsx`: entrada única discreta; conteúdo visível no HTML inicial; sem parallax ou autoplay decorativo.
- [x] `ArtPlaceholder`: Next Image com URLs placehold.co, dimensões e legendas; comentário de direção de arte antes de cada inserção.
- [x] `site-header.tsx`: navegação desktop/mobile, botão com aria-expanded e âncoras locais.

### 1.4 Verificação

- [x] `npx tsc --noEmit` + `npm run lint`: sem erros; 14 warnings no Accordion Boring UI.
- [ ] browser: validar mobile/desktop, tabs, FAQ, menu, foco, reduced motion e placeholders.

## Fase 2 — Ativação comercial

- [ ] `contact-section.tsx`: conectar destino comercial autorizado; sucesso somente após confirmação real.
- [ ] `docs/copy/`: definir dados legais, termos e privacidade antes de coletar leads reais.
- [ ] mídias: substituir placeholders conforme briefs; identificar dados demonstrativos nos prints.
