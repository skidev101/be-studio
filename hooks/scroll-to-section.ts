"use client";

import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";

const MAX_WAIT_MS = 1500;

/**
 * Scrolls to a home-page section, navigating home first when needed.
 *
 * The destination section does not exist on the first frame after a client-side
 * navigation, so this retries on rAF rather than guessing a fixed delay — the
 * previous setTimeout(100) silently did nothing whenever the page had not
 * painted by then.
 */
export function useScrollToSection() {
  const router = useRouter();
  const pathname = usePathname();

  return useCallback(
    (id?: string) => {
      const scrollTo = () => {
        if (!id) {
          window.scrollTo({ top: 0, behavior: "smooth" });
          return true;
        }
        const element = document.getElementById(id);
        if (!element) return false;
        element.scrollIntoView({ behavior: "smooth" });
        return true;
      };

      if (pathname === "/") {
        scrollTo();
        return;
      }

      router.push("/");

      const startedAt = performance.now();
      const attempt = () => {
        if (scrollTo()) return;
        if (performance.now() - startedAt > MAX_WAIT_MS) return;
        requestAnimationFrame(attempt);
      };
      requestAnimationFrame(attempt);
    },
    [pathname, router]
  );
}
