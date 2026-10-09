// Keys describe content roles and entities, never the wording or section position.
const messages = {
  brand: {
    home: 'Paragan — início',
    signature: 'PARAGAN / WHITE LABEL',
    copyright: '© {year} Paragan',
    promise: 'Plataforma de pagamentos white-label.',
    supportingPromise: 'Uma base pronta, com a sua marca.',
  },
  metadata: {
    title: 'Paragan — Plataforma white-label para operações de pagamentos',
    description:
      'Lance, migre ou incorpore pagamentos com uma plataforma pronta: gateway, gestão de sellers, financeiro e checkout sob a marca da sua operação.',
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
    explore: 'Avaliar minha operação',
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
    eyebrow: 'Paragan / Plataforma white-label',
    tagline: 'Produto, configuração e implantação para sua operação.',
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
          about: 'Sobre a plataforma',
          solutions: 'Cenários de contratação',
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
      reputation: 'Gestão de sellers',
      compliance: 'Permissões por papel',
      hosting: 'Separação por operação',
      technology: 'API e webhooks',
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
      eyebrow: 'Uma base de produto existente',
      primary: 'O produto está pronto.',
      secondary: 'A configuração é da sua operação.',
      description:
        'Conheça os recursos que compõem a plataforma. A contratação define os módulos, as configurações e as integrações disponíveis para sua empresa.',
    },
    items: {
      identity: {
        eyebrow: 'Identidade',
        title: 'Sua marca, em cada contato.',
        description:
          'Aplique sua marca aos painéis e ao checkout contratados. Domínios próprios exigem DNS e TLS; e-mails transacionais dependem de remetente verificado.',
        illustration: 'Sua identidade, em cada ponto de contato',
      },
      policies: {
        eyebrow: 'Regras comerciais',
        title: 'Seu modelo vira regra.',
        description:
          'Defina taxas e comissões fixas, percentuais ou híbridas por seller. Organize padrões e exceções, respeitando os contratos e limites dos parceiros.',
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
          'Organize campanhas com período e premiação, rankings e níveis de reconhecimento para sua base. São mecanismos distintos, habilitados pela operação.',
        illustration: 'Crescimento com reconhecimento',
      },
      acquiring: {
        eyebrow: 'Adquirência',
        title: 'Rotas com direção.',
        description:
          'Defina prioridades e regras para selecionar rotas elegíveis por método e transação. Cada conexão depende dos recursos do provedor e da habilitação da operação.',
        illustration: 'Uma política. Rotas elegíveis.',
      },
      finance: {
        eyebrow: 'Gestão financeira',
        title: 'Cada valor, no contexto.',
        description:
          'Diferencie saldos disponíveis, pendentes e reservados. Consulte lançamentos e supervisione solicitações de saque; a execução depende do parceiro habilitado.',
        illustration: 'Saldos, reservas e movimentações',
      },
      checkout: {
        eyebrow: 'Checkout',
        title: 'Da oferta ao pagamento.',
        description:
          'Ofereça aos sellers produtos, ofertas, cupons e adicionais no checkout da operação. Métodos e recorrência dependem dos provedores habilitados.',
        illustration: 'Checkout white label',
      },
      integrations: {
        eyebrow: 'Integrações',
        title: 'Conecte a operação.',
        description:
          'Conecte sistemas por API e webhooks, com permissões por escopo e histórico de entregas. Confirme os recursos necessários na avaliação técnica.',
        illustration: 'API e webhooks: eventos no contexto',
      },
    },
  },
  operations: {
    label: 'NO COMANDO',
    heading: {
      eyebrow: 'Configurações e responsabilidades',
      primary: 'Sua operação,',
      secondary: 'sob diferentes perspectivas.',
      description:
        'Você administra a base, as condições dos sellers e os acessos da equipe. Cada tarefa tem um recurso no produto, com permissões e limites para quem a executa.',
    },
    contextLabel: 'GATEWAY ADMIN / {context}',
    contexts: {
      management: {
        title: 'Operação',
        heading: 'A visão de quem dirige o negócio.',
        description:
          'Seus sellers são os clientes da operação. Administre cadastros e revisões, atribua carteiras à equipe e delimite as ações de cada papel, com histórico de decisões.',
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
          'Defina taxas, comissões e condições específicas por seller. As configurações não substituem custos, contratos ou limites de processamento dos parceiros.',
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
          'Consulte receitas, taxas e estados de saldo. Diferencie os valores da operação e dos sellers; registros internos não equivalem a liquidação bancária concluída.',
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
      secondary: 'Ofereça a jornada de venda.',
      description:
        'Sua base organiza produtos e ofertas no checkout da operação. O comprador confere a compra e paga; seller e operador acompanham o pedido nos acessos autorizados.',
    },
    journeyLabel: 'UMA JORNADA, DO INÍCIO AO FIM',
    devicesLabel: 'DESKTOP + MOBILE',
    illustration: 'Checkout da operação · desktop e mobile',
    steps: {
      compose: {
        eyebrow: 'COMPONHA',
        title: 'Uma oferta, várias possibilidades.',
        description:
          'Seus sellers organizam produtos, preços e links por oferta. Ofertas recorrentes dependem do método e do provedor habilitados para esse fluxo.',
      },
      customize: {
        eyebrow: 'PERSONALIZE',
        title: 'Cada detalhe tem uma função.',
        description:
          'A base configura aparência, cupons e adicionais dentro das opções do produto. O comprador encontra a oferta e os meios de pagamento habilitados.',
      },
      track: {
        eyebrow: 'ACOMPANHE',
        title: 'A venda não termina no clique.',
        description:
          'Acompanhe o estado do pedido e do pagamento. Na entrega digital, a compra confirmada pode liberar arquivos ou links; não é uma plataforma completa de cursos.',
      },
    },
  },
  ledger: {
    label: 'GESTÃO FINANCEIRA',
    heading: { primary: 'Cada valor,', secondary: 'no estado certo.' },
    description:
      'Diferencie receita, taxas e disponibilidade dos valores. Condições, custos registrados e reservas ajudam a interpretar lançamentos, sem representar lucro líquido contábil.',
    illustrationLabel: '01 / Visão financeira',
    illustration: 'Receitas, custos e saldos',
    items: {
      costs: {
        title: 'Entenda seus custos.',
        description:
          'Consulte receitas, taxas, comissões e custos registrados por competência. Custos ausentes não devem ser tratados como zero nem como lucro.',
      },
      receipts: {
        title: 'Planeje seus recebimentos.',
        description:
          'Diferencie valores liberados, pendentes e reservados. Previsões de liberação dependem das regras da operação e da liquidação do parceiro.',
      },
      movements: {
        title: 'Acompanhe cada movimentação.',
        description:
          'Consulte lançamentos e estornos e supervisione solicitações de saque conforme sua permissão. A execução da saída depende do parceiro habilitado.',
      },
    },
  },
  connectivity: {
    label: 'CONEXÕES QUE FAZEM SENTIDO',
    heading: { primary: 'Conecte seus sistemas.', secondary: 'Verifique as condições.' },
    description:
      'Avalie métodos, provedores e conexões antes de definir a implantação. Contratos e credenciais próprios são analisados por parceiro; integração desenvolvida não significa habilitação comercial.',
    illustrationLabel: '01 / Seu ecossistema',
    illustration: 'Conexões da operação',
    eventsIllustration: 'API e entrega de eventos',
    events: {
      title: 'API e eventos com escopo definido.',
      description:
        'Conecte pagamentos, sellers e consultas por contratos documentados. Permissões delimitam cada acesso; o histórico de webhooks ajuda a investigar as entregas.',
      note: 'Solicite as referências técnicas. Métodos, eventos e parceiros são confirmados para sua operação, sem disponibilidade universal ou garantia de aprovação.',
    },
  },
  reliability: {
    label: 'CONFIANÇA OPERACIONAL',
    heading: { primary: 'Além da interface,', secondary: 'avalie a sustentação.' },
    description:
      'Examine os mecanismos documentados e alinhe implantação, manutenção e atendimento. Canais, cobertura e responsabilidades seguem o contrato, sem SLA ou suporte dedicado presumidos.',
    illustration: 'Arquitetura da operação',
    items: {
      boundaries: {
        title: 'Fronteiras claras',
        description:
          'Separação por operação e permissões por papel, sem pressupor infraestrutura física exclusiva.',
      },
      consistency: {
        title: 'Consistência financeira',
        description:
          'Estados, registros e idempotência nos fluxos previstos. Solicite o detalhamento técnico.',
      },
      visibility: {
        title: 'Visibilidade operacional',
        description:
          'Métricas, filas e registros para investigar falhas. Recuperação e responsabilidades precisam ser acordadas.',
      },
    },
  },
  audience: {
    label: 'SEU PONTO DE PARTIDA',
    heading: {
      eyebrow: 'Cenários de contratação',
      primary: 'A mesma base.',
      secondary: 'Três caminhos para começar.',
    },
    items: {
      operators: {
        title: 'Lance sua operação.',
        description:
          'Comece com gateway, gestão de sellers e checkout existentes. Informe quem sua empresa atenderá e quais fluxos precisa oferecer para definir configurações e habilitações.',
        image: 'Lançamento de uma operação white-label',
        cta: 'Avaliar meu lançamento',
      },
      platforms: {
        title: 'Migre uma operação existente.',
        description:
          'Identifique a plataforma atual, os dados e as conexões que precisam continuar. Portabilidade de dados e tokens depende da origem, dos contratos e dos parceiros.',
        image: 'Migração de uma operação de pagamentos',
        cta: 'Avaliar minha migração',
      },
      creators: {
        title: 'Incorpore pagamentos à sua plataforma.',
        description:
          'Conecte pagamentos e gestão de sellers aos processos que já existem. Indique os sistemas envolvidos, os papéis da base e os fluxos necessários por API e webhooks.',
        image: 'Pagamentos conectados a uma plataforma',
        cta: 'Avaliar minha incorporação',
      },
    },
  },
  onboarding: {
    label: 'DA CONTRATAÇÃO À ATIVAÇÃO',
    heading: {
      eyebrow: 'Produto, configuração e implantação',
      primary: 'Comece com produto pronto.',
      secondary: 'Ative com escopo definido.',
      description:
        'A implantação configura a base existente para sua empresa. Módulos, serviços, critérios de validação e responsabilidades ficam na proposta; customizações e migração são avaliadas separadamente.',
    },
    steps: {
      discovery: {
        title: 'Avaliar seu cenário',
        description:
          'Identifique sua base, os fluxos e os sistemas necessários. Na migração, levante também a origem e as restrições de portabilidade.',
      },
      design: {
        title: 'Definir a contratação',
        description:
          'Defina módulos, configurações, serviços e responsáveis. A proposta discrimina custos da plataforma, demandas adicionais e terceiros.',
      },
      validation: {
        title: 'Configurar e validar',
        description:
          'Aplique identidade, acessos e condições acordados. Confirme habilitações e valide os fluxos; quando previsto, execute o ensaio de migração.',
      },
      activation: {
        title: 'Preparar a ativação',
        description:
          'Autorize a entrada após cumprir os critérios de aceite. Alinhe orientação da equipe, manutenção e canais de acompanhamento contratados.',
      },
    },
    note: 'Investimento e prazo dependem do escopo, das habilitações e da migração. Uso da plataforma, implantação, customizações e custos de parceiros são itens distintos na proposta.',
  },
  questions: {
    label: 'ANTES DE COMEÇARMOS',
    heading: {
      eyebrow: 'Perguntas frequentes',
      primary: 'Clareza antes',
      secondary: 'do próximo passo.',
      description: 'Produto, parceiros e responsabilidades',
      continuation: 'para contratar com clareza.',
    },
    items: {
      eligibility: {
        question: 'O que contrato e o que posso personalizar?',
        answer:
          'Você contrata o uso de uma plataforma white-label pronta para lançar, migrar ou incorporar pagamentos. Módulos, identidade visual e configurações operacionais ficam na proposta; customizações adicionais são avaliadas separadamente. Administrar a operação não significa receber a propriedade do código nem determina a custódia dos valores.',
      },
      customization: {
        question: 'Posso usar meus parceiros e meios de pagamento?',
        answer:
          'Contratos e credenciais próprios são avaliados por provedor e fluxo. Métodos, parcelamento, recorrência e distribuição entre participantes dependem das capacidades e habilitações confirmadas. Ter uma conexão desenvolvida não substitui contratação ou homologação; o registro de uma alocação não equivale à sua liquidação externa. Não envie credenciais pelo formulário comercial.',
      },
      methods: {
        question: 'Posso migrar dados e tokens? E exportar depois?',
        answer:
          'A migração começa pela análise da plataforma de origem, dos dados exportáveis e dos contratos. Tokens dependem da elegibilidade dos provedores; não há migração universal ou automática. Exportação e encerramento precisam definir dados, formatos, procedimentos e responsabilidades no contrato, sem garantir portabilidade de recursos de terceiros.',
      },
      catalog: {
        question: 'O checkout inclui assinaturas e uma área de cursos?',
        answer:
          'Seus sellers podem organizar produtos, ofertas, cupons e adicionais conforme os recursos contratados. Assinaturas dependem do método e do provedor elegíveis. Na entrega digital do checkout próprio, a compra confirmada pode liberar arquivos ou links autorizados. Essa descrição não inclui aulas, progresso educacional, certificados ou comunidade.',
      },
      integration: {
        question: 'Como funcionam integrações, manutenção e suporte?',
        answer:
          'API e webhooks conectam os recursos previstos no escopo, com permissões definidas. A contratação especifica atualização, manutenção e tratamento de integrações ou customizações. Sua empresa administra a base; atendimento a sellers e compradores não é automaticamente transferido à Paragan. Confirme canais, cobertura e responsabilidades, sem presumir suporte dedicado ou SLA.',
      },
      contracting: {
        question: 'Como funcionam a contratação e a implantação?',
        answer:
          'A avaliação identifica aderência, dependências e caminho de implantação. A proposta discrimina uso da plataforma, serviços e custos externos, com abrangência e responsável por cada cobrança. Valores, periodicidade e prazos seguem o escopo; taxas de processamento dos parceiros não devem ser confundidas com o preço da plataforma.',
      },
    },
  },
  inquiry: {
    label: 'AVALIAÇÃO DA SUA OPERAÇÃO',
    heading: {
      eyebrow: 'Contato e qualificação',
      primary: 'Conte seu cenário.',
      secondary: 'Defina o próximo passo.',
      description:
        'Informe quem sua empresa atende e os fluxos que precisa oferecer. A conversa serve para avaliar a aderência do produto, as dependências e o caminho até uma proposta.',
    },
    perspectives: {
      model: {
        title: 'Aderência ao produto',
        description: 'Recursos existentes para o modelo da sua operação.',
      },
      experience: {
        title: 'Escopo e responsabilidades',
        description: 'Configurações, integrações e papéis da sua equipe e dos parceiros.',
      },
      nextStep: {
        title: 'Próximos passos',
        description: 'Avaliação técnica, implantação e composição da proposta.',
      },
    },
    form: {
      eyebrow: 'Primeiro, seu contexto',
      title: 'Prepare as informações para a conversa.',
      description:
        'Os campos montam um resumo local para você copiar e compartilhar. Não há envio automático, confirmação de recebimento ou agendamento por esta página.',
      optional: '(opcional)',
      submit: 'Preparar resumo',
    },
    fields: {
      name: { label: 'Seu nome', placeholder: 'Como podemos chamar você?' },
      company: {
        label: 'Nome da empresa ou projeto',
        placeholder: 'Nome da sua operação ou projeto',
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
        label: 'O que sua operação precisa avaliar?',
        placeholder:
          'Ex.: queremos migrar uma base de sellers e conectar pagamentos ao nosso sistema de pedidos.',
        hint: 'Informe os fluxos e as dependências conhecidas. Não inclua documentos, credenciais ou dados de compradores; nada será enviado automaticamente.',
      },
    },
    interests: {
      launch: 'Lançar minha operação',
      planning: 'Incorporar pagamentos',
      migration: 'Migrar minha operação',
      future: 'Avaliar integrações',
      discovery: 'Solicitar demonstração',
      partnership: 'Esclarecer a contratação',
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
        'Avaliação da operação com a Paragan\n\nNome: {name}\nEmpresa ou projeto: {company}\nCargo ou papel: {role}\nE-mail: {email}\nWhatsApp para retorno: {phone}\nSite: {website}\nInteresses: {interests}\nComo conheci a Paragan: {source}\n\nO que preciso avaliar:\n{message}',
      missingWebsite: 'Ainda não informado',
      missingInterests: 'Quero avaliar a aderência do produto',
      separator: ', ',
      region: 'Resumo da conversa',
      ready: 'Resumo pronto para compartilhar. Nenhuma solicitação foi enviada à Paragan.',
      label: 'Resumo para copiar',
      copy: 'Copiar resumo',
      copied:
        'Resumo copiado. Cole na conversa comercial para compartilhar; copiar não envia os dados.',
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
