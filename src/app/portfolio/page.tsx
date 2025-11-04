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
            backgroundImage="https://images.unsplash.com/photo-1555066931-4365d1469c98?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHwzfHxjb2RlfGVufDB8fHx8fDE3MDc0MjUyMjR8MA&ixlib=rb-4.0.3&q=80&w=1920"
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
