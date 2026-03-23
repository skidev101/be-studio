import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid"
import { Pill } from "@/components/Pill"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"

export const metadata: Metadata = {
  title: "Portfolio | BE Graphic Studio",
  description: "Explore our portfolio of strategic brand identity, digital design, and marketing assets that drive business growth.",
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen sm:-mt-18">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 bg-linear-to-b from-blue-50/70 to-white overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[500px] h-[500px] bg-blue-accent/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-accent/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center">
              <Pill text="Our Portfolio" />
            </div>
            
            <h1 className="font-heading mt-8 text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
              Crafting <span className="text-blue-accent italic">Exceptional</span> <br className="hidden md:block" /> Brand Experiences
            </h1>
            
            <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              From deep strategy to pixel-perfect execution, explore how we've helped diverse businesses define their identity and scale their impact.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
               <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full shadow-sm">
                  <Star className="w-4 h-4 text-blue-accent fill-blue-accent" />
                  <span className="text-sm font-medium text-slate-700">50+ Brands Transformed</span>
               </div>
               <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white/80 backdrop-blur-sm border border-slate-100 rounded-full shadow-sm">
                  <span className="text-sm font-medium text-slate-700">100% Bespoke Design</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <PortfolioGrid />

      {/* CTA Section */}
      <section className="bg-slate-900 py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-transparent pointer-events-none" />
        
        <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white tracking-tight">
            Ready to build something <span className="text-blue-accent">remarkable</span>?
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's discuss how we can bring your brand vision to life with strategic design that actually converts.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="w-full sm:w-auto px-8 py-4 bg-blue-accent text-white rounded-full font-semibold hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2"
            >
              Start Your Project <ArrowRight size={18} />
            </Link>
            <Link 
              href="/"
              className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
