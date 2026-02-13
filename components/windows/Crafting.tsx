import React from "react";
import Image from "next/image";
const Crafting = () => {
  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="bg-black text-redx size-full grid grid-cols-[200px_10px_90px_1fr_115px] text-[9px] grid-rows-[20px_1fr_15px] gap-0">
        <div className="col-span-2 px-2.5 border-b h-full border-redx/30 w-full items-center flex gap-1.5 justify-between">
          <div className="font-nerdfonts w-8">󰇘</div>
          <div className="font-nerdfonts"></div>
          <p>Bash</p>
          <div className="font-nerdfonts">󰅀</div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>

          <div className="font-nerdfonts">󰇘</div>
          <p className="text-xs">|</p>
          <div className="font-nerdfonts">󱏘</div>
          <div className="font-nerdfonts"></div>
        </div>
        <div className="col-span-2 col-start-3 border-b border-x border-redx/30"></div>
        <div className="col-start-5 border-b flex justify-between border-redx/30 px-2.5 items-center">
          <div className="uppercase">QUICKS..</div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts">󰇘</div>
        </div>
        <div className="row-start-2 "></div>
        <div className="row-start-2 border-x border-redx/30"></div>
        <div className="row-start-2 flex size-full">
          <div className="flex flex-col w-[80px] text-[3px] p-1">
            <p>sddlasjdklsjadkla</p>
            <p>sddlasjd</p>
            <p>sddlasjdsaasd</p>
            <p>sddlasjd</p>
            <p>sddlasjdklsjadkla</p>
          </div>
          <div className="flex text-center w-8 flex-col border-r border-redx/30 gap-1">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
          </div>
          <div className="flex w-full"></div>
        </div>
        <div className="row-start-2 border-x border-redx/30"></div>
        <div className="row-start-2 "></div>
        <div className="col-span-5 border-t items-center flex-row px-1 border-redx/30 flex">
          <div className="flex flex-row gap-1 5">
            <div className="font-nerdfonts "></div>
            <p>0</p>
            <div className="font-nerdfonts "></div>
            <p>0</p>
          </div>
          <div className="w-full"></div>
          <div className="font-nerdfonts"></div>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
