import React from "react";

const CableRx = () => {
  return (
    <div className="flex flex-col gap-0 ml-12 justify-center items-center">
      <div className="w-6 h-1 flex">
        <div className="w-1 h1 border-l border-redx/40"></div>
        <div className="w-4 h1 border-l border-redx/40"></div>
        <div className="w-1 h1 border-x border-redx/40"></div>
      </div>
      <div
        className="w-8 h-10
              [clip-path:polygon(25%_100%,_0_30%,_0_0,_100%_0,_100%_30%,_75%_100%)] p-px 
               bg-redx/40"
      >
        <div
          className="size-full
              [clip-path:polygon(25%_100%,_0_30%,_0_0,_100%_0,_100%_30%,_75%_100%)] 
               bg-black flex items-center justify-start gap-1 flex-col pt-2"
        >
          <div className="w-4 border-b border-redx/40"></div>
          <div className="w-4 border-b border-redx/40"></div>
          <div className="text-redx/30 font-medium text-xs">Rx</div>
        </div>
      </div>
      <div className="bg-black w-[18px] h-1 border-redx/30 border-x border-b"></div>
      <div className="bg-black w-[18px] h-1 border-redx/30 border-x border-b"></div>
    </div>
  );
};

export default CableRx;
