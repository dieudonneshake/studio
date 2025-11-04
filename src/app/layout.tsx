import type { Metadata } from 'next';
import { Inter, Sora } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/providers/theme-provider';
import { Toaster } from '@/components/ui/toaster';
import { Button } from '@/components/ui/button';
import { MessageSquare } from 'lucide-react';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
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
    'best software development company',
    'best software company in Rwanda',
    'best software company in Africa',
    'top tech companies in Rwanda',
    'Kigali software agency',
    'custom software development Africa',
    'affordable software development Rwanda',
    'web development Kigali',
    'mobile app developers Rwanda'
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
        url: 'https://images.unsplash.com/photo-1555066931-4365d1469c98?w=1200&h=630&fit=crop&q=80',
        width: 1200,
        height: 630,
        alt: 'A screen with lines of code, representing software development.',
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
    images: ['https://images.unsplash.com/photo-1555066931-4365d1469c98?w=1200&h=630&fit=crop&q=80'],
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Sora:wght@400;500;700;800&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${sora.variable} font-body antialiased`}
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
