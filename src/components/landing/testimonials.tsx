"use client"

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const testimonials = [
  {
    quote: "THE SEMICOLON delivered a product that exceeded our expectations. Their attention to detail and commitment to quality is unparalleled.",
    name: "Client A",
    title: "CEO, Tech Corp",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-1")
  },
  {
    quote: "The design process was collaborative and insightful. We ended up with a user-friendly platform that our customers love.",
    name: "Client B",
    title: "Founder, Startup Inc.",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-2")
  },
  {
    quote: "From start to finish, the team was professional, responsive, and incredibly talented. Highly recommended for any digital project.",
    name: "Client C",
    title: "Manager, Gov Agency",
    avatar: PlaceHolderImages.find(img => img.id === "testimonial-3")
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
                            {testimonial.avatar && (
                                <AvatarImage src={testimonial.avatar.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.avatar.imageHint} />
                            )}
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
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
