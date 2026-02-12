import React from "react";

const BottomBody = () => {
  return (
    <div
      className="w-[1100px] cursor h-[45px] shadow-2xl shadow-redx/20 bg-yellowx/50 p-[2px] justify-center flex items-start
        [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)]
      "
    >
      <div className="size-full bg-black shadow-2xl shadow-redx/50 justify-center grid grid-cols-3  grid-rows-2 items-start [clip-path:polygon(0_0,_100%_0,_100%_78%,_99%_100%,_1%_100%,_0%_78%)] pb-1 text-[6px] text-transparent">
        <div className="w-full items-center justify-center border-b border-redx/30 h-4"></div>
        <div className="border-b border-redx/30 w-full h-4">
          <div className="flex flex-col size-full">
            <div className="size-full border-b-[2px] border-x-[2px] border-yellowx/50"></div>
            <div className="size-full border-x  border-redx/30"></div>
          </div>
        </div>
        <div className="w-full items-center justify-center border-b border-redx/30 h-4"></div>
        <div className="w-full flex gap-6 cursor flex-row items-center justify-start pl-8">
          <div className="h-2 rounded-[3px] cursor border flex w-12 border-yellowx/50 p-[2px] gap-px">
            <div className="bg-redx/70 cursor animate-pulse duration-75 rounded-[3px] size-full"></div>
            <div className="bg-yellowx/80 cursor animate-blink-medium rounded-[3px] h-full w-6"></div>
            <div className="bg-redx/70 cursor animate-blink-slow rounded-[3px] size-full"></div>
          </div>
          <div className="h-2 rounded-[3px] cursor border w-8 border-yellowx/50 p-[2px]">
            <div className="bg-redx/70 cursor rounded-[3px] size-full"></div>
          </div>
        </div>
        <div className="w-full items-center cursor justify-center"></div>
        <div className="w-full flex cursor gap-8 flex-row items-center justify-end pr-8">
          <div className="border size-3 cursor border-yellowx/50 rounded-full p-px">
            <div className="border size-full border-redx/30 rounded-full p-px"></div>
          </div>
          <div className="border size-3 cursor border-yellowx/50 rounded-full p-px">
            <div className="border size-full border-redx/30 rounded-full p-px"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBody;
