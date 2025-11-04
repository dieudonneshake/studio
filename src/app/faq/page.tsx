import FaqSection from "@/components/landing/faq";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import PageHeader from "@/components/layout/page-header";

export default function FaqPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
          title="Frequently Asked Questions"
          description="Have questions? We have answers. Here are some common things clients ask us."
        />
        <FaqSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
