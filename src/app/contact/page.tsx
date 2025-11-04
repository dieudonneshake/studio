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
        <section className="py-0 -mt-16 md:-mt-24 relative z-0">
            <div className="container">
                <div className="aspect-video overflow-hidden rounded-lg">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.587799516362!2d30.10185807496695!3d-1.916779398055601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca11c010d96fb%3A0x1d408f3a3d526715!2sKG%2031%20Ave%2C%20Kigali!5e0!3m2!1sen!2srw!4v1688636735878!5m2!1sen!2srw"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={false}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Our Office Location"
                    ></iframe>
                </div>
            </div>
        </section>
        <TrustedBySection />
      </main>
      <Footer />
    </>
  );
}
