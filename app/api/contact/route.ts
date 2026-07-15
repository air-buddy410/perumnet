import { NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, phone, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email, and message are required.",
        },
        { status: 400 },
      );
    }

    const googleScriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!googleScriptUrl) {
      return NextResponse.json(
        {
          success: false,
          message: "Google Script URL is not configured.",
        },
        { status: 500 },
      );
    }

    const sheetResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "text/plain;charset=utf-8",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        message,
      }),
    });

    if (!sheetResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to save inquiry to Google Sheet.",
        },
        { status: 500 },
      );
    }

    await resend.emails.send({
      from: "Helpdesk Perumnet <helpdesk@perumnet.id ",
      to: email,
      subject: "Terima kasih telah menghubungi Perumnet",
      html: `
        <h2>Halo ${name},</h2>
        <p>Terima kasih telah menghubungi Perumnet.</p>
        <p>Tim kami akan segera menghubungi Anda melalui email atau telepon.</p>
        <br/>
        <p>Salam,<br/>Perumnet</p>
      `,
    });

    await resend.emails.send({
      from: "System Perumnet <onboarding@resend.dev>",
      to: process.env.ADMIN_EMAIL!,
      subject: `Lead Baru dari Website - ${name}`,
      html: `
        <h2>Lead Baru dari Website</h2>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telepon:</strong> ${phone || "-"}</p>
        <p><strong>Pesan:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "Your inquiry has been submitted successfully. We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      { status: 500 },
    );
  }
}
