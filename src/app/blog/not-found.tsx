import Link from 'next/link';
import { blogCopy as copy } from '@/i18n/messages/pages/blog';
export default function BlogNotFound() {
  return (
    <div className="landing-frame px-5 py-24 md:px-7 xl:px-10">
      <h1 className="font-display text-3xl">{copy.notFound}</h1>
      <Link href="/blog" className="mt-6 inline-flex min-h-11 items-center underline">
        {copy.back}
      </Link>
    </div>
  );
}
