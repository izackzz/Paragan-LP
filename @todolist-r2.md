# Paragan LP — r2

## Fase 1 — Refinamento visual e conteúdo

- [x] `fluid-hover-highlight.tsx` + blocos contíguos: raio medido por item; uma divisória por contato.
- [x] `sections/*` + `public/assets/illustrations/`: usar `ArtPlaceholder` local e remover ilustrações externas.
- [x] `button.tsx` + landing: fundos visíveis, CTA platinado, tabs `rounded-md`, escala sem valores arbitrários e copy reforçada.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 3 — Correções finais de aceitação

- [x] `globals.css` + `site-header.tsx` + `card.tsx` + hero: CTA platinado, sem ghost e invisibilidade explícita ao cliente final.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 2 — Fechamento de aceitação

- [x] `use-fluid-hover.ts` + `fluid-group.tsx`: fallback de raio só para wrapper declarado.
- [x] `src/**/*.tsx`: substituir utilitários Tailwind com valores arbitrários por escala semântica ou token nomeado.
- [x] `pnpm format:check` + `pnpm exec tsc --noEmit` + `pnpm lint`: sem erros.

## Fase 4 — Cards de navegação do hero

- [x] `hero-section.tsx` + `tabs.tsx`: cards quadrados com título, kicker, descrição e Hugeicons.

## Fase 5 — Hierarquia dos cards do hero

- [x] `tabs.tsx`: reduzir kicker/descrição e reforçar hierarquia do título.

## Fase 6 — Plataforma em pares

### Copy e numeração

- [x] `platform-section.tsx`: `01 / IDENTIDADE` — “Sua marca, em cada contato.”; painel, checkout, domínio e comunicação próprios.
- [x] `platform-section.tsx`: `02 / REGRAS COMERCIAIS` — “Seu modelo vira regra.”; taxas, comissões e condições por seller.
- [x] `platform-section.tsx`: `03 / PESSOAS` — “Cada pessoa, no seu papel.”; equipe, carteiras e permissões.
- [x] `platform-section.tsx`: `04 / RELACIONAMENTO` — “Uma base para cultivar.”; campanhas, rankings e premiações para sellers.
- [x] `platform-section.tsx`: `05 / ADQUIRÊNCIA` — “Rotas com direção.”; processadores, prioridades e regras de pagamento.
- [x] `platform-section.tsx`: `06 / GESTÃO FINANCEIRA` — “Cada valor, no contexto.”; saldos, extrato, reservas e solicitações de saque.
- [x] `platform-section.tsx`: `07 / CHECKOUT` — “Da oferta ao pagamento.”; produtos, ofertas, cupons e adicionais.
- [x] `platform-section.tsx`: `08 / INTEGRAÇÕES` — “Conecte a operação.”; API, webhooks e histórico de entrega.

### Composição e verificação

- [x] `platform-section.tsx`: quatro pares `01–02 / 03–04 / 05–06 / 07–08`; frames de cantos retos, cards quadrados, ilustração em meia área, padding e bordas de `1px`.
- [x] `globals.css`: substituir `A BB / C D E / FF G`; sticky dos pares com espaço vertical suficiente, mobile empilhado e movimento reduzido respeitado.
- [x] `platform-section.tsx`: ESLint + Prettier + `tsc --noEmit --incremental false`; `git diff --check`.

## Fase 7 — Tema claro e alternância na navbar

- [x] `globals.css`: tokens claros; preservar paleta escura, superfícies e contraste.
- [x] `lib/theme.ts` + `layout.tsx` + `theme-toggle.tsx` + `site-header.tsx`: detectar `prefers-color-scheme` antes do paint; botão sol/lua desktop/mobile, persistência e sincronização.
- [x] Arquivos alterados: Prettier + ESLint + `tsc --noEmit --incremental false`; teste direcionado de preferência, clique e storage indisponível.

## Fase 8 — Reestruturação da homepage

### 8.1 — Contratos de estrutura e conteúdo

- [x] `node_modules/next/dist/docs/`: ler guias de composição e navegação antes de implementar os componentes afetados.
- [x] `src/app/page.tsx`: ordenar hero → cenários → operação → financeiro → checkout → integrações → confiança → implantação → FAQ → contato → rodapé; header antes do `main`.
- [ ] `src/config/site.ts`: definir `inicio / solucoes / operacao / financeiro / checkout / integracoes / estrutura / implantacao / perguntas / contato`; IDs únicos e destinos válidos.
- [ ] `src/config/site.ts` + `sections/*`: numerar os dez blocos conforme roteiro; hero 01 sem faixa nova, cenários 02 até contato 10.
- [ ] `src/i18n/messages/pt-BR.ts`: títulos de seção conforme roteiro; preservar parágrafos reaproveitáveis e usar placeholders curtos nas lacunas, sem nova copy persuasiva.
- [x] `src/i18n/messages/pt-BR.ts` + `src/config/site.ts`: textos e labels no catálogo; URLs, IDs, índices, estágios e configuração fora das traduções.
- [ ] `sections/*` + `landing/styles.ts`: grid desktop de 12 colunas; mobile em uma coluna, grades de 3/4 itens em duas colunas intermediárias e sequência DOM conforme roteiro.
- [ ] `sections/*` + `landing/primitives.tsx`: um H1; H2 por seção; H3 para módulos, cards, etapas e perguntas; identificador acima e descrição abaixo do H2.
- [ ] `sections/*` + `globals.css`: preservar tokens, fontes, frame, padding, hairlines, raios, temas, fluid hover e motion do `DESIGN.md`; nenhuma reformulação visual.
- [ ] `sections/*`: manter conteúdo estático no servidor; estado client somente em navegação, tabs, expansíveis e formulário.

### 8.2 — Continuidade comercial

- [x] `src/config/site.ts`: definir cenários estáveis `launch / migration / platforms` e origens dos CTAs; nenhuma informação pessoal na URL.
- [ ] `src/components/landing/contact-intent-link.tsx`: compor link ao contato com cenário/origem em parâmetros permitidos; preservar navegação nativa por hash, teclado e histórico.
- [ ] `contact-intent-link.tsx` + `contact-section.tsx`: sincronizar seleção ao carregar e ao acionar CTA na mesma página; validar parâmetros e manter cenário durante edição e tentativa novamente.
- [ ] `contact-intent-link.tsx` + `launch-section.tsx`: preservar intenção comercial nos CTAs de implantação; CTA sem cenário não apagar escolha anterior.

### 8.3 — Cabeçalho

- [x] `site-header.tsx`: manter marca, navegação e utilidades/CTA em três zonas; tema e comportamento sticky preservados.
- [x] `site-header.tsx` + catálogo `navigation`: Plataforma / Soluções / Desenvolvedores / Empresa / Contratação; contratação como acesso direto a `#implantacao`, sem inventar pacotes.
- [x] `site-header.tsx` + catálogo `navigation.platform`: grade de duas colunas com visão geral, operação/sellers, condições comerciais, financeiro, checkout e multiadquirência/integrações; nome, descrição e destino por item.
- [x] `site-header.tsx` + catálogo `navigation.solutions`: três cenários em sequência; destinos próprios nos cards de lançamento, migração e incorporação.
- [x] `site-header.tsx` + catálogo `navigation.developers`: grade de duas colunas com documentação, API, webhooks e catálogo de integrações.
- [x] `site-header.tsx` + catálogo `navigation.company`: lista Sobre / Estrutura e confiança / Parceiros / Contato; conteúdos editoriais somente como acesso secundário configurado.
- [ ] `src/config/site.ts` + `site-header.tsx`: trocar `#` por âncoras existentes; recurso externo não publicado leva ao bloco de avaliação correspondente, sem simular documentação pronta.
- [x] `site-header.tsx`: mobile com marca, toggle, navegação vertical e CTA final; fechar ao navegar, Escape devolve foco e alvos mínimos de 44px.

### 8.4 — Bloco 01: Hero e prévia do produto

- [x] `hero-section.tsx`: preservar badge, H1, descrição, espaçamento, alinhamento, CTAs e aparência da primeira dobra.
- [x] `hero-section.tsx`: conectar CTA principal à avaliação comercial e secundário à prévia existente; não prometer demonstração externa inexistente.
- [x] `hero-section.tsx` + catálogo `introduction`: manter resumo complementar antes das tabs; legenda de introdução e descrição curta sem duplicar apresentação.
- [x] `hero-section.tsx`: preservar três tabs Seu gateway / Seus sellers / Seu checkout, respectivos kickers, descrições e painéis.
- [x] `hero-section.tsx`: cada painel com prévia, legenda e identificação visível de ambiente demonstrativo também no mobile.
- [x] `hero-section.tsx`: manter faixa White-label / Multi-tenancy / Multiadquirência / API e webhooks em 4 colunas desktop e 2 nas larguras menores.

### 8.5 — Bloco 02: Cenários de contratação

- [x] `solutions-section.tsx` + catálogo `audience`: H2 “Cenários de contratação”, identificador e introdução; mover seção imediatamente após hero.
- [x] `solutions-section.tsx`: substituir linhas alternadas por três cards conectados Lançamento / Migração / Incorporação a uma plataforma; 1 → 2 → 3 colunas.
- [x] `solutions-section.tsx` + catálogo `audience.items`: cada card com identificador, H3, situação inicial, lista de escopo, requisito inicial e CTA contextual.
- [x] `solutions-section.tsx`: separar lançamento de migração hoje reunidos em `operators`; retirar produtos digitais como cenário independente e aproveitar texto pertinente no checkout.
- [x] `solutions-section.tsx`: IDs próprios nos três cenários e pré-seleção correspondente no contato via CTA.
- [x] `solutions-section.tsx`: faixa Paragan → Empresa contratante/operador → Sellers → Compradores; papel e relação por unidade, mesma ordem no mobile.

### 8.6 — Bloco 03: Controle da operação e modelo comercial

- [x] `control-section.tsx` + catálogo `operations`: ID `operacao`, H2 “Controle da operação e modelo comercial”, identificador e descrição; preservar banda dark existente.
- [x] `control-section.tsx`: corpo 5/12 conteúdo + 7/12 demonstração; mobile com todos os módulos antes da mídia.
- [x] `control-section.tsx` + catálogo: reaproveitar `capabilities.items.identity`; H3 “Identidade da operação”, parágrafo e lista Painel / Checkout / Domínio / Comunicação.
- [x] `control-section.tsx` + catálogo: reaproveitar `capabilities.items.policies` e contexto Comercial; H3 “Condições comerciais”, condições por seller, taxas/comissões, padrão e exceções suportadas.
- [x] `control-section.tsx` + catálogo: reaproveitar `capabilities.items.people` e contexto Operação; H3 “Governança da base e da equipe”, sellers, papéis/permissões, carteiras/responsabilidades e histórico de decisões.
- [x] `control-section.tsx`: demonstração de configuração/decisão com tarefa identificada, mídia e legenda; no máximo dois recortes complementares, sem nova seção de perspectivas redundante.
- [x] `control-section.tsx`: mover contexto Financeiro para `finance-section.tsx`; não manter aba financeira neste bloco.
- [x] `control-section.tsx` + catálogo: expansível complementar com campanhas, rankings, premiações e outros recursos confirmados; nome e descrição por item.
- [x] `control-section.tsx`: CTA final para avaliar configuração da operação com origem preservada no contato.

### 8.7 — Bloco 04: Gestão financeira

- [x] `finance-section.tsx` + catálogo `ledger`: H2 “Gestão financeira”, identificador e descrição; reaproveitar módulo financeiro e contexto Financeiro da operação.
- [x] `finance-section.tsx`: demonstração 7/12 + composição 5/12; exemplo identificado, painel/fluxo, legenda e dados explicitamente demonstrativos.
- [x] `finance-section.tsx` + catálogo: composição com valor da cobrança, taxas, receita, participantes, reservas, saldo e disponibilidade prevista; valores apenas fictícios e consistentes ou placeholders.
- [x] `finance-section.tsx`: composição em lista estruturada semântica desktop e registros empilhados mobile, mantendo nomes e campos.
- [x] `finance-section.tsx` + catálogo: observação sobre movimentação e dependência de processamento/liquidação abaixo da composição; sem prometer prazo universal.
- [x] `finance-section.tsx`: três módulos Receita e custos / Disponibilidade / Movimentações; reaproveitar `ledger.items`, incluir listas e estados correspondentes.
- [x] `finance-section.tsx`: CTA financeiro contextual; mobile demonstração → composição → módulos → CTA.

### 8.8 — Bloco 05: Experiência dos sellers e compradores

- [x] `checkout-section.tsx` + catálogo `sales`: H2 “Experiência dos sellers e compradores”, identificador, descrição e CTA da demonstração existente.
- [x] `checkout-section.tsx`: prévia desktop e mobile do mesmo cenário de compra, legenda associada e identificação demonstrativa; reservar proporções de mídia.
- [x] `checkout-section.tsx` + catálogo `sales.steps`: quatro etapas Oferta / Checkout / Confirmação / Entrega e acesso; número, H3, descrição e recursos por etapa.
- [x] `checkout-section.tsx`: separar confirmação de entrega hoje reunidas em `track`; grade 1 → 2 → 4, mantendo sequência DOM.
- [x] `checkout-section.tsx` + catálogo: dois complementos Recorrência / Split; descrição, dependências de método/provedor, participantes/configurações e acesso ao detalhamento disponível.
- [x] `checkout-section.tsx`: aproveitar conteúdo de produtos digitais do cenário antigo; não ampliar entrega digital para uma plataforma de cursos completa.

### 8.9 — Bloco 06: Adquirência e integrações

- [x] `integrations-section.tsx` + catálogo `connectivity`: H2 “Adquirência e integrações”, identificador e descrição; absorver `capabilities.items.acquiring` e `integrations`.
- [x] `integrations-section.tsx`: processamento em 4/12 introdução + 8/12 matriz; H3, descrição, controles, contratos/credenciais e habilitação da operação.
- [x] `src/config/site.ts` + catálogo: registros de provedor com métodos, recursos, estágio, requisitos e detalhes; sem afirmar integração ativa sem informação confirmada.
- [x] `integrations-section.tsx`: matriz desktop e registros completos empilhados mobile; separar processamento de movimentação/parceiros financeiros quando houver registros.
- [x] `integrations-section.tsx`: blocos API e Webhooks em duas colunas; H3, descrição e listas de operações/grupos de eventos.
- [x] `integrations-section.tsx`: prévia de documentação/exemplo API e histórico de entrega de webhooks; exemplos identificados, sem tokens ou credenciais reais.
- [x] `integrations-section.tsx`: ações distintas Documentação / Avaliar integração específica; recurso não publicado identificado e direcionado à avaliação técnica.

### 8.10 — Bloco 07: Confiança operacional

- [x] `scale-section.tsx` + catálogo `reliability`: ID `estrutura`, H2 “Confiança operacional”, identificador e descrição; reutilizar seção existente sem nova linguagem visual.
- [x] `scale-section.tsx`: quatro pilares em 2×2 desktop e empilhados mobile: Separação entre operações / Integridade financeira / Diagnóstico e recuperação / Sustentação.
- [x] `scale-section.tsx` + catálogo: cada pilar com H3, descrição, informação específica e referência; reaproveitar isolamento, consistência e visibilidade existentes.
- [x] `scale-section.tsx` + catálogo: biblioteca em duas colunas com Documentação / Sandbox / Demonstrações / Relatórios publicáveis / Informações operacionais; tipo, nome, descrição, versão/data quando existente e acesso.
- [x] `src/config/site.ts` + `scale-section.tsx`: links e estados de evidências configurados; recursos pendentes não apresentados como publicados nem acessos falsos.
- [x] `scale-section.tsx` + catálogo: bloco compacto de empresa, time/responsáveis, manutenção e canal de avaliação técnica; dados desconhecidos como placeholders explícitos.
- [ ] `scale-section.tsx` + `site-footer.tsx`: referências institucionais somente com nome, vínculo/status, escopo e link verificável; não transformar badges atuais em certificações ou parcerias presumidas.

### 8.11 — Bloco 08: Contratação, implantação e migração

- [ ] `launch-section.tsx` + catálogo `onboarding`: H2 “Contratação, implantação e migração”, identificador e descrição.
- [ ] `launch-section.tsx`: escopo em duas colunas; composição da entrega antes da composição comercial no DOM.
- [ ] `launch-section.tsx` + catálogo: grupos Base de produto / Configurações incluídas / Opcionais e dependências externas; H3, descrição e lista de elementos por grupo.
- [ ] `launch-section.tsx` + catálogo: composição comercial com item, abrangência, composição do custo, responsável pela cobrança e complemento; sem criar preços ou pacotes.
- [ ] `launch-section.tsx`: composição comercial em tabela/lista desktop e registros empilhados mobile com os mesmos campos.
- [ ] `launch-section.tsx`: reutilizar `Tabs` para Ativação de uma operação / Migração de uma operação existente; cinco etapas verticais por caminho.
- [ ] `launch-section.tsx` + catálogo: ativação Configuração / Habilitações / Validação / Ativação / Acompanhamento; número, entrega, responsável e condição de conclusão por etapa.
- [ ] `launch-section.tsx` + catálogo: migração Diagnóstico de origem / Escopo de migração / Ensaio / Transição / Acompanhamento; número, entrega, responsável e condição de conclusão por etapa.
- [ ] `launch-section.tsx`: faixa posterior Treinamento / Manutenção e atualizações / Suporte; identificação e descrição curta.
- [ ] `launch-section.tsx`: nota de escopo/prazo e CTA de avaliação; caminho migração preenche cenário migração, ativação preserva lançamento/incorporação quando já escolhido.

### 8.12 — Bloco 09: Perguntas frequentes

- [ ] `faq-section.tsx`: introdução 4/12 + accordion 8/12; identificador, H2 “Perguntas frequentes” e descrição.
- [ ] `faq-section.tsx` + catálogo `questions`: oito perguntas sobre licenciamento/customização, contratos/credenciais, migração de dados/tokens, atualizações/manutenção, suporte/responsabilidades, exportação/encerramento, custos e entrega digital.
- [ ] `faq-section.tsx` + catálogo: reaproveitar respostas compatíveis; lacunas com texto provisório sem inventar cláusulas contratuais, SLA ou direitos de exportação.
- [ ] `faq-section.tsx` + `ui/accordion.tsx`: perguntas com H3 semântico e trigger acessível; resposta principal, condição e link somente quando disponível.
- [ ] `faq-section.tsx`: manter accordion e interações existentes; acesso final ao contato para avaliação da operação.

### 8.13 — Bloco 10: Contato e qualificação

- [ ] `contact-section.tsx`: contexto 5/12 + formulário 7/12, preservando banda dark e componentes de campos existentes.
- [ ] `contact-section.tsx` + catálogo `inquiry`: H2 “Contato e qualificação”, identificador, objetivo, pontos Aderência da operação / Escopo e integrações / Próximos passos e informação de retorno sem prazo inventado.
- [ ] `contact-section.tsx`: identificação Nome / Empresa ou projeto em dois campos desktop; labels visíveis e autocomplete preservado.
- [ ] `contact-section.tsx`: seleção E-mail / WhatsApp e apenas campo correspondente obrigatório; validar formato e preservar valores ao alternar canal.
- [ ] `contact-section.tsx`: cenário único Lançamento / Migração / Incorporação a uma plataforma; substituir interesses múltiplos e permitir alterar opção recebida do CTA.
- [ ] `contact-section.tsx`: mensagem opcional e contexto de origem quando presente; retirar cargo, site e origem da aquisição como barreiras obrigatórias do primeiro contato.
- [ ] `contact-section.tsx`: qualificação complementar opcional/expansível com origem da migração, sellers, volume, integrações, papel e momento de implantação; campos pertinentes ao cenário.
- [ ] `contact-section.tsx` + catálogo: informação de privacidade aplicável, CTA e erros associados aos campos por `aria-describedby`/`aria-invalid`; não criar política ou link legal fictício.
- [ ] `contact-section.tsx`: investigar canal real disponível para envio; sem integração confirmada, manter resumo/encaminhamento explicitamente provisório, sem mensagem de recebimento ou criação de backend neste escopo.
- [ ] `contact-section.tsx`: estruturar estados idle/loading/error/success; envio pendente com indicador e bloqueio de duplicidade, erro preserva campos, sucesso somente após confirmação real.
- [ ] `contact-section.tsx` + catálogo: estado pós-envio real com confirmação, próximo passo, canal e prazo somente se definido; alternativa disponível e status acessível.
- [ ] `contact-section.tsx`: mobile contexto → identificação → canal → cenário → mensagem → envio → confirmação; qualificação complementar fora do fluxo obrigatório.

### 8.14 — Rodapé

- [ ] `site-footer.tsx`: área principal Institucional / Plataforma / Desenvolvedores / Empresa e atendimento em quatro colunas desktop; mesma ordem empilhada mobile.
- [ ] `site-footer.tsx` + catálogo `footer`: institucional com marca, descrição curta, identificação da empresa e contato principal confirmado; preservar tema dark e assets existentes.
- [ ] `site-footer.tsx` + `src/config/site.ts`: Plataforma com Visão geral / Operação / Financeiro / Checkout / Integrações; destinos atualizados para os novos blocos.
- [ ] `site-footer.tsx` + catálogo/config: Desenvolvedores com Documentação / API / Webhooks / Recursos técnicos; recursos não publicados seguem tratamento explícito do header.
- [ ] `site-footer.tsx` + catálogo/config: Empresa e atendimento com Sobre / Contratação e implantação / FAQ / Contato / Redes; canais oficiais somente quando confirmados.
- [ ] `site-footer.tsx`: linha final com copyright, políticas aplicáveis, suporte separado somente se existente e retorno ao início; preservar wordmark/arte sem criar novo bloco de conteúdo.

### 8.15 — Consolidação e aceitação

- [ ] `src/app/page.tsx` + `platform-section.tsx`: retirar seção independente de plataforma da composição somente após redistribuir seus oito módulos; nenhum conteúdo necessário perdido ou seção repetida.
- [ ] `globals.css`: remover somente regras do antigo stack de pares que ficarem sem consumidores; preservar regras e efeitos usados em outras composições.
- [ ] `src/i18n/messages/pt-BR.ts` + `src/config/site.ts`: consolidar chaves/índices/destinos após redistribuição; sem namespaces duplicados para o mesmo conteúdo nem links `#` sem destino.
- [ ] `DESIGN.md`: atualizar somente inventário, ordem, IDs, grids e comportamentos efetivamente implementados; manter diretrizes visuais e distinguir recursos pendentes.
- [ ] Arquivos alterados: Prettier + ESLint direcionados + `pnpm exec tsc --noEmit --incremental false` + `pnpm check:i18n`; sem build, deploy ou release.
- [ ] Homepage em dev: conferir 360/390, 768, 1024, 1280 e tela ampla; duas colunas intermediárias, registros mobile completos, bordas únicas e ausência de overflow.
- [ ] Homepage em dev: conferir temas claro/escuro, primeira dobra preservada, zoom 200%, tela baixa, teclado e reduced motion; foco e sticky não ocultam conteúdo.
- [ ] CTAs e contato: conferir três cenários, troca entre CTAs, carregamento com parâmetros, histórico, seleção manual, origem, canal e mensagem opcional; escolha preservada sem dados pessoais na URL.
- [ ] Formulário: conferir validação por campo e resumo local honesto; loading/erro/confirmação de recebimento apenas se canal real de envio estiver integrado.
