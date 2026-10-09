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
    plans: 'Contratação',
    signIn: 'Entrar',
  },
  navigation: {
    platform: {
      title: 'Plataforma',
      intro: 'Uma operação completa, com a sua marca.',
      items: {
        gateway: {
          title: 'Visão geral da plataforma',
          description: 'Identidade e condições comerciais da sua operação.',
        },
        checkout: { title: 'Checkout', description: 'Da oferta à experiência de pagamento.' },
        sellers: {
           title: 'Gestão da operação e sellers',
          description: 'Sua base, seus papéis e suas permissões.',
        },
        finance: { title: 'Financeiro', description: 'Receitas, custos, saldos e reservas.' },
        acquiring: {
          title: 'Multiadquirência',
          description: 'Processadores e regras de roteamento.',
        },
        conditions: { title: 'Condições comerciais', description: 'Taxas, comissões e condições por seller.' },
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
        structure: { title: 'Estrutura e confiança operacional', description: 'Isolamento, registros e sustentação da operação.' },
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
        items: { overview: 'Visão geral', operations: 'Gestão da operação', checkout: 'Checkout', finance: 'Gestão financeira', integrations: 'Integrações' },
      },
      developers: {
        title: 'Desenvolvedores',
        items: {
          documentation: 'Documentação',
          api: 'API',
          webhooks: 'Webhooks',
          resources: 'Recursos técnicos',
        },
      },
      company: {
        title: 'Empresa e atendimento',
        items: {
          about: 'Nosso modelo de excelência',
          onboarding: 'Contratação e implantação',
          questions: 'Perguntas frequentes',
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
  structure: {
    demo: 'Ambiente demonstrativo · dados fictícios',
    pending: 'Informações em preparação. Consulte a equipe para avaliar sua operação.',
    details: 'Avaliar detalhes',
    technical: 'Avaliação técnica',
    preview: 'Prévia da plataforma',
    scenarios: {
      title: 'Cenários de contratação',
      description: 'Cada operação tem seu ponto de partida. Identifique o cenário que corresponde ao seu projeto.',
      items: {
        launch: { label: 'Lançamento', title: 'Lançamento de uma operação', description: 'Para fundadores e operadores que querem lançar uma operação de pagamentos sob sua marca.', scope: ['Identidade e configuração da operação', 'Base de sellers e condições comerciais', 'Métodos e parceiros habilitados'], requirement: 'Requisito inicial: definir o modelo e os fluxos previstos.', cta: 'Avaliar lançamento' },
        migration: { label: 'Migração', title: 'Migração de uma operação existente', description: 'Para quem quer deixar para trás uma plataforma limitada e evoluir a operação existente.', scope: ['Diagnóstico da plataforma de origem', 'Escopo de dados e integrações', 'Validação da transição'], requirement: 'Requisito inicial: mapear a operação atual e as dependências.', cta: 'Avaliar migração' },
        platforms: { label: 'Incorporação', title: 'Incorporação a uma plataforma', description: 'Conecte sellers, condições comerciais e integrações ao ecossistema que você já construiu.', scope: ['Fluxos de pagamento da plataforma', 'API e webhooks', 'Experiência dos sellers e compradores'], requirement: 'Requisito inicial: identificar os sistemas e fluxos a conectar.', cta: 'Avaliar incorporação' },
      },
      roles: [
        { title: 'Paragan', description: 'Base de produto e sustentação da plataforma para a empresa contratante.' },
        { title: 'Empresa contratante / operador', description: 'Conduz a operação, configura condições e administra sua base de sellers.' },
        { title: 'Sellers', description: 'Organizam ofertas e acompanham vendas e recebimentos dos compradores.' },
        { title: 'Compradores', description: 'Acessam a oferta, realizam o pagamento e acompanham a compra.' },
      ],
    },
    operation: {
      title: 'Controle da operação e modelo comercial',
      description: 'Sua marca, suas regras e seu jeito de operar. Diferentes perspectivas do mesmo negócio, com você no centro das decisões.',
      identity: 'Identidade da operação', identityItems: ['Painel', 'Checkout', 'Domínio', 'Comunicação'],
      terms: 'Condições comerciais', termsItems: ['Condições por seller', 'Taxas e comissões', 'Configurações padrão e exceções suportadas'],
      governance: 'Governança da base e da equipe', governanceItems: ['Gestão de sellers', 'Papéis e permissões', 'Carteiras e responsabilidades', 'Histórico de decisões'],
      task: 'Configuração das condições de um seller',
      caption: 'Condições comerciais e decisões operacionais no contexto da sua base.',
      complementary: 'Recursos complementares de relacionamento',
      engagement: [
        { title: 'Campanhas', description: 'Conecte o relacionamento com a base à sua estratégia comercial.' },
        { title: 'Rankings', description: 'Organize o acompanhamento da base no contexto das campanhas.' },
        { title: 'Premiações', description: 'Estruture reconhecimento para seus sellers conforme os recursos previstos.' },
      ],
    },
    finance: {
      title: 'Gestão financeira', description: 'Volume não é resultado. Enxergue taxas, receitas, reservas e recebimentos na mesma operação.',
      example: 'Exemplo demonstrativo · composição de uma cobrança',
      caption: 'Receita, taxas, saldos e reservas no mesmo contexto.',
      composition: 'Composição do exemplo',
      fields: [
        { label: 'Valor da cobrança', value: 'R$ 100,00' },
        { label: 'Taxas de processamento', value: 'R$ 3,00' },
        { label: 'Receita da operação', value: 'R$ 2,00' },
        { label: 'Destinado ao seller', value: 'R$ 95,00, incluindo a reserva abaixo' },
        { label: 'Reserva do seller', value: 'R$ 5,00, parte dos R$ 95,00' },
        { label: 'Saldo pendente do seller', value: 'R$ 90,00' },
        { label: 'Disponibilidade', value: 'Previsão conforme o processamento e a liquidação' },
      ],
      note: 'Exemplo fictício: taxas de R$ 3,00 + receita de R$ 2,00 + saldo pendente de R$ 90,00 + reserva de R$ 5,00 = cobrança de R$ 100,00. Não representa condições comerciais contratadas.',
      dependency: 'A disponibilidade depende dos métodos, parceiros e condições de liquidação habilitados.',
      modules: ['Receita e custos', 'Disponibilidade', 'Movimentações'],
      items: [['Custos de adquirência', 'Condições comerciais e comissões', 'Visão por competência'], ['Disponível', 'Pendente', 'Reservado'], ['Extratos', 'Estornos', 'Solicitações de saque']],
      cta: 'Avaliar gestão financeira',
    },
    checkout: {
      title: 'Experiência dos sellers e compradores',
      description: 'Produtos, ofertas, cupons e order bumps conectados a um checkout com a sua identidade. Mais recursos para vender. Mais contexto para acompanhar.',
      desktop: 'Compra demonstrativa · desktop', mobile: 'Mesma compra · mobile',
      caption: 'Da oferta à confirmação e ao acesso: duas visualizações do mesmo cenário de compra.',
      steps: [
        { title: 'Oferta', description: 'Crie produtos e ofertas avulsas ou recorrentes. Compartilhe links por oferta e organize seu catálogo.', items: ['Produtos e ofertas', 'Links por oferta'] },
        { title: 'Checkout', description: 'Ajuste aparência, cupons e produtos adicionais para apresentar sua oferta com clareza.', items: ['Personalização', 'Cupons e adicionais', 'Métodos habilitados'] },
        { title: 'Confirmação', description: 'Acompanhe pedidos e confirmação do pagamento.', items: ['Pedido', 'Status de pagamento'] },
        { title: 'Entrega e acesso', description: 'Na entrega digital, conecte a compra ao acesso autorizado.', items: ['Acesso ao conteúdo adquirido', 'Escopo de entrega definido na contratação'] },
      ],
      recurrence: { title: 'Recorrência', description: 'Organize produtos e ofertas recorrentes.', items: ['Disponibilidade conforme método e provedor elegíveis', 'Habilitação confirmada no desenho da operação'] },
      split: { title: 'Split', description: 'Organize a distribuição dos valores no contexto da operação.', items: ['Participantes e configurações avaliados no escopo', 'Disponibilidade conforme parceiro e habilitação'] },
    },
    integrations: {
      title: 'Adquirência e integrações', description: 'API, webhooks e processamento em uma infraestrutura que conversa com os seus sistemas.',
      processing: 'Processamento financeiro', controls: ['Processadores e prioridades', 'Regras de pagamento', 'Métodos e parceiros habilitados'],
      contracts: 'Contratos e credenciais são avaliados com os parceiros envolvidos. Não compartilhe credenciais neste formulário.',
      activation: 'A disponibilidade de cada capacidade depende da habilitação da operação.',
      catalog: 'Catálogo de capacidades', catalogNote: 'Matriz em preparação: os provedores e as capacidades habilitáveis serão confirmados na avaliação técnica.',
      fields: [
        { label: 'Provedor', value: 'A confirmar na avaliação' },
        { label: 'Métodos suportados', value: 'Conforme provedor e habilitação' },
        { label: 'Recursos disponíveis', value: 'Conforme escopo da integração' },
        { label: 'Estágio da integração', value: 'Não publicado neste catálogo' },
        { label: 'Requisitos de habilitação', value: 'Contratos, credenciais e validação com o parceiro' },
      ],
      api: { title: 'API', description: 'Contratos documentados e permissões por escopo para conectar seus sistemas.', items: ['Pagamentos e pedidos', 'Sellers e condições', 'Consultas financeiras conforme escopo'], preview: 'Prévia de referência da API · conteúdo em preparação', link: 'Solicitar referência completa' },
      webhooks: { title: 'Webhooks', description: 'Consulte o histórico de entrega dos eventos para acompanhar o que acontece em cada conexão.', items: ['Eventos de pagamentos e pedidos', 'Eventos financeiros conforme escopo', 'Histórico de entrega'], preview: 'Prévia demonstrativa de histórico de entrega', link: 'Avaliar eventos e entregas' },
      documentation: 'Documentação · solicitar acesso', cta: 'Avaliar integração específica',
    },
    trust: {
      title: 'Confiança operacional', description: 'Pessoas, dados e responsabilidades no contexto certo, mesmo quando a sua base cresce.',
      pillars: [
        { title: 'Separação entre operações', description: 'Isolamento por tenant e permissões para cada papel.', detail: 'Modelo de isolamento e acesso avaliado na documentação técnica.' },
        { title: 'Integridade financeira', description: 'Estados e tratamento de repetições para acompanhar cada pagamento.', detail: 'Consistência e rastreabilidade dos registros no contexto da operação.' },
        { title: 'Diagnóstico e recuperação', description: 'Métricas, filas e registros para entender o que acontece.', detail: 'Procedimentos de acompanhamento e continuidade definidos no escopo.' },
        { title: 'Sustentação', description: 'Manutenção, atendimento e responsabilidades da operação.', detail: 'Condições e responsáveis confirmados na contratação.' },
      ],
      library: 'Biblioteca de evidências',
      resources: {
        documentation: { type: 'Documentação', title: 'Guias e referências técnicas', description: 'Solicite os recursos disponíveis para avaliação.' },
        sandbox: { type: 'Sandbox', title: 'Ambiente de avaliação', description: 'Disponibilidade e acesso a confirmar com a equipe.' },
        demonstrations: { type: 'Demonstrações', title: 'Prévias do produto', description: 'Conheça as perspectivas de operação, seller e checkout.' },
        reports: { type: 'Relatórios técnicos', title: 'Materiais publicáveis', description: 'Publicação e versão a confirmar; nenhum relatório publicado aqui.' },
        operations: { type: 'Informações operacionais', title: 'Condições de sustentação', description: 'Avalie responsabilidades e condições para a sua operação.' },
      },
      responsible: 'Responsáveis pela operação', company: 'Paragan', team: 'Equipe Paragan · identificação dos responsáveis a confirmar na avaliação.', role: 'Manutenção do produto e avaliação técnica do escopo.',
      references: 'Referências institucionais', referencesNote: 'Referências verificáveis serão apresentadas quando disponíveis. Não há declaração de certificação ou parceria neste bloco.',
    },
    onboarding: {
      title: 'Contratação, implantação e migração', description: 'Cada operação tem seu ponto de partida. A implantação conecta o que sua empresa quer construir ao que precisa funcionar.',
      delivery: [
        { title: 'Base de produto', description: 'Uma estrutura conectada para conduzir a operação.', items: ['Gateway e gestão de sellers', 'Financeiro', 'Checkout, API e webhooks conforme escopo'] },
        { title: 'Configurações incluídas', description: 'Identidade, acessos e fluxos previstos na contratação.', items: ['Marca e superfícies configuradas', 'Condições comerciais', 'Papéis e permissões'] },
        { title: 'Opcionais e dependências externas', description: 'Recursos e parceiros avaliados para cada operação.', items: ['Integrações específicas', 'Migração de dados e tokens quando elegíveis', 'Habilitações e contratos com parceiros'] },
      ],
      commercial: 'Composição comercial',
      fields: [
        { label: 'Item de contratação', value: 'Produto, implantação e opcionais conforme proposta' },
        { label: 'O que abrange', value: 'Recursos, configurações e serviços definidos no escopo' },
        { label: 'Composição do custo', value: 'A definir na proposta comercial' },
        { label: 'Responsável pela cobrança', value: 'Conforme item e contrato com Paragan ou parceiro' },
        { label: 'Informação complementar', value: 'Custos externos e dependências identificados na avaliação' },
      ],
      pathsLabel: 'Caminhos de implantação', activation: 'Ativação de uma operação', migration: 'Migração de uma operação existente',
      owner: 'Responsável', completion: 'Condição de conclusão',
      paths: {
        activation: [
          { title: 'Configuração', delivery: 'Identidade, acessos e condições da operação.', owner: 'Paragan e operador', completion: 'Configurações do escopo revisadas.' },
          { title: 'Habilitações', delivery: 'Métodos e integrações elegíveis.', owner: 'Operador, Paragan e parceiros', completion: 'Requisitos de habilitação atendidos.' },
          { title: 'Validação', delivery: 'Validação dos fluxos previstos.', owner: 'Paragan e operador', completion: 'Critérios de aceite do escopo atendidos.' },
          { title: 'Ativação', delivery: 'Entrada da operação nos fluxos habilitados.', owner: 'Operador e Paragan', completion: 'Ativação acordada e executada.' },
          { title: 'Acompanhamento', delivery: 'Acompanhamento inicial da operação.', owner: 'Paragan e operador', completion: 'Rotina de acompanhamento alinhada.' },
        ],
        migration: [
          { title: 'Diagnóstico de origem', delivery: 'Inventário de dados, fluxos e dependências.', owner: 'Operador e Paragan', completion: 'Origem e restrições identificadas.' },
          { title: 'Definição do escopo de migração', delivery: 'Dados e integrações elegíveis para transição.', owner: 'Operador, Paragan e parceiros', completion: 'Escopo e responsabilidades acordados.' },
          { title: 'Ensaio', delivery: 'Validação do caminho de migração previsto.', owner: 'Paragan e operador', completion: 'Critérios do ensaio atendidos.' },
          { title: 'Transição', delivery: 'Execução da transição acordada.', owner: 'Operador, Paragan e parceiros', completion: 'Critérios de transição confirmados.' },
          { title: 'Acompanhamento', delivery: 'Acompanhamento após a transição.', owner: 'Paragan e operador', completion: 'Rotina posterior alinhada.' },
        ],
      },
      after: [
        { title: 'Treinamento', description: 'Orientação da equipe conforme o escopo contratado.' },
        { title: 'Manutenção e atualizações', description: 'Condições de evolução e manutenção definidas na contratação.' },
        { title: 'Suporte', description: 'Canais, responsabilidades e condições acordados para a operação.' },
      ],
      cta: 'Avaliar implantação',
    },
    faq: {
      title: 'Perguntas frequentes', description: 'O que vale entender para desenhar sua operação com a Paragan.',
      items: [
        { question: 'Como funcionam o licenciamento e a customização?', answer: 'Identidade visual, temas, domínios configurados, condições comerciais, gestão de sellers e permissões da equipe são avaliados no escopo contratado.', condition: 'As condições de licenciamento e os limites de customização são definidos na proposta.' },
        { question: 'Quem cuida dos contratos e das credenciais dos parceiros?', answer: 'A disponibilidade dos métodos depende dos processadores e das configurações habilitados.', condition: 'Responsabilidades, contratos e habilitações são confirmados com os parceiros na avaliação da operação.' },
        { question: 'É possível migrar dados e tokens?', answer: 'Migração de dados, contratos e tokens exige análise específica.', condition: 'Elegibilidade, restrições da origem e participação dos parceiros são avaliadas antes de definir a transição.' },
        { question: 'Como funcionam as atualizações e a manutenção?', answer: 'As condições de manutenção e evolução do produto são definidas na contratação.', condition: 'Detalhamento a confirmar com a equipe para o seu escopo.' },
        { question: 'Quais são as responsabilidades e as condições de suporte?', answer: 'Recursos, parceiros e responsabilidades são definidos antes da configuração.', condition: 'Canais e condições de atendimento são acordados na contratação; não há SLA universal declarado aqui.' },
        { question: 'Como funcionam a exportação de dados e o encerramento?', answer: 'Condições de exportação e encerramento devem ser avaliadas no contrato.', condition: 'Formatos, escopo, responsabilidades e procedimentos a confirmar na avaliação comercial.' },
        { question: 'Como os custos são compostos?', answer: 'A primeira conversa serve para entender seu modelo, recursos prioritários e integrações. A partir disso, são definidos escopo e composição comercial.', condition: 'Investimento e custos de parceiros dependem dos requisitos da operação.' },
        { question: 'Qual é o escopo da entrega digital?', answer: 'Para produtos digitais, há entrega com acesso autorizado aos conteúdos adquiridos; isso não equivale a uma plataforma de cursos completa.', condition: 'Recursos e configurações da entrega são confirmados no escopo contratado.' },
      ],
      cta: 'Avaliar uma dúvida da operação',
    },
    contact: {
      title: 'Contato e qualificação', description: 'Conte o que você quer construir, o que já existe e o que precisa evoluir. O ponto de partida é o seu negócio.',
      points: ['Aderência da operação', 'Escopo e integrações', 'Próximos passos'],
      returnNote: 'Escolha o canal pelo qual prefere conversar com a equipe. O prazo de retorno será alinhado no contato.',
      channel: 'Canal preferido', email: 'E-mail', whatsapp: 'WhatsApp', scenario: 'Cenário', selectScenario: 'Selecione seu cenário', message: 'Contexto adicional (opcional)',
      origin: 'Seção de origem', qualification: 'Qualificação complementar (opcional)',
      extra: { platform: 'Plataforma de origem', sellers: 'Base de sellers', volume: 'Volume atual', integrations: 'Integrações necessárias', role: 'Papel no projeto', timing: 'Momento pretendido para implantação' },
      privacy: 'Este formulário prepara um resumo local. Nenhum dado é enviado automaticamente ou salvo pela página. Não inclua credenciais nem dados sensíveis.',
      submit: 'Preparar contato', invalid: 'Revise este campo antes de continuar.', phoneError: 'Informe um WhatsApp válido com DDD e, se necessário, código do país.',
      ready: 'Resumo preparado. Ainda não foi enviado à Paragan.', next: 'Copie o resumo e compartilhe pelo canal comercial disponível para iniciar a avaliação.', channelSummary: 'Canal de retorno preferido', copy: 'Copiar resumo', copied: 'Resumo copiado. Nenhum dado foi enviado.', copyError: 'Não foi possível copiar. Selecione o resumo para copiar manualmente.',
      whatsappAction: 'Abrir conversa no WhatsApp', noEmail: 'O endereço comercial de e-mail será confirmado pela equipe; use o canal disponível para iniciar o contato.',
      brief: 'Nome: {name}\nEmpresa ou projeto: {company}\nCanal preferido: {channel}\nContato: {contact}\nCenário: {scenario}\nOrigem: {origin}\n\nContexto:\n{message}\n\nInformações complementares:\n{extra}',
      none: 'Não informado', summary: 'Resumo do contato',
    },
    footer: { company: 'Paragan · identificação jurídica a confirmar na avaliação comercial.', contact: 'Contato comercial', social: 'Redes sociais', },
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
