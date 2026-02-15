import React from "react";

const PinDown = () => {
  return (
    <div className="h-fit w-1 flex flex-col items-center">
      <div className="w-full h-[1px] bg-yellowx/2"></div>
      <div className="w-full h-[2px] bg-yellowx/4"></div>
      <div className="w-full h-0.5 bg-yellowx/6"></div>
      <div className="w-full h-1 bg-yellowx/8"></div>
      <div className="w-full h-1 bg-yellowx/9"></div>
      <div className="w-full h-2 bg-yellowx/9"></div>
      <div className="w-full h-1 bg-yellowx/10 rounded-b-sm"></div>
    </div>
  );
};

export default PinDown;
