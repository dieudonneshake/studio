import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero';
import ServicesSection from '@/components/landing/services';
import WhyUsSection from '@/components/landing/why-us';
import PortfolioSection from '@/components/landing/portfolio';
import TestimonialsSection from '@/components/landing/testimonials';
import AboutSection from '@/components/landing/about';
import ContactSection from '@/components/landing/contact';
import ScrollAnimate from '@/components/ui/scroll-animate';
import ProcessSection from '@/components/landing/process';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
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
          <PortfolioSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <TestimonialsSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <AboutSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <ContactSection />
        </ScrollAnimate>
      </main>
      <Footer />
    </div>
  );
}
