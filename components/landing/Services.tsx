"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Pill } from "../Pill"
import { servicesConfig } from "@/lib/services-config"

// Source: docs/BE Graphic Studio service system.pdf §17 and §20.
// The grid shows the five client-facing engagements. The disciplines beneath
// them (strategy, positioning, communication, experience, identity, systems)
// are what gets scoped inside each one.

const services = Object.values(servicesConfig)

export function Services() {
  return (
    <section className="relative overflow-hidden bg-white py-32 md:py-40" id="services">
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
            <div className="flex w-full justify-center">
              <Pill text="Engagements" />
            </div>

            <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl text-balance">
              Five ways we work with growing businesses
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 lg:text-lg">
              Every engagement draws on the same six disciplines &mdash;
              strategy, positioning, communication, experience, identity and
              systems. What changes is how much of each your business actually
              needs.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="mt-16 grid auto-rows-fr gap-6 sm:grid-cols-2 md:mt-24 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
              className={cn(
                "group relative flex flex-col rounded-[2rem] border p-7 transition-all duration-400 md:p-8",
                service.featured
                  ? "border-blue-200 bg-linear-to-b from-blue-50/70 to-white shadow-blue-100/70"
                  : "border-slate-100 bg-white/80 shadow-sm hover:border-slate-200 hover:shadow-md",
                "lg:hover:-translate-y-2 lg:focus-within:-translate-y-2"
              )}
            >
              {service.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-brand-ink px-4 py-1 text-xs font-bold tracking-wide text-white shadow-md">
                  Main engagement
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl font-semibold tracking-tight text-slate-900 md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-slate-600">
                  {service.description}
                </p>

                <ul className="mt-7 space-y-3">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start text-sm text-slate-600"
                    >
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Link
                  href={`/services/${service.slug}`}
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-slate-100 px-5 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-violet-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                >
                  Explore {service.navLabel ?? service.title}
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
