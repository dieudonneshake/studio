import PortfolioSection from "@/components/landing/portfolio";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <div className="pt-12">
            <PortfolioSection />
        </div>
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
