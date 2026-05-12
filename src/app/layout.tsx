import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppCTA from "@/components/WhatsAppCTA";

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "UBJ Houseboats | Premium Kerala Backwater Experience in Alappuzha",
  description: "Experience slow living on the Kerala backwaters. UBJ Houseboats offers premium, family-run, private houseboat stays in Alappuzha with authentic hospitality.",
  keywords: ["luxury houseboat alleppey", "premium houseboat Kerala", "private houseboat Alappuzha", "family houseboat Kerala", "Kerala backwater stay", "UBJ houseboats"],
  openGraph: {
    title: "UBJ Houseboats | Premium Kerala Backwater Experience",
    description: "Experience slow living on the Kerala backwaters. UBJ Houseboats offers premium, family-run, private houseboat stays in Alappuzha.",
    url: "https://ubjhouseboats.com",
    siteName: "UBJ Houseboats",
    images: [
      {
        url: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1200&auto=format&fit=crop", // Recommended OG image replacement
        width: 1200,
        height: 630,
        alt: "UBJ Houseboat on Kerala Backwaters",
      },
    ],
    locale: "en_US",
    type: "website",
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
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased min-h-screen flex flex-col relative`}>
        <Navigation />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
