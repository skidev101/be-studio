import { portfolioProjects } from "@/lib/portfolio-config"
import { Pill } from "@/components/Pill"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User, Tag, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export async function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="hidden sm:block justify-left sticky top-16 sm:top-20 z-40 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link 
            href="/portfolio" 
            className="group flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-blue-accent transition-colors"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            Back to Portfolio
          </Link>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <section className="pt-12 pb-20 md:pt-20 md:pb-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            {/* Left: Project Info */}
            <div>
              <Pill text={project.category} />
              <h1 className="font-heading mt-6 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1]">
                {project.title}
              </h1>
              <p className="mt-8 text-lg md:text-xl text-slate-600 leading-relaxed">
                {project.longDescription || project.description}
              </p>

              {/* Metadata Grid */}
              <div className="mt-12 grid grid-cols-2 gap-8 border-y border-slate-100 py-10">
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <User size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Client</span>
                  </div>
                  <p className="text-slate-900 font-medium">{project.client || "Confidential"}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Calendar size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Year</span>
                  </div>
                  <p className="text-slate-900 font-medium">{project.year || "2023"}</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-slate-400 mb-2">
                    <Tag size={16} />
                    <span className="text-xs font-bold uppercase tracking-widest">Services</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-sm text-slate-600">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Challenge & Solution */}
            {(project.challenge || project.solution) && (
              <div className="space-y-12 bg-slate-50 rounded-[2.5rem] p-6 sm:p-8 md:p-12">
                {project.challenge && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">The Challenge</h3>
                    <p className="text-slate-600 leading-relaxed">{project.challenge}</p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 mb-4">Our Strategy</h3>
                    <div className="space-y-4">
                       <p className="text-slate-600 leading-relaxed">{project.solution}</p>
                       <ul className="space-y-3">
                         {project.tags.map(tag => (
                           <li key={tag} className="flex items-start gap-3 text-sm text-slate-600">
                             <CheckCircle2 className="w-5 h-5 text-blue-accent shrink-0" />
                             {tag}
                           </li>
                         ))}
                       </ul>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visual Gallery */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            {/* Main Feature Image */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl">
              <Image 
                src={project.image} 
                alt={`${project.title} overview`} 
                fill 
                className="object-cover"
              />
            </div>
            
            {/* Secondary Gallery */}
            {project.gallery && project.gallery.length > 0 && (
              <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                {project.gallery.slice(1).map((img, idx) => (
                  <div key={idx} className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
                    <Image 
                      src={img} 
                      alt={`${project.title} detail ${idx + 1}`} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Next Project / Footer CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-accent">Next Project</span>
          <h2 className="font-heading mt-6 text-3xl md:text-5xl font-semibold tracking-tight text-slate-900">
            Let's work on your next <br /> big thing together.
          </h2>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
             <Button asChild className="rounded-full px-8 py-6 bg-blue-accent hover:bg-blue-600 text-white font-semibold">
                <Link href="/contact">Start a Conversation</Link>
             </Button>
             <Button variant="outline" asChild className="rounded-full px-8 py-6 border-slate-200 hover:bg-slate-50 font-semibold">
                <Link href="/portfolio">Explore More Work</Link>
             </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
