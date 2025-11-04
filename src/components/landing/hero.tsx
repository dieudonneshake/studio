import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative flex h-screen min-h-[700px] w-full items-center justify-center overflow-hidden bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHx8MTcyNDU1NDUzN3ww&ixlib=rb-4.1.0&q=80&w=1920')]"
    >
      <div className="absolute inset-0 bg-background/60 backdrop-blur-sm"></div>
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
