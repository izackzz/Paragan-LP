import type { Metadata } from 'next';
import { RenderAscii } from '@/components/ascii/render-ascii';

export const metadata: Metadata = {
  title: 'Brand — Paragan',
  description: 'Trevo Paragan em animação ASCII.',
};

export default function AsciiPage() {
  return (
    <main className="min-h-vh place-items-center bg-background p-4 text-foreground flex-col gap-10 flex items-center justify-center content-center align-middle">
      <RenderAscii
        render="clover"
        aspect="1/1"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="bh-01"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="bh-02"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="bh-03"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="fire-01"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="fire-02"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
      <RenderAscii
        render="shark"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label="Trevo Paragan animado em caracteres ASCII"
      />
    </main>
  );
}
