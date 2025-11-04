import PortfolioSection from "@/components/landing/portfolio";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import TrustedBySection from "@/components/landing/trusted-by";
import PageHeader from "@/components/layout/page-header";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <PageHeader
            title="Our Work"
            description="A glimpse into the digital experiences we've crafted."
        />
        <div className="pt-12">
            <PortfolioSection />
        </div>
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
