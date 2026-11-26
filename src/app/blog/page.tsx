import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { listingMetadata } from '@/lib/blog/metadata';
import { getPage } from '@/lib/blog/repository';
export const revalidate = 60;
export async function generateMetadata() {
  return listingMetadata(1, undefined, undefined, (await getPage()).noindex);
}
export default function BlogPage() {
  return <BlogIndex />;
}
