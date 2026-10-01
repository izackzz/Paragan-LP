# Evidências, limites de mensagem e decisões editoriais

## 1. Base consultada e alcance

Foram consultados os seis arquivos de ciclos r1/r2/r3 da API e frontend, seus índices, blocos funcionais e registros de consolidação relevantes à oferta, além do backlog de upgrades. A leitura é orientada a capacidades e mudanças de produto, não uma revisão linha a linha de todas as remediações históricas.

A referência `platform-capabilities.md` da skill enterprise cobre fases antigas e contém conceitos superados. Foi usada como ponto de partida, não como retrato integral do produto atual. A presença dos adapters também foi conferida diretamente no registry da API.

Não houve nesta etapa homologação de provedores, teste de carga, certificação, teste de produção ou comprovação de resultado comercial. Os documentos são uma base estratégica fundamentada no registro de desenvolvimento.

## 2. Tratamento do relatório inicial de mercado

O relatório fornecido ajuda a identificar temas da categoria: marca própria, controle, checkout, split, orquestração, implantação e prova. Não será usado como comprovação de capacidades da Paragan nem como pesquisa comparativa conclusiva.

Há referências incompletas e links atribuídos a empresas diferentes do domínio citado. Por isso, números de integrações, preços, prazos e certificações daquele material não foram transportados para a proposta. A narrativa pública não citará concorrentes.

## 3. Divergências que afetam a copy

| Tema                  | Evidência mais recente                                             | Consequência editorial                                            |
| --------------------- | ------------------------------------------------------------------ | ----------------------------------------------------------------- |
| Títulos e sumários    | r3 chama fases de pendentes embora vários itens estejam concluídos | Ler corpo e pendências, não classificar pelo título               |
| Checks com bloqueio   | F2 F26/F27 possui `[x]` junto a descrição de contrato ausente      | Tratar completude como ambígua e confirmar antes de demo pública  |
| Onboarding            | A1 F61 cancela autoria de formulários                              | Não anunciar construtor livre de KYC                              |
| Sandbox               | A2 §3.50 remove controller; A2 F22 restringe emissão a sk_live     | Não anunciar sandbox público self-service                         |
| Adquirentes           | A1 F29 mistura implementações, skeletons e seeds                   | Não contar catálogo como integrações ativas                       |
| Split                 | A1 F15 descreve lançamentos; suporte externo depende de adapter    | Não afirmar split bancário na origem universal                    |
| Revogação de conteúdo | A3 F1 mantém correções críticas abertas                            | Não afirmar revogação integralmente validada                      |
| Recuperação           | F3 F6 ainda aponta divergência de capability no contrato           | Reconfirmar captura/correlação antes de vender o fluxo completo   |
| Upsell                | A3 F9 é saída externa; F3 F9 possui bloqueio registrado            | Não chamar de one-click ou cobrança nativa                        |
| Notificações de venda | F3 F11 substitui consulta real por lista manual                    | Não apresentar mensagens configuradas como prova de compras reais |
| Frete                 | A3 F6 integra adapters mock                                        | Não listar transportadoras como integrações produtivas            |
| Billing               | A1 F63 limita retenção a cálculo/persistência                      | Não anunciar débito real automático ou boleto B2B operacional     |
| Escala                | A2 §3.33/§3.38 documenta limites e trade-offs                      | Não transformar arquitetura em promessa de capacidade ilimitada   |

## 4. Matriz de alegações

| Alegação desejada                    | Formulação sustentada agora                                                   | Evidência necessária para ampliar                                    |
| ------------------------------------ | ----------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Controle absoluto                    | Controle das decisões operacionais configuráveis                              | Matriz atual de poderes e demonstração por papel                     |
| Escala superior a todo mercado       | Arquitetura com isolamento, filas e observabilidade para evolução da operação | Benchmark comparável com metodologia, carga e ambiente               |
| Melhor aprovação                     | Regras e alternativas de processamento com acompanhamento por método          | Coortes reais, período, amostra e fatores de comparação              |
| Mais margem                          | Ferramentas para definir condições e acompanhar composição de receita/custos  | Caso real com custos completos e atribuição do resultado             |
| Go-live em poucos dias               | Implantação orientada ao escopo e às integrações                              | Histórico de implantações com definição de início/fim                |
| Plataforma certificada PCI/ISO       | Controles técnicos específicos de proteção                                    | Atestação vigente com entidade e escopo cobertos                     |
| Conformidade garantida               | Recursos de governança e privacidade                                          | Avaliação jurídica e operacional do escopo contratado                |
| Recuperação automática               | Painel e eventos para apoiar recuperação                                      | Campanhas e provedores implementados, consentimento e fluxo validado |
| Ecossistema ilimitado de integrações | API, webhooks e integrações com disponibilidade confirmada                    | Matriz homologada por método/operação/ambiente                       |

## 5. Provas prioritárias

| Prova                 | Material                                           | Onde usar                  | Condição                                           |
| --------------------- | -------------------------------------------------- | -------------------------- | -------------------------------------------------- |
| Controle comercial    | Configuração real de taxa/comissão por seller      | Home e financeiro          | Exemplo demonstrativo identificado                 |
| White label aplicado  | Painel e checkout com identidade consistente       | Home e white label         | Superfícies e domínios realmente configurados      |
| Jornada conectada     | Produto → checkout → pedido → recibo               | Checkout e demo            | Método e integração aptos no ambiente da demo      |
| Delegação             | Papéis e ações distintas sobre a carteira          | Operação                   | Permissões e dados do cenário conferidos           |
| Governança financeira | Venda, lançamentos, reserva e solicitação de saque | Financeiro                 | Distinguir simulação de transferência real         |
| Relacionamento        | Campanha e jornada de premiação                    | Crescimento                | Não apresentar ranking mock como cliente real      |
| Escala técnica        | Relatório de carga e recuperação                   | Segurança e escala         | Só publicar após medição real                      |
| Resultado comercial   | Case autorizado                                    | Home e futuro hub de casos | Cliente real, contexto, período e permissão de uso |

Sem cases, usar demonstração funcional. Não inventar depoimento qualitativo como substituto de case quantitativo.

## 6. Decisões comerciais ainda necessárias

- Escopo contratável inicial e módulos efetivamente habilitados.
- Parceiros e métodos liberados para oferta comercial.
- Modelo de preço, mínimo, implantação e customizações.
- Política de suporte e acompanhamento da ativação.
- Critérios de implantação, migração e aceite.
- Identidade legal, canais comerciais e responsável por privacidade.
- Agenda e canal de resposta às solicitações do site.
- Dados reais que podem virar cases e referências autorizadas.

Estas decisões não impedem organizar o site. Impedem apenas preencher condições comerciais com números ou compromissos fictícios.

## 7. Critério editorial de prontidão

Uma página estará pronta para redação final quando tiver: objetivo único, público definido, recursos rastreados, prova selecionada, CTA com destino real e dependências relevantes explicitadas.

Estará pronta para publicação quando o texto corresponder ao escopo comercial disponível, a demonstração não confundir mock com resultado real e as condições de contratação tiverem responsáveis definidos.

**Próximo trabalho de maior retorno:** validar o pacote demonstrável do gateway-admin e do checkout. Essas duas experiências sustentam a tese de controle e produto para a base; a redação final deve nascer das provas que conseguirmos mostrar com clareza.
