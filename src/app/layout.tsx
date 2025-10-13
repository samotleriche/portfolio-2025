import type { Metadata } from "next";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.scss";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tomas Leriche | Home",
  description:
    "Tomas Leriche is a software engineer and motion designer currently based in Santa Monica, California.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-5PM3BSLG" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} relative antialiased`}
      >
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}
