import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

//for footer
export async function POST(request: NextRequest) {
  const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
  const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;
  const myEmail = process.env.NEXT_PUBLIC_PERSONAL_EMAIL;

  try {
    const { email } = await request.json(); // Extract email from request body

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    console.log("Processing request for email:", email);

    // create transporter object
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      tls: {
        ciphers: "SSLv3",
        rejectUnauthorized: false,
      },

      auth: {
        user: username,
        pass: password,
      },
    });

    // Send email
    await transporter.sendMail({
      from: username,
      to: myEmail,
      replyTo: email,
      subject: `Website activity from ${email}`,
      html: `<p>Email: ${email}</p>`,
    });

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Could not send message" },
      { status: 500 }
    );
  }
}
