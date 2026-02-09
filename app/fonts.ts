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
      path: "./../public/fonts/DankMonoNerdFontMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./../public/fonts/DankMonoNerdFontMono-Bold.otf",
      weight: "700",
      style: "normal",
    } 
  ],
  variable: "--font-nerd",
});
