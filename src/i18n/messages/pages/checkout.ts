import type {
  ContentItem,
  EditorialItem,
  ModuleItem,
  PageHeroProps,
  PageLink,
  QuestionItem,
} from '@/components/landing/institutional';

export const checkoutPage = {
  breadcrumb: {
    label: 'Navegação estrutural',
    home: 'Início',
    current: 'Checkout',
  },
  metadata: {
    title: 'Checkout de pagamentos white label | Paragan',
    description:
      'Conheça o checkout de pagamentos white label da Paragan: ofertas, cupons, adicionais, assinaturas condicionadas e entrega digital autorizada.',
    imageAlt: 'Paragan — checkout, ofertas e experiência de compra white label',
  },
  hero: {
    eyebrow: 'Checkout · da oferta ao acesso',
    title: 'Checkout de pagamentos white label.',
    muted: 'Da oferta à confirmação.',
    description:
      'O produto apresenta. A oferta define a condição. O checkout reúne a escolha e o pagamento. Depois da confirmação, a experiência continua com recibo, integrações e acesso digital autorizado.',
    links: [
      { label: 'Explorar a jornada', href: '/checkout#jornada', secondary: true },
      { label: 'Conversar sobre meu checkout', href: '/contato' },
    ],
    image: {
      asset: 'checkoutJourney',
      tour: true,
      alt: 'Prévia do checkout Paragan com apresentação da oferta, dados do comprador e resumo do pagamento.',
      caption:
        'Ambiente demonstrativo com dados fictícios. A aparência e os meios exibidos dependem da configuração do produto e da operação.',
    },
  } satisfies PageHeroProps,
  journey: {
    label: 'A lógica da compra',
    heading: {
      eyebrow: 'Quatro momentos, um contexto',
      title: 'Antes do botão de pagar,',
      muted: 'há uma oferta bem definida.',
      description:
        'Produto, oferta, compra e pagamento têm papéis diferentes. Separá-los permite mudar uma condição comercial sem perder o contexto do que foi adquirido.',
    },
    items: [
      {
        id: 'produto',
        title: 'Organize o produto',
        description:
          'O seller reúne apresentação, imagens e conteúdo. O catálogo começa em rascunho; a publicação exige uma oferta ativa.',
      },
      {
        id: 'oferta',
        title: 'Defina a condição',
        description:
          'A oferta associa preço e modalidade ao produto. Um mesmo produto pode reunir ofertas avulsas e recorrentes, cada uma com sua condição.',
      },
      {
        id: 'compra',
        title: 'Componha a compra',
        description:
          'O comprador seleciona a oferta e os adicionais disponíveis. Cupom e total são validados no servidor antes da criação da compra.',
      },
      {
        id: 'confirmacao',
        title: 'Acompanhe o pagamento',
        description:
          'A compra preserva itens e totais. O pagamento tem seu próprio estado: uma cobrança pendente ainda não é uma venda confirmada.',
      },
    ] satisfies readonly ContentItem[],
    note: 'Cartão, Pix, boleto e parcelamento dependem dos meios habilitados para o produto e das capacidades do processador. Voltar do navegador não substitui a confirmação financeira.',
  },
  composition: {
    label: 'Configuração comercial',
    heading: {
      title: 'A condição certa,',
      muted: 'sem desconectar o restante.',
      description:
        'Catálogo, campanhas, adicionais e identidade se encontram no checkout. Cada configuração tem uma função — e limites claros.',
    },
    items: [
      {
        id: 'catalogo-ofertas',
        eyebrow: 'Catálogo e ofertas',
        title: 'Um produto, diferentes condições.',
        description:
          'Distribua o link de uma oferta ou reúna ofertas ativas para escolha. Preço e modalidade pertencem à oferta, não a uma página desconectada do catálogo.',
      },
      {
        id: 'cupons',
        eyebrow: 'Campanhas',
        title: 'Desconto com regra.',
        description:
          'Cupons fixos ou percentuais podem ter validade, limite de uso e ofertas elegíveis. Em compras recorrentes, o desconto se aplica apenas à primeira cobrança confirmada.',
      },
      {
        id: 'adicionais',
        eyebrow: 'Order bumps',
        title: 'Uma escolha a mais, na mesma compra.',
        description:
          'Apresente ofertas adicionais antes do pagamento. O comprador escolhe o que incluir e confere todos os itens no resumo, com um total para a mesma transação.',
      },
      {
        id: 'identidade-checkout',
        eyebrow: 'Identidade',
        title: 'Sua marca também na compra.',
        description:
          'Templates versionados e ajustes de aparência conectam produto e identidade do gateway. Domínios próprios exigem configuração de DNS e TLS; o editor não é um construtor livre de páginas.',
      },
    ] satisfies readonly ModuleItem[],
  },
  subscriptions: {
    label: 'Assinaturas',
    heading: {
      eyebrow: 'Uma relação que continua',
      title: 'Uma oferta para começar.',
      muted: 'Ciclos para acompanhar.',
      description:
        'Uma oferta recorrente define valor e intervalo. O checkout próprio cria a assinatura depois da confirmação do pagamento inicial, mantendo o vínculo com a compra e o provedor original.',
    },
    items: [
      {
        id: 'ciclos-recorrentes',
        title: 'O ciclo pago é a referência.',
        description:
          'Acompanhe assinatura, cobranças e tentativas ao longo da relação com o comprador. No checkout próprio, a recorrência é prevista para cartão, conforme o suporte e a habilitação do provedor; cada renovação precisa ter seu pagamento confirmado.',
        image: {
          asset: 'checkout',
          alt: 'Ilustração da relação entre oferta, condição comercial e resumo de compra.',
        },
        imageSide: 'right',
        points: [
          {
            id: 'periodo-pago',
            title: 'Acesso por período pago',
            description:
              'O acesso digital considera o período efetivamente pago, não apenas o status da assinatura.',
          },
          {
            id: 'falhas-renovacao',
            title: 'Falhas têm acompanhamento',
            description:
              'Ciclos e tentativas dão contexto às exceções. Renovar continua dependendo do método e do provedor contratado.',
          },
          {
            id: 'cancelamento-futuro',
            title: 'Cancelar não apaga o período pago',
            description:
              'O cancelamento interrompe renovações futuras e preserva a cobertura já paga, conforme o contrato.',
          },
        ],
        link: { label: 'Entender o contexto financeiro', href: '/financeiro' },
      },
    ] satisfies readonly EditorialItem[],
  },
  delivery: {
    label: 'Entrega digital',
    heading: {
      eyebrow: 'Da confirmação à autorização',
      title: 'Entregar o conteúdo.',
      muted: 'Sem abrir o acesso a qualquer pessoa.',
      description:
        'Arquivos e links associados à oferta fazem parte da experiência pós-compra. No checkout próprio, o pagamento confirmado é o ponto de partida para conceder o acesso correspondente.',
    },
    items: [
      {
        id: 'acesso-por-compra',
        title: 'O link identifica. A sessão autoriza.',
        description:
          'O acesso é vinculado a uma compra. Ter o link permanente não basta para baixar um arquivo: o comprador precisa validar sua identidade pelo e-mail da compra.',
        image: {
          asset: 'integrations',
          alt: 'Ilustração de um evento e seu processamento, representando a passagem entre confirmação e continuidade da compra.',
        },
        points: [
          {
            id: 'conteudo-da-oferta',
            title: 'Conteúdo definido na oferta',
            description:
              'Arquivos e links têm versões. A compra mantém a referência ao conteúdo adquirido, sem substituir silenciosamente o histórico por uma edição posterior.',
          },
          {
            id: 'email-comprador',
            title: 'Verificação por e-mail',
            description:
              'Um código de uso único valida o comprador e inicia uma sessão limitada àquela compra. E-mail transacional e armazenamento precisam estar configurados.',
          },
          {
            id: 'download-autorizado',
            title: 'Arquivo ou link autorizado',
            description:
              'Arquivos usam autorização de download de curta duração; links externos são apresentados após a validação. O serviço de destino mantém suas próprias regras de acesso.',
          },
        ],
        link: { label: 'Encontrar o formato do meu projeto', href: '/solucoes' },
      },
    ] satisfies readonly EditorialItem[],
  },
  integrations: {
    label: 'Venda e pós-venda',
    heading: {
      title: 'Pagamento confirmado.',
      muted: 'Os próximos fluxos começam.',
      description:
        'Conecte a operação aos sistemas que precisam acompanhar a venda. API e eventos levam informações adiante sem transformar a página de confirmação em fonte de verdade financeira.',
    },
    items: [
      {
        id: 'sistemas-venda',
        title: 'Integre a operação, não só o formulário.',
        description:
          'Conecte catálogo e operação aos seus sistemas com acesso delimitado ao seller. Cada conexão precisa das permissões, configurações e recursos compatíveis com o fluxo que você pretende integrar.',
        image: {
          asset: 'ecosystem',
          alt: 'Ilustração do ecossistema de integração entre a operação Paragan e sistemas externos.',
        },
        imageSide: 'right',
        link: { label: 'Explorar API e integrações', href: '/integracoes#api' },
      },
      {
        id: 'eventos-pos-venda',
        title: 'Dê continuidade com eventos.',
        description:
          'Webhooks assinados, filtros por produto e histórico de tentativas ajudam seus sistemas a reagir aos eventos da operação. CRM, comunicação e outros fluxos de pós-venda dependem da integração que você configurar — não são campanhas automáticas nativas.',
        image: {
          asset: 'sellerAutomations',
          alt: 'Ilustração de automações externas conectadas a eventos da operação do seller.',
        },
        imageSide: 'left',
        link: { label: 'Entender eventos e entregas', href: '/integracoes#webhooks' },
      },
    ] satisfies readonly EditorialItem[],
  },
  faq: {
    label: 'Perguntas sobre o checkout',
    heading: {
      title: 'Os detalhes importam.',
      muted: 'Principalmente antes de vender.',
      description:
        'O que configurar, o que validar e o que não confundir com o escopo do checkout.',
    },
    items: [
      {
        id: 'meios-disponiveis',
        question: 'Todo checkout oferece cartão, Pix e boleto?',
        answer:
          'Os meios exibidos dependem da configuração do produto, das habilitações da operação e do suporte do processador. Parcelamento e recorrência também são avaliados por provedor. No checkout próprio, a recorrência é prevista para cartão; Pix Automático não integra a oferta atual.',
      },
      {
        id: 'cupom-recorrente',
        question: 'O cupom continua nas renovações da assinatura?',
        answer:
          'Não. Na compra recorrente, o desconto do cupom fica registrado para a primeira cobrança confirmada. Os ciclos seguintes seguem a condição contratada da assinatura. Validade, limite de uso e ofertas elegíveis continuam sendo regras do cupom.',
      },
      {
        id: 'pagamento-pendente',
        question: 'Gerar um Pix ou boleto já libera o conteúdo?',
        answer:
          'Não. Emissão não é confirmação. O acesso digital no checkout próprio depende da confirmação financeira e das regras da compra. A página de retorno do navegador, isoladamente, não comprova que o pagamento foi concluído.',
      },
      {
        id: 'lms',
        question: 'Entrega digital é uma plataforma de cursos?',
        answer:
          'Não. O escopo é disponibilizar arquivos e links autorizados por compra, com verificação do comprador. Isso não inclui um LMS com aulas, progresso, certificados ou comunidade. Uma plataforma externa precisa ser avaliada e integrada separadamente; pagamentos criados fora do checkout próprio não recebem essa entrega automaticamente.',
      },
      {
        id: 'dominio-proprio',
        question: 'Posso usar minha marca e meu domínio?',
        answer:
          'A experiência combina identidade do gateway, template e configurações de aparência do produto. O domínio próprio depende da configuração e validação de DNS e TLS. A personalização segue opções definidas: não permite inserir HTML, JavaScript ou CSS arbitrário.',
      },
      {
        id: 'frete-upsell',
        question: 'O checkout inclui frete integrado ou upsell one-click?',
        answer:
          'Esses recursos não fazem parte da oferta pública atual. Order bumps compõem a compra antes do pagamento e não equivalem a uma cobrança one-click posterior. Um fluxo com produto físico, logística ou outras etapas especiais precisa ter seu escopo e suas integrações validados antes da implantação.',
      },
    ] satisfies readonly QuestionItem[],
  },
  related: {
    label: 'Próximas conexões',
    heading: {
      title: 'O checkout faz parte',
      muted: 'de uma operação maior.',
      description: 'Siga da experiência de compra para os processos que a sustentam.',
    },
    items: [
      {
        id: 'link-financeiro',
        title: 'Da venda ao financeiro',
        description: 'Entenda saldos, lançamentos, taxas e o acompanhamento dos valores.',
        href: '/financeiro',
      },
      {
        id: 'link-integracoes',
        title: 'Da confirmação aos seus sistemas',
        description: 'Conheça os papéis da API, dos webhooks e das integrações autorizadas.',
        href: '/integracoes',
      },
      {
        id: 'link-solucoes',
        title: 'Do seu cenário ao projeto',
        description: 'Explore contextos de lançamento, migração e plataformas.',
        href: '/solucoes',
      },
      {
        id: 'link-contato',
        title: 'Vamos olhar para a sua jornada?',
        description: 'Traga produto, forma de cobrança e entrega para definir o escopo.',
        href: '/contato',
      },
    ] satisfies readonly (ContentItem & Pick<PageLink, 'href'>)[],
  },
};
