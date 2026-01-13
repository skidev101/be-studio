"use client";

import { motion } from "framer-motion";
import { Check, Mic, Plane, Search, Speaker } from "lucide-react";
import Image from "next/image";
import { Pill } from "../Pill";

const steps = [
  {
    title: "Discover",
    icon: <Search className="w-6 h-6" />,
    description:
      "Deep research to understand your brand, market, and audience — uncovering the insights that matter.",
  },
  {
    title: "Define",
    icon: <Mic className="w-6 h-6" />,
    description:
      "Translate insights into a clear strategy, messaging, and positioning that sets your brand apart.",
  },
  {
    title: "Deliver",
    icon: <Plane className="w-6 h-6" />,
    description:
      "Implement designs and campaigns that align with your strategy, ensuring measurable growth and impact.",
  },
];

export const Approach = () => {
  return (
    <section className="relative bg-white" id="approach">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-12 max-w-7xl px-4 lg:px-6 py-6 lg:py-32">
        {/* Soft background circle for depth */}
        {/* <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-[#1F4FD8]/10 blur-3xl pointer-events-none" /> */}
        {/* <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#1F4FD8]/10 blur-3xl pointer-events-none" /> */}

        <div className="flex-1">
          {/* Header */}
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Pill text="Our Approach" />
              
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1C2D] leading-tight"
            >
              Strategy before design. <br /> Clarity before growth.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-base md:text-lg leading-relaxed text-[#4B5C73]"
            >
              We work with ambitious brands to uncover insights, define
              direction, and build foundations that enable long-term growth.
              Every engagement begins with understanding — not assumptions.
            </motion.p>
          </div>

          {/* Steps */}
          <div className="mt-16 flex flex-col gap-4">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 * idx }}
                whileHover={{ scale: 1.001 }}
                className="flex flex-col items-center md:items-start gap-4 p-6 rounded-[2rem] transition-transform bg-white border border-gray-100 shadow-sm hover:shadow-md"
              >
                {/* Icon */}
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1F4FD8]/10 text-[#1F4FD8]">
                  {step.icon}
                </div>

                {/* Step title */}
                <h3 className="text-lg font-semibold text-[#0B1C2D]">
                  {step.title}
                </h3>

                {/* Step description */}
                <p className="text-center md:text-left text-[#4B5C73]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/*Left column Image container */}
        <div className="flex-1 lg:sticky top-24 self-start w-full ">
          <div className="relative aspect-4/3 rounded-[2rem] border border-[#0B1C2D]/10 bg-[#F7F9FC] overflow-hidden shadow-sm">
            <Image
              src="/images/analysis.jpg"
              alt="Brand strategy and analysis visual"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};
