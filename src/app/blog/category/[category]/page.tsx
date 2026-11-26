import { notFound } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getCategories, getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
type Props = { params: Promise<{ category: string }> };
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}
export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const item = (await getCategories()).find((item) => item.slug === category);
  if (!item) notFound();
  return listingMetadata(1, category, item.name, (await getPage(1, category)).noindex);
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!(await getPage(1, category)).valid) notFound();
  return <BlogIndex category={category} />;
}
