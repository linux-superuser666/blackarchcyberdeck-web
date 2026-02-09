import type { Metadata } from "next";
import "./globals.css";
import { nerdFont } from "./fonts";

export const metadata: Metadata = {
  title: "Cyberdeck",
  description: "Theme for BlackArch",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
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
