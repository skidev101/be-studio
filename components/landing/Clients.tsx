import Image from "next/image";

export const Clients = () => {
  const clientLogos = [
    "/images/logos/client1.svg",
    "/images/logos/client2.svg",
    "/images/logos/client3.svg",
    "/images/logos/client4.svg",
    "/images/logos/client5.svg",
    "/images/logos/client6.svg",
    "/images/logos/client7.svg",
  ];

  return (
    <section className="bg-white py-10 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <h1 className="font-heading text-center mt-6 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">
          Trusted by growing teams and established brands
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-[#4B5C73]">
          We've partnered with teams across industries to build brands that are
          clear, consistent, and built for growth.
        </p>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-10">
          {clientLogos.map((logo, i) => (
            <Image
              key={i}
              src={logo}
              alt="logo"
              width={60}
              height={40}
              className="w-auto h-auto object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
              aria-hidden
            />
          ))}
        </div>
      </div>
    </section>
  );
};
