# Paragan — Parte B: produção dos assets

Estas fichas orientam produção; não declaram que as capturas já foram entregues. Os componentes atuais mantêm espaços reservados, identificados como tal. A copy textual funciona sem ler as imagens. Não substituir placeholders por interfaces desenhadas como se fossem capturas reais.

## Convenção compartilhada

- Operação fictícia: **Operação Exemplo**; seller fictício: **Seller Exemplo**. Nenhum dado de cliente real.
- Oferta de referência: **Guia de organização**, avulsa, R$ 100,00. H03, E01 e E02 usam a mesma versão da oferta, os mesmos itens e o mesmo total.
- Sem PAN, credenciais, tokens, e-mails reais, documentos pessoais ou endpoints privados. Destinos técnicos e IDs devem ser de exemplo ou mascarados.
- Capturas frontais do produto, sem perspectiva, números animados, métricas de conversão ou logs de marcas não autorizadas.
- Campos essenciais também aparecem na copy textual. Alt text descreve conteúdo informativo; logos decorativos repetidos podem ter alt vazio quando o nome do registro já os identifica.
- Quando a captura estiver validada, identificação pública: **Demonstração do produto · dados fictícios**. Enquanto não existir: **Espaço reservado à captura · exemplo fictício**.
- Qualquer vídeo substitui a imagem do mesmo painel: começar na tela da tarefa, executar uma ação real, mostrar seu estado observado e manter legenda. Sem segunda apresentação redundante.

## H01 — Hero / Seu gateway

- Local: `hero-section.tsx`, painel `gateway`, 1600×860.
- Material: captura real da perspectiva do operador.
- Cena: consultar a base e a visão consolidada da Operação Exemplo.
- Legíveis: identificação da operação; lista ou quantidade demonstrativa de sellers; status de cadastro; informações financeiras realmente disponíveis. Não fabricar KPI para preencher espaço.
- Conclusão: o contratante administra uma base de sellers e pode acompanhar cadastros e informações da operação.
- Legenda: A perspectiva do operador reúne a base de sellers, os cadastros em revisão e as informações financeiras disponíveis.
- Alt: Painel do operador com base de sellers, status de cadastro e visão financeira da operação demonstrativa.
- Fonte/condição: gateway-admin real, campos e permissões conferidos. Remover qualquer dado de produção; usar mock identificado.

## H02 — Hero / Seus sellers

- Local: `hero-section.tsx`, painel `seller`, 1600×860.
- Material: captura real da área do Seller Exemplo.
- Cena: consultar as próprias vendas e os recebimentos.
- Legíveis: papel do seller, lista de pedidos, estados dos pagamentos, saldos existentes no produto. Não mostrar acesso master ou dados de outro seller.
- Coerência: mesma operação de H01; oferta de referência quando constar na lista.
- Conclusão: a empresa contratante oferece uma área própria à sua base, distinta do painel do operador.
- Legenda: Na área do seller, sua base acompanha as próprias vendas, o estado dos pedidos e os recebimentos.
- Alt: Área de um seller com lista de vendas, estados dos pedidos e saldos demonstrativos.
- Fonte/condição: área seller real; acesso e campos conferidos no ambiente demonstrativo.

## H03 — Hero / Seu checkout

- Local: `hero-section.tsx`, painel `checkout`, 1600×860.
- Material: captura real do checkout de uma oferta.
- Cena: a oferta de referência aberta antes da submissão do pagamento.
- Legíveis: nome do produto, preço, resumo e meios efetivamente habilitados para a demonstração. Não incluir um método só por existir em enum ou catálogo.
- Coerência: mesma operação e seller de H01/H02; mesma oferta que E01/E02.
- Conclusão: a jornada de compra apresenta oferta e pagamento com a identidade configurada.
- Legenda: O comprador encontra a oferta, o resumo da compra e os meios habilitados no checkout da sua operação.
- Alt: Checkout de uma oferta demonstrativa com identificação do produto, resumo da compra e métodos de pagamento habilitados.
- Fonte/condição: checkout real com método elegível no ambiente; sem afirmar aprovação, conversão ou liquidação real.

## S01 — Cenários / faixa dos quatro participantes

- Local: `solutions-section.tsx`, faixa após os três cenários.
- Material: esquema textual já implementado em quatro unidades; ilustração opcional dentro da mesma faixa, sem criar seção.
- Cena: relação de uso Paragan → Sua empresa / operador → Sellers → Compradores.
- Legíveis: identificação e responsabilidade de cada participante, exatamente como `structure.scenarios.roles`.
- Conclusão: sua empresa contrata a Paragan; sellers são clientes da operação, e compradores pagam aos sellers.
- Legenda, se virar imagem: A Paragan fornece a plataforma à sua empresa; você administra sellers, que oferecem produtos e recebem pagamentos dos compradores.
- Alt: Quatro participantes da operação: Paragan, empresa operadora, sellers e compradores, com suas responsabilidades de uso.
- Fonte/condição: esquema representa relações de uso, não rota de dinheiro, custódia ou liquidação. Conteúdo atual em HTML dispensa alt de imagem e mantém os quatro textos acessíveis.

## O01 — Operação / demonstração comercial

- Local: `control-section.tsx`, coluna 7/12, 1000×850.
- Material: captura real ou sequência curta de configuração aplicada a um seller.
- Cena: localizar Seller Exemplo, consultar ou alterar uma condição autorizada e mostrar o resultado salvo.
- Legíveis: identificação do seller; escopo da configuração; taxa/comissão; padrão ou exceção, quando existente; estado persistido. Não simular aprovação de salvamento.
- Coerência: seller de H02; condição compatível com o modelo ilustrativo de F01, se validada no produto.
- Conclusão: uma decisão comercial corresponde a configuração consultável no produto.
- Legenda: Na configuração comercial do seller, você consulta a condição aplicada e os parâmetros usados pela operação.
- Alt: Configuração comercial de um seller demonstrativo com condição aplicada, taxas, comissões e identificação do cadastro.
- Fonte/condição: tela real de condições comerciais. Verificar semântica das taxas e a persistência antes de gravar.

## O02 — Operação / recorte opcional de acesso

- Local: recorte complementar na coluna demonstrativa de O01; não obrigatório para a composição atual.
- Material: captura real de papel/permissão relacionado à tarefa.
- Cena: consultar quem tem autorização para executar a configuração mostrada em O01.
- Legíveis: papel, permissão relevante e escopo/carteira, se existir na tela. Sem lista de recursos master atribuídos ao contratante.
- Conclusão: consulta e execução podem ser delimitadas por papel.
- Identificação curta: **Permissão para a tarefa**.
- Alt: Papel da equipe com a permissão e o escopo autorizados para a configuração comercial apresentada.
- Fonte/condição: somente se essa relação puder ser demonstrada; não inferir acesso pelo nome do cargo.

## O03 — Operação / recorte opcional de histórico

- Local: segundo recorte complementar de O01; no máximo dois recortes no conjunto.
- Material: registro real relacionado à alteração, se disponível.
- Cena: consultar o registro correspondente à ação demonstrada.
- Legíveis: ator fictício, ação, recurso, horário demonstrativo e informação de rastreabilidade existente. Não editar registro para criar correlação inexistente.
- Conclusão: o registro disponível permite atribuir e investigar a ação demonstrada.
- Identificação curta: **Registro da decisão**.
- Alt: Registro demonstrativo da alteração, com ator, ação e recurso consultados no histórico.
- Fonte/condição: confirmar que o produto registra a alteração de O01. Se houver apenas histórico cadastral, não apresentá-lo como auditoria comercial; omitir este recorte.

## F01 — Financeiro / composição demonstrativa

- Local: `finance-section.tsx`, área 7/12, 1200×800; composição textual em 5/12.
- Material: painel/fluxo real somente quando os campos e valores puderem ser reconciliados com a tabela. Até essa validação, manter esquema explicitamente ilustrativo ou o placeholder atual.
- Cena: consultar uma cobrança e distinguir taxas, receita da operação, saldo do seller e reserva.
- Legíveis: cobrança R$ 100,00; taxas R$ 3,00; receita R$ 2,00; total do seller R$ 95,00; desse total, R$ 90,00 pendentes e R$ 5,00 reservados. A reserva não é somada novamente aos R$ 95,00.
- Conclusão: valor cobrado, receita e saldo são componentes distintos; disponibilidade não é transferência concluída.
- Legenda: O exemplo separa a cobrança de R$ 100,00 em taxas, receita da operação e valores do seller, incluindo a parcela reservada.
- Alt: Composição ilustrativa de uma cobrança de R$ 100,00 com R$ 3,00 em taxas, R$ 2,00 de receita da operação, R$ 90,00 pendentes e R$ 5,00 reservados para o seller.
- Fonte/condição: validar modelo de registro e liquidação com produto/financeiro. Não impor números da tabela sobre uma captura incompatível nem deduzir tratamento contábil/tributário. Se a captura exigir outro exemplo, atualizar imagem, tabela, nota, legenda e alt juntos.

## E01 — Experiência / checkout desktop

- Local: `checkout-section.tsx`, prévia desktop, 1440×760.
- Material: captura real do checkout da oferta de referência.
- Cena: comprador confere a compra antes de pagar; etapa equivalente à de E02.
- Legíveis: produto, oferta, itens, total e método habilitado. Cupom ou adicional só se realmente configurado; seu estado deve coincidir no mobile.
- Conclusão: a mesma compra é apresentada no desktop e no celular; não comprova conversão.
- Legenda conjunta: A mesma oferta é apresentada no desktop e no celular, com itens e totais equivalentes e os métodos habilitados para a compra.
- Alt: Checkout desktop da oferta demonstrativa com produto, resumo da compra, cupom e método habilitado.
- Fonte/condição: renderer real. Se não houver cupom configurado, removê-lo também do alt. Identificar dados fictícios e esconder campos sensíveis.

## E02 — Experiência / checkout mobile

- Local: `checkout-section.tsx`, prévia mobile, 390×760.
- Material: captura real da mesma oferta, na mesma etapa de E01.
- Cena: comprador consulta itens e total no celular.
- Legíveis: mesmos produto, itens, cupom/adicionais quando aplicáveis, total e método de E01. Não criar uma segunda oferta para caber na tela.
- Conclusão: a apresentação da compra se adapta ao mobile sem mudar seus dados.
- Legenda: compartilhada com E01, sem repetir um segundo argumento.
- Alt: A mesma oferta demonstrativa em checkout mobile, com os mesmos itens e total da visualização desktop.
- Fonte/condição: viewport mobile do produto real; conferir que o recorte não oculta estado relevante nem impede leitura da oferta.

## I01 — Integrações / API

- Local: `integrations-section.tsx`, bloco API, 1200×600.
- Material: trecho real de documentação ou exemplo verificável, nunca um endpoint inventado.
- Cena: consultar uma operação pertinente ao fluxo de pagamento da oferta de referência.
- Legíveis: método e rota do contrato confirmado; campos relevantes; resposta de exemplo; versão e permissões quando aplicáveis. Nenhuma chave real.
- Conclusão: o avaliador técnico identifica a operação e os requisitos de implementação.
- Legenda: O material solicitado deve mostrar o contrato da operação consultada, seus campos e as permissões necessárias.
- Alt atual: Espaço reservado a um trecho de documentação da API com contrato, campos e resposta de exemplo.
- Alt após produção: Trecho da referência da API da operação apresentada, com campos, permissões e resposta de exemplo. Substituir “operação apresentada” pelo recurso realmente capturado.
- Fonte/condição: contrato vigente e permissão de publicação. Sem URL de referência pública confirmada, CTA solicita o material pelo contato; não anuncia acesso autônomo.

## I02 — Integrações / webhooks

- Local: `integrations-section.tsx`, bloco Webhooks, 1200×600.
- Material: histórico real de entrega/eventos do produto, com dados demonstrativos.
- Cena: investigar o evento associado à compra de referência ou a uma ação demonstrativa identificada.
- Legíveis: evento, relação com a operação, destino mascarado, tentativa e estado registrados. Mostrar apenas campos existentes; não inferir reenvio ou retry automático pelo ícone.
- Conclusão: é possível consultar o estado registrado para a entrega da conexão.
- Legenda: O histórico relaciona o evento à tentativa de entrega e ao estado registrado para a conexão consultada.
- Alt: Histórico demonstrativo de entregas de webhook com evento, destino mascarado e estado das tentativas.
- Fonte/condição: histórico real e contrato de eventos conferidos. Validar assinatura, retry e reenvio antes de acrescentá-los à narrativa.

## Espaços adicionais de integrações — solicitação de Zack

Local: catálogo do bloco 06, sem nova seção principal. Dois grupos, com três slots iniciais cada; a quantidade pode ser ajustada em `src/config/site.ts`, `integrationSlots`.

| Grupo                           | Slots                           | Logo                                               | Ilustração                                                                 |
| ------------------------------- | ------------------------------- | -------------------------------------------------- | -------------------------------------------------------------------------- |
| Adquirentes e processamento     | `acquiring-01` a `acquiring-03` | Asset separado, transparente, proporção preservada | Cena da capacidade de processamento daquela conexão                        |
| Marketing, utilidades e plugins | `tools-01` a `tools-03`         | Asset separado da ferramenta/plugin                | Cena de uso ou esquema da conexão externa, sem inventar fluxo implementado |

- Cada slot tem `logoSrc` e `illustrationSrc` independentes; usar caminhos locais em `public/` como `/assets/integrations/...` quando os arquivos existirem.
- Sem fontes configuradas, o card mostra o rótulo reservado da logo e a ilustração-placeholder. Nenhum nome ou marca foi pré-preenchido.
- Dimensões de referência: logo 160×64, exibida com `object-contain`; ilustração 640×360.
- Texto/labels dos grupos: `structure.integrations.groups`, `slots`, `fields` e `groupCta` no catálogo de português.
- Cada logo futura exige identificação/autorização; cada ilustração exige escopo e estágio conferidos. Representar ferramenta externa não comprova integração da Paragan com ela.
- Antes de substituir o placeholder, preencher provedor, métodos/função, recursos, estágio e requisitos com informações confirmadas. Separar desenvolvimento, homologação e habilitação.
- Não usar logos como prova de certificação, case ou vínculo comercial sem documentação.
- Alt deve identificar a marca/configuração efetivamente apresentada quando a imagem for informativa; a ilustração deve descrever a tarefa, não alegar economia ou conversão.
