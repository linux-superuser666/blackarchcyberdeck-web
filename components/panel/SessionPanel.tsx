"use client";

import React from "react";
import Image from "next/image";
import { useUIStore } from "@/state/widgetState";
import BrackRightBC from "../common/BrackRightBC";
import BrackLeftBT from "../common/BrackLeftBT";
import ImageType from "../common/ImageType";
import BottomPanelButton from "../Box/BottomPanelButton";
import TitlePanelOrbit from "../common/TitlePanelOrbit";
import PanelBorderPx from "../common/PanelBorderPx";
import LevelSlider from "../common/LevelSlider";
import PresetCtrl from "./PresetCtrl";
import SwitchBtn from "../common/SwitchBtn";
import { useNetworkTraffic } from "@/hooks/useNetworkTraffic";
import { useEdexDualECG } from "@/hooks/useEdexDualECG";
import LeftBracket from "../common/LeftBracket";

type SessionPanelProps = {
  className?: string;
};

const SESSION_ACTIONS = [
  {
    key: "lock",
    label: "lock",
    icon: "", // nf-fa-lock
  },
  {
    key: "logout",
    label: "logout",
    icon: "󰍃", // nf-md-logout
  },
  {
    key: "suspend",
    label: "suspend",
    icon: "󰒲", // nf-md-power_sleep
  },
  {
    key: "hibernate",
    label: "hibernate",
    icon: "󰤄", // nf-md-power_plug_off
  },
  {
    key: "shutdown",
    label: "shutdown",
    icon: "⏻", // nf-md-power
  },
  {
    key: "reboot",
    label: "reboot",
    icon: "󰑐", // nf-md-restart
  },
];

const SessionPanel = ({ className = "" }: SessionPanelProps) => {
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);

  if (activeWidget !== "sessionPanel") return null;

  return (
    <div
      className={`absolute  flex-col z-[100] gap-0.5 text-[8px] flex left-[35%] top-2/6
       ${className}`}
    >
      <div className="w-[250px] font-semibold text-redx flex flex-row h-[132px] animate-fade-in gap-0.5 justify-between">
        <LeftBracket />
        <div className="size-full grid grid-cols-3 grid-rows-2 gap-0.5">
          {SESSION_ACTIONS.map((item) => (
            <div
              key={item.key}
              className="flex group cursor-pointer flex-row h-16 w-fit gap-px"
            >
              <div className="h-full w-2 bg-yellowx/80 p-px [clip-path:polygon(6%_60%,_0_60%,_0_0,_100%_0,_100%_55%,_55%_55%,_55%_58%,_100%_58%,_100%_100%,_0_100%,_0_85%,_6%_85%)]">
                <div className="size-full bg-darkbluex/50 [clip-path:polygon(6%_60%,_0_60%,_0_0,_100%_0,_100%_55%,_55%_55%,_55%_58%,_100%_58%,_100%_100%,_0_100%,_0_85%,_6%_85%)]"></div>
              </div>
              <div className="size-16 bg-yellowx/80 p-px [clip-path:polygon(0%_0%,_100%_0,_100%_75%,_75%_100%,_0%_100%)]">
                <div className="size-full bg-darkbluex/95 group-hover:bg-darkbluex/45  p-px flex items-center justify-center text-center [clip-path:polygon(0%_0%,_100%_0,_100%_75%,_75%_100%,_0%_100%)]">
                  <div className="flex-col flex gap-1 items-center justify-center">
                    <div className="text-[24px] font-nerdfonts text-greyx group-hover:text-black transition-colors duration-200">
                      {item.icon}
                    </div>
                    <div className="text-greyx uppercase group-hover:text-black transition-colors tracking-wide font-bold duration-200">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between flex-row">
        <ImageType />
        <div className="flex gap-1">
          <BottomPanelButton
            iconSize={7}
            icon="/options/confirm.png"
            label="navi"
          />
          <BottomPanelButton
            onClick={() => toggleWidget("SessionPanel")}
            icon="/options/close.png"
            label="Clode"
          />
        </div>
      </div>
    </div>
  );
};

export default SessionPanel;
