import React from "react";
import Mur from "../common/Mur";

const PanelRight = () => {
  return (
    <div className="bg-yellowx/50 w-12 h-[310px] p-[2px] [clip-path:polygon(0%_0%,100%_0%,100%_90%,26%_100%,0%_100%)]">
      <div className="size-full bg-black [clip-path:polygon(0%_0%,100%_0%,100%_90%,22%_100%,0%_100%)] px-1 pt-1 pb-1.5 grid grid-cols-2 grid-rows-[10px_1fr_30px_25px] gap-0">
        <div className="flex items-center justify-start">
          <Mur />
        </div>
        <div className="flex items-center justify-end">
          <Mur />
        </div>
        <div className="col-start-1 row-start-5 flex justify-start">
          <Mur />
        </div>
        <div className="col-start-2 row-start-4 flex justify-end">
          <Mur />
        </div>
        <div className="col-span-2 row-span-2 col-start-1 row-start-2  flex flex-col gap-0 relative pt-3.5">
          <div className="w-8 h-4 absolute top-3.5 left-0.5 pt-px pb-[2px] pr-px pl-[3px] bg-redx/20 px-px [clip-path:polygon(100%_0,_100%_100%,_0_0)]">
            <div className="bg-black size-full [clip-path:polygon(100%_0,_100%_100%,_0_0)]"></div>
          </div>
          <div className="size-8 absolute top-5 left-0.5 bg-redx/20 px-px [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)] py-[2px] pl-px pr-[3px]">
            <div className="bg-black size-full [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>
          </div>

          <div className="size-8 absolute left-0.5 top-[42px] bg-redx/20 px-px [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)] py-[2px] pl-[3px] pr-px">
            <div className="bg-black size-full [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)]"></div>
          </div>
          <div className="size-8 absolute left-0.5 top-[65px] bg-redx/20 px-px [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)] py-[2px] pl-px pr-[3px]">
            <div className="bg-black size-full [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>
          </div>

          <div className="size-8 absolute left-0.5 top-[87px] bg-redx/20 px-px [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)] py-[2px] pl-[3px] pr-px">
            <div className="bg-black size-full [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)]"></div>
          </div>
          <div className="size-8 absolute left-0.5 top-[108px] bg-redx/20 px-px [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)] py-[2px] pl-px pr-[3px]">
            <div className="bg-black size-full [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>
          </div>
          <div className="size-8 absolute left-0.5 top-[130px] bg-redx/20 px-px [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)] py-[2px] pl-[3px] pr-px">
            <div className="bg-black size-full [clip-path:polygon(100%_0%,_100%_100%,_0%_50%)]"></div>
          </div>
          <div className="size-8 absolute left-0.5 top-[151px] bg-redx/20 px-px [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)] py-[2px] pl-px pr-[3px]">
            <div className="bg-black size-full [clip-path:polygon(0%_0%,_100%_50%,_0%_100%)]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PanelRight;
