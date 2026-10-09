// Destinations and presentation data are not copy and never belong in translations.
export const destinations = {
  header: {
    items: {
      gateway: '#inicio',
      checkout: '#checkout',
      sellers: '#operacao',
      finance: '#financeiro',
      acquiring: '#integracoes',
      conditions: '#condicoes-comerciais',
      launch: '#cenario-launch',
      migration: '#cenario-migration',
      platforms: '#cenario-platforms',
      documentation: '#recursos-tecnicos',
      api: '#api',
      webhooks: '#webhooks',
      integrations: '#catalogo-integracoes',
      about: '#responsaveis',
      structure: '#estrutura',
      partners: '#referencias-institucionais',
      contact: '#contato',
    },
    actions: { plans: '#implantacao', contact: '#contato' },
  },
  content: '#conteudo',
  home: '#inicio',
  contact: '#contato',
  productPreview: '#previa-produto',
  checkoutDemo: '#demonstracao-checkout',
  footer: {
    home: '/#inicio',
    contact: '/#contato',
    groups: {
      platform: {
        overview: '/#inicio',
        operations: '/#operacao',
        finance: '/#financeiro',
        checkout: '/#checkout',
        integrations: '/#integracoes',
      },
      developers: {
        documentation: '/#recursos-tecnicos',
        api: '/#api',
        webhooks: '/#webhooks',
        resources: '/#evidencias',
      },
      company: {
        about: '/#responsaveis',
        onboarding: '/#implantacao',
        questions: '/#perguntas',
        contact: '/#contato',
      },
    },
  },
  social: {
    instagram: 'https://instagram.com/paraganlabs',
    twitter: undefined,
    telegram: 'https://paraganlabs.t.me',
    whatsapp: 'https://wa.me/5573988801054',
  },
};

export const presentation = {
  sectionCount: 10,
  sections: {
    introduction: 1,
    audience: 2,
    operations: 3,
    sales: 5,
    ledger: 4,
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

export const contactScenarios = ['launch', 'migration', 'platforms'] as const;
export type ContactScenario = (typeof contactScenarios)[number];
export const contactOrigins = [
  'inicio',
  'solucoes',
  'operacao',
  'financeiro',
  'checkout',
  'integracoes',
  'estrutura',
  'implantacao',
  'perguntas',
] as const;
export type ContactOrigin = (typeof contactOrigins)[number];
export const integrationCatalog = { published: false };
export const evidenceResources = [
  'documentation',
  'sandbox',
  'demonstrations',
  'reports',
  'operations',
] as const;
export const contactDelivery = { mode: 'local' } as const;
