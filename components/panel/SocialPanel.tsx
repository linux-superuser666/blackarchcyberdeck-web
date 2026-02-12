import React from "react";
import SocialContent from "../content/SocialContent";
import Mur from "../common/Mur";
import GlitchCanvas from "../multimedia/GlitchCanvas";
import PanelBorderPx from "../common/PanelBorderPx";
import GlitchText from "../multimedia/GlitchText";

const SocialPanel = () => {
  return (
    <div className="bg-redx/30 w-[170px] h-[170px] p-[2px] [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)]">
      <div className="bg-black size-full [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)] flex flex-col justify-between p-[2px]">
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <Mur />
        </div>
        <div className="w-full flex h-full items-center justify-between flex-row">
          <Mur />
          <div className="size-full relative border-redx/30 border p-px">
            <div className="size-full border-redx/30 border absolute inset-0 flex items-center overflow-hidden">
              <div className="h-16 w-full flex flex-col animate-scanner-y">
                <PanelBorderPx />
                <PanelBorderPx />
              </div>
            </div>
            <div className="size-full border-redx/30 border flex py-4 items-center flex-col justify-between">
              <GlitchText
                text="linux.superuser"
                className="uppercase text-center"
                layers={9}
                fontSize={9}
              />
              <div className="size-4"></div>
              <GlitchCanvas
                src="/icons/mrnngstr666.png"
                width={100}
                height={100}
                intensity={5}
              />
              <GlitchText
                text="mrnngstr666"
                className="uppercase text-center"
                layers={9}
                fontSize={9}
              />
            </div>
          </div>
          <Mur />
        </div>
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default SocialPanel;
