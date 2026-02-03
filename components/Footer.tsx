"use client";

import Link from "next/link";
import Image from "next/image";
import { scrollToSection } from "@/utils/scroll-to-section";
import { cn } from "@/lib/utils";

export const Footer = () => {
  const BASE_URL = "https://be-studio.vercel.app";

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "#services" },
    { name: "Approach", path: "#approach" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "#faq" },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <div className="flex items-center mb-2 -ml-3">
              <Link href="/" className="flex items-center">
                <div className="relative w-12 h-12 md:w-14 md:h-14 ">
                  <Image
                    src="/logo_temp.png"
                    alt="Brand Logo"
                    sizes="10"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* <p className="text-blue-accent font-semibold">BE</p> */}
              </Link>
              <h2 className="font-heading text-lg font-extrabold tracking-tight text-slate-900">
                BE Graphic Studio
              </h2>
            </div>
            <p className="-mt-4 text-slate-500 text-sm leading-relaxed max-w-xs">
              We are a full-service creative agency helping brands grow through
              strategy, design, and technology.
            </p>
            <div className="flex gap-4 mt-6 md:mt-4">
              <a href="https://www.linkedin.com/company/be-graphic-studio/" target="_blank">
                <svg width="22px" height="22px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn icon</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              {/* <a href="https://instagram.com" target="_blank">
                <Image
                  src="/images/social/instagram.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </a>
              <a href="https://x.com" target="_blank">
                <Image
                  src="/images/social/x.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </a> */}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Services</h4>
            <Link
              className="text-sm text-slate-500 hover:text-primary transition-colors max-w-max"
              href={`${BASE_URL}/brand-analysis`}
            >
              Brand Analysis
            </Link>
            <Link
              className="text-sm text-slate-500 hover:text-primary transition-colors max-w-max"
              href={`${BASE_URL}/business-branding-packages`}
            >
              Business Branding
            </Link>
            <Link
              className="text-sm text-slate-500 hover:text-primary transition-colors max-w-max"
              href={`${BASE_URL}/marketing-digital-assets`}
            >
              Marketing Assets
            </Link>
            <Link
              className="text-sm text-slate-500 hover:text-primary transition-colors max-w-max"
              href={`${BASE_URL}/print-brand-collateral`}
            >
              Print & Physical Collateral
            </Link>
            <Link
              className="text-sm text-slate-500 hover:text-primary transition-colors max-w-max"
              href={`${BASE_URL}/custom-design-solutions`}
            >
              Custom Design
            </Link>
          </div>
          <div className="flex flex-col gap-4 text-left">
            <h4 className="font-bold text-slate-900">Company</h4>
            {navLinks.map((link: any) => {
              const isHash = link.path.startsWith("#");
              const isHome = link.path === "/";

              if (isHash || isHome) {
                return (
                  <button
                    key={link.path}
                    onClick={() =>
                      scrollToSection(isHash ? link.path.slice(1) : undefined)
                    } // remove #
                    className="relative text-sm text-left max-w-max font-medium tracking-tight text-slate-700 hover:text-primary hover:cursor-pointer"
                    
                  >
                    {link.name}
                  </button>
                );
              } else {
                return (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="relative text-sm text-left max-w-max font-medium tracking-tight text-slate-700 hover:text-primary"
                    
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Legal</h4>

            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="font-heading text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} BE Graphic Studio.j All rights
            reserved.
          </p>
          <div className="flex gap-1">
            <p className="text-slate-400 text-sm">Designed and Developed by</p>
            <a href="https://github.com/skidev101" target="_blank" rel="noopener noreferrer" className="hover:text-blue-accent text-slate-400 text-sm">Monaski</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
