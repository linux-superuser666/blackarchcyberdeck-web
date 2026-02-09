import type { Metadata } from "next";
import "./globals.css";
import { nerdFont } from "./fonts";

export const metadata: Metadata = {
  title: "Cyberdeck",
  description: "Theme for BlackArch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nerdFont.className} antialiased   *: 
      `}
      >
        {children}
      </body>
    </html>
  );
}
