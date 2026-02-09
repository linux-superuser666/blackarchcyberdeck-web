import React from "react";

const Appframe = () => {
  return (
    <div className="absolute inset-0 px-6 pb-7 pt-8 z-0 flex justify-center items-center w-full h-full">
      <div className="flex border flex-row justify-between border-redx/50 min-w-full h-full">
        <div className="flex flex-row">
          <div className="border-r border-redx/50 animate-expandl1 w-1"></div>
          <div className="border-r border-redx/50 animate-expandl2 w-3"></div>
          <div className="border-r border-redx/50 animate-expandl3 w-5"></div>
        </div>
        <div className="flex flex-row">
          <div className="border-l border-redx/50 animate-expandr3 w-5"></div>
          <div className="border-l border-redx/50 animate-expandr2 w-3"></div>
          <div className="border-l border-redx/50 animate-expandr1 w-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Appframe;
