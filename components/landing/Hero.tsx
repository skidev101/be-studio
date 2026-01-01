"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-3">

    <div className="relative bg-white overflow-hidden rounded-[4rem]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[#f4f7fd] " />

      <div className="relative mx-auto max-w-7xl px-6 pt-22 pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-12 lg:gap-x-16 items-center">
          
          {/* LEFT: TEXT */}
          <div className="lg:col-span-6 space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[2.75rem] leading-[1.1] md:text-[3.5rem] xl:text-[3.8rem] font-semibold tracking-tight text-[#0B1C2D]"
            >
              We Build Brands With
              <span className="block text-[#1F4FD8] mt-2">
                Purpose, Precision, and Impact.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="max-w-xl text-lg text-[#4B5C73] leading-relaxed"
            >
              Strategic brand analysis and growth planning for businesses
              ready to scale with clarity, confidence, and direction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-4"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-[#1F4FD8] px-7 hover:px-9 py-3.5 text-base font-medium text-white transition-all origin-center hover:bg-[#1a42b8]"
              >
                Start a Strategy Session
              </a>

              <a
                href="#work"
                className="inline-flex items-center justify-center rounded-full px-7 py-3.5 text-base font-medium text-[#0B1C2D] transition-all origin-center hover:bg-[#0B1C2D]/5"
              >
                View Selected Work
              </a>
            </motion.div>
          </div>

          {/* RIGHT: VISUAL */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              // whileHover={{ scale: 1.02 }}
              className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
            >
              {/* Soft glow */}
              <div className="absolute -inset-6 rounded-3xl bg-[#1F4FD8]/5 blur-2xl" />

              {/* Image container */}
              <div className="relative w-full aspect-4/3 rounded-[4rem] border border-[#0B1C2D]/10 bg-[#F7F9FC] overflow-hidden shadow-sm">
                <Image
                  src="/images/tree.jpg"
                  alt="Brand strategy and analysis visual"
                  fill
                  className="object-cover"
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
