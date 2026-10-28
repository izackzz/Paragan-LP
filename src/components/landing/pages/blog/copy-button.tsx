'use client';
import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';

export function CopyButton({ value, label = copy.copyCode }: { value: string; label?: string }) {
  const [status, setStatus] = useState('');
  return (
    <span className="inline-flex flex-col items-start">
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="min-h-11 gap-2 rounded-md px-3 text-sm"
        aria-label={label}
        onClick={async () => {
          try {
            await navigator.clipboard.writeText(value);
            setStatus(copy.copied);
          } catch {
            setStatus(copy.copyError);
          }
        }}
      >
        {status === copy.copied ? (
          <Check aria-hidden="true" size={16} />
        ) : (
          <Copy aria-hidden="true" size={16} />
        )}
        {status === copy.copied ? copy.copied : label}
      </Button>
      <span role="status" className="max-w-56 text-xs text-foreground-3">
        {status === copy.copyError ? status : <span className="sr-only">{status}</span>}
      </span>
    </span>
  );
}
