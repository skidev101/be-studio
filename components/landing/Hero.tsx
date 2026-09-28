"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import BlurText from "../BlurText";
import { BookCallButton } from "../BookCallButton";
import { useScrollToSection } from "@/hooks/scroll-to-section";

// Source: docs/BE GRAPHIC STUDIO — BRAND RESTRUCTURE FOUNDATION.pdf §04 (audience)
// and §05 (core belief); docs/BE Graphic Studio service system.pdf §19 (no
// discount or affordability framing).

const primaryCta =
  "inline-flex items-center justify-center rounded-full bg-brand-ink px-8 py-3 text-base font-medium text-white transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export default function Hero() {
  const scrollToSection = useScrollToSection();

  return (
    <section className="bg-white px-2 md:px-3">
      <div className="relative overflow-hidden rounded-[2rem] bg-white lg:rounded-[4rem]">
        <div className="absolute inset-0 bg-surface-tint" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-6 md:pt-24 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            {/* LEFT: COPY */}
            <div className="space-y-6 lg:col-span-6">
              <h1 className="font-display text-[2.5rem] font-semibold leading-[1.1] tracking-tight text-ink text-balance md:text-[2.8rem] xl:text-[3.2rem]">
                <BlurText
                  as="span"
                  text="We help growing businesses build brands"
                  delay={130}
                  animateBy="words"
                  direction="top"
                />
                <BlurText
                  as="span"
                  text="that are understood, trusted and built to grow"
                  delay={160}
                  animateBy="words"
                  direction="bottom"
                  className="text-brand-ink"
                />
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-xl text-base leading-relaxed text-slate-700"
              >
                Branding is the deliberate combination of strategy,
                positioning, communication, experience, visuals and systems. We
                build brands for how a business is understood &mdash; not just
                for how it looks.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className={primaryCta}
                >
                  View our services
                </button>

                <BookCallButton
                  className="bg-gray-200 px-8 py-3 text-base font-semibold text-slate-600 hover:bg-gray-300 hover:text-slate-900"
                  text="Book a call"
                />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="hidden pt-6 text-sm text-muted-foreground md:block"
              >
                Quality branding, accessible to growing businesses.
              </motion.p>
            </div>

            {/* RIGHT: VISUAL */}
            <div className="flex justify-center lg:col-span-6 lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
              >
                <div className="absolute -inset-6 rounded-3xl bg-brand/10 blur-2xl" />

                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] border border-ink/10 bg-surface-tint shadow-sm md:rounded-[4rem]">
                  <Image
                    src="/images/hero123.png"
                    alt="Brand strategy and positioning visual"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover opacity-90"
                    priority
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
