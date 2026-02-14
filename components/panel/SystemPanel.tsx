"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";
import RamBar from "../common/RamBar";

const MAX_CPU = 100;
const MAX_RAM = 37065;
const MAX_RAM_USAGE = 3000;

const SystemPanel = () => {
  const [cpu, setCpu] = useState(35);
  const [ramUsed, setRamUsed] = useState(2769);

  useEffect(() => {
    const interval = setInterval(() => {
      // CPU naik - turun
      setCpu((prev) => {
        const next = prev + (Math.random() * 20 - 10);
        return Math.min(MAX_CPU, Math.max(5, Math.round(next)));
      });

      // RAM naik → reset ke 1000 / 2000
      setRamUsed((prev) => {
        if (prev >= MAX_RAM_USAGE) {
          return Math.random() > 0.5 ? 2000 : 900;
        }

        const next = prev + Math.random() * 120;
        return Math.round(next);
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ml-3 mt-px w-[280px] flex flex-row gap-1">
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />

      <div className="flex flex-col leading-none gap-0">
        <p className="text-[5px] text-redx/80 uppercase font-orbitron">
          system_panel 1.001.1
        </p>

        {/* CPU */}
        <div className="text-redx flex flex-row gap-1">
          <div className="size-5.5 relative flex items-center justify-center">
            <div className="bg-greyx size-full p-px  [clip-path:polygon(0_0,_100%_0%,_100%_100%,_40%_100%,_0%_60%)] ">
              <div className="bg-black size-full [clip-path:polygon(0_0,_100%_0%,_100%_100%,_44%_100%,_0%_58%)] text-center p-px">
                <div className="bg-greyx size-full [clip-path:polygon(0_0,_100%_0%,_100%_100%,_44%_100%,_0%_58%)] p-px text-black   text-center items-center justify-center font-bold text-[10px]">
                  <div className="size-full p-[3px]">{cpu}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-0.5 leading-none">
            <div className="bg-white/50 h-[2px] w-32 overflow-hidden">
              <div
                className="bg-white h-[2px] transition-all duration-500"
                style={{ width: `${cpu}%` }}
              />
            </div>
            <div
              className="w-32 h-1 bg-redx/40 relative overflow-hidden
              [clip-path:polygon(0_0,100%_0%,100%_65%,97%_100%,0_100%)]"
            >
              <div
                className="absolute h-1 bg-redx transition-all duration-500
                [clip-path:polygon(0_0,100%_0%,100%_65%,97%_100%,0_100%)]"
                style={{ width: `${cpu}%` }}
              />
            </div>
            <RamBar usage={ramUsed} />
          </div>
        </div>
      </div>

      {/* RAM */}
      <div className="text-[12px] mt-1 font-medium text-redx">{ramUsed}</div>
      <div className="text-[8px] mt-1 font-medium text-redx">{MAX_RAM}</div>
    </div>
  );
};

export default SystemPanel;
