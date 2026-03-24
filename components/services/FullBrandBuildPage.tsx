import { Pill } from "@/components/Pill";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Layers,
  Globe,
  Star,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function FullBrandBuildPage() {
  const corePillars = [
    {
      icon: Target,
      title: "Strategic Foundation",
      desc: "Deep-dive brand analysis and positioning strategy that defines your unique competitive advantage.",
    },
    {
      icon: Layers,
      title: "Visual Identity System",
      desc: "Comprehensive design system including logos, typography, color palettes, and brand guidelines.",
    },
    {
      icon: Globe,
      title: "Market Rollout",
      desc: "Complete marketing asset suite, social media systems, and launch collateral for a global presence.",
    },
  ];

  const exclusiveBenefits = [
    "Priority support & dedicated brand manager",
    "6 months of strategic brand governance",
    "Executive-level brand audit & roadmap",
    "Complete digital & print asset library",
    "Custom motion design & social systems",
    "Founder-level strategy workshops",
  ];

  return (
    <main className="min-h-screen text-slate-900 bg-black">
      <section className="relative pt-24 pb-50 md:pt-40 md:pb-80 bg-linear-to-tr from-slate-900 via-blue-accent/20 to-slate-700">
        {/* Subtle decorative glows */}
        {/* <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-blue-accent/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-white via-white/95 to-transparent z-10" /> */}

        <div className="relative z-20 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-accent/10 border !border-gray-800 mb-8">
              <Star className="w-3.5 h-3.5 text-blue-accent fill-blue-accent" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-accent">
                Flagship Experience
              </span>
            </div> */}
            <div className="flex items-center gap-2 rounded-full bg-slate-50/20 border border-slate-500 backdrop-blur-md max-w-max px-3 py-1 sm:px-4 sm:py-2 mb-8 ">
              <Star className="size-3 text-blue-accent fill-blue-accent" />
              <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-blue-accent">
                Flagship Experience
              </span>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white">
              The <span className="text-blue-accent italic">Definitive</span>{" "}
              <br /> Brand Foundation
            </h1>

            <p className="mt-10 text-md sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
              Our most prestigious partnership. A strategic 12-week
              transformation that takes your brand from its current state to
              market-leading authority.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/contact"
                className="w-full sm:w-auto px-8 py-2 sm:px-10 sm:py-4 bg-blue-accent text-white rounded-full font-bold text-sm hover:bg-white hover:text-blue-accent transition-all shadow-sm shadow-blue-500/25 flex items-center justify-center gap-3 group"
              >
                Start Your Project
                <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
              {/* <div className="flex items-center gap-3 text-slate-500 font-medium">
                <Sparkles className="w-5 h-5 text-blue-accent" />
                Limited to 2 clients per quarter
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Pillars Section - CURVED TOP */}
      <section className="relative py-24 -mt-18 md:-mt-26 md:py-32 bg-white rounded-t-[4rem] md:rounded-t-[8rem] z-30 shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">
        <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
          <div className="max-w-2xl mt-6 mb-20">
            <h2 className="font-heading text-[32px] md:text-5xl font-semibold leading-tight tracking-tight text-slate-900">
              One Partnership. <br />{" "}
              <span className="text-blue-accent">Zero Fragmentation.</span>
            </h2>
            <p className="mt-6 text-md sm:text-xl text-slate-600 leading-relaxed">
              Stop juggling multiple agencies. We handle the entire brand
              ecosystem under one roof, ensuring perfect alignment between
              strategy and aesthetics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corePillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="group p-6 sm:p-8 rounded-[2.5rem] bg-slate-100 sm:bg-slate-50 border border-slate-100 hover:border-blue-200 hover:bg-white hover:shadow-2xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-blue-accent mb-8 group-hover:scale-110 transition-transform">
                    <Icon size={28} />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-md sm:text-xl leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Support Section */}
      <section className=" w-full h-full bg-white">
        <div className="bg-slate-100 pb-12 md:py-40 md:[clip-path:polygon(0_0,100%_20%,100%_100%,0%_100%)]">
          <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 pt-30">
            <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
              <div className="relative group order-2 lg:order-1">
                <div className="absolute -inset-4 bg-blue-accent/10 rounded-[3rem] blur-2xl group-hover:bg-blue-accent/20 transition-all duration-700" />
                <div className="relative aspect-square md:aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-2xl bg-white p-3">
                  <Image
                    src="/images/blue-abstract.png"
                    alt="Executive Support"
                    fill
                    className="object-cover rounded-[1.8rem]"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <h2 className="font-heading text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 mb-8">
                  Why the{" "}
                  <span className="text-blue-accent italic">Flagship</span>?
                </h2>
                <p className="text-md sm:text-xl text-slate-600 mb-12 leading-relaxed">
                  Designed for founders who value speed, consistency, and market
                  dominance. This isn't just a service—it's an investment in
                  your company's legacy.
                </p>

                <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
                  {exclusiveBenefits.map((benefit) => (
                    <div key={benefit} className="flex items-start gap-3">
                      <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 size={12} className="text-blue-accent" />
                      </div>
                      <span className="text-sm text-slate-700 font-medium leading-tight">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Professional & Futuristic CTA */}
      <section className="relative py-24 md:py-32 bg-slate-900 overflow-hidden">
        {/* Futuristic Grid Overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20" />

        <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-white mb-8">
            Ready for <span className="text-blue-accent italic">Absolute</span>{" "}
            Clarity?
          </h2>
          <p className="text-md sm:text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
            The Full Brand Build is a 12-week high-fidelity sprint. We only
            partner with 2 businesses per quarter to ensure zero compromise in
            quality.
          </p>

          <div className="flex flex-col items-center gap-10">
            <div className="flex flex-col md:flex-row justify-start items-center gap-12 md:gap-24">
              <div className="text-center md:text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-2">
                  Duration
                </p>
                <p className="text-3xl font-bold text-white tracking-tight">
                  12 Weeks
                </p>
              </div>
              <div className="h-px w-20 md:w-px md:h-12 bg-white/10" />
              <div className="text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-2">
                  Typical Investment
                </p>
                <p className="text-4xl md:text-6xl font-black text-white tracking-tighter">
                  $10K - $15K+
                </p>
              </div>
              <div className="h-px w-20 md:w-px md:h-12 bg-white/10" />
              <div className="text-center md:text-center">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-accent mb-2">
                  ROI Potential
                </p>
                <p className="text-3xl font-bold text-white tracking-tight">
                  10-20X
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-20 items-center gap-4">
              <Link
                href="/contact"
                className="group relative px-4 py-2 md:py-4 md:px-10 inline-flex items-center justify-center bg-white text-slate-900 rounded-2xl font-black text-md md:text-lg hover:bg-blue-accent hover:text-white transition-all shadow-2xl shadow-blue-500/10"
              >
                Schedule Strategy Call
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
              </Link>
              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
