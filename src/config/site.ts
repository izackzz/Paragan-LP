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
export const contactSubjects = [
  'demonstration',
  'finance',
  'checkout',
  'recurrence',
  'split',
  'acquiring',
  'tools',
  'api',
  'webhooks',
  'documentation',
  'integration',
  'isolation',
  'integrity',
  'recovery',
  'support',
  'sandbox',
  'reports',
  'faq',
] as const;
export type ContactSubject = (typeof contactSubjects)[number];
export const integrationCatalog = { published: false };
// Editorial slots, not available integrations. Logo and artwork are independent.
export const integrationSlots: Record<
  'acquiring' | 'tools',
  { id: string; logoSrc?: string; illustrationSrc?: string }[]
> = {
  acquiring: [{ id: 'acquiring-01' }, { id: 'acquiring-02' }, { id: 'acquiring-03' }],
  tools: [{ id: 'tools-01' }, { id: 'tools-02' }, { id: 'tools-03' }],
};
export const evidenceResources = [
  'documentation',
  'sandbox',
  'demonstrations',
  'reports',
  'operations',
] as const;
export const contactDelivery = { mode: 'local' } as const;
