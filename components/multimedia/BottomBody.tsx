import React from "react";
import Mur from "../common/Mur";

const BottomBody = () => {
  return (
    <div
      className="w-[1100px] cursor h-[45px] shadow-2xl shadow-redx/20 bg-yellowx/50 p-[2px] justify-center flex items-start
        [clip-path:polygon(0_0,_100%_0,_100%_75%,_99%_100%,_81.8%_100%,_81.8%_98%,_81.4%_98%,_81.4%_100%,_18.6%_100%,_18.6%_95%,_18.3%_95%,_18.3%_100%,_1%_100%,_0_75%)]
      "
    >
      <div
        className="
           [clip-path:polygon(0_0,_100%_0,_100%_75%,_99%_100%,_81.9%_100%,_81.9%_96%,_81.5%_96%,_81.5%_100%,_18.5%_100%,_18.5%_93%,_18.1%_93%,_18.1%_100%,_1%_100%,_0_75%)]
      size-full bg-black shadow-2xl shadow-redx/50 justify-center grid grid-cols-3 grid-rows-2 items-start  text-transparent relative"
      >
        <div className="absolute bottom-0 size-full flex items-end justify-center">
          <div className="border-redx/40 border-x border-t w-[700px] h-5 rounded-t-sm px-1 pt-1">
            <div className="rounded-t-xs size-full border-redx/40 border-x border-t flex flex-row items-center justify-between px-1 pt-0.5">
              <Mur />
              <Mur />
            </div>
          </div>
        </div>
        <div className="w-full items-center justify-center border-b border-redx/30 h-4"></div>
        <div className="border-b border-redx/30 w-full h-4">
          <div className="flex flex-col size-full">
            <div className="size-full border-b-[2px] border-x-[2px] border-yellowx/50"></div>
            <div className="size-full border-x  border-redx/30"></div>
          </div>
        </div>
        <div className="w-full items-center justify-center border-b border-redx/30 h-4"></div>
        <div className="w-full flex gap-6 flex-row items-center justify-start pl-8 mt-1">
          <div className="h-2 rounded-[3px]  border flex w-12 border-yellowx/20 p-[2px] gap-px">
            <div className="bg-redx/70  animate-pulse duration-75 rounded-[3px] size-full"></div>
            <div className="bg-yellowx/80  animate-blink-medium rounded-[3px] h-full w-6"></div>
            <div className="bg-redx/70  animate-blink-slow rounded-[3px] size-full"></div>
          </div>
          <div className="h-2 rounded-[3px]  border w-8 border-yellowx/20 p-[2px]">
            <div className="bg-redx/70 animate-pulse rounded-[3px] size-full"></div>
          </div>
        </div>
        <div className="w-full h-full"></div>
        <div className="w-full flex gap-4 mt-0.5 flex-row items-center justify-end pr-8">
          <div className="border size-3 cursor border-redx/30 rounded-full p-px">
            <div className="border size-full border-yellowx/50 rounded-full p-px"></div>
          </div>
          <div className="border size-3 cursor border-redx/30 rounded-full p-px">
            <div className="border size-full border-yellowx/50 rounded-full p-px"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBody;
