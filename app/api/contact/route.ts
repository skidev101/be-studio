import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: "BE Potential customer <onboarding@resend.dev>",
      to: ["skidev101@gmail.com"],
      subject: "New Contact Form Submission",
      react: ContactEmailTemplate(data),
    });

    console.log("email sent to:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}