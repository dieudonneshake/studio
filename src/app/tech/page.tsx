import TechStackSection from "@/components/landing/tech-stack";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function TechPage() {
  return (
    <>
      <Header />
      <main>
        <TechStackSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
