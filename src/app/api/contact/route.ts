import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  message?: string;
  // honeypot — bots fill this; humans never see it
  company?: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Spam honeypot: silently accept (so the bot thinks it succeeded).
  if (data.company) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!data.name?.trim()) errors.name = "Please enter your name.";
  if (!data.email?.trim() || !EMAIL_RE.test(data.email))
    errors.email = "Please enter a valid email address.";
  if (!data.message?.trim() || data.message.trim().length < 10)
    errors.message = "Please tell us a little more (10+ characters).";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 400 });
  }

  // ---------------------------------------------------------------------------
  // Integration point: deliver the message. Wire up your provider here, e.g.
  // Resend, SendGrid, Postmark, or a Slack/CRM webhook. Keep secrets in env vars.
  //
  //   await resend.emails.send({ to: siteConfig.email, ... })
  //
  // For now we log server-side so the form is fully functional in development.
  // ---------------------------------------------------------------------------
  console.log("[contact] new enquiry", {
    name: data.name,
    email: data.email,
    organization: data.organization,
  });

  return NextResponse.json({ ok: true });
}
