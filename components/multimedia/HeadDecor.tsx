import React from "react";
import Mur from "../common/Mur";
import Cyberdeck from "../Cyberdeck";
import PanelTop from "./PanelTop";

const HeadDecor = () => {
  return (
    <div className="size-full">
      <div className="absolute size-fit top-[2px] right-[85px]">
        <PanelTop />
      </div>
      <div className="size-full z-30 grid grid-cols-[19px_1fr_1fr_1fr_19px] grid-rows-[20px_18px_1fr_1fr_1fr] gap-0">
        <div className="col-span-3 row-span-2 border-b border-redx/30"></div>
        <div className="col-span-2 col-start-4 border-b border-redx/30"></div>
        <div className="row-span-4 col-start-5 row-start-2 border-l border-redx/30 flex items-center py-2 gap-24 flex-col justify-start">
          <Mur />
          <Mur />
        </div>
        <div className="row-span-3 col-start-1 row-start-3 border-r border-redx/30 flex items-center py-2 gap-20 flex-col justify-start">
          <Mur />
          <Mur />
        </div>
        <div className="col-span-3 row-span-3 col-start-2 row-start-3 p-3.5">
          <div className="size-full border p-px border-redx/30">
            <div className="border border-redx/30 size-full">
              <Cyberdeck />
            </div>
          </div>
        </div>
        <div className="col-start-4 row-start-2"></div>
      </div>
    </div>
  );
};

export default HeadDecor;
