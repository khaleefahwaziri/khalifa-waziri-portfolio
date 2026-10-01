import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Khalifa Waziri | Software, AI & iOS",
    template: "%s | Khalifa Waziri",
  },

  description:
    "Portfolio of Khalifa Waziri, a Computer Science graduate building software across iOS development, artificial intelligence and modern software engineering.",

  keywords: [
    "Khaleefah Waziri",
    "Software Developer",
    "Computer Science Graduate",
    "iOS Developer",
    "Swift Developer",
    "SwiftUI Developer",
    "Software Engineer",
    "Artificial Intelligence",
  ],

  authors: [
    {
      name: "Khalifa Waziri",
    },
  ],

  creator: "Khalifa Waziri",

    openGraph: {
    title: "Khalifa Waziri | Software, AI & iOS",
    description:
      "Computer Science graduate building software across iOS development, artificial intelligence and modern software engineering.",
    type: "website",
    locale: "en_GB",
    siteName: "Khalifa Waziri",
  },

  twitter: {
    card: "summary",
    title: "Khalifa Waziri | Software, AI & iOS",
    description:
      "Computer Science graduate building software across iOS development, artificial intelligence and modern software engineering.",
  },

  robots: {
    index: true,
    follow: true,
  },
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