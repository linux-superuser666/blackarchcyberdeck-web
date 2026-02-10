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

type LevelPanelProps = {
  className?: string;
};

const LevelPanel = ({ className = "" }: LevelPanelProps) => {
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);

  if (activeWidget !== "levelPanel") return null;

  return (
    <div
      className={`absolute  flex-col z-[100] gap-0.5 text-[8px] flex left-[30%] top-1/6
       ${className}`}
    >
      <div className="w-[400px] font-semibold text-redx flex flex-row h-[280px] animate-fade-in justify-between">
        <BrackLeftBT />
        <div className="w-full bg-black/95 border border-redx/50 gap-px p-px flex-col flex">
          <TitlePanelOrbit leftText="panel" rightText="controller" />
          <PanelBorderPx />
          <div className="text-greyx">Audio Controller</div>
          <div className="flex w-full my-1 justify-between flex-row">
            <div>Preset</div>
            <PresetCtrl label="Built-in Audio Analog Stereo" />
          </div>
          <div className="flex w-full mb-1 justify-between flex-row">
            <div>Enable Controller Speaker</div>
            <SwitchBtn />
          </div>
          <PanelBorderPx />
          <div className="flex w-full mt-1 justify-between flex-row">
            <div>Master Level</div>
            <LevelSlider />
          </div>
          <div className="flex my-1 w-full justify-between flex-row">
            <div>FX</div>
            <LevelSlider />
          </div>
          <div className="flex w-full justify-between flex-row">
            <div>Radiostation</div>
            <LevelSlider />
          </div>

          <div className="h-full"></div>

          <PanelBorderPx />
          <div className="text-greyx">Screen Controller</div>
          <div className="flex w-full justify-between flex-row">
            <div>Preset</div>
            <PresetCtrl label="LVDS-1 1366x768" />
          </div>

          <div className="flex my-1 w-full justify-between flex-row">
            <div>Enable Controller Screen</div>
            <SwitchBtn />
          </div>

          <PanelBorderPx />
          <div className="flex mt-1 w-full justify-between flex-row">
            <div>screen light</div>
            <LevelSlider />
          </div>
          <div className="h-3"></div>
        </div>
        <BrackRightBC />
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
            onClick={() => toggleWidget("levelPanel")}
            icon="/options/close.png"
            label="Clode"
          />
        </div>
      </div>
    </div>
  );
};

export default LevelPanel;
