"use client";

import React, { useEffect, useState } from "react";
import GlitchCanvas from "./GlitchCanvas";

const logos = [
  { src: "/icons/ba-icon.png", width: 24, height: 50 },
  { src: "/icons/qs-iconv2.png", width: 24, height: 50 },
  { src: "/icons/hypr-iconv2.png", width: 24, height: 50 },
  { src: "/icons/wl-icon.png", width: 24, height: 50 },
];

const GlitchSlideImg = () => {
  const [index, setIndex] = useState(0);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShaking(true);

      setTimeout(() => {
        setIndex((prev) => (prev + 1) % logos.length);
        setShaking(false);
      }, 300);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="size-full px-2 py-[2px]">
      <div className="size-[40px] bg-yellowx/30 [clip-path:polygon(0%_10%,_10%_0%,_90%_0%,_100%_10%,_100%_90%,_90%_100%,_10%_100%,_0%_90%)] p-px">
        <div className="size-full bg-black overflow-hidden [clip-path:polygon(0%_10%,_10%_0%,_90%_0%,_100%_10%,_100%_90%,_90%_100%,_10%_100%,_0%_90%)] flex items-center justify-center px-px pt-6">
          <div className={shaking ? "animate-shake" : ""}>
            <GlitchCanvas
              key={index}
              src={logos[index].src}
              width={logos[index].width}
              height={logos[index].height}
              intensity={0.5}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlitchSlideImg;
