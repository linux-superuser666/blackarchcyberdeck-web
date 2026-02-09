import Image from "next/image";
import React from "react";

const Framex = () => {
  return (
    <div className="grid grid-cols-[15px_1fr_25px] absolute z-20 inset-0 w-full h-full grid-rows-1 gap-0 justify-center text-[5px] items-end">
      <div className="items-start justify-between text-start w-full h-full flex">
        <div className="flex h-full py-20 justify-between flex-col">
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div className="flex h-full justify-center bg-scanner flex-col w-1"></div>
        <div></div>
      </div>
      {/* frame bottom */}
      <div className="text-start w-full h-7"></div>
      {/* frame bottom */}
      {/* frame right */}
      <div className="items-start justify-between text-start w-full h-full flex ">
        <div className="flex h-full py-16 justify-between flex-col">
          <div className="flex flex-col gap-4 top-0 relative">
            <div
              className="text-[8px] relative leading-2 text-redx font-bold
        before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            >
              1001 <br />
              0101 <br />
              0011 <br />
              1100
            </div>
            <div
              className="text-[8px] relative leading-2 text-redx font-bold
        before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            >
              1001 <br />
              0101 <br />
              0011 <br />
              1100
            </div>
            <div
              className="text-[8px] relative leading-2 text-redx font-bold
        before:content-['-'] before:animate-blink-slow before:-top-4 before:text-sm before:absolute before:text-yellowx"
            ></div>
          </div>
          <div>1</div>
        </div>
        <div className="flex h-full justify-center bg-scanner flex-col w-1"></div>
        <div className="flex h-full justify-center flex-col">3</div>
      </div>
    </div>
  );
};

export default Framex;
