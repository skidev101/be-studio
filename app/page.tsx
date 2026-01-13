import { About } from '@/components/landing/About'
import { Approach } from '@/components/landing/Approach'
import { Clients } from '@/components/landing/Clients'
import Hero from '@/components/landing/Hero'
import Pricing from '@/components/landing/Pricing'
import { Services } from '@/components/landing/Services'

const page = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Approach />
      <Pricing />
      <Clients />
    </>
  )
}

export default page