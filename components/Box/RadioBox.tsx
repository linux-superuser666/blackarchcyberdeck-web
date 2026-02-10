"use client";
import { useUIStore } from "@/state/widgetState";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const BAR_COUNT = 4;
const MIN_H = 1;
const MAX_H = 4;

const RadioBox = () => {
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  const [bars, setBars] = useState<number[]>(Array(BAR_COUNT).fill(2));

  useEffect(() => {
    const interval = setInterval(() => {
      setBars((prev) =>
        prev.map(() => Math.floor(Math.random() * (MAX_H - MIN_H + 1)) + MIN_H)
      );
    }, 350);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={() => toggleWidget("radioStation")}
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

      <div />
      <div className="absolute h-4 w-4 flex gap-[1px] flex-row items-end pb-[2px] justify-center">
        {bars.map((h, i) => (
          <div
            key={i}
            className="bg-redx w-[1px] transition-all duration-300"
            style={{ height: `${h * 2}px` }}
          />
        ))}

        {/* STATUS ARROW */}
        <div className="absolute h-3 w-3.5 flex items-start justify-end pt-0.5">
          <div
            id="statusRadio"
            className="[clip-path:polygon(0%_0%,_100%_50%,_0%_100%)] w-[3px] h-1 bg-redx"
          />
        </div>
      </div>
    </div>
  );
};

export default RadioBox;
