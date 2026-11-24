'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import type { SearchPost } from '@/lib/blog/types';
import { postUrl } from '@/lib/blog/urls';
import styles from './blog.module.css';

const normalize = (text: string) =>
  text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
export function BlogSearch() {
  const [query, setQuery] = useState('');
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState<SearchPost[] | null>(null);
  const [state, setState] = useState<'idle' | 'loading' | 'error'>('idle');
  const ref = useRef<HTMLDivElement>(null);
  const controller = useRef<AbortController | null>(null);
  async function load() {
    if (index || state === 'loading') return;
    controller.current?.abort();
    const abort = new AbortController();
    controller.current = abort;
    setState('loading');
    try {
      const response = await fetch('/blog/search.json', { signal: abort.signal });
      if (!response.ok) throw new Error('search');
      setIndex(await response.json());
      setState('idle');
    } catch {
      if (!abort.signal.aborted) setState('error');
    }
  }
  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => {
    const timer = setTimeout(() => setTerm(query.trim()), 150);
    return () => clearTimeout(timer);
  }, [query]);
  useEffect(() => {
    if (!open) return;
    const close = (event: PointerEvent) => {
      if (!ref.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', close);
    return () => document.removeEventListener('pointerdown', close);
  }, [open]);
  const results =
    term && index
      ? index
          .filter((post) =>
            normalize(
              [
                post.title,
                post.excerpt,
                post.category.name,
                ...post.tags,
                ...post.authors.map((author) => author.name),
              ].join(' '),
            ).includes(normalize(term)),
          )
          .slice(0, 8)
      : [];
  return (
    <div
      ref={ref}
      className={styles.search}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          ref.current?.querySelector('input')?.focus();
        }
      }}
    >
      <label htmlFor="blog-search" className={styles.searchLabel}>
        {copy.search}
      </label>
      <div className={styles.searchField}>
        <Search size={16} aria-hidden="true" className={styles.searchIcon} />
        <input
          id="blog-search"
          type="search"
          value={query}
          placeholder={copy.searchPlaceholder}
          aria-controls="blog-search-results"
          autoComplete="off"
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
            void load();
          }}
          onFocus={() => {
            setOpen(true);
            void load();
          }}
        />
        {query && (
          <button
            type="button"
            className={styles.searchClear}
            aria-label={copy.clear}
            onClick={() => {
              setQuery('');
              setTerm('');
              ref.current?.querySelector('input')?.focus();
            }}
          >
            <X size={15} aria-hidden="true" />
          </button>
        )}
      </div>
      <div
        id="blog-search-results"
        hidden={!open || (!term && state !== 'error' && state !== 'loading')}
        className="absolute right-0 left-0 z-30 mt-2 max-h-96 overflow-y-auto rounded-lg border border-border bg-popover p-2 text-sm shadow-md sm:left-auto sm:w-80"
      >
        <p role="status" className="px-3 py-2 text-foreground-3">
          {state === 'loading'
            ? copy.searchLoading
            : state === 'error'
              ? copy.searchError
              : results.length
                ? copy.searchCount(results.length)
                : copy.searchEmpty}
        </p>
        {state === 'error' && (
          <Button variant="ghost" size="sm" className="min-h-11" onClick={() => void load()}>
            {copy.retry}
          </Button>
        )}
        <ul>
          {results.map((post) => (
            <li key={post.slug}>
              <Link
                className="block rounded-md px-3 py-3 text-foreground hover:bg-hover"
                href={postUrl(post.slug)}
                onClick={() => setOpen(false)}
              >
                {post.title}
                <span className="mt-1 block text-xs text-foreground-3">{post.category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
