"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { Pill } from "../Pill";

const faqs = [
  {
    q: "What does BE Graphic Studio specialize in?",
    a: "BE Graphic Studio is a full-service brand agency specializing in brand identity, visual design, and strategic creative direction. We help businesses define who they are, how they look, and how they communicate—building brands that are clear, consistent, and designed to scale.",
  },
  {
    q: "Who do you typically work with?",
    a: "We work with startups, growing businesses, and established brands that value thoughtful design and strategic clarity. Whether you're launching something new or repositioning an existing brand, BE Graphic Studio adapts its process to your stage of growth and industry.",
  },
  {
    q: "What is your branding process like?",
    a: "Our process is structured and collaborative. It typically includes discovery and research, brand strategy development, visual identity design, and final asset delivery. Every decision is intentional—grounded in your goals, audience, and long-term vision, not trends alone.",
  },
  {
    q: "How long does a branding project take?",
    a: "Timelines vary depending on scope, but most branding projects with BE Graphic Studio take between 4-8 weeks. We establish clear milestones upfront so you always know what to expect and when.",
  },
  {
    q: "Why choose BE Graphic Studio over other agencies?",
    a: "We combine strategic thinking with refined visual execution. BE Graphic Studio is intentionally selective, allowing us to give each client focused attention, senior-level design thinking, and brand systems that are built to last.",
  },
];

export default function Faq() {
  return (
    <section className="relative bg-white py-32 md:py-40 overflow-hidden" id="faq">
      <div className="relative mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <Pill text="FAQ" />
          <h2 className="font-display mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 text-balance">
            Frequently asked questions
          </h2>
        </motion.div>

        <div className="mt-10">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i + 1}`}>
                <AccordionTrigger className="text-lg font-semibold text-slate-800 hover:text-brand-ink hover:cursor-pointer">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-relaxed text-slate-600 text-pretty">
                  <p>{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
