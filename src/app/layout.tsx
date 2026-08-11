import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ variable: "--font-heading", subsets: ["latin"] });
const inter = Inter({ variable: "--font-body", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Minsen Export | Vietnam Plywood Sourcing Hub",
  description: "A trusted sourcing partner connecting international buyers with verified Vietnamese plywood and veneer factories.",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en" className={`${manrope.variable} ${inter.variable}`}><body>{children}</body></html>;
}
