"use client";

import React from "react";
import Image from "next/image";
import { useUIStore } from "@/state/widgetState";

const QuickHackBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  return (
    <div
      onClick={() => toggleWidget("quickHack")}
      className="flex flex-col relative w-4 h-4 gap-0 leading-none justify-center items-center"
    >
      <Image
        priority
        src="/panel/control-box.png"
        alt="sadas"
        width={16}
        height={16}
        className="object-fill inset-0 absolute"
      />
      <div>
        <div />
        <div className="absolute inset-0 h-4 w-4 flex items-center  1 justify-center pt-[2px]">
          <Image
            priority
            src="/icons/ba-logo.png"
            alt="sadas"
            width={10}
            height={17}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default QuickHackBox;
