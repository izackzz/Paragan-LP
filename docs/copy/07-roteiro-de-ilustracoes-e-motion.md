# Roteiro de ilustrações e motion — os 22 espaços da home

Referência: 08/10/2026. Direção de produção visual, não implementação. Base: seções atuais de `src/components/landing/sections/` e telas de `Paragan-GatewayFront`. Nenhuma captura ou animação foi produzida nesta etapa.

## 1. Ideia central

**Primeiro mostrar o produto; depois explicar seus mecanismos; por fim mostrar como ele se encaixa no negócio.**

- Hero: três dashboards reais, vetorizados e percorridos por câmera. O visitante reconhece produto, densidade e identidade antes de ler detalhes.
- Plataforma: oito peças curtas, cada uma explicando um mecanismo. Recortes da UI para configuração e finanças; conexões animadas para delegação, roteamento e eventos.
- Controle: três demonstrações de decisões concretas do gateway-admin, não outra apresentação genérica do dashboard.
- Checkout: uma jornada real, com desktop e mobile, do resumo ao recibo.
- Financeiro: decomposição legível, sem confundir volume, receita e saldo.
- Integrações e escala: diagramas explicativos, com direção, estados e fronteiras explícitos.
- Soluções: síntese dos modelos de negócio, reutilizando o vocabulário visual anterior sem repetir as mesmas artes.

Não usar fotos de banco de imagens, moedas voando, gráficos sempre ascendentes, órbitas sem significado, robôs de IA ou logos de parceiros como decoração.

## 2. Inventário e correspondência com a página

São **22 artes**, contando conteúdos de abas, não somente os quadros visíveis ao mesmo tempo. Os tamanhos abaixo são os canvases já reservados pelo código; preservar suas proporções.

| ID | Seção / local atual | Canvas | Direção escolhida |
| --- | --- | --- | --- |
| 01 | Hero / `gateway` | 1600 × 860 | Dashboard gateway-admin em SVG + câmera |
| 02 | Hero / `seller` | 1600 × 860 | Dashboard seller em SVG + câmera |
| 03 | Hero / `checkout` → futura aba staff | 1600 × 860 | Dashboard staff em SVG + câmera |
| 04 | Plataforma / Identidade | 1000 × 500 | Recortes de UI + propagação de marca |
| 05 | Plataforma / Regras comerciais | 1000 × 500 | Composição estática de configurações reais |
| 06 | Plataforma / Pessoas | 1000 × 500 | Diagrama animado de papéis e carteiras |
| 07 | Plataforma / Relacionamento | 1000 × 500 | Composição estática de ranking e jornada |
| 08 | Plataforma / Adquirência | 1000 × 500 | Fluxo animado de elegibilidade e seleção |
| 09 | Plataforma / Gestão financeira | 1000 × 500 | Recorte estático de saldo e extrato |
| 10 | Plataforma / Checkout | 1000 × 500 | Recortes estáticos de oferta e resumo |
| 11 | Plataforma / Integrações | 1000 × 500 | Microfluxo animado de evento e entrega |
| 12 | Controle / Operação | 1000 × 850 | Print real + foco em cadastro e histórico |
| 13 | Controle / Comercial | 1000 × 850 | Print real + foco em exceção por seller |
| 14 | Controle / Financeiro | 1000 × 850 | Print real + foco em solicitação de saque |
| 15 | Experiência de venda / Catalyst | 1440 × 760 | UI desktop/mobile + sequência de compra |
| 16 | Gestão financeira / Visão financeira | 1200 × 800 | UI por competência + decomposição guiada |
| 17 | Integrações / Seu ecossistema | 1200 × 720 | Mapa animado de conexões de negócio |
| 18 | Integrações / API e entrega de eventos | 1200 × 600 | Sequência técnica animada com retentativa |
| 19 | Escala / Arquitetura da operação | 1200 × 700 | Fronteiras de tenant + idempotência + filas |
| 20 | Soluções / Sua fintech | 1200 × 640 | Composição estática da operação de marca |
| 21 | Soluções / Muitos negócios | 1200 × 640 | Rede animada de sellers e integrações |
| 22 | Soluções / Oferta ao recebimento | 1200 × 640 | Jornada animada de produto digital |

### Ajuste editorial da hero

A página hoje oferece “Seu gateway”, “Seus sellers” e “Seu checkout”. A direção solicitada substitui **apenas o conteúdo da terceira aba por staff**. Rótulos futuros: “Seu gateway”, “Seus sellers”, “Sua equipe”. A terceira descrição passa a tratar carteira, cadastros e responsabilidades. A ordem pode continuar gateway → seller → equipe; os três painéis representam a mesma operação.

O checkout continua com duas peças próprias, 10 e 15. Não adicionar uma quarta arte à hero nem retirar um espaço de outra seção. Essa troca está documentada, mas não foi aplicada ao componente.

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

- Hero: passeio de 14–18 s; câmera entre 1× e 1,65×, movimentos suaves e pausas de leitura. Percurso curvo significa pan contínuo, **não girar o dashboard ou rodar a câmera em 360°**.
- Diagramas: cenas de 6–10 s; transições locais de 200–400 ms; segurar o resultado por pelo menos 2 s. Linhas aparecem antes do pulso que percorre a conexão.
- Apenas uma trilha de ação por vez. Nada piscando simultaneamente em todos os cards.
- Reproduzir uma vez quando a peça entrar em viewport. Reiniciar somente por “Rever animação”; não criar 22 loops concorrentes. Hero anima apenas a aba ativa, sem alternar abas automaticamente.
- Pausar ao sair da viewport ou ocultar a página. Nas abas, cancelar a sequência anterior e iniciar a nova em enquadramento completo. Oferecer pausar/rever acessíveis para peças prolongadas.
- `prefers-reduced-motion`: poster completo, sem pan, zoom, pulsos ou autoplay. Nenhuma informação depende de assistir à sequência.
- Mobile: priorizar um recorte legível, não reduzir uma tela de 1600 px até virar miniatura. Não exigir hover ou scroll horizontal. Hero mostra KPI + gráfico; diagramas usam composição vertical ou poster resumido.
- Reservar aspect ratio antes de carregar; poster da primeira aba da hero tem prioridade. Demais arquivos carregam sob demanda. Metas iniciais, a medir: SVG diagramático até 150 KB gzip; Lottie até 250 KB gzip; poster até 250 KB; dashboard vetorial até 500 KB gzip. Se exceder, simplificar ou usar híbrido; não sacrificar leitura.

## 4. Roteiro das 22 peças

Nas fontes abaixo, caminhos `app/` e `components/` são relativos a `Paragan-GatewayFront`; o arquivo de posição é relativo a `Paragan-LP/src/components/landing/sections/`.

### 01 — Hero: quem dirige o gateway

**Posição:** `hero-section.tsx`, aba `gateway`. **Formato:** dashboard real vetorizado, SVG + animação de câmera, 1600 × 860.

**Propósito:** demonstrar a visão consolidada e os pontos que exigem ação do dono da operação.

**Capturar/desenhar:** `app/(app)/gateway-admin/page.tsx`, `components/gateway-admin/dashboard-content.tsx`. Manter shell, identidade, período selecionado, faixa de indicadores, gráfico de volume e alertas de KYC/disputas. Se os atalhos estiverem abaixo do viewport, usar uma captura alta recortada pela câmera, sem comprimir artificialmente a página.

**Storyboard — 16 s:** 0–3 s visão frontal completa; 3–6 s aproximar indicadores, revelando valores já fixos; 6–10 s arco suave em direção ao gráfico, destacar um ponto e sua legenda; 10–13 s pan até alerta de cadastro e atalho “Revisar KYC”; 13–16 s recuar à visão completa e segurar. O ponto do gráfico pode reproduzir um tooltip real capturado; não inventar drill-down.

**Poster/mobile:** enquadramento com identificação do gateway, três KPIs e gráfico; recorte mobile permanece nessa composição. **Alt:** “Dashboard demonstrativo do gateway com indicadores, volume e pendências operacionais.”

**Evitar:** mostrar master, todos os indicadores melhorando ou vendas surgindo em tempo real sem fonte. O passeio da câmera é a animação; o resultado financeiro não muda.

### 02 — Hero: quem vende na plataforma

**Posição:** `hero-section.tsx`, aba `seller`. **Formato:** SVG vetorizado + câmera, 1600 × 860.

**Propósito:** mostrar que o seller recebe uma experiência própria, conectada à mesma marca.

**Capturar/desenhar:** `app/(app)/seller/page.tsx`, `components/seller/home-content.tsx`. Selecionar o estado completo, sem skeletons: indicadores de vendas/saldo, gráfico de volume e atalhos reais “Cobrar cliente”, “Solicitar saque” e, se habilitado, “Dividir pagamentos”. Não acrescentar catálogo à home se ele não estiver nela.

**Storyboard — 16 s:** 0–3 s painel completo; 3–6 s câmera no grupo de vendas; 6–9 s curva curta até saldo e retenções; 9–12 s acompanhar o gráfico sem alterar sua série; 12–14 s foco nos atalhos; 14–16 s voltar ao plano geral. Destacar a diferença entre volume vendido e saldo, sem tratá-los como a mesma métrica.

**Poster/mobile:** vendas, saldo e parte legível do gráfico. **Alt:** “Dashboard demonstrativo do seller com vendas, saldo e recursos da operação.”

### 03 — Hero: quem cuida da carteira

**Posição:** terceira aba de `hero-section.tsx`, hoje `checkout`; futura `staff`. **Formato:** SVG vetorizado + câmera, 1600 × 860.

**Propósito:** provar delegação com contexto; staff não enxerga automaticamente toda a base do gateway.

**Capturar/desenhar:** `app/(app)/staff/page.tsx`, `components/staff/dashboard-content.tsx`. Mostrar visão geral da carteira, “Aplicações por status”, “Alertas”, “Carteira por status” e “Atividade recente”. Usar um perfil cuja carteira tenha dados coerentes com os demais painéis.

**Storyboard — 16 s:** 0–3 s plano geral; 3–6 s aproximar indicadores da carteira; 6–9 s percorrer aplicações por status; 9–12 s foco em um alerta; 12–14 s deslocar à atividade recente; 14–16 s retornar. Um contorno editorial pode conectar alerta e atividade referente ao mesmo cadastro; não inserir esse conector como se fosse um recurso nativo.

**Poster/mobile:** carteira, aplicações e um alerta. **Alt:** “Dashboard demonstrativo da equipe com carteira atribuída, cadastros e atividade recente.”

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

**Posição:** `control-section.tsx`, aba `operacao`. **Formato:** print escuro em camadas + foco local, 1000 × 850.

**Propósito:** demonstrar contexto operacional e rastreabilidade da revisão de cadastro.

**Capturar/desenhar:** `app/(app)/gateway-admin/sellers/page.tsx` como pano de fundo; detalhe real de `account-applications/[id]/page.tsx` à frente. Selecionar cadastro demonstrativo em análise, com histórico e notas; recortar documentos sem conteúdo pessoal. A composição de duas telas deve ser reconhecível como montagem editorial.

**Storyboard — 8 s:** 0–2 s base de sellers; 2–4 s destacar a linha correspondente; 4–6 s detalhe entra com status e informação de revisão; 6–8 s foco no histórico. Não clicar em aprovar nem mudar o estado para simular sucesso.

**Poster/mobile:** detalhe de cadastro com status e histórico; tabela secundária. **Alt:** “Revisão demonstrativa de cadastro com seller, status e histórico de decisões.”

### 13 — Controle / Comercial: uma condição para esse relacionamento

**Posição:** aba `comercial`. **Formato:** print escuro + aproximação, 1000 × 850.

**Propósito:** provar configuração por seller, além da visão geral do módulo 05.

**Capturar/desenhar:** `app/(app)/gateway-admin/commission-config/page.tsx`, formulário real de configuração por seller aberto. Enquadrar escopo, seller selecionado, modelo de comissão e campos correspondentes. A tela de taxas pode aparecer como pequeno apoio separado; não somar conceitos distintos num mesmo formulário fictício.

**Storyboard — 8 s:** 0–2 s configuração completa; 2–4 s aproximar escopo “Por seller”; 4–6 s deslocar aos componentes fixo/percentual do modelo híbrido; 6–8 s voltar ao enquadramento legível. Valores fixos, sem “salvo com sucesso” inventado.

**Poster/mobile:** escopo, seller e modelo em foco. **Alt:** “Configuração demonstrativa de comissão específica para um seller.”

### 14 — Controle / Financeiro: solicitar não é liquidar

**Posição:** aba `financeiro`. **Formato:** print escuro + destaque de fila, 1000 × 850.

**Propósito:** mostrar supervisão de saques, distinta da análise de custos da peça 16.

**Capturar/desenhar:** `app/(app)/gateway-admin/withdrawals/page.tsx`; uma solicitação pendente e seu detalhe, se disponível na interface. Cards de saldo/reserva podem vir do detalhe do seller em montagem separada, apenas se a tela realmente os fornecer. Não apresentar dados bancários.

**Storyboard — 8 s:** 0–2 s fila; 2–4 s foco em uma solicitação; 4–6 s destacar valor e estado atual; 6–8 s enquadrar ações autorizadas sem executá-las. Não terminar em “transferido”.

**Poster/mobile:** solicitação, valor e estado pendente. **Alt:** “Fila demonstrativa de solicitações de saque com valor, estado e controles de revisão.”

### 15 — Experiência de venda: da composição ao recibo

**Posição:** `checkout-section.tsx`. **Formato:** capturas reais Catalyst desktop/mobile, SVG híbrido + sequência de estados, 1440 × 760.

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

### 19 — Escala: crescer sem perder fronteiras

**Posição:** `scale-section.tsx`. **Formato:** diagrama SVG animado, 1200 × 700.

**Propósito:** tornar isolamento, consistência e visibilidade compreensíveis sem prometer throughput ou infraestrutura dedicada.

**Desenhar:** contêiner “Infraestrutura compartilhada”; dentro, dois contextos separados “Gateway Aurora” e “Gateway Boreal — exemplo”, cada um com seus usuários e dados. No contexto Aurora, caminho “Solicitação → controle de repetição → pagamento existente → evento → fila de entrega”. Na borda, nó “Registros e métricas”. Fronteiras são lógicas; não desenhar dois datacenters exclusivos. Não capturar master nem apresentar observabilidade interna como painel contratado.

**Storyboard — 10 s:** 0–3 s apresentar contextos e conexões confinadas; 3–5 s solicitação Aurora gera um registro de pagamento; 5–7 s duplicata com a mesma identidade retorna ao mesmo registro, label “Mesma operação”, sem segundo pagamento; 7–8 s evento vai à fila de apoio; 8–10 s registro de execução chega à observabilidade. Nenhuma linha leva dados Aurora a Boreal. A fila representa tarefas assíncronas de apoio, não uma afirmação de que toda autorização de pagamento passa por ela.

**Poster/mobile:** contextos isolados e um fluxo de repetição simplificado. **Alt:** “Arquitetura ilustrativa com isolamento de contextos, controle de repetição e registros operacionais.”

### 20 — Soluções: a operação tem a sua marca

**Posição:** `solutions-section.tsx`, “Sua fintech, do seu jeito”. **Formato:** composição estática premium de recortes reais, 1200 × 640.

**Propósito:** ajudar fundador e operador a visualizar o conjunto que está avaliando, sem vender licença bancária.

**Capturar/desenhar:** painel gateway-admin como peça principal; pequeno recorte seller ao lado; cabeçalho do checkout abaixo. Usar as fontes de 01, 02 e 15 com enquadramentos diferentes. Três labels editoriais: “Sua gestão”, “Sua base”, “Sua experiência de compra”. Marca Aurora consistente; condição comercial do módulo 05 como detalhe, se houver espaço.

**Composição:** um painel dominante, dois apoios. Nada de diagrama de infraestrutura nesta peça; o produto é o argumento. Sem autoplay para dar respiro após três seções técnicas.

**Poster/mobile:** gateway e dois cabeçalhos, mantendo os labels. **Alt:** “Painéis e checkout demonstrativos reunidos sob uma mesma identidade de marca.”

**Evitar:** cartão bancário, licença BACEN, conta digital ou bandeiras sugerindo serviços universais não confirmados.

### 21 — Soluções: muitos sellers, contextos próprios

**Posição:** “Uma plataforma. Muitos negócios”. **Formato:** rede SVG animada, 1200 × 640.

**Propósito:** explicar uma plataforma com base diversificada, relações comerciais e conexões autorizadas.

**Desenhar:** “Sua plataforma” no centro superior; três cards de sellers abaixo com nomes fictícios, miniaturas originais e tipos de negócio; um chip “Condição específica” em um deles. À lateral, “Seu backoffice”, ligado à plataforma por API. Pode incluir minirrecortes reais de `app/(app)/gateway-admin/sellers/page.tsx` e `seller/integrations/page.tsx`, sem apresentar marketplace público de sellers.

**Storyboard — 8 s:** 0–2 s plataforma e dois sellers; 2–4 s terceiro entra e seu vínculo aparece; 4–6 s destacar condição própria de um seller, sem replicá-la aos outros; 6–8 s revelar conexão com backoffice e manter mapa completo. Conectores de vínculo não transportam pulsos monetários: isso não é uma demo de split.

**Poster/mobile:** plataforma sobre três cards e backoffice lateral convertido em apoio inferior. **Alt:** “Rede ilustrativa de sellers com contextos comerciais próprios conectados a uma plataforma.”

### 22 — Soluções: oferta, pagamento e acesso autorizado

**Posição:** “Da oferta ao recebimento”. **Formato:** fluxo SVG animado com componentes reais, 1200 × 640.

**Propósito:** mostrar continuidade da venda digital sem confundir confirmação com dinheiro disponível para saque.

**Capturar/desenhar:** quatro etapas: “Produto / oferta” → “Checkout / pedido” → “Pagamento confirmado” → “Recibo / acesso autorizado”. Fontes: `app/(app)/seller/products/[id]/page.tsx`, `seller/orders/purchases/[id]/page.tsx`, `app/(checkout)/[publicId]/page.tsx` e `[publicId]/thanks/page.tsx`. Recibo/acesso deve limitar-se aos arquivos ou links efetivamente disponíveis; não desenhar player de aulas, progresso ou certificado. Sob a etapa financeira, apoio separado “Saldo conforme regras de liberação”.

**Storyboard — 9 s:** 0–2 s oferta e checkout; 2–4 s pedido em espera; 4–6 s marcador “Confirmação financeira recebida” habilita a próxima conexão; 6–7 s recibo e link autorizado aparecem; 7–9 s apoio financeiro mostra pendente/disponível conforme cenário, sem simular depósito imediato. Acessos e links são desenhos inertes, nunca URLs reais de compra.

**Poster/mobile:** quatro passos verticais; label de saldo em bloco separado. **Alt:** “Jornada ilustrativa de oferta digital até confirmação do pagamento, recibo e acesso autorizado.”

## 5. Continuidade entre as peças

- Aurora é a mesma operação nas 22 artes; seller Horizonte e produto Kit Horizonte reaparecem quando ajudam a entender a continuidade.
- 01/02/03 apresentam papéis; 06 explica a delimitação; 12 mostra uma decisão dentro dela.
- 05 apresenta configuração; 13 mostra seu detalhe. Não repetir a mesma captura nos dois tamanhos.
- 09 diferencia saldos; 14 mostra governança de saída; 16 explica receita/custo. Não misturar extrato seller com resultado do gateway como se fossem um único caixa.
- 10 apresenta composição da compra; 15 demonstra a interface; 22 sintetiza a jornada digital. Mesmo produto, mesma oferta e totais coerentes nos estados equivalentes.
- 08 explica seleção de rota; 17 explica ecossistema; 18 explica entrega de eventos; 19 explica fronteiras e repetição. Cada diagrama responde a uma pergunta diferente.
- 20 e 21 não acrescentam promessas: recombinam os mecanismos já demonstrados para públicos distintos.

## 6. Conferência antes da produção final

1. Capturar as telas de gateway, seller e staff com uma identidade única e dados demonstrativos legíveis.
2. Confirmar a disponibilidade dos componentes escolhidos no ambiente de captura; se um recurso estiver parcial, usar o estado comprovado, não completar a UI por ilustração.
3. Validar a cotação do exemplo de checkout e a consistência entre pedido, recibo e financeiro.
4. Separar no arquivo-fonte UI real, labels editoriais e conectores conceituais; nenhum acréscimo deve parecer funcionalidade nativa.
5. Aprovar posters primeiro; se a mensagem não funcionar estática, o motion ainda não tem base.
6. Produzir hero e diagramas com camadas nomeadas, estados inicial/final e pausas descritas neste roteiro.
7. Conferir recortes mobile, reduced motion, controles de pausa/replay, contraste e ausência de dados sensíveis.
8. Confirmar nomes de eventos, parceiros/métodos habilitados e estados antes de publicar; validar alegações com a base editorial, não com o desenho.

**Fora deste roteiro:** header, footer, lançamento, FAQ e contato não possuem `ArtPlaceholder` na home atual. O shark ASCII da plataforma é um elemento de marca existente, não um 23º espaço de prova de produto. Não adicionar imagens a essas áreas apenas para preencher a página.
