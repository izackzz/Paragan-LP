'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { SliderComfortable } from '@/components/ui/slider';
import { integer } from '@/lib/viability';
import { calculatorCopy as copy } from '@/i18n/messages/pages/calculadora';

export function CalculatorField({
  id,
  label,
  value,
  onChange,
  min = 0,
  max = 1000000,
  scale = 1,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  scale?: number;
}) {
  const [draft, setDraft] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const display = (value / scale).toLocaleString('pt-BR', {
    useGrouping: false,
    maximumFractionDigits: scale === 1 ? 0 : 2,
  });
  function commit(text: string) {
    const cleaned = text.replace(/\s|R\$|%/g, '');
    const parsed = Number(
      cleaned.includes(',') ? cleaned.replaceAll('.', '').replace(',', '.') : cleaned,
    );
    if (text.trim() && Number.isFinite(parsed) && parsed >= min / scale && parsed <= max / scale) {
      onChange(Math.round(parsed * scale));
      setError(false);
      setDraft(null);
    } else {
      setError(true);
    }
  }
  return (
    <div className="min-w-0 space-y-2">
      <Label htmlFor={id} className="text-sm leading-relaxed">
        {label}
      </Label>
      <Input
        id={id}
        type="text"
        inputMode={scale === 1 ? 'numeric' : 'decimal'}
        value={draft ?? display}
        onChange={(event) => {
          setDraft(event.target.value);
          setError(false);
        }}
        onBlur={(event) => commit(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === 'Enter') {
            event.preventDefault();
            commit(event.currentTarget.value);
          }
          if (event.key === 'Escape') {
            setDraft(null);
            setError(false);
          }
        }}
        className="h-12 w-full rounded-md border-accent bg-background/40 text-base tabular-nums"
        aria-invalid={error}
        aria-describedby={error ? `${id}-error` : `${id}-limits`}
      />
      <span id={`${id}-limits`} className="sr-only">
        {copy.inputLimits
          .replace('{min}', String(min / scale))
          .replace('{max}', String(max / scale))}
      </span>
      {error && (
        <p id={`${id}-error`} role="alert" className="text-xs leading-relaxed text-destructive">
          {copy.inputError
            .replace('{min}', String(min / scale))
            .replace('{max}', (max / scale).toLocaleString('pt-BR'))}
        </p>
      )}
    </div>
  );
}

export function ScrubberField({
  id,
  label,
  value,
  onChange,
  max,
  step = 1,
  formatValue = integer,
  hint,
}: {
  id: string;
  label: string;
  value: number;
  onChange: (value: number) => void;
  max: number;
  step?: number;
  formatValue?: (value: number) => string;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <SliderComfortable
        id={id}
        variant="scrubber"
        value={value}
        onChange={onChange}
        min={0}
        max={max}
        step={step}
        label={label}
        formatValue={formatValue}
        aria-describedby={hint ? `${id}-hint` : undefined}
      />
      <div
        className="flex justify-between text-xs text-muted-foreground tabular-nums"
        aria-hidden="true"
      >
        <span>{formatValue(0)}</span>
        <span>{formatValue(max)}</span>
      </div>
      {hint && (
        <p id={`${id}-hint`} className="text-xs leading-relaxed text-muted-foreground">
          {hint}
        </p>
      )}
    </div>
  );
}
