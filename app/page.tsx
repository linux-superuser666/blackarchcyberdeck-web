"use client";

import Hero from "@/components/Hero";
import SideWidget from "@/components/multimedia/SideWidget";

export default function Home() {
  return (
    <div className="font-rajdhani flex min-w-full mih-h-full justify-center items-center size-full">
      <div className="size-full absolute bottom-0 flex z-10 justify-center items-end">
        <SideWidget />
      </div>
      <div className="absolute z-20 bottom-0 w-[1100px] h-full">
        <Hero />
      </div>
    </div>
  );
}
