"use client";

import React from "react";
import Image from "next/image";
import { useUIStore } from "@/state/widgetState";
import LeftBracket from "../common/LeftBracket";
import ImageType from "../common/ImageType";

type WinSwitchProps = {
  className?: string;
};

const WinSwitch = ({ className = "" }: WinSwitchProps) => {
  const activeWidget = useUIStore((s) => s.activeWidget);

  // Akses store untuk workspace
  const setActiveWorkspace = useUIStore((s) => s.setActiveWorkspace);
  const setOccupiedWorkspaces = useUIStore((s) => s.setOccupiedWorkspaces);
  const toggleWidget = useUIStore((s) => s.toggleWidget);

  // Mapping app → workspace
  const appToWorkspace: Record<string, string[]> = {
    kitty: ["cyberware"],
    thunar: ["inventory"],
    firefox: ["net"],
    "code-oss": ["crafting"],
    "pdf-reader": ["journal"],
    "obs-studio": ["media"],
  };

  const apps = [
    "kitty",
    "thunar",
    "firefox",
    "code-oss",
    "pdf-reader",
    "obs-studio",
  ];

  // Jangan render jika widget tidak aktif
  if (activeWidget !== "winSwitch") return null;

  // Klik app → pindah workspace dan tutup WinSwitch
  const handleClickApp = (app: string) => {
    const workspaces = appToWorkspace[app];
    if (!workspaces) return;

    // Set workspace aktif ke workspace pertama
    setActiveWorkspace(workspaces[0]);

    // Masukkan semua workspace terkait ke occupied
    setOccupiedWorkspaces(workspaces);

    // Tutup WinSwitch
    toggleWidget("winSwitch");
  };

  return (
    <div
      className={`absolute z-[999] flex items-center justify-center left-[30%] top-2/6
       ${className}`}
    >
      <div className="w-[320px] h-[184px] animate-fade-in">
        {/* Background Window */}
        <div className="flex flex-row gap-px size-full">
          <div className="w-6 h-full">
            <LeftBracket />
          </div>
          <div
            className="size-full bg-darkbluex/90 border border-redx/30
          flex flex-col"
          >
            <div className="w-full flex border-b border-redx/40  text-redx h-6 font-bold items-start justify-start bg-redx/5 p-1 uppercase gap-1 text-xs">
              <div className="text-black rounded-full size-3 flex justify-center  pt-[2px] items-center bg-redx">
                !
              </div>
              <p>cyberdeck system app watcher</p>
            </div>
            {/* List of apps */}
            <div className="p-1 flex flex-col gap-1">
              <div className="w-full h-10 justify-between relative bg-redx/80 p-1 flex flex-row">
                <div className="absolute pl-[90px] inset-0 size-full">
                  <div
                    className="h-full w-22  
                 bg-gradient-to-r from-greyx/1 via-greyx/30 to-greyx/1
                   animate-scanner-x
                 "
                  ></div>
                </div>
                <ImageType textSize="text-[8px]" textColor="text-black/80" />
                <div className="h-full flex flex-row ">
                  <div className="font-orbitron font-bold uppercase text-darkbluex text-[10px]">
                    app running <br />
                    on workspaces
                  </div>
                  <Image
                    src="/icons/watcher.png"
                    alt="watcher"
                    width={32}
                    height={10}
                    className="object-contain size-8"
                  />
                </div>
              </div>
              <div className="w-full h-[105px] flex flex-col gap-1 overflow-y-auto scrollbar-hidden">
                {apps.map((app, i) => (
                  <div
                    key={i}
                    onClick={() => handleClickApp(app)}
                    className="w-full h-10 bg-redx/40 
                    group p-px [clip-path:polygon(0%_0%,_100%_0,_100%_50%,_90%_100%,_0%_100%)]"
                  >
                    <div className="[clip-path:polygon(0%_0%,_100%_0,_100%_45%,_90%_100%,_0%_100%)] group-hover:bg-redx/10 bg-darkbluex/90 size-full group-hover:text-greyx text-redx font-semibold uppercase">
                      <div className="flex items-center p-[2px] h-full w-full flex-row text-xs gap-1">
                        <Image
                          src="/icons/win-icon.png"
                          alt="icons"
                          width={32}
                          height={10}
                          className="object-contain flex group-hover:hidden size-5"
                        />
                        <Image
                          src="/icons/win-iconalt.png"
                          alt="icon-alt"
                          width={32}
                          height={10}
                          className="object-contain group-hover:flex hidden size-5"
                        />
                        <div className=" z-40 mt-px">{app}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinSwitch;
