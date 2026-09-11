import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khalifa Waziri",
  description:
    "Computer Science graduate interested in software development, artificial intelligence, IT and iOS development.",
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
