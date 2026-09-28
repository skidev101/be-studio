"use client"

import { useRef, useState } from 'react'
import { Button } from '@/components/ui/button'
import { BookCallButton } from '../BookCallButton'
import Link from 'next/link'

// Source: docs/BE Graphic Studio service system.pdf §17 and §20.
// The client-facing entry point is a need, not a service name, so each card is
// titled with the engagement and described in the client's own words.
// §20 fixes what may be shown publicly — the internal price ladder stays out.

const goals = [
  {
    id: 'brand-discovery',
    title: 'Brand Discovery',
    description: 'Something isn’t working with your brand, but you don’t know what.',
    investment: 'From ₦150,000',
    services: ['Brand, visual and communication audit', 'Market and competitor review', 'Recommended next steps'],
    outcome: 'Clarity on what to fix',
    timeline: 'Scoped to your needs',
  },
  {
    id: 'brand-build',
    title: 'Brand Build',
    description: 'You need to build your brand properly — as one connected system, not a pile of assets.',
    investment: 'From ₦500,000',
    services: ['Strategy, positioning and messaging', 'Visual identity and core applications', 'Brand guidelines and systems'],
    outcome: 'A foundation built for growth',
    timeline: 'Scoped to your needs',
    main: true,
  },
  {
    id: 'brand-evolution',
    title: 'Brand Evolution',
    description: 'Your business has changed and your brand hasn’t.',
    investment: 'Custom',
    services: ['Existing brand audit and what-to-keep assessment', 'Strategic and visual refinement', 'Updated guidelines and rollout support'],
    outcome: 'A brand that matches the business',
    timeline: 'Scoped to your needs',
  },
  {
    id: 'brand-implementation',
    title: 'Brand Implementation',
    description: 'You already have a brand but need help applying it.',
    investment: 'Custom',
    services: ['Digital, physical and commercial applications', 'Templates and internal brand tools', 'Rollout and implementation guidance'],
    outcome: 'A brand your market actually sees',
    timeline: 'Scoped to your needs',
  },
  {
    id: 'brand-partnership',
    title: 'Brand Partnership',
    description: 'You need someone to stay with you and help manage the brand.',
    investment: 'Custom',
    services: ['Brand guidance and creative review', 'Consistency checks and design direction', 'Strategic advice as you grow'],
    outcome: 'A brand that stays consistent',
    timeline: 'Ongoing',
  },
]

// §18 — the accessibility model. This is what replaces discount language.
const accessibility = [
  {
    title: 'Scope flexibility',
    desc: 'Not every business needs everything. You get the right level of branding rather than paying for deliverables you will not use.',
  },
  {
    title: 'Phased branding',
    desc: 'Build progressively instead of all at once: strategy and positioning, then communication and identity, then systems and implementation.',
  },
  {
    title: 'Payment structure',
    desc: 'Larger engagements are staged across the project rather than billed in one go.',
  },
]

const PANEL_ID = 'pricing-goal-panel'
const tabId = (id: string) => `pricing-goal-tab-${id}`

const Pricing = () => {
  const [selectedGoal, setSelectedGoal] = useState<string>(goals[0].id)
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])

  const selected = goals.find(g => g.id === selectedGoal) ?? goals[0]

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = goals.length - 1
    let next = -1

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = index === last ? 0 : index + 1
    else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = index === 0 ? last : index - 1
    else if (event.key === 'Home') next = 0
    else if (event.key === 'End') next = last

    if (next === -1) return
    event.preventDefault()
    setSelectedGoal(goals[next].id)
    tabRefs.current[next]?.focus()
  }

  return (
    <section className="bg-slate-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink md:text-5xl text-balance">
            What does your business need?
          </h2>
          <p className="mt-6 text-base text-ink-muted md:text-lg">
            A business comes with a need. We work out what level of branding is
            actually required to solve it, and price that &mdash; not a package.
          </p>
        </div>

        {/* One control, so it carries tab semantics rather than five unrelated
            buttons where colour is the only state. */}
        <div
          role="tablist"
          aria-label="Choose what your business needs"
          className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {goals.map((goal, index) => {
            const isSelected = selectedGoal === goal.id

            return (
              <button
                key={goal.id}
                ref={(node) => { tabRefs.current[index] = node }}
                id={tabId(goal.id)}
                role="tab"
                type="button"
                aria-selected={isSelected}
                aria-controls={PANEL_ID}
                tabIndex={isSelected ? 0 : -1}
                onClick={() => setSelectedGoal(goal.id)}
                onKeyDown={(event) => handleKeyDown(event, index)}
                className={`group relative rounded-[2rem] p-6 text-left transition-all hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring ${
                  isSelected
                    ? 'bg-brand-ink text-white shadow-xl shadow-brand/20 ring-4 ring-brand/30'
                    : 'bg-white border-2 border-slate-200 hover:border-brand-ink/40 hover:bg-slate-50 hover:shadow-lg'
                }`}
              >
                {goal.main && !isSelected && (
                  <span className="absolute -top-3 right-4 rounded-full bg-brand-ink px-3 py-1 text-xs font-semibold text-white shadow-lg">
                    Main engagement
                  </span>
                )}

                <h3 className={`text-lg font-bold ${isSelected ? 'text-white' : 'text-ink'}`}>
                  {goal.title}
                </h3>

                <p className={`mt-2 text-sm ${isSelected ? 'text-white/85' : 'text-ink-muted'}`}>
                  {goal.description}
                </p>

                <p className={`mt-4 font-display text-lg font-bold ${isSelected ? 'text-white' : 'text-brand-ink'}`}>
                  {goal.investment}
                </p>
              </button>
            )
          })}
        </div>

        {/* Selected engagement detail */}
        <div
          id={PANEL_ID}
          role="tabpanel"
          aria-labelledby={tabId(selectedGoal)}
          tabIndex={0}
          className="mt-12 rounded-[2rem] border-2 border-slate-200 bg-white p-6 shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring md:p-12 lg:p-8"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full bg-blue-50 px-4 py-2">
                <span className="text-xs font-semibold text-brand-ink lg:text-sm">
                  {selected.title}
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-muted-foreground">Typical investment</p>
                <p className="mt-2 font-display text-4xl font-bold text-brand-ink">
                  {selected.investment}
                </p>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">What it gives you</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{selected.outcome}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Timeline</p>
                  <p className="mt-1 text-lg font-semibold text-ink">{selected.timeline}</p>
                </div>
              </div>

              <div className="mt-8">
                <p className="mb-3 text-sm font-semibold text-ink">What&apos;s included:</p>
                <ul className="space-y-2">
                  {selected.services.map((service) => (
                    <li key={service} className="flex items-center gap-3">
                      <span className="size-1.5 shrink-0 rounded-full bg-brand-ink" aria-hidden="true" />
                      <span className="text-ink-muted">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/services/${selected.id}`}
                className="mt-8 inline-flex rounded-sm text-sm font-semibold text-brand-ink underline underline-offset-4 transition-colors hover:text-brand-deep focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
              >
                More about {selected.title}
              </Link>
            </div>

            <div className="rounded-[2rem] bg-linear-to-br from-brand-ink to-brand-deep p-6 text-white lg:p-8">
              <h3 className="text-2xl font-bold">Ready to get started?</h3>
              <p className="mt-4 text-white/85">
                Schedule a free 30-minute consultation. We&apos;ll discuss what
                your business actually needs and put together a proposal.
              </p>

              <div className="mt-6 flex flex-col gap-3">
                <BookCallButton
                  text="Book a free consultation"
                  className="w-full bg-white text-brand-ink hover:bg-blue-50 hover:text-brand-deep"
                />

                <Button
                  asChild
                  size="sm"
                  variant="outline"
                  className="w-full rounded-full border-2 border-white/30 bg-white/10 text-xs text-white hover:bg-white/20 hover:text-white lg:text-sm"
                >
                  <Link href="#services">See all engagements</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Accessibility model — §18. Replaces discount and ROI language. */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {accessibility.map((item) => (
            <div key={item.title} className="rounded-[2rem] border-2 border-slate-200 bg-white p-6">
              <h3 className="font-display text-lg font-bold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-muted">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-[2rem] border-2 border-blue-200 bg-blue-50 p-6 text-center">
          <p className="pb-4 text-ink-muted">
            <span className="font-semibold text-ink">Not sure which one fits?</span>{' '}
            Most businesses start with a short conversation. We&apos;ll tell you
            what we think you actually need &mdash; including if it is nothing yet.
          </p>
          <BookCallButton text="Book a free consultation" />
        </div>
      </div>
    </section>
  )
}

export default Pricing
