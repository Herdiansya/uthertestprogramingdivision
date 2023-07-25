import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@fortawesome/fontawesome-free/css/all.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uther Test",
  description: "Test to create findLongestWord",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="h-72 bg-gradient-to-r from-purple-600 to-pink-500">{children}</body>
    </html>
  );
}
