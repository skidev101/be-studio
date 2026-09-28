"use client";

import { cn } from "@/lib/utils";

const CALENDLY_URL = "https://calendly.com/skidev101/30min";

export function BookCallButton({
  className,
  text,
  children,
}: {
  className?: string;
  text?: string;
  children?: React.ReactNode;
}) {
  return (
    <a
      href={CALENDLY_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-brand-ink px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-brand-deep focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring",
        className
      )}
    >
      {text ?? "Book an appointment"}
      {children}
    </a>
  );
}
