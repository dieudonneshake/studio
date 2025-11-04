import ContactSection from "@/components/landing/contact";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <ContactSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
