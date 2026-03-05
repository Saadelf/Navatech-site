import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/legal/', '/en/legal/'],
    },
    sitemap: 'https://navatech.pro/sitemap.xml',
  };
}
