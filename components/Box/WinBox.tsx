"use client";
import { useUIStore } from "@/state/widgetState";

import Image from "next/image";
import React from "react";

const WinBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  <div
    onClick={() => toggleWidget("winSwitch")}
    className="absolute inset-0"
  />;

  return (
    <div
      onClick={() => toggleWidget("winSwitch")}
      className="flex flex-col  relative w-4 h-4 gap-0 leading-none justify-center items-center"
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
            src="/icons/win-icon.png"
            alt="sadas"
            width={18}
            height={17}
            className="object-fill size-[11px]"
          />
        </div>

        <div className="absolute uppercase text-right items-start justify-end h-4 pr-[1px] pt-[3px] font-medium text-[5px] w-4 flex inset-0 text-greyx">
          <div id="numberCount">6</div>
        </div>
      </div>
    </div>
  );
};

export default WinBox;
