import Image from 'next/image';

const partners = [
  { name: 'MINISTRY OF ICT AND INNOVATION', logo: '/MINICT.jpg' },
  { name: 'Rwanda ICT Chamber', logo: '/ictchamber.jpg' },
  { name: 'ALX Africa', logo: '/alx.jpeg' },
  { name: '1 Million Rwandan Coders', logo: '/1mrc.jpg' },
];

export default function TrustedBySection() {
  const extendedPartners = [...partners, ...partners]; // Duplicate for seamless animation

  return (
    <section id="trusted-by" className="py-12 sm:py-16">
      <div className="container">
        <h3 className="mb-12 text-center text-sm font-bold uppercase tracking-wider text-primary">
          Trusted by industry leaders
        </h3>
        <div className="relative w-full overflow-hidden">
          <div className="logo-scroller flex w-max animate-scroll">
            {extendedPartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="flex h-24 w-64 items-center justify-center p-4"
              >
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={150}
                  height={80}
                  className="object-contain"
                  unoptimized // Use if logos are SVGs or you don't need optimization
                />
              </div>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
}
