'use client';
import { useState } from 'react';
import { Menu } from '@base-ui/react/menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';

export function ArticleActions({ url, sourceUrl }: { url: string; sourceUrl: string }) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState(false);
  async function write(markdown: boolean) {
    setBusy(true);
    try {
      // Start the clipboard operation in the activation event, including Safari's permission window.
      const text = markdown
        ? fetch(sourceUrl).then((response) => {
            if (!response.ok) throw new Error('source');
            return response.text();
          })
        : Promise.resolve(url);
      if (typeof ClipboardItem !== 'undefined' && navigator.clipboard?.write) {
        await navigator.clipboard.write([
          new ClipboardItem({
            'text/plain': text.then((value) => new Blob([value], { type: 'text/plain' })),
          }),
        ]);
      } else {
        await navigator.clipboard.writeText(await text);
      }
      setStatus(copy.copied);
    } catch {
      setStatus(copy.copyError);
    } finally {
      setBusy(false);
    }
  }
  return (
    <div className="max-w-full">
      <Menu.Root>
        <Menu.Trigger
          render={<Button variant="ghost" size="sm" className="min-h-11 rounded-md px-0 text-sm" />}
          disabled={busy}
          aria-busy={busy}
        >
          <span className="flex items-center gap-2">
            {copy.copy}
            <ChevronDown size={14} aria-hidden="true" />
          </span>
        </Menu.Trigger>
        <Menu.Portal>
          <Menu.Positioner sideOffset={8} className="z-50">
            <Menu.Popup className="min-w-48 rounded-lg border border-border bg-popover p-1 text-sm text-popover-foreground shadow-md outline-none">
              <Menu.Item
                className="flex min-h-11 cursor-pointer items-center rounded-md px-3 outline-none data-highlighted:bg-hover"
                onClick={() => void write(false)}
              >
                {copy.copyLink}
              </Menu.Item>
              <Menu.Item
                className="flex min-h-11 cursor-pointer items-center rounded-md px-3 outline-none data-highlighted:bg-hover"
                onClick={() => void write(true)}
              >
                {copy.copyMarkdown}
              </Menu.Item>
            </Menu.Popup>
          </Menu.Positioner>
        </Menu.Portal>
      </Menu.Root>
      <p role="status" className="text-xs leading-relaxed text-foreground-3">
        {status}
      </p>
      {status === copy.copyError && (
        <a href={sourceUrl} className="text-xs underline">
          {copy.copyMarkdown}
        </a>
      )}
    </div>
  );
}
