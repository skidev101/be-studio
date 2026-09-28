"use client";

import { motion } from "framer-motion";

// Source: docs/BE GRAPHIC STUDIO — BRAND RESTRUCTURE FOUNDATION.pdf §09 (Purpose)
// and §05 (Core belief); docs/BE Graphic Studio service system.pdf §19 (what not
// to do — no discount or affordability framing).

export const About = () => {
  return (
    <section
      className="relative overflow-hidden bg-white py-26 md:py-40"
      id="about"
    >
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              About Us
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600 lg:text-lg">
              BE Graphic Studio exists to give growing businesses access to
              quality branding that helps them build successful, competitive
              brands &mdash; in Nigeria and around the world.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600 lg:text-lg">
              We believe branding is more than what we say it is. It is the
              deliberate combination of strategy, positioning, communication,
              experience, visuals and systems that shapes how a business is
              understood and perceived. A logo is one expression of a brand. It
              is not the brand itself.
            </p>

            <p className="mt-5 text-base leading-relaxed text-slate-600 lg:text-lg">
              Accessibility is one of our core values, but accessibility does
              not mean cheap. It means making thoughtful, strategic,
              high-quality branding genuinely attainable for growing businesses
              &mdash; through scope and structure, not through discounting the
              work.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
