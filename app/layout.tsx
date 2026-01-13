import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const zalando = localFont({
  src: "../fonts/ZalandoSansExpanded.ttf",
  weight: "500",
  style: "normal",

  variable: "--font-zalando",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BE_Graphics Studio",
  description:
    " We are a full-service graphic design agency that help brands grow through strategy, design, and technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${zalando.variable} antialiased`}>
        <Header />
        <main className="mt-18 md:mt-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
