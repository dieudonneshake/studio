import WhyUsSection from "@/components/landing/why-us";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import { Handshake, Smile } from "lucide-react";
import PageHeader from "@/components/layout/page-header";


export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
            title="Why Choose Us?"
            description="Your trusted partner for premium digital solutions."
            backgroundImage="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHw3fHx0ZWNobm9sb2d5fGVufDB8fHx8fDE3MDc0MjQ4ODZ8MA&ixlib=rb-4.0.3&q=80&w=1920"
        />
        <WhyUsSection />
         <section className="bg-muted/50 rounded-lg">
            <div className="container text-center">
                 <h2 className="font-headline text-3xl font-bold tracking-tight text-primary sm:text-4xl">Our Commitment to You</h2>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Our relationship with clients is a partnership built on trust and a shared goal of success.
                </p>
                 <div className="mt-12 grid gap-8 sm:grid-cols-1 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-primary">
                            <Handshake className="h-10 w-10" />
                        </div>
                        <h3 className="text-lg font-semibold font-headline">Collaborative Partnership</h3>
                        <p className="mt-2 text-muted-foreground">We work with you, not just for you. Your insights are invaluable, and we maintain transparent communication throughout the project lifecycle to ensure the final product is a true reflection of your vision.</p>
                    </div>
                     <div className="flex flex-col items-center text-center">
                        <div className="mb-4 text-primary">
                            <Smile className="h-10 w-10" />
                        </div>
                        <h3 className="text-lg font-semibold font-headline">Client Satisfaction Guarantee</h3>
                        <p className="mt-2 text-muted-foreground">We are not happy until you are. Our process includes rigorous quality assurance and user testing, and we provide post-launch support to ensure your complete satisfaction and long-term success.</p>
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
