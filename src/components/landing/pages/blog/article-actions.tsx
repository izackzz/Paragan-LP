'use client';
import { useState } from 'react';
import { FileText, LinkIcon, LoaderCircle } from 'lucide-react';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import styles from './blog.module.css';

export function ArticleActions({ url, sourceUrl }: { url: string; sourceUrl: string }) {
  const [status, setStatus] = useState('');
  const [busy, setBusy] = useState<'link' | 'markdown' | null>(null);
  async function write(markdown: boolean) {
    if (busy) return;
    setStatus('');
    setBusy(markdown ? 'markdown' : 'link');
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
      setBusy(null);
    }
  }
  return (
    <section className={styles.articleActions} aria-labelledby="article-tools">
      <h2 id="article-tools" className={styles.sidebarTitle}>
        {copy.tools}
      </h2>
      <button
        type="button"
        className={styles.toolButton}
        disabled={busy !== null}
        aria-busy={busy === 'link'}
        onClick={() => void write(false)}
      >
        {busy === 'link' ? (
          <LoaderCircle size={15} aria-hidden="true" className="animate-spin" />
        ) : (
          <LinkIcon size={15} aria-hidden="true" />
        )}
        {copy.copyLink}
      </button>
      <button
        type="button"
        className={styles.toolButton}
        disabled={busy !== null}
        aria-busy={busy === 'markdown'}
        onClick={() => void write(true)}
      >
        {busy === 'markdown' ? (
          <LoaderCircle size={15} aria-hidden="true" className="animate-spin" />
        ) : (
          <FileText size={15} aria-hidden="true" />
        )}
        {copy.copyMarkdown}
      </button>
      <p role="status" className={styles.copyStatus}>
        {status}
      </p>
      {status === copy.copyError && (
        <a href={sourceUrl} className={styles.sourceLink}>
          {copy.source}
        </a>
      )}
    </section>
  );
}
