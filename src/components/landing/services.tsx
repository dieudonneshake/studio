import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Code, Smartphone, LayoutDashboard, ShoppingCart, Palette, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive, high-performance websites and web applications tailored to your business needs.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile apps for iOS and Android with a focus on user experience.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Management Systems",
    description: "Developing custom LMS, MIS, and BI dashboards for data-driven decision making and operational efficiency.",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Crafting powerful online stores and e-commerce platforms that drive sales and customer engagement.",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful interfaces for web, mobile, and SaaS platforms that users love.",
  },
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Establishing a strong brand identity with memorable logos, posters, and corporate branding materials.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          End-to-end technology and design solutions to bring your vision to life.
        </p>
      </div>
      <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Card key={service.title} className="flex flex-col items-center text-center p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-card/80 backdrop-blur-sm border-border/60">
            <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
              <service.icon className="h-8 w-8" />
            </div>
            <CardHeader className="p-0">
              <CardTitle className="font-headline text-xl font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardDescription className="mt-2 text-base text-muted-foreground">{service.description}</CardDescription>
          </Card>
        ))}
      </div>
    </section>
  );
}
