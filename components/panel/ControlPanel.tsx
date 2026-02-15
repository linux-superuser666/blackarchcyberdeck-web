import React from "react";
import BinLogo from "../common/BinLogo";
import ControlBox from "../common/ControlBox";
import ControlBoxAlt from "../common/ControlBoxAlt";
import PacmanBox from "../Box/PacmanBox";
import NetBox from "../Box/NetBox";
import LevelBox from "../Box/LevelBox";
import RadioBox from "../Box/RadioBox";
import WinBox from "../Box/WinBox";
import SessionBox from "../Box/SessionBox";
import QuickHackBox from "../Box/QuickHackBox";
import BinTitle from "../common/BinTitle";

const ControlPanel = () => {
  return (
    <div className="ml-3 mt-1 z-50 pointer absolute bottom-0  w-[280px] flex flex-row gap-1">
      <BinLogo iconSrc="/icons/control-dbus.png" />
      <div className="flex flex-col gap-0 ">
        <BinTitle text="control_panel 1.001.1" />
        <div className="text-redx flex gap-[2px] flex-row">
          <PacmanBox />
          <LevelBox />
          <RadioBox />
          <NetBox />
          <WinBox />
          <SessionBox />
          <QuickHackBox />
        </div>
      </div>
    </div>
  );
};

export default ControlPanel;
