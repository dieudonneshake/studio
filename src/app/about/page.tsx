import AboutSection from "@/components/landing/about";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import { Gem, Target, Eye } from "lucide-react";

const values = [
  {
    icon: Gem,
    title: 'Excellence',
    description: 'We are committed to delivering the highest quality in every project we undertake, from code to customer service.',
  },
  {
    icon: Target,
    title: 'Innovation',
    description: 'We constantly explore new technologies and creative solutions to solve complex problems and drive progress.',
  },
  {
    icon: Eye,
    title: 'Integrity',
    description: 'We operate with transparency and honesty, building lasting trust with our clients, partners, and team members.',
  },
];


export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <section className="bg-muted/50 rounded-lg">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="text-center md:text-left">
                        <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Mission</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            To empower businesses and enrich lives by building exceptional technology that is accessible, scalable, and beautifully designed. We strive to be a catalyst for digital transformation for our clients.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                         <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Vision</h2>
                        <p className="mt-4 text-lg text-muted-foreground">
                            To be a leading digital innovation hub in Africa, recognized for our commitment to quality, creativity, and positive social impact through technology.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section id="values" className="container">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    The principles that guide our work and our culture.
                </p>
            </div>
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {values.map((feature) => (
                    <div key={feature.title} className="flex flex-col items-center text-center">
                    <div className="mb-4 text-primary">
                        <feature.icon className="h-10 w-10" />
                    </div>
                    <h3 className="text-lg font-semibold font-headline">{feature.title}</h3>
                    <p className="mt-2 text-muted-foreground">{feature.description}</p>
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
