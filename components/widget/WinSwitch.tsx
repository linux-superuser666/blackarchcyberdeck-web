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

  const apps = [
    "kitty",
    "thunar",
    "firefox",
    "code-oss",
    "pdf-reader",
    "obs-studio",
  ];

  return (
    <div
      className={`absolute z-50 flex items-center justify-center left-[35%] top-2/6
       ${className}`}
    >
      <div className="w-[300px] h-[184px] relative animate-fade-in">
        {/* Background Window */}
        <Image
          src="/window/window-bg.png"
          alt="background"
          width={300}
          height={184}
          className="object-contain absolute z-0"
        />

        {/* List of apps */}
        <div
          className="absolute top-[57px] left-[20px] z-10
                      w-[280px] h-[88px]
                      flex flex-col gap-1
                      overflow-y-auto scrollbar-hidden"
        >
          {apps.map((app, i) => (
            <div key={i} className="w-[280px] h-[28px] relative group">
              <Image
                src="/window/window-idle.png"
                alt="window item"
                width={337}
                height={28}
                className="object-contain absolute z-30 block inset-0 group-hover:hidden"
              />
              <Image
                src="/window/window-hover.png"
                alt="window item hover"
                width={337}
                height={28}
                className="object-contain z-30 absolute inset-0 hidden group-hover:block"
              />
              <div className="flex items-center pl-1 pt-px h-full w-full flex-row text-xs gap-1">
                <Image
                  src="/window/win-icon-idle.png"
                  alt=""
                  width={17}
                  height={17}
                  className="object-contain z-40"
                />
                <div className="uppercase z-40 mt-px font-semibold text-redx group-hover:text-redx">
                  {app}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WinSwitch;
