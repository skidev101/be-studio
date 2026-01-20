"use client";

import ContactForm from "@/components/contact/ContactForm";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col min-h-screen justify-center items-center px-4">
      <ContactForm />
      <Button
        onClick={() => router.back()}
        className="rounded-full bg-blue-accent text-white mt-2"
      >
        <ArrowLeft className="size-4" />
        Back
      </Button>
    </div>
  );
};

export default page;
