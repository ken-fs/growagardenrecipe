import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "Grow a Garden Recipe Guide 2024 | Complete Cooking Database & Ingredient Combos",
  description:
    "Master Grow a Garden cooking with our complete recipe database! Find all 32+ recipes, ingredient combinations, rarity guides, and cooking times. Perfect for US gamers seeking the ultimate farming game guide.",
  keywords: [
    "Grow a Garden",
    "Grow a Garden recipes",
    "Grow a Garden cooking guide",
    "farming game recipes",
    "ingredient combinations",
    "cooking simulator",
    "garden game guide",
    "recipe database",
    "farming simulator",
    "cooking game",
  ],
  authors: [{ name: "Grow a Garden Recipe Guide" }],
  creator: "Grow a Garden Recipe Guide",
  publisher: "Grow a Garden Recipe Guide",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://growagardenrecipe.net",
    siteName: "Grow a Garden Recipe Guide",
    title: "Grow a Garden Recipe Guide 2024 | Complete Cooking Database",
    description:
      "Master Grow a Garden cooking with our complete recipe database! Find all 32+ recipes, ingredient combinations, and rarity guides.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Grow a Garden Recipe Guide - Complete Cooking Database",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow a Garden Recipe Guide 2024 | Complete Cooking Database",
    description:
      "Master Grow a Garden cooking with our complete recipe database! Find all 32+ recipes, ingredient combinations, and rarity guides.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://growagardenrecipe.net",
  },
  category: "Gaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
