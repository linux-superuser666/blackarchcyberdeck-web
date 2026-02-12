import React from "react";
import SocialContent from "../content/SocialContent";
import Mur from "../common/Mur";

const SocialPanelL = () => {
  return (
    <div className="bg-redx/30 w-[120px] h-[310px] p-[2px] [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)]">
      <div className="bg-black size-full [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)] flex flex-col justify-between p-px">
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <Mur />
        </div>
        <div className="w-full flex h-full items-center justify-between flex-row">
          <Mur />
          <div className="border size-full p-px border-redx/30">
            <div className="border size-full border-redx/30">
              {/* <SocialContentleft /> */}
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

export default SocialPanelL;
