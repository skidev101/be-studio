import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getServiceConfig, servicesConfig } from '@/lib/services-config'
import BrandDiscoveryPage from '@/components/services/BrandDiscoveryPage'
import BrandBuildPage from '@/components/services/BrandBuildPage'
import ServiceTemplate from '@/components/services/ServiceTemplate'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return Object.keys(servicesConfig).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const config = getServiceConfig(slug)

  if (!config) return {}

  return {
    title: config.title,
    description: config.description,
    openGraph: {
      title: config.title,
      description: config.description,
      url: `/services/${config.slug}`,
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const config = getServiceConfig(slug)

  if (!config) {
    notFound()
  }

  // Engagements with a bespoke page.
  if (config.slug === 'brand-build') {
    return <BrandBuildPage />
  }

  if (config.slug === 'brand-discovery') {
    return <BrandDiscoveryPage />
  }

  // Everything else renders from the config.
  return <ServiceTemplate config={config} />
}
