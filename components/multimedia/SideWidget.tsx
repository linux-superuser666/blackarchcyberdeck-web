import React from "react";
import CableCat from "../common/CableCat";
import AthLeft from "../common/AthLeft";
import SocialPanelL from "../panel/SocialPanelL";
import CableTx from "../common/CableTx";
import SocialPanel from "../panel/SocialPanel";
import AiPanel from "../panel/AiPanel";
import CableRx from "../common/CableRx";

const SideWidget = () => {
  return (
    <div className="absolute bottom-0 z-[2] w-[1340px] h-[630px] flex items-end justify-center">
      <div className="size-full grid grid-cols-[18rem_1fr_18rem] grid-rows-[4rem_1fr_3rem]">
        <div className="border border-redx/0 relative row-span-3 flex justify-end">
          {/* left card */}
          <div className="absolute top-[50px] right-[111px]">
            <div className="w-1 h-10 border-l rounded-l-sm border-y border-yellowx/50"></div>
          </div>
          <div className="absolute top-[70px] transform rotate-90 right-[93px]">
            <CableTx />
          </div>
          <div className="absolute right-[135px] top-[180px] transform rotate-180">
            <CableRx />
          </div>
          <div className="absolute right-[230px] top-[100px]">
            <AthLeft />
          </div>
          <div className="absolute right-[163px] top-[112px] tranform rotate-180">
            <CableCat height={68} width={41} />
          </div>
          <div className="absolute right-[163px] top-[119px] tranform rotate-180">
            <CableCat radius={11} width={36} height={61} />
          </div>
          <div className="absolute right-[162px] top-[125px] tranform rotate-180">
            <CableCat radius={8} width={32} height={55} />
          </div>
          <div className="absolute right-[113px] top-[232px]">
            <SocialPanelL />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center"></div>
        <div className="border realtive border-redx/0 relative row-span-3 flex justify-start">
          {/* right card */}
          <div className="absolute top-[30px] left-[111px]">
            <div className="w-1 h-10 border-r rounded-r-sm border-y border-yellowx/50"></div>
          </div>
          <div className="absolute top-[498px] transform -rotate-90 left-[73px] ">
            <CableTx />
          </div>
          <div className="absolute left-[143px] bottom-[222px]">
            <CableRx />
          </div>
          <div className="absolute left-[142px] bottom-[131px]">
            <CableCat radius={8} width={59} height={93} />
          </div>
          <div className="absolute left-[142px] bottom-[126px]">
            <CableCat radius={11} width={65} height={96} />
          </div>
          <div className="absolute left-[142px] bottom-[120px]">
            <CableCat height={103} width={72} />
          </div>
          <div className="absolute left-[113px] bottom-[273px]">
            <SocialPanel />
          </div>
          <div className="absolute left-[113px] bottom-[445px]">
            <AiPanel />
          </div>
        </div>
        <div className="row-span-2 row-start-2 col-start-2 text-transparent"></div>
      </div>
    </div>
  );
};

export default SideWidget;
