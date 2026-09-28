"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { portfolioProjects } from "@/lib/portfolio-config"

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = useMemo(
    () => ["All", ...new Set(portfolioProjects.map((p) => p.category))],
    []
  )

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory)

  // No published work yet. Say so plainly rather than filling the space.
  if (portfolioProjects.length === 0) {
    return (
      <section className="relative overflow-hidden bg-white py-20 md:py-32">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl text-balance">
            Our first case studies are being published
          </h2>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            We would rather show you real work than fill this page with
            placeholder projects. In the meantime, the most useful thing we can
            do is talk about what your business actually needs.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-ink px-8 py-3 font-semibold text-white transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/#services"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 px-8 py-3 font-semibold text-slate-700 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring sm:w-auto"
            >
              See our engagements
            </Link>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Category filter — wraps rather than hiding a scrollbar, so every
            filter stays visible and reachable. */}
        <div className="relative mb-12 md:mb-20">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => {
              const isActive = activeCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  aria-pressed={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={cn(
                    "whitespace-nowrap rounded-full px-6 py-3 text-sm font-medium transition-colors hover:cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
                    isActive
                      ? "bg-brand-ink text-white shadow-lg shadow-brand/20"
                      : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  )}
                >
                  {category}
                </button>
              )
            })}
          </div>
        </div>

        {/* Projects grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Link
                  href={`/portfolio/${project.slug}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-slate-100 bg-white shadow-sm transition-all duration-500 hover:border-blue-100 hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-brand-ink shadow-sm backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-7 md:p-8">
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-brand-ink md:text-2xl">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-6 right-8 translate-x-4 opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-white shadow-lg">
                      <ArrowRight size={20} aria-hidden="true" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-600">
              No published work in this category yet.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
