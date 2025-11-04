import ProcessSection from "@/components/landing/process";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function ProcessPage() {
  return (
    <>
      <Header />
      <main>
        <ProcessSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
