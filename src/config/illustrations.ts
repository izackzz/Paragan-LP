type IllustrationAsset = {
  id: string;
  width: number;
  height: number;
  src?: string;
};

function asset(
  id: string,
  width: number,
  height: number,
  src: string,
): IllustrationAsset & { src: string };
function asset(id: string, width: number, height: number): IllustrationAsset;
function asset(id: string, width: number, height: number, src?: string): IllustrationAsset {
  return { id, width, height, src };
}

// IDs seguem docs/copy/07-roteiro-de-ilustracoes-e-motion.md.
// Ilustrações SVG pareadas pela numeração; nomes semânticos vêm dos PNGs originais.
// Screenshots permanecem raster. Os componentes preservam seus textos alternativos.
export const illustrationAssets = {
  gateway: asset('01', 4096, 2379, '/assets/screenshots/page-admin.png'),
  seller: asset('02', 4096, 2379, '/assets/screenshots/page-seller.png'),
  staff: asset('03', 4096, 2379, '/assets/screenshots/page-staff.png'),
  identity: asset('04', 1000, 500, '/assets/illustrations/svg/04-identidade.svg'),
  policies: asset('05', 1000, 500, '/assets/illustrations/svg/05-regras-comerciais.svg'),
  people: asset('06', 1000, 500, '/assets/illustrations/svg/06-pessoas.svg'),
  engagement: asset('07', 1000, 500, '/assets/illustrations/svg/07-relacionamento.svg'),
  acquiring: asset('08', 1000, 500, '/assets/illustrations/svg/08-adquirencia.svg'),
  finance: asset('09', 1000, 500, '/assets/illustrations/svg/09-saldos-e-extrato.svg'),
  checkout: asset('10', 1000, 500, '/assets/illustrations/svg/10-oferta-e-resumo.svg'),
  integrations: asset('11', 1000, 500, '/assets/illustrations/svg/11-evento-e-entrega.svg'),
  launch: asset('12', 1200, 640, '/assets/illustrations/svg/12-lancamento.svg'),
  migration: asset('13', 1200, 640, '/assets/illustrations/svg/13-migracao.svg'),
  projectPlanning: asset('14', 1200, 640, '/assets/illustrations/svg/14-definicao-do-projeto.svg'),
  controlManagement: asset('15', 1000, 850, '/assets/illustrations/svg/15-controle-operacional.svg'),
  controlCommercial: asset('16', 1000, 850, '/assets/illustrations/svg/16-controle-comercial.svg'),
  controlFinance: asset('17', 1000, 850, '/assets/illustrations/svg/17-controle-financeiro.svg'),
  financialComposition: asset('18', 1200, 800, '/assets/illustrations/svg/18-composicao-financeira.svg'),
  checkoutJourney: asset('19', 2750, 2450, '/assets/screenshots/checkout.png'),
  ecosystem: asset('20', 1200, 720, '/assets/illustrations/svg/20-ecossistema.svg'),
  sellerAutomations: asset('21', 1200, 600, '/assets/illustrations/svg/21-automacoes-dos-sellers.svg'),
  architecture: asset('22', 1200, 700, '/assets/illustrations/svg/22-arquitetura-e-isolamento.svg'),
};

// Chaves correspondem às abas e aos cards da copy atual.
export const illustrationSlots = {
  hero: {
    gateway: illustrationAssets.gateway,
    seller: illustrationAssets.seller,
    checkout: illustrationAssets.staff,
  },
  capabilities: {
    identity: illustrationAssets.identity,
    policies: illustrationAssets.policies,
    people: illustrationAssets.people,
    engagement: illustrationAssets.engagement,
    acquiring: illustrationAssets.acquiring,
    finance: illustrationAssets.finance,
    checkout: illustrationAssets.checkout,
    integrations: illustrationAssets.integrations,
  },
  audience: {
    operators: illustrationAssets.launch,
    platforms: illustrationAssets.migration,
    creators: illustrationAssets.projectPlanning,
  },
  operations: {
    management: illustrationAssets.controlManagement,
    commercial: illustrationAssets.controlCommercial,
    finance: illustrationAssets.controlFinance,
  },
};
