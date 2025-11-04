"use client";

import { useState, useEffect } from "react";
import { usePathname } from 'next/navigation';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/why-us", label: "Why Us" },
  { href: "/process", label: "Process" },
  { href: "/tech", label: "Tech" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      hasScrolled ? "border-b border-border/40 bg-background/80 backdrop-blur-lg supports-[backdrop-filter]:bg-background/60" : "bg-transparent"
    )}>
      <div className="container flex h-20 items-center">
        <div className="mr-4 flex">
          <a href="/" className="mr-6 flex items-center space-x-2">
            <Image 
              src="/_._20250504_153354_0000.png" // You can replace this with the path to your logo
              alt="THE SEMICOLON Logo" 
              width={32} 
              height={32} 
            />
            <span className="font-bold sm:inline-block font-headline tracking-wider text-xl">
              THE SEMICOLON
            </span>
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn("nav-link transition-colors hover:text-foreground/80 text-foreground/60",
                { 'active text-primary': pathname === link.href }
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <ThemeToggle />
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                  <SheetDescription className="sr-only">Main navigation links for the website.</SheetDescription>
                </SheetHeader>
                <div className="flex flex-col space-y-4 pt-6">
                  <a href="/" className="mr-6 flex items-center space-x-2" onClick={() => setSheetOpen(false)}>
                     <Image 
                      src="/logo.png" // You can replace this with the path to your logo
                      alt="THE SEMICOLON Logo" 
                      width={32} 
                      height={32} 
                    />
                    <span className="font-bold font-headline tracking-wider text-lg">
                      THE SEMICOLON
                    </span>
                  </a>
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className={cn("text-lg font-medium transition-colors hover:text-foreground/80 text-foreground/60",
                        { 'text-primary': pathname === link.href }
                      )}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
