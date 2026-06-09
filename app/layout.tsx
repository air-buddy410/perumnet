import type { Metadata, Viewport } from "next";
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
  title: "PerumNet | Internet Fiber Optic Cepat & Stabil",
  description:
    "PerumNet menyediakan layanan internet fiber optic cepat, stabil, dan terpercaya untuk kebutuhan rumah, bisnis, dan komunitas. Hubungi kami untuk pemasangan internet sekarang.",
  keywords: [
    "PerumNet",
    "Internet Fiber Optic",
    "Internet Rumah",
    "Internet Bisnis",
    "Provider Internet",
    "ISP Bali",
    "Internet Bali",
    "Internet Karangasem",
    "Internet Kubu",
    "Internet Tianyar",
    "Wifi Rumah",
    "Wifi Kantor",
  ],
  authors: [
    {
      name: "PerumNet",
    },
  ],
  openGraph: {
    title: "PerumNet | Internet Fiber Optic Cepat & Stabil",
    description:
      "Internet fiber optic cepat, stabil, dan terpercaya untuk rumah dan bisnis.",
    images: [
      {
        url: "/images/perumnet-logo.png",
        width: 1200,
        height: 630,
        alt: "PerumNet Internet Fiber Optic",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
