# Roteiro visual - 22 ilustrações e motions

## Ordem e formato de exibição

- Seguir `src/app/page.tsx`: hero → plataforma → cenários de contratação → controle → financeiro → checkout → integrações → arquitetura.
- Contar abas da esquerda para a direita e cards da esquerda para a direita, de cima para baixo. As três abas de hero e controle contam como três peças, embora apenas uma apareça por vez.
- IDs e dimensões sincronizados com `src/config/illustrations.ts`. Dimensões são do asset, não do card inteiro nem da coluna que o contém.
- 01–11 registram os PNGs existentes, observados diretamente; não exigem redesenho para cumprir o briefing antigo. Preservar arquivos, proporções, marcas, valores e composição atuais.
- 12–22 descrevem as próximas peças na ordem da página. A 19 já usa uma captura provisória; o checkbox registra a produção da composição final.
- Manter PNG nesta etapa. SVG/motion são entregas futuras; um PNG estático não comprova produção de animação.
- `ArtPlaceholder` usa largura total e altura proporcional. No mobile, o PNG apenas diminui: seus elementos internos não se reorganizam. Não prever empilhamento interno sem um asset ou componente responsivo específico.
- Hero e checkout usam viewport horizontal no desktop e recorte 3:4 abaixo de 640 px. A câmera atual percorre a captura em loop de 25 s no desktop e 30 s no mobile, desativada com movimento reduzido.
- Nas peças novas, usar UI frontal, texto legível e dados demonstrativos; distinguir disponibilidade, registro e liquidação. Não inventar telas, integrações habilitadas ou resultados garantidos. Motion futuro é opcional e não deve ser necessário para compreender a composição estática.

## Índice

Checkboxes registram produção da peça, não redação do roteiro.

| ID | Peça | Canvas | Local na página |
| --- | --- | --- | --- |
| [x] [01](#01---gateway) | Gateway | 4096 × 2379 | Hero · Seu gateway |
| [x] [02](#02---seller) | Seller | 4096 × 2379 | Hero · Seus sellers |
| [x] [03](#03---staff) | Staff | 4096 × 2379 | Hero · Seu time |
| [x] [04](#04---identidade) | Identidade | 1000 × 500 | Plataforma · Identidade |
| [x] [05](#05---regras-comerciais) | Regras comerciais | 1000 × 500 | Plataforma · Regras comerciais |
| [x] [06](#06---pessoas) | Pessoas | 1000 × 500 | Plataforma · Pessoas |
| [x] [07](#07---relacionamento) | Relacionamento | 1000 × 500 | Plataforma · Relacionamento |
| [x] [08](#08---adquirência) | Adquirência | 1000 × 500 | Plataforma · Adquirência |
| [x] [09](#09---saldos-e-supervisão-de-saques) | Saldos e supervisão de saques | 1000 × 500 | Plataforma · Gestão financeira |
| [x] [10](#10---ofertas-e-adicionais) | Ofertas e adicionais | 1000 × 500 | Plataforma · Checkout |
| [x] [11](#11---integrações-e-eventos) | Integrações e eventos | 1000 × 500 | Plataforma · Integrações |
| [ ] [12](#12---lançamento) | Lançamento | 1200 × 640 | Seu ponto de partida · Lance sua operação |
| [ ] [13](#13---migração) | Migração | 1200 × 640 | Seu ponto de partida · Migre uma operação existente |
| [ ] [14](#14---definição-do-projeto) | Definição do projeto | 1200 × 640 | Seu ponto de partida · Ainda definindo o modelo? |
| [ ] [15](#15---controle-operacional) | Controle operacional | 1000 × 850 | No comando · Operação |
| [ ] [16](#16---controle-comercial) | Controle comercial | 1000 × 850 | No comando · Comercial |
| [ ] [17](#17---controle-financeiro) | Controle financeiro | 1000 × 850 | No comando · Financeiro |
| [ ] [18](#18---composição-financeira) | Composição financeira | 1200 × 800 | Gestão financeira |
| [ ] [19](#19---checkout-da-operação) | Checkout da operação | 4096 × 2379 | Experiência de venda |
| [ ] [20](#20---ecossistema) | Ecossistema | 1200 × 720 | Conexões que fazem sentido · quadro superior |
| [ ] [21](#21---automações-dos-sellers) | Automações dos sellers | 1200 × 600 | Conexões que fazem sentido · quadro inferior |
| [ ] [22](#22---arquitetura-e-isolamento) | Arquitetura e isolamento | 1200 × 700 | Confiança operacional |

## 01 - Gateway

**Arquivo:** `public/assets/screenshots/page-admin.png` · **Tamanho:** 4096 × 2379 px · **Proporção:** 4096:2379 (≈ 1,722:1).
**Local/copy:** hero, aba “Seu gateway” · `introduction.previews.gateway`.

- [x] Captura escura com marca Paragan, sidebar administrativa e boas-vindas “PGN Master”.
- [x] Grade de seis indicadores: sellers ativos, volume em 30 dias, aprovação, saques pendentes, assinaturas e payment links; gráfico de volume abaixo.

## 02 - Seller

**Arquivo:** `public/assets/screenshots/page-seller.png` · **Tamanho:** 4096 × 2379 px · **Proporção:** 4096:2379 (≈ 1,722:1).
**Local/copy:** hero, aba “Seus sellers” · `introduction.previews.seller`.

- [x] Captura escura Paragan com boas-vindas “Lojista”, filtro de período e ação “Realizar saque”.
- [x] Cards de volume, transações, aprovação, saldo disponível, retido, saques, disputas e patente “Marechal”; gráfico de volume e atividade recente abaixo.

## 03 - Staff

**Arquivo:** `public/assets/screenshots/page-staff.png` · **Tamanho:** 4096 × 2379 px · **Proporção:** 4096:2379 (≈ 1,722:1).
**Local/copy:** hero, aba “Seu time” · `introduction.previews.checkout` (chave legada; a aba exibe staff, não checkout).

- [x] Captura escura Paragan com boas-vindas “JK Gerente” e visão geral da carteira.
- [x] Quatro atalhos para carteira, KYC, performance e segurança; indicadores de sellers, aplicações, aprovações e GMV; lista “Saúde da carteira” e bloco “Tudo em dia”.

## 04 - Identidade

**Arquivo:** `public/assets/illustrations/04 - identidade.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, primeiro card · `capabilities.items.identity` · “Sua marca, em cada contato.”

- [x] Três sidebars escuras sobrepostas, com marcas e cores distintas; Paragan em primeiro plano com acento vermelho, outra interface azul e outra amarela/turquesa.
- [x] Paleta vertical à esquerda, menus de dashboard, pedidos, clientes e financeiro; fundo claro ovalado. Sem editor de marca ou checkout separado.

## 05 - Regras comerciais

**Arquivo:** `public/assets/illustrations/05 - Regras comerciais.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, segundo card · `capabilities.items.policies` · “Seu modelo vira regra.”

- [x] Card “Regras comerciais globais” atrás e condição de seller à frente, conectados ao ícone financeiro; fundo vermelho texturizado.
- [x] Linhas de taxa percentual, tarifa fixa, Pix, parcelamento sem juros e reserva rolante; valores distintos entre padrão global e seller. Sem seletor de modelo híbrido.

## 06 - Pessoas

**Arquivo:** `public/assets/illustrations/06 - Pessoas.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, terceiro card · `capabilities.items.people` · “Cada pessoa, no seu papel.”

- [x] Ícone de acesso à esquerda ligado a quatro membros com badges CTO, AM, AM e CONTADOR; cada membro se conecta a uma linha de três ícones de atribuições ou carteira.
- [x] Cards escuros, conectores claros e fundo vermelho texturizado. Sem árvore Gateway Aurora/Equipe A/Equipe B ou chips escritos de permissão.

## 07 - Relacionamento

**Arquivo:** `public/assets/illustrations/07 - Relacionamento.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, quarto card · `capabilities.items.engagement` · “Uma base para cultivar.”

- [x] Pódio com três cards ilustrados: Isaac Store em segundo, Abraham Store em primeiro ao centro e Jacob Club em terceiro.
- [x] Bordas e troféus diferenciam as posições; cada card exibe perfil e faturamento no período. Ícone de coroa e fundo vermelho; sem card separado de jornada acumulada.

## 08 - Adquirência

**Arquivo:** `public/assets/illustrations/08 - Adquirência.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, quinto card · `capabilities.items.acquiring` · “Rotas com direção.”

- [x] Logos de provedores empilhados à esquerda, globo ao centro e painel “Seu negócio, suas regras” à direita.
- [x] Seis linhas de roteamento com condições de Pix, categorias, percentuais em badges verdes e nomes de adquirentes; fundo vermelho texturizado. Sem fluxo de três rotas A/B/C ou pagamento animado.

## 09 - Saldos e supervisão de saques

**Arquivo:** `public/assets/illustrations/09 - Saldos e extrato.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, sexto card · `capabilities.items.finance` · “Cada valor, no contexto.”

- [x] Três indicadores superiores: “VOLUME 7D”, “SALDO DISPONÍVEL” verde e “TOTAL RETIDO” âmbar.
- [x] Lista inferior com três sellers e ações “RECUSAR”/“LIBERAR”; cards escuros sobre fundo claro ovalado. A imagem representa supervisão de saques, não linhas de extrato com data e estado.

## 10 - Ofertas e adicionais

**Arquivo:** `public/assets/illustrations/10 - Oferta e resumo.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, sétimo card · `capabilities.items.checkout` · “Da oferta ao pagamento.”

- [x] Card esquerdo com quatro ofertas “Produto Incrível”: Start, Plus, Pro e Ultra; preços, periodicidades e seleção por radio.
- [x] Card direito sobreposto com três order bumps, miniaturas, textos e controles de quantidade; ícone de sacola e fundo claro ovalado. Sem resumo de total ou Kit Horizonte.

## 11 - Integrações e eventos

**Arquivo:** `public/assets/illustrations/11 - Evento e entrega.png` · **Tamanho:** 1000 × 500 px · **Proporção:** 2:1.
**Local/copy:** `#plataforma`, oitavo card · `capabilities.items.integrations` · “Conecte a operação.”

- [x] À esquerda, badges WEBHOOK, API, AI MCP, PUSHCUT, N8N e PWA em cards escuros escalonados.
- [x] À direita, seis categorias com contadores: pagamentos e transações, saques e liquidações, disputas, assinaturas, clientes, conta e cadastro; fundo vermelho ovalado. Sem fluxo HTTP 200 ou histórico de tentativa.

## 12 - Lançamento

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8.
**Local/copy:** `#solucoes`, primeiro cenário · `audience.items.operators` · “Lance sua operação.”
**Desktop:** imagem à esquerda em 2/3 da linha; texto à direita em 1/3. **Mobile:** imagem acima do texto, preservando 15:8.

- [x] Compor painel de gateway dominante, recorte de gestão de sellers e recorte de checkout; rotular “Sua operação”, “Sua base” e “Sua experiência de venda”.
- [x] Mostrar a base existente recebendo identidade e configuração da operação; destacar público e fluxos a definir, sem sugerir ativação instantânea ou todos os módulos habilitados.
- [x] Manter composição horizontal com poucos elementos grandes; alt “Lançamento de uma operação white-label”.

## 13 - Migração

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8.
**Local/copy:** `#solucoes`, segundo cenário · `audience.items.platforms` · “Migre uma operação existente.”
**Desktop:** texto à esquerda em 1/3; imagem à direita em 2/3. **Mobile:** imagem acima do texto, preservando 15:8.

- [x] Compor “Operação atual” → “Avaliação de continuidade” → “Base Paragan”; agrupar dados, integrações e contratos na origem.
- [x] Destacar dados e conexões a preservar; seta final tracejada “Conforme escopo” e nota “Portabilidade depende da origem, dos contratos e dos parceiros”.
- [x] Não representar cópia automática de tokens ou migração garantida; alt “Migração de uma operação de pagamentos”.

## 14 - Definição do projeto

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8.
**Local/copy:** `#solucoes`, terceiro cenário · `audience.items.creators` · “Ainda definindo o modelo?”
**Desktop:** imagem à esquerda em 2/3 da linha; texto à direita em 1/3. **Mobile:** imagem acima do texto, preservando 15:8.

- [x] Compor três cartões de entrada “Ideia”, “Público” e “Tese de receita” ligados a um quadro central “Avaliação do projeto”.
- [x] À direita, apresentar “Aderência à plataforma”, “Fluxos prioritários” e “Próximos passos”; usar diagrama conceitual, não inventar uma tela de planejamento do produto.
- [x] Não desenhar plataforma existente integrada por API: este cenário é definição do modelo, não incorporação de pagamentos; alt “Planejamento de uma operação de pagamentos”.

## 15 - Controle operacional

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17.
**Local/copy:** `#controle`, primeira aba “Operação” · `operations.contexts.management` · “A visão de quem dirige o negócio.”
**Desktop:** texto e imagem em metades; arte à direita, centralizada verticalmente e com padding. **Mobile:** texto acima da imagem, preservando 20:17.

- [x] Compor UI escura com lista de sellers, estado de cadastro e responsável pela carteira; destacar um seller em análise.
- [x] Sobrepor detalhe com revisão, histórico de decisões e indicação de papel/permissão; sem documentos pessoais ou aprovação simulada.
- [x] Priorizar seller, responsável e estado em blocos legíveis; alt “Visão operação do gateway”.

## 16 - Controle comercial

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17.
**Local/copy:** `#controle`, segunda aba “Comercial” · `operations.contexts.commercial` · “Sua estratégia vira configuração.”
**Desktop:** arte à direita em metade do painel. **Mobile:** texto acima da imagem, preservando 20:17.

- [x] Compor formulário escuro de condições por seller com taxa/comissão fixa, percentual ou híbrida; evidenciar seller e escopo da configuração.
- [x] Adicionar recorte secundário de campanha/reconhecimento sem confundir premiação com comissão; usar componentes existentes, sem criar editor unificado.
- [x] Não apresentar a configuração como substituta dos custos e contratos dos parceiros; alt “Visão comercial do gateway”.

## 17 - Controle financeiro

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17.
**Local/copy:** `#controle`, terceira aba “Financeiro” · `operations.contexts.finance` · “Entenda o caminho de cada valor.”
**Desktop:** arte à direita em metade do painel. **Mobile:** texto acima da imagem, preservando 20:17.

- [x] Compor UI escura com disponível, pendente e reservado; diferenciar escopo da operação e dos sellers.
- [x] Incluir recorte de receitas/taxas por competência e uma solicitação de saque pendente; saque é detalhe, não a composição inteira.
- [x] Manter estados e valores fixos, sem transformar registro interno em liquidação concluída; alt “Visão financeiro do gateway”.

## 18 - Composição financeira

**Tamanho:** 1200 × 800 px · **Proporção:** 3:2.
**Local/copy:** `#financeiro` · `ledger` · “Cada valor, no estado certo.”
**Desktop:** texto à esquerda em 1/3; imagem à direita em 2/3, abaixo do label “01 / Visão financeira”. **Mobile:** texto, label e imagem em sequência, preservando 3:2.

- [x] Compor visão por competência com período, receitas, taxas, comissões e custos registrados; destacar um bloco de custo expandido.
- [x] Reservar faixa para disponível, pendente e reservado e um recorte de lançamento/estorno; não reduzir a peça apenas a receitas e despesas.
- [x] Custos ausentes permanecem “-”; não exibir resultado como lucro líquido contábil; alt “Receitas, custos e saldos”.

## 19 - Checkout da operação

**Arquivo atual:** `public/assets/screenshots/checkout.png` · **Tamanho:** 4096 × 2379 px · **Proporção desktop:** 4096:2379 (≈ 1,722:1).
**Local/copy:** `#checkout` · `sales` · “Seus sellers têm uma oferta. Ofereça a jornada de venda.”
**Desktop:** quadro de largura total abaixo da abertura da seção; cabeçalho “UMA JORNADA, DO INÍCIO AO FIM” / “DESKTOP + MOBILE”. **Mobile:** viewport 3:4 com recorte de câmera; não são duas telas lado a lado atualmente.

A captura provisória mostra “Catalyst Checkout”, planos à esquerda, order bump, cupom e resumo; à direita, formulário do comprador, métodos Pix/cartão/boleto, endereço e ação de pagamento.

- [x] Produzir composição final preservando a estrutura de oferta/resumo à esquerda e preenchimento/pagamento à direita; manter o canvas atual e elementos grandes o suficiente para o recorte mobile.
- [x] Mostrar personalização, cupom e adicionais sem inventar cálculo: itens e total devem ser coerentes; campos pessoais e financeiros sem dados reais.
- [x] Se representar acompanhamento, separar explicitamente pedido, pagamento e entrega após confirmação; não simular aprovação nem sugerir plataforma completa de cursos; alt “Checkout da operação · desktop e mobile”.

## 20 - Ecossistema

**Tamanho:** 1200 × 720 px · **Proporção:** 5:3.
**Local/copy:** `#integracoes`, quadro superior · `connectivity` · “As ferramentas que seus sellers usam. Conectadas à sua plataforma.”
**Desktop:** texto à esquerda em 1/3; diagrama à direita em 2/3, abaixo de “01 / Seu ecossistema”. **Mobile:** texto antes da imagem, preservando 5:3.

- [ ] Compor painel de apps do seller ao centro, cercado por ferramentas de marketing, tracking, otimização e checkouts externos; agrupar por categoria.
- [ ] Priorizar ícones e cards de apps, com conexões ao painel; mostrar ao admin do gateway o ecossistema oferecido à sua base, sem checklist comercial ou diagrama de adquirência.
- [ ] Usar apenas marcas de integrações existentes e manter labels legíveis; alt “Apps e ferramentas conectados à sua plataforma”.

## 21 - Automações dos sellers

**Tamanho:** 1200 × 600 px · **Proporção:** 2:1.
**Local/copy:** `#integracoes`, quadro inferior · `connectivity.events` · “Da venda à próxima ação.”
**Desktop:** diagrama à esquerda em 2/3; texto à direita em 1/3. **Mobile:** diagrama antes do texto, preservando 2:1.

- [ ] Compor “Venda confirmada” à esquerda → nó “API + Webhooks” ao centro → três destinos à direita: “Tracking”, “Automação de marketing” e “Sistema do seller”.
- [ ] Usar cards com ícones e labels “Registrar conversão”, “Acionar fluxo” e “Atualizar sistema”; representar conexões externas, não um editor de automações nativo.
- [ ] Retomar a linguagem visual e os apps da peça 20, mostrando o uso após a venda; sem logs HTTP, falhas ou retentativas como protagonistas; alt “Da venda às automações dos seus sellers”.

## 22 - Arquitetura e isolamento

**Tamanho:** 1200 × 700 px · **Proporção:** 12:7.
**Local/copy:** `#escala` · `reliability` · “Além da interface, avalie a sustentação.”
**Desktop:** texto à esquerda em 1/3; diagrama à direita em 2/3. **Mobile:** texto antes da imagem, preservando 12:7.

- [x] Compor infraestrutura compartilhada com dois contextos de operação separados; usuários, permissões e dados dentro de cada contexto, sem setas cruzando tenants.
- [x] Em um contexto, representar solicitação → controle de repetição → mesmo registro de pagamento → evento → fila; ligar execução a registros e métricas.
- [x] Não desenhar segundo pagamento para a repetição, infraestrutura física exclusiva ou garantias de SLA/suporte; alt “Arquitetura da operação”.
