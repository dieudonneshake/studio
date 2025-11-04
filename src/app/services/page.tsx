import ServicesSection from "@/components/landing/services";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <ServicesSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
