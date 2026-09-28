"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Eye,
  MessageSquare,
  Search,
  Shield,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BookCallButton } from "../BookCallButton";

// Source: docs/BE Graphic Studio service system.pdf §10 (Brand Discovery).
// Brand Discovery is one of BE's distinct entry points. There are deliberately
// no statistics, ROI claims or guarantees on this page — the service system
// doc establishes no metrics and §19 rules out discount and affordability language.

const auditAreas = [
  {
    icon: Eye,
    title: "Visual audit",
    desc: "How your identity actually performs across the touchpoints your market sees, and where it stops looking like one business.",
  },
  {
    icon: MessageSquare,
    title: "Communication audit",
    desc: "What your brand is saying, whether it is consistent, and whether it matches what you actually do well.",
  },
  {
    icon: Search,
    title: "Market and competitor review",
    desc: "Where you sit relative to the alternatives your customers are comparing you against.",
  },
];

const processSteps = [
  {
    title: "Discovery session",
    desc: "We start with the business, not the logo — goals, market, audience, competitors and the perception you currently have.",
  },
  {
    title: "Audit",
    desc: "Brand, visual and communication audits are run against the business goals to establish what is working and what is costing you.",
  },
  {
    title: "Findings and next steps",
    desc: "You get the strengths, the weaknesses, the opportunity areas, and a clear recommendation on what to do next — including if that is nothing yet.",
  },
];

const deliverables = [
  "Discovery session",
  "Brand audit",
  "Visual audit",
  "Communication audit",
  "Market and competitor review",
  "Brand strengths and weaknesses",
  "Opportunity areas",
  "Recommended next steps",
];

const idealClients = [
  {
    icon: Search,
    title: "Businesses that sense a problem",
    desc: "Something about the brand isn't working, but nobody can agree on exactly what it is.",
  },
  {
    icon: Shield,
    title: "Businesses about to invest",
    desc: "You are considering a larger branding engagement and want evidence before committing budget.",
  },
  {
    icon: CheckCircle2,
    title: "Businesses preparing to scale",
    desc: "You need to know whether the brand can carry the next stage before you build on top of it.",
  },
];

const BrandDiscoveryPage = () => {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-surface-dark via-cyan-900 to-surface-dark">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Brand Discovery
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-display mt-6 text-5xl font-bold leading-tight tracking-tight text-white text-balance md:text-6xl lg:text-7xl"
          >
            Something isn&apos;t working.
            <br />
            <span className="text-brand">Let&apos;s find out what.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg"
          >
            A structured audit of how your brand is understood today, where it
            is losing ground, and what to do about it. This is where most BE
            engagements start.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-12"
          >
            <Button
              asChild
              size="lg"
              className="group rounded-full bg-white px-6 text-base font-semibold text-brand-ink hover:bg-blue-50 md:px-8"
            >
              <Link href="/contact">
                Book a discovery call
                <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* WHAT THE AUDIT COVERS */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl text-balance">
              What the audit actually examines
            </h2>
            <p className="mt-8 text-base leading-relaxed text-slate-600 md:text-lg">
              Branding is the combination of strategy, positioning,
              communication, experience, visuals and systems that shapes how a
              business is understood. So an audit that only looks at the logo
              will only ever find logo problems.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {auditAreas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-8"
                >
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-brand-ink shadow-sm">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-4xl font-bold text-slate-900 md:text-5xl">
              How Discovery runs
            </h2>
            <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
              Short, evidence-led, and useful even if you decide not to go
              further with us.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {processSteps.map((step, idx) => (
              <div
                key={step.title}
                className="relative rounded-3xl bg-white p-6 shadow-lg shadow-slate-200/50 transition-shadow duration-300 hover:shadow-xl md:p-8"
              >
                <div className="absolute -top-4 left-6 inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-ink text-lg font-bold text-white shadow-lg md:left-8">
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-display text-center text-3xl font-bold text-slate-900 md:text-5xl text-balance">
            What you receive
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 transition-colors hover:border-brand-ink/30 md:gap-4"
              >
                <CheckCircle2
                  className="mt-1 h-4 w-4 shrink-0 text-brand-ink md:h-6 md:w-6"
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

      {/* WHO IT'S FOR */}
      <section className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-display text-center text-3xl font-bold md:text-5xl text-balance">
            Who Discovery is for
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {idealClients.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/50 transition-shadow duration-300 hover:shadow-xl md:p-8"
                >
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-brand-ink">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {client.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">
                    {client.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-4 pb-8 md:px-6">
        <div className="relative overflow-hidden rounded-[2rem] md:rounded-[8rem]">
          <Image
            src="/images/blue-abstract.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-surface-dark/70" />

          <div className="relative py-20 backdrop-blur-xl md:py-32">
            <div className="mx-auto max-w-4xl px-6 text-center">
              <h2 className="font-display text-3xl font-bold text-white md:text-5xl text-balance">
                Find out what is actually wrong before you spend on fixing it
              </h2>
              <p className="mt-6 text-base leading-relaxed text-slate-200 md:text-lg">
                Book a short call and we will tell you honestly whether
                Discovery is the right starting point, or whether your brand
                needs something else entirely.
              </p>

              <div className="mt-8 flex justify-center">
                <BookCallButton
                  text="Book a discovery call"
                  className="group gap-2 px-8 py-3 text-base font-semibold md:text-lg"
                >
                  <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-3" />
                </BookCallButton>
              </div>

              <p className="mt-8 text-sm text-slate-300">
                Discovery engagements start from ₦150,000
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BrandDiscoveryPage;
