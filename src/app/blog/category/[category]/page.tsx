import { notFound } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getCategories, getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
type Props = { params: Promise<{ category: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getCategories().map(({ slug }) => ({ category: slug }));
}
export async function generateMetadata({ params }: Props) {
  const { category } = await params;
  const item = getCategories().find((item) => item.slug === category);
  if (!item) notFound();
  return listingMetadata(1, category, item.name, getPage(1, category).noindex);
}
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  if (!getPage(1, category).valid) notFound();
  return <BlogIndex category={category} />;
}
