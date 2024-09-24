import type { Metadata } from "next";
import {Calistoga, Inter} from "next/font/google"
import "./globals.css";
import { twMerge } from "tailwind-merge";

const inter = Inter(
  {
    subsets:['latin'],
    variable:'--font-sans',
    weight:['400']
  }
)

const calistogo = Calistoga({
  subsets:['latin'],
  variable:'--font-serif',
  weight:['400']
})

export const metadata: Metadata = {
  title: "Aditya Gupta",
  description: "Portfolio application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable ,calistogo.variable ,"bg-gray-900 text-white antialiased font-sans")}>{children}</body>
    </html>
  );
}
