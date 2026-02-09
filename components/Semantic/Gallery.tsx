"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "../multimedia/Slider";
import type { Swiper as SwiperType } from "swiper";

const Gallery = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const galleryList = [
    { id: 1, label: "Launcher App" },
    { id: 2, label: "Window Switcher" },
    { id: 3, label: "Radiostation / Only for Mpd" },
    { id: 4, label: "Level Controler" },
    { id: 5, label: "Network Controler" },
    { id: 6, label: "Quick Hack" },
    { id: 7, label: "Super User Panel" },
    { id: 8, label: "Sesion Manager" },
  ];

  // auto scroll list ke item aktif
  useEffect(() => {
    const container = listRef.current;
    const item = container?.children[activeIndex] as HTMLElement;

    if (!container || !item) return;

    const containerTop = container.scrollTop;
    const containerHeight = container.clientHeight;

    const itemTop = item.offsetTop;
    const itemHeight = item.clientHeight;

    const targetScroll = itemTop - containerHeight / 2 + itemHeight / 2;

    container.scrollTo({
      top: targetScroll,
      behavior: "smooth",
    });
  }, [activeIndex]);

  return (
    <div className="max-w-full mt-12 px-12 h-screen flex gap-1 flex-col">
      {/* header */}
      <div className="flex flex-row justify-between uppercase text-[10px] text-redx pl-6 font-semibold">
        <div>trn_class</div>
        <div>cyberdeck blackarch database</div>
      </div>

      {/* title */}
      <div className="uppercase mb-4 text-sm font-medium flex flex-row gap-0.5 ">
        <div className="w-5 h-full bg-redx/50 [clip-path:polygon(0%_1%,_10%_0.5%,_55%_0.5%,_60%_0,_100%_0,_100%_15%,_90%_15%,_90%_85%,_100%_85%,_100%_100%,_25%_100%,_0%_90%)] p-[1px]">
          <div className="w-full h-full bg-darkbluex/30 [clip-path:polygon(0%_1%,_10%_0.5%,_55%_0.5%,_60%_0,_100%_0,_100%_15%,_90%_15%,_90%_85%,_100%_85%,_100%_100%,_25%_100%,_0%_90%)]" />
        </div>
        <div className="bg-redx/50 [clip-path:polygon(100%_0,_100%_65%,_99%_100%,_0_100%,_0_0)] w-full p-px">
          <div className="bg-darkbluex/80 [clip-path:polygon(100%_0,_100%_65%,_99%_100%,_0_100%,_0_0)] w-full p-px">
            <div className="pl-1 tracking-wide text-greyx">Feature Gallery</div>
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-0.5 pr-4">
        <div className="w-5 h-full bg-redx/50 [clip-path:polygon(0%_1%,_10%_0.5%,_55%_0.5%,_60%_0,_100%_0,_100%_15%,_90%_15%,_90%_85%,_100%_85%,_100%_100%,_25%_100%,_0%_98%)] p-[1px]">
          <div className="w-full h-full bg-darkbluex/30 [clip-path:polygon(0%_1%,_10%_0.5%,_55%_0.5%,_60%_0,_100%_0,_100%_15%,_90%_15%,_90%_85%,_100%_85%,_100%_100%,_25%_100%,_0%_98%)]" />
        </div>

        <div className="w-full flex flex-row gap-12 h-full">
          <Slider
            onSwiperReady={(s) => (swiperRef.current = s)}
            onActiveIndexChange={setActiveIndex}
          />

          {/* list */}
          <div className="w-60 p-1 h-full text-greyx overflow-y-auto">
            <div ref={listRef} className="flex flex-col gap-2">
              {galleryList.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => swiperRef.current?.slideTo(index)}
                  className="text-left group uppercase relative transition"
                >
                  {/* ACTIVE HIGHLIGHT (SAMA DENGAN HOVER) */}
                  {activeIndex === index && (
                    <div className="absolute z-0 flex w-full h-full inset-0 bg-greyx/50 [clip-path:polygon(100%_0,_100%_65%,_95%_100%,_0_100%,_0_0)] p-px">
                      <div className="w-full h-full bg-darkbluex/40 [clip-path:polygon(100%_0,_100%_65%,_95%_100%,_0_100%,_0_0)]" />
                    </div>
                  )}

                  {/* hover tetap */}
                  <div className="absolute z-0 hidden group-hover:flex w-full h-full inset-0 bg-greyx/50 [clip-path:polygon(100%_0,_100%_65%,_95%_100%,_0_100%,_0_0)] p-px">
                    <div className="w-full h-full bg-darkbluex/40 [clip-path:polygon(100%_0,_100%_65%,_95%_100%,_0_100%,_0_0)]" />
                  </div>

                  <div className="relative z-10 flex flex-row gap-1">
                    <div className="relative">
                      <div className="w-4 h-4 pl-1 text-[2px] pt-1">
                        531343123
                        <br />
                        512334336
                        <br />
                        123124354
                        <br />
                        124353455
                      </div>
                    </div>
                    <div className="group-hover:font-semibold font-medium">
                      {item.label}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-darkbluex/50 h-px border-t border-redx/50 mt-4 w-full" />
    </div>
  );
};

export default Gallery;
