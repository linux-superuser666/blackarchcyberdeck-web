"use client";
import Image from "next/image";
import react, { useState } from "react";
import BinLogo from "../common/BinLogo";
import ImageType from "../common/ImageType";

const Notify = () => {
  return (
    <div className="ml-[7px] absolute z-[999] top-[290px] w-[200px] flex flex-row gap-1 h-[145px] ">
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />
      <div className="flex flex-col leading-none gap-0">
        <p className="text-[5px] text-redx/80 uppercase font-orbitron">
          connection_dbus 1.001.1
        </p>
        <div className="text-redx h-full items-start w-48 flex flex-row gap-0.5 uppercase text-xs">
          <Image
            src="/icons/package.png"
            alt=""
            width={30}
            height={10}
            className="object-contain"
          />
          <div className="flex flex-col gap-1 overflow-hidden h-full w-full ">
            <div id="notif" className="flex-col">
              <div className="flex text-yellowx font-bold items-center text-[9px] flex-row gap-1">
                <Image
                  src="/icons/ba-logo.png"
                  alt=""
                  width={9}
                  height={10}
                  className="object-contain"
                />
                <div className="pt-1">system</div>
              </div>
              <div className="font-bold text-yellowx ">notif title</div>
              <div
                className="bg-yellowx/50
              [clip-path:polygon(0_0,_3%_20%,_86%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)] p-px w-full min-h-8 h-auto
              font-bold text-yellowx "
              >
                <div
                  className="bg-black
              [clip-path:polygon(0_0,_2%_20%,_89%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)] min-h-8 size-full font-bold text-yellowx pt-3 pl-2 pr-px pb-x break-words whitespace-normal"
                >
                  notif notification
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notify;
