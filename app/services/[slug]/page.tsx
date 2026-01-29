import { notFound } from 'next/navigation';
import { getServiceConfig, servicesConfig } from '@/lib/services-config';

// Custom pages
import BrandAnalysisPage from '@/components/services/BrandAnalysisPage';
// import BusinessBrandingPage from '@/components/services/BusinessBrandingPage'

// Template for regular services
import ServiceTemplate from '@/components/services/ServiceTemplate';

import type { Metadata } from 'next';

type Props = { params: { slug: string } };

// Dynamic metadata (uses sync getServiceConfig)
export function generateMetadata({ params }: Props): Metadata {
  const config = getServiceConfig(params.slug);

  if (!config) {
    return {
      title: 'Service Not Found',
      robots: { index: false },
    };
  }

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `https://be-studio.vercel.app/services/${config.slug}`,
      images: ['/og-image.png'],
    },
    alternates: {
      canonical: `https://be-studio.vercel.app/services/${config.slug}`,
    },
  };
}

// Generate all valid slugs for SSG
export function generateStaticParams() {
  return Object.values(servicesConfig).map(service => ({ slug: service.slug }));
}

// Page component
const ServicePage = ({ params }: Props) => {
  const config = getServiceConfig(params.slug);

  if (!config) return notFound();

  // Custom pages
  if (config.hasCustomPage && config.slug === 'brand-analysis') {
    return <BrandAnalysisPage />;
  }

  // Default template
  return <ServiceTemplate config={config} />;
};

export default ServicePage;
