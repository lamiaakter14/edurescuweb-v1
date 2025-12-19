import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduRescue v1",
  description: "24/7 Academic Emergency Platform for Bangladesh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
