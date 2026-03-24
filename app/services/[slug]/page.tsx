import { notFound } from 'next/navigation'
import { getServiceConfig } from '@/lib/services-config'
import dynamic from 'next/dynamic'

// Use dynamic imports for the page components to improve build/compile times
// and reduce the initial client bundle for the services route.
const BrandAnalysisPage = dynamic(() => import('@/components/services/BrandAnalysisPage'))
const FullBrandBuildPage = dynamic(() => import('@/components/services/FullBrandBuildPage'))
const ServiceTemplate = dynamic(() => import('@/components/services/ServiceTemplate'))

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params
  const config = getServiceConfig(slug)

  // 404 if service doesn't exist
  if (!config) {
    notFound()
  }
  
  // Route to custom pages
  if (config.slug === 'full-brand-build') {
    return <FullBrandBuildPage />
  }

  if (config.slug === 'brand-analysis') {
    return <BrandAnalysisPage />
  }

  // Otherwise use the standard service template
  return <ServiceTemplate config={config} />
}
