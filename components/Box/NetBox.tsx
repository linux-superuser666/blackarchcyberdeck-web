import Image from "next/image";
import React from "react";
import { useUIStore } from "@/state/widgetState";

const NetBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);

  return (
    <div
      onClick={() => toggleWidget("networkPanel")}
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
        <div className="absolute inset-0  h-4 w-4 flex items-center justify-center ">
          <Image
            priority
            src="/icons/net.png"
            alt="sadas"
            width={9}
            height={9}
            className="object-contain"
          />
          {/* content reusable / img/ div/ */}
        </div>
        <div className="absolute inset-0 pt-[2px] pr-[1px] uppercase text-right items-start justify-end h-4 font-bold text-[4px] w-4 flex">
          <div id="numberCount">tx</div>
        </div>
        <div className="absolute uppercase text-right items-end pl-0.5 h-4 font-bold text-[4px] w-4 inset-0 flex">
          <div id="numberCount">rx</div>
        </div>
      </div>
    </div>
  );
};

export default NetBox;
