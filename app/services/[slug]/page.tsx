"use client"

import { Pill } from '@/components/Pill'
import { Button } from '@/components/ui/button'
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {slug} = useParams();
  console.log("slug recieved:", slug)
  return (
    <main>
      {/* HERO */}
      <section className="px-3">
      <div className="bg-[#F7F9FC] rounded-[2rem] lg:rounded-[4rem]">
        <div className="mx-auto max-w-5xl px-6 py-18 md:py-32">
          <Pill text="Brand Analysis" />
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-[#0B1C2D]">
            Understand Where Your Brand Stands — and Where It Should Go
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4B5C73]">
            We help businesses gain clarity on how their brand is perceived,
            identify gaps in positioning, and uncover opportunities for
            sustainable growth. 
          </p>

          <Button className="mt-10 rounded-full px-8">
            Start a brand assessment
          </Button>
        </div>
      </div>
      </section>

      {/* PROBLEM */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B1C2D]">
            The Problem
          </h2>
          <p className="mt-6 max-w-3xl leading-relaxed text-[#4B5C73]">
            Many brands operate without a clear understanding of how they are
            perceived by their audience. This leads to inconsistent messaging,
            weak differentiation, and missed growth opportunities.
          </p>
        </div>
      </section>

      {/* APPROACH */}
      <section className="bg-[#F7F9FC]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B1C2D]">
            Our Approach
          </h2>

          <div className="mt-12 grid gap-10 md:grid-cols-3">
            <div>
              <h3 className="font-semibold text-[#0B1C2D]">
                Research & Discovery
              </h3>
              <p className="mt-3 text-sm text-[#4B5C73]">
                We analyze your brand, competitors, and market landscape to
                understand context and perception.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0B1C2D]">
                Brand Audit
              </h3>
              <p className="mt-3 text-sm text-[#4B5C73]">
                We evaluate your visual identity, messaging, and touchpoints to
                identify inconsistencies and gaps.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-[#0B1C2D]">
                Strategic Insights
              </h3>
              <p className="mt-3 text-sm text-[#4B5C73]">
                We translate findings into clear, actionable recommendations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B1C2D]">
            What You Get
          </h2>

          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            <li className="text-[#4B5C73]">Brand audit report</li>
            <li className="text-[#4B5C73]">Market and competitor insights</li>
            <li className="text-[#4B5C73]">Clear positioning recommendations</li>
            <li className="text-[#4B5C73]">
              Strategic direction for next steps
            </li>
          </ul>
        </div>
      </section>

      {/* WHO ITS FOR */}
      <section className="bg-[#F7F9FC]">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <h2 className="text-2xl font-semibold text-[#0B1C2D]">
            Who This Is For
          </h2>

          <ul className="mt-8 space-y-3 text-[#4B5C73]">
            <li>• Businesses preparing for rebranding</li>
            <li>• Startups seeking clear market positioning</li>
            <li>• Growing brands facing inconsistent messaging</li>
          </ul>
        </div>
      </section>

      {/* FINAL CTA */}
      <section>
        <div className="mx-auto max-w-5xl px-6 py-32 text-center">
          <h2 className="text-3xl font-semibold text-[#0B1C2D]">
            Ready to Gain Clarity on Your Brand?
          </h2>
          <p className="mt-6 text-lg text-[#4B5C73]">
            Let’s assess your brand and define a clear path forward.
          </p>

          <Button className="mt-10 rounded-full px-10">
            Start a project
          </Button>
        </div>
      </section>
    </main>
  )
}

export default page