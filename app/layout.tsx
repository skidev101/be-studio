import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Script from "next/script";

const zalando = localFont({
  src: "../fonts/ZalandoSansExpanded.ttf",
  weight: "500",
  style: "normal",

  variable: "--font-zalando",
  display: "swap",
});

const poppins = localFont({
  src: "../fonts/Poppins-Regular.ttf",
  weight: "500",
  style: "normal",

  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BE_Graphic Studio",
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
      <head>
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${zalando.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main className="mt-18 md:mt-20">{children}</main>

        <Footer />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
