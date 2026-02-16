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
    <div className="absolute z-50 right-0 bottom-0 mr-[11px] mt-1 w-[210px] flex flex-row gap-1 justify-end">
      <div className="flex flex-col gap-0">
        <BinTitle text="chrono_panel 1.001.1" />
        <div className="text-redx w-[76px] flex justify-end">
          <div className="relative flex w-[76px] h-4 items-center justify-center">
            <div className="absolute pointer-events-none bg-redx z-40 w-10 h-[13px]" />

            <div
              onClick={handleClick}
              className="absolute flex items-center justify-center w-[76px] h-9 z-50 text-[8px] text-black font-bold cursor-pointer"
            >
              <p>{getDisplayText()}</p>
            </div>
          </div>
        </div>
      </div>
      <BinLogo iconSrc="/icons/control-dbus.png" />
    </div>
  );
};

export default ChronoPanel;
