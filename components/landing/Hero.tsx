"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { openCalendly } from "@/lib/calendly";
import BlurText from "../BlurText";

export default function Hero() {
  return (
    <section className="px-2 md:px-3">
      <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[4rem] bg-white">
        {/* Background */}
        <div className="absolute inset-0 bg-[#F4F7FD]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-20 md:pt-24 pb-6 md:pb-28">
          <div className="grid grid-cols-1 items-center gap-y-12 lg:grid-cols-12 lg:gap-x-16">
            {/* LEFT: COPY */}
            <div className="lg:col-span-6 space-y-6">
              {/* <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-[2.5rem] leading-[1.1] md:text-[2.8rem] xl:text-[3.2rem] font-semibold tracking-tight text-[#0B1C2D]"
              >
                We help growing businesses build clear, confident{" "}
                <span className="block text-blue-accent">Brands that scale.</span>
              </motion.h1> */}
              <div className="text-[2.5rem] leading-[1.1] md:text-[2.8rem] xl:text-[3.2rem] font-semibold tracking-tight text-[#0B1C2D]">
                <BlurText
                  text="We help growing businesses build clear, confident"
                  delay={130}
                  animateBy="words"
                  direction="top"
                  className=""
                />
                <BlurText
                  text="Brands that scale."
                  delay={160}
                  animateBy="words"
                  direction="bottom"
                  className="block text-blue-accent"
                />
              </div>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="max-w-xl text-lg leading-relaxed text-[#4B5C73]"
              >
                Strategic brand analysis, positioning, and design systems that
                align your brand with business goals and long-term growth.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                {/* PRIMARY */}
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center rounded-full bg-[#1F4FD8] px-8 py-3 text-base font-medium text-white transition-all hover:bg-[#1a42b8]"
                >
                  View our services
                </Link>

                {/* SECONDARY */}
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center justify-center rounded-full px-7 py-3 text-base font-medium text-[#0B1C2D] transition-colors hover:bg-[#0B1C2D]/5"
                >
                  Book a strategy session
                </button>
              </motion.div>

              {/* Quiet trust signal */}
              <p className="hidden md:block pt-6 text-sm text-[#8A99AD]">
                Trusted by growing teams across multiple industries
              </p>
            </div>

            {/* RIGHT: VISUAL */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-full"
              >
                {/* Soft glow */}
                <div className="absolute -inset-6 rounded-3xl bg-[#1F4FD8]/5 blur-2xl" />

                {/* Image */}
                <div className="relative aspect-4/3 w-full overflow-hidden rounded-[2rem] md:rounded-[4rem] border border-[#0B1C2D]/10 bg-[#F7F9FC] shadow-sm">
                  <Image
                    src="/images/tree.jpg"
                    alt="Brand strategy and positioning visual"
                    fill
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
