import React from "react";
import Mur from "../common/Mur";
import GlitchText from "./GlitchText";
import GlitchSlideImg from "./GlitchSlideImg";

const PanelTop = () => {
  return (
    <div
      className="bg-yellowx/50 
            w-[310px] h-12 p-[2px] [clip-path:polygon(12%_0,_99%_0,_100%_4%,_100%_94%,_99%_100%,_0.5%_100%,_0_96%,_0_66%)]"
    >
      <div className="size-full bg-black  [clip-path:polygon(12%_0,_99%_0,_100%_4%,_100%_94%,_99%_100%,_0.5%_100%,_0_96%,_0_71%)] ">
        <div className="size-full flex flex-row pl-1">
          <div className="h-full flex items-end w-fit pb-1 mr-4">
            <Mur />
          </div>
          <div className="h-full w-fit items-center flex pt-px">
            <div className="border-[2px] rounded-full border-yellowx/40 size-6 p-1 mr-1">
              <div className="border rounded-full border-yellowx/30 size-full"></div>
            </div>
          </div>
          <div className="h-full flex items-center mx-4 w-fit">
            <Mur />
          </div>
          <div className="h-full flex items-center mr-4 w-fit">
            <Mur />
          </div>
          <div className="size-full flex flex-row">
            <div className="flex flex-col gap-0 leading-none h-full items-center  pt-1 ml-5 mr-1">
              <GlitchText className="!text-[18px]" text="Cyberdeck" />
              <GlitchText className="!text-[18px]" text="blackarch" />
            </div>
            <GlitchSlideImg />
            <div className="h-full flex flex-col py-1 justify-between items-center mr-1 w-fit ml-1">
              <Mur />
              <Mur />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelTop;
