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
// Sem src: manter o placeholder até a entrega da peça. Para trocar por SVG,
// altere somente o caminho aqui; os componentes preservam seus textos alternativos.
export const illustrationAssets = {
  gateway: asset('01', 4096, 2379, '/assets/screenshots/page-admin.png'),
  seller: asset('02', 4096, 2379, '/assets/screenshots/page-seller.png'),
  staff: asset('03', 4096, 2379, '/assets/screenshots/page-staff.png'),
  identity: asset('04', 1000, 500, '/assets/illustrations/04 - identidade.png'),
  policies: asset('05', 1000, 500, '/assets/illustrations/05 - Regras comerciais.png'),
  people: asset('06', 1000, 500, '/assets/illustrations/06 - Pessoas.png'),
  engagement: asset('07', 1000, 500, '/assets/illustrations/07 - Relacionamento.png'),
  acquiring: asset('08', 1000, 500, '/assets/illustrations/08 - Adquirência.png'),
  finance: asset('09', 1000, 500, '/assets/illustrations/09 - Saldos e extrato.png'),
  checkout: asset('10', 1000, 500, '/assets/illustrations/10 - Oferta e resumo.png'),
  integrations: asset('11', 1000, 500, '/assets/illustrations/11 - Evento e entrega.png'),
  controlManagement: asset('12', 1000, 850),
  controlCommercial: asset('13', 1000, 850),
  controlWithdrawals: asset('14', 1000, 850),
  checkoutJourney: asset('15', 4096, 2379, '/assets/screenshots/checkout.png'),
  financialComposition: asset('16', 1200, 800),
  ecosystem: asset('17', 1200, 720),
  apiRetry: asset('18', 1200, 600),
  architecture: asset('19', 1200, 700),
  launch: asset('20', 1200, 640),
  migration: asset('21', 1200, 640),
  incorporation: asset('22', 1200, 640),
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
  operations: {
    management: illustrationAssets.controlManagement,
    commercial: illustrationAssets.controlCommercial,
    finance: illustrationAssets.controlWithdrawals,
  },
  audience: {
    operators: illustrationAssets.launch,
    platforms: illustrationAssets.migration,
    creators: illustrationAssets.incorporation,
  },
};
