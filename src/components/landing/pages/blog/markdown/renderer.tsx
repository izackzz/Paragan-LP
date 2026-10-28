import { Fragment, type ReactNode } from 'react';
import Link from 'next/link';
import { LinkIcon } from 'lucide-react';
import type { Nodes, Image as ImageNode } from 'mdast';
import type { BlogPost } from '@/lib/blog/types';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
import ImagePreview from '@/components/spectrumui/image-preview';
import { ArticleCodeBlock } from './article-code-block';
import styles from '../blog.module.css';

export function MarkdownRenderer({ post }: { post: BlogPost }) {
  const notes = post.ast.children.filter((node) => node.type === 'footnoteDefinition');
  const noteIndex = (id: string) => notes.findIndex((note) => note.identifier === id) + 1;
  const occurrences = new Map<string, number>();
  const references = new Map<string, string[]>();
  function image(node: ImageNode, inline = false) {
    const media = post.images[node.url];
    if (!media) return null;
    const content = <ImagePreview src={media.src} alt={media.alt} width={media.width} height={media.height} />;
    if (inline)
      return (
        <span className="my-6 block">{content}</span>
      );
    return (
      <figure className={styles.media}>
        {content}
        {(media.caption || node.title) && (
          <figcaption className={styles.caption}>{media.caption ?? node.title}</figcaption>
        )}
      </figure>
    );
  }
  function render(node: Nodes, key: number | string): ReactNode {
    const children =
      'children' in node && !['table', 'footnoteDefinition', 'definition'].includes(node.type)
        ? node.children.map((child, index) => render(child, index))
        : null;
    switch (node.type) {
      case 'root':
        return <Fragment key={key}>{children}</Fragment>;
      case 'text':
        return node.value;
      case 'paragraph':
        return node.children.length === 1 && node.children[0].type === 'image' ? (
          <Fragment key={key}>{image(node.children[0])}</Fragment>
        ) : (
          <p key={key}>{children}</p>
        );
      case 'heading': {
        const id = String(node.data?.id);
        const Tag = `h${node.depth}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
        const title = post.headings.find((heading) => heading.id === id)?.title ?? '';
        return (
          <Tag id={id} key={key}>
            <a
              data-heading-link
              href={`#${id}`}
              aria-label={copy.headingLink(title)}
              className={styles.headingLink}
            >
              <LinkIcon size={16} aria-hidden="true" />
            </a>
            {children}
          </Tag>
        );
      }
      case 'strong':
        return <strong key={key}>{children}</strong>;
      case 'emphasis':
        return <em key={key}>{children}</em>;
      case 'delete':
        return <del key={key}>{children}</del>;
      case 'inlineCode':
        return <code key={key}>{node.value}</code>;
      case 'break':
        return <br key={key} />;
      case 'thematicBreak':
        return <hr key={key} />;
      case 'link':
        return node.url.startsWith('/') ? (
          <Link href={node.url} key={key} title={node.title ?? undefined} className="text-blue-600 dark:text-blue-400">
            {children}
          </Link>
        ) : (
          <a
            href={node.url}
            className="text-blue-600 dark:text-blue-400"
            key={key}
            title={node.title ?? undefined}
            rel={node.url.startsWith('https:') ? 'noopener noreferrer' : undefined}
          >
            {children}
          </a>
        );
      case 'image':
        return <Fragment key={key}>{image(node, true)}</Fragment>;
      case 'blockquote':
        return <blockquote key={key}>{children}</blockquote>;
      case 'list':
        return node.ordered ? (
          <ol start={node.start ?? 1} key={key}>
            {children}
          </ol>
        ) : (
          <ul key={key}>{children}</ul>
        );
      case 'listItem':
        return (
          <li key={key}>
            {typeof node.checked === 'boolean' && (
              <input type="checkbox" checked={node.checked} disabled aria-label={copy.posts} />
            )}
            {children}
          </li>
        );
      case 'code': {
        const block = post.code[String(node.data?.id)];
        return <ArticleCodeBlock key={key} block={block} code={node.value} meta={node.meta ?? ''} />;
      }
      case 'table':
        return (
          <div
            key={key}
            className="max-w-full overflow-x-auto rounded-lg border border-border"
            tabIndex={0}
            role="region"
            aria-label={copy.table}
          >
            <table>
              <thead>
                <tr>
                  {node.children[0].children.map((cell, index) => (
                    <th
                      scope="col"
                      key={index}
                      style={{ textAlign: node.align?.[index] ?? undefined }}
                    >
                      {cell.children.map(render)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {node.children.slice(1).map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.children.map((cell, index) => (
                      <td key={index} style={{ textAlign: node.align?.[index] ?? undefined }}>
                        {cell.children.map(render)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'footnoteReference': {
        const number = noteIndex(node.identifier);
        const count = (occurrences.get(node.identifier) ?? 0) + 1;
        occurrences.set(node.identifier, count);
        const id = `fnref-${number}-${count}`;
        references.set(node.identifier, [...(references.get(node.identifier) ?? []), id]);
        return (
          <sup key={key} id={id}>
            <a href={`#fn-${number}`} aria-label={copy.noteReference(number)}>
              {number}
            </a>
          </sup>
        );
      }
      case 'definition':
      case 'footnoteDefinition':
        return null;
      default:
        throw new Error(`Nó Markdown não suportado: ${node.type}`);
    }
  }
  const body = post.ast.children.map(render);
  return (
    <div className={styles.prose}>
      {body}
      {notes.length > 0 && (
        <section aria-label={copy.note} className="mt-12 border-t border-border pt-6 text-sm">
          <h2 className="sr-only">{copy.note}</h2>
          <ol>
            {notes.map((note, index) => (
              <li key={note.identifier} id={`fn-${index + 1}`} className="scroll-mt-28">
                {note.children.map(render)}{' '}
                {(references.get(note.identifier) ?? []).map((reference, occurrence) => (
                  <a
                    key={reference}
                    href={`#${reference}`}
                    aria-label={`${copy.noteBack} ${occurrence + 1}`}
                  >
                    ↩{' '}
                  </a>
                ))}
              </li>
            ))}
          </ol>
        </section>
      )}
    </div>
  );
}
