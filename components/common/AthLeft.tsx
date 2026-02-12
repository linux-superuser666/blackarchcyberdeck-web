import React from "react";

const AthLeft = () => {
  return (
    <div className="size-fit items-end justify-center flex flex-row gap-0">
      <div className="w-4 h-[400px] flex justify-center items-center flex-col">
        <div className="w-4 h-1.5 border border-redx/30"></div>
        <div className="w-2 h-20 border-x border-redx/30"></div>
        <div className="w-3 h-20 border-x border-t border-redx/30"></div>
        <div className="w-4 h-full border border-redx/30"></div>
      </div>
      <div className="w-1 h-6 mb-1 border-y border-redx/30 flex"></div>
      <div className="flex-col flex justify-between h-32 w-2">
        <div className="h-full w-1 ml-px flex flex-col gap-3 items-center">
          <div
            id="txLamp"
            className="h-4 w-full py-px border-y  border-l border-redx/30"
          >
            <div className="size-full bg-yellowx/40 animate-pulse duration-[50]"></div>
          </div>
          <div
            id="rxLamp"
            className="h-4 w-full py-px border-y border-l border-redx/30"
          >
            <div className="size-full bg-orangex/40 animate-pulse duration-75"></div>
          </div>
        </div>
        <div className="w-2 h-12 border-l border-y border-redx/30"></div>
      </div>
    </div>
  );
};

export default AthLeft;
