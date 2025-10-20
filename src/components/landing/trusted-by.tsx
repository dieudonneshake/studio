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
        <h3 className="mb-12 text-center text-sm font-bold uppercase tracking-wider text-primary">
          Trusted by industry leaders
        </h3>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-20 w-full items-center justify-center rounded-lg border border-border/70 bg-background/50 p-4 text-center transition-all duration-300 hover:bg-card hover:shadow-lg sm:w-60"
            >
              <p className="text-sm font-semibold text-muted-foreground">{partner.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
