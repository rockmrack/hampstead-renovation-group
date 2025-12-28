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
  title: "Hampstead Renovations Group | The New Standard in Property",
  description: "Vertically integrated property ecosystem in North West London. From AI-powered planning intelligence to premium renovations. We don't just offer services. We offer certainty.",
  keywords: ["property renovation", "North West London", "Hampstead", "luxury renovations", "property development", "planning intelligence", "architects", "builders"],
  authors: [{ name: "Hampstead Renovations Group" }],
  openGraph: {
    title: "Hampstead Renovations Group | The New Standard in Property",
    description: "The most advanced property infrastructure in London",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
