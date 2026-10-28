import { notFound } from 'next/navigation';
import { getPostBySlug, getPublishedPosts } from '@/lib/blog/repository';
import { articleMetadata } from '@/lib/blog/metadata';
import { ArticlePage } from '@/components/landing/pages/blog/article-page';
type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return getPublishedPosts().map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();
  return articleMetadata(post);
}
export default async function PostPage({ params }: Props) {
  const post = getPostBySlug((await params).slug);
  if (!post) notFound();
  return <ArticlePage post={post} />;
}
