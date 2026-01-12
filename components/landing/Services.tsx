"use client"

import { useRouter } from "next/navigation";
import { Pill } from "../Pill";
import { Button } from "../ui/button";
import clsx from "clsx";

const services = [
  {
    title: "Brand Analysis",
    description:
      "We assess how your brand is perceived, where it stands in the market, and how it can be positioned for long-term growth.",
    items: [
      "Brand audits and competitive analysis",
      "Visual and verbal identity evaluation",
      "Market positioning insights",
    ],
    featured: true,
    slug: "brand-analysis"
  },
  {
    title: "Business Branding Packages",
    description:
      "Strategic branding systems designed to support business goals and scale as your company grows.",
    items: [
      "Startup and early-stage brand kits",
      "Rebranding for growing businesses",
      "Brand strategy and positioning",
    ],
    slug: "business-branding-packages"
  },
  {
    title: "Marketing & Digital Assets",
    description:
      "Design systems and assets that help your brand communicate clearly and consistently across digital channels.",
    items: [
      "Social media and campaign templates",
      "Website and UI design assets",
      "Email and digital marketing visuals",
    ],
    slug: "marketing-digital-assets"
  },
  {
    title: "Print & Brand Collateral",
    description:
      "Tangible brand materials that reinforce credibility and recognition across physical touchpoints.",
    items: [
      "Business cards and marketing collateral",
      "Presentations and reports",
      "Packaging and print design",
    ],
    slug: "print-brand-collateral"
  },
  {
    title: "Custom Design Solutions",
    description:
      "Flexible, on-demand design support tailored to unique business needs and evolving projects.",
    items: [
      "Custom design engagements",
      "Design support for launches and campaigns",
    ],
    slug: "custom-design-solutions"
  },
];

export const Services = () => {
  const router = useRouter();

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-32">
        <div className="mx-auto max-w-3xl text-center">
          <div className="flex justify-center">

          <Pill text="Services" />
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1C2D]">
            What We Do
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5C73]">
            We help brands clarify their position, align with business goals,
            and communicate with consistency and confidence.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className={clsx(
                "group flex flex-col justify-between rounded-2xl bg-white hover:bg-blue-50 hover:border-gray-200 p-6 transition-all duration-300",
                "hover:-translate-y-1 hover:shadow-lg",
                service.featured
                  ? "border border-blue-accent/30 shadow-md"
                  : "border border-transparent shadow-sm"
              )}
            >
              <div>
                {service.featured && (
                  <span className="mb-4 inline-block rounded-full bg-blue-accent/10 px-3 py-1 text-xs font-semibold text-blue-accent">
                    Core Service
                  </span>
                )}

                <h4 className="text-lg font-semibold tracking-tight text-[#0B1C2D]">
                  {service.title}
                </h4>

                <p className="mt-3 text-sm leading-relaxed text-[#4B5C73]">
                  {service.description}
                </p>

                <ul className="mt-6 space-y-3">
                  {service.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm mt-4 text-[#4B5C73] leading-snug"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                onClick={() => router.push(`/services/${service.slug}`)}
                variant="ghost"
                className="flex justify-self-end mt-6 -ml-2 w-fit px-3 font-semibold text-blue-accent hover:text-gray-900 rounded-full duration-300 hover:bg-blue-200"
              >
                Explore service →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
