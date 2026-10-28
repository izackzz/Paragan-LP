import { notFound, permanentRedirect } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getListingParams, getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
type Props = { params: Promise<{ page: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getListingParams();
}
export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  if (!/^[1-9]\d*$/.test(page) || !getPage(Number(page)).valid) notFound();
  return listingMetadata(Number(page), undefined, undefined, getPage(Number(page)).noindex);
}
export default async function PaginatedBlog({ params }: Props) {
  const { page } = await params;
  if (!/^[1-9]\d*$/.test(page) || !getPage(Number(page)).valid) notFound();
  if (page === '1') permanentRedirect('/blog');
  return <BlogIndex page={Number(page)} />;
}
