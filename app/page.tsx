"use client";

import CableTx from "@/components/common/CableTx";
import CableRx from "@/components/common/CableRx";
import Hero from "@/components/Hero";
import GlitchText from "@/components/multimedia/GlitchText";
import CableCat from "@/components/common/CableCat";
import SocialPanel from "@/components/panel/SocialPanel";
export default function Home() {
  return (
    <div className="relative gap-8 font-rajdhani w-full h-screen flex flex-col">
      <div className="fixed -z-10 inset-0 bg-black"></div>
      <div className="min-w-[100px] gap-0 font-rajdhani w-full h-full flex flex-col justify-start absolute inset-0 items-center">
        <div className="absolute bottom-0 z-[3]  w-[1300px] h-[630px] flex items-end justify-center">
          <div className="size-full grid grid-cols-[18rem_1fr_18rem] grid-rows-[4rem_1fr_3rem]">
            <div className="border border-redx/0 relative row-span-3 flex justify-end">
              {/* left card */}
            </div>
            <div className="flex flex-col justify-center items-center">
              <GlitchText className="!text-5xl" text="Cyberdeck blackarch" />
              <div className="text-yellowx !text-base font-semibold uppercase">
                crafting with passion by © mrnngstr666
              </div>
            </div>
            <div className="border realtive border-redx/0 relative row-span-3 flex justify-start">
              {/* right card */}
              <div className="absolute top-[500px] transform -rotate-90 left-[93px] ">
                <CableTx />
              </div>
              <div className="absolute left-[143px] bottom-[222px]">
                <CableRx />
              </div>
              <div className="absolute left-[163px] bottom-[120px]">
                <CableCat height={103} />
              </div>
              <div className="absolute left-[162px] bottom-[131px]">
                <CableCat radius={8} width={40} height={93} />
              </div>
              <div className="absolute left-[113px] top-[45px]">
                <SocialPanel />
              </div>
            </div>
            <div className="row-span-2 row-start-2 col-start-2 text-transparent">
              5 8
            </div>
          </div>
        </div>
        <div className="absolute z-[2] bottom-0 w-full"></div>
        <Hero />
      </div>
    </div>
  );
}
