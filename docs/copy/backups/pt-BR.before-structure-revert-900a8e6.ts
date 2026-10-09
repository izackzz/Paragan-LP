// Keys describe content roles and entities, never the wording or section position.
const messages = {
  brand: {
    home: 'Paragan — início',
    signature: 'PARAGAN / WHITE LABEL',
    copyright: '© {year} Paragan',
    promise: 'Plataforma white-label para operar pagamentos.',
    supportingPromise: 'Gateway, sellers e vendas sob sua marca.',
  },
  metadata: {
    title: 'Paragan — Plataforma white-label para operações de pagamentos',
    description:
      'Lance, migre ou incorpore uma operação de pagamentos com uma plataforma pronta: gestão de sellers, condições comerciais, financeiro e checkout sob sua marca.',
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
    contact: 'Avaliar minha operação',
    consult: 'Avaliar minha operação',
    demo: 'Solicitar demonstração',
    explore: 'Avaliar minhas configurações',
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
      intro: 'Conheça o produto e as decisões que você pode administrar.',
      items: {
        gateway: {
          title: 'Visão geral da plataforma',
          description: 'Gateway, gestão de sellers e experiência de venda.',
        },
        sellers: {
          title: 'Gestão da operação e sellers',
          description: 'Cadastros, carteiras e permissões da equipe.',
        },
        conditions: {
          title: 'Condições comerciais',
          description: 'Taxas, comissões e condições por seller.',
        },
        finance: {
          title: 'Gestão financeira',
          description: 'Receitas, custos, saldos e reservas.',
        },
        checkout: {
          title: 'Checkout e experiência de venda',
          description: 'Da oferta à experiência de pagamento.',
        },
        acquiring: {
          title: 'Multiadquirência e integrações',
          description: 'Métodos, rotas elegíveis e conexão com sistemas.',
        },
      },
    },
    solutions: {
      title: 'Soluções',
      intro: 'Escolha o ponto de partida da sua contratação.',
      items: {
        launch: {
          title: 'Lançamento de uma operação',
          description: 'Comece com uma base de produto pronta para configurar.',
        },
        migration: {
          title: 'Migração de uma operação existente',
          description: 'Avalie dados, contratos e requisitos de transição.',
        },
        platforms: {
          title: 'Incorporação de pagamentos a uma plataforma',
          description: 'Adicione pagamentos aos processos da sua plataforma.',
        },
      },
    },
    developers: {
      title: 'Desenvolvedores',
      intro: 'Identifique os recursos técnicos necessários à sua integração.',
      items: {
        documentation: {
          title: 'Documentação',
          description: 'Solicite guias para avaliar a implementação.',
        },
        api: {
          title: 'Referência da API',
          description: 'Recursos, contratos e permissões de acesso.',
        },
        webhooks: { title: 'Webhooks', description: 'Eventos e acompanhamento das entregas.' },
        integrations: {
          title: 'Catálogo de integrações',
          description: 'Avalie provedores, métodos e requisitos de habilitação.',
        },
      },
    },
    company: {
      title: 'Empresa',
      intro: 'Conheça a Paragan e avalie como a operação é sustentada.',
      items: {
        about: {
          title: 'Sobre a Paragan',
          description: 'Produto e equipe responsáveis pela plataforma.',
        },
        structure: {
          title: 'Estrutura e confiança operacional',
          description: 'Isolamento, registros e sustentação da operação.',
        },
        partners: { title: 'Parceiros', description: 'Vínculos e escopos sujeitos a confirmação.' },
        contact: { title: 'Contato', description: 'Avalie aderência, integrações e implantação.' },
      },
    },
  },
  footer: {
    eyebrow: 'Paragan / Plataforma white-label',
    tagline: 'Produto, configuração e implantação para sua operação.',
    groups: {
      platform: {
        title: 'Plataforma',
        items: {
          overview: 'Visão geral',
          operations: 'Gestão da operação',
          finance: 'Gestão financeira',
          checkout: 'Checkout',
          integrations: 'Integrações',
        },
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
          about: 'Sobre a Paragan',
          onboarding: 'Contratação e implantação',
          questions: 'Perguntas frequentes',
          contact: 'Contato',
        },
      },
    },
    social: {
      instagram: 'Instagram',
      twitter: 'X (Twitter)',
      telegram: 'Telegram',
      whatsapp: 'WhatsApp',
    },
  },
  introduction: {
    eyebrow: 'Plataforma de pagamentos white-label',
    heading: {
      primary: 'Sua operação de pagamentos.',
      secondary: 'Uma plataforma pronta, com sua marca.',
    },
    description:
      'Para empresas que querem lançar, migrar ou incorporar pagamentos: receba uma base pronta de gateway, gestão de sellers e vendas. Configure a operação e defina a implantação com a Paragan.',
    supporting: {
      primary:
        'Você administra sellers, condições comerciais e informações financeiras. Sua base organiza ofertas e acompanha vendas em um checkout conectado à operação.',
      emphasis: 'Recursos e integrações definidos no escopo contratado.',
    },
    previewLabel: 'O QUE COMPÕE A PLATAFORMA',
    attributes: {
      branding: 'White-label',
      tenancy: 'Operações separadas por tenant',
      acquiring: 'Multiadquirência',
      connectivity: 'API + Webhooks',
    },
    previews: {
      gateway: {
        label: 'Seu gateway',
        eyebrow: 'OPERAÇÃO',
        description: 'Administração de sellers e condições.',
        image: 'Painel do operador · captura a produzir',
        alt: 'Painel do operador com base de sellers, status de cadastro e visão financeira da operação demonstrativa.',
        caption:
          'A perspectiva do operador reúne a base de sellers, os cadastros em revisão e as informações financeiras disponíveis.',
      },
      seller: {
        label: 'Seus sellers',
        eyebrow: 'GESTÃO DE BASE',
        description: 'Ofertas, vendas e recebimentos da base.',
        image: 'Área do seller · captura a produzir',
        alt: 'Área de um seller com lista de vendas, estados dos pedidos e saldos demonstrativos.',
        caption:
          'Na área do seller, sua base acompanha as próprias vendas, o estado dos pedidos e os recebimentos.',
      },
      checkout: {
        label: 'Seu checkout',
        eyebrow: 'PAGAMENTO',
        description: 'Pagamento da oferta pelo comprador.',
        image: 'Checkout de uma oferta · captura a produzir',
        alt: 'Checkout de uma oferta demonstrativa com identificação do produto, resumo da compra e métodos de pagamento habilitados.',
        caption:
          'O comprador encontra a oferta, o resumo da compra e os meios habilitados no checkout da sua operação.',
      },
    },
  },
  structure: {
    demo: 'Espaço reservado à captura · exemplo fictício',
    pending: 'Solicite à equipe o material correspondente ao fluxo que você quer avaliar.',
    details: 'Consultar requisitos',
    technical: 'Solicitar avaliação técnica',
    preview: 'Solicitar demonstração',
    scenarios: {
      label: 'Seu ponto de partida',
      title: 'Três caminhos para contratar a mesma base',
      description:
        'O produto é o mesmo; os requisitos de entrada mudam. Identifique se sua empresa quer começar uma operação, avaliar uma migração ou conectar pagamentos a uma plataforma existente.',
      items: {
        launch: {
          label: 'Lançamento',
          title: 'Coloque sua operação em funcionamento',
          description:
            'Comece com gateway, gestão de sellers e checkout existentes. A avaliação define as configurações, os parceiros e os fluxos necessários para iniciar sua operação.',
          scope: [
            'Marca, domínios e acessos previstos',
            'Cadastro de sellers e condições comerciais',
            'Métodos e integrações a habilitar',
          ],
          requirement:
            'Para começar: informe quem sua operação atenderá e quais fluxos de pagamento precisa oferecer.',
          cta: 'Avaliar meu lançamento',
        },
        migration: {
          label: 'Migração',
          title: 'Avalie a troca de infraestrutura',
          description:
            'Sua empresa já opera pagamentos. Analise o que pode ser transferido, quais integrações precisam continuar e como validar a transição para a Paragan.',
          scope: [
            'Dados e restrições da plataforma de origem',
            'Contratos, integrações e elegibilidade dos tokens',
            'Ensaio e critérios de transição',
          ],
          requirement:
            'Para começar: identifique a plataforma atual. A portabilidade de dados e tokens depende da origem e dos parceiros.',
          cta: 'Avaliar minha migração',
        },
        platforms: {
          label: 'Incorporação',
          title: 'Adicione pagamentos à sua plataforma',
          description:
            'Sua empresa já conecta produtos, serviços ou participantes. Avalie como incorporar pagamentos e gestão de sellers aos processos que já existem.',
          scope: [
            'Fluxos de cobrança e acompanhamento',
            'Conexões por API e webhooks',
            'Papéis dos sellers e experiência de compra',
          ],
          requirement:
            'Para começar: indique os sistemas envolvidos e os processos que precisam trocar informações com os pagamentos.',
          cta: 'Avaliar minha incorporação',
        },
      },
      roles: [
        {
          title: 'Paragan',
          description:
            'Fornece a plataforma e define com sua empresa a implantação e a sustentação contratadas.',
        },
        {
          title: 'Sua empresa / operador',
          description:
            'Contrata a Paragan, administra sellers e define as condições e responsabilidades da operação.',
        },
        {
          title: 'Sellers',
          description:
            'São os clientes da sua operação: organizam ofertas e acompanham vendas e recebimentos.',
        },
        {
          title: 'Compradores',
          description:
            'Pagam aos sellers pelo checkout e consultam a confirmação e o acesso à compra, quando aplicável.',
        },
      ],
    },
    operation: {
      label: 'Decisões dentro da operação',
      title: 'Defina condições e distribua responsabilidades na sua base',
      description:
        'Configure as superfícies da sua marca, as condições dos sellers e os acessos da equipe. Cada decisão tem um recurso correspondente no produto, com permissões e limites definidos para quem executa a tarefa.',
      identity: 'Sua identidade nas superfícies configuradas',
      identityItems: [
        'Painéis com identidade e tema da operação',
        'Checkout com apresentação configurada',
        'Domínios próprios mediante configuração de DNS e TLS',
        'E-mails transacionais com remetente verificado',
      ],
      terms: 'Condições comerciais por seller',
      termsItems: [
        'Taxas conforme seller e meio de pagamento',
        'Comissões fixas, percentuais ou híbridas',
        'Padrões da operação e exceções configuradas',
      ],
      governance: 'Cada tarefa com acesso delimitado',
      governanceItems: [
        'Cadastro, revisão e status de sellers',
        'Permissões para consultar e executar ações',
        'Carteiras atribuídas à equipe',
        'Histórico das decisões de cadastro',
      ],
      task: 'Configuração das condições de um seller',
      alt: 'Configuração comercial de um seller demonstrativo com condição aplicada, taxas, comissões e identificação do cadastro.',
      caption:
        'Na configuração comercial do seller, você consulta a condição aplicada e os parâmetros usados pela operação.',
      complementary: 'Campanhas e reconhecimento da sua base',
      engagement: [
        {
          title: 'Campanhas por período',
          description:
            'Organize campanhas de ranking com período e premiação definidos para os sellers da sua operação.',
        },
        {
          title: 'Posição e participação dos sellers',
          description:
            'Acompanhe a classificação na campanha e ofereça ao seller uma visão da própria posição, conforme a audiência configurada.',
        },
        {
          title: 'Premiações e níveis de reconhecimento',
          description:
            'Configure prêmios e acompanhe a jornada por faturamento acumulado. Campanhas e níveis são mecanismos distintos, habilitados pela operação.',
        },
      ],
    },
    finance: {
      label: 'Valores ao longo da operação',
      title: 'Diferencie receita, taxas e disponibilidade dos valores',
      description:
        'Consulte o que compõe os valores da operação e acompanhe os estados de saldo. Condições comerciais, custos registrados e reservas ajudam a interpretar os lançamentos; não são uma apuração de lucro líquido contábil.',
      example: 'Exemplo demonstrativo · composição de uma cobrança',
      alt: 'Composição ilustrativa de uma cobrança de R$ 100,00 com R$ 3,00 em taxas, R$ 2,00 de receita da operação, R$ 90,00 pendentes e R$ 5,00 reservados para o seller.',
      caption:
        'O exemplo separa a cobrança de R$ 100,00 em taxas, receita da operação e valores do seller, incluindo a parcela reservada.',
      composition: 'Composição do exemplo',
      fields: [
        { label: 'Valor da cobrança', value: 'R$ 100,00' },
        { label: 'Taxas de processamento', value: 'R$ 3,00' },
        { label: 'Receita da operação', value: 'R$ 2,00' },
        { label: 'Destinado ao seller', value: 'R$ 95,00, incluindo a reserva abaixo' },
        { label: 'Reserva do seller', value: 'R$ 5,00, parte dos R$ 95,00' },
        { label: 'Saldo pendente do seller', value: 'R$ 90,00' },
        {
          label: 'Disponibilidade',
          value:
            'Saldo pendente até cumprir as condições de liberação; a reserva segue regra própria',
        },
      ],
      note: 'Exemplo ilustrativo, não uma condição comercial: R$ 3,00 em taxas + R$ 2,00 de receita da operação + R$ 90,00 pendentes + R$ 5,00 reservados = R$ 100,00 cobrados. A reserva faz parte dos R$ 95,00 destinados ao seller.',
      dependency:
        'Previsão de disponibilidade não equivale a transferência concluída. Liberação e movimentação dependem das regras da operação e do processamento e liquidação dos parceiros habilitados.',
      modules: ['Receita e custos', 'Disponibilidade', 'Movimentações'],
      items: [
        [
          'Receita e taxas registradas',
          'Custos de adquirência disponíveis',
          'Comissões e condições aplicadas',
        ],
        [
          'Disponível: liberado no saldo operacional',
          'Pendente: aguardando condições de liberação',
          'Reservado: retido conforme regra da operação',
        ],
        [
          'Extrato de lançamentos e estornos',
          'Fila de solicitações de saque',
          'Aprovação ou recusa conforme permissão',
        ],
      ],
      cta: 'Solicitar demonstração financeira',
    },
    checkout: {
      label: 'Da oferta ao acesso',
      title: 'Ofereça à sua base uma jornada de venda conectada',
      description:
        'Seus sellers organizam produtos e ofertas, compartilham o checkout e acompanham pedidos. Você disponibiliza essa experiência à base, enquanto o comprador encontra a oferta, realiza o pagamento e consulta a confirmação.',
      desktop: 'Checkout desktop · captura a produzir',
      mobile: 'Mesmo checkout mobile · captura a produzir',
      desktopAlt:
        'Checkout desktop da oferta demonstrativa com produto, resumo da compra, cupom e método habilitado.',
      mobileAlt:
        'A mesma oferta demonstrativa em checkout mobile, com os mesmos itens e total da visualização desktop.',
      caption:
        'A mesma oferta é apresentada no desktop e no celular, com itens e totais equivalentes e os métodos habilitados para a compra.',
      steps: [
        {
          title: 'O seller organiza a oferta',
          description:
            'Sua base cadastra produtos e define ofertas avulsas ou recorrentes. Cada oferta pode ser compartilhada pelo link correspondente, conforme os recursos habilitados.',
          items: [
            'Catálogo por seller',
            'Preço e modalidade da oferta',
            'Link para compartilhar a compra',
          ],
        },
        {
          title: 'O comprador confere e paga',
          description:
            'O checkout apresenta produto, preço e resumo da compra. Aparência, cupons e ofertas adicionais são configurados dentro das opções disponíveis, sem pressupor um construtor livre de páginas.',
          items: [
            'Apresentação configurada por produto',
            'Cupons e ofertas adicionais',
            'Meios de pagamento habilitados',
          ],
        },
        {
          title: 'A venda mantém seu estado',
          description:
            'Seller e operador acompanham o pedido e o estado do pagamento nos acessos autorizados. A confirmação da compra depende do processamento, não apenas do retorno do navegador.',
          items: ['Pedido e estado do pagamento', 'Resumo e recibo da compra'],
        },
        {
          title: 'Conteúdo adquirido com acesso autorizado',
          description:
            'Na entrega digital do checkout próprio, o pagamento confirmado pode liberar os arquivos ou links previstos na oferta. Acesso a conteúdo não equivale a uma plataforma completa de cursos.',
          items: [
            'Entregáveis associados à oferta',
            'Acesso autorizado por compra',
            'Disponibilidade definida no escopo contratado',
          ],
        },
      ],
      recurrence: {
        title: 'Cobranças recorrentes com métodos elegíveis',
        description:
          'Ofereça à base ofertas recorrentes e acompanhamento de assinaturas, ciclos e tentativas de cobrança. A utilização depende do método e do provedor habilitados para esse fluxo.',
        items: [
          'Elegibilidade verificada por método e provedor',
          'Condições de renovação definidas para a operação',
        ],
      },
      split: {
        title: 'Distribuição entre participantes da operação',
        description:
          'Configure alocações por valores ou percentuais entre os participantes previstos. O registro da distribuição e a liquidação externa são etapas distintas; a execução depende do parceiro habilitado.',
        items: [
          'Participantes e regras previstos na contratação',
          'Valores ou percentuais conforme configuração',
          'Liquidação conforme capacidade do parceiro',
        ],
      },
    },
    integrations: {
      label: 'Compatibilidade antes da contratação',
      title: 'Verifique métodos, provedores e conexões com seus sistemas',
      description:
        'A experiência de pagamento depende das conexões habilitadas. Avalie os meios necessários, os parceiros envolvidos e os recursos da API e dos webhooks antes de definir a implantação.',
      processing: 'Regras para rotas elegíveis',
      controls: [
        'Processadores e ordem de prioridade',
        'Regras por método e parâmetros da transação',
        'Seleção entre configurações elegíveis',
      ],
      contracts:
        'O uso de contratos e credenciais próprios é avaliado por provedor. Ter uma conexão desenvolvida não substitui contratação, homologação ou habilitação comercial.',
      activation:
        'Métodos e recursos são confirmados para sua operação; não há disponibilidade universal entre provedores nem garantia de aprovação de pagamentos.',
      catalog: 'Conexões a avaliar para sua operação',
      catalogNote:
        'Os cards reservam espaço para apresentar cada conexão. Provedores, recursos e disponibilidade só serão listados após confirmação; os espaços abaixo não representam integrações ativas.',
      groups: {
        acquiring: 'Adquirentes e processamento',
        tools: 'Marketing, utilidades e plugins',
      },
      groupCta: { acquiring: 'Avaliar adquirência', tools: 'Avaliar ferramenta ou plugin' },
      slots: {
        acquiring: {
          title: 'Conexão de adquirência',
          description:
            'Espaço reservado para apresentar um provedor, seus métodos e requisitos de habilitação.',
          logo: 'Logo do adquirente',
          illustration: 'Ilustração da conexão de adquirência',
          alt: 'Espaço reservado à apresentação visual de uma conexão de adquirência.',
        },
        tools: {
          title: 'Ferramenta ou plugin externo',
          description:
            'Espaço reservado para apresentar uma ferramenta de marketing ou utilidade, sua função e requisitos de uso.',
          logo: 'Logo da ferramenta ou plugin',
          illustration: 'Ilustração da ferramenta ou plugin',
          alt: 'Espaço reservado à apresentação visual de uma ferramenta externa ou plugin.',
        },
      },
      fields: [
        { label: 'Provedor', value: 'Nome ainda não apresentado' },
        { label: 'Métodos ou função', value: 'Informações desta conexão a apresentar' },
        { label: 'Recursos', value: 'Escopo desta conexão a apresentar' },
        { label: 'Estágio', value: 'Disponibilidade não anunciada' },
        {
          label: 'Requisitos de habilitação',
          value: 'Requisitos específicos a confirmar',
        },
      ],
      api: {
        title: 'API para os processos da sua plataforma',
        description:
          'Integre recursos de pagamentos, sellers e consultas financeiras por contratos documentados. As permissões de acesso delimitam quais operações cada conexão pode consultar ou executar.',
        items: [
          'Pagamentos e pedidos',
          'Sellers e condições',
          'Consultas financeiras conforme escopo',
        ],
        preview: 'Referência da API · captura a produzir',
        caption:
          'O material solicitado deve mostrar o contrato da operação consultada, seus campos e as permissões necessárias.',
        alt: 'Espaço reservado a um trecho de documentação da API com contrato, campos e resposta de exemplo.',
        link: 'Solicitar referência completa',
      },
      webhooks: {
        title: 'Eventos com acompanhamento de entrega',
        description:
          'Conecte eventos da operação aos seus sistemas e consulte o histórico de entrega. Na avaliação técnica, verifique os eventos disponíveis, as permissões e os procedimentos documentados para investigar uma conexão.',
        items: [
          'Eventos de pagamentos e pedidos',
          'Eventos financeiros conforme escopo',
          'Histórico de entrega',
        ],
        preview: 'Histórico de webhooks · captura a produzir',
        caption:
          'O histórico relaciona o evento à tentativa de entrega e ao estado registrado para a conexão consultada.',
        alt: 'Histórico demonstrativo de entregas de webhook com evento, destino mascarado e estado das tentativas.',
        link: 'Solicitar referência de webhooks',
      },
      documentation: 'Solicitar documentação',
      cta: 'Avaliar integração específica',
    },
    trust: {
      label: 'Mecanismos que você pode examinar',
      title: 'Avalie a sustentação além da interface',
      description:
        'Uma operação exige separação de dados, registros consistentes e acompanhamento de falhas. Conheça os mecanismos documentados da plataforma e solicite os materiais necessários para avaliar o seu escopo.',
      pillars: [
        {
          title: 'Separação entre operações',
          description:
            'Dados e acessos são delimitados por operação e papel. Isso permite administrar sua base sem conceder à equipe acesso irrestrito a outras operações.',
          detail:
            'O modelo documentado usa separação por schema e permissões por escopo; não equivale a infraestrutura física exclusiva por cliente.',
        },
        {
          title: 'Integridade financeira',
          description:
            'Estados financeiros e tratamento de repetições ajudam a acompanhar operações críticas sem interpretar toda tentativa como uma nova transação.',
          detail:
            'Na avaliação técnica, examine idempotência, registros e tratamento de resultados ambíguos nos fluxos previstos para sua operação.',
        },
        {
          title: 'Diagnóstico e recuperação',
          description:
            'Métricas, filas e registros permitem investigar falhas e acompanhar tarefas assíncronas. Os procedimentos de recuperação precisam considerar o fluxo e os parceiros envolvidos.',
          detail:
            'Solicite o detalhamento dos recursos de diagnóstico e das responsabilidades de continuidade, sem presumir prazo de recuperação ou disponibilidade garantida.',
        },
        {
          title: 'Sustentação',
          description:
            'Implantação, manutenção e atendimento têm responsabilidades distintas. Sua contratação deve indicar quem configura, quem acompanha e como as demandas da operação serão tratadas.',
          detail:
            'Cobertura, canais e condições de suporte são definidos no acordo; não há atendimento dedicado ou SLA presumido.',
        },
      ],
      library: 'Materiais para sua avaliação técnica',
      resources: {
        documentation: {
          type: 'Documentação',
          title: 'Guias e referências técnicas',
          description:
            'Solicite os contratos e guias correspondentes aos recursos que pretende integrar. Confirme a versão do material com a equipe.',
        },
        sandbox: {
          type: 'Ambiente de avaliação',
          title: 'Ambiente de avaliação',
          description:
            'Consulte a possibilidade de avaliar seus fluxos em ambiente assistido. Este site não disponibiliza um sandbox público de acesso imediato.',
        },
        demonstrations: {
          type: 'Demonstração assistida',
          title: 'Tarefas do operador e da base',
          description:
            'Solicite uma apresentação dos controles comerciais, da área do seller e do checkout aplicáveis à sua avaliação.',
        },
        reports: {
          type: 'Relatórios técnicos',
          title: 'Contexto e metodologia de testes',
          description:
            'Pergunte quais relatórios estão disponíveis para consulta. Resultados de teste devem identificar ambiente, metodologia e limites da medição.',
        },
        operations: {
          type: 'Informações operacionais',
          title: 'Condições de sustentação',
          description:
            'Consulte as condições de manutenção, acompanhamento e atendimento propostas para a operação que sua empresa pretende contratar.',
        },
      },
      responsible: 'Produto e sustentação pela Paragan',
      company: 'Paragan',
      team: 'Equipe Paragan: desenvolvimento e manutenção da plataforma.',
      role: 'Na avaliação, identifique os responsáveis pela implantação e pelo atendimento previstos na contratação.',
      references: 'Referências institucionais',
      referencesNote:
        'Vínculo comercial, fornecedor de infraestrutura e certificação têm escopos diferentes. Solicite a identificação e a comprovação das referências relevantes à sua contratação.',
    },
    onboarding: {
      label: 'Da contratação à ativação',
      title: 'Comece com produto pronto e escopo definido',
      description:
        'A implantação configura a base existente para o seu cenário. Antes de ativar, defina os módulos contratados, as integrações, os critérios de validação e as responsabilidades da Paragan, da sua equipe e dos parceiros.',
      delivery: [
        {
          title: 'Uma base de produto existente',
          description:
            'Você contrata o uso de uma plataforma com recursos existentes. A proposta identifica os módulos disponibilizados, em vez de tratar toda a entrega como desenvolvimento sob medida.',
          items: [
            'Gateway e gestão de sellers',
            'Consulta financeira e acompanhamento de valores',
            'Checkout, API e webhooks conforme escopo',
          ],
        },
        {
          title: 'Configurações previstas na sua contratação',
          description:
            'A implantação aplica a identidade, os acessos e as condições da sua operação. As configurações incluídas e as tarefas da sua equipe ficam descritas na proposta.',
          items: [
            'Marca e domínios das superfícies contratadas',
            'Condições comerciais',
            'Papéis e permissões',
          ],
        },
        {
          title: 'Demandas adicionais e dependências externas',
          description:
            'Integrações específicas, customizações e migração são avaliadas separadamente. Contratos e habilitações de parceiros podem exigir participação da sua empresa e custos próprios.',
          items: [
            'Integrações específicas',
            'Migração de dados e tokens quando elegíveis',
            'Habilitações e contratos com parceiros',
          ],
        },
      ],
      commercial: 'Composição comercial',
      fields: [
        {
          label: 'Item de contratação',
          value: 'Uso da plataforma, implantação e demandas adicionais identificadas na proposta',
        },
        {
          label: 'O que abrange',
          value: 'Módulos, configurações, serviços e responsabilidades descritos no escopo',
        },
        {
          label: 'Composição do custo',
          value:
            'Proposta por escopo, com custos da plataforma, serviços e terceiros discriminados',
        },
        {
          label: 'Responsável pela cobrança',
          value: 'Paragan ou parceiro, conforme o item e o contrato correspondente',
        },
        {
          label: 'Informação complementar',
          value:
            'Valores, periodicidade e eventual implantação ou customização são definidos na proposta; não há pacotes públicos nesta página',
        },
      ],
      pathsLabel: 'Caminhos de implantação',
      activation: 'Ativação de uma operação',
      migration: 'Migração de uma operação existente',
      owner: 'Responsável',
      completion: 'Condição de conclusão',
      paths: {
        activation: [
          {
            title: 'Configuração',
            delivery:
              'Aplicação da identidade, dos acessos e das condições comerciais previstas no escopo.',
            owner: 'Paragan e operador',
            completion: 'Sua equipe revisou as configurações e os papéis previstos.',
          },
          {
            title: 'Habilitações',
            delivery:
              'Verificação dos contratos, credenciais e requisitos dos métodos e integrações escolhidos.',
            owner: 'Operador, Paragan e parceiros',
            completion: 'Os parceiros confirmaram os requisitos e as capacidades habilitadas.',
          },
          {
            title: 'Validação',
            delivery: 'Exercício dos fluxos de cadastro, pagamento e acompanhamento acordados.',
            owner: 'Paragan e operador',
            completion: 'Os critérios de aceite definidos para esses fluxos foram atendidos.',
          },
          {
            title: 'Ativação',
            delivery:
              'Entrada em operação dos fluxos autorizados, conforme a configuração validada.',
            owner: 'Operador e Paragan',
            completion: 'O início foi autorizado pelos responsáveis e executado conforme o acordo.',
          },
          {
            title: 'Acompanhamento',
            delivery:
              'Revisão dos primeiros fluxos e encaminhamento de demandas pelos canais acordados.',
            owner: 'Paragan e operador',
            completion: 'Responsáveis e rotina de acompanhamento foram alinhados.',
          },
        ],
        migration: [
          {
            title: 'Diagnóstico de origem',
            delivery: 'Levantamento dos dados, dos contratos e dos fluxos da plataforma atual.',
            owner: 'Operador e Paragan',
            completion: 'A origem e as restrições de portabilidade foram identificadas.',
          },
          {
            title: 'Definição do escopo de migração',
            delivery:
              'Definição do que pode ser transferido e do que exige reconfiguração ou participação de parceiros.',
            owner: 'Operador, Paragan e parceiros',
            completion: 'Dados, limites e responsabilidades da transição foram acordados.',
          },
          {
            title: 'Ensaio',
            delivery:
              'Execução do ensaio previsto, com dados autorizados e validação dos fluxos elegíveis.',
            owner: 'Paragan e operador',
            completion: 'Os resultados do ensaio atenderam aos critérios definidos no escopo.',
          },
          {
            title: 'Transição',
            delivery:
              'Execução da transição conforme a sequência e os critérios acordados entre as equipes.',
            owner: 'Operador, Paragan e parceiros',
            completion: 'Os responsáveis confirmaram os critérios para a entrada na nova operação.',
          },
          {
            title: 'Acompanhamento',
            delivery:
              'Revisão dos fluxos após a transição e tratamento das demandas identificadas.',
            owner: 'Paragan e operador',
            completion: 'Os canais e as responsabilidades posteriores foram alinhados.',
          },
        ],
      },
      after: [
        {
          title: 'Orientação para sua equipe',
          description:
            'Alinhe a orientação sobre configurações, papéis e rotinas incluídas na implantação. Formato e abrangência são definidos na contratação.',
        },
        {
          title: 'Manutenção e atualizações',
          description:
            'Defina as condições de manutenção da plataforma, atualização dos recursos e tratamento de customizações. A cobertura segue o acordo contratado.',
        },
        {
          title: 'Suporte',
          description:
            'Identifique os canais de atendimento e quem responde por produto, operação e integrações. Atendimento a compradores e sellers não é automaticamente transferido à Paragan.',
        },
      ],
      cta: 'Avaliar minha operação',
    },
    faq: {
      label: 'Dúvidas antes de contratar',
      title: 'Esclareça o que ainda pesa na decisão',
      description:
        'Licença, parceiros e responsabilidades precisam estar claros na contratação. Confira as condições que devem ser avaliadas para o seu cenário.',
      items: [
        {
          question: 'O que contrato e o que posso personalizar?',
          answer:
            'Você contrata o uso de uma plataforma white-label pronta, com os módulos e configurações descritos na proposta. A personalização contempla superfícies da marca e parâmetros operacionais previstos no produto.',
          condition:
            'Condições da licença e customizações adicionais são definidas no contrato. Administrar a operação não significa receber a propriedade do código nem determina a custódia dos valores.',
        },
        {
          question: 'Posso usar meus contratos e credenciais de parceiros?',
          answer:
            'Essa possibilidade é avaliada para cada provedor e fluxo. A existência de uma integração no produto não confirma que seu contrato, seus métodos ou suas credenciais estejam habilitados para utilizá-la.',
          condition:
            'A avaliação identifica quem contrata o parceiro, fornece as credenciais e atende aos requisitos de habilitação. Não envie credenciais pelo formulário comercial.',
        },
        {
          question: 'É possível migrar dados e tokens?',
          answer:
            'A migração começa pela análise da plataforma de origem. São avaliados os dados exportáveis, os contratos existentes e a elegibilidade dos tokens antes de definir o escopo de transição.',
          condition:
            'Portabilidade de tokens depende dos provedores e das condições de origem. Não há migração universal ou automática anunciada nesta oferta.',
        },
        {
          question: 'Como funcionam as atualizações e a manutenção?',
          answer:
            'A contratação define a cobertura de manutenção da plataforma e as condições de atualização dos recursos disponibilizados à sua operação.',
          condition:
            'Customizações e integrações específicas podem exigir regras próprias de manutenção. Confirme esses limites e responsabilidades na proposta.',
        },
        {
          question: 'Quem atende minha operação, meus sellers e os compradores?',
          answer:
            'Sua empresa administra a base e a experiência oferecida aos sellers e compradores. O atendimento da Paragan à empresa contratante segue os canais e a cobertura definidos no acordo.',
          condition:
            'Confirme a divisão de responsabilidades com parceiros, os horários e eventuais níveis de serviço. Este site não promete suporte dedicado ou prazo universal de atendimento.',
        },
        {
          question: 'Como funcionam a exportação de dados e o encerramento?',
          answer:
            'Exportação e encerramento precisam ter condições explícitas no contrato: dados abrangidos, formatos, procedimentos e responsabilidades de cada parte.',
          condition:
            'Recursos de exportação do produto não substituem as condições comerciais de saída, nem garantem portabilidade de contratos ou tokens de terceiros.',
        },
        {
          question: 'Como os custos são compostos?',
          answer:
            'A proposta discrimina o uso da plataforma, os serviços de implantação ou customização acordados e os custos externos identificados. Cada item deve indicar sua abrangência e o responsável pela cobrança.',
          condition:
            'Valores e periodicidade dependem do escopo. Taxas de processamento e serviços dos parceiros não devem ser confundidos com o preço da plataforma.',
        },
        {
          question: 'A entrega digital inclui uma plataforma completa de cursos?',
          answer:
            'Não. O escopo apresentado é a entrega de arquivos ou links da oferta, com acesso autorizado associado à compra confirmada no checkout próprio.',
          condition:
            'Aulas, progresso educacional, certificados e comunidade não estão incluídos nessa descrição. Confirme entregáveis, limites e métodos elegíveis para sua operação.',
        },
      ],
      cta: 'Esclarecer minha dúvida',
    },
    contact: {
      label: 'Avaliação da sua operação',
      title: 'Defina o próximo passo para sua contratação',
      description:
        'Informe seu cenário e os fluxos que precisa oferecer. A conversa com a equipe serve para avaliar a aderência do produto, identificar dependências e definir o caminho até uma proposta de contratação.',
      points: [
        'Aderência: recursos do produto para seu modelo de operação',
        'Escopo: configurações, integrações e responsabilidades',
        'Próximos passos: avaliação técnica e composição da proposta',
      ],
      returnNote:
        'Indique o canal pelo qual prefere receber retorno. Para iniciar a conversa agora, prepare o resumo e compartilhe-o pelo WhatsApp comercial; isso não agenda uma reunião.',
      channel: 'Canal preferido',
      email: 'E-mail',
      whatsapp: 'WhatsApp',
      scenario: 'Cenário',
      selectScenario: 'Selecione seu cenário',
      message: 'O que você precisa avaliar? (opcional)',
      messageHint:
        'Descreva o fluxo ou a dúvida principal. Você pode deixar os detalhes para a conversa.',
      origin: 'Interesse iniciado em',
      subject: 'Assunto solicitado',
      qualification: 'Acrescentar informações da operação (opcional)',
      extra: {
        platform: 'Plataforma de origem',
        sellers: 'Base de sellers',
        volume: 'Volume atual ou estimado',
        integrations: 'Integrações necessárias',
        role: 'Papel no projeto',
        timing: 'Momento pretendido para implantação',
      },
      privacy:
        'Os campos são usados apenas para montar seu resumo nesta página; não há envio automático à Paragan. Ao compartilhar pelo WhatsApp, você envia os dados escolhidos por esse canal. Não inclua documentos, credenciais ou dados de compradores.',
      submit: 'Preparar resumo',
      invalid: 'Confira o preenchimento deste campo.',
      errors: {
        name: 'Informe seu nome para identificar o contato.',
        company: 'Informe o nome da empresa ou do projeto.',
        email: 'Informe um e-mail válido, como nome@empresa.com.br.',
        scenario: 'Escolha lançamento, migração ou incorporação.',
        length: 'Reduza o texto para respeitar o limite do campo.',
      },
      phoneError: 'Informe o número com DDD, como +55 (11) 99999-9999.',
      ready: 'Seu resumo está pronto para compartilhar. Ainda não recebemos uma solicitação.',
      next: 'Copie o texto e cole na conversa comercial pelo WhatsApp. A equipe poderá avaliar o cenário informado e alinhar a continuidade; abrir a conversa não envia o resumo automaticamente.',
      channelSummary: 'Canal de retorno preferido',
      copy: 'Copiar resumo',
      copying: 'Copiando resumo…',
      copied:
        'Resumo copiado. Agora você pode colá-lo na conversa; nenhum dado foi enviado pela página.',
      copyError:
        'Não foi possível copiar automaticamente. Selecione o texto do resumo e copie para continuar.',
      whatsappAction: 'Continuar pelo WhatsApp',
      noEmail:
        'Sua preferência por retorno via e-mail está no resumo. Compartilhe-o pelo WhatsApp comercial para iniciar o contato.',
      brief:
        'Avaliação da operação com a Paragan\n\nNome: {name}\nEmpresa ou projeto: {company}\nCanal preferido: {channel}\nContato: {contact}\nCenário: {scenario}\nInteresse iniciado em: {origin}\nAssunto solicitado: {subject}\n\nO que preciso avaliar:\n{message}\n\nInformações complementares:\n{extra}',
      extraHelp: {
        platform: 'Nome da plataforma atual; não envie acessos ou credenciais.',
        sellers: 'Quantidade atual ou estimada. Ex.: 50 sellers ativos.',
        volume:
          'Indique período, moeda e se é volume atual ou projetado. Ex.: R$ 100 mil/mês, estimados.',
        integrations: 'Sistemas, métodos ou parceiros que precisam participar do fluxo.',
        role: 'Seu papel na decisão ou na implantação. Ex.: fundador ou responsável técnico.',
        timing: 'Quando pretende iniciar e quais dependências já conhece.',
      },
      extraExamples: {
        platform: 'Ex.: plataforma utilizada hoje',
        sellers: 'Ex.: 50 sellers ativos',
        volume: 'Ex.: R$ 100 mil/mês, estimados',
        integrations: 'Ex.: CRM e sistema de pedidos',
        role: 'Ex.: responsável pela operação',
        timing: 'Ex.: após validar a integração atual',
      },
      origins: {
        inicio: 'Visão geral',
        solucoes: 'Cenários de contratação',
        operacao: 'Gestão da operação',
        financeiro: 'Gestão financeira',
        checkout: 'Experiência de venda',
        integracoes: 'Integrações',
        estrutura: 'Confiança operacional',
        implantacao: 'Contratação e implantação',
        perguntas: 'Perguntas frequentes',
      },
      subjects: {
        demonstration: 'Demonstração assistida do produto',
        finance: 'Demonstração financeira',
        checkout: 'Demonstração do checkout',
        recurrence: 'Recorrência',
        split: 'Split',
        acquiring: 'Conexões de adquirência',
        tools: 'Ferramentas externas e plugins',
        api: 'Referência da API',
        webhooks: 'Referência de webhooks',
        documentation: 'Documentação técnica',
        integration: 'Integração específica',
        isolation: 'Separação entre operações',
        integrity: 'Integridade financeira',
        recovery: 'Diagnóstico e recuperação',
        support: 'Sustentação e atendimento',
        sandbox: 'Ambiente de avaliação',
        reports: 'Relatórios técnicos',
        faq: 'Dúvida sobre a contratação',
      },
      none: 'Não informado',
      summary: 'Resumo do contato',
    },
    footer: {
      company: 'Paragan · plataforma white-label para empresas operadoras de pagamentos.',
      contact: 'Contato comercial',
      social: 'Redes sociais',
    },
  },
  capabilities: {
    items: {
      identity: {
        eyebrow: 'Identidade',
        title: 'Sua marca, em cada contato.',
        description:
          'Aplique sua identidade aos painéis e ao checkout previstos no escopo. Domínios próprios exigem configuração de DNS e TLS; e-mails transacionais dependem de remetente verificado.',
        illustration: 'Sua identidade, em cada ponto de contato',
      },
      engagement: {
        eyebrow: 'Relacionamento',
        title: 'Uma base para cultivar.',
        description:
          'Disponibilize mecanismos de campanha e reconhecimento à sua base. A habilitação é decisão da operação; esses recursos não representam retenção ou vendas adicionais comprovadas.',
        illustration: 'Crescimento com reconhecimento',
      },
      acquiring: {
        eyebrow: 'Adquirência',
        title: 'Rotas com direção.',
        description:
          'Configure prioridades e regras para selecionar rotas elegíveis conforme método e parâmetros da transação. O uso de cada conexão depende dos recursos do provedor e da habilitação da operação.',
        illustration: 'Uma política. Rotas elegíveis.',
      },
    },
  },
  operations: {
    contexts: {
      management: {
        title: 'Operação',
        heading: 'A visão de quem dirige o negócio.',
        description:
          'Administre cadastros e revisões, atribua carteiras à equipe e delimite as ações de cada papel. O histórico de decisões permite acompanhar o tratamento dado à base.',
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
          'Defina taxas e comissões e organize condições específicas para sellers. A configuração da operação não substitui os custos, contratos ou limites de processamento dos parceiros.',
        illustration: 'Configuração comercial do seller · captura a produzir',
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
          'Consulte os lançamentos que compõem a cobrança e diferencie as parcelas de receita, taxas e saldo do seller. O exemplo é ilustrativo e não representa uma liquidação bancária executada.',
        illustration: 'Composição financeira ilustrativa · captura a produzir',
        items: {
          balances: 'Disponível, pendente e reservado',
          withdrawals: 'Supervisão de saques',
          accrual: 'Visão por competência',
        },
      },
    },
  },
  ledger: {
    items: {
      costs: {
        title: 'Entenda seus custos.',
        description:
          'Consulte receitas, taxas, comissões e custos registrados. A visão por competência relaciona os valores ao período da operação; custos ausentes não devem ser tratados como zero nem como lucro.',
      },
      receipts: {
        title: 'Planeje seus recebimentos.',
        description:
          'Diferencie valores liberados, em espera e reservados. Consulte as previsões de liberação quando disponíveis, considerando as regras da operação e a liquidação do parceiro.',
      },
      movements: {
        title: 'Acompanhe cada movimentação.',
        description:
          'Consulte o extrato de lançamentos e estornos e supervisione solicitações de saque por fila de aprovação. A execução da saída depende do parceiro habilitado e dos acessos autorizados.',
      },
    },
  },
  onboarding: {
    note: 'Escopo, investimento e prazo são definidos após avaliar módulos, integrações, habilitações e requisitos de migração. A proposta identifica as dependências e os responsáveis; não há prazo único para todos os cenários.',
  },
  inquiry: {
    form: {
      eyebrow: 'Primeiro, seu contexto',
      title: 'Prepare as informações para a conversa.',
      description:
        'Da primeira ideia à operação em crescimento: conte seu momento e o que você quer construir.',
      optional: '(opcional)',
      submit: 'PREPARAR CONVERSA',
    },
    fields: {
      name: { label: 'Nome', placeholder: 'Ex.: Ana Silva' },
      company: {
        label: 'Empresa ou projeto',
        placeholder: 'Ex.: nome da sua operação',
      },
      email: { label: 'E-mail profissional', placeholder: 'voce@empresa.com.br' },
      phone: { label: 'WhatsApp para retorno', placeholder: '+55 (11) 99999-9999' },
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
          'Ex.: já operamos uma base de sellers e queremos avaliar a migração dos pagamentos e a integração com nosso sistema.',
        hint: 'Ainda está na fase de ideia? Ótimo. Compartilhe seu objetivo e o que precisa funcionar primeiro.',
      },
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
