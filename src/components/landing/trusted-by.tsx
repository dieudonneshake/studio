import Image from 'next/image';

const partners = [
  { name: 'MINISTRY OF ICT AND INNOVATION' },
  { name: 'Rwanda ICT Chamber' },
  { name: 'ALX Africa' },
  { name: '1 Million Rwandan Coders' },
];

export default function TrustedBySection() {
  return (
    <section id="trusted-by" className="bg-muted/50 py-12 sm:py-16">
      <div className="container">
        <h3 className="mb-12 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </h3>
        <div className="mx-auto grid max-w-lg grid-cols-1 items-center gap-8 sm:max-w-xl sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-24 items-center justify-center rounded-lg border border-border/70 bg-background/50 p-4 text-center transition-all duration-300 hover:bg-card hover:shadow-lg"
            >
              <p className="text-sm font-semibold text-muted-foreground">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
