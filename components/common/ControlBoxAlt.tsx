import Image from "next/image";
import React from "react";

const ControlBoxAlt = () => {
  return (
    <div className="flex flex-col w-9 h-9 gap-0 leading-none justify-center items-center">
      {/* TOP LINE */}
      <div className="bg-redx/70 w-4 h-[1px] "></div>

      {/* BORDER LAYER */}
      <div
        className="
          w-8 h-8 bg-redx/70
          [clip-path:polygon(0_0,_25%_1%,_29%_6%,_74%_6%,_78%_0,_100%_0,_100%_61%,_86%_74%,_86%_100%,_15%_100%,_0_84%)]
          flex items-center justify-center
        "
      >
        {/* INNER FILL */}
        <div
          className=" relative
            w-[30px] h-[30px] bg-black/85
            [clip-path:polygon(0_0,_25%_1%,_29%_6%,_74%_6%,_78%_0,_100%_0,_100%_61%,_86%_74%,_86%_100%,_15%_100%,_0_84%)]
          "
        />
        <div className="absolute h-7 w-7 flex items-center justify-center ">
          <Image
            priority
            src="/icons/package.png"
            alt="sadas"
            width={16}
            height={16}
            className="object-contain"
          />
          {/* content reusable / img/ div/ */}
        </div>
        <div className="absolute text-right items-start justify-end h-7 font-bold text-[7px] w-7 flex">
          <div id="numberCount">100</div>
        </div>
      </div>
    </div>
  );
};

export default ControlBoxAlt;
