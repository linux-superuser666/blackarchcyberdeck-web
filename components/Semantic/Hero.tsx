import React from "react";
import SystemPanel from "../panel/SystemPanel";
import Appframe from "../layer-one/Appframe";
import Framex from "../layer-one/Framex";
import HyprPanel from "../panel/HyprPanel";
import ChronoPanel from "../panel/ChronoPanel";
import ControlPanel from "../panel/ControlPanel";
import WinSwitch from "../widget/WinSwitch";
import Radiostation from "../widget/Radiostation";

const Hero = () => {
  return (
    <div className="flex flex-col w-full justify-end items-center h-[1200px] ">
      <div className="w-[950px] h-[500px] border-redx/20 shadow-2xl shadow-redx/20 rounded-t-2xl bg-black  px-2 pb-2 pt-4 border relative">
        <div className="text-xs font-nerdfonts text-yellowx/50 left-1/2 text-center top-0 absolute">
          󰄄
        </div>
        {/* main content */}
        <div className="w-full h-full rounded-sm border-redx/20 bg-black p-1 border relative">
          <Framex />
          <Appframe />
          <SystemPanel />
          <HyprPanel />
          <ChronoPanel />
          <WinSwitch />
          <Radiostation />
          <ControlPanel />
        </div>
      </div>
      <div className="w-[950px] h-[30px] border-redx/20 shadow-2xl shadow-redx/20 rounded-b-2xl bg-black  px-2 pb-2 pt-0 border justify-center flex items-start">
        <div className="border-b border-x rounded-b-md border-redx/30 w-[350px] h-1"></div>
      </div>
      <div className="flex flex-row w-[900px] justify-between">
        <div className="w-10 h-1 border-redx/20 shadow-2xl shadow-redx/20 rounded-b-2xl bg-black px-2 pb-2 pt-0 border-x border-b justify-center flex items-start"></div>
        <div className="w-10 h-1 border-redx/20 shadow-2xl shadow-redx/20 rounded-b-2xl bg-black px-2 pb-2 pt-0 border-x border-b justify-center flex items-start"></div>
      </div>
    </div>
  );
};

export default Hero;
