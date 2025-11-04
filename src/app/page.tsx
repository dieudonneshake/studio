import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/landing/hero';
import TrustedBySection from '@/components/landing/trusted-by';
import ScrollAnimate from '@/components/ui/scroll-animate';
import { AnimatedBlobs } from '@/components/landing/animated-blobs';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="relative">
          <AnimatedBlobs />
          <ScrollAnimate>
            <TrustedBySection />
          </ScrollAnimate>
        </div>
      </main>
      <Footer />
    </div>
  );
}
