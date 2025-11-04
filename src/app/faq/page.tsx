import FaqSection from "@/components/landing/faq";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <FaqSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
