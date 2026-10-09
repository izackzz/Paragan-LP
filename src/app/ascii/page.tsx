import type { Metadata } from 'next';
import { RenderAscii } from '@/components/ascii/render-ascii';
import { t } from '@/i18n';

export const metadata: Metadata = {
  title: t('metadata.brandTitle'),
  description: t('metadata.brandDescription'),
};

export default function AsciiPage() {
  return (
    <main className="min-h-vh flex flex-col place-items-center content-center items-center justify-center gap-10 bg-background p-4 align-middle text-foreground">
      <RenderAscii
        render="clover"
        aspect="1/1"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.halftone')}
      />
      <RenderAscii
        render="clover"
        model="pixels"
        aspect="1/1"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.pixels')}
      />
      <RenderAscii
        render="clover"
        aspect="1/1"
        model="ascii"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.ascii')}
      />
      <RenderAscii
        render="shark"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.ascii')}
      />
      <RenderAscii
        render="shark"
        model="ascii"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.ascii')}
      />
      <RenderAscii
        render="shark"
        model="pixels"
        aspect="16/9"
        className="max-w-[min(80svh,42rem)] text-primary"
        label={t('artwork.clover.ascii')}
      />
    </main>
  );
}
