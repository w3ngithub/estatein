import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const urbanist = localFont({
  src: "../../public/fonts/Urbanist-VariableFont_wght.ttf",
  variable: "--font-urbanist",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Estatein",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${urbanist.className}`}>{children}</body>
    </html>
  );
}
