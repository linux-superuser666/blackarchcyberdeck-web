"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import BinLogo from "../common/BinLogo";
import BinTitle from "../common/BinTitle";

const TIMINGS = {
  WRAPPER_OPEN: 0,
  NOTIF1_SHOW: 500,
  NOTIF2_SHOW: 1500,
  NOTIF2_HIDE: 7000,
  NOTIF1_HIDE: 10000,
  WRAPPER_HIDE_DELAY: 1000,
  LOOP: 20000,
};

type NotifState = "hidden" | "bottom" | "top";

const Notify = () => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [notifStates, setNotifStates] = useState<NotifState[]>([
    "hidden",
    "hidden",
  ]);

  useEffect(() => {
    let timeouts: NodeJS.Timeout[] = [];
    const startSequence = () => {
      timeouts.push(
        setTimeout(() => setContainerVisible(true), TIMINGS.WRAPPER_OPEN)
      );
      timeouts.push(
        setTimeout(() => setNotifStates(["top", "hidden"]), TIMINGS.NOTIF1_SHOW)
      );
      timeouts.push(
        setTimeout(() => setNotifStates(["top", "bottom"]), TIMINGS.NOTIF2_SHOW)
      );
      timeouts.push(
        setTimeout(() => setNotifStates(["hidden", "top"]), TIMINGS.NOTIF2_HIDE)
      );
      timeouts.push(
        setTimeout(
          () => setNotifStates(["hidden", "hidden"]),
          TIMINGS.NOTIF1_HIDE
        )
      );
      timeouts.push(
        setTimeout(
          () => setContainerVisible(false),
          TIMINGS.NOTIF1_HIDE + TIMINGS.WRAPPER_HIDE_DELAY
        )
      );
      timeouts.push(setTimeout(startSequence, TIMINGS.LOOP));
    };
    startSequence();
    return () => timeouts.forEach((t) => clearTimeout(t));
  }, []);

  return (
    <div
      className={`ml-3 absolute z-[999] top-[290px] w-[200px] flex flex-row gap-1 h-[145px] select-none transform origin-left transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)]
        ${
          containerVisible
            ? "scale-x-100 opacity-100"
            : "scale-x-0 opacity-0 pointer-events-none"
        }`}
    >
      <BinLogo iconSrc="/icons/dbus-icon.png" />
      <div className="flex flex-col leading-none gap-0 w-full">
        <BinTitle text="coonection_d-bus 1.0010.1" />

        <div className="size-full pt-1 relative">
          <div
            className={`text-redx mt-1 h-fit items-start max-w-full w-fit flex flex-row gap-0.5 text-xs
              transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)]
              ${notifStates[0] === "hidden" ? "opacity-0 -translate-x-10" : ""}
              ${notifStates[0] === "bottom" ? "opacity-100 translate-x-0" : ""}
              ${notifStates[0] === "top" ? "opacity-100 -translate-x-0" : ""}`}
          >
            <div className="pt-2">
              <Image
                src="/icons/mrnngstr666.png"
                alt=""
                width={30}
                height={10}
                className="object-contain drop-shadow-[0_0_2px_rgba(255,0,0,1)]"
              />
            </div>
            <div className="flex flex-col gap-1 overflow-hidden h-full w-full">
              <div id="notif" className="flex-col">
                <div className="flex text-yellowx font-bold items-center text-[9px] flex-row gap-1">
                  <Image
                    src="/icons/ba-logo.png"
                    alt="ba logo"
                    width={9}
                    height={10}
                    className="object-contain"
                  />
                  <div className="pt-1 text-[7px] uppercase tracking-widest">
                    linux.superuser
                  </div>
                </div>
                <div
                  className="font-medium text-[8px] text-yellowx tracking-widest"
                  style={{ textShadow: "0px 0px 2px rgba(255,255,0,1)" }}
                >
                  mrnngstr666
                </div>
                <div
                  className="bg-yellowx/50
                  [clip-path:polygon(0_0,_3%_20%,_86%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)]
                  p-px w-full min-h-6 h-auto font-bold text-yellowx"
                >
                  <div
                    className="bg-black
                    [clip-path:polygon(0_0,_2%_20%,_89%_20%,_100%_20.5%,_100%_100%,_3.5%_100%,_0%_85.5%)]
                    min-h-6 size-full font-bold text-yellowx pt-3 pl-2 pr-px pb-px break-words whitespace-normal"
                  >
                    Github link at NET
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`text-redx mt-1 h-fit items-start max-w-full w-fit flex flex-row gap-0.5 text-xs
              transition-all duration-200 ease-[cubic-bezier(0.65,0,0.35,1)]
              ${notifStates[1] === "hidden" ? "opacity-0 -translate-x-10" : ""}
              ${notifStates[1] === "bottom" ? "opacity-100 translate-x-0" : ""}
              ${
                notifStates[1] === "top"
                  ? "opacity-100 -translate-y-[60px]"
                  : ""
              }`}
          >
            <div className="pt-2">
              <Image
                src="/icons/mrnngstr666.png"
                alt=""
                width={30}
                height={10}
                className="object-contain drop-shadow-[0_0_2px_rgba(255,0,0,1)]"
              />
            </div>
            <div className="flex flex-col gap-1 overflow-hidden h-full w-full">
              <div id="notif" className="flex-col">
                <div className="flex text-yellowx font-bold items-center text-[9px] flex-row gap-1">
                  <Image
                    src="/icons/ba-logo.png"
                    alt="ba logo"
                    width={9}
                    height={10}
                    className="object-contain"
                  />
                  <div className="pt-1 text-[7px] uppercase tracking-widest">
                    linux.superuser
                  </div>
                </div>
                <div
                  className="font-medium text-[8px] text-yellowx tracking-widest"
                  style={{ textShadow: "0px 0px 2px rgba(255,255,0,1)" }}
                >
                  mrnngstr666
                </div>
                <div
                  className="bg-yellowx/50
                  [clip-path:polygon(0_0,_3%_20%,_86%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)]
                  p-px w-full min-h-6 h-auto font-bold text-yellowx"
                >
                  <div
                    className="bg-black
                    [clip-path:polygon(0_0,_2%_20%,_89%_20%,_100%_20.5%,_100%_100%,_3.5%_100%,_0%_85.5%)]
                    min-h-6 size-full font-bold text-yellowx pt-3 pl-2 pr-px pb-px break-words whitespace-normal"
                  >
                    Documentation at JOURNAL
                  </div>
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
