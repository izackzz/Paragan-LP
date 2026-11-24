'use client';

import { useEffect, useRef, useState } from 'react';
import { Check, LinkIcon } from 'lucide-react';
import { absoluteUrl, postUrl } from '@/lib/blog/urls';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import styles from './blog.module.css';

export function HeadingAnchor({ id, title, slug }: { id: string; title: string; slug: string }) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);
  return (
    <>
      <a
        data-heading-link
        href={`#${id}`}
        aria-label={copy.copyHeading(title)}
        className={styles.headingLink}
        data-copied={copied || undefined}
        onClick={() => {
          if (!navigator.clipboard?.writeText) {
            setCopied(false);
            setError(true);
            return;
          }
          void navigator.clipboard
            .writeText(`${absoluteUrl(postUrl(slug))}#${id}`)
            .then(() => {
              setCopied(true);
              setError(false);
              clearTimeout(timer.current);
              timer.current = setTimeout(() => setCopied(false), 1800);
            })
            .catch(() => setError(true));
        }}
      >
        <LinkIcon
          size={15}
          aria-hidden="true"
          className={copied ? styles.iconHidden : styles.iconVisible}
        />
        <Check
          size={15}
          aria-hidden="true"
          className={copied ? styles.iconVisible : styles.iconHidden}
        />
      </a>
      <span role="status" className="sr-only">
        {copied ? copy.copied : error ? copy.copyError : ''}
      </span>
    </>
  );
}
