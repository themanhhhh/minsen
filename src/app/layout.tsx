import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MISO JAPAN | Vietnam Plywood Sourcing & Buyer Risk Elimination",
  description: "MISO JAPAN helps international buyers source Vietnam plywood with controlled quality, documented evidence and one accountable partner.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${inter.variable}`}><body>{children}</body></html>;
}
