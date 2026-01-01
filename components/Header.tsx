"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "FAQ", path: "/faq" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all",
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-[#0B1C2D]/10"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-18 items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Logo */}
            <Link
              href="/"
              className="text-[15px] font-semibold tracking-tight text-[#0B1C2D]"
            >
              BE Studios
            </Link>

            <Separator
              orientation="vertical"
              className="bg-gray-300 data-[orientation=vertical]:h-6"
            />

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-sm font-medium tracking-[0.01em] text-[#0B1C2D]/75 hover:text-[#0B1C2D] transition-all"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Button
              size="sm"
              className="bg-[#1F4FD8] text-white rounded-full hover:bg-[#1a42b8] px-4 hover:px-5 transition-all"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="md:hidden text-sm font-medium text-[#0B1C2D]"
                aria-label="Open menu"
              >
                Menu
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-[320px] bg-white pt-20">
              <nav className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="text-lg font-medium text-[#0B1C2D] tracking-tight"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-12">
                <Button className="w-full bg-[#1F4FD8] text-white hover:bg-[#1a42b8]">
                  Contact
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
