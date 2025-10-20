import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

export default function ProcessSection() {
  return (
    <section id="process" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Process</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          A streamlined approach to deliver exceptional results.
        </p>
      </div>
      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div key={step.title} className="relative">
            <Card className="h-full flex flex-col items-center text-center p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60">
              <div className="mb-5 rounded-full bg-primary/10 p-4 text-primary">
                <step.icon className="h-8 w-8" />
              </div>
              <CardHeader className="p-0">
                <CardTitle className="font-headline text-xl font-semibold">{step.title}</CardTitle>
              </CardHeader>
              <CardDescription className="mt-3 text-base text-muted-foreground">{step.description}</CardDescription>
            </Card>
            {index < processSteps.length - 1 && (
              <div className="absolute top-1/2 left-full w-1/2 h-px bg-border -translate-y-1/2 hidden lg:block" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
