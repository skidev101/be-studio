import type { Metadata } from "next";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Tell us about your business and what you need. We'll suggest the most useful next step — including if that is nothing yet.",
  openGraph: {
    title: "Contact",
    description:
      "Tell us about your business and what you need. We'll suggest the most useful next step — including if that is nothing yet.",
    url: "/contact",
  },
};

const Page = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <ContactForm />
    </div>
  );
};

export default Page;
