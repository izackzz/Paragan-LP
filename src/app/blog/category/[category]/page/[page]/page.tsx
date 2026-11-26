import { notFound, permanentRedirect } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getCategories, getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
import { listingUrl } from '@/lib/blog/urls';
type Props = { params: Promise<{ category: string; page: string }> };
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}
export async function generateMetadata({ params }: Props) {
  const { category, page } = await params;
  const item = (await getCategories()).find((item) => item.slug === category);
  if (!item || !/^[1-9]\d*$/.test(page)) notFound();
  const data = await getPage(Number(page), category);
  if (!data.valid) notFound();
  return listingMetadata(Number(page), category, item.name, data.noindex);
}
export default async function CategoryPage({ params }: Props) {
  const { category, page } = await params;
  if (!/^[1-9]\d*$/.test(page) || !(await getPage(Number(page), category)).valid) notFound();
  if (page === '1') permanentRedirect(listingUrl(1, category));
  return <BlogIndex page={Number(page)} category={category} />;
}
