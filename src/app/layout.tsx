import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { DemoProvider } from "@/context/DemoContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Laughter Yogi | Laughter Yoga & Mindful Wellness Education (Demo)",
  description:
    "Discover laughter yoga, mindful movement, and guided experiences designed to help you reconnect, find joy, and build meaningful connections.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${plusJakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-ivory text-ink">
        <DemoProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </DemoProvider>
      </body>
    </html>
  );
}
