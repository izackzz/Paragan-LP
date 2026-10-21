'use client';

import { useId, useState, type ReactNode } from 'react';
import {
  ArrowDownRight,
  ArrowUpRight,
  ChevronDown,
  RotateCcw,
  Scale,
  Wallet,
  TrendingUp,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { SectionLabel, ActionLink, ArtPlaceholder } from '@/components/landing/primitives';
import { illustrationAssets } from '@/config/illustrations';
import { frame, section, micro } from '@/components/landing/styles';
import { cn } from '@/lib/utils';
import { calculateMonth, feePerSale, integer, money, percent, projectYear } from '@/lib/viability';
import {
  comparisonPresets,
  initialViability,
  viabilityDestinations,
  type PricingModel,
  type ViabilityInputs,
} from '@/config/viability';
import { calculatorCopy as copy } from '@/i18n/messages/pages/calculadora';
import { CalculatorField, ScrubberField } from './calculator-field';
import { GrowthChart } from './growth-chart';
import { selectionStyle } from './selection-style';

const panel = 'min-w-0 border-b border-border p-5 md:p-7';
const fieldGrid = 'grid grid-cols-1 gap-4 sm:grid-cols-2';

function ContextDivider() {
  return (
    <div aria-hidden="true" className="dots h-12 border-y border-border bg-primary/3 md:h-16" />
  );
}

function Metric({
  label,
  value,
  hint,
  main,
  negative,
  icon,
}: {
  label: string;
  value: number;
  hint: string;
  main?: boolean;
  negative?: boolean;
  icon: ReactNode;
}) {
  return (
    <Card
      className={cn(
        'relative h-full min-w-0 rounded-none border-0 border-t-2 border-t-primary/30 bg-primary/3 p-5 md:p-6',
        main ? 'stripes border-t-primary bg-primary/8' : 'dots',
      )}
    >
      <CardHeader className="mb-4 flex-row items-start justify-between gap-3 p-0">
        <CardTitle className="text-sm leading-relaxed font-medium">{label}</CardTitle>
        <span className="flex size-8 shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 text-primary">
          {icon}
        </span>
      </CardHeader>
      <CardContent className="p-0">
        <p
          className={cn(
            'font-display text-2xl leading-tight font-medium tracking-tight break-words tabular-nums md:text-3xl',
            'text-primary',
            negative && 'text-destructive',
          )}
          data-metric={main ? 'incremental' : undefined}
        >
          {money(value)}
        </p>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{hint}</p>
      </CardContent>
    </Card>
  );
}

export function ViabilityCalculator() {
  const id = useId();
  const [inputs, setInputs] = useState<ViabilityInputs>({ ...initialViability });
  const [platform, setPlatform] = useState<string>(comparisonPresets[0].id);
  const [benchmarks, setBenchmarks] = useState(() =>
    comparisonPresets.map((preset) => ({
      ...preset,
      rateBps: Number(preset.rateBps),
      fixedCents: Number(preset.fixedCents),
    })),
  );
  const selected = benchmarks.find((preset) => preset.id === platform) ?? benchmarks[0];
  const month = calculateMonth(inputs);
  const year = projectYear(inputs);
  const currentFees =
    feePerSale(inputs.ticketCents, selected.rateBps, selected.fixedCents) * inputs.ownSales;
  const ownSavings = currentFees - month.ownCostsCents;
  const incremental = ownSavings + month.profitCents;
  const annualIncremental = year.profitCents + ownSavings * 12;
  const twelfth = year.months[11];
  const feeTooHigh = month.sellerFeeCents > inputs.ticketCents && inputs.sellers > 0;

  function set<K extends keyof ViabilityInputs>(key: K, value: ViabilityInputs[K]) {
    setInputs((previous) => ({ ...previous, [key]: value }));
  }
  function benchmark(key: 'rateBps' | 'fixedCents', value: number) {
    setBenchmarks((previous) =>
      previous.map((preset) => (preset.id === platform ? { ...preset, [key]: value } : preset)),
    );
  }
  function reset() {
    setInputs({ ...initialViability });
    setPlatform(comparisonPresets[0].id);
    setBenchmarks(
      comparisonPresets.map((preset) => ({
        ...preset,
        rateBps: Number(preset.rateBps),
        fixedCents: Number(preset.fixedCents),
      })),
    );
  }
  const field = (
    key: keyof Omit<ViabilityInputs, 'model'>,
    label: string,
    scale = 100,
    max = 100000,
  ) => (
    <CalculatorField
      key={key}
      id={`${id}-${key}`}
      label={label}
      value={inputs[key]}
      onChange={(value) => set(key, value)}
      scale={scale}
      max={max}
    />
  );

  return (
    <section id="inicio" aria-labelledby="calculator-title" className={cn(frame, section)}>
      <SectionLabel number="01" total={1}>
        {copy.label}
      </SectionLabel>
      <div className="grid border-b border-border lg:grid-cols-12">
        <div className="p-5 py-8 md:p-7 md:py-10 lg:col-span-8 xl:p-10">
          <p className={cn(micro, 'mb-4 text-primary')}>{copy.eyebrow}</p>
          <h1
            id="calculator-title"
            className="max-w-3xl text-3xl leading-tight font-medium tracking-tight text-balance md:text-4xl"
          >
            {copy.title} <span className="text-muted-foreground">{copy.muted}</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {copy.description}
          </p>
        </div>
        <div className="stripes flex flex-col justify-center gap-4 border-t border-border p-5 md:p-7 lg:col-span-4 lg:border-t-0 lg:border-l xl:p-10">
          <span className="flex items-center gap-2 text-xs font-medium">
            <Scale className="size-4 text-primary" aria-hidden="true" />
            {copy.simulation}
          </span>
          <p className="text-xs leading-relaxed text-muted-foreground">{copy.update}</p>
          <Button
            variant="secondary"
            size="sm"
            leadingIcon={RotateCcw}
            onClick={reset}
            className="min-h-11 w-fit"
          >
            {copy.reset}
          </Button>
          <a
            href={viabilityDestinations.results}
            className="w-fit text-xs font-medium underline underline-offset-4 outline-none focus-visible:ring-2 focus-visible:ring-ring lg:hidden"
          >
            {copy.viewResults}
          </a>
        </div>
      </div>

      <ContextDivider />

      <div className="grid min-w-0 lg:grid-cols-12">
        <form
          onSubmit={(event) => event.preventDefault()}
          className="min-w-0 border-b border-border bg-card/30 lg:col-span-5 lg:border-r lg:border-b-0"
        >
          <fieldset className={panel}>
            <legend className="sr-only">{copy.stepOne}</legend>
            <p className={cn(micro, 'mb-4 text-primary')}>{copy.stepOne}</p>
            <h2 className="text-lg font-medium tracking-tight">{copy.ownTitle}</h2>
            <p className="mt-2 mb-6 text-xs leading-relaxed text-muted-foreground">
              {copy.ownDescription}
            </p>
            <div className={fieldGrid}>
              {field('ownSales', copy.ownSales, 1, 100000)}
              {field('ticketCents', copy.ticket, 100, 10000000)}
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor={`${id}-platform`}>{copy.baseline}</Label>
              <Select value={platform} onValueChange={setPlatform}>
                <SelectTrigger
                  id={`${id}-platform`}
                  className="h-12 w-full rounded-md bg-background/40"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {benchmarks.map((preset) => (
                    <SelectItem key={preset.id} value={preset.id}>
                      {preset.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className={cn(fieldGrid, 'mt-4')}>
              <CalculatorField
                key={`${platform}-rate`}
                id={`${id}-benchmark-rate`}
                label={copy.benchmarkRate}
                value={selected.rateBps}
                onChange={(value) => benchmark('rateBps', value)}
                scale={100}
                max={10000}
              />
              <CalculatorField
                key={`${platform}-fixed`}
                id={`${id}-benchmark-fixed`}
                label={copy.benchmarkFixed}
                value={selected.fixedCents}
                onChange={(value) => benchmark('fixedCents', value)}
                scale={100}
                max={100000}
              />
            </div>
            <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
              {copy.benchmarkHint}
            </p>
          </fieldset>

          <ContextDivider />

          <fieldset className={panel}>
            <legend className="sr-only">{copy.stepTwo}</legend>
            <p className={cn(micro, 'mb-4 text-primary')}>{copy.stepTwo}</p>
            <h2 className="text-lg font-medium tracking-tight">{copy.sellersTitle}</h2>
            <p className="mt-2 mb-6 text-xs leading-relaxed text-muted-foreground">
              {copy.sellersDescription}
            </p>
            <div className="space-y-5">
              <ScrubberField
                id={`${id}-sellers`}
                label={copy.sellers}
                value={inputs.sellers}
                onChange={(value) => set('sellers', value)}
                max={500}
              />
              <ScrubberField
                id={`${id}-sales`}
                label={copy.salesPerSeller}
                value={inputs.salesPerSeller}
                onChange={(value) => set('salesPerSeller', value)}
                max={1000}
              />
              <div className="space-y-2">
                <p id={`${id}-model-label`} className="text-sm font-medium">
                  {copy.model}
                </p>
                <div
                  className="grid grid-cols-1 gap-1 rounded-md border border-accent p-1 sm:grid-cols-3"
                  role="group"
                  aria-labelledby={`${id}-model-label`}
                  aria-describedby={`${id}-model-hint`}
                >
                  {Object.entries(copy.models).map(([value, label]) => (
                    <Button
                      key={value}
                      type="button"
                      size="xs"
                      variant={inputs.model === value ? 'primary' : 'ghost'}
                      active={inputs.model === value}
                      aria-pressed={inputs.model === value}
                      className={cn('h-auto px-3 py-3', selectionStyle(inputs.model === value))}
                      onClick={() => set('model', value as PricingModel)}
                    >
                      {label}
                    </Button>
                  ))}
                </div>
                <p
                  id={`${id}-model-hint`}
                  className="text-xs leading-relaxed text-muted-foreground"
                >
                  {copy.modelHints[inputs.model]}
                </p>
              </div>
              <div className={fieldGrid} key={inputs.model}>
                {inputs.model !== 'fixed' && field('sellerRateBps', copy.sellerRate, 100, 10000)}
                {inputs.model !== 'percentage' && field('sellerFixedCents', copy.sellerFixed)}
              </div>
            </div>
          </fieldset>

          <ContextDivider />

          <fieldset className={cn(panel, 'border-b-0')}>
            <legend className="sr-only">{copy.costsTitle}</legend>
            <h2 className="text-lg font-medium tracking-tight">{copy.costsTitle}</h2>
            <p className="mt-2 mb-6 text-xs leading-relaxed text-muted-foreground">
              {copy.costsDescription}
            </p>
            <ArtPlaceholder
              {...illustrationAssets.acquiring}
              label={copy.acquiringArt}
              className="mb-6 rounded-md border border-border"
            />
            <div className="stripes mb-6 rounded-md border border-primary/40 bg-primary/8 p-4">
              <h3 className="mb-2 text-sm font-medium">{copy.paragan}</h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                {copy.paraganHint}
              </p>
              <div className={fieldGrid}>
                {field('paraganRateBps', copy.rate, 100, 10000)}
                {field('paraganFixedCents', copy.fixed)}
              </div>
            </div>
            <div className="space-y-6">
              <ScrubberField
                id={`${id}-mix`}
                label={copy.pixShare}
                value={inputs.pixShareBps}
                onChange={(value) => set('pixShareBps', value)}
                max={10000}
                step={100}
                formatValue={(value) => percent(value / 100)}
                hint={copy.mixHint}
              />
              <div>
                <h3 className="mb-3 text-sm font-medium">{copy.pix}</h3>
                <div className={fieldGrid}>
                  {field('pixRateBps', copy.rate, 100, 10000)}
                  {field('pixFixedCents', copy.fixed)}
                </div>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-medium">{copy.card}</h3>
                <div className={fieldGrid}>
                  {field('cardRateBps', copy.rate, 100, 10000)}
                  {field('cardFixedCents', copy.fixed)}
                </div>
              </div>
              <div>
                {field('monthlyCostsCents', copy.monthlyCosts, 100, 100000000)}
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {copy.monthlyHint}
                </p>
              </div>
            </div>
          </fieldset>
        </form>

        <div id="resultado" className="min-w-0 scroll-mt-22 lg:col-span-7">
          <div className={panel}>
            <p className={cn(micro, 'mb-3 text-primary')}>{copy.resultLabel}</p>
            <h2 className="max-w-lg text-2xl font-medium tracking-tight text-balance">
              {copy.resultTitle}
            </h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-border p-4">
                <p className="text-xs text-muted-foreground">
                  {selected.name} · {copy.feesToday}
                </p>
                <p className="mt-2 text-xl font-medium tabular-nums" data-metric="current-fees">
                  {money(currentFees)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {percent(
                    inputs.ticketCents > 0
                      ? (currentFees / Math.max(1, month.ownVolumeCents)) * 100
                      : 0,
                  )}{' '}
                  {copy.shareOfOwnSales}
                </p>
              </div>
              <div className="rounded-md border border-primary/25 bg-primary/5 p-4">
                <p className="text-xs text-muted-foreground">{copy.ownCost}</p>
                <p className="mt-2 text-xl font-medium tabular-nums">
                  {money(month.ownCostsCents)}
                </p>
                <p className="mt-2 text-xs text-muted-foreground">
                  {percent((month.ownCostsCents / Math.max(1, month.ownVolumeCents)) * 100)}{' '}
                  {copy.shareOfOwnSales}
                </p>
              </div>
            </div>
          </div>

          <div className="grid border-b border-border sm:grid-cols-2">
            <div className="border-b border-border sm:border-r sm:border-b-0">
              <Metric
                label={copy.ownSavings}
                value={ownSavings}
                hint={copy.ownSavingsHint}
                negative={ownSavings < 0}
                icon={<Wallet className="size-4" aria-hidden="true" />}
              />
            </div>
            <Metric
              label={copy.gatewayProfit}
              value={month.profitCents}
              hint={copy.gatewayProfitHint}
              negative={month.profitCents < 0}
              icon={<TrendingUp className="size-4" aria-hidden="true" />}
            />
          </div>
          <div className="border-b border-border">
            <Metric
              label={copy.totalGain}
              value={incremental}
              hint={copy.gainHint}
              main
              negative={incremental < 0}
              icon={
                incremental >= 0 ? (
                  <ArrowUpRight className="size-5" aria-hidden="true" />
                ) : (
                  <ArrowDownRight className="size-5" aria-hidden="true" />
                )
              }
            />
          </div>
          {(incremental < 0 || feeTooHigh) && (
            <div
              role="status"
              className="border-b border-border bg-destructive/5 p-5 text-sm leading-relaxed text-destructive"
            >
              {feeTooHigh ? copy.feeTooHigh : copy.losses}
            </div>
          )}

          <ContextDivider />

          <div className={panel}>
            <h3 className="mb-5 text-sm font-medium">{copy.details}</h3>
            <dl className="space-y-3 text-sm">
              {[
                [copy.ownVolume, month.ownVolumeCents],
                [copy.volume, month.volumeCents],
                [copy.sellerRevenue, month.revenueCents],
                [copy.infrastructure, -month.paraganCents],
                [copy.acquiring, -month.acquiringCents],
                [copy.operating, -inputs.monthlyCostsCents],
              ].map(([label, value]) => (
                <div key={label} className="flex flex-wrap justify-between gap-x-5 gap-y-1">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-medium tabular-nums">{money(Number(value))}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-medium">{copy.breakEven}</p>
              <p className="mt-2 text-sm">
                {month.breakEvenSellers !== null
                  ? `${integer(month.breakEvenSellers)} sellers · ${integer(month.breakEvenSales ?? 0)} vendas/mês`
                  : copy.breakEvenNone}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {copy.breakEvenHint}
              </p>
            </div>
            <ArtPlaceholder
              {...illustrationAssets.financialComposition}
              label={copy.financeArt}
              className="mt-6 rounded-md border border-border"
            />
          </div>

          <ContextDivider />

          <div className="border-b border-border">
            <div className="p-5 pb-0 md:p-7 md:pb-0">
              <h2 className="text-xl font-medium tracking-tight">{copy.projectionTitle}</h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {copy.projectionDescription}
              </p>
              <div className="mt-5">
                <ScrubberField
                  id={`${id}-growth`}
                  label={copy.growth}
                  value={inputs.growthBps}
                  onChange={(value) => set('growthBps', value)}
                  max={2000}
                  step={50}
                  formatValue={(value) => percent(value / 100)}
                  hint={copy.growthHint}
                />
              </div>
            </div>
            <GrowthChart months={year.months} ownSavingsCents={ownSavings} />
            <div className="grid border-t border-border sm:grid-cols-3">
              {[
                [copy.yearTotal, money(annualIncremental)],
                [copy.twelfth, money(twelfth.profitCents + ownSavings)],
                [copy.twelfthSellers, integer(twelfth.sellers)],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="dots min-w-0 border-b border-border bg-primary/5 p-5 last:border-b-0 sm:border-r sm:border-b-0 sm:last:border-r-0"
                >
                  <p className="text-xs leading-relaxed text-muted-foreground">{label}</p>
                  <p className="mt-2 text-lg font-medium break-words text-primary tabular-nums">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <details className="border-t border-border">
              <summary className="flex min-h-12 cursor-pointer items-center justify-between gap-3 p-5 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset">
                {copy.tableSummary}
                <ChevronDown className="size-4" aria-hidden="true" />
              </summary>
              <div
                className="overflow-x-auto"
                tabIndex={0}
                role="region"
                aria-label={copy.tableSummary}
              >
                <table className="w-full text-left text-xs tabular-nums">
                  <caption className="sr-only">{copy.tableSummary}</caption>
                  <thead>
                    <tr className="border-y border-border">
                      {[
                        copy.month,
                        copy.sellersColumn,
                        copy.volumeColumn,
                        copy.gatewayColumn,
                        copy.incrementalColumn,
                      ].map((label) => (
                        <th key={label} scope="col" className="px-4 py-3 font-medium">
                          {label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {year.months.map((row) => (
                      <tr key={row.month} className="border-b border-border last:border-b-0">
                        <th scope="row" className="px-4 py-3 font-normal">
                          {row.month}
                        </th>
                        <td className="px-4 py-3">{integer(row.sellers)}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{money(row.volumeCents)}</td>
                        <td className="px-4 py-3 whitespace-nowrap">{money(row.profitCents)}</td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {money(row.profitCents + ownSavings)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </details>
          </div>
          <div className="grid border-b border-border sm:grid-cols-2 lg:border-b-0">
            <div className="min-w-0 border-b border-border p-5 sm:border-r sm:border-b-0 md:p-7">
              <h3 className="text-sm font-medium">{copy.sellerOffer}</h3>
              <p className="mt-3 text-xl font-medium tabular-nums">
                {money(month.sellerFeeCents)}{' '}
                <span className="text-xs font-normal text-muted-foreground">{copy.perSale}</span>
              </p>
              <p className="mt-2 text-xs text-primary">
                {percent(month.effectiveRate)} · {copy.effective}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                {copy.sellerOfferHint}
              </p>
            </div>
            <div className="min-w-0 p-5 md:p-7">
              <p className="text-2xl font-medium tabular-nums">{integer(month.sales)}</p>
              <p className="mt-2 text-xs text-muted-foreground">{copy.volumeSummary}</p>
              <div
                className="mt-5 flex h-2 overflow-hidden rounded-full bg-muted"
                aria-hidden="true"
              >
                <div className="bg-primary" style={{ width: `${inputs.pixShareBps / 100}%` }} />
                <div className="flex-1 bg-foreground/30" />
              </div>
              <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs text-muted-foreground">
                <span>
                  {copy.pixMethod} · {integer(month.pixSales)}
                </span>
                <span>
                  {copy.cardMethod} · {integer(month.cardSales)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ContextDivider />

      <div className="border-t border-border">
        <div className="p-5 md:p-7">
          <h2 className="text-2xl font-medium tracking-tight">{copy.comparisonTitle}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            {copy.comparisonDescription}
          </p>
        </div>
        <div className="grid border-t border-border sm:grid-cols-2 xl:grid-cols-5">
          {benchmarks.map((preset) => {
            const fees =
              feePerSale(inputs.ticketCents, preset.rateBps, preset.fixedCents) * inputs.ownSales;
            return (
              <Button
                key={preset.id}
                type="button"
                size="lg"
                variant={platform === preset.id ? 'primary' : 'ghost'}
                active={platform === preset.id}
                aria-pressed={platform === preset.id}
                onClick={() => setPlatform(preset.id)}
                className={cn(
                  'h-auto justify-start rounded-none p-5 text-left [&>span]:w-full',
                  selectionStyle(platform === preset.id),
                  platform === preset.id && '[&_.text-muted-foreground]:text-primary-foreground/90',
                )}
              >
                <span className="flex items-center justify-between gap-2 text-sm font-medium">
                  {preset.name}
                  <span
                    className="size-2 shrink-0 rounded-full border border-muted-foreground bg-background"
                    aria-hidden="true"
                    style={
                      platform === preset.id
                        ? { background: 'var(--primary)', borderColor: 'var(--primary)' }
                        : undefined
                    }
                  />
                </span>
                <span className="mt-2 block text-xs text-muted-foreground">
                  {percent(preset.rateBps / 100)} + {money(preset.fixedCents)}
                </span>
                <span className="mt-6 block text-xs text-muted-foreground">
                  {copy.comparisonFees}
                </span>
                <span className="mt-1 block text-xl font-medium break-words tabular-nums">
                  {money(fees)}
                </span>
                <span className="mt-4 block text-xs text-muted-foreground">
                  {copy.comparisonRetained}
                </span>
                <span className="mt-1 block text-sm tabular-nums">
                  {money(month.ownVolumeCents - fees)}
                </span>
              </Button>
            );
          })}
          <div className="stripes min-w-0 border-t-2 border-primary bg-primary/10 p-5 sm:col-span-2 xl:col-span-1">
            <h3 className="text-sm font-medium text-primary">{copy.paraganOption}</h3>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {copy.comparisonOwnNote}
            </p>
            <p className="mt-5 text-xs text-muted-foreground">{copy.comparisonFees}</p>
            <p className="mt-1 text-xl font-medium break-words tabular-nums">
              {money(month.ownCostsCents)}
            </p>
            <p className="mt-4 text-xs text-muted-foreground">{copy.comparisonRetained}</p>
            <p className="mt-1 text-sm tabular-nums">{money(month.ownReceiptsCents)}</p>
          </div>
        </div>
      </div>

      <ContextDivider />

      <div className="grid md:grid-cols-2">
        {copy.contextBlocks.map((block, index) => (
          <div
            key={block.asset}
            className={cn(
              'min-w-0 border-b border-border md:border-b-0',
              index === 0 && 'md:border-r',
            )}
          >
            <div
              className={cn(
                'p-5 md:p-7',
                index === 0 ? 'dots bg-primary/3' : 'stripes bg-primary/5',
              )}
            >
              <p className={cn(micro, 'mb-3 text-primary')}>{block.eyebrow}</p>
              <h2 className="text-xl font-medium tracking-tight">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {block.description}
              </p>
            </div>
            <ArtPlaceholder
              {...illustrationAssets[block.asset]}
              label={block.alt}
              className="rounded-none border-y border-border"
            />
            <div className="p-5 md:p-7">
              <ActionLink secondary href={block.href} className="text-sm">
                {block.link}
              </ActionLink>
            </div>
          </div>
        ))}
      </div>

      <ContextDivider />

      <div className="grid border-t border-border md:grid-cols-2">
        <div className="p-5 md:border-r md:border-border md:p-7">
          <h2 className="text-base font-medium">{copy.disclaimerTitle}</h2>
          <div className="mt-4 space-y-3">
            {copy.disclaimers.map((text) => (
              <p key={text} className="text-xs leading-relaxed text-muted-foreground">
                {text}
              </p>
            ))}
          </div>
        </div>
        <div className="stripes flex flex-col justify-center border-t border-border p-5 md:border-t-0 md:p-7">
          <h2 className="max-w-sm text-2xl font-medium tracking-tight text-balance">
            {copy.ctaTitle}
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
            {copy.ctaDescription}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <ActionLink href={viabilityDestinations.contact} className="text-sm">
              {copy.contact}
            </ActionLink>
            <ActionLink href={viabilityDestinations.contracting} secondary className="text-sm">
              {copy.contracting}
            </ActionLink>
          </div>
        </div>
      </div>
    </section>
  );
}
