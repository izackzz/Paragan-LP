import { revalidatePath, revalidateTag } from 'next/cache';
import { createBlogIngestionHandler } from '@/lib/blog/ingestion-handler';
import { ingestPost } from '@/lib/blog/ingestion-repository';

export const runtime = 'nodejs';
export const POST = createBlogIngestionHandler({
  apiKey: () => process.env.BLOG_WEBHOOK_API_KEY,
  write: ingestPost,
  refresh: (slug) => {
    revalidateTag('blog', { expire: 0 });
    revalidatePath('/blog', 'layout');
    revalidatePath(`/blog/${slug}`);
    revalidatePath('/sitemap.xml');
  },
});
