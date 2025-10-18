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
  title: "Harmony Association for Youth | HAY",
  description:
    "501C(3) non-profit organization based in Washington designated to provide an avenue for more opportunities and activities to youths to aid their development of talent and skill in areas including performance, art, and academics, with the intention of fostering a community which encourages youths to take initiative in pursuing such endeavors.",
  keywords: [
    "youth development",
    "non-profit",
    "Washington",
    "youth programs",
    "performance arts",
    "academic enrichment",
    "community",
    "youth activities",
    "talent development",
    "HAY",
  ],
  authors: [{ name: "Harmony Association for Youth" }],
  creator: "Harmony Association for Youth",
  publisher: "Harmony Association for Youth",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hayyouth.org",
    siteName: "Harmony Association for Youth",
    title: "Harmony Association for Youth | HAY",
    description:
      "501C(3) non-profit organization empowering youth through performance, art, and academic programs in Washington.",
    images: [
      {
        url: "/HayBlueLogo.png",
        width: 1200,
        height: 630,
        alt: "Harmony Association for Youth Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmony Association for Youth | HAY",
    description:
      "501C(3) non-profit organization empowering youth through performance, art, and academic programs in Washington.",
    images: ["/HayBlueLogo.png"],
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
