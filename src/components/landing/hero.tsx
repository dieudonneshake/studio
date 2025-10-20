import { Button } from "@/components/ui/button";

const AnimatedBackground = () => (
  <div className="absolute inset-0 z-0 overflow-hidden bg-background">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
    {Array.from({ length: 50 }).map((_, i) => (
      <div
        key={i}
        className="animate-float absolute rounded-full bg-accent/30"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          width: `${Math.random() * 3 + 1}px`,
          height: `${Math.random() * 3 + 1}px`,
          animationDuration: `${Math.random() * 10 + 10}s`,
          animationDelay: `${Math.random() * 10}s`,
          '--tx': `${Math.random() * 60 - 30}px`,
          '--ty': `${Math.random() * 60 - 30}px`,
        } as React.CSSProperties}
      />
    ))}
  </div>
);

export default function HeroSection() {
  return (
    <section id="home" className="relative flex h-[90vh] min-h-[700px] w-full items-center justify-center overflow-hidden">
      <AnimatedBackground />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            We Build Digital Experiences That Matter.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Delivering world-class software and design solutions to elevate your business in the digital landscape.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="font-semibold">
                Get a Quote
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="font-semibold">
                See Our Work
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
