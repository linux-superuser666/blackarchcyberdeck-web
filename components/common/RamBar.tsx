"use client";

import React from "react";

type RamBarProps = {
  usage: number;
  max?: number;
};

const TOTAL_BARS = 20;

const RamBar = ({ usage, max = 3000 }: RamBarProps) => {
  const activeBars = Math.min(
    TOTAL_BARS,
    Math.round((usage / max) * TOTAL_BARS)
  );

  return (
    <div className="flex flex-row gap-[1.5px]">
      {Array.from({ length: TOTAL_BARS }).map((_, i) => {
        const isActive = i < activeBars;

        return (
          <div
            key={i}
            className={`
              relative w-1 h-3
              ${isActive ? "bg-redx" : "bg-redx/50"}
              [clip-path:polygon(16%_54%,_0_54%,_0_0,_100%_0,_100%_78%,_79%_100%,_0_100%,_0_80%,_16%_80%)]
            `}
          ></div>
        );
      })}
    </div>
  );
};

export default RamBar;
