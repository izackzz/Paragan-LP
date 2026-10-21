import type { ViabilityInputs } from '@/config/viability';

/** Positive money in integer cents; round each sale's percentage half up. */
export function feePerSale(ticketCents: number, rateBps: number, fixedCents: number) {
  return (
    Number((BigInt(ticketCents) * BigInt(rateBps) + BigInt(5000)) / BigInt(10000)) + fixedCents
  );
}

export function calculateMonth(inputs: ViabilityInputs, month = 1) {
  // Month one is the starting scenario: month twelve has eleven growth steps.
  const sellers = Math.round(inputs.sellers * (1 + inputs.growthBps / 10000) ** (month - 1));
  const sellerSales = sellers * inputs.salesPerSeller;
  const ownPixSales = Math.round((inputs.ownSales * inputs.pixShareBps) / 10000);
  const sellerPixSales = Math.round((sellerSales * inputs.pixShareBps) / 10000);
  const sales = sellerSales + inputs.ownSales;
  const pixSales = ownPixSales + sellerPixSales;
  const cardSales = sales - pixSales;
  const volumeCents = sales * inputs.ticketCents;
  const sellerFeeCents = feePerSale(
    inputs.ticketCents,
    inputs.model === 'fixed' ? 0 : inputs.sellerRateBps,
    inputs.model === 'percentage' ? 0 : inputs.sellerFixedCents,
  );
  // The owner never invoices themselves: only other sellers generate revenue.
  const revenueCents = sellerFeeCents * sellerSales;
  const paraganPerSale = feePerSale(
    inputs.ticketCents,
    inputs.paraganRateBps,
    inputs.paraganFixedCents,
  );
  const ownParaganCents = paraganPerSale * inputs.ownSales;
  const paraganCents = paraganPerSale * sellerSales;
  const pixFee = feePerSale(inputs.ticketCents, inputs.pixRateBps, inputs.pixFixedCents);
  const cardFee = feePerSale(inputs.ticketCents, inputs.cardRateBps, inputs.cardFixedCents);
  const ownAcquiringCents = pixFee * ownPixSales + cardFee * (inputs.ownSales - ownPixSales);
  const acquiringCents = pixFee * sellerPixSales + cardFee * (sellerSales - sellerPixSales);
  const variableCostsCents = paraganCents + acquiringCents;
  const costsCents = variableCostsCents + inputs.monthlyCostsCents;
  const profitCents = revenueCents - costsCents;
  const ownVolumeCents = inputs.ownSales * inputs.ticketCents;
  const ownCostsCents = ownParaganCents + ownAcquiringCents;
  const ownReceiptsCents = ownVolumeCents - ownCostsCents;
  // Continuous mix for an indicative threshold; actual method counts are rounded above.
  const weightedAcquiring =
    (feePerSale(inputs.ticketCents, inputs.pixRateBps, inputs.pixFixedCents) * inputs.pixShareBps) /
      10000 +
    feePerSale(inputs.ticketCents, inputs.cardRateBps, inputs.cardFixedCents) *
      (1 - inputs.pixShareBps / 10000);
  const contributionPerSale =
    sellerFeeCents -
    weightedAcquiring -
    feePerSale(inputs.ticketCents, inputs.paraganRateBps, inputs.paraganFixedCents);
  const breakEvenSales =
    contributionPerSale > 0 ? Math.ceil(inputs.monthlyCostsCents / contributionPerSale) : null;
  return {
    month,
    sellers,
    sales,
    sellerSales,
    pixSales,
    cardSales,
    volumeCents,
    sellerFeeCents,
    ownVolumeCents,
    ownCostsCents,
    ownReceiptsCents,
    ownParaganCents,
    ownAcquiringCents,
    consolidatedCents: ownReceiptsCents + profitCents,
    revenueCents,
    paraganCents,
    acquiringCents,
    variableCostsCents,
    costsCents,
    profitCents,
    sellerReceiptsCents: sellerSales * inputs.ticketCents - revenueCents,
    effectiveRate: inputs.ticketCents > 0 ? (sellerFeeCents / inputs.ticketCents) * 100 : 0,
    margin: revenueCents > 0 ? (profitCents / revenueCents) * 100 : null,
    breakEvenSales,
    breakEvenSellers:
      breakEvenSales !== null && inputs.salesPerSeller > 0
        ? Math.ceil(breakEvenSales / inputs.salesPerSeller)
        : null,
  };
}

export function projectYear(inputs: ViabilityInputs) {
  const months = Array.from({ length: 12 }, (_, index) => calculateMonth(inputs, index + 1));
  return { months, profitCents: months.reduce((sum, month) => sum + month.profitCents, 0) };
}

export type MonthlyViability = ReturnType<typeof calculateMonth>;

export const money = (cents: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(cents / 100);
export const integer = (value: number) =>
  new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 0 }).format(value);
export const percent = (value: number) =>
  `${new Intl.NumberFormat('pt-BR', { maximumFractionDigits: 2 }).format(value)}%`;
