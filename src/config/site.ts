// Destinations and presentation data are not copy and never belong in translations.
export const destinations = {
  header: {
    items: {
      gateway: '/plataforma',
      checkout: '/checkout',
      sellers: '/plataforma#gestao-sellers',
      finance: '/financeiro',
      acquiring: '/plataforma#multiadquirencia',
      subscriptions: '/checkout#assinaturas',
      launch: '/solucoes#lancamento',
      migration: '/solucoes#migracao',
      platforms: '/solucoes#plataformas',
      digital: '/checkout#entrega-digital',
      overview: '/integracoes',
      api: '/integracoes#api',
      webhooks: '/integracoes#webhooks',
      integrations: '/integracoes#apps',
    },
    actions: { plans: '/contratacao', contact: '/contato' },
  },
  content: '#conteudo',
  home: '/#inicio',
  contact: '/contato',
  preview: '/#previa-produto',
  checkout: '/checkout',
  finance: '/financeiro',
  integrations: '/integracoes',
  solutions: {
    operators: '/solucoes#lancamento',
    platforms: '/solucoes#migracao',
    creators: '/solucoes#projeto',
  },
  footer: {
    home: '/#inicio',
    contact: '/contato',
    backToTop: '#inicio',
    groups: {
      platform: { overview: '/plataforma', checkout: '/checkout', finance: '/financeiro' },
      resources: {
        integrations: '/integracoes',
        onboarding: '/contratacao#implantacao',
        questions: '/#perguntas',
      },
      company: { about: '/contratacao', solutions: '/solucoes', contact: '/contato' },
    },
  },
  social: {
    instagram: 'https://instagram.com/paraganlabs',
    telegram: 'https://paraganlabs.t.me',
    whatsapp: 'https://wa.me/5573988801054',
  },
};

export const presentation = {
  sectionCount: 10,
  sections: {
    capabilities: 1,
    audience: 2,
    operations: 3,
    ledger: 4,
    sales: 5,
    connectivity: 6,
    reliability: 7,
    onboarding: 8,
    questions: 9,
    inquiry: 10,
  },
  placeholder: {
    origin: 'https://placehold.co',
    darkPalette: '171717/eeeeee',
    lightPalette: 'edf2ee/7d9285',
    font: 'poppins',
  },
};
