import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";
import { ServiceConfig } from "@/lib/services-config";
import { openCalendly } from "@/lib/calendly";
import { BookCallButton } from "../BookCallButton";
import { motion } from "framer-motion";

interface ServiceTemplateProps {
  config: ServiceConfig;
}

const ServiceTemplate = ({ config }: ServiceTemplateProps) => {
  if (!config.templateContent) {
    return <div>Template content not configured</div>;
  }

  const { hero, templateContent } = config;
  const { problem, process, deliverables, pricing, cta } = templateContent;

  // Tier-based styling
  const tierColors = {
    premium: {
      gradient: "from-blue-600 via-blue-700 to-cyan-600",
      badge: "bg-blue-100/10 text-blue-200 border-blue-200/20",
      accent: "text-blue-600",
      buttonPrimary: "bg-blue-600 hover:bg-blue-700",
    },
    standard: {
      gradient: "from-indigo-600 via-purple-700 to-purple-400",
      badge: "bg-purple-300/10 text-purple-200 border-purple-100/20",
      accent: "text-purple-600",
      buttonPrimary: "bg-purple-600 hover:bg-purple-700",
    },
    flexible: {
      gradient: "from-emerald-600 via-teal-700 to-cyan-600",
      badge: "bg-emerald-500/10 text-emerald-300 border-emerald-400/20",
      accent: "text-emerald-600",
      buttonPrimary: "bg-emerald-600 hover:bg-emerald-700",
    },
  };

  const colors = tierColors[config.tier];

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section
        className={`relative overflow-hidden bg-linear-to-br ${colors.gradient}`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`inline-flex items-center gap-2 rounded-full border ${colors.badge} px-4 py-2 text-sm font-medium backdrop-blur-sm`}
          >
            <Zap className="h-4 w-4" />
            {hero.badge}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="font-heading mt-6 text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight max-w-4xl"
          >
            {hero.headline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-slate-300"
          >
            {hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className={`rounded-full ${colors.buttonPrimary} text-white px-8 py-6 text-base font-semibold shadow-sm`}
            >
              {hero.ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* {hero.ctaSecondary && (
              <Button 
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white hover:bg-white/10 px-8 py-6 text-lg"
              >
                {hero.ctaSecondary}
              </Button>
            )} */}
          </motion.div>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900">
              {problem.title}
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-slate-600">
              {problem.description}
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {problem.painPoints.map((point) => (
              <div
                key={point.desc}
                className="rounded-2xl bg-slate-50 p-6 md:p-8 border border-slate-200"
              >
                <div className={`text-3xl font-bold ${colors.accent}`}>
                  {point.stat}
                </div>
                <p className="mt-3 text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900">
              {process.title}
            </h2>
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {process.steps.map((step, idx) => (
              <div
                key={step.title}
                className="group relative rounded-3xl bg-white p-4 md:p-8 shadow-lg shadow-slate-200/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div
                  className={`absolute -top-4 left-6 md:left-8 inline-flex h-12 w-12 items-center justify-center rounded-full ${colors.buttonPrimary} text-white font-bold text-lg shadow-lg`}
                >
                  {idx + 1}
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
                {step.timeline && (
                  <div
                    className={`mt-4 text-sm font-semibold ${colors.accent}`}
                  >
                    {step.timeline}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-slate-900 text-center">
            {deliverables.title}
          </h2>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {deliverables.items.map((item) => (
              <div
                key={item}
                className={`flex items-center md:items-start gap-2 md:gap-4 rounded-2xl border-2 border-slate-200 bg-slate-50 p-4 md:p-6 transition-all hover:border-${
                  config.tier === "premium"
                    ? "blue"
                    : config.tier === "standard"
                    ? "purple"
                    : "emerald"
                }-400`}
              >
                <CheckCircle2
                  className={`size-4 md:size-6 ${colors.accent} shrink-0 mt-1`}
                />
                <span className="text-slate-700 text-sm md:text-base font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING (if available) */}
      {pricing && (
        <section className="py-20 md:py-28 bg-slate-50">
          <div className="mx-auto max-w-6xl px-6">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 text-center">
              Investment & Packages
            </h2>
            <p className="mt-4 text-center text-slate-600 text-lg">
              Starting at {pricing.startingAt}
            </p>

            <div className="mt-16 grid gap-8 lg:grid-cols-3">
              {pricing.packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className={`rounded-3xl bg-white p-8 shadow-lg ${
                    pkg.recommended
                      ? `ring-4 ring-${
                          config.tier === "premium" ? "blue" : "purple"
                        }-500 ring-offset-4`
                      : "border-2 border-slate-200"
                  }`}
                >
                  {pkg.recommended && (
                    <div
                      className={`inline-block rounded-full ${colors.buttonPrimary} px-4 py-1 text-sm font-semibold text-white`}
                    >
                      Recommended
                    </div>
                  )}
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">
                    {pkg.name}
                  </h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-slate-900">
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <CheckCircle2
                          className={`h-5 w-5 ${colors.accent} shrink-0 mt-0.5`}
                        />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 w-full rounded-full ${
                      pkg.recommended
                        ? colors.buttonPrimary
                        : "bg-slate-900 hover:bg-slate-800"
                    } text-white`}
                  >
                    Choose {pkg.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className={`py-20 md:py-28 bg-linear-to-br ${colors.gradient}`}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white">
            {cta.title}
          </h2>
          <p className="mt-6 pb-10 text-base md:text-lg text-blue-100">
            {cta.description}
          </p>

          <BookCallButton
            text="Schedule Strategy Call"
            className="bg-white hover:bg-slate-100 text-gray-800! text-lg! font-semibold! px-8 hover:px-10!"
          />
        </div>
      </section>
    </main>
  );
};

export default ServiceTemplate;
