"use client"

import { motion } from "framer-motion";


export const About = () => {
  return (
    <section
      className="relative bg-white py-28 md:py-40 overflow-hidden"
      id="services"
    >
      {/* Very subtle background texture/gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-50/40 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            {/* <div className="w-full flex justify-center">

            <Pill text="Core Services" />
            </div> */}

            <h2 className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              About Us
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              BE_Graphic Studio is a global design agency specializing in
              business branding. We help brands create clean intentional and
              well tailored design assets that position them for growth. <br />
              Our focus is simple- Helping your business grow, stand out and
              communicate with clarity. We design excellence and strategy to
              design real results and make meaningful impact.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
