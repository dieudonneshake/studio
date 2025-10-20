import { Github, Twitter, Linkedin } from 'lucide-react';

const footerLinks = [
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur-sm supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-4 py-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} THE SEMICOLON — A Subsidiary of Mastery Hub of Rwanda.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {footerLinks.map(link => (
                <a key={link.label} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {link.label}
                </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
