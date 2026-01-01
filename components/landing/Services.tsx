export const Services = () => {
  const services = [
    {
      title: "Brand Analysis",
      description:
        "In-depth research and audit to understand your current brand position and market perception.",
    },
    {
      title: "Growth Strategy",
      description:
        "Tailored plans that align your brand with business goals and market opportunities for sustainable growth.",
    },
    {
      title: "Positioning & Messaging",
      description:
        "Crafting a clear, compelling narrative that resonates with your audience and differentiates your brand.",
    },
    {
      title: "Brand Identity Consulting",
      description:
        "Expert guidance on visual and verbal identity that strengthens recognition and credibility.",
    },
  ];

  return (
    <section className="bg-[#F7F9FC]">
      <div className="mx-auto max-w-7xl px-6 py-32">
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-sm font-medium tracking-wide text-[#1F4FD8]">
            Services
          </h3>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1C2D]">
            What We Do
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#4B5C73]">
            We provide strategic guidance and actionable insights to help brands
            grow, position themselves effectively, and communicate with clarity.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-16 max-w-4xl mx-auto">
          {services.map((service) => (
            <div key={service.title}>
              <h4 className="text-xl font-semibold text-[#0B1C2D] mb-2">
                {service.title}
              </h4>
              <p className="text-[#4B5C73] leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
