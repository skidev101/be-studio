import { notFound } from 'next/navigation';
import { getServiceConfig, servicesConfig } from '@/lib/services-config';

// Custom pages
import BrandAnalysisPage from '@/components/services/BrandAnalysisPage';
// import BusinessBrandingPage from '@/components/services/BusinessBrandingPage';

// Template for regular services
import ServiceTemplate from '@/components/services/ServiceTemplate';

import type { Metadata } from 'next';

type Props = {
  params: { slug: string };
};

// Generate dynamic metadata per service
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

// Generate static paths at build time (good for SSG)
export function generateStaticParams() {
  return Object.values(servicesConfig)
    .filter(service => service.hasCustomPage || service.slug)
    .map(service => ({ slug: service.slug }));
}

// Render page
const ServicePage = ({ params }: Props) => {
  const config = getServiceConfig(params.slug);

  if (!config) {
    notFound();
  }

  // Custom pages
  if (config.hasCustomPage && config.slug === 'brand-analysis') {
    return <BrandAnalysisPage />;
  }

  // Future custom pages
  // if (config.hasCustomPage && config.slug === 'business-branding-packages') {
  //   return <BusinessBrandingPage />;
  // }

  // Default template
  return <ServiceTemplate config={config} />;
};

export default ServicePage;
