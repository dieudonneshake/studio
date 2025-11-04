import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const portfolioProjects = PlaceHolderImages.filter(img => img.id.startsWith("portfolio-"));

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Work</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A glimpse into the digital experiences we've crafted.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {portfolioProjects.map((project) => (
          <Card key={project.id} className="flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60 overflow-hidden">
            <CardHeader className="p-6">
               <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
               <CardDescription className="mt-2 text-base">{project.description}</CardDescription>
            </CardHeader>
            <CardContent className="p-6 pt-0 flex-1">
              <h4 className="mb-4 font-semibold text-foreground">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack?.map(tech => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </CardContent>
            <div className="p-6 pt-0">
                <a href="#contact">
                    <Button variant="outline" className="w-full liquid-button">
                        Request Yours
                        <span className="liquid-blob"></span>
                        <span className="liquid-blob"></span>
                    </Button>
                </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
