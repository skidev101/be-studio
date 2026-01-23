"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRight, TrendingUp, Target, Zap } from 'lucide-react'
import Link from 'next/link'
import { BookCallButton } from '../BookCallButton'

const Pricing = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>('establish')

  const goals = [
    {
      id: 'establish',
      title: 'Establish Brand Presence',
      icon: Zap,
      description: 'You\'re launching or need basic brand materials',
      investment: '$1,200 - $5,000',
      services: ['Print collateral', 'Digital templates', 'Basic guidelines'],
      roi: '3-5x ROI in customer trust',
      timeline: '2-3 weeks',
    },
    {
      id: 'grow',
      title: 'Scale Your Business',
      icon: TrendingUp,
      description: 'You\'re growing and need a complete brand system',
      investment: '$5,000 - $15,000',
      services: ['Complete branding', 'Marketing systems', 'Strategic positioning'],
      roi: '5-10x ROI in market differentiation',
      timeline: '4-6 weeks',
      recommended: true,
    },
    {
      id: 'transform',
      title: 'Transform Market Position',
      icon: Target,
      description: 'You need strategic intelligence and comprehensive branding',
      investment: '$15,000+',
      services: ['Brand analysis', 'Multi-channel systems', 'Ongoing partnership'],
      roi: '10-20x ROI in competitive advantage',
      timeline: '4-12 weeks',
    },
  ]

  const selected = goals.find(g => g.id === selectedGoal) || goals[0]
  const Icon = selected.icon

  return (
    <section className="py-20 md:py-32 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#0B1C2D]">
            What's Your Goal?
          </h2>
          <p className="mt-6 text-base md:text-lg text-[#4B5C73]">
            We'll recommend the right investment based on where you are and where you want to go.
          </p>
        </div>

        {/* Goal Selector */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {goals.map((goal) => {
            const GoalIcon = goal.icon
            return (
              <button
                key={goal.id}
                onClick={() => setSelectedGoal(goal.id)}
                className={`group relative rounded-[2rem] p-6 text-left transition-all hover:cursor-pointer ${
                  selectedGoal === goal.id
                    ? 'bg-blue-accent text-white shadow-xl shadow-blue-200 ring-4 ring-blue-200'
                    : 'bg-white hover:bg-white/40 border-2 border-slate-200 hover:border-blue-accent hover:shadow-lg transition-all'
                }`}
              >
                {goal.recommended && selectedGoal !== goal.id && (
                  <div className="absolute -top-3 right-4 rounded-full bg-blue-accent px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Recommended
                  </div>
                )}
                
                <GoalIcon className={`h-8 w-8 ${
                  selectedGoal === goal.id ? 'text-white' : 'text-blue-accent'
                }`} />
                
                <h3 className={`mt-4 text-lg font-bold ${
                  selectedGoal === goal.id ? 'text-white' : 'text-[#0B1C2D]'
                }`}>
                  {goal.title}
                </h3>
                
                <p className={`mt-2 text-sm ${
                  selectedGoal === goal.id ? 'text-blue-100' : 'text-[#4B5C73]'
                }`}>
                  {goal.description}
                </p>
              </button>
            )
          })}
        </div>

        {/* Selected Goal Details */}
        <div className="mt-12 rounded-[2rem] bg-white p-6 lg:p-8 md:p-12 shadow-md border-2 border-slate-200">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left: Investment Details */}
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2">
                <Icon className="h-4 w-4 text-blue-accent/80" />
                <span className="text-xs lg:text-sm font-semibold text-blue-accent/80">{selected.title}</span>
              </div>
              
              <div className="mt-6">
                <p className="text-sm text-[#8A99AD]">Typical Investment</p>
                <p className="font-heading mt-2 text-4xl font-bold text-blue-accent">{selected.investment}</p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-[#8A99AD]">Expected ROI</p>
                  <p className="mt-1 text-lg font-semibold text-[#0B1C2D]">{selected.roi}</p>
                </div>
                <div>
                  <p className="text-sm text-[#8A99AD]">Timeline</p>
                  <p className="mt-1 text-lg font-semibold text-[#0B1C2D]">{selected.timeline}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-sm font-semibold text-[#0B1C2D] mb-3">What's included:</p>
                <ul className="space-y-2">
                  {selected.services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-accent" />
                      <span className="text-[#4B5C73]">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="rounded-[2rem] bg-linear-to-br from-blue-accent to-cyan-600 p-6 lg:p-8 text-white">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>
              <p className="mt-4 text-blue-100">
                Schedule a free 30-minute consultation. We'll discuss your specific needs and create a custom proposal.
              </p>
              
              <div className="flex flex-col mt-6 space-y-2">
                {/* <Link href="#contact">
                  <Button 
                    size="sm"
                    className="text-xs lg:text-sm w-full rounded-full bg-white font-semibold text-blue-700 hover:bg-blue-50"
                  >
                    Book free consultation
                    <ArrowRight className="hidden md:block ml-2 h-5 w-5 font-semibold" />
                  </Button>
                </Link> */}
                <BookCallButton className='text-center bg-blue-50'/>
                
                <Link href="#services">
                  <Button 
                    size="sm"
                    variant="outline"
                    className="text-xs lg:text-sm w-full rounded-full border-2 border-white/30 bg-white/10 text-white hover:text-white/90 hover:bg-white/30"
                  >
                    View all services
                  </Button>
                </Link>
              </div>

              <p className="mt-6 text-xs text-blue-200 text-center">
                100% satisfaction guarantee • Flexible payment plans available
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { stat: '87%', label: 'Client satisfaction rate' },
            { stat: '3-5x', label: 'Average ROI in 12 months' },
            { stat: '50+', label: 'Brands transformed' },
          ].map((item) => (
            <div key={item.label} className="rounded-[2rem] bg-white p-6 text-center border-2 border-slate-200">
              <div className="font-heading text-3xl lg:text-4xl font-bold text-blue-accent">{item.stat}</div>
              <p className="mt-2 text-sm text-[#4B5C73]">{item.label}</p>
            </div>
          ))}
        </div>

          {/* Uncertain */}
        <div className="mt-12 rounded-[2rem] bg-blue-50 border-2 border-blue-200 p-6 text-center">
          <p className="text-[#4B5C73] pb-4">
            <span className="font-semibold text-[#0B1C2D]">Not sure which tier fits?</span> Schedule a free 30-minute consultation and we'll help you find the right starting point.
          </p>
          <BookCallButton className='text-center'/>
        </div>
      </div>
    </section>
  )
}

export default Pricing