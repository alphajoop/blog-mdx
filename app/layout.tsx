import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import React from 'react';
import { ThemeProvider } from '@/context/theme-provider';
import { baseUrl } from '@/app/sitemap';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Blog Technologique d'Alpha Diop",
    template: '%s | Blog Tech Innovation',
  },
  description:
    'Exploration des dernières tendances en développement web, technologies émergentes et insights du monde tech par Alpha Diop.',
  authors: [{ name: 'Alpha Diop' }],
  creator: 'Alpha Diop',
  publisher: 'Alpha Diop',
  keywords: [
    'développement web',
    'technologies émergentes',
    'tutoriels tech',
    'innovation technologique',
    'next.js',
    'react',
    'typescript',
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: baseUrl,
    title: "Blog Technologique d'Alpha Diop",
    description:
      'Exploration des dernières tendances en développement web, technologies émergentes et insights du monde tech.',
    siteName: 'Blog Tech Innovation',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Blog Tech Innovation - Alpha Diop',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Blog Technologique d'Alpha Diop",
    description:
      'Exploration des dernières tendances en développement web, technologies émergentes et insights du monde tech.',
    images: ['/images/og-image.jpg'],
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
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-geistsans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
