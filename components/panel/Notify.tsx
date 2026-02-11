"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import BinLogo from "../common/BinLogo";
import Link from "next/link";

const SHOW_DURATION = 10000; // 10 detik
const HIDE_DURATION = 5000; // 5 detik

const Notify = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const loop = () => {
      // tampil 10 detik
      setVisible(true);

      timeout = setTimeout(() => {
        // hilang 5 detik
        setVisible(false);

        timeout = setTimeout(loop, HIDE_DURATION);
      }, SHOW_DURATION);
    };

    loop();

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`ml-[7px] absolute z-[999] top-[290px] w-[200px] flex flex-row gap-1 h-[145px]
  transition-all duration-900 ease-in-out transform origin-left
  ${
    visible
      ? "opacity-100 scale-x-100 pointer-events-auto"
      : "opacity-0 scale-x-0 pointer-events-none"
  }`}
    >
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />

      <div className="flex flex-col leading-none gap-0">
        <p className="text-[5px] text-redx/80 uppercase font-orbitron">
          connection_dbus 1.001.1
        </p>

        <div className="text-redx mt-1 h-full items-start w-48 flex flex-row gap-0.5 text-xs">
          <div className="bg-redx/80 border borderredx/50 rounded-full pb-px">
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
                style={{ textShadow: "0px 0px 2px rgba(255,255,0,1)" }}
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
                  min-h-8 size-full font-bold text-yellowx pt-3 pl-2 pr-px pb-x break-words whitespace-normal"
                >
                  <Link
                    target="_blank"
                    href="https://github.com/linux-superuser666/BlackArchCyberpunk2077"
                    style={{ textShadow: "0px 0px 2px rgba(255,255,0,1)" }}
                    className="font-medium"
                  >
                    Clik Here For The Github Repo
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
