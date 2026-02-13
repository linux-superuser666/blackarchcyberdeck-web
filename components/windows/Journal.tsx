import React from "react";
import Image from "next/image";
const Journal = () => {
  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="absolute gap-px bg-neutral-900/90 size-full grid grid-cols-1 grid-rows-[18px_1fr_15px]">
        <div className="border-b border-redx/10 flex gap-3.5 font-medium text-slate-100 tracking-normal bg-neutral-900/90 text-[9px] p-1">
          <p>File</p>
          <p>Edit</p>
          <p>View</p>
          <p>Tools</p>
          <p>Help</p>
        </div>
        <div className="border-b border-redx/10 p-1 flex justify-center items-center w-full">
          <div className="bg-greyx/90 h-full w-[666px]"></div>
        </div>
        <div className="border border-redx/10 rounded-sm flex gap-3.5 px-2 font-medium text-slate-100 tracking-normal bg-neutral-900/90 uppercase items-center text-[9px] justify-end pt-0.5"></div>
      </div>
    </div>
  );
};

export default Journal;
