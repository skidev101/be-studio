import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E7EB] py-20">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* CTA Section */}
        <div className="max-w-md">
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1C2D] tracking-tight">
            Ready to grow your brand?
          </h3>
          <p className="mt-4 text-[#4B5C73] leading-relaxed">
            Let’s build a strategy that transforms your brand and drives results.
          </p>
          <Button className="mt-6 bg-[#1F4FD8] text-white hover:bg-[#1a42b8]">
            Get in Touch
          </Button>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mt-10 md:mt-0">
          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-[#0B1C2D]/75 tracking-[0.01em]">
              Company
            </h4>
            <Link href="/about" className="text-sm text-[#4B5C73] hover:text-[#0B1C2D]">About</Link>
            <Link href="/services" className="text-sm text-[#4B5C73] hover:text-[#0B1C2D]">Services</Link>
            <Link href="/contact" className="text-sm text-[#4B5C73] hover:text-[#0B1C2D]">Contact</Link>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-sm font-medium text-[#0B1C2D]/75 tracking-[0.01em]">Legal</h4>
            <Link href="/privacy" className="text-sm text-[#4B5C73] hover:text-[#0B1C2D]">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-[#4B5C73] hover:text-[#0B1C2D]">Terms of Service</Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <Link href="https://facebook.com" target="_blank">
              <Image src="/images/social/facebook.svg" alt="LinkedIn" width={24} height={24} />
            </Link>
            <Link href="https://instagram.com" target="_blank">
              <Image src="/images/social/instagram.svg" alt="Instagram" width={24} height={24} />
            </Link>
            <Link href="https://x.com" target="_blank">
              <Image src="/images/social/x.svg" alt="Instagram" width={24} height={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-16 border-t border-[#E5E7EB] pt-6 text-center text-sm text-[#9CA3AF]">
        &copy; {new Date().getFullYear()} BE Studios. All rights reserved.
      </div>
    </footer>
  );
};
