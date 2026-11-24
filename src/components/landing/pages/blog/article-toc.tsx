'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FluidGroup } from '@/components/landing/fluid-group';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import type { BlogPost } from '@/lib/blog/types';
import styles from './blog.module.css';

export function ArticleToc({ headings }: { headings: BlogPost['headings'] }) {
  const sections = useMemo(() => headings.filter((heading) => heading.depth <= 3), [headings]);
  const [active, setActive] = useState(sections[0]?.id ?? '');
  const [expanded, setExpanded] = useState(false);
  const nav = useRef<HTMLElement>(null);
  useEffect(() => {
    const native =
      CSS.supports('scroll-target-group: auto') && CSS.supports('selector(:target-current)');
    const update = () => {
      const currentLink = native
        ? nav.current?.querySelector<HTMLAnchorElement>('a:target-current')
        : null;
      const current =
        sections
          .filter(
            (section) =>
              (document.getElementById(section.id)?.getBoundingClientRect().top ?? Infinity) <= 128,
          )
          .at(-1) ?? sections[0];
      setActive(currentLink?.hash.slice(1) ?? current?.id ?? '');
    };
    // CSS tracks supporting browsers; IntersectionObserver is the fallback,
    // without measuring every heading on every scroll frame.
    const observer = native
      ? null
      : new IntersectionObserver(update, {
          rootMargin: '-112px 0px -65% 0px',
          threshold: 0,
        });
    sections.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) observer?.observe(target);
    });
    window.addEventListener('scrollend', update);
    window.addEventListener('resize', update);
    window.addEventListener('hashchange', update);
    update();
    return () => {
      observer?.disconnect();
      window.removeEventListener('scrollend', update);
      window.removeEventListener('resize', update);
      window.removeEventListener('hashchange', update);
    };
  }, [sections]);
  if (!sections.length) return null;
  return (
    <nav ref={nav} aria-label={copy.tocLabel} className={styles.toc}>
      <h2 className={styles.sidebarTitle}>
        <span className={styles.desktopTocTitle}>{copy.toc}</span>
        <button
          type="button"
          className={styles.tocToggle}
          aria-expanded={expanded}
          aria-controls="article-toc-links"
          onClick={() => setExpanded(!expanded)}
        >
          {copy.toc}
          <ChevronDown size={16} aria-hidden="true" />
        </button>
      </h2>
      <div id="article-toc-links" className={styles.tocContent} data-expanded={expanded}>
        <FluidGroup as="ul" axis="y" className={styles.tocList}>
          {sections.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={section.id === active ? 'location' : undefined}
              data-depth={section.depth}
              className={styles.tocLink}
              onClick={() => setActive(section.id)}
            >
              {section.title}
            </a>
          ))}
        </FluidGroup>
      </div>
    </nav>
  );
}
