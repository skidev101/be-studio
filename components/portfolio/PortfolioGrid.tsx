"use client"

import { useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Search } from "lucide-react"
import { cn } from "@/lib/utils"
import { portfolioProjects, Project } from "@/lib/portfolio-config"
import { Button } from "../ui/button"

import Link from "next/link"

const categories = ["All", ...new Set(portfolioProjects.map(p => p.category))]

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory)

  return (
    <section className="relative bg-white py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        {/* Category Filter */}
        <div className="relative mb-12 md:mb-20">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 no-scrollbar md:flex-wrap md:justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:cursor-pointer",
                  activeCategory === category
                    ? "bg-blue-accent text-white shadow-lg shadow-blue-200"
                    : "bg-slate-50 text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
        >
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
                  className="group relative flex flex-col rounded-[2rem] overflow-hidden border border-slate-100 bg-white shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-500 h-full"
                >
                  {/* Image Container */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Category Badge (Floating) */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[10px] font-bold uppercase tracking-widest text-blue-accent shadow-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 md:p-8">
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-900 tracking-tight group-hover:text-blue-accent transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="mt-3 text-sm leading-relaxed text-slate-600 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="text-[11px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Hover Action */}
                  <div className="absolute bottom-6 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <div className="w-10 h-10 rounded-full bg-blue-accent text-white flex items-center justify-center shadow-lg">
                      <ArrowRight size={20} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-slate-500">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  )
}
