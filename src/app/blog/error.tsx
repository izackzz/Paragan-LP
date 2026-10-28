'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
export default function BlogError({ reset }: { reset: () => void }) {
  return (
    <div className="landing-frame px-5 py-24 md:px-7 xl:px-10">
      <h1 className="font-display text-3xl">{copy.error}</h1>
      <p className="mt-4 text-foreground-3">{copy.errorDescription}</p>
      <div className="mt-6 flex flex-wrap items-center gap-4">
        <Button onClick={reset}>{copy.retry}</Button>
        <Link href="/blog" className="inline-flex min-h-11 items-center underline">
          {copy.back}
        </Link>
      </div>
    </div>
  );
}
