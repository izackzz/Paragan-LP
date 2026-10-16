# Roteiro visual - 22 ilustrações e motions

## Padrão de desenho

- UI frontal, sem perspectiva 3D; reconstruir componentes a partir de telas reais, sem inventar controles.
- Marca única: **Aurora**. Sellers: Estúdio Horizonte, Ateliê Norte e Cursos Prisma. Produto: Kit Horizonte.
- Cards, tipografia, ícones e badges seguem o produto; conectores com origem, destino, seta e label. Status sempre com texto.
- Números fixos e coerentes; incluir “Demonstração · dados fictícios”. Diagramas de processamento recebem “Fluxo ilustrativo”. Não exibir dados pessoais, credenciais ou QR pagável.
- Manter os quadros existentes e as abas da hero. Mobile recebe composição legível, não uma miniatura do desktop.
- Entregar fonte editável, asset, poster e alt por peça. Diagramas em SVG; telas em captura ou SVG em camadas. Motion reproduz uma vez, com resultado legível e poster para movimento reduzido.

## Índice

Peças em ordem numérica, de 01 a 22. Checkboxes registram produção, não redação deste roteiro.

| ID | Peça | Canvas | Tipo |
| --- | --- | --- | --- |
| [01](#01--gateway) | Gateway | 1600 × 860 | UI + câmera opcional |
| [02](#02--seller) | Seller | 1600 × 860 | UI + câmera opcional |
| [03](#03---staff) | Staff | 1600 × 860 | UI dashboard |
| [04](#04--identidade) | Identidade | 1000 × 500 | UI + conexões animadas |
| [05](#05--regras-comerciais) | Regras comerciais | 1000 × 500 | Componentes estáticos |
| [06](#06--pessoas) | Pessoas | 1000 × 500 | Diagrama animado |
| [07](#07--relacionamento) | Relacionamento | 1000 × 500 | Componentes estáticos |
| [08](#08--adquirência) | Adquirência | 1000 × 500 | Workflow animado |
| [09](#09--saldos-e-extrato) | Saldos e extrato | 1000 × 500 | UI estática |
| [10](#10--oferta-e-resumo) | Oferta e resumo | 1000 × 500 | Componentes estáticos |
| [11](#11--evento-e-entrega) | Evento e entrega | 1000 × 500 | Workflow animado |
| [12](#12--controle-operacional) | Controle operacional | 1000 × 850 | UI escura + foco |
| [13](#13--controle-comercial) | Controle comercial | 1000 × 850 | UI escura + foco |
| [14](#14--controle-de-saques) | Controle de saques | 1000 × 850 | UI escura + foco |
| [15](#15--jornada-do-checkout) | Jornada do checkout | 1440 × 760 | Desktop/mobile animado |
| [16](#16--composição-financeira) | Composição financeira | 1200 × 800 | UI + destaques |
| [17](#17--ecossistema) | Ecossistema | 1200 × 720 | Diagrama animado |
| [18](#18--api-e-retentativa) | API e retentativa | 1200 × 600 | Workflow animado |
| [19](#19--arquitetura-e-isolamento) | Arquitetura e isolamento | 1200 × 700 | Diagrama animado |
| [20](#20--lançamento) | Lançamento | 1200 × 640 | Composição estática |
| [21](#21--migração) | Migração | 1200 × 640 | Diagrama + motion opcional |
| [22](#22--incorporação) | Incorporação | 1200 × 640 | Diagrama + motion opcional |

## 01 - Gateway

**Tamanho:** 1600 × 860 px · **Proporção:** 80:43 (largura:altura).

- [x] Desenhar dashboard Aurora com sidebar, cabeçalho, período, KPIs, gráfico de volume e alerta de KYC; preservar componentes reais do gateway-admin.
- [x] Produzir poster com três KPIs e gráfico legíveis; mobile recorta esse conjunto.
- [x] Se autorizado, animar câmera por 16 s: geral → KPIs → ponto do gráfico → alerta → geral; zoom máximo 1,65×, sem alterar valores.

## 02 - Seller

**Tamanho:** 1600 × 860 px · **Proporção:** 80:43 (largura:altura).

- [x] Desenhar painel do Estúdio Horizonte com vendas, saldo, retenções, gráfico e atalhos reais “Cobrar cliente” e “Solicitar saque”.
- [x] Produzir poster com vendas, saldo e gráfico; diferenciar visualmente volume vendido de saldo disponível.
- [x] Se autorizado, animar câmera por 16 s: geral → vendas → saldo → gráfico → atalhos → geral; dados permanecem fixos.

## 03 - Staff

**Tamanho:** 1600 × 860 px · **Proporção:** 80:43 (largura:altura).

- [x] Visão dashboard dos gerentes de conta e restante do time

## 04 - Identidade

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Compor editor de marca à esquerda, com logo Aurora e tokens de cor; à direita, recortes do cabeçalho seller e do checkout.
- [x] Animar em 7 s: revelar conectores do editor às duas superfícies → destacar o mesmo logo e acento → segurar composição final; mobile empilha editor e superfícies.

## 05 - Regras comerciais

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Compor dois recortes reais: “Padrão da operação” atrás à esquerda e “Condição específica” à frente à direita.
- [x] Mostrar seller, modelo “Híbrida” e componentes fixo/percentual; manter formulários distintos, sem inventar editor unificado. Versão estática, cards empilhados no mobile.

## 06 - Pessoas

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Desenhar árvore: Gateway Aurora no topo → Equipe A / Equipe B → sellers; A ligada a Horizonte e Prisma, B ligada a Norte.
- [x] Adicionar à Equipe A chips de permissões reais, como “Consultar carteira” e “Revisar cadastro”.
- [x] Animar em 8 s: revelar equipes → traçar atribuições → destacar A e seus dois sellers; Norte permanece sem destaque. Conectores representam carteira, não dinheiro.

## 07 - Relacionamento

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Compor dois cards reais lado a lado: “Ranking por campanha”, com período e pódio; “Jornada acumulada”, com nível atual e próximo marco.
- [x] Usar badges do produto e anonimato da tela; manter posições e valores estáticos, sem cashback decorativo. Mobile empilha os cards.

## 08 - Adquirência

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Desenhar “Pagamento · cartão” → “Regras da operação” → três rotas; incluir chips de método e parcelas.
- [x] Diferenciar A “Elegível / prioritária”, B “Elegível / alternativa” e C “Não elegível”, sem logos de parceiros.
- [x] Animar em 8 s: pulso entra nas regras → marcar C como incompatível → marcar A “Selecionada” e percorrer apenas esse caminho; não mostrar aprovação financeira.

## 09 - Saldos e extrato

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Compor três cards reais no topo: disponível, pendente e reservado; abaixo, três linhas de extrato com data, tipo, valor e estado da mesma conta/período.
- [x] Manter valores estáticos; mobile empilha os saldos e mostra um lançamento legível.

## 10 - Oferta e resumo

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [x] Compor miniatura do Kit Horizonte à esquerda, card de oferta ao centro e resumo do checkout à direita, ligados por conectores estáticos.
- [x] Mostrar oferta de R$ 200,00 + adicional de R$ 40,00 = R$ 240,00, sem cupom; confirmar cotação real. Mobile empilha oferta e resumo.

## 11 - Evento e entrega

**Tamanho:** 1000 × 500 px · **Proporção:** 2:1 (largura:altura).

- [ ] Desenhar três nós: “Evento de pagamento confirmado” → “Webhook” → “Seu sistema”; abaixo, linha real do histórico de entrega.
- [ ] Animar em 6 s: traçar conexão → enviar pulso → retornar “Recebido · HTTP 200” → registrar “Entregue · tentativa 1”. HTTP 200 confirma entrega, não pagamento.

## 12 - Controle operacional

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17 (largura:altura).

- [ ] Compor UI escura: tabela real de sellers ao fundo e detalhe de cadastro em análise à frente, com status, notas e histórico; documentos sem conteúdo pessoal.
- [ ] Animar em 8 s: destacar seller → revelar detalhe → aproximar histórico; não executar aprovação. Mobile prioriza detalhe e histórico.

## 13 - Controle comercial

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17 (largura:altura).

- [ ] Desenhar formulário real escuro de comissão por seller, com escopo, Estúdio Horizonte, modelo híbrido e campos fixo/percentual.
- [ ] Animar em 8 s: formulário completo → escopo “Por seller” → campos da comissão → geral; valores fixos, sem simular salvamento.

## 14 - Controle de saques

**Tamanho:** 1000 × 850 px · **Proporção:** 20:17 (largura:altura).

- [ ] Desenhar fila real escura de saques, destacando uma solicitação pendente com seller, valor e estado; incluir detalhe apenas se existir na UI, sem dados bancários.
- [ ] Animar em 8 s: fila → solicitação → valor/status → ações de revisão; não clicar nem transformar pendente em transferido.

## 15 - Jornada do checkout

**Tamanho:** 1440 × 760 px · **Proporção:** 36:19 (largura:altura).

- [ ] Compor checkout desktop em cerca de 70% do quadro e recorte mobile ao lado, sem moldura pesada; mesma marca, produto e pedido nas duas telas.
- [ ] Preparar estados reais: Kit Horizonte R$ 200,00 → cupom de R$ 20,00, total R$ 180,00 → adicional de R$ 40,00, total R$ 220,00; confirmar cotação.
- [ ] Animar em 12 s: oferta/resumo → cupom → adicional → “Aguardando confirmação” → transição “Após confirmação do pagamento” → recibo dos mesmos itens e total; sem dados de cartão ou QR pagável.
- [ ] Produzir poster do resumo com cupom e adicional; mobile usa o checkout mobile como protagonista.

## 16 - Composição financeira

**Tamanho:** 1200 × 800 px · **Proporção:** 3:2 (largura:altura).

- [ ] Desenhar visão real por competência com seletor de período, filtro de escopo, receitas, custos e um bloco expandido de adquirência ou estrutura comercial.
- [ ] Animar em 10 s: geral → receita → custos correspondentes → detalhe expandido → geral; destacar linhas sem mudar números. Custos ausentes continuam “-”, não zero.

## 17 - Ecossistema

**Tamanho:** 1200 × 720 px · **Proporção:** 5:3 (largura:altura).

- [ ] Desenhar “Sua operação” ao centro; site/produto e backoffice à esquerda; processadores habilitados à direita; atendimento/gestão abaixo.
- [ ] Rotular conexões: site → operação “API”; operação ↔ processador “Solicitação / resultado”; operação → gestão “Eventos”. Backoffice mantém conexão API estática.
- [ ] Animar em 9 s: comando do site → solicitação ao processador → retorno → evento à gestão; terminar no mapa completo, sem logos ou aplicativos nativos inventados.

## 18 - API e retentativa

**Tamanho:** 1200 × 600 px · **Proporção:** 2:1 (largura:altura).

- [ ] Desenhar duas faixas: acima, “Seu sistema → API → resposta com ID” para consulta; abaixo, “Evento → fila de entrega → endpoint → histórico”.
- [ ] Incluir histórico real compatível com “Tentativa 1 · HTTP 500” e “Tentativa 2 · HTTP 200”, sem payloads minúsculos ou segredos.
- [ ] Animar em 10 s: consulta/retorno → evento na fila → falha 500 → registro e pausa “Intervalo ilustrativo” → retentativa 200 → duas tentativas visíveis; nunca reenviar cobrança.

## 19 - Arquitetura e isolamento

**Tamanho:** 1200 × 700 px · **Proporção:** 12:7 (largura:altura).

- [ ] Desenhar contêiner “Infraestrutura compartilhada” com dois contextos separados: Gateway Aurora e Gateway Boreal; cada um contém seus usuários e dados, sem conexões entre tenants.
- [ ] Dentro de Aurora, desenhar “Solicitação → controle de repetição → pagamento existente → evento → fila de entrega”; adicionar “Registros e métricas” na borda.
- [ ] Animar em 10 s: revelar contextos → criar um registro de pagamento → duplicata retorna ao mesmo registro com label “Mesma operação” → evento segue à fila → execução chega aos registros; não desenhar segundo pagamento nem datacenters exclusivos.

## 20 - Lançamento

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8 (largura:altura).

- [ ] Compor dashboard gateway dominante, pequeno painel seller lateral e cabeçalho de checkout abaixo; todos com identidade Aurora.
- [ ] Rotular os três recortes “Sua gestão”, “Sua base” e “Sua experiência de compra”; manter cena estática. Mobile reduz os apoios a cabeçalhos legíveis.

## 21 - Migração

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8 (largura:altura).

- [ ] Desenhar três grupos: “Operação de origem” com dados, contratos e integrações → “Avaliação e ensaio” com portabilidade, escopo e critérios de aceite → “Base Paragan” com recorte real de sellers.
- [ ] Ligar avaliação ao destino por seta tracejada “Transição conforme escopo”; incluir “Portabilidade depende dos provedores”, sem credenciais ou registros sendo copiados.
- [ ] Se animado, revelar em 8 s: origem/destino → avaliação → critérios de aceite → conexão tracejada. Mobile empilha os três grupos.

## 22 - Incorporação

**Tamanho:** 1200 × 640 px · **Proporção:** 15:8 (largura:altura).

- [ ] Desenhar dois contêineres: “Sua plataforma existente”, com pedidos/serviços e backoffice; “Base de pagamentos”, com sellers, pagamentos e consulta de estados.
- [ ] Conectar plataforma → base por “Comandos / consultas por API”, retorno de consulta em sentido inverso e base → plataforma por “Eventos por webhook”; distinguir visualmente os caminhos.
- [ ] Se animado, revelar em 8 s: contextos → conexão API → consulta e retorno → evento; terminar com mapa completo. Mobile empilha os contêineres.
