'use client';

import * as React from 'react';
import { BorderBeam, type BorderBeamColorVariant } from 'border-beam';
import { Search, X } from 'lucide-react';

import { cn } from '@/lib/utils';
import { useSurfaceTheme, type SurfaceTheme } from '@/components/spectrumui/use-surface-theme';

export interface BeamSearchProps {
  inputProps?: Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue' | 'onChange'>;
  clearLabel?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  /** Fires on Enter with the current value */
  onSubmit?: (value: string) => void;
  placeholder?: string;
  /** Keep the beam running even without focus. Default false */
  alwaysOn?: boolean;
  /** Palette: "colorful" | "ocean" | "sunset" | "mono". Default "colorful" */
  colorVariant?: BorderBeamColorVariant;
  /** "auto" follows a `.dark`/`.light` class on <html>, then the OS. Default "auto" */
  theme?: SurfaceTheme;
  /** Right-hand slot, e.g. a keyboard hint */
  trailing?: React.ReactNode;
  className?: string;
}

export function BeamSearch({
  value,
  defaultValue = '',
  onChange,
  onSubmit,
  placeholder = 'Search…',
  alwaysOn = false,
  colorVariant = 'colorful',
  theme = 'auto',
  trailing,
  className,
  inputProps,
  clearLabel = 'Limpar busca',
}: BeamSearchProps) {
  const resolved = useSurfaceTheme(theme);
  const [inner, setInner] = React.useState(defaultValue);
  const [focused, setFocused] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const current = value ?? inner;

  const update = (next: string) => {
    if (value === undefined) setInner(next);
    onChange?.(next);
  };

  return (
    <BorderBeam
      size="line"
      colorVariant={colorVariant}
      theme={resolved}
      active={alwaysOn || focused}
      className={cn('w-full', className)}
    >
      <label
        className={cn(
          'flex h-12 w-full items-center gap-3 rounded-xl border border-border bg-card px-3.5 transition-colors focus-within:ring-2 focus-within:ring-blue-500/30',
          focused && 'border-black/20 dark:border-white/20',
        )}
      >
        <Search className="size-4 shrink-0 text-neutral-400" aria-hidden />
        <input
          {...inputProps}
          ref={inputRef}
          type="search"
          value={current}
          placeholder={placeholder}
          onChange={(event) => update(event.target.value)}
          onFocus={(event) => { setFocused(true); inputProps?.onFocus?.(event); }}
          onBlur={(event) => { setFocused(false); inputProps?.onBlur?.(event); }}
          onKeyDown={(event) => {
            if (event.key === 'Enter') onSubmit?.(current);
            inputProps?.onKeyDown?.(event);
          }}
          className="min-w-0 flex-1 bg-transparent text-[15px] text-neutral-900 outline-hidden placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500 [&::-webkit-search-cancel-button]:hidden"
        />
        {current ? (
          <button
            type="button"
            aria-label={clearLabel}
            onMouseDown={(event) => event.preventDefault()}
            onClick={() => {
              update('');
              inputRef.current?.focus();
            }}
            className="flex size-9 shrink-0 items-center justify-center rounded-lg text-foreground-3 transition-colors hover:bg-hover hover:text-foreground"
          >
            <X className="size-3.5" />
          </button>
        ) : (
          trailing
        )}
      </label>
    </BorderBeam>
  );
}
