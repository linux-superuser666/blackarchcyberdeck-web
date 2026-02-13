import React from "react";
import Image from "next/image";
const Media = () => {
  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="absolute gap-px bg-neutral-900/90 size-full grid grid-cols-1 grid-rows-[18px_140px_10px_20px_1fr_15px]">
        <div className="border-b border-redx/10 flex gap-3.5 font-medium text-slate-100 tracking-normal bg-neutral-900/90 text-[9px] p-1">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Docs</p>
          <p>Profile</p>
          <p>Scene Collection</p>
          <p>Tools</p>
          <p>Help</p>
        </div>
        <div className="border-b border-redx/10 p-1 flex justify-center items-center w-full">
          <div className="border border-redx/30 h-full w-[250px]"></div>
        </div>
        <div className="flex gap-3.5 font-medium text-slate-400 tracking-normal bg-neutral-900/90 text-[8px] h-3 flex-row pl-2 items-center">
          <p>-</p>
          <p>26%</p>
          <p>+</p>
          <p>Scale to Window</p>
          <div className="w-3 h-2 flex items-center justify-center">
            <div className="bg-slate-400 w-2 h-1 [clip-path:polygon(100%_0,_50%_100%,_0_0)]"></div>
          </div>
        </div>
        <div className="p-1 bg-neutral-900/90 h-7 w-full">
          <div className="flex gap-1 pl-1 size-full text-[9px] flex-row items-center">
            <div className="w-40 h-full pt-1.5">No Source Selected</div>
            <div className="flex size-full flex-row gap-2">
              <div className="border border-neutral-200/10 p-1 rounded-sm h-full w-fit">
                Properties
              </div>
              <div className="border border-neutral-200/10 p-1 rounded-sm h-full w-fit">
                Filters
              </div>
            </div>
          </div>
        </div>
        <div className="grid pt-3 pb-1 gap-1 px-1 size-full grid-cols-5 grid-rows-1">
          <div className="border border-redx/10 rounded-sm flex flex-col p-1 gap-1 text-[9px] text-slate-100">
            <p className="font-bold">Scenes</p>
            <div className="flex-col w-full justify-center flex gap-1 p-1">
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Scene
              </div>
            </div>
          </div>
          <div className="border border-redx/10 rounded-sm flex flex-col p-1 gap-1 text-[9px] text-slate-100">
            <p className="font-bold">Resources</p>
            <div className="flex-col w-full justify-center flex gap-1 p-1">
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Screen Capture
              </div>
            </div>
          </div>
          <div className="border border-redx/10 rounded-sm flex flex-col p-1 gap-1 text-[9px] text-slate-100">
            <p className="font-bold">Audio Mixer</p>
            <div className="flex-col w-full justify-center flex gap-1 p-1"></div>
          </div>
          <div className="border border-redx/10 rounded-sm flex flex-col p-1 gap-1 text-[9px] text-slate-100">
            <p className="font-bold">Scenes Transitions</p>
            <div className="flex-col w-full justify-center flex gap-1 p-1">
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Cut
              </div>
            </div>
          </div>
          <div className="border border-redx/10 rounded-sm flex flex-col p-1 gap-1 text-[9px] text-slate-100">
            <p className="font-bold">Controls</p>
            <div className="flex-col w-full justify-center flex gap-1 p-1">
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Start Streaming
              </div>
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Start recording
              </div>
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Studio Mode
              </div>
              <div className="text-center h-4 items-center flex justify-center border border-redx/10">
                Settings
              </div>
            </div>
          </div>
        </div>
        <div className="border border-redx/10 rounded-sm flex gap-3.5 px-2 font-medium text-slate-100 tracking-normal bg-neutral-900/90 uppercase items-center text-[9px] justify-end pt-0.5">
          <div className="flex gap-px items-end">
            <div className="bg-greyx/30 w-0.5 h-0.5"></div>
            <div className="bg-greyx/30 w-0.5 h-1"></div>
            <div className="bg-greyx/30 w-0.5 h-1.5"></div>
            <div className="bg-greyx/30 w-0.5 h-2"></div>
          </div>
          <div className="flex gap-1 items-center">
            <div className="h-1 w-2 bg-greyx/30"></div>
            <p>00:00:00</p>
          </div>
          <div className="flex gap-1">
            <div className="size-2 bg-redx/30 rounded-full"></div>
            <p>00:00:00</p>
          </div>
          <p>cpu:10.3%</p>
          <p>30.00 / 30.00 fps</p>
        </div>
      </div>
    </div>
  );
};

export default Media;
