import type { Metadata, Viewport } from "next";
import { Figtree, Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-montserrat',
})

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '700']
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pathixo.com'),
  title: "Pathixo - Web Development, Android & SEO Services",
  description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services to help your business grow online.",
  keywords: [
    "web development",
    "android app development",
    "SEO optimization",
    "IT services",
    "digital solutions",
    "mobile apps",
    "website design",
    "search engine optimization"
  ],
  authors: [{ name: "Pathixo" }],
  creator: "Pathixo",
  publisher: "Pathixo",
  manifest: '/site.webmanifest',
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: 'https://pathixo.com',
    title: "Pathixo - Web Development, Android & SEO Services",
    description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services to help your business grow online.",
    siteName: "Pathixo",
    images: [{
      url: '/image.png',
      width: 800,
      height: 600,
      alt: 'Pathixo Logo',
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pathixo - Web Development, Android & SEO Services",
    description: "Pathixo delivers comprehensive IT solutions including web development, Android app development, and SEO optimization services.",
    creator: "@pathixo",
    images: ['/image.png'],
  },

  verification: {
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${figtree.className} ${poppins.variable} ${montserrat.variable} bg-[#060016] text-white min-h-screen max-w-screen overflow-x-hidden`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
