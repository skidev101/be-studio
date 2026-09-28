"use client";

import { useState } from "react";
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
import { navLinks } from "@/lib/nav";

export function Header() {
  const scrollToSection = useScrollToSection();
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 8);
  });

  const navItemClass =
    "relative text-sm font-medium tracking-tight text-slate-700 transition-colors hover:text-brand-ink after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-brand-ink/70 after:transition-all after:duration-300 hover:after:w-full focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

  const mobileItemClass =
    "group flex items-center justify-between text-3xl sm:text-4xl font-medium tracking-tight text-slate-900 transition-colors hover:text-brand-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring";

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
            <Link
              href="/"
              className="flex items-center rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <span className="relative block w-12 h-12 md:w-14 md:h-14 -ml-4">
                <Image
                  src="/logo_temp.png"
                  alt="BE Graphic Studio"
                  sizes="(max-width: 768px) 48px, 56px"
                  fill
                  className="object-contain"
                  priority
                />
              </span>
            </Link>

            <Separator
              orientation="vertical"
              className="hidden md:block bg-gray-300 data-[orientation=vertical]:h-6 -ml-2"
            />

            {/* Desktop Navigation */}
            <nav
              aria-label="Main"
              className="hidden md:flex items-center gap-8 lg:gap-10"
            >
              {navLinks.map((link) => {
                const onClick =
                  link.section || link.path === "/"
                    ? () => scrollToSection(link.section)
                    : undefined;

                return onClick ? (
                  <button
                    key={link.path}
                    type="button"
                    onClick={onClick}
                    className={cn(navItemClass, "hover:cursor-pointer")}
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link key={link.path} href={link.path} className={navItemClass}>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Desktop CTA + Mobile Trigger */}
          <div className="flex items-center gap-4">
            <BookCallButton text="Let's Talk" className="hidden md:inline-flex" />

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="md:hidden grid place-items-center size-11 -mr-2 rounded-lg text-slate-800 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                  aria-label="Open navigation menu"
                >
                  <Menu className="h-6 w-6" />
                </button>
              </SheetTrigger>

              <SheetContent
                side="right"
                showCloseButton={false}
                className={cn(
                  "w-full max-w-md sm:max-w-lg",
                  "bg-linear-to-b from-blue-50/70 to-white shadow-blue-100/70",
                  "p-0 h-dvh"
                )}
                aria-describedby={undefined}
              >
                <SheetTitle className="sr-only">Site navigation</SheetTitle>

                <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-5 bg-white/80 backdrop-blur-md border-b border-slate-100">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Menu
                  </span>

                  <SheetClose asChild>
                    <button
                      type="button"
                      aria-label="Close menu"
                      className="grid place-items-center size-11 -mr-2 rounded-full text-slate-700 transition-colors hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
                    >
                      <X size={20} />
                    </button>
                  </SheetClose>
                </div>

                <div className="h-[calc(100dvh-68px)] overflow-y-auto">
                  <div className="px-6 sm:px-10 pt-12 pb-20">
                    <nav aria-label="Mobile" className="flex flex-col gap-8 mb-16">
                      {navLinks.map((link) => {
                        const onClick =
                          link.section || link.path === "/"
                            ? () => scrollToSection(link.section)
                            : undefined;

                        const inner = (
                          <>
                            <span>{link.name}</span>
                            <ArrowRight
                              size={20}
                              className="opacity-0 -translate-x-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0"
                            />
                          </>
                        );

                        return (
                          <SheetClose asChild key={link.path}>
                            {onClick ? (
                              <button
                                type="button"
                                onClick={onClick}
                                className={cn(mobileItemClass, "text-left")}
                              >
                                {inner}
                              </button>
                            ) : (
                              <Link href={link.path} className={mobileItemClass}>
                                {inner}
                              </Link>
                            )}
                          </SheetClose>
                        );
                      })}
                    </nav>

                    <div className="space-y-10">
                      <div className="h-px bg-linear-to-r from-transparent via-slate-200 to-transparent" />

                      <div className="space-y-6">
                        <p className="text-base text-slate-600 leading-relaxed">
                          Ready to transform your brand?
                        </p>

                        <SheetClose asChild>
                          <BookCallButton text="Let's Talk" className="w-full" />
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
