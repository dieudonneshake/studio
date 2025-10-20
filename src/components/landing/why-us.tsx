import { ShieldCheck, TrendingUp, Rocket, Users, Gem } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Feature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: ShieldCheck,
    title: "Security",
    description: "We build robust and secure solutions to protect your data and users.",
  },
  {
    icon: TrendingUp,
    title: "Scalability",
    description: "Our architectures are designed to grow with your business, handling increasing demand seamlessly.",
  },
  {
    icon: Rocket,
    title: "Fast Delivery",
    description: "We leverage agile methodologies to deliver high-quality products on time, every time.",
  },
  {
    icon: Users,
    title: "Human-Centered Design",
    description: "Our design process puts your users first, creating intuitive and engaging experiences.",
  },
  {
    icon: Gem,
    title: "Affordable & Professional",
    description: "We offer premium services at competitive prices, ensuring value without compromising on quality.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="bg-muted/50 rounded-lg">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Why Choose THE SEMICOLON?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Your trusted partner for premium digital solutions.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-center text-center">
              <div className="mb-4 text-primary">
                <feature.icon className="h-10 w-10" />
              </div>
              <h3 className="text-lg font-semibold font-headline">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
