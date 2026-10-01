# Arquitetura de conteúdo do site

## 1. Estrutura recomendada

Site multipágina, com a home como apresentação executiva e páginas de produto como aprofundamento. Não criar uma página para cada endpoint nem repetir o mesmo texto em páginas de solução.

Rotas abaixo são propostas editoriais; não foram implementadas.

### Navegação principal

- **Plataforma:** visão geral, white label, operação e equipe, financeiro, segurança e escala.
- **Produtos:** checkout e produtos, pagamentos e orquestração, recorrência, crescimento da base.
- **Soluções:** operar seu gateway, plataformas e marketplaces, produtos digitais.
- **Integrações:** meios/processadores confirmados, API e webhooks, apps.
- **Contratação:** escopo, composição comercial e implantação.
- CTA persistente: **Agendar demonstração**.

Documentação técnica como acesso utilitário. Acesso à plataforma somente com destino correto e estratégia definida para tenants; não criar login genérico que confunda prospect, seller e comprador.

## 2. Mapa de páginas e responsabilidade editorial

| Rota proposta                          | Pergunta respondida                          | Conteúdo indispensável                                                          | Próximo destino                |
| -------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------ |
| `/`                                    | Por que considerar a Paragan?                | Categoria, controle, produto, operação, prova e convite                         | Plataforma ou demonstração     |
| `/plataforma`                          | Como tudo se conecta?                        | Mapa dos escopos, jornada da operação e módulos                                 | Página especializada           |
| `/plataforma/white-label`              | Quanto da experiência recebe minha marca?    | Painéis, checkout, domínio, assets, comunicação e limites                       | Demo contextualizada           |
| `/plataforma/operacao`                 | Como administro sellers e equipe?            | Onboarding, carteira, permissões, status, avisos e exceções                     | Financeiro ou demo             |
| `/plataforma/financeiro`               | Como defino condições e acompanho dinheiro?  | Taxas, comissão, split, saldo, reservas, saques e visão consolidada             | Contratação ou demo            |
| `/plataforma/seguranca-e-escala`       | O que sustenta a operação?                   | Isolamento, acesso, integridade financeira, filas, métricas e responsabilidades | Tecnologia ou conversa técnica |
| `/produtos/checkout`                   | O que entrego ao seller para vender?         | Catálogo, ofertas, links, cupons, bumps, aparência, confirmação e pedidos       | Demo do fluxo                  |
| `/produtos/pagamentos`                 | Como governo o processamento?                | Métodos aptos, regras, configuração, prioridade, exceções e métricas            | Integrações                    |
| `/produtos/recorrencia`                | Como acompanho cobrança continuada?          | Planos/ofertas, ciclos, tentativas, cancelamento e reajuste                     | Demo recorrência               |
| `/produtos/crescimento`                | Como organizo relacionamento e incentivos?   | Ranking, campanhas, níveis, premiações e comunicação                            | Demo gateway                   |
| `/integracoes`                         | O que posso conectar hoje?                   | Separação entre processadores, BaaS, apps e API; disponibilidade confirmada     | Desenvolvedores ou diagnóstico |
| `/desenvolvedores`                     | Como meu time integra?                       | Autenticação, scopes, idempotência, eventos, erros e docs                       | Documentação técnica           |
| `/solucoes/gateways`                   | Serve para lançar ou modernizar meu gateway? | Marca, operação, modelo comercial e trajetória de implantação                   | Demonstração                   |
| `/solucoes/plataformas-e-marketplaces` | Como coordeno vários participantes?          | Sellers, split, API, permissões e financeiro                                    | Avaliação de aderência         |
| `/solucoes/produtos-digitais`          | Como ofereço venda e entrega à minha base?   | Oferta, checkout, cobrança, conteúdo autorizado e limites de LMS                | Demonstração                   |
| `/contratacao`                         | O que será contratado e como começa?         | Escopo, componentes do custo, dependências, implantação e suporte               | Diagnóstico comercial          |
| `/demonstracao`                        | Qual é o próximo passo?                      | Expectativa da conversa, formulário enxuto e confirmação                        | Reunião qualificada            |
| `/privacidade` e `/termos`             | Quem responde pelo site e pelos dados?       | Identidade legal e condições próprias da Paragan                                | Contato apropriado             |

## 3. Ordem de publicação recomendada

**Núcleo comercial:** home, plataforma, white label, checkout, financeiro, pagamentos, integrações, segurança e escala, contratação, demonstração e páginas legais.

**Aprofundamento:** operação, recorrência, crescimento, desenvolvedores e soluções. Abrir navegação somente quando houver conteúdo específico e prova correspondente.

**Editorial futuro:** casos, guias de implantação, glossário e artigos. Não abrir blog vazio nem criar casos fictícios para completar menu.

Esta ordem define prioridade editorial, não cronograma de implementação.

## 4. Organização por intenção

| Intenção                       | Entrada                  | Percurso recomendado                              |
| ------------------------------ | ------------------------ | ------------------------------------------------- |
| Quero meu gateway              | Home ou solução gateways | White label → financeiro → demo                   |
| Quero modernizar operação      | Plataforma               | Operação → pagamentos → segurança e escala → demo |
| Quero checkout para minha base | Checkout                 | Produtos/ofertas → recorrência → demo             |
| Preciso validar integração     | Integrações              | Desenvolvedores → docs → conversa técnica         |
| Quero entender investimento    | Contratação              | Escopo → composição de custos → diagnóstico       |

## 5. Regras para evitar repetição

- Home apresenta consequências de negócio; produto explica funcionamento.
- Plataforma mostra conexão entre módulos; solução mostra um cenário de uso.
- Financeiro é dono da explicação de taxas, saldos e reservas; outras páginas apontam para ele.
- Integrações é dona da disponibilidade por parceiro; não manter listas independentes contraditórias.
- Segurança e escala concentra mecanismos e evidências; páginas comerciais usam resumos objetivos.
- Contratação concentra condições e responsabilidades; não espalhar prazos/preços divergentes em CTAs.

## 6. Rodapé e elementos transversais

Rodapé: plataforma, produtos, documentação, demonstração, contato comercial, identidade legal, termos e privacidade. Status público somente se existir uma página adequada e mantida.

Nas páginas de produto: navegação contextual, CTA específico, uma prova do recurso e dois links de continuidade. FAQ curto e próprio de cada assunto.

## 7. Direção de SEO

| Página proprietária | Intenção principal                                    |
| ------------------- | ----------------------------------------------------- |
| Home                | Paragan e infraestrutura de pagamentos white label    |
| Solução gateways    | Gateway de pagamentos white label / criar gateway     |
| White label         | Plataforma de pagamentos com marca e domínio próprios |
| Pagamentos          | Orquestração de pagamentos e multiadquirência         |
| Checkout            | Checkout white label com produtos e ofertas           |
| Financeiro          | Gestão financeira de gateway e split de pagamentos    |
| Recorrência         | Cobrança recorrente para plataformas                  |

Os termos são hipóteses editoriais, não pesquisa de volume. Evitar páginas quase iguais concorrendo pela mesma intenção. Não usar certificações, parceiros indisponíveis ou segmentos não atendidos para captar tráfego.
