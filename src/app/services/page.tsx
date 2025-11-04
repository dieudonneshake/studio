import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import { Code, Smartphone, LayoutDashboard, ShoppingCart, Palette, PenTool } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import PageHeader from "@/components/layout/page-header";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  details: string[];
  tech: string;
};

const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Creating responsive, high-performance websites and web applications tailored to your business needs.",
    details: [
        "Custom marketing websites with CMS integration.",
        "Complex web applications with secure backends.",
        "API development and integration.",
        "Progressive Web Apps (PWAs) for app-like experiences."
    ],
    tech: "Next.js, React, Node.js, TypeScript, PostgreSQL"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Building native and cross-platform mobile apps for iOS and Android with a focus on user experience.",
    details: [
        "Native iOS (Swift) and Android (Kotlin) development.",
        "Cross-platform solutions with React Native.",
        "App store submission and maintenance.",
        "Integration with device hardware like cameras and GPS."
    ],
    tech: "React Native, Swift, Kotlin, Firebase"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboards & Management Systems",
    description: "Developing custom LMS, MIS, and BI dashboards for data-driven decision making and operational efficiency.",
    details: [
        "Business Intelligence (BI) dashboards with real-time data.",
        "Learning Management Systems (LMS) for educational institutions.",
        "Management Information Systems (MIS) to streamline operations.",
        "Custom reporting and data visualization features."
    ],
    tech: "React, Recharts, Node.js, SQL/NoSQL Databases"
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Solutions",
    description: "Crafting powerful online stores and e-commerce platforms that drive sales and customer engagement.",
    details: [
        "Custom storefront design and development.",
        "Secure payment gateway integration (Stripe, PayPal).",
        "Inventory and order management systems.",
        "Customer accounts and loyalty programs."
    ],
    tech: "Next.js, Shopify, WooCommerce, Stripe API"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Designing intuitive and beautiful interfaces for web, mobile, and SaaS platforms that users love.",
    details: [
        "User research and persona development.",
        "Wireframing and interactive prototyping.",
        "High-fidelity visual design and design systems.",
        "Usability testing and feedback analysis."
    ],
    tech: "Figma, Adobe XD, Sketch"
  },
  {
    icon: PenTool,
    title: "Graphic Design & Branding",
    description: "Establishing a strong brand identity with memorable logos, posters, and corporate branding materials.",
    details: [
        "Logo design and brand identity guidelines.",
        "Marketing materials (brochures, posters, social media graphics).",
        "Corporate stationery and presentation design.",
        "Brand strategy and positioning."
    ],
    tech: "Adobe Illustrator, Photoshop, InDesign"
  },
];


export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
            title="Our Services"
            description="End-to-end technology and design solutions to bring your vision to life."
        />
        <section id="services" className="container">
            <div className="mt-16 grid gap-12">
                {services.map((service) => (
                    <div key={service.title} className="grid md:grid-cols-2 gap-8 items-center border-b pb-12 last:border-b-0 last:pb-0">
                         <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <div className="mb-4 rounded-full bg-primary/10 p-4 text-primary">
                                <service.icon className="h-10 w-10" />
                            </div>
                            <h3 className="font-headline text-2xl font-semibold">{service.title}</h3>
                            <p className="mt-2 text-base text-muted-foreground">{service.description}</p>
                         </div>
                         <div>
                            <ul className="space-y-3">
                                {service.details.map((detail, index) => (
                                    <li key={index} className="flex items-start">
                                        <div className="mt-1 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                                        <span className="text-muted-foreground">{detail}</span>
                                    </li>
                                ))}
                            </ul>
                            <p className="mt-4 text-sm font-semibold text-primary">
                                Key Technologies: <span className="font-normal text-muted-foreground">{service.tech}</span>
                            </p>
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
