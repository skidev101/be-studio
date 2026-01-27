"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Pill } from "../Pill";

export default function Faq() {
  return (
    <section className="relative bg-white py-32 md:py-40 overflow-hidden" id="faq">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full flex justify-center"
        >
          <Pill text="FAQ'S" />
        </motion.div>
        <h1 className="font-heading text-center mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Frequently asked Questions
        </h1>

        <div className="mt-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                What does BE Graphic Studios specialize in?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p>
                  BE Graphic Studios is a full-service brand agency specializing in brand identity, visual design, and strategic creative direction. We help businesses define who they are, how they look, and how they communicate—building brands that are clear, consistent, and designed to scale.
                </p>
                
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                Who do you typically work with?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-gray-800">
                  We work with startups, growing businesses, and established brands that value thoughtful design and strategic clarity. Whether you're launching something new or repositioning an existing brand, BE Graphic Studios adapts its process to your stage of growth and industry.
                </p>
                
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                What is your branding process like?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-gray-800">
                  Our process is structured and collaborative. It typically includes discovery and research, brand strategy development, visual identity design, and final asset delivery. Every decision is intentional—grounded in your goals, audience, and long-term vision, not trends alone.
                </p>
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                How long does a branding project take?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-gray-800">
                  Timelines vary depending on scope, but most branding projects with BE Graphic Studios take between 4-8 weeks. We establish clear milestones upfront so you always know what to expect and when.
                </p>
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                Why choose BE Graphic Studios over other agencies?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                <p className="text-gray-800">
                  We combine strategic thinking with refined visual execution. BE Graphic Studios is intentionally selective, allowing us to give each client focused attention, senior-level design thinking, and brand systems that are built to last—not just look good on launch day.
                </p>
               
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
