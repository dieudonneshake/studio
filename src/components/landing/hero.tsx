"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const heroImage = PlaceHolderImages.find(img => img.id === 'hero-section');

export default function HeroSection() {
  if (!heroImage) return null;

  return (
    <section 
      id="home" 
      className="relative h-screen min-h-[700px] w-full overflow-hidden -mt-20"
    >
      <div className="relative w-full h-full">
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description || "Hero background"}
          fill
          className="object-cover"
          priority
          data-ai-hint={heroImage.imageHint}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 z-10 flex h-full flex-col items-center justify-center pt-20 text-center text-white">
          <div className="container px-4">
            <h1 className="font-headline text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl">
              {heroImage.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-white/80 md:text-xl">
              {heroImage.subheadline}
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
    </section>
  );
}
