'use client';

// Spectrum UI Image Preview, adapted for keyboard access and editorial media.
import Image from 'next/image';
import { X, Maximize2 } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

export default function ImagePreview({ src, alt, width, height, className }: {
  src: string; alt: string; width: number; height: number; className?: string;
}) {
  return <Dialog.Root>
    <Dialog.Trigger className={cn('group relative block w-full cursor-zoom-in overflow-hidden rounded-xl border border-border bg-surface-1 p-2 outline-offset-4', className)} aria-label={`Ampliar imagem: ${alt}`}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1024px) 720px, 90vw" className="h-auto w-full rounded-lg" />
      <span aria-hidden="true" className="absolute right-4 bottom-4 flex size-8 items-center justify-center rounded-lg border border-border bg-background/90 text-foreground-2 opacity-75 backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100"><Maximize2 size={15} /></span>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 z-80 bg-black/75 backdrop-blur-sm" />
      <Dialog.Content aria-describedby={undefined} className="fixed top-1/2 left-1/2 z-90 flex max-h-[90dvh] w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-2xl border border-white/15 bg-background p-3 shadow-2xl outline-none md:p-4">
        <div className="mb-3 flex items-center justify-between gap-4 pl-2"><Dialog.Title className="text-sm leading-relaxed text-foreground-2">{alt}</Dialog.Title><Dialog.Close aria-label="Fechar imagem ampliada" className="flex size-11 shrink-0 items-center justify-center rounded-xl text-foreground-2 hover:bg-hover"><X size={20} /></Dialog.Close></div>
        <Image src={src} alt={alt} width={width} height={height} sizes="90vw" className="min-h-0 w-full rounded-xl object-contain" style={{ maxHeight: 'calc(90dvh - 6rem)' }} />
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>;
}
