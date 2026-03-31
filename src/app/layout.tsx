import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Confidents Paintless Dent Removal | Denver Metro & Colorado Springs",
  description:
    "Denver Metro's premier paintless dent removal service. Serving Castle Rock, Littleton, Parker, Aurora, Lone Tree & Colorado Springs. Free estimates, lifetime warranty, insurance approved.",
  keywords:
    "paintless dent removal, PDR, dent repair, hail damage repair, Denver, Castle Rock, Littleton, Parker, Aurora, Lone Tree, Colorado Springs, door ding repair",
  openGraph: {
    title: "Confidents Paintless Dent Removal",
    description:
      "Denver Metro's premier paintless dent removal. Free estimates & lifetime warranty.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} antialiased`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  );
}
