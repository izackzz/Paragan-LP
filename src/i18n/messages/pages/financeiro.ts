export const financeiroCopy = {
  metadata: {
    title: 'Financeiro para gateway de pagamentos | Paragan',
    description:
      'Organize taxas, comissões, saldos, reservas, extratos e solicitações de saque no financeiro do seu gateway de pagamentos, sem confundir registros com liquidação.',
    imageAlt: 'Paragan — gestão financeira para o seu gateway',
  },
  hero: {
    eyebrow: 'Financeiro do gateway',
    title: 'Financeiro para gateway de pagamentos.',
    muted: 'Cada valor com seu contexto.',
    description:
      'Da condição comercial ao lançamento no extrato: organize taxas e comissões, acompanhe saldos e reservas e conduza solicitações de saque com contexto para decidir.',
    primaryAction: 'Conversar sobre minha operação',
    secondaryAction: 'Entender a composição',
  },
  overview: {
    label: 'Composição financeira',
    heading: {
      eyebrow: 'Leitura antes da decisão',
      title: 'Receitas, taxas e custos.',
      muted: 'Uma leitura por competência.',
    },
    description:
      'Acompanhe o que foi cobrado, os custos registrados e os ajustes no período correspondente. O volume vendido pelos sellers mostra o tamanho da operação; a receita do gateway mostra o que seu modelo comercial gera.',
    imageAlt:
      'Ilustração conceitual da composição financeira entre receitas, custos e resultado operacional',
    caption:
      'Representação ilustrativa. Valores e proporções da arte não são métricas reais nem projeção de retorno.',
    items: [
      {
        id: 'conceito-receita',
        title: 'Receita',
        description:
          'O que a operação gera com sua estrutura comercial, separado do valor total movimentado pelos sellers.',
      },
      {
        id: 'conceito-taxa',
        title: 'Taxa cobrada',
        description:
          'A condição aplicada à operação do seller. Não é sinônimo do custo que um parceiro cobra do gateway.',
      },
      {
        id: 'conceito-custo',
        title: 'Custo registrado',
        description:
          'O custo informado e disponível no sistema. Quando falta informação de um parceiro, ausência não significa custo zero.',
      },
      {
        id: 'conceito-resultado',
        title: 'Resultado operacional',
        description:
          'Uma leitura dos componentes disponíveis e seus ajustes, não lucro líquido contábil. Lacunas impedem concluir uma margem completa.',
      },
    ],
  },
  commercial: {
    label: 'Condições e comissões',
    heading: {
      title: 'Uma política comercial.',
      muted: 'Condições para cada relação.',
      description:
        'Estruture a cobrança do gateway sem confundir preço ao seller, custo de processamento e participação comercial.',
    },
    fees: {
      eyebrow: 'Taxas por contexto',
      title: 'Defina regras. Trate exceções.',
      description:
        'Defina padrões da operação e condições específicas por seller e meio de pagamento. Compare o que você cobra com os custos registrados dos parceiros, sem misturar essas duas camadas.',
      imageAlt: 'Ilustração de regras comerciais por seller e meio de pagamento',
      link: 'Entender a multiadquirência',
    },
    commissions: {
      eyebrow: 'Participação comercial',
      title: 'Fixa, percentual ou híbrida.',
      description:
        'Configure o modelo de comissão da operação e acompanhe participações de afiliados com cadastro e histórico. Comissão comercial e split entre participantes são mecanismos distintos; um não implica o outro.',
      imageAlt: 'Ilustração do controle comercial e das condições de uma operação',
      link: 'Conversar sobre as condições',
    },
  },
  balances: {
    label: 'Saldos e reservas',
    heading: {
      title: 'O saldo tem estados.',
      muted: 'A liberação tem regras.',
      description:
        'Separe o que está disponível, o que aguarda liberação e o que permanece reservado. Esses estados pertencem ao controle interno: não são comprovante de liquidação bancária.',
    },
    title: 'Leia a posição do seller antes de autorizar uma saída.',
    description:
      'Reservas e prazos de liberação seguem a política configurada. Liberação antecipada autorizada de saldo é um controle operacional, não uma oferta de crédito ou antecipação financeira.',
    imageAlt: 'Ilustração de saldo disponível, pendente, reservado e extrato de lançamentos',
    points: [
      {
        id: 'saldo-disponivel',
        title: 'Disponível',
        description:
          'Posição interna elegível à solicitação de saque, sujeita à política e às autorizações da operação.',
      },
      {
        id: 'saldo-pendente',
        title: 'Pendente',
        description:
          'Recebíveis com disponibilização futura conforme a regra de liberação aplicável.',
      },
      {
        id: 'saldo-reservado',
        title: 'Reservado',
        description: 'Valores retidos por reserva de risco, separados do saldo disponível.',
      },
    ],
  },
  movement: {
    label: 'Extrato e saques',
    heading: {
      title: 'O extrato explica o saldo.',
      muted: 'O status acompanha a saída.',
      description:
        'Consulte os lançamentos e seus efeitos no saldo. Uma solicitação, uma aprovação e uma transferência concluída são momentos diferentes.',
    },
    items: [
      {
        id: 'movimento-lancamentos',
        title: 'Lançamentos com contexto',
        description:
          'Consulte tipo, valor, taxa, líquido, data e referência de origem quando disponível. O extrato ajuda a entender a composição do saldo.',
      },
      {
        id: 'movimento-ajustes',
        title: 'Estornos e reversões',
        description:
          'Acompanhe ajustes que alteram a posição financeira. Reembolsos e contestações podem gerar débitos, inclusive saldo disponível negativo.',
      },
      {
        id: 'movimento-solicitacao',
        title: 'Solicitação e autorização',
        description:
          'Organize pedidos em fila, com aprovação ou rejeição e política por seller. Saldo disponível não dispensa análise e permissões.',
      },
      {
        id: 'movimento-execucao',
        title: 'Execução pelo parceiro',
        description:
          'O pagamento de saída depende do parceiro bancário habilitado, do destino e da autorização. Acompanhe o status e a reconciliação do payout.',
      },
    ],
    note: 'Um lançamento no ledger interno não prova liquidação. A confirmação da saída depende do retorno do parceiro; pedido criado ou aprovado não significa dinheiro transferido.',
  },
  faq: {
    label: 'Dúvidas financeiras',
    heading: {
      title: 'O que cada informação',
      muted: 'permite concluir.',
      description: 'Distinções importantes para ler o financeiro e definir o escopo da operação.',
    },
    items: [
      {
        id: 'faq-custo-ausente',
        question: 'Se um custo não aparece, posso considerar o valor como lucro?',
        answer:
          'Não. Custo não informado é uma lacuna, não custo zero. O resultado depende dos componentes disponíveis na competência; sem os custos necessários, não é possível concluir uma margem completa. A leitura operacional também não substitui a apuração contábil da empresa.',
      },
      {
        id: 'faq-split',
        question: 'Split significa que cada participante recebe direto na origem?',
        answer:
          'Não necessariamente. O split permite definir valores ou percentuais e responsabilidades entre participantes. A forma de execução e liquidação depende das capacidades do parceiro e da configuração da operação. Não há liquidação bancária universal na origem para todos os processadores.',
      },
      {
        id: 'faq-saque',
        question: 'Saldo disponível garante saque imediato?',
        answer:
          'Não. É um estado do saldo interno. O saque segue a política por seller, as autorizações e eventuais restrições cadastrais ou de risco. A execução ainda depende do parceiro habilitado e de sua confirmação, sem prazo universal de conclusão.',
      },
      {
        id: 'faq-custodia',
        question: 'O painel funciona como conta bancária ou custódia da Paragan?',
        answer:
          'Não. O painel registra e organiza a posição financeira da operação. Movimentação e liquidação dependem dos parceiros financeiros habilitados e dos contratos aplicáveis. O saldo mostrado no sistema não é, isoladamente, prova de recursos liquidados ou custodiados pela Paragan.',
      },
      {
        id: 'faq-antecipacao',
        question: 'Antecipação de recebíveis está incluída?',
        answer:
          'Não deve ser presumida como disponível. Elegibilidade, simulação e solicitação dependem das regras e do parceiro habilitado para a operação. Esses recursos não constituem promessa de crédito, aprovação ou liquidez. A liberação operacional de uma reserva é uma decisão diferente.',
      },
    ],
  },
  related: {
    label: 'Próximos caminhos',
    heading: {
      title: 'Conecte o financeiro',
      muted: 'ao desenho da operação.',
    },
    checkout: {
      title: 'Da oferta ao pagamento',
      description: 'Conheça a jornada de venda que dá origem aos registros financeiros.',
    },
    integrations: {
      title: 'Eventos e sistemas próprios',
      description: 'Entenda os caminhos de integração para acompanhar a operação fora do painel.',
    },
    contracting: {
      title: 'Escopo e contratação',
      description: 'Alinhe condições, responsabilidades e dependências antes de começar.',
    },
    contact: {
      title: 'Vamos olhar o seu modelo',
      description: 'Converse sobre sellers, política comercial e necessidades de saída.',
    },
  },
} as const;
