import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const portfolioProjects = PlaceHolderImages.filter(img => img.id.startsWith("portfolio-"));

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Work</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the digital experiences we've crafted.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project, index) => (
          <Card key={project.id} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60">
            <CardHeader className="p-0">
              <div className="overflow-hidden">
                <Image
                  src={project.imageUrl}
                  alt={project.description}
                  width={600}
                  height={400}
                  data-ai-hint={project.imageHint}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <CardTitle className="font-headline text-xl">Project Example {index + 1}</CardTitle>
              <CardDescription className="mt-2 text-base">{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
