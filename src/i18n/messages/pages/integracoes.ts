export const integracoesCopy = {
  metadata: {
    title: 'Integrações: API, webhooks e apps | Paragan',
    description:
      'Entenda como conectar sistemas próprios ao seu gateway: API por escopo, webhooks assinados, apps dos sellers e adquirência com responsabilidades definidas.',
    imageAlt: 'Paragan — integrações entre gateway, sellers e sistemas próprios',
  },
  hero: {
    eyebrow: 'Integrações',
    title: 'Sistemas, eventos e apps.',
    muted: 'Conexões com papéis definidos.',
    description:
      'Seu sistema faz uma solicitação pela API. Um webhook informa o que mudou. Um app amplia a rotina do seller. A adquirência processa o pagamento. Entenda como essas peças trabalham juntas.',
    primaryAction: 'Conversar sobre a integração',
    secondaryAction: 'Entender a API',
  },
  ecosystem: {
    label: 'Ecossistema',
    heading: {
      title: 'Do sistema que você usa',
      muted: 'ao pagamento que sua base recebe.',
      description:
        'Uma integração de negócio e uma conexão com um processador resolvem problemas diferentes — e podem fazer parte da mesma operação.',
    },
    items: [
      {
        id: 'sistemas',
        title: 'Do gateway para o seu sistema',
        description:
          'ERP, plataforma de vendas ou serviço interno: a API permite executar ações e consultar recursos autorizados. Os webhooks levam as mudanças de estado ao seu backend para alimentar os próximos passos.',
        image: {
          asset: 'ecosystem',
          alt: 'Ecossistema de conexões da operação Paragan',
        },
        imageSide: 'right',
      },
      {
        id: 'processadores',
        title: 'Da operação para a adquirência',
        description:
          'A conexão com processadores pertence à camada de pagamentos. Meios, funcionalidades e rotas elegíveis dependem do parceiro e da configuração habilitada no gateway; não são apps instalados pelo seller.',
        image: {
          asset: 'acquiring',
          alt: 'Representação da camada de adquirência e das rotas de pagamento',
        },
        linkLabel: 'Conhecer a multiadquirência',
      },
    ],
  },
  api: {
    label: 'API e acesso',
    heading: {
      title: 'O acesso acompanha a responsabilidade.',
      muted: 'Sessão de usuário não é chave de integração.',
      description:
        'O contrato da API define recursos, permissões e operações por escopo. O acesso do gateway administra sua operação; o do seller atua nos recursos autorizados da própria conta.',
    },
    items: [
      {
        id: 'sessoes',
        eyebrow: 'Pessoas e painéis',
        title: 'JWT para sessões autenticadas.',
        description:
          'Nos painéis, a sessão identifica o usuário, seu contexto e suas permissões. O fluxo de login, renovação e autenticação em dois fatores pertence a essa experiência — não deve ser substituído pelo compartilhamento de uma chave secreta.',
      },
      {
        id: 'servidores',
        eyebrow: 'Sistemas próprios',
        title: 'Chaves do seller para servidor a servidor.',
        description:
          'No backend da integração, use uma chave com apenas os scopes necessários. Guarde o segredo em ambiente protegido, nunca no navegador. Separe chaves por serviço para poder revogar ou rotacionar um acesso sem compartilhar credenciais.',
      },
    ],
  },
  webhooks: {
    label: 'Eventos e entregas',
    heading: {
      title: 'Um evento acontece.',
      muted: 'Seu sistema sabe como reagir.',
      description:
        'Mudanças de pagamento e outros eventos assinados permitem conectar a operação aos seus processos, sem depender de consultas contínuas para descobrir cada atualização.',
    },
    items: [
      {
        id: 'ciclo-de-eventos',
        title: 'Evento → entrega → ação',
        description:
          'Você configura o destino e os eventos relevantes. A Paragan envia a notificação; seu backend valida a origem e decide qual processo executar.',
        image: {
          asset: 'integrations',
          alt: 'Fluxo entre evento, entrega de webhook e reação do sistema integrado',
        },
        imageSide: 'right',
        points: [
          {
            id: 'validacao',
            title: 'Validar antes de agir',
            description:
              'Confira a assinatura HMAC sobre o corpo original e o timestamp. Registre o evento com segurança antes de confirmar o recebimento e processar a ação.',
          },
          {
            id: 'repeticao',
            title: 'Preparar para repetição e ordem variável',
            description:
              'Identifique repetições pelo identificador do evento e torne a ação idempotente. Uma nova entrega não significa um novo negócio, e a ordem de chegada não é garantida.',
          },
          {
            id: 'tentativas',
            title: 'Acompanhar o que foi entregue',
            description:
              'Tentativas, histórico de entregas e reenvio ajudam a investigar falhas. A rotação do segredo faz parte da manutenção do receptor.',
          },
        ],
      },
    ],
  },
  apps: {
    label: 'Apps dos sellers',
    heading: {
      title: 'Extensões para a rotina da sua base.',
      muted: 'Com autorização do seller.',
      description:
        'O catálogo reúne extensões com finalidade e permissões definidas. O seller escolhe o que faz sentido para sua rotina e mantém o controle sobre os acessos concedidos.',
    },
    items: [
      {
        id: 'extensoes',
        title: 'Instalação, permissões e controle',
        description:
          'O seller consulta os apps disponíveis, revisa as permissões solicitadas e autoriza a instalação. Pode desinstalar a extensão quando ela deixar de fazer parte da operação.',
        image: {
          asset: 'sellerAutomations',
          alt: 'Representação das conexões e automações na rotina dos sellers',
        },
        points: [
          {
            id: 'catalogo',
            title: 'Conhecer antes de autorizar',
            description:
              'Consulte a finalidade, a versão e as permissões de cada app disponível. Uma atualização que solicite novos acessos exige revisar o consentimento antes de continuar.',
          },
          {
            id: 'automacao',
            title: 'Construir o que é próprio do negócio',
            description:
              'Se a rotina exige regras específicas do seu sistema, combine API e eventos. A lógica da automação fica no serviço que recebe e processa essas informações.',
          },
        ],
        linkLabel: 'Ver a experiência de checkout',
      },
    ],
  },
  validation: {
    label: 'Preparação técnica',
    heading: {
      title: 'Conectar é o começo.',
      muted: 'Operar bem exige continuidade.',
      description:
        'Filas e processamento assíncrono fazem parte da arquitetura. Na integração, planeje também o que acontece quando uma resposta demora, um evento se repete ou um serviço fica indisponível.',
    },
    items: [
      {
        id: 'definir',
        title: 'Definir o contexto',
        description:
          'Mapeie quem executa cada ação, os recursos necessários e as permissões mínimas. Confirme os meios e parceiros habilitados para o projeto.',
      },
      {
        id: 'repetir',
        title: 'Preservar a operação',
        description:
          'Nas mutações que exigem idempotência, use uma chave por operação lógica e mantenha a mesma chave e o mesmo conteúdo nas retentativas.',
      },
      {
        id: 'recuperar',
        title: 'Tratar as exceções',
        description:
          'Diferencie falha de validação, permissão e indisponibilidade. Respeite os limites de chamadas e o intervalo informado ao receber uma resposta 429.',
      },
      {
        id: 'acompanhar',
        title: 'Manter rastreabilidade',
        description:
          'Correlacione recursos e eventos, registre o identificador da requisição nos erros e acompanhe as entregas. Não grave segredos nos logs.',
      },
    ],
  },
  faq: {
    label: 'Dúvidas de integração',
    heading: {
      title: 'Escolha o caminho.',
      muted: 'Sem misturar as camadas.',
    },
    items: [
      {
        id: 'api-ou-app',
        question: 'Preciso desenvolver uma integração para usar o gateway?',
        answer:
          'Não necessariamente. Os painéis e o checkout atendem às rotinas do produto. Apps disponíveis podem ampliar usos específicos. A integração própria entra quando outro sistema precisa executar ações ou receber informações automaticamente.',
      },
      {
        id: 'confirmacao',
        question: 'O retorno do navegador confirma um pagamento?',
        answer:
          'Não. A confirmação deve considerar o estado financeiro do pagamento, obtido pelos mecanismos da API e pelos eventos correspondentes. Um redirecionamento de página, sozinho, não é confirmação de recebimento.',
      },
      {
        id: 'reentrega',
        question: 'Um webhook pode chegar mais de uma vez?',
        answer:
          'Sim. Retentativas e reenvios fazem parte do fluxo, e a ordem de chegada não é garantida. O receptor precisa validar a assinatura, identificar duplicatas e impedir que o mesmo evento gere uma segunda ação indevida.',
      },
      {
        id: 'parceiros',
        question: 'Posso usar qualquer processador ou app?',
        answer:
          'A disponibilidade depende do catálogo, das configurações e das capacidades habilitadas para a operação. Na avaliação técnica, confirme os parceiros, os meios de pagamento e os fluxos necessários ao seu projeto.',
      },
    ],
  },
  related: {
    label: 'Próximos passos',
    heading: {
      title: 'Da conexão ao projeto.',
      muted: 'Veja o restante da operação.',
    },
    items: [
      {
        id: 'plataforma',
        title: 'Multiadquirência',
        description: 'Entenda a camada de processadores e a configuração das rotas de pagamento.',
      },
      {
        id: 'checkout',
        title: 'Checkout',
        description: 'Conheça a jornada entre oferta, pagamento e experiência do comprador.',
      },
      {
        id: 'contratacao',
        title: 'Contratação e implantação',
        description: 'Organize os requisitos e a preparação da sua operação.',
      },
      {
        id: 'contato',
        title: 'Converse sobre seu cenário',
        description: 'Traga os sistemas, as rotinas e as conexões que seu projeto precisa.',
      },
    ],
  },
} as const;
