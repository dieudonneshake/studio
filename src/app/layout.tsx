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

const siteUrl = 'https://the-semicolon.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'THE SEMICOLON | Premium Software, Web & Digital Solutions Agency',
  description:
    'THE SEMICOLON is a premium software and digital solutions agency in Rwanda, offering custom web development, mobile app development, UI/UX design, and branding. We are part of Mastery Hub.',
  keywords: [
    'THE SEMICOLON',
    'THE SEMICOLON agency',
    'semicolon agency',
    'software development Rwanda',
    'web design agency',
    'mobile app development',
    'UI/UX design',
    'digital solutions',
    'Mastery Hub Rwanda',
    'tech company Kigali',
    'premium software solutions',
    'e-commerce development',
    'branding agency',
  ],
  authors: [{ name: 'THE SEMICOLON', url: siteUrl }],
  creator: 'THE SEMICOLON',
  publisher: 'THE SEMICOLON',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'THE SEMICOLON | Premium Software, Web & Digital Solutions Agency',
    description:
      'We build beautiful, scalable, and secure digital experiences. Partner with a leading software agency in Rwanda for your next project.',
    url: siteUrl,
    siteName: 'THE SEMICOLON',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwaG9uJTIwZGFzaGJvYXJkfGVufDB8fHx8fDE3MjI1ODk3OTR8MA&ixlib=rb-4.1.0&q=80&w=1200', // Data Analytics Dashboard Image
        width: 1200,
        height: 630,
        alt: 'A modern data analytics dashboard on a screen.',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'THE SEMICOLON | Premium Digital Solutions',
    description: 'From stunning websites to powerful mobile apps, THE SEMICOLON delivers excellence in every line of code.',
    creator: '@TheSemicolon',
    images: ['https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwyfHxwaG9uJTIwZGFzaGJvYXJkfGVufDB8fHx8fDE3MjI1ODk3OTR8MA&ixlib=rb-4.1.0&q=80&w=1200'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/40 flex items-center gap-2 liquid-button">
                <MessageSquare className="h-5 w-5" />
                <span className="hidden sm:inline">get yours</span>
                <span className="liquid-blob"></span>
                <span className="liquid-blob"></span>
            </Button>
          </a>
        </ThemeProvider>
      </body>
    </html>
  );
}
