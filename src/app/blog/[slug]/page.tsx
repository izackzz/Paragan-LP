import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/blog/repository';
import { articleMetadata } from '@/lib/blog/metadata';
import { ArticlePage } from '@/components/landing/pages/blog/article-page';
type Props = { params: Promise<{ slug: string }> };
export const revalidate = 60;
export function generateStaticParams() {
  return [];
}
export async function generateMetadata({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  return articleMetadata(post);
}
export default async function PostPage({ params }: Props) {
  const post = await getPostBySlug((await params).slug);
  if (!post) notFound();
  return <ArticlePage post={post} />;
}
