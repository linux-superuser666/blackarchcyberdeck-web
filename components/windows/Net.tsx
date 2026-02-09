import React from "react";
import Image from "next/image";
const Net = () => {
  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="relative">
        <Image
          priority
          src="/widget/ws4.png"
          alt="ws1"
          width={1259}
          height={636}
          className="opacity-70 mix-blend-screen object-fill h-[400px]  w-full left-0 top-0 absolute z-0"
        />
      </div>
    </div>
  );
};

export default Net;
