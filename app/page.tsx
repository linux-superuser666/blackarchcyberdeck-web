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
      className="font-rajdhani flex min-w-full min-h-full justify-center items-center size-full"
    >
      <div className="size-full absolute bottom-0 flex z-10 justify-center items-end">
        <SideWidget />
      </div>

      <div className="absolute z-20 bottom-0 w-[1100px] h-full">
        <Hero />
      </div>
    </div>
  );
}
