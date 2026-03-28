import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hampstead Renovations Group | The Operating System for NW London Property",
    template: "%s | Hampstead Renovations Group",
  },
  description:
    "Vertically integrated property ecosystem in North West London. RIBA architects, structural engineers, builders, and AI intelligence tools — under one roof. 020 8054 8756.",
  keywords: [
    "Hampstead Renovations Group",
    "property renovation Hampstead",
    "RIBA architects NW London",
    "builders Hampstead",
    "property maintenance NW3",
    "planning intelligence",
    "heritage architects London",
    "structural engineers Hampstead",
    "loft conversion Hampstead",
    "house extension NW London",
  ],
  authors: [{ name: "Hampstead Renovations Group" }],
  creator: "Hampstead Renovations Group",
  publisher: "Hampstead Renovations Group",
  metadataBase: new URL("https://hampsteadrenovationsgroup.co.uk"),
  openGraph: {
    title: "Hampstead Renovations Group | The Operating System for NW London Property",
    description:
      "Architects, engineers, builders, and AI — vertically integrated under one roof. The most advanced property infrastructure in London.",
    type: "website",
    locale: "en_GB",
    siteName: "Hampstead Renovations Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hampstead Renovations Group",
    description: "The operating system for North West London property.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "a138cf5367948ed3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://hampsteadrenovationsgroup.co.uk" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Hampstead Renovations Group",
              legalName: "Hampstead Renovations Ltd",
              url: "https://hampsteadrenovationsgroup.co.uk",
              telephone: "020 8054 8756",
              email: "contact@hampsteadrenovations.co.uk",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Unit 3, Palace Court, 250 Finchley Road",
                addressLocality: "Hampstead",
                addressRegion: "London",
                postalCode: "NW3 6DN",
                addressCountry: "GB",
              },
              description:
                "Vertically integrated property ecosystem. RIBA architects, structural engineers, builders, and AI tools.",
              foundingDate: "2024",
              numberOfEmployees: {
                "@type": "QuantitativeValue",
                value: "10-50",
              },
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
