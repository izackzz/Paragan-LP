'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import type { SearchPost } from '@/lib/blog/types';
import { postUrl } from '@/lib/blog/urls';

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
  const input = useRef<HTMLInputElement>(null);
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
      className="relative w-full sm:w-64"
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
      onKeyDown={(event) => {
        if (event.key === 'Escape') {
          setOpen(false);
          input.current?.focus();
        }
      }}
    >
      <Label htmlFor="blog-search" className="sr-only">
        {copy.search}
      </Label>
      <div className="relative">
        <Search
          size={16}
          aria-hidden="true"
          className="pointer-events-none absolute top-3.5 left-3 text-foreground-3"
        />
        <Input
          ref={input}
          id="blog-search"
          type="search"
          placeholder={copy.searchPlaceholder}
          value={query}
          autoComplete="off"
          className="min-h-11 rounded-md border-border bg-surface-1 pr-11 pl-9 text-sm"
          aria-controls="blog-search-results"
          aria-expanded={open}
          onFocus={() => {
            setOpen(true);
            void load();
          }}
          onChange={(event) => {
            setQuery(event.target.value);
            setOpen(true);
          }}
        />
        {query && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-0 right-0 min-h-11 min-w-11 rounded-md"
            aria-label={copy.clear}
            onClick={() => {
              setQuery('');
              input.current?.focus();
            }}
          >
            <X size={16} aria-hidden="true" />
          </Button>
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
