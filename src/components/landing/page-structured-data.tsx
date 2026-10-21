import { siteSeo } from '@/config/seo';

export function PageStructuredData({
  title,
  description,
  pathname,
  homeLabel,
  pageLabel,
}: {
  title: string;
  description: string;
  pathname: `/${string}`;
  homeLabel: string;
  pageLabel: string;
}) {
  const url = new URL(pathname, siteSeo.url).toString();
  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': url,
        url,
        name: title,
        description,
        inLanguage: 'pt-BR',
        isPartOf: { '@type': 'WebSite', name: siteSeo.name, url: siteSeo.url },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: homeLabel, item: siteSeo.url },
          { '@type': 'ListItem', position: 2, name: pageLabel, item: url },
        ],
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
