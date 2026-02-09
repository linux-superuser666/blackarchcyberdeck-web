import React from "react";
import Image from "next/image";

const Cyberware = () => {
  return (
    <div className=" border  border-redx/50 h-full w-full ">
      <Image
        priority
        src="/widget/ws1.png"
        alt="ws1"
        width={1259}
        height={636}
        className="opacity-70 size-full object-fill"
      />
    </div>
  );
};

export default Cyberware;
