"use client";

import { usePathname, useRouter } from "next/navigation";

export function useScrollToSection() {
  const router = useRouter();
  const pathname = usePathname();

  return (id?: string) => {
    if (pathname !== "/") {
      // Navigate home first
      router.push("/");

      setTimeout(() => {
        if (id) {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }, 100);
    } else {
      // Already on home page
      if (id) {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
}
