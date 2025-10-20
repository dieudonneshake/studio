import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: 'THE SEMICOLON | Premium Software & Digital Solutions',
  description:
    'THE SEMICOLON is a premium software and digital solutions agency under Mastery Hub of Rwanda, offering web & mobile development, UI/UX design, and more.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} font-body antialiased`}
      >
        <ThemeProvider>
          {children}
          <Toaster />
          <a href="#contact" className="fixed bottom-6 right-6 z-50">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/40 flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                <span className="hidden sm:inline">Request a Service</span>
            </Button>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
