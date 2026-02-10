import React from "react";

const PanelBorderPx = () => {
  return (
    <div className="flex w-full flex-col">
      <div className="border-x border-b w-full border-redx/30 h-[2px]"></div>
      <div className="border-x border-redx/30 w-full h-[1px]"></div>
    </div>
  );
};

export default PanelBorderPx;
