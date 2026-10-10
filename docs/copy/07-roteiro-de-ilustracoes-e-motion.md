# Roteiro de ilustrações e motion — os 22 espaços da home

Referência: 09/10/2026. Direção de produção visual, não implementação. Base: ordem de `src/app/page.tsx`, copy de `src/i18n/messages/pt-BR.ts`, índices de `src/config/site.ts` e placeholders de `src/components/landing/sections/`. As telas de `Paragan-GatewayFront` abaixo são referências a conferir no ambiente de captura, não comprovação de disponibilidade comercial. Nenhuma captura ou animação foi produzida nesta etapa.

## 1. Ideia central

**Mostrar a base pronta, identificar o cenário de contratação e explicar configurações, fluxos e sustentação.**

- Hero: preservar integralmente a primeira dobra aprovada, com as abas gateway, seller e checkout. As fichas 01–03 orientam somente os assets para seus espaços existentes; não autorizam alterar texto, CTAs, tabs, layout ou comportamento.
- Plataforma: oito peças curtas, cada uma explicando um mecanismo. Recortes da UI para configuração e finanças; conexões animadas para delegação, roteamento e eventos.
- Cenários: lançamento, migração e incorporação usam os três blocos alternados existentes. Mostrar a mesma base com requisitos de entrada distintos, não três produtos diferentes.
- Controle: três demonstrações de decisões concretas do gateway-admin, não outra apresentação genérica do dashboard.
- Financeiro: decomposição legível, sem confundir volume, receita e saldo.
- Checkout: uma jornada real, com desktop e mobile, do resumo ao recibo; sellers organizam ofertas, compradores pagam, operador administra a experiência oferecida à base.
- Integrações e confiança operacional: diagramas explicativos, com direção, estados, condições de habilitação e fronteiras explícitos.

Ordem atual: hero → plataforma → cenários → controle → financeiro → checkout → integrações → confiança operacional → implantação → FAQ → contato → rodapé. Não criar novos cards, colunas, blocos ou espaços para acomodar as artes. A nova estratégia apresenta produto existente, autonomia nas configurações disponíveis e implantação/sustentação contratadas; a ilustração não deve sugerir desenvolvimento integral sob medida.

Não usar fotos de banco de imagens, moedas voando, gráficos sempre ascendentes, órbitas sem significado, robôs de IA ou logos de parceiros como decoração.

## 2. Inventário e correspondência com a página

São **22 artes**, contando conteúdos de abas, não somente os quadros visíveis ao mesmo tempo. Os tamanhos abaixo são os canvases já reservados pelo código; preservar suas proporções. Os IDs de produção são estáveis e não correspondem à numeração das seções: a tabela segue a ordem atual de leitura, sem renomear os assets existentes.

| ID  | Seção / local atual                                           | Canvas     | Direção escolhida                                      |
| --- | ------------------------------------------------------------- | ---------- | ------------------------------------------------------ |
| 01  | Hero / `gateway`                                              | 1600 × 860 | Dashboard gateway-admin; poster e câmera opcional      |
| 02  | Hero / `seller`                                               | 1600 × 860 | Dashboard seller; poster e câmera opcional             |
| 03  | Hero / `checkout`                                             | 1600 × 860 | Checkout real da oferta demonstrativa                  |
| 04  | Plataforma / Identidade                                       | 1000 × 500 | Recortes de UI + propagação de marca                   |
| 05  | Plataforma / Regras comerciais                                | 1000 × 500 | Composição estática de configurações reais             |
| 06  | Plataforma / Pessoas                                          | 1000 × 500 | Diagrama animado de papéis e carteiras                 |
| 07  | Plataforma / Relacionamento                                   | 1000 × 500 | Composição estática de ranking e jornada               |
| 08  | Plataforma / Adquirência                                      | 1000 × 500 | Fluxo animado de elegibilidade e seleção               |
| 09  | Plataforma / Gestão financeira                                | 1000 × 500 | Recorte estático de saldo e extrato                    |
| 10  | Plataforma / Checkout                                         | 1000 × 500 | Recortes estáticos de oferta e resumo                  |
| 11  | Plataforma / Integrações                                      | 1000 × 500 | Microfluxo animado de evento e entrega                 |
| 20  | Cenários / `operators` — Lance sua operação                   | 1200 × 640 | Composição estática da base pronta sob uma marca       |
| 21  | Cenários / `platforms` — Migre uma operação existente         | 1200 × 640 | Diagrama de origem, avaliação e transição condicionada |
| 22  | Cenários / `creators` — Incorpore pagamentos à sua plataforma | 1200 × 640 | Sistemas existentes conectados à base de pagamentos    |
| 12  | Controle / Operação                                           | 1000 × 850 | Print real + foco em cadastro e histórico              |
| 13  | Controle / Comercial                                          | 1000 × 850 | Print real + foco em exceção por seller                |
| 14  | Controle / Financeiro                                         | 1000 × 850 | Print real + foco em solicitação de saque              |
| 16  | Gestão financeira / Visão financeira                          | 1200 × 800 | UI por competência + decomposição guiada               |
| 15  | Experiência de venda / Checkout da operação                   | 1440 × 760 | UI desktop/mobile + sequência de compra                |
| 17  | Integrações / Seu ecossistema                                 | 1200 × 720 | Mapa animado de conexões de negócio                    |
| 18  | Integrações / API e entrega de eventos                        | 1200 × 600 | Sequência técnica animada com retentativa              |
| 19  | Confiança operacional / Arquitetura da operação               | 1200 × 700 | Fronteiras de tenant + idempotência + filas            |

### Correspondência técnica e limite da hero

A primeira dobra permanece exatamente como está: “Seu gateway”, “Seus sellers” e “Seu checkout”. A antiga proposta de substituir a terceira aba por staff está cancelada. Não trocar rótulos, descrições, ordem ou conteúdo representado; staff aparece apenas quando necessário nas peças de equipe e controle.

| IDs   | Componente / seção                          | Fonte atual do label / chave do slot                                                                            |
| ----- | ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 01–03 | `hero-section.tsx` / `#inicio`              | `introduction.previews.{gateway,seller,checkout}.image`                                                         |
| 04–11 | `platform-section.tsx` / `#plataforma`      | `capabilities.items.{identity,policies,people,engagement,acquiring,finance,checkout,integrations}.illustration` |
| 20–22 | `solutions-section.tsx` / `#solucoes`       | `audience.items.{operators,platforms,creators}.image`                                                           |
| 12–14 | `control-section.tsx` / `#controle`         | `operations.contexts.{management,commercial,finance}.illustration`                                              |
| 16    | `finance-section.tsx` / `#financeiro`       | `ledger.illustration`                                                                                           |
| 15    | `checkout-section.tsx` / `#checkout`        | `sales.illustration`                                                                                            |
| 17–18 | `integrations-section.tsx` / `#integracoes` | `connectivity.illustration` / `connectivity.eventsIllustration`                                                 |
| 19    | `scale-section.tsx` / `#escala`             | `reliability.illustration`                                                                                      |

As chaves `operators`, `platforms` e `creators` são identificadores técnicos legados: representam, nessa ordem, lançamento, migração e incorporação. Não produzir artes a partir dos nomes antigos das chaves. Não existem cards de provedores, slots de logos de adquirentes/plugins ou biblioteca de evidências na estrutura atual; não reinserir esses blocos para cumprir este roteiro.

Na substituição futura, usar o espaço do `ArtPlaceholder` existente, mantendo canvas, moldura, padding, bordas, ordem responsiva e legendas externas. `src` atende assets estáticos; motion exige um renderizador compatível no mesmo quadro e só deve ser integrado em etapa autorizada. Os alts abaixo são entregáveis de produção, não textos já conectados ao componente. Não usar o texto genérico “Espaço reservado” como alt do asset final.

## 3. Regras de produção para todas as peças

### 3.1 Produto, dados e verdade visual

- Usar uma marca demonstrativa única: **Aurora — operação demonstrativa**, com logo original, sem sugerir cliente real. Empregar a mesma identidade em gateway, staff, seller e checkout.
- Sellers fictícios: “Estúdio Horizonte”, “Ateliê Norte” e “Cursos Prisma”. Perfis de equipe também fictícios. Não capturar credenciais ou dados de pessoas, mesmo que o banco atual seja mock.
- Toda peça com números ou estados transacionais recebe “Demonstração · dados fictícios” em área visível e persistente, inclusive nos zooms. Taxas da demo não são preços da Paragan.
- Capturar interfaces existentes, com dados preparados para a cena. Não redesenhar botões, métricas ou telas inexistentes para parecerem recursos já entregues.
- Ilustração conceitual não é screenshot: identificar como “Fluxo ilustrativo” quando apresentar transições de estado, processamento ou conexões.
- Números podem ter revelação, máscara ou destaque, mas não contadores de receita crescendo indefinidamente. Mudanças numéricas só em exemplos determinísticos, com estados inicial/final identificados.
- Não transformar “pendente” em “pago” por clique de interface. Confirmação depende do resultado financeiro; timeout não representa recusa. Saque solicitado não representa transferência liquidada.
- Não mostrar PAN, CVV, CPF/CNPJ, e-mail de comprador, conta bancária, QR Pix pagável, token, segredo de webhook ou chave de API. Endereços ilustrativos usam `example.com`; códigos usam identificadores como `pedido_demo_01`.
- Aplicar os limites de `01-inventario-de-capacidades.md` e `06-evidencias-e-publicacao.md`. A existência da rota é referência de captura, não prova de homologação. Recursos condicionais exigem validação antes da arte final.

### 3.2 Linguagem visual

- UI frontal, nítida, sem perspectiva 3D. Diagramas com linhas ortogonais ou curvas suaves; nunca uma rede aleatória.
- Recortes mantêm tipografia, badges, hierarquia e espaçamento do produto. A moldura da landing não deve se confundir com um controle funcional do dashboard.
- Diagramas usam o mesmo desenho de cards, ícones e estados. Acento de marca para foco; cores de status acompanhadas de texto/ícone, não como única informação.
- Poucos elementos: uma ideia principal e até três grupos de apoio por peça. Um diagrama maior pode ter mais nós, desde que permaneçam agrupados e legíveis.
- Cada conector precisa ter origem, destino e significado. Diferenciar comando, resposta, evento e delegação; não usar a mesma seta para tudo.
- Temas: hero na identidade Aurora; controle em escuro; restante acompanha a seção. Exportar variantes claras/escuras onde necessário, sem inverter um print por filtro CSS.

### 3.3 Formatos e entregáveis

- **Print verdadeiro:** PNG mestre em 2×; derivados AVIF/WebP. Usar quando a fidelidade da UI for mais importante que separar elementos.
- **Dashboard vetorizado:** SVG em camadas, reconstruído a partir da captura real. Screenshot não se torna vetor por ser embutido em `<image>`; essa versão é híbrida e não oferece texto vetorial nos zooms.
- **SVG animado:** preferência para câmera, diagramas com textos e destaques de componentes. Separar shell, toolbar, KPIs, gráfico, tabela, badges, conectores e máscara de câmera.
- **Lottie:** alternativa para diagramas com coreografia mais complexa. Exportar paths, transforms e opacidade; evitar efeitos pesados, fontes remotas e dependências de plugins. Labels podem ficar em SVG/HTML sobreposto para legibilidade.
- Cada ID entrega: fonte editável, asset final, poster estático, variante mobile quando o recorte mudar e texto alternativo. Nomes sugeridos: `01-hero-gateway`, `08-rotas-elegiveis`, etc., com sufixos `-poster`, `-mobile`, `-dark` e `-light` conforme necessário.
- Grupos animáveis com nomes semânticos: `camera`, `kpi-volume`, `seller-row-horizonte`, `route-primary`, `event-delivery`. Sem scripts, links ativos, imagens externas ou metadados sensíveis nos exports.

### 3.4 Motion, leitura e comportamento

- Hero: poster estático é a entrega inicial; câmera/motion só em etapa autorizada, sem mudar a primeira dobra. Para gateway/seller, passeio de 14–18 s, câmera entre 1× e 1,65× e pausas de leitura. Checkout mantém o estado da oferta. Percurso curvo significa pan contínuo, **não girar a interface ou rodar a câmera em 360°**.
- Diagramas: cenas de 6–10 s; transições locais de 200–400 ms; segurar o resultado por pelo menos 2 s. Linhas aparecem antes do pulso que percorre a conexão.
- Apenas uma trilha de ação por vez. Nada piscando simultaneamente em todos os cards.
- Reproduzir uma vez quando a peça entrar em viewport. Reiniciar somente por “Rever animação”; não criar 22 loops concorrentes. Hero anima apenas a aba ativa, sem alternar abas automaticamente.
- Pausar ao sair da viewport ou ocultar a página. Nas abas, cancelar a sequência anterior e iniciar a nova em enquadramento completo. Oferecer pausar/rever acessíveis para peças prolongadas.
- `prefers-reduced-motion`: poster completo, sem pan, zoom, pulsos ou autoplay. Nenhuma informação depende de assistir à sequência.
- Mobile: priorizar um recorte legível, não reduzir uma tela de 1600 px até virar miniatura. Não exigir hover ou scroll horizontal. Hero gateway/seller prioriza KPI + gráfico; hero checkout prioriza oferta + resumo. Diagramas usam composição vertical ou poster resumido dentro do quadro existente.
- Reservar aspect ratio antes de carregar; poster da primeira aba da hero tem prioridade. Demais arquivos carregam sob demanda. Metas iniciais, a medir: SVG diagramático até 150 KB gzip; Lottie até 250 KB gzip; poster até 250 KB; dashboard vetorial até 500 KB gzip. Se exceder, simplificar ou usar híbrido; não sacrificar leitura.

## 4. Roteiro das 22 peças

Nas fontes abaixo, caminhos `app/` e `components/` são relativos a `Paragan-GatewayFront`; o arquivo de posição é relativo a `Paragan-LP/src/components/landing/sections/`. As fichas mantêm a ordem dos IDs para referência; a ordem de exibição é a da tabela acima. Antes de capturar, confirmar caminhos, campos e estados reais; referência de tela não autoriza preencher lacunas da UI por desenho.

### 01 — Hero: quem dirige o gateway

**Posição:** `hero-section.tsx`, aba `gateway`. **Formato:** dashboard real vetorizado, SVG + poster estático, 1600 × 860; animação de câmera somente após autorização.

**Propósito:** demonstrar a visão consolidada e os pontos que exigem ação do dono da operação.

**Capturar/desenhar:** `app/(app)/gateway-admin/page.tsx`, `components/gateway-admin/dashboard-content.tsx`. Manter shell, identidade, período selecionado, faixa de indicadores, gráfico de volume e alertas de KYC/disputas. Se os atalhos estiverem abaixo do viewport, usar uma captura alta recortada pela câmera, sem comprimir artificialmente a página.

**Storyboard — 16 s:** 0–3 s visão frontal completa; 3–6 s aproximar indicadores, revelando valores já fixos; 6–10 s arco suave em direção ao gráfico, destacar um ponto e sua legenda; 10–13 s pan até alerta de cadastro e atalho “Revisar KYC”; 13–16 s recuar à visão completa e segurar. O ponto do gráfico pode reproduzir um tooltip real capturado; não inventar drill-down.

**Poster/mobile:** enquadramento com identificação do gateway, três KPIs e gráfico; recorte mobile permanece nessa composição. **Alt:** “Dashboard demonstrativo do gateway com indicadores, volume e pendências operacionais.”

**Evitar:** mostrar master, todos os indicadores melhorando ou vendas surgindo em tempo real sem fonte. O passeio da câmera é a animação; o resultado financeiro não muda.

### 02 — Hero: quem vende na plataforma

**Posição:** `hero-section.tsx`, aba `seller`. **Formato:** SVG vetorizado + poster estático, 1600 × 860; animação de câmera somente após autorização.

**Propósito:** mostrar que o seller recebe uma experiência própria, conectada à mesma marca.

**Capturar/desenhar:** `app/(app)/seller/page.tsx`, `components/seller/home-content.tsx`. Selecionar o estado completo, sem skeletons: indicadores de vendas/saldo, gráfico de volume e atalhos reais “Cobrar cliente”, “Solicitar saque” e, se habilitado, “Dividir pagamentos”. Não acrescentar catálogo à home se ele não estiver nela.

**Storyboard — 16 s:** 0–3 s painel completo; 3–6 s câmera no grupo de vendas; 6–9 s curva curta até saldo e retenções; 9–12 s acompanhar o gráfico sem alterar sua série; 12–14 s foco nos atalhos; 14–16 s voltar ao plano geral. Destacar a diferença entre volume vendido e saldo, sem tratá-los como a mesma métrica.

**Poster/mobile:** vendas, saldo e parte legível do gráfico. **Alt:** “Dashboard demonstrativo do seller com vendas, saldo e recursos da operação.”

### 03 — Hero: onde o comprador paga

**Posição:** `hero-section.tsx`, aba `checkout`, preservada. **Formato:** captura real ou SVG híbrido estático, 1600 × 860; eventual foco de câmera depende de autorização posterior.

**Propósito:** mostrar a experiência de compra oferecida aos sellers sob a marca da operação, sem substituir essa perspectiva por um painel de equipe.

**Capturar/desenhar:** checkout público `app/(checkout)/[publicId]/page.tsx`, mesma oferta “Kit Horizonte” das peças 10 e 15. Mostrar identidade Aurora, produto, preço, resumo e métodos efetivamente habilitados. Usar estado anterior ao cupom/adicional: oferta de R$ 200,00 e total de R$ 200,00, se confirmado pela cotação real. Não mostrar dados de comprador, cartão ou QR pagável.

**Composição:** interface frontal completa com oferta e resumo legíveis. Manter preço e estado fixos. Não executar compra, aplicar cupom ou exibir confirmação nessa peça; a sequência detalhada pertence à peça 15. Se motion for autorizado, somente foco local na oferta e no resumo, sem trocar abas automaticamente.

**Poster/mobile:** produto, oferta e resumo do mesmo checkout em recorte legível. **Alt:** “Checkout demonstrativo sob a marca da operação com oferta, resumo e métodos de pagamento habilitados.”

### 04 — Plataforma: identidade que chega às superfícies

**Posição:** `platform-section.tsx`, módulo 01 / Identidade. **Formato:** recortes reais em SVG + transição curta, 1000 × 500.

**Propósito:** explicar o efeito da configuração de marca, não somente mostrar uma paleta bonita.

**Capturar/desenhar:** detalhe do Studio em `app/(app)/gateway-admin/branding/theme/page.tsx`; referência `components/gateway-admin/branding-theme-content.tsx`. À esquerda, logo e tokens; à direita, dois recortes: cabeçalho seller e cabeçalho do checkout. Conectores editoriais partem da marca para cada superfície. URLs, se usadas, são ilustrativas e não “domínio ativado”.

**Storyboard — 7 s:** 0–2 s configuração Aurora já visível; 2–4 s traçar conexões; 4–5 s destacar aplicação do mesmo logo/acento nos dois recortes; 5–7 s composição final. Se comparar antes/depois, capturar dois estados reais; não sugerir publicação instantânea de DNS, e-mails ou identidade legal.

**Poster/mobile:** marca acima, duas superfícies abaixo. **Alt:** “Identidade demonstrativa aplicada ao painel seller e ao checkout.”

### 05 — Plataforma: padrão e exceção comercial

**Posição:** módulo 02 / Regras comerciais. **Formato:** composição estática de UI, SVG ou AVIF, 1000 × 500.

**Propósito:** deixar legível que existem regras da operação e configurações específicas.

**Capturar/desenhar:** `app/(app)/gateway-admin/commission-config/page.tsx` e `fee-config/page.tsx`. Recortar duas linhas reais de comissão: “Padrão do gateway” e “Por seller”; acrescentar detalhe do formulário existente com modelo “Híbrida”, componentes fixo e percentual. Não montar um editor unificado inexistente. Usar título editorial fora dos recortes: “Padrão da operação / Condição específica”.

**Composição:** padrão atrás à esquerda; exceção em primeiro plano à direita; até três campos legíveis. Valores, se presentes, identificados como exemplo, não proposta comercial. Sem animação: o leitor precisa comparar os termos.

**Poster/mobile:** dois cards empilhados, sem formulário completo. **Alt:** “Configurações demonstrativas de comissão padrão e condição específica por seller.”

### 06 — Plataforma: acesso acompanha responsabilidade

**Posição:** módulo 03 / Pessoas. **Formato:** diagrama SVG animado, 1000 × 500.

**Propósito:** explicar governança de equipe e delimitação por carteira.

**Desenhar:** nó gateway no alto; dois nós “Equipe A” e “Equipe B”; três sellers abaixo. Equipe A conectada a Horizonte e Prisma; Equipe B a Norte. Em A, chips “Consultar carteira” e “Revisar cadastro”, conforme permissões reais do perfil de demo. Base visual: `gateway-admin/staff/page.tsx`, `staff/portfolio/page.tsx` e `staff/account-applications/page.tsx` dentro de `app/(app)/`.

**Storyboard — 8 s:** 0–2 s gateway e equipes; 2–4 s desenhar vínculos de atribuição; 4–6 s ativar A, destacar apenas seus dois sellers e seus chips; 6–8 s manter Norte sem caminho ativo. Linhas significam carteira atribuída, não fluxo de dinheiro. Não desenhar atravessamento entre as duas carteiras.

**Poster/mobile:** uma equipe, dois sellers e seus acessos. **Alt:** “Diagrama de equipe com acesso delimitado aos sellers da carteira atribuída.”

### 07 — Plataforma: campanha e jornada não são a mesma coisa

**Posição:** módulo 04 / Relacionamento. **Formato:** composição estática de recortes reais, 1000 × 500.

**Propósito:** apresentar dois mecanismos distintos de reconhecimento.

**Capturar/desenhar:** `app/(app)/seller/leaderboard/page.tsx` e `seller/journey/page.tsx`; configurações em `gateway-admin/leaderboard/page.tsx` e `gateway-admin/revenue-rewards/page.tsx`. À esquerda, campanha com período e pódio; à direita, um nível da jornada por faturamento acumulado e o próximo marco. Preservar anonimato do ranking quando aplicado pela tela.

**Composição:** dois recortes com labels editoriais “Ranking por campanha” e “Jornada acumulada”. Insígnias vêm do produto; não adicionar dinheiro/cashback. Estático para não sugerir sellers subindo de posição a cada segundo.

**Poster/mobile:** dois cards empilhados. **Alt:** “Ranking demonstrativo por campanha ao lado da jornada de reconhecimento por faturamento.”

### 08 — Plataforma: escolher uma rota elegível

**Posição:** módulo 05 / Adquirência. **Formato:** SVG animado ou Lottie, 1000 × 500.

**Propósito:** explicar seleção por regras, sem prometer otimização automática por IA.

**Desenhar:** entrada “Pagamento · cartão”; nó “Regras da operação”; três saídas “Rota A”, “Rota B” e “Rota C”. Chips de contexto: método e parcelas. A elegível/prioritária; B elegível/alternativa; C incompatível com o exemplo. Referência de UI: `app/(app)/gateway-admin/acquirers/routing-rules/page.tsx` e `acquirers/page.tsx`. Não usar logos de processadores não confirmados comercialmente.

**Storyboard — 8 s:** 0–2 s contexto; 2–4 s pulso entra no nó de regras; 4–5 s C recebe label “Não elegível”; 5–6 s A recebe label “Selecionada” e pulso; 6–8 s B permanece alternativa. Só um caminho recebe o pagamento. Não finalizar com “aprovado”: seleção da rota não é aprovação financeira.

**Poster/mobile:** entrada → regras → selecionada, com alternativas menores. **Alt:** “Fluxo ilustrativo de seleção de rota conforme elegibilidade e prioridade.”

### 09 — Plataforma: saldo não é um número único

**Posição:** módulo 06 / Gestão financeira. **Formato:** recorte estático real, 1000 × 500.

**Propósito:** diferenciar disponível, pendente e reservado, com lastro no extrato.

**Capturar/desenhar:** `app/(app)/seller/financial/page.tsx` e `financial/transactions/page.tsx`. Três cards de saldo e três linhas reais de extrato com tipo, data, valor e estado; selecionar os campos realmente existentes. Usar um só período e a mesma conta; não afirmar que os três lançamentos explicam sozinhos todo o saldo.

**Composição:** saldos na parte superior; extrato embaixo; destacar reservado com label, não cadeado dramático. Sem animação financeira.

**Poster/mobile:** três saldos empilhados e um lançamento. **Alt:** “Saldos demonstrativos disponível, pendente e reservado com recorte de extrato.”

### 10 — Plataforma: a oferta compõe o resumo

**Posição:** módulo 07 / Checkout. **Formato:** composição estática de componentes reais, 1000 × 500.

**Propósito:** mostrar produto, oferta e total como partes de uma mesma experiência.

**Capturar/desenhar:** detalhe de `app/(app)/seller/products/[id]/page.tsx` e resumo de `app/(checkout)/[publicId]/page.tsx`. Produto fictício “Kit Horizonte”, oferta de R$ 200,00, adicional de R$ 40,00; total sem desconto R$ 240,00. Esses mesmos itens serão usados na peça 15. Conferir a configuração real antes da captura.

**Composição:** miniatura original do produto à esquerda; card de oferta no centro; resumo à direita. Conectores estáticos “Oferta → Checkout”, sem ilustrar vários pedidos para a mesma compra.

**Poster/mobile:** oferta sobre resumo. **Alt:** “Produto e oferta demonstrativos conectados ao resumo do checkout.”

### 11 — Plataforma: evento entregue com histórico

**Posição:** módulo 08 / Integrações. **Formato:** SVG animado, 1000 × 500.

**Propósito:** introduzir webhooks de forma simples; a peça 18 mostrará os detalhes técnicos.

**Desenhar:** card “Evento de pagamento confirmado”, nó “Webhook”, destino “Seu sistema” e abaixo uma pequena linha de histórico extraída de `app/(app)/seller/webhooks/[id]/page.tsx`. Usar o nome técnico do evento somente após conferir o catálogo real; não inventar enum.

**Storyboard — 6 s:** 0–1 s evento já confirmado; 1–3 s conector ao webhook e pulso até destino; 3–4 s retorno “Recebido · HTTP 200”; 4–6 s histórico “Entregue · tentativa 1”. A resposta confirma entrega do webhook, não aprovação da venda.

**Poster/mobile:** fluxo de três nós e histórico. **Alt:** “Fluxo ilustrativo de evento enviado por webhook e registrado no histórico de entrega.”

### 12 — Controle / Operação: consultar antes de decidir

**Posição:** `control-section.tsx`, aba `management` / Operação. **Formato:** print escuro em camadas + foco local, 1000 × 850.

**Propósito:** demonstrar contexto operacional e rastreabilidade da revisão de cadastro.

**Capturar/desenhar:** `app/(app)/gateway-admin/sellers/page.tsx` como pano de fundo; detalhe real de `account-applications/[id]/page.tsx` à frente. Selecionar cadastro demonstrativo em análise, com histórico e notas; recortar documentos sem conteúdo pessoal. A composição de duas telas deve ser reconhecível como montagem editorial.

**Storyboard — 8 s:** 0–2 s base de sellers; 2–4 s destacar a linha correspondente; 4–6 s detalhe entra com status e informação de revisão; 6–8 s foco no histórico. Não clicar em aprovar nem mudar o estado para simular sucesso.

**Poster/mobile:** detalhe de cadastro com status e histórico; tabela secundária. **Alt:** “Revisão demonstrativa de cadastro com seller, status e histórico de decisões.”

### 13 — Controle / Comercial: uma condição para esse relacionamento

**Posição:** `control-section.tsx`, aba `commercial` / Comercial. **Formato:** print escuro + aproximação, 1000 × 850.

**Propósito:** provar configuração por seller, além da visão geral do módulo 05.

**Capturar/desenhar:** `app/(app)/gateway-admin/commission-config/page.tsx`, formulário real de configuração por seller aberto. Enquadrar escopo, seller selecionado, modelo de comissão e campos correspondentes. A tela de taxas pode aparecer como pequeno apoio separado; não somar conceitos distintos num mesmo formulário fictício.

**Storyboard — 8 s:** 0–2 s configuração completa; 2–4 s aproximar escopo “Por seller”; 4–6 s deslocar aos componentes fixo/percentual do modelo híbrido; 6–8 s voltar ao enquadramento legível. Valores fixos, sem “salvo com sucesso” inventado.

**Poster/mobile:** escopo, seller e modelo em foco. **Alt:** “Configuração demonstrativa de comissão específica para um seller.”

### 14 — Controle / Financeiro: solicitar não é liquidar

**Posição:** `control-section.tsx`, aba `finance` / Financeiro. **Formato:** print escuro + destaque de fila, 1000 × 850.

**Propósito:** mostrar supervisão de saques, distinta da análise de custos da peça 16.

**Capturar/desenhar:** `app/(app)/gateway-admin/withdrawals/page.tsx`; uma solicitação pendente e seu detalhe, se disponível na interface. Cards de saldo/reserva podem vir do detalhe do seller em montagem separada, apenas se a tela realmente os fornecer. Não apresentar dados bancários.

**Storyboard — 8 s:** 0–2 s fila; 2–4 s foco em uma solicitação; 4–6 s destacar valor e estado atual; 6–8 s enquadrar ações autorizadas sem executá-las. Não terminar em “transferido”.

**Poster/mobile:** solicitação, valor e estado pendente. **Alt:** “Fila demonstrativa de solicitações de saque com valor, estado e controles de revisão.”

### 15 — Experiência de venda: da composição ao recibo

**Posição:** `checkout-section.tsx`, único quadro “Checkout da operação · desktop e mobile”. **Formato:** capturas reais desktop/mobile, SVG híbrido + sequência de estados, 1440 × 760. Desktop e mobile pertencem à mesma arte, não a dois novos blocos.

**Propósito:** demonstrar clareza da compra e continuidade após a confirmação financeira.

**Capturar/desenhar:** checkout público `app/(checkout)/[publicId]/page.tsx` e recibo em `[publicId]/thanks/page.tsx`; referências de configuração em `seller/products/[id]/page.tsx` e `seller/checkout/builder/page.tsx`. Desktop ocupa aproximadamente 70% da composição; recorte mobile ocupa o restante, sem moldura de celular pesada. Produto de R$ 200,00, cupom fixo de R$ 20,00 elegível à oferta principal e adicional de R$ 40,00: total final R$ 220,00, desde que a cotação real confirme esse cenário.

**Storyboard — 12 s:** 0–3 s produto, oferta e resumo; 3–5 s aplicar o cupom demonstrativo e mostrar total validado de R$ 180,00; 5–7 s selecionar adicional e exibir R$ 220,00; 7–9 s mostrar estado “Aguardando confirmação”, sem QR pagável; 9–12 s transição explicitamente ilustrativa “Após confirmação do pagamento” para recibo com os mesmos itens e total. Capturar cada estado real separadamente; não depender da landing executar uma compra.

**Poster/mobile:** estado final do resumo com cupom/adicional, não somente tela de obrigado. Mobile usa o checkout mobile como protagonista. **Alt:** “Checkout demonstrativo desktop e mobile com produto, cupom, adicional e resumo da compra.”

**Evitar:** depoimentos ou notificações de compra configuradas como prova social; frete integrado fictício; upsell one-click; biblioteca de aulas como se fosse LMS.

### 16 — Gestão financeira: composição, não lucro mágico

**Posição:** `finance-section.tsx`. **Formato:** UI real por competência + destaques SVG, 1200 × 800.

**Propósito:** explicar onde observar receitas, custos e lacunas de informação.

**Capturar/desenhar:** `app/(app)/gateway-admin/financial-overview/page.tsx`, `components/gateway-admin/financial-overview/financial-overview-content.tsx`. Preservar seletor de competência, filtro de escopo, resumo e um bloco expandido. Selecionar adquirência e estrutura comercial; demais escopos somente se houver dados legíveis.

**Storyboard — 10 s:** 0–2 s visão por competência; 2–4 s foco na receita; 4–6 s foco nos custos correspondentes; 6–8 s detalhamento do escopo; 8–10 s plano completo. Revelar linhas, não mudar seus valores. Manter `—`/indisponível quando custo não estiver informado; não convertê-lo em zero. Labels seguem a UI: não renomear resultado operacional como lucro líquido contábil.

**Poster/mobile:** competência, resumo e um detalhe expandido. **Alt:** “Visão financeira demonstrativa por competência com composição de receitas e custos.”

### 17 — Integrações: onde a plataforma se conecta

**Posição:** `integrations-section.tsx`, “Seu ecossistema”. **Formato:** diagrama SVG animado, 1200 × 720.

**Propósito:** distinguir integração com sistemas do negócio de processamento com parceiros habilitados.

**Desenhar:** centro “Sua operação”; à esquerda “Seu site / produto” e “Seu backoffice”; à direita grupo “Processadores habilitados”; embaixo “Seu sistema de atendimento / gestão”. Conectores separados: site → operação “API”; operação ↔ processador “Solicitação / resultado”; operação → gestão “Eventos”. Não representar CRM/ERP como aplicativos nativos já instalados: são sistemas próprios integráveis. Referências: `seller/integrations/page.tsx`, `seller/keys/page.tsx`, `gateway-admin/acquirers/page.tsx` em `app/(app)/`.

**Storyboard — 9 s:** 0–2 s centro e grupos; 2–4 s comando do site à operação; 4–6 s ida/volta com um processador; 6–7 s somente após resultado conhecido emitir evento à gestão; 7–9 s manter labels e mapa completo. A conexão API do backoffice pode permanecer estática para não criar tráfego decorativo.

**Poster/mobile:** operação ao centro de uma pilha de três grupos. **Alt:** “Mapa ilustrativo das conexões por API, processamento e eventos da operação.”

### 18 — Integrações: entrega falha, histórico permanece

**Posição:** “API e entrega de eventos”. **Formato:** sequência SVG/Lottie + pequeno recorte real do histórico, 1200 × 600.

**Propósito:** mostrar rastreabilidade e retentativa, sem prometer entrega instantânea ou exatamente uma vez.

**Desenhar:** duas faixas. Superior: “Seu sistema → API → resposta com ID”, representando uma consulta de pedido existente, sem inventar endpoint. Inferior: “Evento → fila de entrega → endpoint → histórico”. Recorte de `app/(app)/seller/webhooks/[id]/page.tsx`; labels “Tentativa 1 · HTTP 500” e “Tentativa 2 · HTTP 200” só se compatíveis com o histórico real capturado. Segredos permanecem ausentes.

**Storyboard — 10 s:** 0–2 s consulta/retorno na faixa superior; 2–4 s evento entra na fila e sai para endpoint; 4–5 s primeira entrega falha; 5–7 s registrar falha e aguardar retentativa, com texto “Intervalo ilustrativo”; 7–8 s nova entrega recebe 200; 8–10 s duas tentativas visíveis no histórico. Falha de webhook não reabre nem desfaz pagamento; não reenviar cobrança.

**Poster/mobile:** histórico de duas tentativas e fluxo simplificado, sem payload minúsculo. **Alt:** “Fluxo ilustrativo de webhook com falha inicial, retentativa e histórico de entrega.”

### 19 — Confiança operacional: examinar as fronteiras

**Posição:** `scale-section.tsx`. **Formato:** diagrama SVG animado, 1200 × 700.

**Propósito:** tornar isolamento, consistência e visibilidade compreensíveis sem prometer throughput ou infraestrutura dedicada.

**Desenhar:** contêiner “Infraestrutura compartilhada”; dentro, dois contextos separados “Gateway Aurora” e “Gateway Boreal — exemplo”, cada um com seus usuários e dados. No contexto Aurora, caminho “Solicitação → controle de repetição → pagamento existente → evento → fila de entrega”. Na borda, nó “Registros e métricas”. Fronteiras são lógicas; não desenhar dois datacenters exclusivos. Não capturar master nem apresentar observabilidade interna como painel contratado.

**Storyboard — 10 s:** 0–3 s apresentar contextos e conexões confinadas; 3–5 s solicitação Aurora gera um registro de pagamento; 5–7 s duplicata com a mesma identidade retorna ao mesmo registro, label “Mesma operação”, sem segundo pagamento; 7–8 s evento vai à fila de apoio; 8–10 s registro de execução chega à observabilidade. Nenhuma linha leva dados Aurora a Boreal. A fila representa tarefas assíncronas de apoio, não uma afirmação de que toda autorização de pagamento passa por ela.

**Poster/mobile:** contextos isolados e um fluxo de repetição simplificado. **Alt:** “Arquitetura ilustrativa com isolamento de contextos, controle de repetição e registros operacionais.”

### 20 — Cenários: lançar com uma base pronta

**Posição:** `solutions-section.tsx`, primeiro bloco, `operators` / “Lance sua operação.”. **Formato:** composição estática de recortes reais, 1200 × 640, no quadro largo existente.

**Propósito:** mostrar o conjunto existente que a empresa contrata e configura, não uma plataforma a construir do zero nem uma licença bancária.

**Capturar/desenhar:** painel gateway-admin como peça principal; pequeno recorte seller ao lado; cabeçalho do checkout abaixo. Usar as fontes de 01, 02 e 15 com enquadramentos diferentes. Três labels editoriais: “Sua gestão”, “Sua base”, “Sua experiência de compra”. Marca Aurora consistente; condição comercial do módulo 05 como detalhe, se houver espaço.

**Composição:** um painel dominante, dois apoios. Labels editoriais secundários “Marca e acessos”, “Condições dos sellers” e “Métodos a habilitar”, sem status “Pronto para operar”. A peça aparece logo após os oito mecanismos da plataforma: sintetizar a base disponível sem repetir um card inteiro ou sugerir ativação instantânea. Sem autoplay.

**Poster/mobile:** gateway e dois cabeçalhos, mantendo os labels. **Alt:** “Painéis e checkout demonstrativos reunidos sob uma mesma identidade de marca.”

**Evitar:** cartão bancário, licença BACEN, conta digital ou bandeiras sugerindo serviços universais não confirmados.

### 21 — Cenários: avaliar antes de migrar

**Posição:** `solutions-section.tsx`, segundo bloco, `platforms` / “Migre uma operação existente.”. **Formato:** diagrama SVG, poster estático e sequência opcional, 1200 × 640. Preservar a alternância imagem/texto do template.

**Propósito:** explicar a avaliação de origem e os critérios de transição, sem prometer importar toda a base ou portar tokens automaticamente.

**Desenhar:** três grupos “Operação de origem” → “Avaliação e ensaio” → “Base Paragan”. Na origem, “Dados”, “Contratos” e “Integrações”; no grupo central, “Portabilidade a verificar”, “Escopo acordado” e “Critérios de aceite”; no destino, pequeno recorte real de sellers ou configurações da marca Aurora. Usar `app/(app)/gateway-admin/sellers/page.tsx` apenas como referência de destino, não como evidência de um importador. Tokens ficam em uma nota “Elegibilidade depende dos provedores”, sem valores nem representação de cópia de credenciais.

**Storyboard opcional — 8 s:** 0–2 s origem e destino separados; 2–4 s revelar o grupo de avaliação; 4–6 s destacar “Ensaio / critérios de aceite”; 6–8 s revelar conexão tracejada ao destino com label “Transição conforme escopo”. Não animar registros atravessando como importação concluída, zerar a plataforma anterior ou mostrar um selo universal de sucesso. Todas as etapas permanecem legíveis no poster.

**Poster/mobile:** três grupos verticais dentro do mesmo canvas, com dependência de portabilidade visível. **Alt:** “Fluxo ilustrativo de migração com análise da origem, avaliação de portabilidade, ensaio e transição conforme escopo.”

### 22 — Cenários: incorporar pagamentos aos processos existentes

**Posição:** `solutions-section.tsx`, terceiro bloco, `creators` / “Incorpore pagamentos à sua plataforma.”. **Formato:** diagrama SVG com recorte real de apoio, poster estático e sequência opcional, 1200 × 640.

**Propósito:** mostrar como uma empresa conecta a base de pagamentos à plataforma que já possui, mantendo claros os sistemas próprios, o produto Paragan e o papel dos sellers.

**Desenhar:** à esquerda “Sua plataforma existente”, com “Pedidos / serviços” e “Seu backoffice”; à direita “Base de pagamentos”, com “Sellers”, “Pagamentos” e “Consulta de estados”. Dois conectores distintos: “Comandos / consultas por API” e “Eventos por webhook”. Um recorte real de `app/(app)/gateway-admin/sellers/page.tsx` pode apoiar a base; referências técnicas em `seller/integrations/page.tsx` e `seller/webhooks/[id]/page.tsx`, sem exibir segredos. Não desenhar marketplace público, CRM nativo ou plugin pronto não confirmado. A interface do sistema externo, se ilustrada, precisa ser identificada como conceitual.

**Storyboard opcional — 8 s:** 0–2 s apresentar os dois contextos; 2–4 s revelar a conexão API; 4–6 s mostrar uma consulta de estado e seu retorno, sem endpoint inventado; 6–8 s destacar o conector de eventos e manter a composição completa. A comunicação não representa aprovação ou liquidação. Não simular instalação em um clique nem integração de qualquer sistema sem avaliação.

**Poster/mobile:** dois contextos empilhados, API e eventos com sentidos e labels distintos. **Alt:** “Diagrama ilustrativo de uma plataforma existente conectada à base de pagamentos e sellers por API e webhooks.”

## 5. Continuidade entre as peças

- Aurora é a mesma operação nas 22 artes; seller Horizonte e produto Kit Horizonte reaparecem quando ajudam a entender a continuidade.
- 01/02/03 apresentam operador, seller e experiência do comprador; 06 explica a delimitação da equipe; 12 mostra uma decisão dentro dela. A peça 03 é checkout, nunca staff.
- 05 apresenta configuração; 13 mostra seu detalhe. Não repetir a mesma captura nos dois tamanhos.
- 09 diferencia saldos; 14 mostra governança de saída; 16 explica receita/custo. Não misturar extrato seller com resultado do gateway como se fossem um único caixa.
- 03 apresenta o checkout; 10 explica a composição da oferta; 15 demonstra a jornada de compra. Mesmo produto, mesma oferta e totais coerentes nos estados equivalentes. A entrega digital fica na peça 15, não no cenário de incorporação.
- 08 explica seleção de rota; 17 explica ecossistema; 18 explica entrega de eventos; 19 explica fronteiras e repetição. Cada diagrama responde a uma pergunta diferente.
- 20/21/22 aparecem antes do controle e representam lançamento, migração e incorporação. A base é a mesma; requisitos, dependências e conexão com o negócio mudam. Não acrescentar módulos ou promessas para diferenciar os cenários.
- 17 detalha o ecossistema técnico; 22 explica o encaixe no negócio. Evitar repetir o mesmo mapa: 22 tem dois contextos, 17 distingue sistemas externos e processadores.

## 6. Conferência antes da produção final

1. Conferir os 22 slots, chaves e canvases da tabela contra os componentes atuais; preservar primeira dobra, templates e ordem responsiva. Capturar gateway, seller e checkout sob a mesma identidade; staff apenas como apoio onde previsto.
2. Confirmar a disponibilidade dos componentes escolhidos no ambiente de captura; se um recurso estiver parcial, usar o estado comprovado, não completar a UI por ilustração.
3. Validar a cotação do exemplo de checkout e a consistência entre pedido, recibo e financeiro.
4. Separar no arquivo-fonte UI real, labels editoriais e conectores conceituais; nenhum acréscimo deve parecer funcionalidade nativa.
5. Aprovar posters primeiro; se a mensagem não funcionar estática, o motion ainda não tem base.
6. Entregar fontes, posters e alts por ID; produzir motion com camadas e pausas apenas onde aprovado. A direção de câmera da hero não autoriza modificar sua implementação atual.
7. Conferir recortes mobile, reduced motion, controles de pausa/replay, contraste e ausência de dados sensíveis.
8. Confirmar nomes de eventos, parceiros/métodos habilitados e estados antes de publicar; validar alegações com a base editorial, não com o desenho.

**Fora deste roteiro:** header, footer, implantação (`launch-section.tsx`), FAQ e contato não possuem `ArtPlaceholder` na home atual. O cenário “Lance sua operação” possui o slot 20 em `solutions-section.tsx`; não confundir com a seção de implantação. O shark ASCII da plataforma é um elemento de marca existente, não um 23º espaço de prova de produto. Não adicionar imagens, logos de provedores, selos de certificação ou novos blocos a essas áreas apenas para preencher a página.
