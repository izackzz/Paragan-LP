export type PricingModel = 'fixed' | 'percentage' | 'hybrid';

export type ViabilityInputs = {
  ownSales: number;
  sellers: number;
  salesPerSeller: number;
  ticketCents: number;
  growthBps: number;
  model: PricingModel;
  sellerRateBps: number;
  sellerFixedCents: number;
  paraganRateBps: number;
  paraganFixedCents: number;
  cardRateBps: number;
  cardFixedCents: number;
  pixRateBps: number;
  pixFixedCents: number;
  pixShareBps: number;
  monthlyCostsCents: number;
};

// Hypotheses for a simulation, not Paragan's commercial price list.
export const initialViability: ViabilityInputs = {
  ownSales: 150,
  sellers: 20,
  salesPerSeller: 30,
  ticketCents: 20000,
  growthBps: 500,
  model: 'hybrid',
  sellerRateBps: 549,
  sellerFixedCents: 149,
  paraganRateBps: 70,
  paraganFixedCents: 20,
  cardRateBps: 329,
  cardFixedCents: 30,
  pixRateBps: 69,
  pixFixedCents: 10,
  pixShareBps: 6000,
  monthlyCostsCents: 150000,
};

export const comparisonPresets = [
  { id: 'kiwify', name: 'Kiwify', rateBps: 899, fixedCents: 249 },
  { id: 'hotmart', name: 'Hotmart', rateBps: 990, fixedCents: 100 },
  { id: 'perfectpay', name: 'Perfect Pay', rateBps: 890, fixedCents: 100 },
  { id: 'kirvano', name: 'Kirvano', rateBps: 749, fixedCents: 200 },
] as const;

export const viabilityDestinations = {
  page: '/calculadora',
  results: '/calculadora#resultado',
  contact: '/contato',
  contracting: '/contratacao',
};
