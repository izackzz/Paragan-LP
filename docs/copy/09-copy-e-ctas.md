# Paragan — Parte A: copy pública e destinos

Versão principal aplicada à homepage. Fonte canônica de cada campo: `src/i18n/messages/pt-BR.ts`. A correspondência abaixo segue a ordem de leitura; identificadores entre crases são de produção, não texto público. Layout e componentes permanecem os da estrutura aprovada.

## Cabeçalho — `navigation`

CTA principal: **Avaliar minha operação** → `#contato`.

| Menu            | Introdução                                                     |
| --------------- | -------------------------------------------------------------- |
| Plataforma      | Conheça o produto e as decisões que você pode administrar.     |
| Soluções        | Escolha o ponto de partida da sua contratação.                 |
| Desenvolvedores | Identifique os recursos técnicos necessários à sua integração. |
| Empresa         | Conheça a Paragan e avalie como a operação é sustentada.       |

| Item                                        | Descrição                                               | Destino                       |
| ------------------------------------------- | ------------------------------------------------------- | ----------------------------- |
| Visão geral da plataforma                   | Gateway, gestão de sellers e experiência de venda.      | `#inicio`                     |
| Gestão da operação e sellers                | Cadastros, carteiras e permissões da equipe.            | `#operacao`                   |
| Condições comerciais                        | Taxas, comissões e condições por seller.                | `#condicoes-comerciais`       |
| Gestão financeira                           | Receitas, custos, saldos e reservas.                    | `#financeiro`                 |
| Checkout e experiência de venda             | Da oferta à experiência de pagamento.                   | `#checkout`                   |
| Multiadquirência e integrações              | Métodos, rotas elegíveis e conexão com sistemas.        | `#integracoes`                |
| Lançamento de uma operação                  | Comece com uma base de produto pronta para configurar.  | `#cenario-launch`             |
| Migração de uma operação existente          | Avalie dados, contratos e requisitos de transição.      | `#cenario-migration`          |
| Incorporação de pagamentos a uma plataforma | Adicione pagamentos aos processos da sua plataforma.    | `#cenario-platforms`          |
| Documentação                                | Solicite guias para avaliar a implementação.            | `#recursos-tecnicos`          |
| Referência da API                           | Recursos, contratos e permissões de acesso.             | `#api`                        |
| Webhooks                                    | Eventos e acompanhamento das entregas.                  | `#webhooks`                   |
| Catálogo de integrações                     | Avalie provedores, métodos e requisitos de habilitação. | `#catalogo-integracoes`       |
| Sobre a Paragan                             | Produto e equipe responsáveis pela plataforma.          | `#responsaveis`               |
| Estrutura e confiança operacional           | Isolamento, registros e sustentação da operação.        | `#estrutura`                  |
| Parceiros                                   | Vínculos e escopos sujeitos a confirmação.              | `#referencias-institucionais` |
| Contato                                     | Avalie aderência, integrações e implantação.            | `#contato`                    |
| Contratação                                 | Acesso direto à contratação e implantação.              | `#implantacao`                |

## 01 — Hero — `introduction`

- Badge: **Plataforma de pagamentos white-label**.
- H1: **Sua operação de pagamentos. / Uma plataforma pronta, com sua marca.**
- Descrição: Para empresas que querem lançar, migrar ou incorporar pagamentos: receba uma base pronta de gateway, gestão de sellers e vendas. Configure a operação e defina a implantação com a Paragan.
- CTA principal: **Avaliar minha operação**.
- CTA secundário: **Solicitar demonstração**.
- Legenda complementar: **O QUE COMPÕE A PLATAFORMA**.
- Resumo: Você administra sellers, condições comerciais e informações financeiras. Sua base organiza ofertas e acompanha vendas em um checkout conectado à operação.
- Complemento: Recursos e integrações definidos no escopo contratado.

| Aba          | Identificador  | Descrição do seletor                    | Legenda                                                                                                              |
| ------------ | -------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Seu gateway  | OPERAÇÃO       | Administração de sellers e condições.   | A perspectiva do operador reúne a base de sellers, os cadastros em revisão e as informações financeiras disponíveis. |
| Seus sellers | GESTÃO DE BASE | Ofertas, vendas e recebimentos da base. | Na área do seller, sua base acompanha as próprias vendas, o estado dos pedidos e os recebimentos.                    |
| Seu checkout | PAGAMENTO      | Pagamento da oferta pelo comprador.     | O comprador encontra a oferta, o resumo da compra e os meios habilitados no checkout da sua operação.                |

Estado dos assets atuais: **Espaço reservado à captura · exemplo fictício**. Os textos de identificação das imagens e os alt texts completos estão em `introduction.previews.*`; as capturas futuras estão detalhadas na Parte B.

Faixa: **White-label / Operações separadas por tenant / Multiadquirência / API + Webhooks**.

## 02 — Cenários — `structure.scenarios`

- Identificador: **Seu ponto de partida**.
- H2: **Três caminhos para contratar a mesma base**.
- Introdução: O produto é o mesmo; os requisitos de entrada mudam. Identifique se sua empresa quer começar uma operação, avaliar uma migração ou conectar pagamentos a uma plataforma existente.

### Lançamento

**Coloque sua operação em funcionamento**

Comece com gateway, gestão de sellers e checkout existentes. A avaliação define as configurações, os parceiros e os fluxos necessários para iniciar sua operação.

- Marca, domínios e acessos previstos.
- Cadastro de sellers e condições comerciais.
- Métodos e integrações a habilitar.

Para começar: informe quem sua operação atenderá e quais fluxos de pagamento precisa oferecer.

CTA: **Avaliar meu lançamento**.

### Migração

**Avalie a troca de infraestrutura**

Sua empresa já opera pagamentos. Analise o que pode ser transferido, quais integrações precisam continuar e como validar a transição para a Paragan.

- Dados e restrições da plataforma de origem.
- Contratos, integrações e elegibilidade dos tokens.
- Ensaio e critérios de transição.

Para começar: identifique a plataforma atual. A portabilidade de dados e tokens depende da origem e dos parceiros.

CTA: **Avaliar minha migração**.

### Incorporação

**Adicione pagamentos à sua plataforma**

Sua empresa já conecta produtos, serviços ou participantes. Avalie como incorporar pagamentos e gestão de sellers aos processos que já existem.

- Fluxos de cobrança e acompanhamento.
- Conexões por API e webhooks.
- Papéis dos sellers e experiência de compra.

Para começar: indique os sistemas envolvidos e os processos que precisam trocar informações com os pagamentos.

CTA: **Avaliar minha incorporação**.

### Papéis da operação — `roles`

| Participante           | Responsabilidade                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| Paragan                | Fornece a plataforma e define com sua empresa a implantação e a sustentação contratadas.         |
| Sua empresa / operador | Contrata a Paragan, administra sellers e define as condições e responsabilidades da operação.    |
| Sellers                | São os clientes da sua operação: organizam ofertas e acompanham vendas e recebimentos.           |
| Compradores            | Pagam aos sellers pelo checkout e consultam a confirmação e o acesso à compra, quando aplicável. |

## 03 — Operação — `structure.operation`

- Identificador: **Decisões dentro da operação**.
- H2: **Defina condições e distribua responsabilidades na sua base**.
- Introdução: Configure as superfícies da sua marca, as condições dos sellers e os acessos da equipe. Cada decisão tem um recurso correspondente no produto, com permissões e limites definidos para quem executa a tarefa.

### Sua identidade nas superfícies configuradas

Aplique sua identidade aos painéis e ao checkout previstos no escopo. Domínios próprios exigem configuração de DNS e TLS; e-mails transacionais dependem de remetente verificado.

- Painéis com identidade e tema da operação.
- Checkout com apresentação configurada.
- Domínios próprios mediante configuração de DNS e TLS.
- E-mails transacionais com remetente verificado.

### Condições comerciais por seller

Defina taxas e comissões e organize condições específicas para sellers. A configuração da operação não substitui os custos, contratos ou limites de processamento dos parceiros.

- Taxas conforme seller e meio de pagamento.
- Comissões fixas, percentuais ou híbridas.
- Padrões da operação e exceções configuradas.

### Cada tarefa com acesso delimitado

Administre cadastros e revisões, atribua carteiras à equipe e delimite as ações de cada papel. O histórico de decisões permite acompanhar o tratamento dado à base.

- Cadastro, revisão e status de sellers.
- Permissões para consultar e executar ações.
- Carteiras atribuídas à equipe.
- Histórico das decisões de cadastro.

Tarefa da prévia: **Configuração das condições de um seller**.

Legenda: Na configuração comercial do seller, você consulta a condição aplicada e os parâmetros usados pela operação.

### Expansível: Campanhas e reconhecimento da sua base

Disponibilize mecanismos de campanha e reconhecimento à sua base. A habilitação é decisão da operação; esses recursos não representam retenção ou vendas adicionais comprovadas.

| Módulo                                | Descrição                                                                                                                                  |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Campanhas por período                 | Organize campanhas de ranking com período e premiação definidos para os sellers da sua operação.                                           |
| Posição e participação dos sellers    | Acompanhe a classificação na campanha e ofereça ao seller uma visão da própria posição, conforme a audiência configurada.                  |
| Premiações e níveis de reconhecimento | Configure prêmios e acompanhe a jornada por faturamento acumulado. Campanhas e níveis são mecanismos distintos, habilitados pela operação. |

CTA: **Avaliar minhas configurações**.

## 04 — Financeiro — `structure.finance`

- Identificador: **Valores ao longo da operação**.
- H2: **Diferencie receita, taxas e disponibilidade dos valores**.
- Introdução: Consulte o que compõe os valores da operação e acompanhe os estados de saldo. Condições comerciais, custos registrados e reservas ajudam a interpretar os lançamentos; não são uma apuração de lucro líquido contábil.
- Identificação: **Exemplo demonstrativo · composição de uma cobrança**.
- Descrição do exemplo: Consulte os lançamentos que compõem a cobrança e diferencie as parcelas de receita, taxas e saldo do seller. O exemplo é ilustrativo e não representa uma liquidação bancária executada.
- Legenda: O exemplo separa a cobrança de R$ 100,00 em taxas, receita da operação e valores do seller, incluindo a parcela reservada.

### Composição do exemplo

| Campo                    | Valor                                                                               |
| ------------------------ | ----------------------------------------------------------------------------------- |
| Valor da cobrança        | R$ 100,00                                                                           |
| Taxas de processamento   | R$ 3,00                                                                             |
| Receita da operação      | R$ 2,00                                                                             |
| Destinado ao seller      | R$ 95,00, incluindo a reserva abaixo                                                |
| Reserva do seller        | R$ 5,00, parte dos R$ 95,00                                                         |
| Saldo pendente do seller | R$ 90,00                                                                            |
| Disponibilidade          | Saldo pendente até cumprir as condições de liberação; a reserva segue regra própria |

Exemplo ilustrativo, não uma condição comercial: R$ 3,00 em taxas + R$ 2,00 de receita da operação + R$ 90,00 pendentes + R$ 5,00 reservados = R$ 100,00 cobrados. A reserva faz parte dos R$ 95,00 destinados ao seller.

Previsão de disponibilidade não equivale a transferência concluída. Liberação e movimentação dependem das regras da operação e do processamento e liquidação dos parceiros habilitados.

| Módulo           | Descrição                                                                                                                                                                                       | Informações                                                                                                                           |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Receita e custos | Consulte receitas, taxas, comissões e custos registrados. A visão por competência relaciona os valores ao período da operação; custos ausentes não devem ser tratados como zero nem como lucro. | Receita e taxas registradas; custos de adquirência disponíveis; comissões e condições aplicadas.                                      |
| Disponibilidade  | Diferencie valores liberados, em espera e reservados. Consulte as previsões de liberação quando disponíveis, considerando as regras da operação e a liquidação do parceiro.                     | Disponível: liberado no saldo operacional; pendente: aguardando condições de liberação; reservado: retido conforme regra da operação. |
| Movimentações    | Consulte o extrato de lançamentos e estornos e supervisione solicitações de saque por fila de aprovação. A execução da saída depende do parceiro habilitado e dos acessos autorizados.          | Extrato de lançamentos e estornos; fila de solicitações de saque; aprovação ou recusa conforme permissão.                             |

CTA: **Solicitar demonstração financeira**.

## 05 — Experiência — `structure.checkout`

- Identificador: **Da oferta ao acesso**.
- H2: **Ofereça à sua base uma jornada de venda conectada**.
- Introdução: Seus sellers organizam produtos e ofertas, compartilham o checkout e acompanham pedidos. Você disponibiliza essa experiência à base, enquanto o comprador encontra a oferta, realiza o pagamento e consulta a confirmação.
- CTA: **Solicitar demonstração**.
- Legenda conjunta: A mesma oferta é apresentada no desktop e no celular, com itens e totais equivalentes e os métodos habilitados para a compra.

| Etapa | H3 e descrição                                                                                                                                                                                                                          | Recursos                                                                                                      |
| ----- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| 01    | **O seller organiza a oferta.** Sua base cadastra produtos e define ofertas avulsas ou recorrentes. Cada oferta pode ser compartilhada pelo link correspondente, conforme os recursos habilitados.                                      | Catálogo por seller; preço e modalidade da oferta; link para compartilhar a compra.                           |
| 02    | **O comprador confere e paga.** O checkout apresenta produto, preço e resumo da compra. Aparência, cupons e ofertas adicionais são configurados dentro das opções disponíveis, sem pressupor um construtor livre de páginas.            | Apresentação configurada por produto; cupons e ofertas adicionais; meios de pagamento habilitados.            |
| 03    | **A venda mantém seu estado.** Seller e operador acompanham o pedido e o estado do pagamento nos acessos autorizados. A confirmação da compra depende do processamento, não apenas do retorno do navegador.                             | Pedido e estado do pagamento; resumo e recibo da compra.                                                      |
| 04    | **Conteúdo adquirido com acesso autorizado.** Na entrega digital do checkout próprio, o pagamento confirmado pode liberar os arquivos ou links previstos na oferta. Acesso a conteúdo não equivale a uma plataforma completa de cursos. | Entregáveis associados à oferta; acesso autorizado por compra; disponibilidade definida no escopo contratado. |

### Cobranças recorrentes com métodos elegíveis

Ofereça à base ofertas recorrentes e acompanhamento de assinaturas, ciclos e tentativas de cobrança. A utilização depende do método e do provedor habilitados para esse fluxo.

- Elegibilidade verificada por método e provedor.
- Condições de renovação definidas para a operação.

### Distribuição entre participantes da operação

Configure alocações por valores ou percentuais entre os participantes previstos. O registro da distribuição e a liquidação externa são etapas distintas; a execução depende do parceiro habilitado.

- Participantes e regras previstos na contratação.
- Valores ou percentuais conforme configuração.
- Liquidação conforme capacidade do parceiro.

CTAs de aprofundamento: **Consultar requisitos**, preservando o assunto Recorrência ou Split.

## 06 — Integrações — `structure.integrations`

- Identificador: **Compatibilidade antes da contratação**.
- H2: **Verifique métodos, provedores e conexões com seus sistemas**.
- Introdução: A experiência de pagamento depende das conexões habilitadas. Avalie os meios necessários, os parceiros envolvidos e os recursos da API e dos webhooks antes de definir a implantação.

### Regras para rotas elegíveis

Configure prioridades e regras para selecionar rotas elegíveis conforme método e parâmetros da transação. O uso de cada conexão depende dos recursos do provedor e da habilitação da operação.

- Processadores e ordem de prioridade.
- Regras por método e parâmetros da transação.
- Seleção entre configurações elegíveis.

O uso de contratos e credenciais próprios é avaliado por provedor. Ter uma conexão desenvolvida não substitui contratação, homologação ou habilitação comercial.

Métodos e recursos são confirmados para sua operação; não há disponibilidade universal entre provedores nem garantia de aprovação de pagamentos.

### Conexões a avaliar para sua operação

Os cards reservam espaço para apresentar cada conexão. Provedores, recursos e disponibilidade só serão listados após confirmação; os espaços abaixo não representam integrações ativas.

| Grupo de cards                  | H3                           | Descrição                                                                                                  | Ação                         |
| ------------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------- | ---------------------------- |
| Adquirentes e processamento     | Conexão de adquirência       | Espaço reservado para apresentar um provedor, seus métodos e requisitos de habilitação.                    | Avaliar adquirência          |
| Marketing, utilidades e plugins | Ferramenta ou plugin externo | Espaço reservado para apresentar uma ferramenta de marketing ou utilidade, sua função e requisitos de uso. | Avaliar ferramenta ou plugin |

Cada card tem logo e ilustração independentes, sem marca pré-preenchida. Campos: **Provedor** — Nome ainda não apresentado; **Métodos ou função** — Informações desta conexão a apresentar; **Recursos** — Escopo desta conexão a apresentar; **Estágio** — Disponibilidade não anunciada; **Requisitos de habilitação** — Requisitos específicos a confirmar.

### API para os processos da sua plataforma

Integre recursos de pagamentos, sellers e consultas financeiras por contratos documentados. As permissões de acesso delimitam quais operações cada conexão pode consultar ou executar.

- Pagamentos e pedidos.
- Sellers e condições.
- Consultas financeiras conforme escopo.

Legenda: O material solicitado deve mostrar o contrato da operação consultada, seus campos e as permissões necessárias.

CTA: **Solicitar referência completa**.

### Eventos com acompanhamento de entrega

Conecte eventos da operação aos seus sistemas e consulte o histórico de entrega. Na avaliação técnica, verifique os eventos disponíveis, as permissões e os procedimentos documentados para investigar uma conexão.

- Eventos de pagamentos e pedidos.
- Eventos financeiros conforme escopo.
- Histórico de entrega.

Legenda: O histórico relaciona o evento à tentativa de entrega e ao estado registrado para a conexão consultada.

CTA: **Solicitar referência de webhooks**.

Ações finais: **Solicitar documentação** / **Avaliar integração específica**.

## 07 — Confiança — `structure.trust`

- Identificador: **Mecanismos que você pode examinar**.
- H2: **Avalie a sustentação além da interface**.
- Introdução: Uma operação exige separação de dados, registros consistentes e acompanhamento de falhas. Conheça os mecanismos documentados da plataforma e solicite os materiais necessários para avaliar o seu escopo.

| Pilar                     | Descrição                                                                                                                                                                         | Detalhamento                                                                                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Separação entre operações | Dados e acessos são delimitados por operação e papel. Isso permite administrar sua base sem conceder à equipe acesso irrestrito a outras operações.                               | O modelo documentado usa separação por schema e permissões por escopo; não equivale a infraestrutura física exclusiva por cliente.                           |
| Integridade financeira    | Estados financeiros e tratamento de repetições ajudam a acompanhar operações críticas sem interpretar toda tentativa como uma nova transação.                                     | Na avaliação técnica, examine idempotência, registros e tratamento de resultados ambíguos nos fluxos previstos para sua operação.                            |
| Diagnóstico e recuperação | Métricas, filas e registros permitem investigar falhas e acompanhar tarefas assíncronas. Os procedimentos de recuperação precisam considerar o fluxo e os parceiros envolvidos.   | Solicite o detalhamento dos recursos de diagnóstico e das responsabilidades de continuidade, sem presumir prazo de recuperação ou disponibilidade garantida. |
| Sustentação               | Implantação, manutenção e atendimento têm responsabilidades distintas. Sua contratação deve indicar quem configura, quem acompanha e como as demandas da operação serão tratadas. | Cobertura, canais e condições de suporte são definidos no acordo; não há atendimento dedicado ou SLA presumido.                                              |

Cada pilar: **Solicitar avaliação técnica**, com assunto correspondente.

### Materiais para sua avaliação técnica

| Tipo                     | Nome                             | Descrição                                                                                                                                    |
| ------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Documentação             | Guias e referências técnicas     | Solicite os contratos e guias correspondentes aos recursos que pretende integrar. Confirme a versão do material com a equipe.                |
| Ambiente de avaliação    | Ambiente de avaliação            | Consulte a possibilidade de avaliar seus fluxos em ambiente assistido. Este site não disponibiliza um sandbox público de acesso imediato.    |
| Demonstração assistida   | Tarefas do operador e da base    | Solicite uma apresentação dos controles comerciais, da área do seller e do checkout aplicáveis à sua avaliação.                              |
| Relatórios técnicos      | Contexto e metodologia de testes | Pergunte quais relatórios estão disponíveis para consulta. Resultados de teste devem identificar ambiente, metodologia e limites da medição. |
| Informações operacionais | Condições de sustentação         | Consulte as condições de manutenção, acompanhamento e atendimento propostas para a operação que sua empresa pretende contratar.              |

As ações solicitam avaliação técnica; a demonstração usa **Solicitar demonstração**. Não há data ou versão fictícia nem documento anunciado como disponível para download.

### Produto e sustentação pela Paragan

- Paragan.
- Equipe Paragan: desenvolvimento e manutenção da plataforma.
- Na avaliação, identifique os responsáveis pela implantação e pelo atendimento previstos na contratação.
- Ação: **Solicitar avaliação técnica**.

### Referências institucionais

Vínculo comercial, fornecedor de infraestrutura e certificação têm escopos diferentes. Solicite a identificação e a comprovação das referências relevantes à sua contratação.

## 08 — Contratação — `structure.onboarding`

- Identificador: **Da contratação à ativação**.
- H2: **Comece com produto pronto e escopo definido**.
- Introdução: A implantação configura a base existente para o seu cenário. Antes de ativar, defina os módulos contratados, as integrações, os critérios de validação e as responsabilidades da Paragan, da sua equipe e dos parceiros.

| Grupo                                       | Descrição                                                                                                                                                                          | Elementos                                                                                                               |
| ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Uma base de produto existente               | Você contrata o uso de uma plataforma com recursos existentes. A proposta identifica os módulos disponibilizados, em vez de tratar toda a entrega como desenvolvimento sob medida. | Gateway e gestão de sellers; consulta financeira e acompanhamento de valores; checkout, API e webhooks conforme escopo. |
| Configurações previstas na sua contratação  | A implantação aplica a identidade, os acessos e as condições da sua operação. As configurações incluídas e as tarefas da sua equipe ficam descritas na proposta.                   | Marca e domínios das superfícies contratadas; condições comerciais; papéis e permissões.                                |
| Demandas adicionais e dependências externas | Integrações específicas, customizações e migração são avaliadas separadamente. Contratos e habilitações de parceiros podem exigir participação da sua empresa e custos próprios.   | Integrações específicas; migração de dados e tokens quando elegíveis; habilitações e contratos com parceiros.           |

### Composição comercial

| Campo                     | Conteúdo                                                                                                                      |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| Item de contratação       | Uso da plataforma, implantação e demandas adicionais identificadas na proposta                                                |
| O que abrange             | Módulos, configurações, serviços e responsabilidades descritos no escopo                                                      |
| Composição do custo       | Proposta por escopo, com custos da plataforma, serviços e terceiros discriminados                                             |
| Responsável pela cobrança | Paragan ou parceiro, conforme o item e o contrato correspondente                                                              |
| Informação complementar   | Valores, periodicidade e eventual implantação ou customização são definidos na proposta; não há pacotes públicos nesta página |

### Caminhos de implantação

Abas: **Ativação de uma operação** / **Migração de uma operação existente**.

| Ativação            | Entrega                                                                                   | Responsável                   | Condição de conclusão                                                     |
| ------------------- | ----------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| 01 — Configuração   | Aplicação da identidade, dos acessos e das condições comerciais previstas no escopo.      | Paragan e operador            | Sua equipe revisou as configurações e os papéis previstos.                |
| 02 — Habilitações   | Verificação dos contratos, credenciais e requisitos dos métodos e integrações escolhidos. | Operador, Paragan e parceiros | Os parceiros confirmaram os requisitos e as capacidades habilitadas.      |
| 03 — Validação      | Exercício dos fluxos de cadastro, pagamento e acompanhamento acordados.                   | Paragan e operador            | Os critérios de aceite definidos para esses fluxos foram atendidos.       |
| 04 — Ativação       | Entrada em operação dos fluxos autorizados, conforme a configuração validada.             | Operador e Paragan            | O início foi autorizado pelos responsáveis e executado conforme o acordo. |
| 05 — Acompanhamento | Revisão dos primeiros fluxos e encaminhamento de demandas pelos canais acordados.         | Paragan e operador            | Responsáveis e rotina de acompanhamento foram alinhados.                  |

| Migração                             | Entrega                                                                                           | Responsável                   | Condição de conclusão                                                     |
| ------------------------------------ | ------------------------------------------------------------------------------------------------- | ----------------------------- | ------------------------------------------------------------------------- |
| 01 — Diagnóstico de origem           | Levantamento dos dados, dos contratos e dos fluxos da plataforma atual.                           | Operador e Paragan            | A origem e as restrições de portabilidade foram identificadas.            |
| 02 — Definição do escopo de migração | Definição do que pode ser transferido e do que exige reconfiguração ou participação de parceiros. | Operador, Paragan e parceiros | Dados, limites e responsabilidades da transição foram acordados.          |
| 03 — Ensaio                          | Execução do ensaio previsto, com dados autorizados e validação dos fluxos elegíveis.              | Paragan e operador            | Os resultados do ensaio atenderam aos critérios definidos no escopo.      |
| 04 — Transição                       | Execução da transição conforme a sequência e os critérios acordados entre as equipes.             | Operador, Paragan e parceiros | Os responsáveis confirmaram os critérios para a entrada na nova operação. |
| 05 — Acompanhamento                  | Revisão dos fluxos após a transição e tratamento das demandas identificadas.                      | Paragan e operador            | Os canais e as responsabilidades posteriores foram alinhados.             |

| Após ativação              | Descrição                                                                                                                                                                  |
| -------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Orientação para sua equipe | Alinhe a orientação sobre configurações, papéis e rotinas incluídas na implantação. Formato e abrangência são definidos na contratação.                                    |
| Manutenção e atualizações  | Defina as condições de manutenção da plataforma, atualização dos recursos e tratamento de customizações. A cobertura segue o acordo contratado.                            |
| Suporte                    | Identifique os canais de atendimento e quem responde por produto, operação e integrações. Atendimento a compradores e sellers não é automaticamente transferido à Paragan. |

Escopo, investimento e prazo são definidos após avaliar módulos, integrações, habilitações e requisitos de migração. A proposta identifica as dependências e os responsáveis; não há prazo único para todos os cenários.

CTA: **Avaliar minha operação**, preservando o caminho selecionado.

## 09 — FAQ — `structure.faq`

- Identificador: **Dúvidas antes de contratar**.
- H2: **Esclareça o que ainda pesa na decisão**.
- Introdução: Licença, parceiros e responsabilidades precisam estar claros na contratação. Confira as condições que devem ser avaliadas para o seu cenário.

### O que contrato e o que posso personalizar?

Você contrata o uso de uma plataforma white-label pronta, com os módulos e configurações descritos na proposta. A personalização contempla superfícies da marca e parâmetros operacionais previstos no produto.

Condições da licença e customizações adicionais são definidas no contrato. Administrar a operação não significa receber a propriedade do código nem determina a custódia dos valores.

### Posso usar meus contratos e credenciais de parceiros?

Essa possibilidade é avaliada para cada provedor e fluxo. A existência de uma integração no produto não confirma que seu contrato, seus métodos ou suas credenciais estejam habilitados para utilizá-la.

A avaliação identifica quem contrata o parceiro, fornece as credenciais e atende aos requisitos de habilitação. Não envie credenciais pelo formulário comercial.

### É possível migrar dados e tokens?

A migração começa pela análise da plataforma de origem. São avaliados os dados exportáveis, os contratos existentes e a elegibilidade dos tokens antes de definir o escopo de transição.

Portabilidade de tokens depende dos provedores e das condições de origem. Não há migração universal ou automática anunciada nesta oferta.

### Como funcionam as atualizações e a manutenção?

A contratação define a cobertura de manutenção da plataforma e as condições de atualização dos recursos disponibilizados à sua operação.

Customizações e integrações específicas podem exigir regras próprias de manutenção. Confirme esses limites e responsabilidades na proposta.

### Quem atende minha operação, meus sellers e os compradores?

Sua empresa administra a base e a experiência oferecida aos sellers e compradores. O atendimento da Paragan à empresa contratante segue os canais e a cobertura definidos no acordo.

Confirme a divisão de responsabilidades com parceiros, os horários e eventuais níveis de serviço. Este site não promete suporte dedicado ou prazo universal de atendimento.

### Como funcionam a exportação de dados e o encerramento?

Exportação e encerramento precisam ter condições explícitas no contrato: dados abrangidos, formatos, procedimentos e responsabilidades de cada parte.

Recursos de exportação do produto não substituem as condições comerciais de saída, nem garantem portabilidade de contratos ou tokens de terceiros.

### Como os custos são compostos?

A proposta discrimina o uso da plataforma, os serviços de implantação ou customização acordados e os custos externos identificados. Cada item deve indicar sua abrangência e o responsável pela cobrança.

Valores e periodicidade dependem do escopo. Taxas de processamento e serviços dos parceiros não devem ser confundidos com o preço da plataforma.

### A entrega digital inclui uma plataforma completa de cursos?

Não. O escopo apresentado é a entrega de arquivos ou links da oferta, com acesso autorizado associado à compra confirmada no checkout próprio.

Aulas, progresso educacional, certificados e comunidade não estão incluídos nessa descrição. Confirme entregáveis, limites e métodos elegíveis para sua operação.

CTA: **Esclarecer minha dúvida**.

## 10 — Contato — `structure.contact` e `inquiry.fields`

- Identificador: **Avaliação da sua operação**.
- H2: **Defina o próximo passo para sua contratação**.
- Introdução: Informe seu cenário e os fluxos que precisa oferecer. A conversa com a equipe serve para avaliar a aderência do produto, identificar dependências e definir o caminho até uma proposta de contratação.
- Pontos: Aderência: recursos do produto para seu modelo de operação / Escopo: configurações, integrações e responsabilidades / Próximos passos: avaliação técnica e composição da proposta.
- Retorno: Indique o canal pelo qual prefere receber retorno. Para iniciar a conversa agora, prepare o resumo e compartilhe-o pelo WhatsApp comercial; isso não agenda uma reunião.
- Título do formulário: **Prepare as informações para a conversa.**

| Campo                                  | Placeholder / opções                                                                                                |
| -------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Nome                                   | Ex.: Ana Silva                                                                                                      |
| Empresa ou projeto                     | Ex.: nome da sua operação                                                                                           |
| Canal preferido                        | E-mail / WhatsApp                                                                                                   |
| E-mail profissional                    | voce@empresa.com.br                                                                                                 |
| WhatsApp para retorno                  | +55 (11) 99999-9999                                                                                                 |
| Cenário                                | Selecione seu cenário; opções Lançamento / Migração / Incorporação                                                  |
| O que você precisa avaliar? (opcional) | Ex.: já operamos uma base de sellers e queremos avaliar a migração dos pagamentos e a integração com nosso sistema. |

Ajuda da mensagem: Descreva o fluxo ou a dúvida principal. Você pode deixar os detalhes para a conversa.

Contexto recebido: **Interesse iniciado em** e **Assunto solicitado**, com nomes legíveis correspondentes ao CTA acionado; sem deduzir volume, parceiros ou informações não fornecidas.

### Acrescentar informações da operação (opcional)

| Campo                               | Exemplo                              | Ajuda                                                                                    |
| ----------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------- |
| Plataforma de origem                | Ex.: plataforma utilizada hoje       | Nome da plataforma atual; não envie acessos ou credenciais.                              |
| Base de sellers                     | Ex.: 50 sellers ativos               | Quantidade atual ou estimada. Ex.: 50 sellers ativos.                                    |
| Volume atual ou estimado            | Ex.: R$ 100 mil/mês, estimados       | Indique período, moeda e se é volume atual ou projetado. Ex.: R$ 100 mil/mês, estimados. |
| Integrações necessárias             | Ex.: CRM e sistema de pedidos        | Sistemas, métodos ou parceiros que precisam participar do fluxo.                         |
| Papel no projeto                    | Ex.: responsável pela operação       | Seu papel na decisão ou na implantação. Ex.: fundador ou responsável técnico.            |
| Momento pretendido para implantação | Ex.: após validar a integração atual | Quando pretende iniciar e quais dependências já conhece.                                 |

Plataforma de origem só aparece no cenário Migração. Todos os campos complementares são opcionais.

### Preparação e privacidade

Os campos são usados apenas para montar seu resumo nesta página; não há envio automático à Paragan. Ao compartilhar pelo WhatsApp, você envia os dados escolhidos por esse canal. Não inclua documentos, credenciais ou dados de compradores.

CTA: **Preparar resumo**.

| Validação       | Texto                                               |
| --------------- | --------------------------------------------------- |
| Nome            | Informe seu nome para identificar o contato.        |
| Empresa         | Informe o nome da empresa ou do projeto.            |
| E-mail          | Informe um e-mail válido, como nome@empresa.com.br. |
| WhatsApp        | Informe o número com DDD, como +55 (11) 99999-9999. |
| Cenário         | Escolha lançamento, migração ou incorporação.       |
| Limite de texto | Reduza o texto para respeitar o limite do campo.    |
| Ajuste genérico | Confira o preenchimento deste campo.                |

### Estado real após preparar o resumo

- **Seu resumo está pronto para compartilhar. Ainda não recebemos uma solicitação.**
- Copie o texto e cole na conversa comercial pelo WhatsApp. A equipe poderá avaliar o cenário informado e alinhar a continuidade; abrir a conversa não envia o resumo automaticamente.
- **Canal de retorno preferido**: canal e contato informados.
- **Resumo do contato**: texto selecionável com nome, empresa, canal, contato, cenário, interesse, assunto e informações fornecidas. Campo ausente: **Não informado**.
- Botão: **Copiar resumo**.
- Em andamento: **Copiando resumo…**
- Sucesso de cópia: **Resumo copiado. Agora você pode colá-lo na conversa; nenhum dado foi enviado pela página.**
- Erro de cópia: **Não foi possível copiar automaticamente. Selecione o texto do resumo e copie para continuar.**
- Para preferência e-mail: Sua preferência por retorno via e-mail está no resumo. Compartilhe-o pelo WhatsApp comercial para iniciar o contato.
- Ação complementar: **Continuar pelo WhatsApp**.

Não é exibida confirmação de recebimento remoto ou agendamento. A microcopy condicionada a uma futura integração de envio está separada na Parte C.

## Rodapé — `brand`, `footer` e `structure.footer`

- Descrição: **Plataforma white-label para operar pagamentos. / Gateway, sellers e vendas sob sua marca.**
- Identificação: Paragan · plataforma white-label para empresas operadoras de pagamentos.
- Canal principal: **Contato comercial** → WhatsApp configurado.
- Plataforma: Visão geral / Gestão da operação / Gestão financeira / Checkout / Integrações.
- Desenvolvedores: Documentação / API / Webhooks / Recursos técnicos.
- Empresa e atendimento: Sobre a Paragan / Contratação e implantação / Perguntas frequentes / Contato / Redes sociais.
- Copyright: **© {ano} Paragan**.
- Retorno: **Voltar ao início ↑**.

Links de rodapé usam as mesmas áreas funcionais do cabeçalho. Políticas, suporte separado e identificação jurídica não recebem dados ou destinos inventados.

## Mapa funcional das ações

Nos destinos abaixo, o cenário já escolhido permanece editável. O sistema acrescenta `cenario` quando aplicável, sem colocar dados pessoais na URL.

| Local / intenção       | Rótulo                                               | Destino funcional                                                                                           |
| ---------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Header e contratação   | Avaliar minha operação                               | `#contato`; implantação acrescenta `origem=implantacao` e preserva o caminho                                |
| Hero / avaliação       | Avaliar minha operação                               | `?origem=inicio#contato`                                                                                    |
| Hero / demonstração    | Solicitar demonstração                               | `?origem=inicio&assunto=demonstration#contato`                                                              |
| Lançamento             | Avaliar meu lançamento                               | `?cenario=launch&origem=solucoes#contato`                                                                   |
| Migração               | Avaliar minha migração                               | `?cenario=migration&origem=solucoes#contato`                                                                |
| Incorporação           | Avaliar minha incorporação                           | `?cenario=platforms&origem=solucoes#contato`                                                                |
| Operação               | Avaliar minhas configurações                         | `?origem=operacao#contato`                                                                                  |
| Financeiro             | Solicitar demonstração financeira                    | `?origem=financeiro&assunto=finance#contato`                                                                |
| Checkout               | Solicitar demonstração                               | `?origem=checkout&assunto=checkout#contato`                                                                 |
| Recorrência / split    | Consultar requisitos                                 | `?origem=checkout&assunto=recurrence#contato` / `assunto=split`                                             |
| Matriz de conexões     | Consultar requisitos                                 | `?origem=integracoes&assunto=integration#contato`                                                           |
| Cards de adquirentes   | Avaliar adquirência                                  | `?origem=integracoes&assunto=acquiring#contato`                                                             |
| Cards de ferramentas   | Avaliar ferramenta ou plugin                         | `?origem=integracoes&assunto=tools#contato`                                                                 |
| API                    | Solicitar referência completa                        | `?origem=integracoes&assunto=api#contato`                                                                   |
| Webhooks               | Solicitar referência de webhooks                     | `?origem=integracoes&assunto=webhooks#contato`                                                              |
| Documentação           | Solicitar documentação                               | `?origem=integracoes&assunto=documentation#contato`                                                         |
| Integração específica  | Avaliar integração específica                        | `?origem=integracoes&assunto=integration#contato`                                                           |
| Pilares de confiança   | Solicitar avaliação técnica                          | `?origem=estrutura&assunto=isolation#contato`; demais pilares `integrity`, `recovery`, `support`            |
| Biblioteca             | Solicitar avaliação técnica / Solicitar demonstração | `?origem=estrutura#contato` com assunto `documentation`, `sandbox`, `demonstration`, `reports` ou `support` |
| FAQ                    | Esclarecer minha dúvida                              | `?origem=perguntas&assunto=faq#contato`                                                                     |
| Resumo do contato      | Copiar resumo                                        | Área de transferência local; erro permite cópia manual                                                      |
| Continuidade comercial | Continuar pelo WhatsApp                              | `https://wa.me/5573988801054`, sem dados pessoais em parâmetros                                             |

Título de busca: **Paragan — Plataforma white-label para operações de pagamentos**.

Descrição de busca: Lance, migre ou incorpore uma operação de pagamentos com uma plataforma pronta: gestão de sellers, condições comerciais, financeiro e checkout sob sua marca.
