import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import Nav from "~/components/layout/nav";
import { siteMetadata } from "~/lib/metadata";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen bg-[#2A1810] text-white">
        <Nav />
        <div className="mx-auto max-w-7xl px-4 pt-32">{children}</div>
      </body>
    </html>
  );
}
