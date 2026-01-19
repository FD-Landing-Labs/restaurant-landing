import type { Metadata } from "next";
import { Forum } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const forum = Forum({
  weight: "400",
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const satoshi = localFont({
  src: [
    {
      path: "../fonts/Satoshi-Variable.woff2",
      style: "normal",
    },
    {
      path: "../fonts/Satoshi-VariableItalic.woff2",
      style: "italic",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Qitchen - Fine Dining Restaurant",
  description:
    "Experience culinary excellence at Qitchen. Award-winning fine dining featuring seasonal ingredients, innovative techniques, and impeccable service.",
  keywords: [
    "fine dining",
    "luxury restaurant",
    "gourmet cuisine",
    "tasting menu",
    "chef's table",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${forum.variable} ${satoshi.variable} font-body antialiased dark`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
