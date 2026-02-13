import React from "react";
import SiriClassicWave from "../multimedia/SiriClassicWave";
import Mur from "../common/Mur";
import PanelBorderPx from "../common/PanelBorderPx";

const AiPanel = () => {
  return (
    <div className="bg-yellowx/50 w-[170px] h-[110px] p-[2px] [clip-path:polygon(0%__0%,__100%__0,__100%__100%,__100%__100%,__0%__100%)]">
      <div className="bg-black size-full [clip-path:polygon(0%__0%,__100%__0,__100%__100%,__100%__100%,__0%__100%)] flex flex-col justify-between p-[2px]">
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <Mur />
        </div>
        <div className="w-full flex h-full items-center justify-between flex-row">
          <Mur />
          <div className="size-full relative border-redx/30 border p-px">
            <div className="size-full border-redx/30 border absolute inset-0 flex items-center overflow-hidden">
              <div className="h-full w-full flex flex-col animate-scanner-y">
                <PanelBorderPx />
                <PanelBorderPx />
              </div>
            </div>
            <div className="size-full border-redx/30 border flex items-center flex-col justify-center pt-3 overflow-hidden relative">
              <SiriClassicWave className="w-full h-[95px] absolute top-0.5" />
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

export default AiPanel;
