"use client";

import React from "react";
import Link from "next/link";
import Mur from "../common/Mur";
import PanelBorderPx from "../common/PanelBorderPx";
import GlitchText from "../multimedia/GlitchText";
import GlitchCanvas from "../multimedia/GlitchCanvas";

const socials = [
  {
    name: "tiktok",
    href: "https://www.tiktok.com/@linux.superuser",
    src: "/icons/tiktok.png",
  },
  {
    name: "youtube",
    href: "https://www.youtube.com/@linux.superuser",
    src: "/icons/youtubev2.png",
  },
  {
    name: "saweria",
    href: "https://saweria.co/lmrnngtsr666",
    src: "/icons/saweria.png",
  },
  {
    name: "ko-fi",
    href: "https://ko-fi.com/mrnngstr666",
    src: "/icons/kofi.png",
  },
];

const SocialPanelL = () => {
  return (
    <div className="bg-yellowx/50 w-[120px] h-[310px] p-[2px] [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)]">
      <div className="bg-black size-full [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)] flex flex-col justify-between p-px">
        {/* Top decorative */}
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <Mur />
        </div>

        {/* Content */}
        <div className="w-full flex h-full items-center justify-between flex-row">
          <Mur />

          <div className="border size-full p-px items-center justify-center flex flex-col border-redx/30 relative">
            <GlitchText
              text="social & support"
              className="uppercase text-center"
              fontSize={9}
            />

            <div className="border uppercase text-xs text-redx/50 size-full grid grid-cols-1 grid-rows-4 border-redx/30 items-center justify-center text-center">
              {socials.map((item, index) => (
                <div
                  key={item.name}
                  className="flex flex-col items-center relative z-10 justify-center"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    className="flex size-full flex-col items-center justify-center hover:text-redx transition-colors"
                  >
                    <GlitchText text={item.name} fontSize={14} />
                    <GlitchCanvas
                      src={item.src}
                      width={30}
                      height={40}
                      intensity={1}
                    />
                  </Link>

                  {index !== socials.length - 1 && <PanelBorderPx />}
                </div>
              ))}
            </div>
          </div>

          <Mur />
        </div>

        {/* Bottom decorative */}
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SocialPanelL;
