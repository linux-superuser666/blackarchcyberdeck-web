import React from "react";
import Framex from "./layer-one/Framex";
import Appframe from "./layer-one/Appframe";
import SystemPanel from "./panel/SystemPanel";
import HyprPanel from "./panel/HyprPanel";
import ChronoPanel from "./panel/ChronoPanel";
import WinSwitch from "./widget/WinSwitch";
import Radiostation from "./widget/Radiostation";
import ControlPanel from "./panel/ControlPanel";
import LauncherPanel from "./panel/LauncherPanel";
import LevelPanel from "./panel/LevelPanel";
import NetworkPanel from "./panel/NetworkPanel";
import Notify from "./panel/Notify";
import SessionPanel from "./panel/SessionPanel";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-end items-center h-[1200px] ">
      <div className="w-[950px] h-[500px]  shadow-2xl shadow-redx/20  bg-redx/30 relative p-px [clip-path:polygon(1%_0,_99%_0,_100%_2%,_100%_100%,_0_100%,_0_2%)]">
        <div className="size-full bg-black [clip-path:polygon(1%_0,_99%_0,_100%_2%,_100%_100%,_0_100%,_0_2%)]">
          <div className="px-2 pb-2 pt-4 size-full">
            <div className="text-xs font-nerdfonts text-yellowx/50 left-1/2 text-center top-0  absolute">
              󰄄
            </div>
            {/* main content */}
            <div className="w-full shadow-2xl shadow-redx/10 h-full rounded-[2px] border-redx/20 bg-black p-1 border relative">
              <Framex />
              <Appframe />
              <SystemPanel />
              <Notify />
              <LauncherPanel />
              <NetworkPanel />
              <LevelPanel />
              <HyprPanel />
              <ChronoPanel />
              <WinSwitch />
              <Radiostation />
              <ControlPanel />
              <SessionPanel />
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-[950px] h-[30px] shadow-2xl shadow-redx/20 bg-redx/30 px-px pb-px justify-center flex items-start
        [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)]
      "
      >
        <div
          className="size-full bg-black shadow-2xl shadow-redx/50 justify-center flex items-start
        [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)]
      "
        >
          <div className="border-b border-x rounded-b-md border-redx/30 w-[200px] h-4"></div>
        </div>
      </div>
      <div className="flex flex-row w-[900px] justify-between">
        <div className="w-10 h-2 shadow-2xl shadow-redx/20 bg-redx/40 justify-center px-px pb-px flex items-start [clip-path:polygon(0_0,_100%_0,_100%_79%,_80%_100%,_21%_100%,_0_76%)]">
          <div className="size-full bg-black/90 [clip-path:polygon(0_0,_100%_0,_100%_79%,_80%_100%,_21%_100%,_0_76%)] shadow-2xl shadow-redx/40"></div>
        </div>
        <div className="w-10 h-2 shadow-2xl shadow-redx/20 bg-redx/40 justify-center px-px pb-px flex items-start [clip-path:polygon(0_0,_100%_0,_100%_79%,_80%_100%,_21%_100%,_0_76%)]">
          <div className="size-full bg-black/90 [clip-path:polygon(0_0,_100%_0,_100%_79%,_80%_100%,_21%_100%,_0_76%)] shadow-2xl shadow-redx/40"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
