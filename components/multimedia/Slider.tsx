"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import Image from "next/image";
import { EffectCards } from "swiper/modules";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";

const images = [
  { id: 1, src: "/gallery/gallery-1.png", alt: "Gallery image 1" },
  { id: 2, src: "/gallery/gallery-2.png", alt: "Gallery image 2" },
  { id: 3, src: "/gallery/gallery-3.png", alt: "Gallery image 3" },
  { id: 4, src: "/gallery/gallery-4.png", alt: "Gallery image 4" },
  { id: 5, src: "/gallery/gallery-1.png", alt: "Gallery image 1" },
  { id: 6, src: "/gallery/gallery-2.png", alt: "Gallery image 2" },
  { id: 7, src: "/gallery/gallery-3.png", alt: "Gallery image 3" },
  { id: 8, src: "/gallery/gallery-4.png", alt: "Gallery image 4" },
  { id: 9, src: "/gallery/gallery-1.png", alt: "Gallery image 1" },
];

type Props = {
  onSwiperReady?: (swiper: SwiperType) => void;
  onActiveIndexChange?: (index: number) => void;
};

export default function Slider({ onSwiperReady, onActiveIndexChange }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperType | null>(null);

  // AUTO SCROLL
  useEffect(() => {
    const t = setInterval(() => {
      swiperRef.current?.slideNext();
    }, 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="max-w-4xl mx-auto h-full w-full bg-redx/50 [clip-path:polygon(100%_0,_100%_88%,_95%_100%,_0_100%,_0_0)] p-px">
      <div className="h-full w-full bg-darkbluex/95 [clip-path:polygon(100%_0,_100%_88%,_95%_100%,_0_100%,_0_0)] p-5">
        <Swiper
          modules={[EffectCards]}
          effect="cards"
          allowTouchMove={false}
          speed={600}
          onSwiper={(s) => {
            swiperRef.current = s;
            onSwiperReady?.(s);
          }}
          onSlideChange={(s) => {
            setActiveIndex(s.activeIndex);
            onActiveIndexChange?.(s.activeIndex);
          }}
          cardsEffect={{ rotate: true, slideShadows: false }}
          className="h-full w-full"
        >
          {images.map((img, index) => {
            let opacity = "opacity-50";
            if (index < activeIndex) opacity = "opacity-0";
            if (index === activeIndex) opacity = "opacity-100";

            return (
              <SwiperSlide key={img.id}>
                <div
                  className={`relative h-[400px] w-[700px] border border-redx/50 overflow-hidden transition-opacity duration-300 ${opacity}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
