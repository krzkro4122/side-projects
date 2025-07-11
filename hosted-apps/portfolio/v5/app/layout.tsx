import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { publicPrefix } from "./cards";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "This is me!",
  description: "My personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={`${publicPrefix}/icon.svg`} sizes="any" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
