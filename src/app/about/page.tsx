import AboutSection from "@/components/landing/about";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
