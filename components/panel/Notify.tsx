"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";
import Link from "next/link";
import BinTitle from "../common/BinTitle";

const SHOW_DURATION = 10000;
const HIDE_DURATION = 5000;
const CONTENT_DELAY = 400;

const Notify = () => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let mainTimeout: NodeJS.Timeout;
    let innerTimeout: NodeJS.Timeout;

    const loop = () => {
      setContainerVisible(true);
      innerTimeout = setTimeout(() => {
        setContentVisible(true);
      }, CONTENT_DELAY);

      mainTimeout = setTimeout(() => {
        setContentVisible(false);

        innerTimeout = setTimeout(() => {
          setContainerVisible(false);
        }, CONTENT_DELAY);

        mainTimeout = setTimeout(loop, HIDE_DURATION);
      }, SHOW_DURATION);
    };

    loop();

    return () => {
      clearTimeout(mainTimeout);
      clearTimeout(innerTimeout);
    };
  }, []);

  return (
    <div
      className={`ml-3 absolute z-[999] top-[290px] w-[220px] flex flex-row gap-1 h-[145px]
      transition-all duration-500 ease-in-out transform origin-left
      ${
        containerVisible
          ? "opacity-100 scale-x-100"
          : "opacity-0 scale-x-0 pointer-events-none"
      }`}
    >
      <BinLogo iconSrc="/icons/dbus-icon.png" />
      <div className="flex flex-col leading-none gap-0 w-full">
        <BinTitle text="coonection_d-bus 1.0010.1" />
        <div
          className={`text-redx mt-1 h-full items-start w-full flex flex-row gap-0.5 text-xs
          transition-all duration-500 ease-in-out
          ${
            contentVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-4"
          }`}
        >
          <div className="bg-redx/80 border border-redx/50 rounded-full pb-px">
            <Image
              src="/icons/githubrepo.svg"
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
                <div className="pt-1 uppercase tracking-widest">github</div>
              </div>

              <div
                className="font-medium text-yellowx tracking-wide"
                style={{
                  textShadow: "0px 0px 2px rgba(255,255,0,1)",
                }}
              >
                BlackArchCyberpunk2077
              </div>

              <div
                className="bg-yellowx/50
                [clip-path:polygon(0_0,_3%_20%,_86%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)]
                p-px w-full min-h-8 h-auto font-bold text-yellowx"
              >
                <div
                  className="bg-black
                  [clip-path:polygon(0_0,_2%_20%,_89%_20%,_100%_20%,_100%_100%,_3%_100%,_0%_85%)]
                  min-h-8 size-full font-bold text-yellowx pt-3 pl-2 pr-px pb-px break-words whitespace-normal"
                >
                  <Link
                    target="_blank"
                    href="https://github.com/linux-superuser666/BlackArchCyberpunk2077"
                    style={{
                      textShadow: "0px 0px 2px rgba(255,255,0,1)",
                    }}
                    className="font-medium"
                  >
                    Click Here For The Github Repo <br />
                    don't frget to give the repo stars
                  </Link>
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
