// Keys describe content roles and entities, never the wording or section position.
const messages = {
  brand: {
    home: 'Paragan — início',
    signature: 'PARAGAN / WHITE LABEL',
    copyright: '© {year} Paragan',
    promise: 'Um modelo de excelência.',
    supportingPromise: 'Uma operação com a sua marca.',
  },
  metadata: {
    title: 'Paragan — O modelo de excelência para fintechs com marca própria.',
    description:
      'Infraestrutura white label para fintechs eficientes: gateway, checkout, sellers e gestão financeira sob a marca da sua operação.',
    brandTitle: 'Brand — Paragan',
    brandDescription: 'Trevo Paragan em animação ASCII.',
  },
  accessibility: {
    skipContent: 'Pular para o conteúdo',
    primaryNavigation: 'Navegação principal',
    mobileNavigation: 'Navegação mobile',
    openNavigation: 'Abrir navegação',
    closeNavigation: 'Fechar navegação',
    footer: 'Rodapé Paragan',
    footerNavigation: 'Navegação do rodapé',
    socialNavigation: 'Redes sociais da Paragan',
    externalLink: '{label} — abre em nova aba',
    contactLink: '{label} — contato',
    previewTabs: 'Prévias da plataforma',
    contextTabs: 'Perspectivas da operação',
    placeholder: 'Espaço reservado: {label}',
    sectionIndex: '[ {number} / {total} ]',
    itemIndex: '{number} / {label}',
    lightTheme: 'Ativar tema claro',
    darkTheme: 'Ativar tema escuro',
    toggleTheme: 'Alternar tema claro e escuro',
    dismiss: 'Dismiss',
    globe: 'Globo inclinado a 23,5 graus com linhas de latitude e longitude; arraste para girar',
  },
  actions: {
    contact: 'ENTRAR EM CONTATO',
    consult: 'FALAR COM UM ESPECIALISTA',
    demo: 'VER EM AÇÃO',
    explore: 'Explorar minha operação',
    checkout: 'Conhecer o checkout',
    controls: 'Conhecer os controles',
    integration: 'Avaliar integração',
    backToTop: 'Voltar ao início ↑',
    plans: 'Planos',
    signIn: 'Entrar',
  },
  navigation: {
    platform: {
      title: 'Plataforma',
      intro: 'Uma operação completa, com a sua marca.',
      items: {
        gateway: {
          title: 'Gateway white label',
          description: 'Identidade e condições comerciais da sua operação.',
        },
        checkout: { title: 'Checkout', description: 'Da oferta à experiência de pagamento.' },
        sellers: {
          title: 'Gestão de sellers',
          description: 'Sua base, seus papéis e suas permissões.',
        },
        finance: { title: 'Financeiro', description: 'Receitas, custos, saldos e reservas.' },
        acquiring: {
          title: 'Multiadquirência',
          description: 'Processadores e regras de roteamento.',
        },
        subscriptions: { title: 'Assinaturas', description: 'Ofertas e cobranças recorrentes.' },
      },
    },
    solutions: {
      title: 'Soluções',
      intro: 'Infraestrutura para o seu modelo de negócio.',
      items: {
        launch: {
          title: 'Lançar minha fintech',
          description: 'Transforme pagamentos em um negócio próprio.',
        },
        migration: {
          title: 'Migrar minha operação',
          description: 'Evolua além dos limites da plataforma atual.',
        },
        platforms: {
          title: 'Plataformas e marketplaces',
          description: 'Conecte participantes, produtos e pagamentos.',
        },
        digital: {
          title: 'Produtos digitais',
          description: 'Venda e entrega em uma experiência integrada.',
        },
      },
    },
    developers: {
      title: 'Desenvolvedores',
      intro: 'Conecte seu ecossistema à Paragan.',
      items: {
        documentation: {
          title: 'Documentação',
          description: 'Conceitos e guias de implementação.',
        },
        api: { title: 'Referência da API', description: 'Recursos e contratos de integração.' },
        webhooks: { title: 'Webhooks', description: 'Eventos que acompanham sua operação.' },
        integrations: { title: 'Integrações', description: 'Conexões com os seus sistemas.' },
      },
    },
    company: {
      title: 'Empresa',
      intro: 'Conheça quem está nos bastidores.',
      items: {
        about: { title: 'Sobre a Paragan', description: 'Um modelo de excelência para fintechs.' },
        content: { title: 'Conteúdos', description: 'Perspectivas sobre operações de pagamentos.' },
        partners: { title: 'Parceiros', description: 'Construa novas possibilidades conosco.' },
        contact: { title: 'Fale com a equipe', description: 'Vamos entender seu próximo passo.' },
      },
    },
  },
  footer: {
    eyebrow: 'Paragan / Próximas conexões',
    tagline: 'Sua marca. Seu próximo capítulo.',
    groups: {
      platform: {
        title: 'Plataforma',
        items: { overview: 'Visão geral', checkout: 'Checkout', finance: 'Gestão financeira' },
      },
      resources: {
        title: 'Recursos',
        items: {
          integrations: 'Integrações',
          onboarding: 'Implantação',
          questions: 'Perguntas frequentes',
        },
      },
      company: {
        title: 'Paragan',
        items: {
          about: 'Nosso modelo de excelência',
          solutions: 'Para o seu negócio',
          contact: 'Fale com a equipe',
        },
      },
    },
    social: {
      instagram: 'Instagram',
      twitter: 'X (Twitter)',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
    },
    badges: {
      reputation: 'Reclame Aqui',
      compliance: 'PCI DSS',
      hosting: 'Amazon Web Services',
      technology: 'Tecnologia da plataforma',
    },
  },
  introduction: {
    eyebrow: 'White label para plataformas de vendas digitais',
    heading: { primary: 'Sua plataforma. Sua marca', secondary: 'Você no controle da operação' },
    description:
      'Entendemos seu negócio para construir tudo, migração ou construção, com escala planejada e produtos que evoluem junto ao mercado',
    supporting: {
      primary:
        'Gateway, checkout, split, produtos, membros, e muito mais... Personalize com sua marca e concentre seu time no que realmente gera crescimento:',
      emphasis: 'produto, clientes e escala.',
    },
    previewLabel: 'PRÉVIA DO PRODUTO',
    attributes: {
      branding: 'White label',
      tenancy: 'Multi-tenant',
      acquiring: 'Multiadquirência',
      connectivity: 'API + Webhooks',
    },
    previews: {
      gateway: {
        label: 'Seu gateway',
        eyebrow: 'OPERAÇÃO',
        description: 'Visão consolidada do negócio.',
        image: 'Painel do gateway',
        caption: 'Condições comerciais, sellers e financeiro. A operação vista de cima.',
      },
      seller: {
        label: 'Seus sellers',
        eyebrow: 'GESTÃO DE BASE',
        description: 'Vendas, produtos e recebimentos.',
        image: 'Experiência do seller',
        caption: 'Vendas, produtos e recebimentos. O dia a dia da sua base, conectado.',
      },
      checkout: {
        label: 'Seu checkout',
        eyebrow: 'PAGAMENTO',
        description: 'Oferta e jornada com a sua marca.',
        image: 'Checkout white label',
        caption: 'Do produto à confirmação. Uma jornada de compra com a sua identidade.',
      },
    },
  },
  capabilities: {
    label: 'A PLATAFORMA',
    heading: {
      eyebrow: 'Mais do que processar',
      primary: 'Uma marca própria merece',
      secondary: 'uma operação à altura.',
      description:
        'Sua marca, suas regras e seu jeito de operar. Da configuração ao pagamento, oito frentes conectadas para conduzir o negócio com mais contexto.',
    },
    items: {
      identity: {
        eyebrow: 'Identidade',
        title: 'Sua marca, em cada contato.',
        description:
          'Painel, checkout, domínio e comunicação com a sua identidade. Uma experiência que seus sellers reconhecem como sua.',
        illustration: 'Sua identidade, em cada ponto de contato',
      },
      policies: {
        eyebrow: 'Regras comerciais',
        title: 'Seu modelo vira regra.',
        description:
          'Configure taxas, comissões e condições por seller. Organize o padrão da operação e as particularidades de cada relacionamento.',
        illustration: 'Regras que refletem o seu negócio',
      },
      people: {
        eyebrow: 'Pessoas',
        title: 'Cada pessoa, no seu papel.',
        description:
          'Organize equipe, carteiras e permissões. Delegue responsabilidades para cada pessoa atuar no contexto certo da operação.',
        illustration: 'Pessoas, papéis e permissões',
      },
      engagement: {
        eyebrow: 'Relacionamento',
        title: 'Uma base para cultivar.',
        description:
          'Estruture campanhas, rankings e premiações para seus sellers. Conecte o relacionamento com a base à sua estratégia comercial.',
        illustration: 'Crescimento com reconhecimento',
      },
      acquiring: {
        eyebrow: 'Adquirência',
        title: 'Rotas com direção.',
        description:
          'Organize processadores, prioridades e regras de pagamento. Conduza cada operação conforme os métodos e parceiros habilitados.',
        illustration: 'Uma política. Rotas elegíveis.',
      },
      finance: {
        eyebrow: 'Gestão financeira',
        title: 'Cada valor, no contexto.',
        description:
          'Acompanhe saldos disponíveis, pendentes e reservados. Consulte o extrato e supervisione solicitações de saque com fluxo de aprovação.',
        illustration: 'Saldos, reservas e movimentações',
      },
      checkout: {
        eyebrow: 'Checkout',
        title: 'Da oferta ao pagamento.',
        description:
          'Conecte produtos, ofertas, cupons e adicionais em um checkout com a sua marca. Acompanhe os pedidos e a confirmação do pagamento.',
        illustration: 'Checkout white label',
      },
      integrations: {
        eyebrow: 'Integrações',
        title: 'Conecte a operação.',
        description:
          'Integre seus sistemas por API e webhooks. Consulte o histórico de entrega dos eventos para acompanhar o que acontece em cada conexão.',
        illustration: 'API e webhooks: eventos no contexto',
      },
    },
  },
  operations: {
    label: 'NO COMANDO',
    heading: {
      eyebrow: 'Decisões conectadas',
      primary: 'O controle não está em um botão.',
      secondary: 'Está em toda a operação.',
      description:
        'Marca, condições comerciais, pessoas e dinheiro. Diferentes perspectivas do mesmo negócio, com você no centro das decisões.',
    },
    contextLabel: 'GATEWAY ADMIN / {context}',
    contexts: {
      management: {
        title: 'Operação',
        heading: 'A visão de quem dirige o negócio.',
        description:
          'Acompanhe sellers, decisões de cadastro e prioridades operacionais. Tenha contexto para agir, não apenas uma lista de transações.',
        illustration: 'Visão operação do gateway',
        items: {
          sellers: 'Base de sellers e status',
          permissions: 'Carteiras e permissões',
          decisions: 'Revisão e histórico de decisões',
        },
      },
      commercial: {
        title: 'Comercial',
        heading: 'Sua estratégia vira configuração.',
        description:
          'Defina condições comerciais e organize as exceções da sua base. O relacionamento com cada seller pode ter regras claras, sem controles paralelos.',
        illustration: 'Visão comercial do gateway',
        items: {
          terms: 'Condições por seller',
          commissions: 'Comissão fixa, percentual ou híbrida',
          campaigns: 'Campanhas e reconhecimento',
        },
      },
      finance: {
        title: 'Financeiro',
        heading: 'Entenda o caminho de cada valor.',
        description:
          'Conecte receita, taxas, saldos e reservas. Acompanhe solicitações de saque e a composição financeira da operação com informações no contexto certo.',
        illustration: 'Visão financeiro do gateway',
        items: {
          balances: 'Disponível, pendente e reservado',
          withdrawals: 'Supervisão de saques',
          accrual: 'Visão por competência',
        },
      },
    },
  },
  sales: {
    label: 'EXPERIÊNCIA DE VENDA',
    heading: {
      eyebrow: 'Do produto ao pagamento',
      primary: 'Seus sellers têm uma oferta.',
      secondary: 'Entregue a experiência.',
      description:
        'Produtos, ofertas, cupons e order bumps conectados a um checkout com a sua identidade. Mais recursos para vender. Mais contexto para acompanhar.',
    },
    journeyLabel: 'UMA JORNADA, DO INÍCIO AO FIM',
    devicesLabel: 'DESKTOP + MOBILE',
    illustration: 'Checkout Catalyst · desktop e mobile',
    steps: {
      compose: {
        eyebrow: 'COMPONHA',
        title: 'Uma oferta, várias possibilidades.',
        description:
          'Crie produtos e ofertas avulsas ou recorrentes. Compartilhe links por oferta e organize seu catálogo.',
      },
      customize: {
        eyebrow: 'PERSONALIZE',
        title: 'Cada detalhe tem uma função.',
        description:
          'Ajuste aparência, cupons e produtos adicionais para apresentar sua oferta com clareza.',
      },
      track: {
        eyebrow: 'ACOMPANHE',
        title: 'A venda não termina no clique.',
        description:
          'Acompanhe pedidos e confirmação. Na entrega digital, conecte a compra ao acesso autorizado.',
      },
    },
  },
  ledger: {
    label: 'GESTÃO FINANCEIRA',
    heading: { primary: 'Seu financeiro.', secondary: 'Sem pontos cegos.' },
    description:
      'Volume não é resultado. Enxergue taxas, receitas, reservas e recebimentos na mesma operação.',
    illustrationLabel: '01 / Visão financeira',
    illustration: 'Receitas, custos e saldos',
    items: {
      costs: {
        title: 'Entenda seus custos.',
        description:
          'Consulte a visão financeira por competência e acompanhe custos de adquirência, condições comerciais e comissões. Entenda o que compõe a sua operação.',
      },
      receipts: {
        title: 'Planeje seus recebimentos.',
        description:
          'Diferencie saldos disponíveis, pendentes e reservados. Consulte as datas previstas de liberação para organizar os próximos passos com mais contexto.',
      },
      movements: {
        title: 'Acompanhe cada movimentação.',
        description:
          'Consulte o extrato de pagamentos, taxas e estornos. Supervisione solicitações de saque com fluxo de aprovação e acompanhe o caminho de cada valor.',
      },
    },
  },
  connectivity: {
    label: 'CONEXÕES QUE FAZEM SENTIDO',
    heading: { primary: 'Conecte seu negócio.', secondary: 'Mantenha o controle.' },
    description:
      'API, webhooks e processamento em uma infraestrutura que conversa com os seus sistemas.',
    illustrationLabel: '01 / Seu ecossistema',
    illustration: 'Conexões da operação',
    eventsIllustration: 'API e entrega de eventos',
    events: {
      title: 'Cada evento, no contexto certo.',
      description:
        'Contratos documentados, permissões por escopo e histórico de entrega. Integre sem perder a rastreabilidade.',
      note: 'Métodos e parceiros disponíveis são definidos no escopo da sua operação.',
    },
  },
  reliability: {
    label: 'ESTRUTURA PARA EVOLUIR',
    heading: { primary: 'Cresça a operação.', secondary: 'Preserve o comando.' },
    description:
      'Pessoas, dados e responsabilidades no contexto certo, mesmo quando a sua base cresce.',
    illustration: 'Arquitetura da operação',
    items: {
      boundaries: {
        title: 'Fronteiras claras',
        description: 'Isolamento por tenant e permissões para cada papel.',
      },
      consistency: {
        title: 'Consistência financeira',
        description: 'Estados e tratamento de repetições para acompanhar cada pagamento.',
      },
      visibility: {
        title: 'Visibilidade operacional',
        description: 'Métricas, filas e registros para entender o que acontece.',
      },
    },
  },
  audience: {
    label: 'PARA O SEU MODELO DE NEGÓCIO',
    heading: {
      eyebrow: 'Para quem quer ir além',
      primary: 'Pagamentos como negócio.',
      secondary: 'Uma estrutura para cada ambição.',
    },
    items: {
      operators: {
        title: 'Sua fintech, do seu jeito.',
        description:
          'Para fundadores e operadores que querem lançar uma marca ou deixar para trás uma plataforma limitada.',
        image: 'Operação de pagamentos white label',
        cta: 'Desenhar minha fintech',
      },
      platforms: {
        title: 'Uma plataforma. Muitos negócios.',
        description:
          'Conecte sellers, condições comerciais e integrações ao ecossistema que você já construiu.',
        image: 'Plataforma e rede de sellers',
        cta: 'Conectar meu negócio',
      },
      creators: {
        title: 'Da oferta ao recebimento.',
        description:
          'Produtos digitais, checkout e acompanhamento da compra na mesma experiência de marca.',
        image: 'Oferta e experiência de compra',
        cta: 'Conhecer a plataforma',
      },
    },
  },
  onboarding: {
    label: 'DO PLANO À OPERAÇÃO',
    heading: {
      eyebrow: 'Começar com direção',
      primary: 'Seu próximo capítulo',
      secondary: 'começa com um escopo claro.',
      description:
        'Cada operação tem seu ponto de partida. A implantação conecta o que sua empresa quer construir ao que precisa funcionar.',
    },
    steps: {
      discovery: {
        title: 'Entender seu negócio',
        description:
          'Sua base, seus meios de pagamento e o que você quer controlar. Começamos pelas decisões que importam.',
      },
      design: {
        title: 'Desenhar a operação',
        description:
          'Definimos recursos, parceiros e responsabilidades. O escopo fica claro antes da configuração.',
      },
      validation: {
        title: 'Configurar e validar',
        description:
          'Identidade, acessos e integrações. Validamos os fluxos previstos com os parceiros habilitados.',
      },
      activation: {
        title: 'Preparar a ativação',
        description:
          'Alinhamos critérios de entrada e acompanhamento. O próximo passo tem responsáveis definidos.',
      },
    },
    note: 'Escopo, investimento e prazo são definidos conforme integrações e requisitos da sua operação.',
  },
  questions: {
    label: 'ANTES DE COMEÇARMOS',
    heading: {
      eyebrow: 'Perguntas frequentes',
      primary: 'Clareza antes',
      secondary: 'do próximo passo.',
      description: 'O que vale entender para desenhar',
      continuation: 'sua operação com a Paragan.',
    },
    items: {
      eligibility: {
        question: 'A Paragan é para quem quer operar um gateway?',
        answer:
          'Sim. A Paragan é uma infraestrutura white label para empresas que querem construir ou modernizar uma operação de pagamentos sob sua marca. Você administra seu gateway e oferece aos seus sellers uma experiência própria de venda e gestão.',
      },
      customization: {
        question: 'O que posso personalizar e controlar?',
        answer:
          'Identidade visual, temas, domínios configurados, condições comerciais, gestão de sellers e permissões da equipe. O gateway também organiza configurações de adquirência, reservas e fluxos de saque dentro do escopo contratado e das capacidades dos parceiros.',
      },
      methods: {
        question: 'Quais meios de pagamento posso oferecer?',
        answer:
          'O fluxo contempla cartão, Pix e boleto conforme os processadores e configurações habilitados. A disponibilidade de cada meio, parcelamento e recorrência é confirmada no desenho da operação. A existência de um método no catálogo não substitui sua ativação com o parceiro.',
      },
      catalog: {
        question: 'O checkout inclui produtos e assinaturas?',
        answer:
          'Você pode organizar produtos, ofertas avulsas ou recorrentes, cupons e order bumps. As assinaturas dependem do meio e do provedor elegível. Para produtos digitais, há entrega com acesso autorizado aos conteúdos adquiridos; isso não equivale a uma plataforma de cursos completa.',
      },
      integration: {
        question: 'Posso integrar meus sistemas atuais?',
        answer:
          'A plataforma oferece API e webhooks para conectar processos externos. Na avaliação técnica, identificamos os fluxos necessários, as permissões e os parceiros envolvidos. Migração de dados, contratos e tokens exige análise específica.',
      },
      contracting: {
        question: 'Como funcionam a contratação e a implantação?',
        answer:
          'A primeira conversa serve para entender seu modelo, recursos prioritários e integrações. A partir disso, são definidos escopo, composição comercial, responsabilidades e critérios de ativação. O prazo acompanha esses requisitos, sem uma promessa genérica para todas as operações.',
      },
    },
  },
  inquiry: {
    label: 'VAMOS CONSTRUIR O PRÓXIMO CAPÍTULO',
    heading: {
      eyebrow: 'Seu negócio, com mais possibilidades',
      primary: 'A próxima operação',
      secondary: 'pode levar a sua marca.',
      description:
        'Conte o que você quer construir, o que já existe e o que precisa evoluir. O ponto de partida é o seu negócio.',
    },
    perspectives: {
      model: { title: 'Seu modelo', description: 'O que sua operação quer construir e controlar.' },
      experience: {
        title: 'Sua experiência',
        description: 'Como sua marca se conecta aos sellers e aos clientes.',
      },
      nextStep: {
        title: 'Seu próximo passo',
        description: 'Recursos, integrações e prioridades para começar.',
      },
    },
    form: {
      eyebrow: 'Primeiro, seu contexto',
      title: 'Vamos entender sua operação.',
      description:
        'Da primeira ideia à operação em crescimento: conte seu momento e o que você quer construir.',
      optional: '(opcional)',
      submit: 'PREPARAR CONVERSA',
    },
    fields: {
      name: { label: 'Seu nome', placeholder: 'Como podemos chamar você?' },
      company: {
        label: 'Nome da empresa ou projeto',
        placeholder: 'Sua empresa, marca ou ideia em construção',
      },
      email: { label: 'E-mail profissional', placeholder: 'voce@empresa.com.br' },
      phone: { label: 'Telefone / WhatsApp', placeholder: '+55 (11) 99999-9999' },
      role: { label: 'Seu cargo ou papel no projeto', placeholder: 'Selecione seu cargo ou papel' },
      website: { label: 'Site da empresa ou projeto', placeholder: 'https://suaempresa.com.br' },
      interests: {
        label: 'No que você tem interesse?',
        hint: 'Selecione tudo o que faz sentido para o seu próximo passo.',
      },
      source: {
        label: 'Onde você conheceu a Paragan?',
        placeholder: 'Selecione onde nos conheceu',
      },
      message: {
        label: 'Conte um pouco sobre o que você quer construir',
        placeholder:
          'Qual é a sua ideia ou operação? Conte quem você quer atender, o que precisa resolver e quando gostaria de começar.',
        hint: 'Ainda está na fase de ideia? Ótimo. Compartilhe seu objetivo e o que precisa funcionar primeiro.',
      },
    },
    interests: {
      launch: 'Lançar meu gateway',
      planning: 'Planejar operação',
      migration: 'Migrar minha infra',
      future: 'Avaliar para um projeto futuro',
      discovery: 'Conhecer mais antes de decidir',
      partnership: 'Explorar uma parceria',
    },
    roles: {
      founder: 'CEO / Fundador(a)',
      technology: 'CTO / Liderança de tecnologia',
      designer: 'Designer',
      developer: 'Developer / Desenvolvedor(a)',
      creator: 'Idealizador(a) do projeto',
      product: 'Produto / Estratégia',
      operations: 'Financeiro / Operações',
      commercial: 'Comercial / Parcerias',
      other: 'Outro cargo ou papel',
    },
    sources: {
      referral: 'Indicação',
      search: 'Google / Busca',
      linkedin: 'LinkedIn',
      instagram: 'Instagram',
      github: 'GitHub',
      community: 'Evento / Comunidade',
      other: 'Outro canal',
    },
    brief: {
      template:
        'Minha operação com a Paragan\n\nNome: {name}\nEmpresa ou projeto: {company}\nCargo ou papel: {role}\nE-mail: {email}\nTelefone / WhatsApp: {phone}\nSite: {website}\nInteresses: {interests}\nComo conheci a Paragan: {source}\n\nSobre meu projeto:\n{message}',
      missingWebsite: 'Ainda não informado',
      missingInterests: 'Quero explorar as possibilidades',
      separator: ', ',
      region: 'Resumo da conversa',
      ready: 'Seu resumo está pronto. Você decide quando compartilhar.',
      label: 'Resumo para copiar',
      copy: 'Copiar resumo',
      copied: 'Resumo copiado. Nenhum dado foi enviado.',
      failed: 'Não foi possível copiar automaticamente. Selecione o resumo abaixo para copiar.',
    },
  },
  artwork: {
    loading: 'Carregando animação',
    failed: 'Não foi possível carregar a animação.',
    clover: {
      halftone: 'Trevo Paragan animado em halftone',
      dots: 'Trevo Paragan animado em pontos halftone',
      pixels: 'Trevo Paragan animado em pixels',
      ascii: 'Trevo Paragan animado em caracteres ASCII',
    },
    shark: 'Shark',
    interactive: 'Paragan em pontos interativos',
    defaults: {
      ascii: 'Animação em caracteres ASCII',
      pixels: 'Animação em pixels',
      halftone: 'Animação halftone em pontos',
    },
  },
};

export default messages;
