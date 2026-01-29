"use client"

import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation'
import { getServiceConfig } from '@/lib/services-config'

// Import custom service pages
import BrandAnalysisPage from '@/components/services/BrandAnalysisPage'
// import BusinessBrandingPage from '@/components/services/BusinessBrandingPage' // When you create it

// Import the template
import ServiceTemplate from '@/components/services/ServiceTemplate'

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Strategic branding services designed to position your business for growth, clarity, and long-term success.',
};

const ServicePage = () => {
  const { slug } = useParams()
  const config = getServiceConfig(slug as string)

  // 404 if service doesn't exist
  if (!config) {
    notFound()
  }

  // Route to custom page if it has one
  if (config.hasCustomPage && config.slug === 'brand-analysis') {
    return <BrandAnalysisPage />
  }

  // For future custom pages:
  // if (config.hasCustomPage && config.slug === 'business-branding-packages') {
  //   return <BusinessBrandingPage />
  // }

  // Otherwise use template
  return <ServiceTemplate config={config} />
}

export default ServicePage
