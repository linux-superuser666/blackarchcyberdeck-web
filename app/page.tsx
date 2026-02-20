"use client";

import { useRef } from "react";
import Hero from "@/components/Hero";
import SideWidget from "@/components/multimedia/SideWidget";

export default function Home() {
  const ref = useRef<HTMLDivElement | null>(null);

  const handleFullscreen = () => {
    if (!ref.current) return;

    if (!document.fullscreenElement) {
      ref.current.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div
      ref={ref}
      onDoubleClick={handleFullscreen}
      className="font-rajdhani flex mx-auto w-full min-w-screen min-h-screen relative overflow-hidden justify-center items-center"
    >
      <div className="size-full maxw-[1204px] max-h-[595px] xl:max-w-[1340px] xl:max-h-[630px] absolute bottom-0 overflow-hidden hidden xl:flex z-10 justify-center items-end">
        <SideWidget />
      </div>

      <div className="absolute z-20 bottom-0 size-full max-w-[1100px] max-h-[630px] mx-auto">
        <Hero />
      </div>
    </div>
  );
}
