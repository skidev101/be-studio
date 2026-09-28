"use client";

import { motion } from "framer-motion";
import { Layers, MessageSquare, Palette, Search, Target, Users } from "lucide-react";
import Image from "next/image";
import { Pill } from "../Pill";

// Source: docs/BE GRAPHIC STUDIO — BRAND RESTRUCTURE FOUNDATION.pdf §15.
// The six-stage methodology, including the question each stage answers.

const steps = [
  {
    title: "Understand",
    icon: Search,
    question: "What are we working with?",
    description:
      "The business, market, audience, competitors, goals and current perception — including the strengths and weaknesses nobody has written down.",
  },
  {
    title: "Position",
    icon: Target,
    question: "How should this brand be positioned?",
    description:
      "What the brand should stand for, who it is for, why it matters, and where it should sit in the market.",
  },
  {
    title: "Communicate",
    icon: MessageSquare,
    question: "What should the brand say, and how should it say it?",
    description:
      "Messaging, voice, language and communication principles — the foundation of how the business speaks.",
  },
  {
    title: "Experience",
    icon: Users,
    question: "What should it feel like to interact with this brand?",
    description:
      "How people encounter the brand across the website, social, packaging, sales process and customer service.",
  },
  {
    title: "Express",
    icon: Palette,
    question: "What should this brand look like?",
    description:
      "Identity, typography, colour, photography and layout. Visual identity comes after the thinking, never before it.",
  },
  {
    title: "Systemize",
    icon: Layers,
    question: "How does this brand keep working as the business grows?",
    description:
      "Guidelines, templates, design systems and implementation tools — so the brand holds together without us in the room.",
  },
];

export const Approach = () => {
  return (
    <section className="relative bg-white" id="approach">
      <div className="mx-auto max-w-7xl px-4 py-20 lg:px-6 lg:py-32">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-3xl flex-1">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <Pill text="Our Approach" />
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display mt-6 text-3xl font-semibold tracking-tight text-ink leading-tight text-balance md:text-4xl"
            >
              Strategy before design. <br /> Clarity before growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base leading-relaxed text-ink-muted md:text-lg"
            >
              Branding is the deliberate combination of strategy, positioning,
              communication, experience, visuals and systems that shapes how a
              business is understood and perceived. So we work through six
              stages, in order, every time.
            </motion.p>
          </div>

          <div className="w-full flex-1 lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-4/3 overflow-hidden rounded-[2rem] border border-ink/10 bg-surface-tint shadow-sm">
              <Image
                src="/images/analysis.png"
                alt="Brand strategy and analysis visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.li
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx }}
                className="flex flex-col gap-4 rounded-[2rem] border border-slate-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-brand-ink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span className="font-display text-sm font-bold uppercase tracking-widest text-muted-foreground">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>

                <p className="font-display text-base leading-snug text-brand-ink">
                  {step.question}
                </p>

                <p className="text-ink-muted">{step.description}</p>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};
