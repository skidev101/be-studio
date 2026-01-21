"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ArrowRight, Menu, X } from "lucide-react";
import { BookCallButton } from "./BookCallButton";
import { useScrollToSection } from "@/hooks/scroll-to-section";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "#services" },
  { name: "Approach", path: "#approach" },
  { name: "Contact", path: "/contact" },
  { name: "FAQ", path: "#faq" },
];

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-400",
        isScrolled
          ? "bg-white/90 backdrop-blur-lg border-b border-slate-200/70 shadow-sm"
          : "bg-white"
      )}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-20 items-center justify-between">
          {/* Logo + Desktop Nav */}
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 md:w-14 md:h-14 -ml-4">
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

            <Separator
              orientation="vertical"
              className="hidden md:block bg-gray-300 data-[orientation=vertical]:h-6 -ml-2"
            />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 lg:gap-10">
              {navLinks.map((link) => {
                const isHash = link.path.startsWith("#");
                const isHome = link.path === "/";

                if (isHash || isHome) {
                  return (
                    <button
                      key={link.path}
                      onClick={() => scrollToSection(isHash ? link.path.slice(1) : undefined)} // remove #
                      className={cn(
                        "relative text-sm font-medium tracking-tight text-slate-700 hover:text-blue-accent hover:cursor-pointer",
                        "transition-colors after:absolute after:-bottom-1",
                        "after:left-0 after:h-[2px] after:w-0 after:bg-blue-accent/70",
                        "after:transition-all after:duration-300 hover:after:w-full"
                      )}
                    >
                      {link.name}
                    </button>
                  );
                } else {
                  return (
                    <Link
                      key={link.path}
                      href={link.path}
                      className={cn(
                        "relative text-sm font-medium tracking-tight text-slate-700 hover:text-blue-accent",
                        "transition-colors after:absolute after:-bottom-1",
                        "after:left-0 after:h-[2px] after:w-0 after:bg-blue-accent/70",
                        "after:transition-all after:duration-300 hover:after:w-full"
                      )}
                    >
                      {link.name}
                    </Link>
                  );
                }
              })}
            </nav>
          </div>

          {/* Desktop CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <BookCallButton text="Let's Talk" className="hidden md:flex" />
            {/* <Button
              onClick={openCalendly}
              size="sm"
              className="hidden md:flex bg-[#1F4FD8] text-white rounded-full hover:bg-[#1a42b8] px-4 py-3 hover:px-5 transition-all"
              asChild
            >
              <Link href="#contact">
                Get in Touch <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </Button> */}

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  className="md:hidden p-2 -mr-2 rounded-lg hover:bg-slate-100 transition-colors"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6 text-slate-800" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className={cn(
                  "w-full max-w-md sm:max-w-lg",
                  "bg-linear-to-b from-blue-50/70 to-white shadow-blue-100/70",
                  "p-0 h-dvh"
                )}
                aria-describedby={undefined}
              >
                <SheetTitle className="hidden"></SheetTitle>
                <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-white/80 backdrop-blur-md border-b border-slate-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Menu
                  </span>

                  <SheetClose asChild>
                    <button
                      aria-label="Close menu"
                      className="p-2 -mr-2 rounded-full"
                    >
                      <X size={20} className="text-slate-700" />
                    </button>
                  </SheetClose>
                </div>

                <div className="h-[calc(100dvh-68px)] overflow-y-auto scrollbar-thin">
                  <div className="px-6 sm:px-10 pt-12 pb-20">
                    <nav className="flex flex-col gap-8 mb-16">
                      {navLinks.map((link) => {
                        const isHash = link.path.startsWith("#");
                        const isHome = link.path === "/";

                        if (isHash || isHome) {
                          return (
                            <SheetClose asChild key={link.path}>
                              <button
                                onClick={() =>
                                  scrollToSection(isHash ? link.path.slice(1) : undefined)
                                }
                                className="group flex items-center justify-between text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 transition-all duration-300 hover:text-blue-700"
                              >
                                <span>{link.name}</span>
                                <ArrowRight
                                  size={20}
                                  className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                />
                              </button>
                            </SheetClose>
                          );
                        } else {
                          return (
                            <SheetClose asChild key={link.path}>
                              <Link
                                href={link.path}
                                className="group flex items-center justify-between text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 transition-all duration-300 hover:text-blue-700"
                              >
                                <span>{link.name}</span>
                                <ArrowRight
                                  size={20}
                                  className="opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                                />
                              </Link>
                            </SheetClose>
                          );
                        }
                      })}
                    </nav>

                    <div className="space-y-10">
                      <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

                      <div className="space-y-6">
                        <p className="text-base text-slate-600 leading-relaxed">
                          Ready to transform your brand?
                        </p>

                        <SheetClose asChild className="w-full">
                          <BookCallButton text="Let's Talk" />
                        </SheetClose>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
