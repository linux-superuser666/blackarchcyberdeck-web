import React from "react";

import Mur from "./common/Mur";
import BottomBody from "./multimedia/BottomBody";
import HeadDecor from "./multimedia/HeadDecor";
import PanelLeft from "./multimedia/PanelLeft";
import PanelRight from "./multimedia/PanelRight";

const Hero = () => {
  return (
    <div className="flex flex-col justify-end items-center size-full">
      <div className="absolute z-50 size-fit bottom-40 left-10">
        <PanelLeft />
      </div>
      <div className="absolute z-50 size-fit bottom-40 right-10">
        <PanelRight />
      </div>
      {/* laptop screen frame */}
      <div className="w-full z-40 max-w-[987px] h-[540px] bg-yellowx/50 px-[2px] pt-[2px] [clip-path:polygon(0_6.5%,_1.5%_4%,_60.7%_4%,_63.4%_0,_98.6%_0,_100%_2%,_100%_70%,_98%_70%,_98%_100%,_2%_100%,_2%_70%,_0%_70%)]">
        <div className="size-full relative bg-black [clip-path:polygon(0_6.5%,_1.5%_4%,_60.9%_4%,_63.6%_0,_98.6%_0,_100%_2%,_100%_69.5%,_98%_69.5%,_98%_100%,_2%_100%,_2%_69.5%,_0%_69.5%)]">
          <HeadDecor />
        </div>
      </div>
      {/* lcd roll */}
      <div className="h-6 w-[985px] flex bg-black">
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
      {/* laptop bottom body */}
      <BottomBody />
      {/* laptop foot */}
      <div className="flex flex-row w-[1030px] justify-between">
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px flex items-start rounded-b-sm border-x border-b border-yellowx/50"></div>
        <div className="w-30 h-1 shadow-2xl shadow-redx/20 bg-black justify-center px-px pb-px flex items-start border-x rounded-b-sm border-b border-yellowx/50"></div>
      </div>
      {/* space bottom screen / table */}
      <div className="w-full h-1 border-t border-redx/0 mt-[1px] bg-redx/10"></div>
    </div>
  );
};

export default Hero;
