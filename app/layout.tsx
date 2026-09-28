import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MotionProvider } from "@/components/MotionProvider";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://be-studio.vercel.app";

const description =
  "We are a full-service graphic design agency that help brands grow through strategy, design, and technology.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BE Graphic Studio",
    template: "%s | BE Graphic Studio",
  },
  description,
  openGraph: {
    title: "BE Graphic Studio",
    description,
    url: siteUrl,
    siteName: "BE Graphic Studio",
    images: [
      {
        url: "/og-image.png",
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
    description,
    images: ["/og-image.png"],
  },
  verification: {
    google: "WECliyj1I3fHhWuPogo0pEQ6lsYzKqFEnwe2XGFs_SU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${zalando.variable} ${poppins.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="antialiased selection:bg-brand/25 selection:text-ink">
        <MotionProvider>
          <Header />
          {/* Header is h-16, h-20 from sm up — the offset has to track it. */}
          <main className="mt-16 sm:mt-20">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
