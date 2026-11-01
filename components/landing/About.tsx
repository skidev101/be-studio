"use client";

import { motion } from "framer-motion";

          export const About = () => {
  return (
    <section
      className="relative bg-white py-26 md:py-40 overflow-hidden"
      id="about"
    >
      {/* Very subtle background texture/gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="w-full flex justify-center">

            <Pill text="Core Services" />
            </div> */}

            <h2 className="font-heading mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Branding goes beyond how your business looks.
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600 max-w-3xl mx-auto">
              At BE Graphic Studio, we believe building a strong brand takes more than good design. It requires a clear understanding of the business, a defined position, purposeful communication, meaningful experiences, and a visual identity that brings everything together.

We work with growing businesses to bring these elements together, making quality branding more accessible and helping them build brands with clarity, intention, and room to grow.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
