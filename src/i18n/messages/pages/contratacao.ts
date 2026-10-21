export const contratacaoCopy = {
  metadata: {
    title: 'Contratação e implantação | Paragan',
    description:
      'Entenda o que avaliar para operar com a Paragan: uso da plataforma, implantação, integrações, custos e responsabilidades definidos por escopo.',
    imageAlt: 'Paragan — definição de escopo e implantação de uma operação white label',
  },
  hero: {
    eyebrow: 'Contratação',
    title: 'Uma plataforma pronta.',
    muted: 'Um escopo para a sua operação.',
    description:
      'Comece pelo que você precisa operar. A avaliação identifica módulos, integrações e trabalho de implantação; a proposta registra o que está incluído, os custos e a responsabilidade de cada parte.',
    primaryAction: 'Conversar sobre minha operação',
    secondaryAction: 'Entender a implantação',
    image: {
      asset: 'projectPlanning',
      alt: 'Definição do projeto: contexto da operação, recursos e próximos passos',
    },
  },
  scope: {
    label: 'Composição do escopo',
    heading: {
      title: 'O produto é a base.',
      muted: 'A proposta organiza o restante.',
      description:
        'Quatro frentes orientam a avaliação. Nem toda operação precisa de desenvolvimento próprio; nem toda configuração resolve uma necessidade de integração.',
    },
    items: [
      {
        id: 'uso-da-plataforma',
        eyebrow: 'Uso da plataforma',
        title: 'Operar com recursos existentes.',
        description:
          'Painéis, gestão de sellers, checkout e controles financeiros formam a base do produto. O escopo identifica os módulos e as condições de uso aplicáveis à sua operação. Contratar a plataforma não significa adquirir a propriedade do código-fonte ou uma licença bancária.',
      },
      {
        id: 'configuracao-e-implantacao',
        eyebrow: 'Configuração e implantação',
        title: 'Preparar o ambiente para o seu modelo.',
        description:
          'Marca, domínios, acessos, políticas e conexões são definidos e validados conforme o modelo da operação. O escopo registra os entregáveis da implantação e o que cada equipe precisa preparar para avançar.',
      },
      {
        id: 'customizacao-e-migracao',
        eyebrow: 'Serviços específicos',
        title: 'Avaliar o que vai além da configuração.',
        description:
          'Integrações próprias, adaptações e migração exigem análise de viabilidade. Dados disponíveis, portabilidade de tokens, contratos existentes e continuidade da operação delimitam o trabalho. Serviços adicionais dependem de escopo e acordo específicos.',
      },
      {
        id: 'custos-de-parceiros',
        eyebrow: 'Terceiros e habilitações',
        title: 'Separar tecnologia de processamento.',
        description:
          'Adquirência, serviços bancários e outros provedores têm condições, custos e aprovações próprios. A avaliação identifica quais parceiros serão usados, quem contrata e fornece os acessos e quais recursos estarão efetivamente habilitados.',
      },
    ],
  },
  deployment: {
    label: 'Implantação',
    heading: {
      title: 'Da avaliação à ativação.',
      muted: 'Cada etapa com uma saída definida.',
      description:
        'A preparação conecta decisões comerciais e técnicas. Prazo e sequência de execução são estimados depois de entender o escopo e as dependências.',
    },
    items: [
      {
        id: 'avaliar',
        title: 'Avaliar a operação',
        description:
          'Você apresenta modelo, base atual ou projetada, parceiros e prioridades. A Paragan avalia a aderência da plataforma e identifica o que precisa de análise adicional.',
      },
      {
        id: 'definir-escopo',
        title: 'Definir o escopo',
        description:
          'As partes alinham módulos, serviços, custos, dependências e responsáveis. Entregáveis e critérios de aceite orientam o que será configurado e validado.',
      },
      {
        id: 'configurar-e-validar',
        title: 'Configurar e validar',
        description:
          'As equipes preparam identidade, acessos e integrações conforme o escopo. Os fluxos acordados são exercitados com os parceiros habilitados, incluindo estados e exceções relevantes.',
      },
      {
        id: 'ativar',
        title: 'Alinhar a ativação',
        description:
          'Operador e Paragan conferem o aceite, as pendências e os responsáveis pelo início. A ativação considera as habilitações externas e a rotina de acompanhamento acordada.',
      },
    ],
    note: 'Já existe uma operação em andamento? A avaliação também precisa considerar histórico, dados exportáveis e transição dos fluxos. Migração não pressupõe transferência automática de credenciais, tokens ou contratos.',
  },
  responsibilities: {
    label: 'Operação e continuidade',
    heading: {
      title: 'Sua operação tem autonomia.',
      muted: 'E responsabilidades definidas.',
      description:
        'A plataforma organiza contextos e acessos. A rotina depende também das decisões do operador e dos serviços externos que sustentam o processamento.',
    },
    image: {
      asset: 'architecture',
      alt: 'Arquitetura da plataforma com isolamento entre contextos operacionais',
      caption:
        'Isolamento entre operações não significa infraestrutura física dedicada por contratante. Dimensionamento e requisitos específicos entram na avaliação.',
    },
    items: [
      {
        id: 'responsabilidade-operador',
        title: 'Operador do gateway',
        description:
          'Define o modelo comercial, a gestão da base, as permissões da equipe e suas políticas. Participa das validações e organiza o atendimento aos sellers e as obrigações da própria atividade.',
      },
      {
        id: 'responsabilidade-paragan',
        title: 'Paragan',
        description:
          'Fornece a camada tecnológica e executa os serviços de configuração e implantação acordados. Escopo de manutenção, canais de suporte e tratamento de incidentes precisam constar do acordo.',
      },
      {
        id: 'responsabilidade-parceiros',
        title: 'Parceiros e integrações',
        description:
          'Respondem pelos serviços que prestam, suas habilitações e condições de processamento. Sistemas próprios e conexões externas também precisam de responsáveis por credenciais, eventos e mudanças de contrato técnico.',
      },
    ],
    maintenance: {
      title: 'Depois da ativação, a operação continua.',
      description:
        'Manutenção da plataforma, evolução do produto e uma nova customização não são o mesmo trabalho. Cobertura, prioridades, canais e eventuais serviços adicionais são alinhados no acordo; mudanças de escopo precisam de nova avaliação.',
    },
  },
  faq: {
    label: 'Dúvidas de contratação',
    heading: {
      title: 'O que considerar',
      muted: 'antes de começar.',
      description:
        'Use estas respostas para preparar a conversa. A proposta deve traduzir o seu cenário em recursos, entregáveis e responsabilidades.',
    },
    items: [
      {
        id: 'faq-custos',
        question: 'Como entender a composição dos custos?',
        answer:
          'Separe o uso da plataforma, os serviços de implantação ou customização que forem acordados e os custos dos parceiros. Módulos, volume, complexidade das integrações e requisitos operacionais são pontos de avaliação, não uma tabela pública de preços. Valores e condições dependem da proposta.',
      },
      {
        id: 'faq-codigo',
        question: 'Contratar a Paragan é comprar o código-fonte?',
        answer:
          'Não. O uso da plataforma white label permite operar uma experiência configurada para a sua marca dentro do escopo contratado. Isso não representa transferência de propriedade do código, licença bancária nem autorização regulatória para a atividade do operador.',
      },
      {
        id: 'faq-parceiros',
        question: 'Os contratos com processadores já estão incluídos?',
        answer:
          'A proposta precisa identificar esse arranjo: provedores elegíveis, serviços incluídos, responsável pela contratação e fornecimento dos acessos. Taxas de processamento são distintas do uso da plataforma, e os meios disponíveis dependem da habilitação e das capacidades do parceiro.',
      },
      {
        id: 'faq-prazo',
        question: 'Quanto tempo leva para começar a operar?',
        answer:
          'A estimativa vem depois da definição de escopo. Configuração de domínio, disponibilidade das equipes, integrações, aprovações externas e validação dos fluxos afetam a preparação. O início deve seguir os critérios de aceite e os responsáveis acordados, não um prazo genérico anunciado no site.',
      },
      {
        id: 'faq-migracao',
        question: 'Posso trazer uma operação que já está em funcionamento?',
        answer:
          'O cenário pode ser avaliado, mas a migração precisa de um recorte técnico. É necessário entender quais dados podem ser exportados, como preservar o histórico e o que os contratos e provedores permitem transferir. Tokens de pagamento e vínculos de recorrência não devem ser tratados como dados universalmente portáveis.',
      },
      {
        id: 'faq-suporte',
        question: 'Como ficam suporte, manutenção e novas demandas?',
        answer:
          'Esses pontos precisam ser definidos no acordo: canais, cobertura, responsabilidades e tratamento de demandas. Operação assistida, atendimento dedicado, horários ou níveis de serviço não devem ser presumidos. Uma nova integração ou customização é avaliada separadamente quando não pertence ao escopo vigente.',
      },
    ],
  },
  related: {
    label: 'Próximos passos',
    heading: {
      title: 'Traga o contexto.',
      muted: 'Vamos delimitar o trabalho.',
      description:
        'Para começar, reúna seu modelo de operação, prioridades e sistemas envolvidos. Não envie credenciais, documentos de clientes ou dados de pagamento pelo formulário de contato.',
    },
    items: [
      {
        id: 'contato',
        title: 'Conversar sobre minha operação',
        description: 'Organize o cenário e os pontos que precisam entrar na avaliação.',
      },
      {
        id: 'plataforma',
        title: 'Explorar a plataforma',
        description: 'Conheça os recursos que podem compor a base do seu gateway.',
      },
      {
        id: 'integracoes',
        title: 'Entender as integrações',
        description: 'Diferencie API, webhooks, apps e conexões com processadores.',
      },
      {
        id: 'migracao',
        title: 'Avaliar uma transição',
        description: 'Veja o cenário de modernização de uma operação existente.',
      },
    ],
  },
} as const;
