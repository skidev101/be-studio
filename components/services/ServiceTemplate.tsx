"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import Link from "next/link";
import { ServiceConfig } from "@/lib/services-config";
import { BookCallButton } from "../BookCallButton";
import { motion } from "framer-motion";

interface ServiceTemplateProps {
  config: ServiceConfig;
}

// One brand treatment for every engagement. §01 of the service system is
// explicit that BE does not sell Basic → Standard → Premium, so there are no
// tier variants here.
const heroGradient = "from-surface-dark via-cyan-900 to-surface-dark";

const ServiceTemplate = ({ config }: ServiceTemplateProps) => {
  const { hero, templateContent } = config;

  if (!templateContent) {
    return (
      <main className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-display text-3xl font-bold text-ink">
          {config.title}
        </h1>
        <p className="mt-4 text-ink-muted">
          This page is still being written. Talk to us and we will walk you
          through it.
        </p>
        <BookCallButton text="Book a call" className="mt-8" />
      </main>
    );
  }

  const { problem, process, deliverables, investment, cta } = templateContent;

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className={`relative overflow-hidden bg-linear-to-br ${heroGradient}`}>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40" />

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <Zap className="h-4 w-4" aria-hidden="true" />
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display mt-6 max-w-4xl text-4xl font-bold leading-tight tracking-tight text-white text-balance md:text-6xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-100 md:text-lg"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg" className="group rounded-full bg-white text-base font-semibold text-brand-ink hover:bg-blue-50">
              <Link href="/contact">
                {hero.ctaPrimary}
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 md:text-5xl text-balance">
              {problem.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              {problem.description}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problem.points.map((point) => (
              <div
                key={point.lead}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-brand-ink/30 md:p-8"
              >
                <div className="font-display text-2xl font-bold text-brand-ink">
                  {point.lead}
                </div>
                <p className="mt-3 text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-slate-900 md:text-5xl text-balance">
              {process.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {process.steps.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-4 shadow-lg shadow-slate-200/50 transition-shadow duration-300 hover:shadow-2xl md:p-8"
              >
                <div className="absolute -top-4 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-lg font-bold text-white shadow-lg md:left-8">
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  {step.desc}
                </p>
                {step.timeline && (
                  <div className="mt-4 text-sm font-semibold text-brand-ink">
                    {step.timeline}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900 md:text-5xl text-balance">
            {deliverables.title}
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {deliverables.items.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition-colors hover:border-brand-ink/30 md:items-start md:gap-4 md:p-6"
              >
                <CheckCircle2
                  className="mt-1 size-4 shrink-0 text-brand-ink md:size-6"
                  aria-hidden="true"
                />
                <span className="text-sm font-medium text-slate-700 md:text-base">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INVESTMENT */}
      <section className="bg-slate-50 py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-display text-3xl font-bold text-slate-900 md:text-5xl">
            Investment
          </h2>
          <p className="font-display mt-8 text-4xl font-bold text-brand-ink md:text-5xl">
            {investment.startingAt}
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
            {investment.note}
          </p>
          <BookCallButton
            text="Book a free consultation"
            className="mt-10 px-8 py-3 text-base"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-14 md:px-16">
        <div
          className={`rounded-[2rem] bg-linear-to-br py-20 md:rounded-[7rem] md:py-28 ${heroGradient}`}
        >
          <div className="mx-auto max-w-4xl px-6 text-center">
            <h2 className="font-display text-4xl font-bold text-white md:text-5xl text-balance">
              {cta.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
              {cta.description}
            </p>

            <div className="mt-10 flex justify-center">
              <BookCallButton
                text="Book a free consultation"
                className="group gap-2 px-8 py-3 text-base font-semibold"
              >
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-3" />
              </BookCallButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceTemplate;
