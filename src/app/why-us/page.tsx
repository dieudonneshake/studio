import WhyUsSection from "@/components/landing/why-us";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function WhyUsPage() {
  return (
    <>
      <Header />
      <main>
        <WhyUsSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
