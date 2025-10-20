"use client"

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "THE SEMICOLON's expertise in educational technology was instrumental in bringing our vision for Aquaventures Academy to life. Their platform is both engaging and robust.",
    name: "Jean Eric",
    title: "Founder, Aquaventures Academy",
  },
  {
    quote: "The e-commerce solution they built for bobo250 has significantly boosted our online sales. The team was professional and delivered a high-quality product on time.",
    name: "DeBonheur",
    title: "Owner, bobo250 Electronic Shop",
  },
  {
    quote: "Working with THE SEMICOLON to create the digital presence for Kiddo Hub Initiative was a fantastic experience. They understood our mission and created a welcoming and functional website.",
    name: "Theodomile",
    title: "Founder, Kiddo Hub Initiative",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-muted/50 rounded-lg">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Real stories from businesses we've helped empower.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                  <div className="p-1">
                    <Card className="h-full bg-background/80">
                      <CardContent className="flex flex-col h-full items-start justify-between p-6">
                        <blockquote className="text-lg italic text-foreground">
                          “{testimonial.quote}”
                        </blockquote>
                        <div className="mt-6 flex items-center gap-4">
                          <Avatar>
                            <AvatarFallback>
                              {testimonial.name
                                .split(' ')
                                .map((n) => n[0])
                                .join('')}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
