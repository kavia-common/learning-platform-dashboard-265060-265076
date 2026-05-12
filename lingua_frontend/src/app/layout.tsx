import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingua — Retro Learning Dashboard",
  description:
    "Retro-themed language learning dashboard: lessons, exercises, progress, analytics, and admin.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
