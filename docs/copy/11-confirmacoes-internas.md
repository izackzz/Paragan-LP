# Paragan — Parte C: confirmações internas

Material interno. Não publicar estas notas como parágrafos, provas, condições comerciais ou nomes de integrações. A redação aplicada usa as capacidades documentadas em `01-inventario-de-capacidades.md`, os limites de `06-evidencias-e-publicacao.md` e o briefing 08; não houve homologação produtiva nem confirmação comercial adicional nesta etapa.

## Confirmações necessárias

| Assunto                          | Informação necessária                                                                                      | Componentes afetados                        | Responsável sugerido                   |
| -------------------------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------- | -------------------------------------- |
| Escopo comercial inicial         | Módulos efetivamente contratáveis, superfícies e configurações incluídas                                   | Hero, operação, checkout, contratação e FAQ | Zack / comercial / produto             |
| Licenciamento                    | Modalidade, limites de customização, direitos de uso e eventual acesso ao código                           | Contratação e FAQ                           | Comercial / jurídico                   |
| Responsabilidades financeiras    | Arranjo da operação, custódia, quem processa/liquida e quem atende exceções                                | Financeiro, split, integrações e FAQ        | Operações / parceiros / jurídico       |
| Adquirentes                      | Quais registros serão publicados; métodos, funções, recursos, estágio, ambiente e habilitação por provedor | Cards `acquiring-*`, navegação e matriz     | Produto / integrações / comercial      |
| Marketing, utilidades e plugins  | Quais ferramentas terão conexão efetivamente oferecida; função, permissões e requisitos                    | Cards `tools-*`, API e catálogo             | Produto / integrações                  |
| Logos e ilustrações              | Arquivos independentes por slot, autorização de uso e cena fiel à capacidade daquela conexão               | Todos os cards de integrações               | Zack / design / parceiros              |
| Contratos e credenciais próprios | Elegibilidade por provedor, responsabilidade pela contratação e habilitação                                | Integrações, implantação e FAQ              | Comercial / integrações / parceiros    |
| Prints do produto                | Pacote demonstrável e capturas reais autorizadas para os cenários H/O/F/E/I                                | Todas as áreas demonstrativas               | Produto / design / equipe técnica      |
| Marca, domínio e comunicação     | Superfícies contratáveis, procedimento DNS/TLS e remetente verificado                                      | Hero, identidade e implantação              | Produto / implantação                  |
| Governança                       | Carteiras e histórico por papel; existência de trilha para a alteração comercial de O01                    | Operação, O02 e O03                         | Produto / segurança                    |
| Exemplo financeiro               | Compatibilidade do exemplo R$ 100,00 com o modelo real de taxas, receita, reserva e liberação              | F01, tabela, legenda e alt                  | Produto / financeiro                   |
| Competência e custos             | Campos atualmente disponíveis, fonte de custo e tratamento de ausências                                    | Receita e custos                            | Produto / financeiro                   |
| Saques                           | Escopo de supervisão, permissões e parceiros elegíveis para execução                                       | Movimentações, confiança e implantação      | Operações / parceiros                  |
| Recorrência                      | Métodos/provedores e fluxos comerciais elegíveis, regras de renovação                                      | Hero complementar, experiência e FAQ        | Produto / parceiros                    |
| Split                            | Participantes, alocações suportadas e alcance da liquidação externa                                        | Experiência, financeiro e integrações       | Produto / financeiro / parceiros       |
| Entrega digital                  | Entregáveis, completude da interface, limites de armazenamento e dependências; pendências de revogação     | Experiência, assets e FAQ                   | Produto / equipe técnica               |
| Documentação externa             | Destinos públicos, versões e autorização para publicar contratos e exemplos                                | Menus técnicos, API, webhooks e biblioteca  | Equipe técnica / produto               |
| Webhooks                         | Eventos, campos do histórico e documentação de assinatura/retry/reenvio por fluxo                          | I02 e bloco Webhooks                        | Equipe técnica                         |
| Ambiente de avaliação            | Possibilidade e cobertura da demonstração assistida; acesso, isolamento e método utilizado                 | CTAs de demonstração e biblioteca           | Produto / comercial / equipe técnica   |
| Relatórios e evidências          | Materiais realmente publicáveis, versões, data, metodologia e limitações                                   | Biblioteca e pilares                        | Equipe técnica / segurança             |
| Implantação                      | Procedimento efetivamente adotado, entregáveis, critérios de aceite e responsáveis                         | Cinco etapas de cada caminho                | Implantação / comercial / operações    |
| Migração                         | Portabilidade de dados/tokens, critérios de ensaio, transição e participação da origem                     | Cenário Migração, processo e FAQ            | Implantação / parceiros                |
| Preços                           | Modalidade, periodicidade, setup, mínimo e separação dos custos de terceiros                               | Composição comercial e FAQ                  | Zack / comercial                       |
| Sustentação                      | Cobertura de manutenção, customizações, treinamento, canais e eventual SLA                                 | Confiança, pós-ativação e FAQ               | Zack / operações / comercial           |
| Exportação e encerramento        | Dados, formatos, prazo contratual, custos e responsabilidades                                              | FAQ e contrato                              | Jurídico / comercial / produto         |
| Identidade institucional         | Razão social, registro fiscal, responsáveis e canais institucionais publicáveis                            | Responsáveis e rodapé                       | Zack / jurídico                        |
| Referências institucionais       | Nome, vínculo, escopo, autorização e comprovação                                                           | Parceiros e referências                     | Zack / comercial / jurídico            |
| Privacidade                      | Política publicada, contato responsável e instruções aplicáveis ao canal comercial                         | Formulário e linha legal                    | Jurídico / responsável por privacidade |
| Contato comercial                | Confirmar titularidade e atendimento do WhatsApp já configurado; definir e-mail e retorno                  | Contato e rodapé                            | Zack / comercial                       |
| Envio remoto de leads            | Endpoint ou canal de recebimento, confirmação de sucesso, tratamento de erro e privacidade                 | Formulário e seus estados                   | Zack / equipe técnica / comercial      |

## Limites deliberados da publicação atual

- Nenhum provedor, ferramenta externa ou plugin foi nomeado. Os seis slots são espaços editoriais, não um catálogo ativo.
- Não se declara case, aprovação superior, economia, conversão, throughput, escala ilimitada, certificação ou SLA.
- Não se promete sandbox público, transferência de código, migração automática universal, split bancário universal, LMS completo ou Pix Automático homologado.
- Não há URLs de documentação, relatório ou agenda inventadas. Os CTAs solicitam avaliação ou material pelo contato e identificam o assunto.
- Os screenshots continuam como espaços reservados; suas legendas descrevem tarefas sustentadas pelas fontes, não resultados comerciais observados.
- A tabela financeira é ilustrativa e aritmeticamente coerente; não foi apresentada como extrato de liquidação real.
- O formulário prepara um resumo local. O visitante precisa copiar e compartilhar no WhatsApp; não é lead recebido nem reunião agendada.
- Identificação jurídica, políticas e suporte separado não foram preenchidos com placeholders apresentados como dados reais.

## Microcopy reservada para envio remoto

Não ativar no site enquanto não houver fluxo de envio confirmado. Estes textos não substituem o estado real de resumo local.

| Estado        | Texto proposto                                                                                                    | Condição                                                                |
| ------------- | ----------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| CTA de envio  | Enviar solicitação de avaliação                                                                                   | Envio efetivo disponível                                                |
| Em andamento  | Enviando sua solicitação…                                                                                         | Requisição pendente, com bloqueio de duplicidade                        |
| Erro          | Não foi possível enviar sua solicitação. Seus campos foram preservados; tente novamente ou use o canal comercial. | Nenhuma confirmação de recebimento no erro; dados realmente preservados |
| Recebimento   | Recebemos sua solicitação de avaliação.                                                                           | Resposta de sucesso real do canal integrado                             |
| Próximo passo | A equipe dará continuidade à avaliação pelo canal que você informou.                                              | Responsável e processo de acompanhamento definidos                      |
| Canal         | Retorno pelo canal informado: {canal}.                                                                            | Canal válido e aceito para retorno                                      |
| Prazo         | Não publicar estimativa nesta etapa.                                                                              | Acrescentar somente após confirmação operacional                        |
| Agendamento   | Não exibir “reunião agendada”.                                                                                    | Exige confirmação efetiva de agenda                                     |

## Aceite editorial antes de ampliar alegações

1. Confirmar escopo comercial e correspondência de cada capacidade com o componente.
2. Produzir as capturas reais e reconciliar oferta, valores, estado e permissões.
3. Publicar registros de integrações somente com estágio e requisitos comprovados.
4. Trocar CTA de solicitação por acesso autônomo somente quando houver recurso publicamente acessível.
5. Atualizar copy, asset, tabela, legenda e alt em conjunto quando o exemplo mudar.
