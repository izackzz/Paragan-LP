import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockCopyButton,
  CodeBlockContent,
  CodeBlockWrapToggle,
} from '@/components/reui/code-block/code-block';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ScrollFade } from '@/components/ui/scroll-fade';
import { WrapText } from 'lucide-react';
import type { CodeBlockLine } from '@/components/reui/code-block/code-block-highlight';
import type { CompiledCode } from '@/lib/blog/types';
import styles from '../blog.module.css';

// Fence metadata: title=file.py highlight="2-4" added="5" removed="6"
// error="7" warning="8" info="9" words="charge,amount" accent="blue|violet|amber|emerald".
function option(meta: string, key: string) {
  return meta
    .match(new RegExp(`(?:^|\\s)${key}=(?:"([^"]*)"|'([^']*)'|(\\S+))`))
    ?.slice(1)
    .find((value) => value !== undefined);
}
function contains(spec: string | undefined, line: number) {
  return (
    spec?.split(',').some((part) => {
      const match = part.trim().match(/^(\d+)(?:-(\d+))?$/);
      return match && line >= Number(match[1]) && line <= Number(match[2] ?? match[1]);
    }) ?? false
  );
}
export function ArticleCodeBlock({
  block,
  code,
  meta,
}: {
  block: CompiledCode;
  code: string;
  meta: string;
}) {
  const markedWords = (option(meta, 'words') ?? '').split(',').filter(Boolean);
  const highlighted = option(meta, 'highlight') ?? meta.match(/\{([\d,\s-]+)\}/)?.[1];
  const lines: CodeBlockLine[] = block.lines.map((tokens, index) => {
    const number = index + 1;
    const level = (['error', 'warning', 'info'] as const).find((kind) =>
      contains(option(meta, kind), number),
    );
    return {
      number,
      text: tokens.map((token) => token.content).join(''),
      state: {
        highlighted: contains(highlighted, number),
        level,
        diff: contains(option(meta, 'added'), number)
          ? 'add'
          : contains(option(meta, 'removed'), number)
            ? 'remove'
            : undefined,
      },
      tokens: tokens.flatMap((token) => {
        const pieces: { content: string; word?: boolean }[] = [];
        let rest = token.content;
        while (rest) {
          const matches = markedWords
            .map((word) => ({ word, index: rest.indexOf(word) }))
            .filter((match) => match.index >= 0)
            .sort((a, b) => a.index - b.index);
          const match = matches[0];
          if (!match) {
            pieces.push({ content: rest });
            break;
          }
          if (match.index) pieces.push({ content: rest.slice(0, match.index) });
          pieces.push({ content: match.word, word: true });
          rest = rest.slice(match.index + match.word.length);
        }
        return pieces.map((piece) => ({
          ...piece,
          color: token.color,
          colorDark: token.color,
          fontStyle:
            token.fontStyle && token.fontStyle & 1
              ? ('italic' as const)
              : token.fontStyle && token.fontStyle & 2
                ? ('bold' as const)
                : undefined,
        }));
      }),
    };
  });
  const requested = option(meta, 'accent') ?? 'blue';
  const accent = ['blue', 'violet', 'amber', 'emerald'].includes(requested) ? requested : 'blue';
  return (
    <div className={`dark ${styles.codeFrame}`} data-accent={accent}>
      <CodeBlock
        composedContent
        lines={lines}
        code={code}
        language={block.language}
        highlight={false}
        showLineNumbers
        label={block.title}
        className={styles.codeBlock}
      >
        <CodeBlockHeader className="min-h-12 flex-wrap gap-2 px-3 py-2 sm:flex-nowrap sm:px-4">
          <span aria-hidden="true" className="flex shrink-0 gap-1.5">
            <span className="size-2 rounded-full bg-rose-400/80" />
            <span className="size-2 rounded-full bg-amber-300/80" />
            <span className="size-2 rounded-full bg-emerald-400/80" />
          </span>
          <CodeBlockTitle className="min-w-0 truncate font-mono text-xs text-slate-300">
            {block.title}
          </CodeBlockTitle>
          <CodeBlockWrapToggle
            aria-label="Ativar ou desativar quebra de linha"
            title="Quebra de linha"
            className="ml-auto min-h-9 min-w-9 rounded-md px-2 text-slate-300 transition-colors data-[state=on]:bg-slate-700 data-[state=on]:text-sky-300"
          >
            <WrapText size={16} aria-hidden="true" />
          </CodeBlockWrapToggle>
          <CodeBlockCopyButton
            className="min-h-9 min-w-9 rounded-md transition-all duration-200 data-[copied]:bg-emerald-400/10 data-[copied]:text-emerald-300 motion-reduce:transition-none"
            labels={{ copy: 'Copiar código', copied: 'Copiado!' }}
          />
        </CodeBlockHeader>
        <ScrollFade className="[--scroll-fade-background:#101722]">
          <ScrollArea
            orientation="horizontal"
            className="w-full min-w-0"
            viewportClassName={styles.codeViewport}
            viewportProps={
              {
                'aria-label': `Código: ${block.title}`,
                tabIndex: 0,
                'data-lenis-prevent': true,
              } as React.ComponentProps<typeof ScrollArea>['viewportProps']
            }
          >
            <CodeBlockContent />
          </ScrollArea>
        </ScrollFade>
      </CodeBlock>
    </div>
  );
}
