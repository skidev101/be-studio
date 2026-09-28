import { portfolioProjects } from "@/lib/portfolio-config"
import { Pill } from "@/components/Pill"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ArrowLeft, Calendar, User, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) return {}

  return {
    title: project.title,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      url: `/portfolio/${project.slug}`,
      images: [{ url: project.image }],
    },
  }
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params
  const project = portfolioProjects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation Header */}
      <div className="sticky top-16 z-40 hidden w-full border-b border-slate-100 bg-white/80 backdrop-blur-md sm:top-20 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-6 lg:px-8">
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 rounded-sm text-sm font-medium text-slate-600 transition-colors hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
          >
            <ArrowLeft
              size={16}
              className="transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            />
            Back to portfolio
          </Link>
          <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
            {project.category}
          </span>
        </div>
      </div>

      {/* Hero content */}
      <section className="pb-20 pt-12 md:pb-32 md:pt-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
            {/* Left: project info */}
            <div>
              <Pill text={project.category} />
              <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-slate-900 text-balance md:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-8 text-lg leading-relaxed text-slate-600 md:text-xl">
                {project.longDescription || project.description}
              </p>

              {/* Metadata */}
              <dl className="mt-12 grid grid-cols-2 gap-8 border-y border-slate-100 py-10">
                <div>
                  <dt className="mb-2 flex items-center gap-2 text-slate-600">
                    <User size={16} aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Client
                    </span>
                  </dt>
                  <dd className="font-medium text-slate-900">
                    {project.client || "Confidential"}
                  </dd>
                </div>

                {project.year && (
                  <div>
                    <dt className="mb-2 flex items-center gap-2 text-slate-600">
                      <Calendar size={16} aria-hidden="true" />
                      <span className="text-xs font-bold uppercase tracking-widest">
                        Year
                      </span>
                    </dt>
                    <dd className="font-medium text-slate-900">{project.year}</dd>
                  </div>
                )}

                <div className="col-span-2">
                  <dt className="mb-2 flex items-center gap-2 text-slate-600">
                    <Tag size={16} aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      Services
                    </span>
                  </dt>
                  <dd className="flex flex-wrap gap-x-3 gap-y-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-sm text-slate-600">
                        {tag}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>

            {/* Right: challenge & solution */}
            {(project.challenge || project.solution) && (
              <div className="space-y-12 rounded-[2.5rem] bg-slate-50 p-6 sm:p-8 md:p-12">
                {project.challenge && (
                  <div>
                    <h2 className="font-display mb-4 text-xl font-semibold text-slate-900">
                      The challenge
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                      {project.challenge}
                    </p>
                  </div>
                )}
                {project.solution && (
                  <div>
                    <h2 className="font-display mb-4 text-xl font-semibold text-slate-900">
                      What we did
                    </h2>
                    <p className="leading-relaxed text-slate-600">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Visual gallery */}
      <section className="bg-slate-50 py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:gap-12">
            <div className="relative aspect-video overflow-hidden rounded-[2.5rem] shadow-2xl">
              <Image
                src={project.image}
                alt={`${project.title} overview`}
                fill
                sizes="(max-width: 1280px) 100vw, 1280px"
                className="object-cover"
              />
            </div>

            {project.gallery && project.gallery.length > 1 && (
              <div className="grid gap-8 md:grid-cols-2 md:gap-12">
                {project.gallery.slice(1).map((img, idx) => (
                  <div
                    key={img}
                    className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-xl md:aspect-[4/3]"
                  >
                    <Image
                      src={img}
                      alt={`${project.title} detail ${idx + 1}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-ink">
            Next
          </span>
          <h2 className="font-display mt-6 text-3xl font-semibold tracking-tight text-slate-900 text-balance md:text-5xl">
            Let&apos;s work on your next big thing together.
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              asChild
              className="rounded-full bg-brand-ink px-8 py-6 font-semibold text-white hover:bg-brand-deep"
            >
              <Link href="/contact">Start a conversation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full border-slate-200 px-8 py-6 font-semibold hover:bg-slate-50"
            >
              <Link href="/portfolio">Explore more work</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
