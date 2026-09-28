import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid"
import { Pill } from "@/components/Pill"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Selected brand work from BE Graphic Studio — strategy, positioning, communication, identity and systems for growing businesses.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-linear-to-b from-blue-50/70 to-white py-24 md:py-32">
        <div className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/2 rounded-full bg-brand/5 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] -translate-x-1/2 translate-y-1/2 rounded-full bg-violet/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex justify-center">
              <Pill text="Our Work" />
            </div>

            <h1 className="font-display mt-8 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 text-balance md:text-5xl lg:text-7xl">
              Brands built to be{" "}
              <span className="italic text-brand-ink">understood</span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
              We build brands for how a business is perceived &mdash; not just
              for how it looks. The work below shows what that means in
              practice.
            </p>
          </div>
        </div>
      </section>

      <PortfolioGrid />

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent" />

        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl text-balance">
            Ready to build something{" "}
            <span className="text-brand">remarkable</span>?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Tell us what your business needs and we&apos;ll tell you honestly
            what we think it takes.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-brand-ink shadow-lg transition-colors hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Start your project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white transition-colors hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
