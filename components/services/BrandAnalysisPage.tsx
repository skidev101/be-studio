"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  Target,
  Zap,
  Users,
  TrendingUp,
  Shield,
} from "lucide-react";
import { BookCallButton } from "../BookCallButton";
import { useRouter } from "next/navigation";

const BrandAnalysisPage = () => {
  const router = useRouter();

  const approachSteps = [
    {
      icon: BarChart3,
      title: "Research & Discovery",
      desc: "Deep-dive competitive analysis, customer perception surveys, and market positioning assessment across 15+ key metrics.",
      timeline: "Week 1-2",
    },
    {
      icon: Target,
      title: "Comprehensive Brand Audit",
      desc: "Systematic evaluation of visual identity, messaging frameworks, customer touchpoints, and brand consistency across all channels.",
      timeline: "Week 2-3",
    },
    {
      icon: TrendingUp,
      title: "Strategic Roadmap",
      desc: "Actionable recommendations with prioritized initiatives, implementation timelines, and measurable success metrics.",
      timeline: "Week 4",
    },
  ];

  const deliverables = [
    { icon: CheckCircle2, text: "60+ page comprehensive brand audit report" },
    {
      icon: CheckCircle2,
      text: "Competitive landscape analysis with 10+ competitors",
    },
    {
      icon: CheckCircle2,
      text: "Stakeholder perception interviews & synthesis",
    },
    {
      icon: CheckCircle2,
      text: "Brand architecture & positioning recommendations",
    },
    { icon: CheckCircle2, text: "90-day strategic implementation roadmap" },
    { icon: CheckCircle2, text: "Executive presentation & workshop session" },
  ];

  const idealClients = [
    {
      icon: Zap,
      title: "Pre-Rebrand Businesses",
      desc: "Companies investing $50K+ in rebranding who need strategic foundation before execution.",
    },
    {
      icon: Users,
      title: "Series A+ Startups",
      desc: "Fast-growing companies transitioning from founder-led to professional brand management.",
    },
    {
      icon: Shield,
      title: "Established Brands",
      desc: "Organizations experiencing messaging drift, positioning confusion, or market disruption.",
    },
  ];

  const stats = [
    { value: "87%", label: "Client satisfaction rate" },
    { value: "3-5x", label: "Average ROI in 12 months" },
    { value: "50+", label: "Brands analyzed annually" },
  ];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-dark-accent to-dark-accent/80">
        {/* <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div> */}

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="inline-flex items-center gap-2 rounded-full bg-blue-accent/10 px-4 py-2 text-sm font-medium text-blue-300 border border-blue-accent/20 backdrop-blur-sm"
          >
            <Zap className="h-4 w-4" />
            Brand Analysis & Strategy
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-heading mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-tight"
          >
            Stop Guessing.
            <br />
            <span className="text-blue-accent">
              Start Knowing.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            Data-driven brand analysis that reveals how customers truly perceive
            you, where competitors are winning, and the exact positioning gaps
            costing you growth.
          </motion.p>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button
              onClick={() => router.push("/contact")}
              size="lg"
              className="rounded-full bg-blue-accent/80 hover:bg-blue-accent/90 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg font-black"
            >
              Get Brand Assessment
              {/* <ArrowRight className="ml-2 h-5 w-5" /> */}
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-6 text-lg"
            >
              View Sample Report
            </Button> */}
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-heading text-3xl md:text-4xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
              The <span className="text-blue-accent">$2.3M</span> Question Most
              Brands Can't Answer
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-slate-600">
              That's the average revenue impact of misaligned brand positioning.
              Without rigorous analysis, you're making million-dollar decisions
              based on assumptions, not evidence.
            </p>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-3">
            {[
              {
                stat: "68%",
                desc: "of CMOs admit they lack clear brand positioning data",
              },
              {
                stat: "3.2x",
                desc: "higher customer acquisition costs from inconsistent messaging",
              },
              {
                stat: "43%",
                desc: "revenue lost to better-positioned competitors",
              },
            ].map((item) => (
              <div
                key={item.desc}
                className="rounded-2xl bg-slate-50 p-8 border border-slate-200"
              >
                <div className="font-heading text-3xl font-bold text-blue-accent">
                  {item.stat}
                </div>
                <p className="mt-3 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900">
              Our Proven Methodology
            </h2>
            <p className="mt-6 text-base md:text-lg text-slate-600">
              A systematic 4-week process combining quantitative research,
              qualitative insights, and strategic frameworks used by Fortune 500
              brands.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-3">
            {approachSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="group relative rounded-3xl bg-white p-6 md:p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/50"
                >
                  <div className="absolute -top-4 left-6 md:left-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-blue-accent text-white font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-accent group-hover:bg-blue-accent/80 group-hover:text-white transition-colors">
                    <Icon className="h-7 w-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                  <div className="mt-4 text-sm font-semibold text-blue-accent">
                    {step.timeline}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center">
            Your <span className="text-blue-accent">Complete</span> Brand
            Intelligence Package
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {deliverables.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-start gap-3 md:gap-4 rounded-2xl border-2 border-slate-200 bg-slate-50 p-6 transition-all hover:border-blue-accent hover:bg-blue-50/30"
                >
                  <Icon className="w-4 h-4 md:h-6 md:w-6 text-blue-accent shrink-0 mt-1" />
                  <span className="text-slate-700 text-sm md:text-base font-medium">
                    {item.text}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-linear-to-br from-blue-50 to-cyan-50 p-6 md:p-8 border-2 border-blue-200">
            <div className="flex flex-col md:flex-row items-start gap-4">
              <Shield className="h-8 w-8 text-blue-accent shrink-0" />
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  100% Satisfaction Guarantee
                </h3>
                <p className="mt-2 text-slate-600">
                  If our analysis doesn't reveal at least 3 actionable insights
                  that could improve your market position, we'll refund your
                  investment in full.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section className="py-20 md:py-32 bg-white">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-center">
            Perfect For Growth-Focused Leaders
          </h2>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {idealClients.map((client) => {
              const Icon = client.icon;
              return (
                <div
                  key={client.title}
                  className="rounded-3xl bg-white border border-gray-200 p-6 md:p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:shadow-md hover:shadow-slate-300/50"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-accent">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold">
                    {client.title}
                  </h3>
                  <p className="mt-3 text-slate-400 leading-relaxed">
                    {client.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 md:px-6 pb-8 bg-white">

      <div className="py-20 md:py-32 bg-linear-to-br from-dark-accent via-dark-accent/80 to-dark-accent rounded-[2rem] md:rounded-[8rem]">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
            Ready to Uncover What Your Competitors Already Know?
          </h2>
          <p className="mt-6 text-md md:text-lg text-gray-300">
            Book a 30-minute discovery call to see if brand analysis is right
            for your business. No obligation, just honest insights.
          </p>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            
            <BookCallButton
              text="Schedule Discovery Call"
              className="bg-blue-accent/60 text-md! md:text-lg! font-semibold! px-6! md:px-8 hover:px-10"
            />
            
          </div>

          <p className="mt-8 text-xs text-gray-300">
            Typical investment: $15,000-$25,000 • Timeline: 4 weeks
          </p>
        </div>
      </div>
      </section>
    </main>
  );
};

export default BrandAnalysisPage;
