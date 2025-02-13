import { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

const filePath = path.join(
  process.cwd(),
  "src/utilityComponents/dashboardPage/letsConnectForm.json"
);

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();
    const username = process.env.NEXT_PUBLIC_EMAIL_USERNAME;
    const password = process.env.NEXT_PUBLIC_EMAIL_PASSWORD;

    // Create email transporter
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
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phoneNumber}</p>
      <p><strong>Inquiry Type:</strong> ${formData.inquiryType}</p>
      <p><strong>How did they hear about us:</strong> ${formData.hearAboutUs}</p>
      <p><strong>Message:</strong> ${formData.message}</p>
    `;

    // Send email
    await transporter.sendMail({
      from: username,
      to: username, // Sending to yourself/admin email
      subject: "New Contact Form Submission - Estatein",
      html: emailHtml,
    });

    // Read existing data
    let existingData = [];
    try {
      const fileContent = await fs.readFile(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (error) {
      // File doesn't exist or is empty, start with empty array
    }

    // Add timestamp to form data
    const submissionData = {
      ...formData,
      timestamp: new Date().toISOString(),
    };

    // Append new data
    existingData.push(submissionData);

    // Write back to file
    await fs.writeFile(filePath, JSON.stringify(existingData, null, 2));

    return NextResponse.json({
      message: "Success: Form data saved and email sent",
    });
  } catch (error) {
    console.error("Error processing form:", error);
    return NextResponse.json(
      { message: "Failed to process form submission" },
      { status: 500 }
    );
  }
}
