import { Resend } from "resend";
import ContactEmailTemplate from "@/components/emails/ContactEmailTemplate";
import { NextRequest, NextResponse } from "next/server";

// The sender must be on a domain verified in Resend. Until CONTACT_FROM_EMAIL
// is set this falls back to Resend's sandbox sender, which is heavily
// spam-filtered and only delivers reliably to the account owner.
const FROM =
  process.env.CONTACT_FROM_EMAIL ?? "BE Website <onboarding@resend.dev>";
const TO = process.env.CONTACT_TO_EMAIL ?? "skidev101@gmail.com";

const MAX = { name: 200, email: 320, company: 200, website: 500, service: 100, timeline: 100, message: 5000 };

type ContactPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  service?: string;
  timeline?: string;
  message: string;
};

const trim = (value: unknown, limit: number): string | undefined =>
  typeof value === "string" && value.trim()
    ? value.trim().slice(0, limit)
    : undefined;

/**
 * Field-level guard. Returns the parsed payload, or the list of problems so the
 * caller can answer with something truthful instead of a generic failure.
 */
function parsePayload(
  body: unknown
): { data: ContactPayload } | { errors: string[] } {
  if (typeof body !== "object" || body === null) {
    return { errors: ["Malformed request body."] };
  }

  const raw = body as Record<string, unknown>;
  const errors: string[] = [];

  const name = trim(raw.name, MAX.name);
  const email = trim(raw.email, MAX.email);
  const message = trim(raw.message, MAX.message);

  if (!name) errors.push("A name is required.");
  if (!email) errors.push("An email address is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.push("That email address does not look valid.");
  if (!message) errors.push("A message is required.");

  if (errors.length > 0) return { errors };

  return {
    data: {
      name: name!,
      email: email!,
      message: message!,
      company: trim(raw.company, MAX.company),
      website: trim(raw.website, MAX.website),
      service: trim(raw.service, MAX.service),
      timeline: trim(raw.timeline, MAX.timeline),
    },
  };
}

export async function POST(req: NextRequest) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // Configuration problem, not a visitor problem. Log it, answer honestly.
    console.error("[contact] RESEND_API_KEY is not set");
    return NextResponse.json(
      { success: false, error: "The contact form is not configured." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Malformed request body." },
      { status: 400 }
    );
  }

  const parsed = parsePayload(body);
  if ("errors" in parsed) {
    return NextResponse.json(
      { success: false, error: parsed.errors.join(" ") },
      { status: 400 }
    );
  }

  try {
    const resend = new Resend(apiKey);

    // resend.emails.send resolves with { data, error } — it does not throw on
    // an API-level rejection. Ignoring `error` is what previously reported
    // success to the visitor while the message was never sent.
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: parsed.data.email,
      subject: `New enquiry from ${parsed.data.name}`,
      react: ContactEmailTemplate(parsed.data),
    });

    if (error) {
      console.error("[contact] Resend rejected the message:", error.name, error.message);
      return NextResponse.json(
        { success: false, error: "We could not send your message." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    // Network or SDK failure. Log the detail, never the payload.
    console.error("[contact] Failed to send:", error);
    return NextResponse.json(
      { success: false, error: "We could not send your message." },
      { status: 500 }
    );
  }
}
