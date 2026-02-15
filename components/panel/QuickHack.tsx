"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useUIStore } from "@/state/widgetState";
import BottomPanelButton from "../Box/BottomPanelButton";
import BinLogo from "../common/BinLogo";
import RamBar from "../common/RamBar";
import BinTitle from "../common/BinTitle";

const MAX_RAM_USAGE = 3000;

const QuickHack = () => {
  const tools = [
    {
      name: "Wireshark",
      status: "ready",
      type: "sniffer",
      categories: "network",
      alt: "Wireshark",
      icon: "/icons/ba-logo.png",
    },
    {
      name: "Nmap",
      status: "ready",
      type: "scanner",
      categories: "recon",
      alt: "Nmap",
      icon: "/icons/ba-logo.png",
    },
    {
      name: "Hydra",
      status: "locked",
      type: "bruteforce",
      categories: "credentials",
      alt: "Hydra",
      icon: "/icons/ba-logo.png",
    },
    {
      name: "Metasploit",
      status: "ready",
      type: "exploit",
      categories: "payload",
      alt: "Metasploit",
      icon: "/icons/ba-logo.png",
    },
    {
      name: "Aircrack",
      status: "cooldown",
      type: "wifi",
      categories: "wireless",
      alt: "Aircrack",
      icon: "/icons/ba-logo.png",
    },
    {
      name: "JohnTheRipper",
      status: "ready",
      type: "password",
      categories: "hash cracking",
      alt: "JohnTheRipper",
      icon: "/icons/ba-logo.png",
    },
  ];

  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);

  const [ramUsed, setRamUsed] = useState(2769);
  const [hoveredTool, setHoveredTool] = useState(tools[0]);

  useEffect(() => {
    if (activeWidget !== "quickHack") return;

    const interval = setInterval(() => {
      setRamUsed((prev) => {
        if (prev >= MAX_RAM_USAGE) {
          return Math.random() > 0.5 ? 2000 : 900;
        }

        const next = prev + Math.random() * 120;
        return Math.round(next);
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [activeWidget]);

  if (activeWidget !== "quickHack") return null;

  return (
    <div className="absolute inset-0 z-[999] w-full h-full bg-black/70 grid grid-cols-[200px_2fr_200px] text-redx grid-rows-[40px_2fr_20px] gap-x-1 gap-y-4 pt-4 px-10">
      <div className="col-start-2 flex size-full  justify-center">
        <div className="size-fit flex-row flex gap-0.5">
          <BinLogo iconSrc={"/icons/control-dbus-alt.png"} />
          <div className="flex-col flex gap-px items-start">
            <BinTitle text="cyberdeck v.2334.300" />
            <div className="uppercase w-40 border-b border-redx/30 font-semibold text-[9px] flex flex-row  justify-between">
              <div> cyberdeck ram</div>
              <div>
                <span className="text-greyx">{ramUsed}</span> (37065)
              </div>
            </div>
            <div className="flex gap-px flex-row">
              <RamBar usage={ramUsed} />
            </div>
          </div>
        </div>
      </div>
      <div className="row-start-2 size-full flex flex-col">
        <div className="size-full flex-row flex gap-0.5">
          <BinLogo iconSrc={"/icons/control-dbus-alt.png"} />
          <div className="flex-col size-full flex gap-px items-start">
            <BinTitle text="cyberdeck v.2334.300" />
            <div className="uppercase w-full border-b border-redx/30 font-semibold text-[9px] flex flex-row justify-between">
              quickshack list
            </div>
            <div className="gap-px pt-4 size-full">
              <div className="size-full flex flex-col gap-1">
                {tools.map((tool) => (
                  <div
                    key={tool.name}
                    className="group h-8 w-full"
                    onMouseEnter={() => setHoveredTool(tool)}
                  >
                    <div className="relative overflow-hidden size-full text-[9px] group-hover:drop-shadow-2xl uppercase text-greyx group-hover:bg-greyx/80 bg-greyx/30 justify-between p-px [clip-path:polygon(0_0,_98%_1%,_100%_12%,_100%_99%,_2%_100%,_2%_70%,_0_65%)]">
                      <div className="size-full flex flex-row bg-black/80 justify-between p-0.5 [clip-path:polygon(0_0,_98%_1%,_100%_12%,_100%_99%,_2%_100%,_2%_70%,_0_65%)]">
                        <div className="absolute inset-0 pointer-events-none">
                          <div className="absolute left-0 top-0 w-16 h-full flex opacity-0 group-hover:opacity-100 group-hover:animate-sweep-right">
                            <div className="h-full w-4 bg-gradient-to-r from-greyx/0 to-greyx/50" />
                            <div className="h-full w-8 bg-greyx/60" />
                            <div className="h-full w-4 bg-gradient-to-l from-greyx/0 to-greyx/50" />
                          </div>
                        </div>
                        <div className="pl-2 size-full grid grid-cols-1 grid-rows-2 gap-0">
                          <div className="size-full font-medium hover:font-semibold tracking-wider">
                            {tool.name}
                          </div>
                          <div className="text-[6px] leading-0 rounded-[2px] border border-greyx/30 uppercase p-1 h-fit w-fit flex items-center justify-center tracking-wider">
                            {tool.status}
                          </div>
                        </div>

                        <div className="h-full w-6 bg-greyx/30 group-hover:bg-greyx/40 [clip-path:polygon(0_0,_85%_0%,_100%_10%,_100%_100%,_80%_100%,_70%_92%,_30%_92%,_20%_100%,_0_100%)] p-px">
                          <div className="bg-black/80 group-hover:bg-black/50 size-full [clip-path:polygon(0_0,_85%_0%,_100%_10%,_100%_100%,_83%_100%,_71%_92%,_28%_92%,_17%_100%,_0_100%)] flex items-center justify-center">
                            <Image
                              src={tool.icon}
                              alt={tool.alt}
                              width={12}
                              height={10}
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-start-3 row-start-2 size-full flex justify-end">
        <div className="size-full flex-row flex gap-0.5">
          <div className="flex-col size-full flex gap-px items-start">
            <div className="flex w-full justify-end">
              <BinTitle text="hack info" />
            </div>
            <div className="uppercase w-full border-b border-redx/30 font-semibold text-[9px] flex flex-row justify-between">
              thug
            </div>
            <div className="flex gap-px pt-4 flex-col size-full">
              <div className="w-full p-px min-h-36 bg-redx/30 [clip-path:polygon(0%_0%,_100%_0,_100%_90%,_92%_100%,_0%_100%)]">
                <div className="size-full text-[10px] tracking-wider flex flex-col bg-black/80 [clip-path:polygon(0%_0%,_100%_0,_100%_90%,_92%_100%,_0%_100%)] p-1">
                  <div className="text-greyx w-full uppercase border-b border-redx/30">
                    tools info
                  </div>
                  <div className="w-full flex flex-col gap-2">
                    <div className="flex w-full flex-col border-b border-redx/30">
                      <div className="font-orbitron text-[5px] uppercase">
                        name
                      </div>
                      <div className="uppercase font-semibold">
                        {hoveredTool?.name}
                      </div>
                    </div>
                    <div className="flex w-full flex-col border-b border-redx/30">
                      <div className="font-orbitron text-[5px] uppercase">
                        type
                      </div>
                      <div className="uppercase font-semibold">
                        {" "}
                        {hoveredTool?.type}
                      </div>
                    </div>
                    <div className="flex w-full flex-col ">
                      <div className="font-orbitron text-[5px] uppercase">
                        categories
                      </div>
                      <div className="uppercase font-semibold">
                        {hoveredTool?.categories}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <BinLogo iconSrc={"/icons/control-dbus-alt.png"} />
        </div>
      </div>

      <div className="row-start-3"></div>

      <div className="col-start-3 justify-end row-start-3 flex gap-2 size-full">
        <BottomPanelButton
          onClick={() => toggleWidget("quickHack")}
          icon="/options/confirms.png"
          label="execute"
        />
        <BottomPanelButton
          onClick={() => toggleWidget("quickHack")}
          icon="/options/close.png"
          label="Close"
        />
      </div>

      <div className="col-start-1 row-start-4">10</div>
    </div>
  );
};

export default QuickHack;
