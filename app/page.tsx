"use client";

import Hero from "@/components/Hero";
import GlitchText from "@/components/multimedia/GlitchText";
import Particles from "@/components/multimedia/Particle";
export default function Home() {
  return (
    <div className="relative gap-8 font-rajdhani w-full h-screen flex flex-col">
      <div className="fixed -z-10 inset-0 bg-black"></div>
      <div className="min-w-[100px] gap-0 font-rajdhani w-full h-full flex flex-col justify-start absolute inset-0 items-center">
        <GlitchText className="!text-5xl" text="Cyberdeck blackarch" />
        <GlitchText
          className="text-yellowx !text-base font-semibold uppercase"
          text="crafting with passion by © mrnngstr666"
        ></GlitchText>
        <Hero />
      </div>
      <Particles className="absolute inset-0 w-full h-screen -z-10" />
    </div>
  );
}
