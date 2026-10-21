import type {
  ContentItem,
  EditorialItem,
  ModuleItem,
  PageHeading,
  PageHeroProps,
} from '@/components/landing/institutional';

export const plataformaCopy = {
  metadata: {
    title: 'Gateway de pagamentos white label: plataforma e operação | Paragan',
    description:
      'Entenda como marca, sellers, equipe e adquirência se conectam na Paragan. Painéis por papel, regras de roteamento e limites de acesso para seu gateway.',
    imageAlt: 'Paragan — plataforma white label, painéis e operação de pagamentos',
  },
  hero: {
    eyebrow: 'Por dentro da plataforma',
    title: 'Gateway de pagamentos white label.',
    muted: 'Cada papel, no seu lugar.',
    description:
      'Você administra o gateway. Seus sellers organizam as vendas. O staff atende a carteira autorizada. E o comprador encontra o checkout da sua marca — sem precisar conhecer a estrutura por trás.',
    links: [
      { label: 'Explorar os painéis', href: '/plataforma#paineis', secondary: true },
      { label: 'Conversar sobre meu gateway', href: '/contato' },
    ],
  } satisfies PageHeroProps,
  panels: {
    label: 'Visões da operação',
    heading: {
      title: 'O mesmo negócio.',
      muted: 'Três pontos de vista.',
      description:
        'Os painéis acompanham a responsabilidade de quem entra. Não é preciso distribuir o mesmo acesso para todo mundo.',
    } satisfies PageHeading,
    tabsLabel: 'Conhecer os painéis por papel',
    demo: 'Prévias do produto com dados de demonstração. O acesso depende do perfil e das permissões.',
    buyer: 'E quem compra?',
    buyerDescription:
      'O comprador segue pela oferta, pelo pagamento e pela confirmação no checkout público. Não recebe acesso aos painéis operacionais.',
    buyerLink: 'Conhecer o checkout',
    buyerHref: '/checkout',
    items: [
      {
        id: 'gateway',
        label: 'Gateway-admin',
        eyebrow: 'Administrar',
        description: 'A visão de quem opera o gateway.',
        title: 'Decisões de operação, com contexto.',
        body: 'Acompanhe sua base, revise cadastros e configure condições comerciais. Marca, equipe e adquirência fazem parte da administração do gateway — não do acesso master da Paragan.',
        asset: 'gateway',
        alt: 'Prévia do painel gateway-admin com indicadores e acompanhamento da operação; dados de demonstração',
      },
      {
        id: 'seller',
        label: 'Seller',
        eyebrow: 'Vender',
        description: 'A rotina de quem vende na sua base.',
        title: 'Da oferta ao acompanhamento da venda.',
        body: 'O seller organiza produtos e ofertas, acompanha pagamentos e consulta seu financeiro. Integrações e acessos delegados apoiam a rotina dentro das permissões da conta.',
        asset: 'seller',
        alt: 'Prévia do painel seller com visão de vendas e financeiro; dados de demonstração',
      },
      {
        id: 'staff',
        label: 'Staff',
        eyebrow: 'Atender',
        description: 'A carteira de quem acompanha a base.',
        title: 'Atendimento sem abrir toda a operação.',
        body: 'A equipe trabalha com sellers da carteira atribuída. Consultas e ações dependem das permissões concedidas; fazer parte do staff não libera acesso irrestrito ao gateway.',
        asset: 'staff',
        alt: 'Prévia do painel staff para acompanhamento de carteira; dados de demonstração',
      },
    ] satisfies readonly (ContentItem & {
      label: string;
      eyebrow: string;
      body: string;
      asset: 'gateway' | 'seller' | 'staff';
      alt: string;
    })[],
  },
  breadcrumbLabel: 'Você está aqui',
  homeLabel: 'Início',
  pageLabel: 'Plataforma',
  sectionIndexLabel: 'Nesta página',
  sectionIndex: [
    { label: 'Painéis', href: '#paineis' },
    { label: 'Identidade', href: '#identidade' },
    { label: 'Sellers', href: '#gestao-sellers' },
    { label: 'Adquirência', href: '#multiadquirencia' },
    { label: 'Arquitetura', href: '#arquitetura' },
    { label: 'Continuar', href: '#continuar' },
  ],
  identity: {
    label: 'Identidade e condições',
    heading: {
      title: 'A marca apresenta.',
      muted: 'As regras sustentam.',
      description:
        'A experiência visual e o modelo comercial são camadas da mesma operação. Cada uma tem sua configuração.',
    },
    items: [
      {
        id: 'marca-dominio',
        eyebrow: 'Identidade',
        title: 'Sua marca também no endereço.',
        description:
          'Identidade, logos e temas personalizam os painéis. Domínios próprios dependem de DNS, verificação e TLS, com disponibilidade validada para cada superfície no projeto.',
        image: {
          asset: 'identity',
          alt: 'Ilustração da identidade visual aplicada à operação white label',
        },
        link: { label: 'Entender a implantação', href: '/contratacao#implantacao' },
      },
      {
        id: 'condicoes-comerciais',
        eyebrow: 'Modelo comercial',
        title: 'Condições por seller, não só uma tabela geral.',
        description:
          'Taxas e comissões permitem regras e exceções por seller e meio de pagamento. São configurações da sua operação, distintas dos custos e condições dos parceiros financeiros.',
        image: { asset: 'policies', alt: 'Ilustração de regras comerciais e condições por seller' },
        link: { label: 'Aprofundar o financeiro', href: '/financeiro' },
      },
    ] satisfies readonly ModuleItem[],
  },
  sellers: {
    label: 'Gestão de sellers',
    heading: {
      title: 'Uma base para acompanhar.',
      muted: 'Não só para cadastrar.',
    },
    items: [
      {
        id: 'carteiras-permissoes',
        title: 'Cadastro, acompanhamento e delegação.',
        description:
          'Acompanhe o seller desde a entrada na base e distribua o atendimento. Cada integrante do staff recebe uma carteira de sellers e as permissões necessárias para trabalhar com ela.',
        image: {
          asset: 'controlManagement',
          alt: 'Ilustração de acompanhamento de sellers, status e revisão operacional',
        },
        imageSide: 'right',
        points: [
          {
            id: 'admissao',
            title: 'Entrada com revisão',
            description:
              'Documentos, status e histórico ajudam a aprovar, recusar ou pedir informações adicionais.',
          },
          {
            id: 'delegacao',
            title: 'Staff com carteira e permissões',
            description:
              'Atribua sellers e delimite quem pode consultar e executar ações na operação.',
          },
          {
            id: 'equipe-seller',
            title: 'Equipe própria do seller',
            description:
              'Convites e permissões permitem delegar tarefas da conta sem compartilhar o mesmo login.',
          },
        ],
      },
    ] satisfies readonly EditorialItem[],
  },
  acquiring: {
    label: 'Multiadquirência',
    heading: {
      eyebrow: 'Elegibilidade antes da prioridade',
      title: 'Escolha a rota.',
      muted: 'Preserve as regras da operação.',
      description:
        'As regras delimitam os processadores elegíveis; as prioridades organizam a escolha entre eles. Métodos e recursos dependem das conexões habilitadas, e a aprovação continua sujeita à análise do processador.',
    } satisfies PageHeading,
    imageAlt: 'Ilustração de processadores e prioridades de roteamento de pagamentos',
    items: [
      {
        id: 'habilitacoes',
        title: 'Habilite a operação',
        description:
          'Parceiro, conta e credenciais precisam estar configurados. Cartão, Pix, boleto e recursos adicionais dependem do suporte e da habilitação de cada opção.',
      },
      {
        id: 'rotas-elegiveis',
        title: 'Aplique os limites',
        description:
          'Restrições obrigatórias vêm primeiro. Método, valor e demais condições da transação delimitam as rotas que podem participar.',
      },
      {
        id: 'prioridades',
        title: 'Defina a ordem',
        description:
          'Organize prioridades por meio de pagamento. Quando permitido, o seller pode indicar uma preferência entre as opções elegíveis, sempre dentro dos limites definidos pelo gateway.',
      },
      {
        id: 'resultado',
        title: 'Trate o resultado real',
        description:
          'Alternativas dependem do estado da tentativa e das regras de falha. Um timeout ambíguo exige consulta ou reconciliação; não é autorização para repetir a cobrança.',
      },
    ] satisfies readonly ContentItem[],
    link: { label: 'Conectar sistemas à operação', href: '/integracoes' },
  },
  architecture: {
    label: 'Arquitetura e responsabilidades',
    heading: {
      title: 'Compartilhar a plataforma.',
      muted: 'Delimitar os contextos.',
    } satisfies PageHeading,
    description:
      'O gateway é um contexto próprio dentro da plataforma. O isolamento lógico por tenant e as verificações de acesso delimitam os dados; não representam infraestrutura física dedicada por cliente.',
    imageAlt: 'Ilustração de arquitetura com contextos isolados por gateway e acessos por papel',
    items: [
      {
        id: 'escopos',
        title: 'Escopo e permissão',
        description:
          'Gateway-admin, staff e seller têm responsabilidades diferentes. Carteiras e acessos delegados acrescentam limites dentro de cada contexto.',
      },
      {
        id: 'rastreabilidade',
        title: 'Ações com autoria',
        description:
          'Sessões, 2FA e trilhas de auditoria apoiam o controle de acesso e a investigação de ações operacionais.',
      },
      {
        id: 'responsabilidades',
        title: 'Responsabilidades explícitas',
        description:
          'Você administra sua base e suas regras. A Paragan sustenta a plataforma; parceiros habilitados processam os serviços financeiros contratados.',
      },
    ] satisfies readonly ContentItem[],
  },
  related: {
    label: 'Próximas conexões',
    heading: { title: 'Do desenho da operação', muted: 'ao próximo passo.' },
    items: [
      {
        id: 'checkout',
        title: 'A experiência do comprador',
        description: 'Como produtos, ofertas e pagamentos chegam ao checkout.',
        href: '/checkout',
      },
      {
        id: 'financeiro',
        title: 'O contexto dos valores',
        description: 'Condições comerciais, saldos, reservas e solicitações de saque.',
        href: '/financeiro',
      },
      {
        id: 'integracoes',
        title: 'As conexões técnicas',
        description: 'API, webhooks e permissões para conectar sistemas.',
        href: '/integracoes',
      },
      {
        id: 'contratacao',
        title: 'Seu projeto de gateway',
        description: 'Escopo, dependências e responsabilidades da contratação.',
        href: '/contratacao',
      },
    ],
  },
};
