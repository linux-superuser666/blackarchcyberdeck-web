import React from "react";
import SocialContent from "../content/SocialContent";
import Mur from "../common/Mur";

const SocialPanel = () => {
  return (
    <div className="bg-redx/30 w-[170px] h-[310px] p-[2px] [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)]">
      <div className="bg-black size-full [clip-path:polygon(0%__0%,__100%__0,__100%__93%,__90%__100%,__0%__100%)] flex flex-col justify-between p-[2px]">
        <div className="w-full flex h-2.5 justify-between flex-row">
          <Mur />
          <Mur />
          <Mur />
        </div>
        <div className="w-full flex h-full items-center justify-between flex-row">
          <Mur />
          {/* <SocialContent /> */}
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
