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
        {/* <h1 className="font-heading text-center mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Frequently asked Questions
        </h1> */}

        <div className="mt-8">
          <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                What does BE Graphic Studio do?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm text-balance">
                <p>
                  At BE Graphic Studio, we help growing businesses build, strengthen, and develop their brands through strategic branding.

Our work goes beyond visual design to include brand analysis, strategy, positioning, communication, visual identity, and brand applications. We bring these elements together to help businesses develop brands that clearly communicate who they are, what they stand for, and how they want to be perceived.
                </p>
                
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
               What types of businesses do you work with?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm text-balance">
                <p className="text-gray-800">
                  We primarily work with growing businesses, startups, and established companies looking to build, improve, or evolve their brands.

Whether you're launching a new business, developing an existing brand, or preparing for a new stage of growth, we work with you to understand your needs and determine the right branding support for your business.
                </p>
                
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                What is your branding process like?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm text-balance">
                <p className="text-gray-800">
                  Our process is structured and collaborative. It typically includes discovery and research, brand strategy development, visual identity design, and final asset delivery. Every decision is intentional—grounded in your goals, audience, and long-term vision, not trends alone.
                </p>
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                How long does a branding project take?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm text-balance">
                <p className="text-gray-800">
                  Timelines vary depending on scope, but most branding projects with BE Graphic Studios take between 4-8 weeks. We establish clear milestones upfront so you always know what to expect and when.
                </p>
               
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="hover:text-blue-accent text-lg text-gray-700 font-semibold hover:cursor-pointer">
                How do I get started with BE?
              </AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-sm text-balance">
                <p className="text-gray-800">
                  Getting started is simple. Book a consultation through our website or reach out to us directly through any of our social media platforms.

We'll have a conversation about your business, understand what you're looking to achieve, and discuss the branding support you may need.

From there, we'll recommend an appropriate scope of work and provide a proposal outlining the next steps.
                </p>
               
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
}
