import { Button } from "@/components/ui/button";
import AnimatedGrid from "./animated-grid";

export default function HeroSection() {
  return (
    <section id="home" className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden">
      <AnimatedGrid />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-foreground">
        <div className="container px-4">
          <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
            We Build Digital Experiences That Matter.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-foreground/80 md:text-xl">
            Delivering world-class software and design solutions to elevate your business in the digital landscape.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a href="#contact">
              <Button size="lg" className="font-semibold shadow-primary/40 shadow-[0_4px_20px] liquid-button">
                Get a Quote
                <span className="liquid-blob"></span>
                <span className="liquid-blob"></span>
              </Button>
            </a>
            <a href="#portfolio">
              <Button size="lg" variant="outline" className="font-semibold liquid-button">
                See Our Work
                <span className="liquid-blob"></span>
                <span className="liquid-blob"></span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
