'use client';

import { useId, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { MonthlyViability } from '@/lib/viability';
import { integer, money } from '@/lib/viability';
import { calculatorCopy as copy } from '@/i18n/messages/pages/calculadora';
import { cn } from '@/lib/utils';
import { selectionStyle } from './selection-style';

// Geometry and visual treatment mirror GatewayFront's SellerVolumeChart /
// TotalAreaChart: 250px plot, 15px vertical margins, separate 50px scale,
// natural cubic line and a diagonally hatched area with a vertical fade.
const HEIGHT = 250;
const TOP = 15;
const BASE = HEIGHT - 15;
const WIDTH = 700;
const compactMoney = (cents: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(cents / 100);

/** Natural cubic spline, with zero second derivatives at both endpoints. */
function naturalLine(values: number[], x: (index: number) => number, y: (value: number) => number) {
  const points = values.map(y);
  const n = points.length;
  if (!n) return '';
  const second = Array<number>(n).fill(0);
  const diagonal = Array<number>(n).fill(4);
  const rhs = Array<number>(n).fill(0);
  for (let i = 1; i < n - 1; i++) rhs[i] = 6 * (points[i + 1] - 2 * points[i] + points[i - 1]);
  for (let i = 2; i < n - 1; i++) {
    const factor = 1 / diagonal[i - 1];
    diagonal[i] -= factor;
    rhs[i] -= factor * rhs[i - 1];
  }
  for (let i = n - 2; i > 0; i--) second[i] = (rhs[i] - second[i + 1]) / diagonal[i];
  let path = `M${x(0)},${points[0]}`;
  for (let i = 0; i < n - 1; i++) {
    const dx = x(i + 1) - x(i);
    const startSlope = points[i + 1] - points[i] - (2 * second[i] + second[i + 1]) / 6;
    const endSlope = points[i + 1] - points[i] + (second[i] + 2 * second[i + 1]) / 6;
    path += ` C${x(i) + dx / 3},${points[i] + startSlope / 3} ${x(i + 1) - dx / 3},${points[i + 1] - endSlope / 3} ${x(i + 1)},${points[i + 1]}`;
  }
  return path;
}

export function GrowthChart({
  months,
  ownSavingsCents,
}: {
  months: MonthlyViability[];
  ownSavingsCents: number;
}) {
  const [active, setActive] = useState(11);
  const [hovering, setHovering] = useState(false);
  const id = useId().replaceAll(':', '');
  const values = months.map((month) => month.profitCents + ownSavingsCents);
  const peak = Math.max(...values);
  const floor = Math.min(...values);
  const magnitude = Math.max(100, ...values.map(Math.abs));
  const step = Math.pow(10, Math.floor(Math.log10(magnitude))) / 10;
  // Same proportional headroom as the seller chart, extended to keep losses
  // visible (the seller's GMV-only domain cannot represent negative results).
  const max =
    peak > 0
      ? Math.ceil((peak * 1.05) / step) * step
      : Math.ceil((peak + magnitude * 0.05) / step) * step;
  const min =
    floor < 0
      ? Math.floor((floor - magnitude * 0.05) / step) * step
      : Math.max(0, Math.floor(Math.min(max * 0.55, floor * 0.9) / step) * step);
  const top = max === min ? max + 100 : max;
  const x = (index: number) => (index / Math.max(1, values.length - 1)) * WIDTH;
  const y = (value: number) => TOP + (1 - (value - min) / (top - min)) * (BASE - TOP);
  const line = naturalLine(values, x, y);
  const area = `${line} L${x(values.length - 1)},${BASE} L0,${BASE} Z`;
  const ticks = Array.from({ length: 5 }, (_, i) => TOP + (i * (BASE - TOP)) / 4);

  return (
    <div className="min-w-0 p-6 md:p-8" data-seller-style-chart>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="text-xs text-muted-foreground">
            {copy.month} {active + 1} · {integer(months[active].sellers)}{' '}
            {copy.sellersColumn.toLowerCase()}
          </p>
          <p className="mt-1 font-display text-3xl font-medium tabular-nums">
            {money(values[active])}
          </p>
        </div>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="size-2 rounded-full bg-primary" />
          {copy.chartValue}
        </p>
      </div>
      <div className="flex h-62.5 min-w-0 flex-row">
        <div
          className="relative z-10 mr-2 w-12.5 shrink-0 rounded-md bg-foreground/5"
          aria-hidden="true"
          data-chart-scale
        >
          <span className="absolute inset-x-0 top-1.5 text-center text-xs text-muted-foreground tabular-nums">
            {compactMoney(top)}
          </span>
          <span className="absolute inset-x-0 bottom-1.5 text-center text-xs text-muted-foreground tabular-nums">
            {compactMoney(min)}
          </span>
        </div>
        <div className="relative min-w-0 flex-1" onPointerLeave={() => setHovering(false)}>
          <svg
            viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
            preserveAspectRatio="none"
            role="img"
            aria-label={copy.chartLabel}
            className="block h-full w-full overflow-visible"
          >
            <title>{copy.chartLabel}</title>
            <desc>
              {values.map((value, i) => `${copy.month} ${i + 1}: ${money(value)}`).join('; ')}
            </desc>
            <defs>
              <pattern
                id={`${id}-hatch`}
                width="6"
                height="6"
                patternUnits="userSpaceOnUse"
                patternTransform="rotate(45)"
              >
                <line x1="0" y1="0" x2="0" y2="6" stroke="var(--primary)" strokeWidth="1.5" />
              </pattern>
              <linearGradient
                id={`${id}-fade`}
                x1="0"
                y1={y(peak)}
                x2="0"
                y2={BASE}
                gradientUnits="userSpaceOnUse"
              >
                <stop offset=".3" stopColor="white" stopOpacity=".5" />
                <stop offset=".8" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <mask
                id={`${id}-mask`}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width={WIDTH}
                height={HEIGHT}
              >
                <rect width={WIDTH} height={HEIGHT} fill={`url(#${id}-fade)`} />
              </mask>
              <clipPath id={`${id}-clip`}>
                <rect x="0" y="0" width={WIDTH} height={HEIGHT} />
              </clipPath>
            </defs>
            {ticks.map((tick) => (
              <line
                key={tick}
                x1="0"
                x2={WIDTH}
                y1={tick}
                y2={tick}
                stroke="var(--accent)"
                strokeDasharray="2 2"
                strokeWidth=".2"
                opacity=".5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
            {min < 0 && top > 0 && (
              <line
                x1="0"
                x2={WIDTH}
                y1={y(0)}
                y2={y(0)}
                stroke="var(--muted-foreground)"
                strokeDasharray="3 4"
                strokeOpacity=".5"
                vectorEffect="non-scaling-stroke"
              />
            )}
            <g clipPath={`url(#${id}-clip)`}>
              <path d={area} fill={`url(#${id}-hatch)`} mask={`url(#${id}-mask)`} />
              <path
                d={line}
                fill="none"
                stroke="var(--primary)"
                strokeWidth="1"
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
              <circle
                cx={x(active)}
                cy={y(values[active])}
                r="4"
                fill="var(--card)"
                stroke="var(--primary)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            </g>
            {months.map((month, index) => (
              <rect
                key={month.month}
                x={Math.max(0, x(index) - WIDTH / 22)}
                y="0"
                width={WIDTH / 11}
                height={HEIGHT}
                fill="transparent"
                onPointerEnter={() => {
                  setActive(index);
                  setHovering(true);
                }}
                onClick={() => setActive(index)}
              />
            ))}
          </svg>
          {hovering && (
            <div
              className={cn(
                'pointer-events-none absolute top-3 z-20 rounded-md border border-border bg-popover p-3 text-xs shadow-lg',
                active > 5 ? 'right-3' : 'left-3',
              )}
              aria-hidden="true"
            >
              <p className="text-muted-foreground">
                {copy.month} {active + 1}
              </p>
              <p className="mt-2 flex items-center gap-2 font-medium tabular-nums">
                <span className="size-2 rounded-full bg-primary" />
                {money(values[active])}
              </p>
            </div>
          )}
        </div>
      </div>
      <div
        className="mt-6 grid grid-cols-6 gap-1 rounded-md border border-accent p-2 sm:grid-cols-12"
        role="group"
        aria-label={copy.month}
      >
        {months.map((month, index) => (
          <Button
            key={month.month}
            type="button"
            size="xs"
            variant={active === index ? 'primary' : 'ghost'}
            active={active === index}
            aria-pressed={active === index}
            aria-label={`${copy.month} ${month.month}`}
            onClick={() => setActive(index)}
            className={cn('h-11 min-w-11 px-2 tabular-nums', selectionStyle(active === index))}
          >
            {month.month}
          </Button>
        ))}
      </div>
    </div>
  );
}
