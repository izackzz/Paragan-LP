'use client';

import { useId, useState } from 'react';
import type { MonthlyViability } from '@/lib/viability';
import { integer, money } from '@/lib/viability';
import { calculatorCopy as copy } from '@/i18n/messages/pages/calculadora';

export function GrowthChart({
  months,
  ownSavingsCents,
}: {
  months: MonthlyViability[];
  ownSavingsCents: number;
}) {
  const [active, setActive] = useState(11);
  const gradient = useId().replaceAll(':', '');
  const values = months.map((month) => month.profitCents + ownSavingsCents);
  const low = Math.min(0, ...values);
  const high = Math.max(10000, ...values);
  const padding = (high - low) * 0.12;
  const min = low - padding;
  const max = high + padding;
  const x = (index: number) => 78 + (index / 11) * 684;
  const y = (value: number) => 18 + ((max - value) / (max - min)) * 222;
  const points = values.map((value, index) => `${x(index)},${y(value)}`).join(' ');
  const ticks = [high, (high + low) / 2, low];
  return (
    <div className="min-w-0">
      <div className="flex flex-wrap items-end justify-between gap-3 px-5 pt-6 md:px-7">
        <div>
          <p className="text-xs text-muted-foreground">
            {copy.month} {active + 1} · {integer(months[active].sellers)}{' '}
            {copy.sellersColumn.toLowerCase()}
          </p>
          <p className="mt-1 text-2xl font-medium tabular-nums">{money(values[active])}</p>
        </div>
        <p className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="h-0.5 w-5 bg-primary" />
          {copy.chartValue}
        </p>
      </div>
      <svg
        viewBox="0 0 800 280"
        role="img"
        aria-label={copy.chartLabel}
        className="mt-3 block w-full overflow-visible"
      >
        <title>{copy.chartLabel}</title>
        <desc>
          {values.map((value, i) => `${copy.month} ${i + 1}: ${money(value)}`).join('; ')}
        </desc>
        <defs>
          <linearGradient id={gradient} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--primary)" stopOpacity=".2" />
            <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {ticks.map((tick, i) => (
          <g key={i}>
            <line
              x1="78"
              x2="762"
              y1={y(tick)}
              y2={y(tick)}
              stroke="var(--border)"
              strokeDasharray="3 5"
            />
            <text
              x="66"
              y={y(tick) + 4}
              textAnchor="end"
              fill="var(--muted-foreground)"
              fontSize="12"
            >
              {new Intl.NumberFormat('pt-BR', {
                notation: 'compact',
                maximumFractionDigits: 1,
              }).format(tick / 100)}
            </text>
          </g>
        ))}
        <line
          x1="78"
          x2="762"
          y1={y(0)}
          y2={y(0)}
          stroke="var(--muted-foreground)"
          strokeOpacity=".4"
        />
        <polygon points={`${x(0)},${y(0)} ${points} ${x(11)},${y(0)}`} fill={`url(#${gradient})`} />
        <polyline
          points={points}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="2.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <line
          x1={x(active)}
          x2={x(active)}
          y1="18"
          y2="245"
          stroke="var(--primary)"
          strokeOpacity=".3"
          strokeDasharray="3 5"
        />
        {months.map((month, index) => (
          <g key={month.month}>
            <circle
              cx={x(index)}
              cy={y(values[index])}
              r={active === index ? 5 : 3}
              fill="var(--background)"
              stroke="var(--primary)"
              strokeWidth="2"
            />
            <text
              x={x(index)}
              y="268"
              textAnchor="middle"
              fill="var(--muted-foreground)"
              fontSize="12"
            >
              {month.month}
            </text>
            <rect
              x={x(index) - 26}
              y="8"
              width="52"
              height="242"
              fill="transparent"
              onPointerEnter={() => setActive(index)}
              onClick={() => setActive(index)}
            />
          </g>
        ))}
      </svg>
      <div className="mx-5 mb-6 flex flex-wrap gap-1 md:mx-7" role="group" aria-label={copy.month}>
        {months.map((month, index) => (
          <button
            key={month.month}
            type="button"
            aria-pressed={active === index}
            onClick={() => setActive(index)}
            className="min-h-11 min-w-11 flex-1 rounded-md border border-transparent px-2 text-xs text-muted-foreground tabular-nums outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring aria-pressed:border-primary/30 aria-pressed:bg-primary/10 aria-pressed:text-foreground"
          >
            {month.month}
          </button>
        ))}
      </div>
    </div>
  );
}
