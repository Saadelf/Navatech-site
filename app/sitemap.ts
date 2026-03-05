import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://navatech.pro';

  const routes = [
    '',
    '/solutions',
    '/simulateur',
    '/tarifs',
    '/audit',
    '/etudes-de-cas',
    '/blog',
    '/a-propos',
    '/contact',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    alternates: {
      languages: {
        fr: `${baseUrl}${route}`,
        en: `${baseUrl}/en${route === '' ? '' : route.replace('simulateur', 'simulator').replace('tarifs', 'pricing').replace('etudes-de-cas', 'case-studies').replace('a-propos', 'about')}`,
      },
    },
  }));

  // Add the EN specific URLs mapping explicitly
  const enRoutes = [
    '/en',
    '/en/solutions',
    '/en/simulator',
    '/en/pricing',
    '/en/audit',
    '/en/case-studies',
    '/en/blog',
    '/en/about',
    '/en/contact',
  ];

  const enSitemapEntries: MetadataRoute.Sitemap = enRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));

  return [...sitemapEntries, ...enSitemapEntries];
}
