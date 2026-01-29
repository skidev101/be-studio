import type { MetadataRoute } from 'next';
import { servicesConfig } from '@/lib/services-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://be-studio.vercel.app';
  const lastModified = new Date();

  // Static marketing pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      priority: 0.7,
    },
  ];

  // Dynamic service pages from servicesConfig
  const serviceRoutes: MetadataRoute.Sitemap = Object.values(
    servicesConfig
  )
    // only include pages that actually exist
    .filter(service => service.hasCustomPage)
    .map(service => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      priority: service.tier === 'premium' ? 0.85 : 0.75,
    }));

  return [...staticRoutes, ...serviceRoutes];
}
