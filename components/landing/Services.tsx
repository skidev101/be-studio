"use client"

import Link from "next/link"
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
    title: "Full Brand Build",
    description:
      "A comprehensive branding engagement for businesses looking to establish a strong brand foundation or build a more complete brand system.",
    items: [
      "Brand Analysis & Strategic Direction",
      "Positioning, Communication & Visual Identity",
      "Brand Applications, Systems & Guidelines",
    ],
    featured: true,
    slug: "full-brand-build",
  },
  {
    title: "Brand Analysis",
    description:
      "Understand where your brand currently stands, how it is perceived, and where there are opportunities to improve.",
    items: [
      "Brand Audit & Market Review",
      "Competitor & Audience Analysis",
      "Brand Strengths, Gaps & Recommendations",
    ],
    slug: "brand-analysis",
  },
  {
    title: "Brand Strategy",
    description:
      "Establish a clear direction for your brand, defining what it stands for, who it serves, and how it should communicate its value.",
    items: [
      "Brand Purpose, Vision, Mission & Values",
      "Audience, Value Proposition & Positioning",
      "Messaging Framework & Brand Voice",
    ],
    slug: "brand-strategy",
  },
  {
    title: "Brand Identity System",
    description:
      "Translate your brand's strategy and positioning into a distinctive visual identity that communicates its character and creates consistency.",
    items: [
      "Logo System (Primary, Secondary & Icon)",
      "Colour Palette & Typography System",
      "Graphic Language, Brand Assets & Guidelines",
    ],
    slug: "brand-identity-system",
  },
  {
    title: "Brand Repositioning / Rebrand",
    description:
      "Help established businesses evolve their brands to reflect changes in their direction, offerings, audience, or market position.",
    items: [
      "Current Brand & Positioning Review",
      "Strategic Repositioning & Messaging Refinement",
      "Visual Identity Evolution & Rollout",
    ],
    slug: "brand-repositioning",
  },
  {
    title: "Brand Growth Assets",
    description:
      "Develop practical brand applications and creative systems that help your business communicate and maintain consistency across marketing touchpoints.",
    items: [
      "Social Media Design Systems",
      "Marketing & Campaign Templates",
      "Pitch Decks & Presentation Templates",
    ],
    slug: "brand-growth-assets",
  },
];


export function Services() {
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
              Branding services built around what your business needs.
            </h2>

            <p className="mt-6 text-base lg:text-lg leading-relaxed text-slate-600 max-w-2xl mx-auto">
              From understanding your business to developing its identity and creating systems for consistency, we bring the essential elements of branding together to help you build a stronger brand.
            </p>
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="mt-16 md:mt-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {services.map((service, i) => (
            <motion.div
              key={service.slug}
              custom={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.1 }}
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
                  asChild
                  className={cn(
                    "group/btn inline-flex items-center gap-2 px-4! text-sm font-medium",
                    service.featured ? "text-blue-accent" : "text-slate-700",
                    "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-full bg-gray-100 hover:bg-purple-accent hover:text-white"
                  )}
                >
                  <Link href={`/services/${service.slug}`}>
                    Explore service
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
