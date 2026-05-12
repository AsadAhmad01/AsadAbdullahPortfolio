import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields required" }, { status: 400 });
    }

    // EmailJS is handled client-side in Contact.tsx
    // This route serves as a server-side fallback or for future Resend integration
    // To use Resend: npm install resend and uncomment below

    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'haalim376@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      html: `<p><strong>From:</strong> ${name} (${email})</p><p>${message}</p>`,
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact route error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
