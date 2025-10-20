import { ContactForm } from './contact-form';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="container">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project in mind? We'd love to hear from you.
        </p>
      </div>
      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-8">
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">Send us an email for inquiries.</p>
              <a href="mailto:info@masteryhub.co.rw" className="mt-1 block text-primary hover:underline">
                info@masteryhub.co.rw
              </a>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone</h3>
              <p className="text-muted-foreground">Give us a call during business hours.</p>
              <p className="mt-1 text-primary">[Placeholder Phone Number]</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Location</h3>
              <p className="text-muted-foreground">Visit our office.</p>
              <p className="mt-1 text-primary">[Placeholder Address, Kigali, Rwanda]</p>
            </div>
          </div>
        </div>
        <div className="rounded-lg border bg-card p-8 shadow-lg bg-card/80 backdrop-blur-sm border-border/60">
            <ContactForm />
        </div>
      </div>
    </section>
  );
}
