import type { Metadata } from 'next';
import { AsciiBrand } from './ascii-brand';

export const metadata: Metadata = {
  title: 'Brand — Paragan',
  description: 'Trevo Paragan em animação ASCII.',
};

export default function BrandPage() {
  return (
    <main className="grid min-h-svh place-items-center bg-background p-4 text-foreground">
      <h1 className="sr-only">Marca Paragan</h1>
      <AsciiBrand />
    </main>
  );
}
