import { notFound, permanentRedirect } from 'next/navigation';
import { BlogIndex } from '@/components/landing/pages/blog/blog-index';
import { getCategories, getListingParams, getPage } from '@/lib/blog/repository';
import { listingMetadata } from '@/lib/blog/metadata';
import { listingUrl } from '@/lib/blog/urls';
type Props = { params: Promise<{ category: string; page: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getCategories().flatMap(({ slug }) =>
    getListingParams(slug).map((page) => ({ category: slug, ...page })),
  );
}
export async function generateMetadata({ params }: Props) {
  const { category, page } = await params;
  const item = getCategories().find((item) => item.slug === category);
  if (!item || !/^[1-9]\d*$/.test(page) || !getPage(Number(page), category).valid) notFound();
  return listingMetadata(
    Number(page),
    category,
    item.name,
    getPage(Number(page), category).noindex,
  );
}
export default async function CategoryPage({ params }: Props) {
  const { category, page } = await params;
  if (!/^[1-9]\d*$/.test(page) || !getPage(Number(page), category).valid) notFound();
  if (page === '1') permanentRedirect(listingUrl(1, category));
  return <BlogIndex page={Number(page)} category={category} />;
}
