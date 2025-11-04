"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const slides = PlaceHolderImages.filter(img => img.id.startsWith("hero-slide-"));

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[700px] w-full overflow-hidden"
    >
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="relative w-full h-full">
                <Image
                  src={slide.imageUrl}
                  alt={slide.description || `Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  data-ai-hint={slide.imageHint}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
                 <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center text-center text-white">
                    <div className="container px-4">
                    <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
                        {slide.headline}
                    </h1>
                    <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
                        {slide.subheadline}
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <a href="#contact">
                        <Button size="lg" className="font-semibold shadow-primary/40 shadow-[0_4px_20px] liquid-button bg-white text-black hover:bg-white/90">
                            Get a Quote
                            <span className="liquid-blob !bg-primary"></span>
                            <span className="liquid-blob !bg-primary"></span>
                        </Button>
                        </a>
                        <a href="#portfolio">
                        <Button size="lg" variant="outline" className="font-semibold liquid-button border-white text-white hover:bg-white hover:text-black">
                            See Our Work
                            <span className="liquid-blob !bg-primary"></span>
                            <span className="liquid-blob !bg-primary"></span>
                        </Button>
                        </a>
                    </div>
                    </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
}
