"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";
import Link from "next/link";

const SHOW_DURATION = 10000; // 10 detik tampil
const HIDE_DURATION = 5000; // 5 detik hilang
const CONTENT_DELAY = 400; // delay antar animasi

const Notify = () => {
  const [containerVisible, setContainerVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    let mainTimeout: NodeJS.Timeout;
    let innerTimeout: NodeJS.Timeout;

    const loop = () => {
      // STEP 1: container muncul dulu
      setContainerVisible(true);

      // STEP 2: setelah delay baru konten muncul
      innerTimeout = setTimeout(() => {
        setContentVisible(true);
      }, CONTENT_DELAY);

      // setelah SHOW_DURATION mulai close
      mainTimeout = setTimeout(() => {
        // STEP 3: konten hilang dulu
        setContentVisible(false);

        // STEP 4: setelah delay container hilang
        innerTimeout = setTimeout(() => {
          setContainerVisible(false);
        }, CONTENT_DELAY);

        // ulangi loop setelah HIDE_DURATION
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
      className={`ml-[7px] absolute z-[999] top-[290px] w-[220px] flex flex-row gap-1 h-[145px]
      transition-all duration-500 ease-in-out transform origin-left
      ${
        containerVisible
          ? "opacity-100 scale-x-100"
          : "opacity-0 scale-x-0 pointer-events-none"
      }`}
    >
      {/* BIN LOGO */}
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />

      {/* CONTENT WRAPPER */}
      <div className="flex flex-col leading-none gap-0 w-full">
        <p className="text-[5px] text-redx/80 uppercase font-orbitron">
          connection_dbus 1.001.1
        </p>

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
