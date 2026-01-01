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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h3 className="text-center text-sm font-medium tracking-wide text-[#1F4FD8]">
          Trusted By
        </h3>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-16">
          {clientLogos.map((logo, index) => (
            <img
              key={index || "/images/default-avatar.jpg"}
              src={logo}
              alt={`Client ${index + 1}`}
              className="h-10 object-contain grayscale opacity-70 transition hover:grayscale-0 hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </section>
  );
};
