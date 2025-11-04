import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "1. Discover",
    description: "We start by understanding your goals, audience, and challenges to define the project scope and strategy.",
  },
  {
    icon: PenTool,
    title: "2. Design",
    description: "Our team creates intuitive UI/UX designs and wireframes, focusing on a seamless user experience.",
  },
  {
    icon: Code,
    title: "3. Develop",
    description: "Our expert developers write clean, scalable code to bring the design to life with robust functionality.",
  },
  {
    icon: Rocket,
    title: "4. Deploy",
    description: "We rigorously test and deploy your application, ensuring a smooth launch and providing ongoing support.",
  },
];

const processImage = PlaceHolderImages.find(img => img.id === 'process-section');

export default function ProcessSection() {
  return (
    <section id="process" className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
                <div className="text-center md:text-left">
                    <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Process</h2>
                    <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                    A streamlined approach to deliver exceptional results.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {processSteps.map((step) => (
                    <div key={step.title} className="relative">
                        <Card className="h-full flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60">
                        <div className="mb-4 rounded-full bg-primary/10 p-3 text-primary">
                            <step.icon className="h-6 w-6" />
                        </div>
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-lg font-semibold">{step.title}</CardTitle>
                        </CardHeader>
                        <CardDescription className="mt-2 text-base text-muted-foreground">{step.description}</CardDescription>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
             {processImage && (
                <div className="aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                        src={processImage.imageUrl}
                        alt={processImage.description || "Our Process"}
                        width={1200}
                        height={800}
                        className="object-cover w-full h-full"
                        data-ai-hint={processImage.imageHint}
                    />
                </div>
            )}
        </div>
    </section>
  );
}
