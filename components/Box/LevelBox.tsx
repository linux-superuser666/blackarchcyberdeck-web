import React, { useEffect, useState } from "react";
import { useUIStore } from "@/state/widgetState";
import Image from "next/image";

const LevelBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  return (
    <div
      onClick={() => toggleWidget("levelPanel")}
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

      <Image
        priority
        src="/icons/level.png"
        alt="sadas"
        width={11}
        height={10}
        className="object-contain border "
      />
      <div className="absolute uppercase text-right items-start justify-end   font-bold text-[4px] right-[1px] top-[3px] flex">
        <div>X</div>
      </div>
    </div>
  );
};

export default LevelBox;
