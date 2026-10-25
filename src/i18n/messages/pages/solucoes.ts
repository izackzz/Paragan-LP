export const solucoesCopy = {
  metadata: {
    title: 'Soluções para gateway white label | Paragan',
    description:
      'Avalie os caminhos para lançar um gateway, migrar uma operação ou incorporar pagamentos à sua plataforma. Entenda escopo, dependências e próximos passos.',
    imageAlt: 'Paragan — caminhos para estruturar uma operação de pagamentos',
  },
  scenarioNavigation: {
    label: 'Escolha seu cenário',
  },
  hero: {
    eyebrow: 'Soluções · ponto de partida',
    title: 'Soluções para gateway de pagamentos white label.',
    muted: 'Um caminho para cada operação.',
    description:
      'Começar uma marca, substituir uma estrutura existente ou conectar pagamentos a um produto são projetos distintos. Encontre seu cenário e veja o que precisa estar definido antes da implantação.',
    primaryAction: 'Conversar sobre meu cenário',
    secondaryAction: 'Explorar os caminhos',
  },
  launch: {
    label: 'Lançar uma operação',
    heading: {
      eyebrow: 'Uma marca que vai começar',
      title: 'Antes de abrir as portas,',
      muted: 'defina como a operação funciona.',
    },
    title: 'Do público inicial às regras do gateway',
    description:
      'Você quer oferecer pagamentos à sua base com identidade própria. O primeiro recorte é decidir quem será atendido, o que poderá vender e quem responde pelo cadastro e pelo suporte.',
    points: [
      {
        id: 'lancamento-publico',
        title: 'Público e responsabilidades',
        description:
          'Defina o perfil dos sellers, os meios de pagamento necessários e a equipe que vai acompanhar as primeiras contas.',
      },
      {
        id: 'lancamento-recursos',
        title: 'Marca, governança e condições',
        description:
          'Marca e domínio, onboarding, permissões e condições comerciais precisam formar uma rotina que sua equipe consiga operar.',
      },
      {
        id: 'lancamento-decisao',
        title: 'Parceiros e habilitações',
        description:
          'Delimite a primeira oferta, confirme os parceiros necessários e atribua os responsáveis por contratação, credenciais e habilitações. Esse recorte orienta a configuração inicial do gateway.',
      },
    ],
    imageAlt: 'Ilustração de lançamento de uma operação com marca própria',
    caption:
      'O lançamento começa por um recorte operacional, não pela ativação de todos os módulos.',
    linkLabel: 'Avaliar a base da plataforma',
  },
  migration: {
    label: 'Migrar uma operação',
    heading: {
      eyebrow: 'Uma operação que já existe',
      title: 'Escolha o que muda.',
      muted: 'Mapeie o que precisa continuar.',
    },
    title: 'Novas vendas e obrigações anteriores são frentes distintas',
    description:
      'Você já tem sellers, integrações e transações em andamento. A avaliação precisa separar o que pode entrar na nova estrutura do que seguirá sendo tratado na origem.',
    points: [
      {
        id: 'migracao-origem',
        title: 'Origem, contratos e responsáveis',
        description:
          'Identifique o sistema atual, os formatos de exportação, os contratos vigentes e os responsáveis por dados, integrações e atendimento.',
      },
      {
        id: 'migracao-fluxos',
        title: 'Novas vendas e obrigações legadas',
        description:
          'Mapeie cadastros, novas cobranças, eventos e conciliação. Defina como tratar saldos, estornos e disputas anteriores, incluindo os fluxos que precisam continuar na origem.',
      },
      {
        id: 'migracao-limites',
        title: 'Dados e continuidade possível',
        description:
          'Defina o recorte de entrada e os critérios de validação. Importação de dados e continuidade das assinaturas dependem da origem e dos contratos; tokens não têm transferência universal.',
      },
    ],
    imageAlt: 'Ilustração de transição entre estruturas de uma operação de pagamentos',
    caption:
      'O plano depende dos dados acessíveis e dos parceiros envolvidos; não pressupõe migração sem interrupções.',
    linkLabel: 'Entender a implantação',
  },
  platforms: {
    label: 'Plataformas e marketplaces',
    heading: {
      eyebrow: 'Pagamentos dentro de outro produto',
      title: 'Conecte a transação',
      muted: 'à rotina da sua plataforma.',
    },
    title: 'Comece pelo fluxo entre quem vende, quem compra e quem recebe',
    description:
      'Seu software ou marketplace já organiza uma relação comercial. Incorporar pagamentos exige definir quais etapas ficam no seu produto e quais passam pelo checkout e pelos painéis da operação.',
    points: [
      {
        id: 'plataformas-papeis',
        title: 'Participantes e cadastro',
        description:
          'Identifique os participantes, o responsável pela venda e pelo atendimento, e como cada seller será cadastrado e autorizado.',
      },
      {
        id: 'plataformas-integracao',
        title: 'Pagamentos, eventos e falhas',
        description:
          'Relacione criação e consulta de pagamentos, confirmação por eventos e acompanhamento financeiro. Defina permissões e o tratamento de falhas entre os sistemas.',
      },
      {
        id: 'plataformas-financeiro',
        title: 'Distribuição e liquidação',
        description:
          'Valide participantes, comissões e regras de distribuição com o parceiro. Defina como os valores serão registrados e liquidados, de acordo com os recursos habilitados para esse fluxo.',
      },
    ],
    imageAlt: 'Prévia demonstrativa do painel seller com visão da operação',
    caption:
      'Painel demonstrativo com dados fictícios; o escopo de integração é definido por projeto.',
    linkLabel: 'Examinar os pontos de integração',
  },
  project: {
    label: 'Definir um projeto',
    heading: {
      eyebrow: 'Uma ideia ainda em definição',
      title: 'Você não precisa chegar',
      muted: 'com todos os módulos escolhidos.',
    },
    title: 'Traga um fluxo concreto para começar a conversa',
    description:
      'Se o modelo ainda está tomando forma, descreva uma venda do início ao fim: quem oferece, quem paga, quem recebe e o que acontece depois. Esse exemplo ajuda a avaliar a aderência à base existente.',
    points: [
      {
        id: 'projeto-contexto',
        title: 'Público, venda e restrições',
        description:
          'Reúna público, tipo de venda, rotina atual e principal restrição. Uma hipótese clara é mais útil que uma lista de funcionalidades sem prioridade.',
      },
      {
        id: 'projeto-recorte',
        title: 'Configuração, integração ou terceiro',
        description:
          'Escolha a jornada inicial e separe o que cabe em configuração, o que exige integração e o que depende de terceiros ou está fora da oferta.',
      },
      {
        id: 'projeto-escopo',
        title: 'Escopo para avaliação',
        description:
          'Transforme a jornada prioritária em um escopo inicial de avaliação. Separe os recursos existentes das integrações e demandas adicionais que precisarão de análise técnica e comercial.',
      },
    ],
    imageAlt: 'Ilustração de organização das decisões e do escopo de um projeto',
    caption: 'A base do produto orienta o recorte; necessidades adicionais dependem de avaliação.',
    linkLabel: 'Apresentar meu projeto',
  },
  deployment: {
    label: 'Da escolha à implantação',
    heading: {
      eyebrow: 'Um processo com decisões verificáveis',
      title: 'O cenário muda.',
      muted: 'A preparação continua necessária.',
      description:
        'O objetivo é transformar a intenção em um fluxo validável, com responsabilidades e dependências conhecidas antes da entrada em operação.',
    },
    items: [
      {
        id: 'implantacao-recorte',
        title: 'Delimitar a primeira jornada',
        description:
          'Registrar público, fluxo de venda e critérios de aceite. Na migração, separar novas transações das obrigações existentes.',
      },
      {
        id: 'implantacao-dependencias',
        title: 'Confirmar as dependências',
        description:
          'Atribuir responsáveis por contratos, habilitações dos parceiros, credenciais, domínios e dados necessários.',
      },
      {
        id: 'implantacao-validacao',
        title: 'Validar os fluxos escolhidos',
        description:
          'Conferir cadastro, pagamento, eventos e tratamento financeiro conforme os meios e parceiros definidos no escopo.',
      },
      {
        id: 'implantacao-entrada',
        title: 'Combinar a entrada em operação',
        description:
          'Definir aceite, acompanhamento inicial e responsáveis pelas exceções antes de ampliar o uso para a base.',
      },
    ],
    note: 'Prazos e condições dependem do escopo e das habilitações. Nenhuma etapa substitui as exigências dos parceiros ou as responsabilidades legais da operação.',
  },
  faq: {
    label: 'Dúvidas sobre os cenários',
    heading: {
      title: 'Escolha com clareza.',
      muted: 'Prepare a próxima decisão.',
      description:
        'As decisões mais importantes não são iguais para uma operação nova e uma que já tem histórico.',
    },
    items: [
      {
        id: 'faq-licenca',
        question: 'Lançar um gateway com minha marca significa abrir um banco?',
        answer:
          'Não. White label é uma camada de identidade e operação do produto. O modelo contratual, as responsabilidades regulatórias e a movimentação ou custódia dos recursos precisam ser definidos com os parceiros envolvidos. O uso da plataforma não concede licença bancária.',
      },
      {
        id: 'faq-migracao',
        question: 'Posso levar toda a base e manter as cobranças recorrentes?',
        answer:
          'Isso exige análise da origem, dos dados disponíveis e dos contratos com os provedores. Cadastros, históricos, tokens e assinaturas têm restrições diferentes. Não há promessa de transferência universal, continuidade automática da recorrência ou migração sem interrupções.',
      },
      {
        id: 'faq-marketplace',
        question: 'Qualquer marketplace pode dividir e liquidar pagamentos entre participantes?',
        answer:
          'O fluxo precisa ser validado com os meios e parceiros habilitados, incluindo cadastro dos participantes, regras de distribuição e responsabilidade por estornos e disputas. A existência de regras de split e comissões não significa liquidação bancária na origem para qualquer parceiro.',
      },
      {
        id: 'faq-digital',
        question: 'E se meu cenário for venda de produtos digitais?',
        answer:
          'Avalie a jornada de produto, oferta e checkout, com entrega de arquivos ou links vinculada à confirmação do pagamento no checkout próprio. Esse acesso autorizado não equivale a um LMS com aulas, progresso ou certificados. O recorte de entrega digital está detalhado na página de checkout.',
      },
      {
        id: 'faq-customizacao',
        question: 'Posso começar sem ter toda a especificação pronta?',
        answer:
          'Sim. Traga um exemplo de venda, o público e as principais restrições para avaliar a aderência à plataforma. A avaliação distingue configuração, integração e dependências externas. Se houver necessidade de desenvolvimento adicional, a viabilidade e a contratação são tratadas separadamente.',
      },
    ],
  },
  related: {
    label: 'Próxima decisão',
    heading: {
      title: 'Aprofunde o que importa',
      muted: 'para o seu cenário.',
    },
    items: [
      {
        id: 'plataforma',
        title: 'Estrutura da operação',
        description: 'Conheça a base para marca, sellers e governança.',
      },
      {
        id: 'integracoes',
        title: 'Fronteiras da integração',
        description: 'Entenda API, eventos e conexões com sistemas próprios.',
      },
      {
        id: 'financeiro',
        title: 'Regras de quem recebe',
        description: 'Avalie taxas, saldos, reservas e saídas.',
      },
      {
        id: 'digital',
        title: 'Venda e entrega digital',
        description: 'Veja o fluxo de arquivos e links após o pagamento.',
      },
      {
        id: 'implantacao',
        title: 'Escopo e implantação',
        description: 'Entenda as condições e responsabilidades de entrada.',
      },
      {
        id: 'contato',
        title: 'Seu cenário na conversa',
        description: 'Prepare o contexto para uma avaliação do projeto.',
      },
    ],
  },
} as const;
