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
import PanelTop from "./multimedia/PanelTop";
import BottomBody from "./multimedia/BottomBody";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-end items-center h-[1200px]">
      <div className="w-[950px] h-[540px] drop-shadow-2xl shadow-redx/50 bg-yellowx/50 relative px-[2px] pt-[2px] [clip-path:polygon(1.3%_3%,_59.8%_3%,_62%_0%,_99%_0,_100%_1.5%,_100%_100%,_0_100%,_0_5%)]">
        <div className="size-full bg-black [clip-path:polygon(1.3%_3%,_60%_3%,_62.1%_0%,_99%_0,_100%_1.5%,_100%_100%,_0_100%,_0_5%)] relative">
          <PanelTop />
          <div className="px-5 pb-1 pt-[56px] size-full">
            <div className="text-xs font-nerdfonts text-yellowx/50 text-center top-0 w-full h-full flex flex-row inset-0 z-0 absolute mur-border-dalam">
              <div className="size-full">
                <div className="border-b border-redx/30 h-[52px] w-full">
                  <Mur />
                  <Mur />
                  <Mur />
                </div>
                <div className="size-full flex flex-row">
                  <div className="border-r border-redx/30 h-[90%] py-1 items-center w-4 justify-between flex flex-col">
                    <Mur />
                    <Mur />
                    <Mur />
                    <Mur />
                  </div>
                  <div className="size-full"></div>
                </div>
              </div>
              <div className="h-full w-[300px] flex flex-col">
                <div className="border-b border-redx/30 h-7 w-full"></div>
                <div className="size-full flex flex-row">
                  <div className="size-full"></div>
                  <div className="border-l border-redx/30 h-full w-4 py-1 items-center justify-between flex flex-col">
                    <Mur />
                    <Mur />
                    <Mur />
                    <Mur />
                  </div>
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
      <div className="h-6 w-[987px] flex bg-black">
        <div className="w-4 h-full bg-yellowx/50 pt-[2px] pl-[2px] [clip-path:polygon(0%_0%,_75%_0%,_100%_15%,_100%_100%,_0%_100%)]">
          <div className="size-full bg-black [clip-path:polygon(0%_0%,_60%_0%,_100%_20%,_100%_100%,_0%_100%)] flex flex-col">
            <div className="border-b h-1.5 border-redx/30"></div>
            <div className="size-full"></div>
          </div>
        </div>
        <div className="h-full pt-[3px]">
          <div className="w-[3px] border-t-[2px] border-yellowx/50 size-full">
            <div className="size-full border-redx/30 border-l"></div>
          </div>
        </div>
        <div className="w-full h-full flex justify-between items-center">
          <div className="border-redx/30 flex border-r flex-col border-t h-full w-[300px]">
            <div className="w-full h-1.5 border-l-[2px] border-yellowx/50"></div>
            <div className="size-full border-t border-l border-redx/30"></div>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="w-full h-1"></div>
            <div className="w-full h-full border-t-[2px] border-x-[2px] border-yellowx/50 items-center flex flex-row justify-between pt-px px-4 ">
              <Mur />
              <Mur />
              <Mur />
              <Mur />
            </div>
          </div>
          <div className="border-redx/30 flex border-l flex-col border-t h-full w-[300px]">
            <div className="w-full h-1.5 border-r-[2px] border-yellowx/50"></div>
            <div className="size-full border-t border-r border-redx/30"></div>
          </div>
        </div>
        <div className="h-full pt-[3px]">
          <div className="w-[3px] border-t-[2px] border-yellowx/50 size-full">
            <div className="size-full border-redx/30 border-r"></div>
          </div>
        </div>
        <div className="w-4 h-full bg-yellowx/50 pt-[2px] pr-[2px] [clip-path:polygon(25%_0%,_100%_0%,_100%_100%,_0%_100%,_0%_15%)]">
          <div className="size-full bg-black [clip-path:polygon(40%_0%,_100%_0%,_100%_100%,_0%_100%,_0%_20%)] flex flex-col">
            <div className="border-b h-1.5 border-redx/30"></div>
            <div className="size-full"></div>
          </div>
        </div>
      </div>
      <BottomBody />
      <div className="flex cursor flex-row w-[1030px] justify-between">
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px flex items-start rounded-b-sm border-x border-b border-yellowx/50"></div>
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px flex items-start border-x rounded-b-sm border-b border-yellowx/50"></div>
      </div>
      <div className="w-full cursor h-1 border-t border-redx/0 mt-[1px] bg-redx/10"></div>
    </div>
  );
};

export default Hero;
