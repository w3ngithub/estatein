import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  const { recipientEmail, message } = await request.json();

  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    tls: {
      ciphers: "SSLv3",
      rejectUnauthorized: false,
    },
    auth: { user: username, pass: password },
  });

  // Prepare email HTML content
  const emailHtml = `
      <h2>New Meet Team Form Submission - Estatein</h2>
      <p><strong>Message:</strong> ${message}</p>
    `;

  try {
    await transporter.sendMail({
      from: username,
      to: recipientEmail, // Send to selected team member
      subject: "New Message from Estatein",
      html: emailHtml,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { message: "Failed to send message" },
      { status: 500 }
    );
  }
}
