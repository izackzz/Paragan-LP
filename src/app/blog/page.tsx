import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { listingMetadata } from '@/lib/blog/metadata';
import { getPage } from '@/lib/blog/repository';
export function generateMetadata() {
  return listingMetadata(1, undefined, undefined, getPage().noindex);
}
export default function BlogPage() {
  return <BlogIndex />;
}
