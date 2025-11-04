import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiNodedotjs,
  SiTypescript,
  SiGooglecloud,
  SiVercel,
  SiPostgresql,
  SiDocker,
  SiFigma,
  SiSwift,
  SiKotlin,
  SiShopify,
  SiWoocommerce,
} from 'react-icons/si';

const techCategories = [
    {
        title: "Frontend",
        description: "For building beautiful, responsive, and fast user interfaces.",
        technologies: [
            { name: 'Next.js', icon: SiNextdotjs },
            { name: 'React', icon: SiReact },
            { name: 'TypeScript', icon: SiTypescript },
            { name: 'Tailwind CSS', icon: SiTailwindcss },
        ]
    },
    {
        title: "Backend & Database",
        description: "For creating robust, scalable, and secure server-side logic.",
        technologies: [
            { name: 'Node.js', icon: SiNodedotjs },
            { name: 'Firebase', icon: SiFirebase },
            { name: 'PostgreSQL', icon: SiPostgresql },
            { name: 'Docker', icon: SiDocker },
        ]
    },
    {
        title: "Mobile & E-commerce",
        description: "For native mobile experiences and powerful online stores.",
        technologies: [
            { name: 'Swift (iOS)', icon: SiSwift },
            { name: 'Kotlin (Android)', icon: SiKotlin },
            { name: 'Shopify', icon: SiShopify },
            { name: 'WooCommerce', icon: SiWoocommerce },
        ]
    },
];

const deploymentPlatforms = ["AWS", "Vercel", "Megabit Cloud"];

export default function TechPage() {
  return (
    <>
      <Header />
      <main>
         <section id="tech-stack" className="container">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Our Technology Stack
                </h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                We use a curated set of modern, reliable technologies to build scalable, high-performance, and secure applications that are built to last.
                </p>
            </div>
            <div className="mt-16 space-y-16">
                {techCategories.map(category => (
                    <div key={category.title}>
                        <div className="text-center">
                             <h3 className="font-headline text-2xl font-bold">{category.title}</h3>
                             <p className="mt-2 text-md text-muted-foreground">{category.description}</p>
                        </div>
                        <div
                            className="relative mt-8 flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background/20 py-12 md:shadow-xl"
                            >
                            <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-20">
                                {category.technologies.map((tech) => (
                                <div key={tech.name} className="flex flex-col items-center gap-2 text-center w-24">
                                    <tech.icon className="h-12 w-12 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                                    <span className="text-sm font-medium text-muted-foreground">{tech.name}</span>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
                 <div>
                    <div className="text-center">
                        <h3 className="font-headline text-2xl font-bold">Deployment & Hosting</h3>
                        <p className="mt-2 text-md text-muted-foreground">For seamless, scalable, and secure deployment pipelines.</p>
                    </div>
                    <div className="relative mt-8 flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background/20 py-12 md:shadow-xl">
                        <div className="flex flex-wrap justify-center gap-x-8 gap-y-6 md:gap-x-12">
                            {deploymentPlatforms.map((platform) => (
                                <div key={platform} className="px-4 py-2 rounded-md border border-dashed border-primary/50 bg-primary/5">
                                    <span className="text-lg font-semibold text-primary">{platform}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    <div className="text-center">
                        <h3 className="font-headline text-2xl font-bold">Design</h3>
                        <p className="mt-2 text-md text-muted-foreground">For world-class, intuitive, and beautiful user interfaces.</p>
                    </div>
                    <div className="relative mt-8 flex h-full w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background/20 py-12 md:shadow-xl">
                        <div className="flex flex-wrap justify-center gap-x-12 gap-y-10 md:gap-x-20">
                            <div className="flex flex-col items-center gap-2 text-center w-24">
                                <SiFigma className="h-12 w-12 text-muted-foreground transition-colors duration-300 hover:text-primary" />
                                <span className="text-sm font-medium text-muted-foreground">Figma</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
