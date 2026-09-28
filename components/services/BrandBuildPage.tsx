import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Source: docs/BE Graphic Studio service system.pdf §11 (Brand Build).
// Brand Build is one of BE's main engagements and explicitly "not a fixed
// package" — so this page lists what an engagement can combine rather than
// promising a fixed scope, duration or return.

const pillars = [
  {
    step: "Phase 1",
    title: "Strategy and positioning",
    desc: "We establish what the business should stand for, who it is for, why it matters and where it should sit in the market.",
  },
  {
    step: "Phase 2",
    title: "Communication and identity",
    desc: "The strategy becomes a voice and a visual system — messaging, tone, identity, typography, colour and the applications that carry them.",
  },
  {
    step: "Phase 3",
    title: "Systems and implementation",
    desc: "Guidelines, templates and design systems so the brand keeps working, and keeps looking like itself, as the business grows.",
  },
];

const deliverables = [
  "Brand discovery",
  "Brand strategy and positioning",
  "Messaging and brand voice",
  "Visual identity",
  "Brand guidelines",
  "Core brand applications",
  "Brand system and templates",
  "Launch and implementation guidance",
];

const BrandBuildPage = () => {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <section className="relative bg-linear-to-tr from-surface-dark via-brand/20 to-slate-700 pb-50 pt-24 md:pb-80 md:pt-40">
        <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-8 flex max-w-max items-center gap-2 rounded-full border border-slate-500 bg-white/10 px-3 py-1 backdrop-blur-md sm:px-4 sm:py-2">
              <Star className="size-3 fill-brand text-brand" aria-hidden="true" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand">
                Main engagement
              </span>
            </div>

            <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-white text-balance md:text-6xl">
              Build the brand your business{" "}
              <span className="italic text-brand">actually needs</span>
            </h1>

            <p className="mt-10 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-xl">
              Brand Build is not a fixed package. It combines strategy,
              positioning, communication, experience, identity and systems —
              scoped to the project in front of us rather than sold as a
              template.
            </p>

            <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row">
              <Button
                asChild
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-white px-8 py-2 text-sm font-bold text-ink shadow-sm transition-colors hover:bg-blue-50 sm:w-auto sm:px-10 sm:py-4"
              >
                <Link href="/contact">
                  Start a Brand Build
                  <ArrowRight
                    className="transition-transform group-hover:translate-x-2"
                    aria-hidden="true"
                  />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What a Brand Build combines */}
      <section className="relative z-30 -mt-18 rounded-t-[4rem] bg-white py-24 shadow-[0_-30px_60px_rgba(0,0,0,0.15)] md:-mt-26 md:rounded-t-[8rem] md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="mb-20 mt-6 max-w-2xl">
            <h2 className="font-display text-[32px] font-semibold leading-tight tracking-tight text-slate-900 text-balance md:text-5xl">
              One engagement.{" "}
              <span className="text-brand-ink">Zero fragmentation.</span>
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-xl">
              Stop coordinating a strategist, a designer and a developer who
              never speak to each other. The work below is delivered as one
              connected system, so the strategy and the execution cannot drift
              apart.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="group rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 transition-all duration-500 hover:border-blue-200 hover:bg-white hover:shadow-2xl sm:p-8"
              >
                <span className="mb-8 inline-flex items-center rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-widest text-brand-ink shadow-sm">
                  {pillar.step}
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What you actually receive */}
      <section className="bg-white">
        <div className="bg-slate-100 pb-12 md:py-40 md:[clip-path:polygon(0_0,100%_20%,100%_100%,0%_100%)]">
          <div className="mx-auto max-w-7xl px-5 pt-30 sm:px-6 lg:px-8">
            <div className="grid items-center gap-16 md:gap-24 lg:grid-cols-2">
              <div className="group relative order-2 lg:order-1">
                <div className="absolute -inset-4 rounded-[3rem] bg-brand/10 blur-2xl transition-all duration-700 group-hover:bg-brand/20" />
                <div className="relative aspect-square overflow-hidden rounded-[2.5rem] bg-white p-3 shadow-2xl md:aspect-[4/3]">
                  <Image
                    src="/images/blue-abstract.png"
                    alt=""
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="rounded-[1.8rem] object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-display mb-8 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl text-balance">
                  What an engagement can{" "}
                  <span className="italic text-brand-ink">include</span>
                </h2>
                <p className="mb-12 text-base leading-relaxed text-slate-600 sm:text-xl">
                  Every Brand Build is scoped to the business. These are the
                  deliverables an engagement can draw on — what you actually get
                  depends on what you actually need.
                </p>

                <ul className="grid gap-6 sm:grid-cols-2 md:gap-8">
                  {deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100">
                        <CheckCircle2
                          size={12}
                          className="text-brand-ink"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm font-medium leading-tight text-slate-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-slate-900 py-24 md:py-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="font-display mb-8 text-4xl font-bold tracking-tight text-white md:text-6xl text-balance">
            Ready to build it{" "}
            <span className="italic text-brand">properly</span>?
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl">
            Tell us what your business needs and we will scope the engagement
            around it. If a smaller piece of work solves the problem, we will
            tell you that instead.
          </p>

          <div className="flex flex-col items-center gap-10">
            <dl className="flex flex-col items-center justify-start gap-12 md:flex-row md:gap-24">
              <div className="text-center">
                <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                  Scope
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-white">
                  Built around you
                </dd>
              </div>
              <div className="h-px w-20 bg-white/10 md:h-12 md:w-px" />
              <div className="text-center">
                <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                  Investment
                </dt>
                <dd className="text-4xl font-black tracking-tighter text-white md:text-5xl">
                  From ₦500,000
                </dd>
              </div>
              <div className="h-px w-20 bg-white/10 md:h-12 md:w-px" />
              <div className="text-center">
                <dt className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-brand">
                  Covers
                </dt>
                <dd className="text-3xl font-bold tracking-tight text-white">
                  Strategy to systems
                </dd>
              </div>
            </dl>

            <Button
              asChild
              className="group relative mt-8 inline-flex items-center justify-center rounded-2xl bg-white px-4 py-2 text-base font-black text-slate-900 shadow-2xl transition-colors hover:bg-brand hover:text-ink md:px-10 md:py-4 md:text-lg"
            >
              <Link href="/contact">
                Discuss your Brand Build
                <ArrowRight
                  className="ml-3 transition-transform group-hover:translate-x-2"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandBuildPage;
