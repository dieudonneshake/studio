import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero';
import TrustedBySection from '@/components/landing/trusted-by';
import ScrollAnimate from '@/components/ui/scroll-animate';
import { AnimatedBlobs } from '@/components/landing/animated-blobs';
import ServicesSection from '@/components/landing/services';
import WhyUsSection from '@/components/landing/why-us';
import ProcessSection from '@/components/landing/process';
import TechStackSection from '@/components/landing/tech-stack';
import PortfolioSection from '@/components/landing/portfolio';
import TestimonialsSection from '@/components/landing/testimonials';
import FaqSection from '@/components/landing/faq';
import ContactSection from '@/components/landing/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative">
          <AnimatedBlobs />
          <ScrollAnimate>
            <ServicesSection />
          </ScrollAnimate>
          <ScrollAnimate>
            <WhyUsSection />
          </ScrollAnimate>
          <ScrollAnimate>
            <ProcessSection />
          </ScrollAnimate>
           <ScrollAnimate>
            <TechStackSection />
          </ScrollAnimate>
          <ScrollAnimate>
            <PortfolioSection />
          </ScrollAnimate>
           <ScrollAnimate>
            <TestimonialsSection />
          </ScrollAnimate>
          <ScrollAnimate>
             <FaqSection />
          </ScrollAnimate>
          <ScrollAnimate>
            <ContactSection />
          </ScrollAnimate>
          <ScrollAnimate>
            <TrustedBySection />
          </ScrollAnimate>
        </div>
      </main>
      <Footer />
    </div>
  );
}
