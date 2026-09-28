import type { MetadataRoute } from 'next';
import { servicesConfig } from '@/lib/services-config';
import { portfolioProjects } from '@/lib/portfolio-config';

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://be-studio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Every route listed here must actually resolve. There is no /services index
  // page — the engagements live at /services/[slug].
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];

  const engagementRoutes: MetadataRoute.Sitemap = Object.values(
    servicesConfig
  ).map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: service.featured ? 0.9 : 0.8,
  }));

  const projectRoutes: MetadataRoute.Sitemap = portfolioProjects.map(
    (project) => ({
      url: `${baseUrl}/portfolio/${project.slug}`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.6,
    })
  );

  return [...staticRoutes, ...engagementRoutes, ...projectRoutes];
}
