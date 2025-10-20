import Image from 'next/image';

const partners = [
  { name: 'MINISTRY OF ICT AND INNOVATION', logo: 'https://i.imgur.com/iJj4a0p.png', width: 158, height: 48 },
  { name: 'Rwanda ICT Chamber', logo: 'https://i.imgur.com/iRjY2D1.png', width: 158, height: 48 },
  { name: 'ALX Africa', logo: 'https://i.imgur.com/g0nZp1C.png', width: 158, height: 48 },
  { name: '1 Million Rwandan Coders', logo: 'https://i.imgur.com/j5A7mGk.png', width: 158, height: 48 },
];

export default function TrustedBySection() {
  return (
    <section id="trusted-by" className="bg-muted/50 py-12 sm:py-16">
      <div className="container">
        <h3 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </h3>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <Image
                className="max-h-12 w-full object-contain filter grayscale transition-all duration-300 hover:grayscale-0"
                src={partner.logo}
                alt={partner.name}
                width={partner.width}
                height={partner.height}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
