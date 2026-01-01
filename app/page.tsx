import { Approach } from '@/components/landing/Approach'
import { Clients } from '@/components/landing/Clients'
import Hero from '@/components/landing/Hero'
import { Services } from '@/components/landing/Services'
import React from 'react'

const page = () => {
  return (
    <>
      <Hero />
      <Approach />
      <Services />
      <Clients />
    </>
  )
}

export default page