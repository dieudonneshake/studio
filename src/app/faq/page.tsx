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
          backgroundImage="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNjAzNTV8MHwxfHNlYXJjaHwyfHxhYnN0cmFjdCUyMGJhY2tncm91bmR8ZW58MHx8fHx8MTcwNzQyNTA4OXww&ixlib=rb-4.0.3&q=80&w=1920"
        />
        <FaqSection />
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
