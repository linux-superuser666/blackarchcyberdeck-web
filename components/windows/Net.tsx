import React from "react";
import Image from "next/image";
const Net = () => {
  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="size-full text-[10px] flex flex-col">
        <div className="flex flex-row text-redx gap-4 bg-black px-2.5 w-full items-center h-6">
          <div className="w-3 h-2 border-l-2 border-y border-r rounded-xs border-redx/40"></div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts text-greyx pl-5">󰒃</div>
          <div className="font-nerdfonts text-greyx"></div>
          <div className="w-full">link</div>
          <div className="font-nerdfonts text-greyx"></div>
          <p>-</p>
          <p>100%</p>
          <p>+</p>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>
          <div className="flex w-20 gap-1">
            <div className="font-nerdfonts"></div>
            <p>Sign In</p>
          </div>
          <div className="font-nerdfonts text-greyx"></div>
          <div className="font-nerdfonts text-greyx">󰍜</div>
        </div>
        <div className="flex text-redx flex-row size-full">
          <div className="flex bg-black flex-col h-full w-[36px] gap-3.5 items-center p-1">
            <div className="bg-slate-300/50 w-full  h-12"></div>
            <div className="hover:bg-slate-300/50 flex justify-center items-center text-lg text-greyx size-6 hover:text-black">
              +
            </div>
            <div className="size-full border-b border-redx/30"></div>
            <div className="font-nerdfonts flex justify-center items-center">
              󰌘
            </div>
            <div className="font-nerdfonts flex justify-center items-center">
              󰋚
            </div>
            <div className="font-nerdfonts flex justify-center items-center">
              
            </div>
            <div className="font-nerdfonts flex justify-center items-center">
              
            </div>
          </div>
          <div className="flex size-full border-l border-t border-redx/30 bg-slate-900/90"></div>
        </div>
      </div>
    </div>
  );
};

export default Net;
