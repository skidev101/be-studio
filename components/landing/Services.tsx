"use client"

import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Pill } from "../Pill"

type Service = {
  title: string
  description: string
  items: string[]
  featured?: boolean
  slug: string
}

const services: Service[] = [
  {
    title: "Brand Analysis",
    description:
      "Deep audit of your current brand perception, competitive landscape and strategic positioning opportunities.",
    items: [
      "Comprehensive brand & competitor audit",
      "Visual & verbal identity diagnostics",
      "Market perception & positioning map",
    ],
    featured: true,
    slug: "brand-analysis",
  },
  {
    title: "Business Branding Packages",
    description:
      "Complete branding ecosystems built to scale — from startup launch to mature enterprise evolution.",
    items: [
      "Foundation & startup brand systems",
      "Growth-stage rebranding programs",
      "Long-term brand strategy & governance",
    ],
    slug: "business-branding-packages",
  },
  {
    title: "Marketing & Digital Assets",
    description:
      "Consistent, high-performance design systems created for fast-moving digital environments.",
    items: [
      "Social media & advertising template suites",
      "Website UI component library",
      "Email & nurture sequence visuals",
    ],
    slug: "marketing-digital-assets",
  },
  {
    title: "Print & Physical Collateral",
    description:
      "Premium tactile brand expressions that strengthen recognition in the physical world.",
    items: [
      "Business cards, stationery & brand collateral",
      "Pitch decks & investor presentations",
      "Packaging, signage & large format",
    ],
    slug: "print-brand-collateral",
  },
  {
    title: "Custom & On-Demand Design",
    description:
      "Flexible design capacity for campaigns, product launches, seasonal drops and special projects.",
    items: [
      "Project-based custom design engagements",
      "Rapid-response design retainer",
      "Launch & event visual systems",
    ],
    slug: "custom-design-solutions",
  },
]

const cardVariants = {
  initial: { y: 20, opacity: 0 },
  animate: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.08 + 0.2,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
  hover: {
    y: -8,
    scale: 1.015,
    transition: { duration: 0.4, ease: "easeOut" },
  },
}

export function Services() {
  const router = useRouter()

  return (
    <section className="relative bg-white py-32 md:py-40 overflow-hidden" id="services">
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
            <div className="w-full flex justify-center">

            <Pill text="Core Services" />
            </div>

            <h2 className="font-heading mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
              Strategic Design Services
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              We create clarity, alignment and distinctive presence — from deep brand strategy to pixel-perfect execution.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="mt-16 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              initial="initial"
              whileInView="animate"
              whileHover="hover"
              viewport={{ once: true, margin: "-80px" }}
              // variants={cardVariants}
              className={cn(
                "group relative flex flex-col rounded-[2rem] border p-7 md:p-8 transition-all duration-400",
                service.featured
                  ? "border-blue-200 bg-linear-to-b from-blue-50/70 to-white shadow-blue-100/70"
                  : "border-slate-100 bg-white/80 shadow-sm hover:shadow-md hover:border-slate-200",
                "backdrop-blur-sm lg:hover:-translate-y-2 lg:focus-within:-translate-y-2"
              )}
            >
              {service.featured && (
                <div className="absolute -top-3 right-6 rounded-full bg-blue-accent px-4 py-1 text-xs font-bold tracking-wide text-white shadow-md">
                  Flagship Service
                </div>
              )}

              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight">
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
                      <span className="mr-3 mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/70" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => router.push(`/services/${service.slug}`)}
                  className={cn(
                    "group/btn inline-flex items-center gap-2 px-4! text-sm font-medium",
                    service.featured ? "text-blue-accent" : "text-slate-700",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full bg-gray-100 hover:bg-blue-accent hover:text-white"
                  )}
                >
                  Explore service
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}