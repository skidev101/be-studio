import { About } from '@/components/landing/About'
import { Approach } from '@/components/landing/Approach'
// import { Clients } from '@/components/landing/Clients'
import Hero from '@/components/landing/Hero'
import Pricing from '@/components/landing/Pricing'
import { Services } from '@/components/landing/Services'
import Faq from '@/components/landing/faq'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Pricing />
  
      <Faq />
    </>
  )
}

export default page
