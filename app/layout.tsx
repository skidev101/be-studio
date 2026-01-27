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
  title: "BE Graphic Studio",
  description:
    " We are a full-service graphic design agency that help brands grow through strategy, design, and technology.",
  openGraph: {
    title: "BE Graphic studio",
    description:
      " We are a full-service graphic design agency that help brands grow through strategy, design, and technology.",
    url: "https://be-studio.vercel.app",
    siteName: "BE Graphic Studio",
    images: [
      {
        url: "https://be-studio.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "BE Graphic Studio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BE Graphic Studio",
    description:
      " We are a full-service graphic design agency that help brands grow through strategy, design, and technology.",
    images: ["https://be-studio.vercel.app/og-image.png"],
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
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
      </head>
      <body className={`${zalando.variable} ${poppins.variable} antialiased`}>
        <Header />
        <main className="mt-16 md:mt-20">{children}</main>

        <Footer />

        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
