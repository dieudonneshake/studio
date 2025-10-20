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
        <h3 className="mb-8 text-center text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          Trusted by industry leaders
        </h3>
        <div className="mx-auto grid max-w-lg grid-cols-2 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-4 sm:gap-x-10 lg:mx-0 lg:max-w-none">
          {partners.map((partner) => (
            <div key={partner.name} className="flex items-center justify-center">
              <p className="text-center text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
