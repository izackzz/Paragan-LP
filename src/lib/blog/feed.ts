import { siteSeo } from '@/config/seo';
import { blogCopy } from '@/i18n/messages/pages/blog';
import { absoluteUrl, postUrl } from './urls';
import type { BlogPost } from './types';
export const escapeXml = (text: string) =>
  text.replace(
    /[<>&"']/g,
    (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;', "'": '&apos;' })[char]!,
  );
export function renderFeed(posts: BlogPost[]) {
  return `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>${escapeXml(`${siteSeo.name} — ${blogCopy.title}`)}</title><link>${absoluteUrl('/blog')}</link><description>${escapeXml(blogCopy.description)}</description><language>pt-BR</language>${posts.map((post) => `<item><title>${escapeXml(post.frontMatter.title)}</title><link>${absoluteUrl(postUrl(post.slug))}</link><guid isPermaLink="true">${absoluteUrl(postUrl(post.slug))}</guid><description>${escapeXml(post.frontMatter.excerpt)}</description><pubDate>${new Date(post.frontMatter.date).toUTCString()}</pubDate></item>`).join('')}</channel></rss>`;
}
