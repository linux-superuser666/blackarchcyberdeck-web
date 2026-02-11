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
import Mur from "./common/Mur";
import TodoPanel from "./panel/TodoPanel";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-end items-center h-[1200px]">
      <div className="w-[950px] h-[500px] -mb-1  drop-shadow-2xl shadow-redx/50 bg-redx/30 relative p-[2px] [clip-path:polygon(1%_0,_99%_0,_100%_2%,_100%_100%,_0_100%,_0_2%)]">
        <div className="size-full bg-black [clip-path:polygon(1%_0,_99%_0,_100%_2%,_100%_100%,_0_100%,_0_2%)]">
          <div className="px-4 pb-1 pt-4 size-full">
            <div className="text-xs font-nerdfonts text-yellowx/50 text-center top-0  w-[930px] flex flex-col gap-10 absolute">
              <div className="h-3 w-full px-5 flex justify-between item-center">
                <div className="flex pt-1.5">
                  <Mur />
                </div>
                <div className="flex pt-1.5">
                  <Mur />
                </div>
                <div>󰄄</div>
                <div className="flex pt-1.5">
                  <Mur />
                </div>
                <div className="flex pt-1.5">
                  <Mur />
                </div>
              </div>
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
              <TodoPanel />
              <ControlPanel />
              <SessionPanel />
            </div>
          </div>
        </div>
      </div>
      <div className="h-5 w-[958px] cursor flex border-redx/30 border-x bg-black">
        <div className="w-1 border border-redx/30"></div>
        <div className="w-full h-full flex justify-between border-x border-redx/30 items-center pt-1 px-4">
          <Mur />
          <Mur />
          <Mur />
          <Mur />
        </div>
        <div className="w-1 border border-redx/30"></div>
      </div>
      <div
        className="w-[1100px] cursor h-[30px] shadow-2xl shadow-redx/20 bg-redx/30 p-[2px] justify-center flex items-start
        [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)]
      "
      >
        <div className="size-full bg-black shadow-2xl shadow-redx/50 justify-center grid grid-cols-3 cursor grid-rows-2 items-start [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)] pb-1 text-[6px] text-transparent">
          <div className="w-full items-center cursor justify-center border-b border-redx/30">
            1
          </div>
          <div className="border-b border-x cursor border-redx/30 w-full h-4"></div>
          <div className="w-full items-center cursor justify-center border-b border-redx/30">
            3
          </div>
          <div className="w-full flex gap-6 cursor flex-row items-center justify-start pl-8">
            <div className="h-2 rounded-[3px] cursor border flex w-12 border-redx/30 p-[2px] gap-px">
              <div className="bg-redx/70 cursor animate-pulse duration-75 rounded-[3px] size-full"></div>
              <div className="bg-yellowx/80 cursor animate-blink-medium rounded-[3px] h-full w-6"></div>
              <div className="bg-redx/70 cursor animate-blink-slow rounded-[3px] size-full"></div>
            </div>
            <div className="h-2 rounded-[3px] cursor border w-8 border-redx/30 p-[2px]">
              <div className="bg-redx/70 cursor rounded-[3px] size-full"></div>
            </div>
          </div>
          <div className="w-full items-center cursor justify-center">5</div>
          <div className="w-full flex cursor gap-8 flex-row items-center justify-end pr-8">
            <div className="border size-3 cursor border-redx/30 rounded-full p-px">
              <div className="border size-full border-redx/30 rounded-full p-px"></div>
            </div>
            <div className="border size-3 cursor border-redx/30 rounded-full p-px">
              <div className="border size-full border-redx/30 rounded-full p-px"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex cursor flex-row w-[1030px] justify-between">
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px  flex items-start border-x border-b border-redx/30"></div>
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px flex items-start border-x border-b border-redx/30"></div>
      </div>
      <div className="w-full cursor h-1 border-t border-redx/30 mt-[1px] bg-redx/10"></div>
    </div>
  );
};

export default Hero;
