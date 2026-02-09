import React from "react";
import Image from "next/image";
import Intro from "./Intro";
const Head = () => {
  return (
    <div className="w-full h-60 mt-20">
      <div className="w-full h-full flex flex-col gap-5 items-center justify-center">
        <div className="w-fit h-fit px-5  py-10 flex items-center justify-center rounded-full border bg-darkbluex/80 relative border-redx/50">
          <Image
            src="/cyberdeck-logo.png"
            alt="cyberdecklogo"
            width={100}
            height={10}
            className="object-contain"
          />
          <div className="absolute bottom-0 pb-5 text-redx text-xs">
            mrnngstr666
          </div>
        </div>
        <Intro />
      </div>
    </div>
  );
};

export default Head;
