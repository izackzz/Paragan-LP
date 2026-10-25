import { siteSeo } from '@/config/seo';

export function PageStructuredData({
  title,
  description,
  pathname,
  pageType = 'WebPage',
}: {
  title: string;
  description: string;
  pathname: `/${string}`;
  pageType?: 'WebPage' | 'ContactPage';
}) {
  const url = new URL(pathname, siteSeo.url).toString();
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': pageType,
        '@id': url,
        url,
        name: title,
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@type': 'WebSite', name: siteSeo.name, url: siteSeo.url },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
