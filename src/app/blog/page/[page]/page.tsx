import { notFound, permanentRedirect } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
type Props = { params: Promise<{ page: string }> };
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}
export async function generateMetadata({ params }: Props) {
  const { page } = await params;
  if (!/^[1-9]\d*$/.test(page)) notFound();
  const data = await getPage(Number(page));
  if (!data.valid) notFound();
  return listingMetadata(Number(page), undefined, undefined, data.noindex);
}
export default async function PaginatedBlog({ params }: Props) {
  const { page } = await params;
  if (!/^[1-9]\d*$/.test(page) || !(await getPage(Number(page))).valid) notFound();
  if (page === '1') permanentRedirect('/blog');
  return <BlogIndex page={Number(page)} />;
}
