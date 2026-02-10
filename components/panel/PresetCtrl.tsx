import React from "react";
type PresetCtrlProps = {
  label: string;
};

const PresetCtrl = ({ label }: PresetCtrlProps) => {
  return (
    <div className="w-32 h-3 text-greyx z-[90] [clip-path:polygon(0_0,_100%_0,_100%_75%,_96%_100%,_0_100%)] bg-redx/30 p-px relative flex items-center justify-center">
      <div className="size-full [clip-path:polygon(0_0,_100%_0,_100%_75%,_96%_100%,_0_100%)] bg-black flex flex-row gap-1 items-center justify-between p-px">
        <div
          id="arrowLeft"
          className="w-1.5 h-2 bg-greyx/70 cursor-pointer [clip-path:polygon(100%_0,_100%_16%,_79%_26%,_78%_71%,_100%_84%,_100%_100%,_0_48%)] p-px "
        >
          <div className="size-full bg-darkbluex [clip-path:polygon(100%_0,_100%_16%,_79%_26%,_78%_71%,_100%_84%,_100%_100%,_0_48%)]"></div>
        </div>
        <div className="relative z-[99] w-full h-full">
          <div className="w-full h-full flex justify-center items-center text-center">
            {label}
          </div>
        </div>
        <div
          id="arrowRight"
          className="w-1.5 h-2 bg-greyx/70 cursor-pointer [clip-path:polygon(0_0,_0_16%,_21%_26%,_22%_71%,_0_84%,_0_100%,_100%_48%)] p-px "
        >
          <div className="size-full bg-darkbluex [clip-path:polygon(0_0,_0_16%,_21%_26%,_22%_71%,_0_84%,_0_100%,_100%_48%)]"></div>
        </div>
      </div>
    </div>
  );
};

export default PresetCtrl;
