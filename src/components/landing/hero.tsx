"use client";

import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const slides = [
  {
    image: "https://images.unsplash.com/photo-1555066931-4365d1469c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHwzfHxjb2RlfGVufDB8fHx8fDE3MDc0MjUyMjR8MA&ixlib=rb-4.0.3&q=80&w=1920",
    headline: "We Build Digital Experiences That Matter.",
    subheadline: "Delivering world-class software and design solutions to elevate your business in the digital landscape.",
  },
  {
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw0fHxidXNpbmVzcyUyMHRlYW18ZW58MHx8fHx8MTcwNzQyNDYxN3ww&ixlib=rb-4.0.3&q=80&w=1920",
    headline: "Innovation and Excellence in Every Line of Code.",
    subheadline: "From startups to enterprises, we craft scalable and secure solutions tailored to your unique goals.",
  },
  {
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8fHx8fDE3MDc0MjUzMzR8MA&ixlib=rb-4.0.3&q=80&w=1920",
    headline: "Your Vision, Brought to Life with Technology.",
    subheadline: "Partner with us to transform your ideas into powerful digital products that captivate and perform.",
  },
];


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
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
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
