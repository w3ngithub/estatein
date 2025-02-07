import { NextResponse, NextRequest } from "next/server";
const nodemailer = require("nodemailer");

export async function POST(request: NextRequest) {
  const { recipientEmail, message } = await request.json();

  const username = process.env.BURNER_USERNAME;
  const password = process.env.BURNER_PASSWORD;

  const transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com",
    port: 587,
    secure: false,
    auth: { user: username, pass: password },
  });

  try {
    await transporter.sendMail({
      from: username,
      to: recipientEmail, // Send to selected team member
      subject: "New Message from Estatein",
      html: `<p>${message}</p>`,
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
