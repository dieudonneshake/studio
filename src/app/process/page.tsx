import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/components/layout/page-header";

type ProcessStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  activities: string[];
};

const processSteps: ProcessStep[] = [
  {
    icon: Search,
    title: "1. Discover & Strategize",
    description: "We start by understanding your goals, audience, and challenges to define the project scope and strategy.",
    activities: [
        "In-depth stakeholder interviews and workshops.",
        "Comprehensive market and competitor analysis.",
        "Defining key performance indicators (KPIs).",
        "Creating a detailed project roadmap and timeline."
    ]
  },
  {
    icon: PenTool,
    title: "2. Design & Prototype",
    description: "Our team creates intuitive UI/UX designs and wireframes, focusing on a seamless user experience.",
    activities: [
        "User flow mapping and information architecture.",
        "Wireframing and creating low-fidelity mockups.",
        "Developing high-fidelity, interactive prototypes.",
        "Building a cohesive design system and brand guide."
    ]
  },
  {
    icon: Code,
    title: "3. Develop & Integrate",
    description: "Our expert developers write clean, scalable code to bring the design to life with robust functionality.",
    activities: [
        "Agile development sprints with regular check-ins.",
        "Frontend and backend engineering.",
        "Database design and API integration.",
        "Implementing security best practices from day one."
    ]
  },
  {
    icon: Rocket,
    title: "4. Test, Deploy & Support",
    description: "We rigorously test and deploy your application, ensuring a smooth launch and providing ongoing support.",
    activities: [
        "End-to-end quality assurance and user acceptance testing.",
        "Performance, security, and scalability testing.",
        "Seamless deployment to production environments.",
        "Ongoing maintenance, support, and feature updates."
    ]
  },
];

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader 
          title="Our Process"
          description="A streamlined, transparent, and collaborative approach to deliver exceptional results on time and on budget."
        />
         <section id="process" className="container">
            <div className="mt-16 relative">
                 <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
                {processSteps.map((step, index) => (
                <div key={step.title} className="relative mb-12 md:grid md:grid-cols-2 md:gap-12 items-center">
                    <div className={`md:col-start-${index % 2 === 0 ? 1 : 2} md:row-start-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <Card className="h-full flex flex-col p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60">
                            <CardHeader className="p-0 items-center md:items-start">
                                <CardTitle className="font-headline text-xl font-semibold flex items-center gap-3">
                                    <div className="rounded-full bg-primary/10 p-3 text-primary">
                                        <step.icon className="h-6 w-6" />
                                    </div>
                                    {step.title}
                                </CardTitle>
                            </CardHeader>
                            <CardDescription className="mt-3 text-base text-muted-foreground text-center md:text-left">{step.description}</CardDescription>
                        </Card>
                    </div>
                    <div className={`md:col-start-${index % 2 === 0 ? 2 : 1} md:row-start-1 mt-4 md:mt-0`}>
                        <CardContent className="p-6 rounded-lg border bg-muted/50">
                            <h4 className="font-semibold text-foreground mb-3">Key Activities:</h4>
                             <ul className="space-y-2">
                                {step.activities.map((activity, i) => (
                                    <li key={i} className="flex items-start">
                                        <div className="mt-1.5 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary/50" />
                                        <span className="text-muted-foreground">{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </div>
                     <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-background hidden md:flex items-center justify-center text-primary-foreground font-bold">
                        {index + 1}
                     </div>
                </div>
                ))}
            </div>
            </section>
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
