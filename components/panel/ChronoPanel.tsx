"use client";

import React, { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";
import BinTitle from "../common/BinTitle";

type Mode = "time" | "date" | "uptime";

const ChronoPanel = () => {
  const [mode, setMode] = useState<Mode>("time");
  const [now, setNow] = useState<Date | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setNow(new Date());

    const i = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(i);
  }, []);

  const handleClick = () => {
    setMode((prev) =>
      prev === "time" ? "date" : prev === "date" ? "uptime" : "time"
    );
  };

  if (!mounted || !now) {
    return null; // ⬅️ penting supaya SSR & client match
  }

  const formatTime = () =>
    now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });

  const formatDate = () =>
    `${now.getDate()}/${now.getMonth() + 1}/${now
      .getFullYear()
      .toString()
      .slice(-2)}`;

  const getDisplayText = () => {
    if (mode === "time") return formatTime();
    if (mode === "date") return formatDate();
    return "1:23:46";
  };

  return (
    <div className="absolute z-50 right-0 bottom-0 mr-[11px] mt-0.5 w-[100px] flex flex-row gap-1 justify-end h-[28px] text-redx">
      <div className="grid grid-cols-1 grid-rows-[9px_1fr] size-full items-end">
        <div className="w-full h-fit flex justify-end">
          <BinTitle text="chrono_panel 1.001.1" />
        </div>
        <div className="size-full flex justify-end">
          <div className="grid grid-cols-[4px_6px_1fr_6px_4px] w-[45px] h-full grid-rows-[3px_1fr_3px] gap-px">
            <div className="col-start-2 text-[2px]">10010</div>
            <div className="col-start-4 text-[2px]">10010</div>
            <div className="row-start-2 size-full flex items-center justify-center">
              <div className="w-0.5 h-1 bg-redx animate-pulse duration-100"></div>
            </div>
            <div className="col-span-3 flex items-center justify-center row-start-2 bg-redx size-full rounded-xs">
              <div
                onClick={handleClick}
                className="flex items-center justify-center size-full text-[8px] text-black font-bold"
              >
                <p>{getDisplayText()}</p>
              </div>
            </div>
            <div className="col-start-5 row-start-2 size-full flex items-center justify-center">
              <div className="w-0.5 h-1 bg-redx animate-pulse duration-100"></div>
            </div>
            <div className="col-start-2 row-start-3 text-[2px]">10010</div>
            <div className="col-start-4 row-start-3 text-[2px]">10010</div>
          </div>
        </div>
      </div>
      <BinLogo iconSrc="/icons/control-dbus.png" />
    </div>
  );
};
{
}
export default ChronoPanel;
