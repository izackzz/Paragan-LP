'use client';
import { useEffect, useState } from 'react';
import { TreeNav } from '@/components/spectrumui/tree-nav';
import type { BlogPost } from '@/lib/blog/types';
import styles from './blog.module.css';

export function ArticleToc({ headings }: { headings: BlogPost['headings'] }) {
  const sections = headings.filter((heading) => heading.depth <= 3);
  const [active, setActive] = useState(sections[0] ? `#${sections[0].id}` : '');
  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const current = sections.filter((section) => (document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) <= 160).at(-1) ?? sections[0];
        if (current) setActive(`#${current.id}`);
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('hashchange', update);
    update();
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', update); window.removeEventListener('hashchange', update); };
  // Headings are immutable for the current article.
  }, [headings]);
  if (!sections.length) return null;
  return <nav aria-label="Seções do artigo" className={styles.toc}>
    <p className="mb-4 px-2 text-xs font-medium tracking-wide text-foreground-3 uppercase">Neste artigo</p>
    <TreeNav items={sections.map((section) => ({ label: section.title, href: `#${section.id}`, depth: section.depth }))} activeHref={active} onSelect={(item) => setActive(item.href)} />
  </nav>;
}
