"use client";

import { usePathname, useRouter } from "next/navigation";

export function useScrollToSection() {
  const router = useRouter();
  const pathname = usePathname();

  return (id: string) => {
    if (pathname !== "/") {
      // Navigate to home first
      router.push("/");

      // Wait for page to render, then scroll
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };
}
