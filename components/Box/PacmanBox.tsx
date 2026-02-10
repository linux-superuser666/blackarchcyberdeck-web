import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useUIStore } from "@/state/widgetState";

const PacmanBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  return (
    <div
      onClick={() => toggleWidget("launcherPanel")}
      className="flex flex-col z-50 relative w-4 h-4 gap-0 leading-none justify-center items-center"
    >
      <Image
        priority
        src="/panel/control-box.png"
        alt="sadas"
        width={16}
        height={16}
        className="object-fill inset-0 absolute"
      />

      <Image
        priority
        src="/icons/package.png"
        alt="sadas"
        width={8}
        height={8}
        className="object-contain border "
      />
      <div className="absolute uppercase text-right items-start justify-end   font-bold text-[3px] right-[1px] top-[3px] flex">
        <div>100</div>
      </div>
    </div>
  );
};

export default PacmanBox;
