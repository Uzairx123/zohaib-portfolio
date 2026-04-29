import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  message: z.string().min(15).max(2000),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form input." },
        { status: 400 }
      );
    }

    const { name, email, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_EMAIL_TO;
    const fromEmail = process.env.CONTACT_EMAIL_FROM || "onboarding@resend.dev";

    if (!apiKey || !toEmail) {
      console.error("Missing RESEND_API_KEY or CONTACT_EMAIL_TO env var");
      return NextResponse.json(
        {
          error:
            "Email service is not configured. Please email me directly while this gets fixed.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: `Zohaib Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `New inquiry from ${name}`,
      html: renderEmailHtml({ name, email, message }),
      text: renderEmailText({ name, email, message }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again or email directly." },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

function renderEmailHtml({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const safe = (s: string) =>
    s
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/\n/g, "<br/>");

  return `<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>New inquiry from ${safe(name)}</title>
</head>
<body style="margin:0;padding:0;background:#0a0a0b;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#f5f1eb;">
  <div style="max-width:600px;margin:0 auto;padding:40px 24px;">
    <div style="display:inline-block;padding:6px 14px;border-radius:999px;background:#b8ff14;color:#0a0a0b;font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:24px;">
      New inquiry · zohaib portfolio
    </div>
    <h1 style="font-size:28px;font-weight:500;margin:0 0 8px;color:#f5f1eb;">
      From <span style="font-style:italic;color:#b8ff14;">${safe(name)}</span>
    </h1>
    <p style="margin:0 0 32px;color:#9a9489;font-size:14px;">
      Reply to: <a href="mailto:${safe(email)}" style="color:#b8ff14;text-decoration:none;">${safe(email)}</a>
    </p>
    <div style="background:#101012;border:1px solid rgba(245,241,235,0.08);border-radius:16px;padding:24px;margin-bottom:24px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:#9a9489;margin-bottom:12px;">
        Message
      </div>
      <div style="color:#e8e2d8;font-size:15px;line-height:1.65;">
        ${safe(message)}
      </div>
    </div>
    <p style="margin:24px 0 0;color:#9a9489;font-size:12px;">
      Sent from your portfolio contact form ·
      <a href="mailto:${safe(email)}" style="color:#b8ff14;">Reply directly</a>
    </p>
  </div>
</body>
</html>`;
}

function renderEmailText({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `New inquiry from ${name}
Reply to: ${email}

${message}

— Sent from zohaibahmed.com contact form`;
}
