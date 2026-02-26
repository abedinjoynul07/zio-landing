import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Zio - 3D Landing",
  description: "Clean minimal 3D landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}