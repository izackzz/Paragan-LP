# Inventário de capacidades para conteúdo comercial

## 1. Critério e rastreabilidade

Inventário editorial consolidado dos ciclos r1, r2 e r3 de API e frontend, incluindo o backlog de upgrades. Não é auditoria exaustiva de código nem validação operacional de cada recurso.

Fontes abreviadas, relativas à raiz `@Paragan`:

| Código | Arquivo                                                   |
| ------ | --------------------------------------------------------- |
| A1     | `Paragan-GatewayAPI/@todolists/todolist-r1-complete.md`   |
| A2     | `Paragan-GatewayAPI/@todolists/todolist-r2-complete.md`   |
| A3     | `Paragan-GatewayAPI/@todolist-r3.md`                      |
| F1     | `Paragan-GatewayFront/@todolists/todolist-r1-complete.md` |
| F2     | `Paragan-GatewayFront/@todolists/todolist-r2-complete.md` |
| F3     | `Paragan-GatewayFront/@todolist-r3.md`                    |
| UP     | `Paragan-GatewayAPI/@todolists/upgrades-planing.md`       |

**Estados:** `D` = implementação documentada; `C` = capacidade condicionada a parceiro, configuração ou ativação; `P` = parcial, com pendência ou divergência relevante; `M` = simulação; `R` = futuro, removido ou sem evidência suficiente para oferta atual. D não significa homologação produtiva.

Quando uma seção recente substitui uma antiga, prevalece a recente. Checkbox marcado com texto de bloqueio continua sendo evidência ambígua, não confirmação de entrega integral.

## 2. Escopos e responsabilidades

| Escopo                          | Recursos centrais                                                                           | Papel na narrativa                                                                              |
| ------------------------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Plataforma Paragan / master     | Provisionamento de gateways, catálogo técnico, supervisão global, billing e observabilidade | Infraestrutura que sustenta a operação; não prometer acesso master ao contratante de um gateway |
| Dono do gateway / gateway-admin | Marca, sellers, condições comerciais, adquirência, financeiro, risco, equipe e campanhas    | Protagonista comercial do site                                                                  |
| Staff                           | Carteiras, atendimento e ações autorizadas por permissão                                    | Delegar trabalho mantendo governança                                                            |
| Seller e equipe delegada        | Produtos, checkout, vendas, clientes, financeiro, assinaturas, integrações e API            | Produto que o dono oferece à sua base                                                           |
| Comprador                       | Checkout, pagamento, confirmação, recibo e acesso digital autorizado                        | Experiência final que materializa a marca                                                       |

## 3. White label e identidade

| ID   | Capacidade e abrangência                                                        | Estado | Valor comercial e limite                                                                    | Evidência                      |
| ---- | ------------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- | ------------------------------ |
| WL01 | Branding por tenant: identidade, logos, assets e suporte                        | D      | Construir uma experiência reconhecível sob a marca do gateway                               | A1 F17/F64; F1 F79             |
| WL02 | Temas claro, escuro e marca; tokens configuráveis                               | D      | Personalização consistente nos painéis                                                      | A1 F65; F1 F80                 |
| WL03 | Branding Studio com preview da home seller, canvas, zoom e painel de edição     | P      | Mostrar personalização aplicada ao produto; validação visual ainda registrada como pendente | F3 F14                         |
| WL04 | Favicon, ícones PWA e Apple touch; processamento de imagens                     | D      | Preservar identidade nos pontos de contato; não equivale a app nativo                       | A2 F4; F2 F4                   |
| WL05 | Domínios próprios de app/API/docs/pay e resolução por host                      | C      | Identidade também na URL; exige configuração DNS/TLS por superfície                         | A1 F27; A2 F14; A3 F16; F3 F13 |
| WL06 | Vários domínios de checkout por seller, reutilizáveis entre produtos            | C      | Organizar marcas e ofertas do seller com hosts próprios                                     | A2 F26; F2 F28                 |
| WL07 | API seller e especificação filtrada; headers neutros em superfícies white label | D/C    | Levar a marca à integração técnica; não prometer ocultação legal irrestrita de parceiros    | A1 F27.5/F27.8                 |
| WL08 | E-mails transacionais com identidade/remetente do tenant                        | C      | Continuar a experiência após cadastro e compra; depende de remetente verificado             | A1 F57/F67; F1 F66/F82         |
| WL09 | Identidade empresarial, suporte e políticas públicas próprias                   | D      | Apresentar o operador e as condições da operação                                            | A2 F9; F2 §9/§19               |
| WL10 | Flyers da home seller: desktop/mobile, imagens, links e ordenação               | P      | Canal próprio de comunicação com a base; pendências de verificação registradas              | A3 F17; F3 F15                 |

## 4. Administração do gateway e equipe

| ID   | Capacidade                                                                    | Estado | Valor e limite                                                            | Evidência                              |
| ---- | ----------------------------------------------------------------------------- | ------ | ------------------------------------------------------------------------- | -------------------------------------- |
| OP01 | Cadastro, edição, suspensão e reativação de sellers; acompanhamento de status | D      | Governar a base comercial                                                 | A1 F6/F60; A3 F14; F3 F12              |
| OP02 | Onboarding PF/PJ, documentos, revisão, notas e histórico                      | D      | Organizar admissão e análise cadastral                                    | A1 F4/F61/F62; F1 F77/F83; A2 F11      |
| OP03 | Aprovar, recusar e solicitar informações/documentos adicionais                | D      | Dar tratamento operacional a cada cadastro                                | A2 F11; F2 §11                         |
| OP04 | Pendência documental pós-aprovação com bloqueio de saque                      | D      | Controlar exceções sem confundir cadastro com liquidação                  | A2 F11                                 |
| OP05 | Seleção de modelo de onboarding versionado                                    | D      | Padronizar coleta; autoria livre de formulários foi cancelada             | A1 F61; F1 F77                         |
| OP06 | Staff com cargo, permissões, hierarquia e carteira                            | D      | Distribuir trabalho com acesso delimitado                                 | A1 F5; A2 F10; F2 §10                  |
| OP07 | Consulta de pagamentos e saldo de sellers da carteira staff                   | D      | Resolver demandas com contexto financeiro autorizado                      | A3 F14; F3 F12                         |
| OP08 | Equipe seller por convite, permissões e contas gerenciadas                    | D      | Delegar operação de contas sem compartilhar identidade                    | A2 F22; F2 F24                         |
| OP09 | Troca de contexto de conta e revogação de acesso delegado                     | D      | Administrar múltiplas contas com fronteiras explícitas                    | A2 F22.4; F2 F23/F24                   |
| OP10 | Inbox, avisos e comunicação por audiência                                     | D      | Comunicar a operação a gateways, sellers e staff                          | A1 F33; F1 F42–F44                     |
| OP11 | Perfil, sessões, recuperação de acesso, 2FA e magic link configurável         | D      | Combinar acesso operacional e controles de identidade                     | A1 F40/F62; A2 F13; A3 F16; F2 §14/§15 |
| OP12 | Proteção do owner master e transferência de titularidade administrativa       | D      | Governança da plataforma; não generalizar esse controle a todos os papéis | A2 F8                                  |

## 5. Pagamentos e orquestração

| ID   | Capacidade                                                        | Estado | Valor e limite                                                                                         | Evidência                |
| ---- | ----------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------------------ | ------------------------ |
| PG01 | Criar, consultar e acompanhar pagamentos por status               | D/C    | Unificar acompanhamento das transações                                                                 | A1 F8; F1 F26            |
| PG02 | Captura manual/automática, cancelamento e reembolso total/parcial | D/C    | Tratar o ciclo da venda conforme suporte do processador                                                | A1 F8/F44; A3 F3.7       |
| PG03 | Cartão, Pix e boleto no fluxo de checkout                         | C      | Meios disponíveis pela interseção produto/configuração/adapter; não universais                         | A2 F29; A3 F4; F3 F2     |
| PG04 | Parcelamento, simulação de juros e regras de quem absorve o custo | D/C    | Construir condições comerciais com transparência ao comprador                                          | A1 F28.5; A2 §3.3; F2 F5 |
| PG05 | Clientes e métodos de pagamento tokenizados                       | D/C    | Associar cliente, pagamento e cobrança; tokenização depende do provedor                                | A1 F7; A2 §3.45          |
| PG06 | Registry de múltiplos processadores e capacidades                 | D/C    | Compor a adquirência da operação sem múltiplos painéis desconectados                                   | A1 F9/F29; A3 F3/F4      |
| PG07 | Regras por método, moeda, valor, bandeira, parcelas e risco       | D/C    | Traduzir política operacional em seleção de rotas elegíveis                                            | A1 F28.3; A2 §3.9/§3.10  |
| PG08 | Prioridade, estratégias de recusa, retentativa e circuit breaker  | D/C    | Lidar com elegibilidade e indisponibilidade; não garantir aprovação                                    | A1 F9/F28; A3 F3.6/F4.5  |
| PG09 | Tentativas duráveis e reconciliação de resultados ambíguos        | D/C    | Evitar interpretar timeout como recusa e disparar nova cobrança indevida                               | A3 F3.6/F4.5             |
| PG10 | Várias configurações/nominais no mesmo processador                | P/C    | Organizar contas separadas por configuração; testes/migrations ainda têm pendências no r3              | A3 F3/F4; F3 F1/F2       |
| PG11 | Preferência seller por meio, permitida pelo gateway               | P/C    | Autonomia controlada: restrições → preferência → ordem do gateway → alternativas                       | A3 F3/F4; F3 F1/F2       |
| PG12 | Métricas por configuração e método                                | P      | Cartão: aprovação; Pix/boleto: emissão e conclusão. Métrica informativa, sem reordenar automaticamente | A3 F4.6; F3 F2.6         |
| PG13 | Analytics por adquirente: volume, aprovação, falhas e latência    | D      | Apoiar decisões de configuração com visibilidade                                                       | A1 F28.3; A2 F5; F2 F6   |
| PG14 | Payment Links legados: API, validade, limites de uso e métricas   | P      | Não confundir com os links de ofertas do checkout de produtos nem prometer uma UI legada completa      | UP A7; A2 §3.44          |

### Integrações: o que o registro técnico demonstra

O `AcquirerRegistry.instantiate` em `Paragan-GatewayAPI/src/modules/tenant/acquirers/services/acquirer-registry.service.ts` contém ramificações específicas para Stripe, Mercado Pago, Pagar.me, Asaas, Iugu, Adyen, PayPal, Celcoin Payments e Transfeera, além de mocks e skeletons. A1 F29 descreve os adapters.

Isso comprova presença de implementações registradas, não homologação de todas as operações em produção. Não usar a contagem do catálogo, número de logos ou métodos globais de um provedor como número de integrações ativas da Paragan. Na comunicação pública, listar somente provedores e meios com disponibilidade comercial confirmada. Nomes acima são referência técnica interna, não comparação competitiva.

## 6. Produtos, ofertas e checkout

| ID   | Capacidade                                                              | Estado | Valor e limite                                                                                       | Evidência              |
| ---- | ----------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------------------- | ---------------------- |
| CK01 | Catálogo por seller: rascunho, publicação, inativação e arquivo         | D      | Organizar o que será vendido e preservar histórico                                                   | A2 F24; F2 F26         |
| CK02 | Ofertas avulsas e recorrentes no mesmo produto                          | D/C    | Estruturar modalidades comerciais sem duplicar produto                                               | A2 F24/F30; F2 F26/F32 |
| CK03 | Imagens, capa, galeria, suporte e instruções por produto                | D/P    | Apresentar a oferta; histórico frontend contém bloqueios contratuais junto a checks marcados         | A2 F25; F2 F27         |
| CK04 | Link por oferta e agrupador para múltiplas ofertas ativas               | D/C    | Distribuir ofertas com preço definido ou seleção de modalidade                                       | A3 F2; F2 F36          |
| CK05 | Checkout público com marca, produto, oferta, comprador e resumo         | D/C    | Conectar catálogo e pagamento numa experiência própria                                               | A2 F29; F2 F31         |
| CK06 | Templates versionados, herança visual e aparência por produto           | D      | Personalizar dentro de opções definidas                                                              | A2 F27; F2 F29         |
| CK07 | Editor de checkout com personalização, features e order bumps           | P      | Configuração por produto; não é builder livre de páginas                                             | A3 F12; F3 F11         |
| CK08 | Cupons fixos/percentuais, validade, limite e ofertas elegíveis          | D      | Estruturar campanhas; em recorrência, desconto só na primeira cobrança                               | A2 F28; F2 F30         |
| CK09 | Cotação de cupom e total antes de criar compra                          | D      | Exibir preço validado pelo servidor                                                                  | A3 F5; F3 F3           |
| CK10 | Até dez order bumps ordenados, preços e seleção de oferta adicional     | D      | Ampliar possibilidades de composição da compra, sem prometer aumento medido de ticket                | A3 F5; F3 F3           |
| CK11 | Imagem e entregáveis específicos por order bump                         | P      | Controle de apresentação e conteúdo adicional; gates F12 ainda parciais                              | A3 F12; F3 F11         |
| CK12 | Uma compra e uma transação com snapshots de itens e totais              | D      | Manter consistência entre oferta, cobrança e entrega                                                 | A3 F5                  |
| CK13 | Pix/boleto pendente, polling, 3DS e confirmação financeira              | D/C    | Mostrar o estado real do pagamento; não assumir sucesso por retorno do browser                       | A2 F29; F2 F31; F3 F2  |
| CK14 | Recibo protegido em página de obrigado: itens, descontos, frete e total | D      | Concluir a compra com informação clara                                                               | A3 F11; F3 F10         |
| CK15 | Modal de saída com imagem e cupom opcional                              | P      | Reapresentar a oferta; há pendência explícita de renderer/CSP                                        | A3 F7; F3 F5/F7        |
| CK16 | Timer com texto antes/depois e persistência por visita                  | D      | Comunicação configurável; não representa expiração real de preço                                     | A3 F7/F12; F3 F7/F11   |
| CK17 | Botão WhatsApp com número e mensagem configurados                       | D      | Canal de contato; não é chatbot ou automação de campanhas                                            | A3 F7; F3 F7           |
| CK18 | Navegação de retorno configurável, best-effort                          | D/P    | Tratamento de saída onde suportado; não controle universal do navegador                              | A3 F7; F3 F7           |
| CK19 | Redirecionamento para upsell/obrigado externo após confirmação          | P/C    | Continuidade pós-compra; não cobrança one-click, frontend registra bloqueio de contrato              | A3 F9; F3 F9           |
| CK20 | Autosave de campos permitidos e captura parcial de checkout             | P      | Retomar jornada; correlação cookie/body ainda tem pendência registrada                               | A3 F8; F3 F6           |
| CK21 | Detecção de abandono, painel seller e eventos de recuperação            | D/P    | Dar contexto para recuperação manual/integrada; depende da captura e não dispara campanhas nativas   | A3 F8; F3 F8           |
| CK22 | Notificações de venda configuráveis manualmente                         | P      | Fase recente substitui feed real no Catalyst; não apresentar como compras reais verificadas          | A3 F12.2; F3 F11.3     |
| CK23 | Feed público de compras confirmadas anonimizado                         | D/P    | Backend documentado; não confundir com fonte atual do componente Catalyst                            | A3 F10 versus F3 F11.3 |
| CK24 | Checkout físico com endereço, seletor e total com frete                 | M/P    | Fluxo técnico existe, mas cotações de transportadoras são fixtures, não integrações logísticas reais | A3 F6; F3 F4           |

## 7. Entrega digital e recorrência

| ID   | Capacidade                                                       | Estado | Valor e limite                                                                              | Evidência                      |
| ---- | ---------------------------------------------------------------- | ------ | ------------------------------------------------------------------------------------------- | ------------------------------ |
| RC01 | Biblioteca de arquivos/links e seleção de entregáveis por oferta | D/P    | Reutilizar conteúdo sem duplicar uploads; reconfirmar completude da UI e limites de storage | A2 F25; F2 F27                 |
| RC02 | Versões e snapshots dos conteúdos adquiridos                     | D      | Alterar novas ofertas sem reescrever silenciosamente compras passadas                       | A2 F25/F29                     |
| RC03 | Entrega vinculada a pagamento confirmado no checkout próprio     | D/C    | Conectar pagamento e acesso; pagamentos externos não ganham entrega automaticamente         | A2 F32/F35                     |
| RC04 | Acesso por link de compra, e-mail, OTP e sessão limitada         | D/C    | Distribuir conteúdo com autorização por compra                                              | A2 F32; F2 F34                 |
| RC05 | Downloads autorizados e reenvio ao e-mail original               | D/C    | Atender comprador preservando a identidade de destino                                       | A2 F31/F32; F2 F33/F34         |
| RC06 | Revogação em estorno total/chargeback                            | P      | Há correções P0 abertas no r3; não anunciar ciclo de revogação como integralmente validado  | A3 F1                          |
| RC07 | Planos, assinaturas, invoices, ciclos e histórico de tentativas  | D/C    | Acompanhar a receita recorrente e suas exceções                                             | A1 F14; A2 F21/F30; F2 F23/F32 |
| RC08 | Dunning e cancelamento de próximas cobranças                     | D/C    | Tratar falhas e cancelamentos; sem otimização por ML comprovada                             | A2 F21; UP A10                 |
| RC09 | Renovação no provedor original e cobertura do período pago       | D/C    | Preservar vínculo financeiro e acesso já adquirido                                          | A2 F30                         |
| RC10 | Reajuste com aviso prévio e vigência por contrato                | D/C    | Evoluir preço sem confundir novas vendas e contratos existentes                             | A2 F30; F2 F32                 |
| RC11 | Pix Automático para recorrência                                  | R/C    | Modelagem não equivale a operação; permanece bloqueado sem provedor homologado              | A2 F30; F2 F32; UP A3          |

Downloads protegidos não equivalem a LMS: aulas, progresso educacional, certificados, comunidade e área de membros completa não têm comprovação de entrega neste levantamento.

## 8. Financeiro, monetização e parceiros

| ID   | Capacidade                                                       | Estado | Valor e limite                                                                                           | Evidência                              |
| ---- | ---------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| FN01 | Saldo disponível, pendente, reservado e extrato por lançamentos  | D      | Dar visão operacional do dinheiro                                                                        | A1 F11; F1 F28                         |
| FN02 | Taxas por gateway, seller, meio e configurações específicas      | D      | Estruturar política comercial com regras e exceções                                                      | A1 F26/F28; A2 §3.11                   |
| FN03 | Comissão fixa, percentual e híbrida                              | D      | Adequar monetização ao modelo da operação                                                                | A1 F28.1; F1 F54.2                     |
| FN04 | Ledger de receita, taxas, custos e resultado operacional         | D/P    | Entender componentes de margem; custo ausente não deve virar zero ou lucro líquido contábil              | A1 F28/F63; A2 §3.1/§3.2               |
| FN05 | Visão consolidada por competência e detalhamento por escopo      | D/P    | Conectar adquirência, banking, antecipação, afiliados e cobrança da plataforma; respeitar data gaps      | A1 F63; F1 F78                         |
| FN06 | Split com valores/percentuais e responsabilidade por chargeback  | D/C    | Distribuir valores entre participantes; não afirmar liquidação bancária na origem para qualquer parceiro | A1 F15/F44; F1 F31                     |
| FN07 | Reservas, prazos de liberação e liberação antecipada autorizada  | D      | Configurar retenção operacional e acompanhar disponibilização                                            | A1 F26.5; F1 F54.2                     |
| FN08 | Saques com fila, aprovação/rejeição e política por seller        | D/C    | Equilibrar autonomia e controle de saída                                                                 | A1 F26.6; F1 F54.1                     |
| FN09 | Payouts, acompanhamento, reconciliação e integração BaaS         | C      | Executar pagamentos de saída conforme parceiro habilitado                                                | A1 F26; A2 F1                          |
| FN10 | Cadastro e revisão de contas bancárias de depósito Pix           | D/C    | Organizar destino bancário e análise documental; não vender verificação bancária automática universal    | A1 F66; F1 F81                         |
| FN11 | Antecipação: visão de elegibilidade, simulação e solicitação     | D/C    | Apresentar opções de recebimento conforme regras; não prometer crédito ou liquidez garantida             | A1 F12; A2 F21 de antecipações; F2 F22 |
| FN12 | Afiliados: cadastro, referência, comissão, histórico e suspensão | D      | Administrar participação comercial; não implica marketplace público de afiliados                         | A1 F28.2; F1 F54.3; A2 §3.46           |
| FN13 | Billing Paragan separado de taxas de adquirência/BaaS            | D/P    | Transparência de composição; retenção real e boleto B2B não comprovados como ativos                      | A1 F63; A2 §3.2                        |

## 9. Relacionamento e crescimento da base

| ID   | Capacidade                                                              | Estado | Valor e limite                                                          | Evidência              |
| ---- | ----------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------- | ---------------------- |
| GR01 | Campanhas de ranking por período com prêmios e pódio                    | D      | Organizar incentivos comerciais dentro do gateway                       | A2 F15/F19; F2 §17     |
| GR02 | Ranking, posição do seller, histórico e anonimato para audiência seller | D      | Dar visibilidade à participação sem expor identidade quando anonimizada | A2 F15; F2 §17         |
| GR03 | Revenue Rewards: níveis por faturamento acumulado e jornada             | D      | Estruturar reconhecimento progressivo da base                           | A2 F16/F20; F2 §18/§21 |
| GR04 | Prêmios, imagens, insígnias e acompanhamento de entrega                 | D      | Operacionalizar o programa de reconhecimento                            | A2 F19/F20; F2 §21     |
| GR05 | Habilitação do programa pelo gateway                                    | D      | Dono decide disponibilização à base                                     | A2 F18; F2 §20         |

Ranking por campanha e jornada por faturamento acumulado são mecanismos distintos. Não anunciar cashback, programa de pontos ou retenção comprovadamente maior por causa desses módulos.

## 10. Integração, dados e arquitetura

| ID   | Capacidade                                                                | Estado | Valor e limite                                                                                     | Evidência                     |
| ---- | ------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------------- | ----------------------------- |
| IT01 | API documentada, versionada e com contrato OpenAPI                        | D      | Integrar sistemas com contratos explícitos                                                         | A1 F25/F27/F53                |
| IT02 | Chaves API com scopes e segredo exibido uma vez                           | D      | Delegar acesso programático específico; emissão atual é sk_live, não prometer sandbox self-service | A2 F22.6                      |
| IT03 | Webhooks assinados, tentativas, histórico, reenvio e rotação              | D      | Automatizar processos com rastreabilidade de entrega                                               | A1 F10; A2 F33                |
| IT04 | Filtros de webhook por produto                                            | D      | Encaminhar eventos relevantes a cada integração                                                    | A2 F33; F2 F35                |
| IT05 | Catálogo de apps, instalação/desinstalação e consentimento por permissões | D      | Organizar extensões autorizadas por seller                                                         | A2 F23; F2 F25                |
| IT06 | App Calculadora: custo gateway, GMV, aprovadas, ticket e taxa efetiva     | D      | Tornar custos operacionais visíveis ao seller                                                      | A2 F23.4; F2 F25.5            |
| IT07 | Relatórios financeiros, volume, receita, conversão e exportações          | D      | Apoiar acompanhamento e análise; definir a semântica de cada métrica                               | A1 F19; A2 F5; F2 F6          |
| IT08 | Indicadores de recorrência e links                                        | D/P    | Apresentar somente campos efetivamente disponíveis; não inferir BI completo de MRR/churn/coortes   | A2 §3.48; F2 F5.5             |
| IT09 | Multi-tenancy por schema e fronteiras de acesso por escopo                | D      | Segregar contextos operacionais; não é infraestrutura física dedicada por cliente                  | A1 F2/F52                     |
| IT10 | Filas, workers, outbox e processamento assíncrono                         | D      | Separar tarefas de apoio do caminho principal e recuperar entregas                                 | A1 F21; A2 §3.16–§3.20        |
| IT11 | Idempotência, estados financeiros, locks e reconciliação                  | D      | Tratar repetição e concorrência de operações críticas                                              | A1 F30/F44/F50; A2 F34; A3 F3 |
| IT12 | Paginação, índices, cache e gestão de conexões                            | D/P    | Mecanismos para evolução de carga; não provam escala ilimitada                                     | A1 F23; A2 §3.33/§3.38        |
| IT13 | Métricas, tracing, healthchecks, alertas e logs contextualizados          | D/C    | Dar visibilidade técnica à equipe que opera a plataforma                                           | A1 F22/F31/F32                |
| IT14 | Live logs e notificações em tempo real                                    | P/C    | Superfícies documentadas; histórico frontend tem validação de SSE produtivo pendente               | F1 F83.2                      |

## 11. Segurança e governança

| ID   | Capacidade                                                              | Estado | Valor e limite                                                                           | Evidência                  |
| ---- | ----------------------------------------------------------------------- | ------ | ---------------------------------------------------------------------------------------- | -------------------------- |
| SG01 | 2FA, recuperação, políticas de sessão e revogação                       | D      | Proteger ações e acesso à operação                                                       | A1 F2/F46; A3 F16          |
| SG02 | RBAC, permissões delegadas e isolamento por carteira                    | D      | Definir quem consulta e quem executa                                                     | A1 F69/F70; A2 F22         |
| SG03 | Criptografia de segredos/dados sensíveis e mascaramento                 | D      | Reduzir exposição; não chamar todo processamento de criptografia ponta a ponta           | A1 F47; A2 F33.3           |
| SG04 | Trilhas de auditoria com ator, ação, recurso e request ID               | D      | Investigar e atribuir decisões operacionais                                              | A1 F18/F47                 |
| SG05 | Motor de risco por regras e fila de revisão                             | D/C    | Definir tratamento de transações; não é antifraude ML                                    | A1 F16; UP A6              |
| SG06 | Disputas, evidências, prazos e desfechos                                | D/C    | Organizar contestação e exposição financeira                                             | A1 F13; F1 F20/F32         |
| SG07 | Inteligência consultiva de chargeback e relatórios heurísticos          | D/P    | Apoio à decisão; não probabilidade calibrada ou contestação automática garantida         | UP A12                     |
| SG08 | Solicitações LGPD, portabilidade, anonimização e consentimento          | D      | Apoiar processos de privacidade; software não certifica conformidade integral da empresa | A1 F20/F47; A2 §3.29/§3.36 |
| SG09 | Rate limits, validação de entrada, assinatura e proteção de superfícies | D      | Camadas técnicas de proteção                                                             | A1 F25/F30; A2 F33; A3 F16 |

## 12. Recursos fora da oferta pública atual

Não apresentar como disponíveis: roteamento por ML/menor custo automaticamente otimizado; antifraude ML; Pix Automático homologado; Open Finance/ITP; network tokenization própria; servidor 3DS próprio; SDK Paragan.js distribuível; sandbox público isolado; DREX; FX e liquidação internacional universal; frete real integrado; app nativo; LMS completo; builder livre de checkout; cobrança de upsell one-click; campanhas automáticas de recuperação; contestação automática irrestrita; tesouraria/float com projeção e aplicação; SLA ou throughput não medidos.

Fontes: UP A1–A16; A2 F24–F33; A3 F6/F8/F9; F2 F29/F34. A existência de campos, seeds, logos, protótipos ou adapters de teste não altera essa regra.
