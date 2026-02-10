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

type NetworkPanelProps = {
  className?: string;
};

const NetworkPanel = ({ className = "" }: NetworkPanelProps) => {
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  const { up, down } = useNetworkTraffic();
  const trafficUp = up; // dari hook web traffic
  const trafficDown = down;

  useEdexDualECG("ecgNetwork", trafficUp, trafficDown);

  if (activeWidget !== "networkPanel") return null;

  return (
    <div
      className={`absolute  flex-col z-[100] gap-0.5 text-[8px] flex left-[30%] top-1/6
       ${className}`}
    >
      <div className="w-[400px] font-semibold text-redx flex flex-row h-[280px] animate-fade-in justify-between">
        <BrackLeftBT />
        <div className="grid w-full h-full grid-cols-[2fr_1fr]">
          <div className="w-full bg-black/90 border-y border-l border-redx/50 gap-px p-px flex-col flex">
            <TitlePanelOrbit leftText="panel" rightText="network" />
            <PanelBorderPx />
            <PanelBorderPx />
            <div className="uppercase">network manager</div>
            <PanelBorderPx />
            <div className="text-greyx">Ethernet</div>

            <div className="flex w-full mb-1 justify-between flex-row">
              <div className="text-greyx">enp3s0</div>
              <SwitchBtn />
            </div>
            <PanelBorderPx />
            <div className="text-greyx">Wlan</div>
            <div className="flex my-1 border border-redx/50 px-px py-1 w-full justify-between flex-row">
              <div className="flex gap-1">
                Home Sweet Home
                <span>32%</span>
                <span>Secured</span>
              </div>
              <SwitchBtn />
            </div>
          </div>
          <div className="border-y bg-black/90 border-redx/50 flex gap-px p-px flex-col">
            <TitlePanelOrbit leftText="panel" rightText="interface" />
            <PanelBorderPx />
            <PanelBorderPx />
            <div className="flex justify-between items-center flex-row">
              <div className="uppercase">network status</div>
              <div className="text-redx/50">Interface</div>
            </div>
            <div className="flex justify-between items-center flex-row">
              <div className="uppercase text-redx/50">state</div>
              <div className="text-redx/50">IPv4</div>
              <div className="text-redx/50">PING</div>
            </div>
            <div className="flex justify-between items-center flex-row">
              <div className="uppercase">online</div>
              <div>N/A</div>
              <div>-ms</div>
            </div>
            <PanelBorderPx />
            <div className="flex uppercase justify-between items-center flex-row">
              <div className="">world view</div>
              <div className="text-redx/50">global net map</div>
            </div>
            <div className="flex uppercase justify-between items-center flex-row">
              <div className="text-redx/50">endpoint lt/lon</div>
              <div className="text-redx/50">-10.18078, 123.3902</div>
            </div>
            <Image
              src="/panel/world-map.png"
              alt=""
              width={120}
              height={10}
              className="w-full my-5 object-contain"
            />
            <PanelBorderPx />
            <div className="flex uppercase justify-between items-center flex-row">
              <div>network trafic</div>
              <div className="text-redx/50 gap-px w-fit flex flex-row">
                <div>up</div>
                <div>{up.toFixed(1)}</div>
                <div>down</div>
                <div>{down.toFixed(1)}</div>
                <div className="text-redx/50">UP</div>
                <span></span>
              </div>
            </div>
            <div className="flex uppercase justify-between items-center flex-row">
              <div className="text-redx/50">total</div>
              <div className="text-redx/50 gap-px w-fit flex flex-row">
                <div>16 kb</div>
                <div>out,</div>
                <div>41 kb</div>
                <div>in</div>
                <span></span>
              </div>
            </div>
            <div className="flex size-full relative ">
              <div className="absolute inset-0 grid size-full grid-cols-4">
                <div className="border-x border-redx/30"></div>
                <div className="border-r border-redx/30"></div>
                <div className="border-r border-redx/30"></div>
                <div className="border-r border-redx/30"></div>
              </div>
              <div className="absolute inset-0 grid grid-cols-1 size-full grid-rows-[5px_1fr_1fr_1fr_1fr_5px]">
                <div className="border-b border-redx/20"></div>
                <div className="border-b border-redx/20"></div>
                <div className="border-b border-redx/20"></div>
                <div className="border-b border-redx/20"></div>
                <div className="border-b border-redx/20"></div>
              </div>
              <div className="absolute inset-0 size-full">
                <div className="flex size-full items-center">
                  <canvas
                    id="ecgNetwork"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
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
            onClick={() => toggleWidget("NetworkPanel")}
            icon="/options/close.png"
            label="Clode"
          />
        </div>
      </div>
    </div>
  );
};

export default NetworkPanel;
