"use client";
import React, { useState } from "react";

const SwitchBtn = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <button
      onClick={() => setIsOn(!isOn)}
      className="
        flex flex-row items-center gap-px uppercase
        select-none cursor-pointer
      "
    >
      <div
        className={`
          text-[6px] font-bold
          ${isOn ? "text-greyx" : "text-redx/70"}
        `}
      >
        {isOn ? "on" : "off"}
      </div>

      <div className="  relative w-8 h-3 p-px [clip-path:polygon(0_0,_100%_0,_100%_70%,_80%_100%,_0_100%)] bg-redx/20">
        <div className=" size-full [clip-path:polygon(0_0,_100%_0,_100%_70%,_80%_100%,_0_100%)] bg-darkbluex p-px">
          <div
            className={`
            absolute top-[1px] h-[10px] w-[16px] transition-all
                 [clip-path:polygon(0_0,_100%_0,_100%_70%,_70%_100%,_0_100%)]  
            ${isOn ? "right-0.5 bg-white" : "left-0.5 bg-redx"}
          `}
          />
        </div>
      </div>
    </button>
  );
};

export default SwitchBtn;
