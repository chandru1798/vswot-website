import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().min(1),
  budget: z.string().optional(),
  message: z.string().min(10),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = schema.parse(body);

    // Send email via Resend
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import("resend");
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: "Vswot Contact Form <noreply@vswot.com>",
        to: [process.env.CONTACT_EMAIL || "hello@vswot.com"],
        replyTo: data.email,
        subject: `New Lead: ${data.service} — ${data.name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c5ff2;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px; font-weight: bold;">Name:</td><td style="padding: 8px;">${data.name}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${data.email}">${data.email}</a></td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Phone:</td><td style="padding: 8px;">${data.phone || "N/A"}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Company:</td><td style="padding: 8px;">${data.company || "N/A"}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${data.service}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${data.budget || "N/A"}</td></tr>
              <tr><td style="padding: 8px; font-weight: bold; vertical-align: top;">Message:</td><td style="padding: 8px;">${data.message}</td></tr>
            </table>
          </div>
        `,
      });

      // Auto-reply to user
      await resend.emails.send({
        from: "Vswot Team <hello@vswot.com>",
        to: [data.email],
        subject: "We received your message — Vswot",
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #7c5ff2;">Thanks for reaching out, ${data.name}!</h2>
            <p>We've received your message about <strong>${data.service}</strong> and our team will review it shortly.</p>
            <p>You can expect to hear from us within <strong>2 business hours</strong>.</p>
            <p>In the meantime, feel free to:</p>
            <ul>
              <li>Browse our <a href="https://vswot.com/portfolio">portfolio</a></li>
              <li>Read our <a href="https://vswot.com/blog">latest insights</a></li>
              <li>Connect with us on <a href="https://linkedin.com/company/vswot">LinkedIn</a></li>
            </ul>
            <p>Best regards,<br/><strong>The Vswot Team</strong></p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
