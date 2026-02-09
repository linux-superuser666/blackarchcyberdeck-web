"use client";

import Image from "next/image";
import React from "react";
import { useUIStore } from "@/state/widgetState";

type WinSwitchProps = {
  className?: string;
};

const WinSwitch = ({ className = "" }: WinSwitchProps) => {
  const activeWidget = useUIStore((s) => s.activeWidget);

  if (activeWidget !== "winSwitch") return null;

  return (
    <div
      className={`absolute z-50 flex items-center justify-center left-[35%] top-2/6
       ${className}`}
    >
      <div className="w-[300px] h-[184px] relative animate-fade-in">
        <Image
          src="/window/window-bg.png"
          alt="background"
          width={300}
          height={184}
          className="object-contain absolute z-0"
        />

        <div
          className="absolute top-[57px] left-[20px] z-10
                        w-[280px] h-[88px]
                        flex flex-col gap-1
                        overflow-y-auto scrollbar-hidden"
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div key={i} className="w-[280px] h-[28px] relative">
              <Image
                src="/window/window-idle.png"
                alt="window item"
                width={337}
                height={28}
                className="object-contain absolute inset-0"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinSwitch;
