"use client";

import Hero from "@/components/Hero";
import Particles from "@/components/multimedia/Particle";
export default function Home() {
  return (
    <div className="relative gap-8 font-rajdhani w-full h-screen flex flex-col">
      <div className="fixed -z-10 inset-0 bg-black"></div>
      <div className="min-w-[100px] gap-8 font-rajdhani w-full h-full flex flex-col justify-start absolute inset-0 items-center">
        <Hero />
      </div>

      <Particles className="absolute inset-0 w-full h-screen -z-10" />
    </div>
  );
}
