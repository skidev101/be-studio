import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 flex flex-col gap-4 pr-0 lg:pr-8">
            <div className="flex items-center mb-2 -ml-3">
              <Link href="/" className="flex items-center">
                <div className="relative w-12 h-12 md:w-14 md:h-14 ">
                  <Image
                    src="/logo.png"
                    alt="Brand Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                {/* <p className="text-blue-accent font-semibold">BE</p> */}
              </Link>
              <h2 className="text-lg font-extrabold tracking-tight text-slate-900">
                BE_Graphic Studio
              </h2>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
              We are a full-service creative agency helping brands grow through
              strategy, design, and technology.
            </p>
            <div className="flex gap-4 mt-6 md:-mt-2">
              <Link href="https://facebook.com" target="_blank">
                <Image
                  src="/images/social/facebook.svg"
                  alt="LinkedIn"
                  width={22}
                  height={22}
                />
              </Link>
              <Link href="https://instagram.com" target="_blank">
                <Image
                  src="/images/social/instagram.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </Link>
              <Link href="https://x.com" target="_blank">
                <Image
                  src="/images/social/x.svg"
                  alt="Instagram"
                  width={22}
                  height={22}
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Services</h4>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Brand Strategy
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Web Design
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Content
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Marketing
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Company</h4>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Careers
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Contact
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Blog
            </a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-bold text-slate-900">Legal</h4>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm text-slate-500 hover:text-primary transition-colors"
              href="#"
            >
              Cookie Policy
            </a>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} BE_Graphic Studio. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <p className="text-slate-400 text-sm">Made with 💙 in Nigeria</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
