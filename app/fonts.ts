import localFont from "next/font/local";
import { Rajdhani, Orbitron } from "next/font/google";

export const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rajdhani",
});

export const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-orbitron",
});
 
export const nerdFont = localFont({
  src: [
    {
      path: "./fonts/DankMonoNerdFontMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DankMonoNerdFontMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-nerd",
  display: "swap",
});

export const blenderProBook = localFont({
  src: "./fonts/BlenderProBook.woff2",
  variable: "--font-blender",
  display: "swap",
});
