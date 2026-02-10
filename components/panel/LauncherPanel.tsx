"use client";
import Image from "next/image";
import react, { useState } from "react";
import BinLogo from "../common/BinLogo";
import appsData from "../../api/appdata.json";
import { useUIStore } from "@/state/widgetState";

const LauncherPanel = () => {
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  const [filterText, setFilterText] = useState("");
  const filteredApps = appsData.apps.filter(
    (app) =>
      app.name.toLowerCase().includes(filterText.toLowerCase()) ||
      app.category.toLowerCase().includes(filterText.toLowerCase()) ||
      app.type.toLowerCase().includes(filterText.toLowerCase())
  );
  if (activeWidget !== "launcherPanel") return null;

  return (
    <div className="ml-[7px] absolute z-[999] top-14 w-[280px] flex flex-row gap-1">
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />
      <div className="flex flex-col leading-none gap-0">
        <p className="text-[5px] text-redx/80 uppercase font-orbitron">
          connection_dbus 1.001.1
        </p>
        <div className="text-redx border-b border-redx/50 h-64 w-48 flex flex-row gap-1 uppercase text-xs">
          <div className="flex flex-col gap-1 h-full w-full">
            <div className="bg-black border border-redx/50 h-fit pl-1 items-center p-0.5 w-full gap-0 flex flex-row">
              <div className="w-fit">sequences:</div>
              <input
                type="text"
                placeholder=". . . . . . . "
                className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none shadow-none text-inherit placeholder:text-current"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>
            <div className="h-full w-full overflow-hidden mb-1 pr-1 hover:overflow-y-auto radio-list">
              {filteredApps.map((app) => (
                <div key={app.id} className="flex h-7 w-full flex-row gap-0.5">
                  <Image
                    src="/icons/package.png"
                    alt=""
                    width={23}
                    height={10}
                    className="object-contain"
                  />
                  <div
                    className="flex w-2 h-[9px] bg-yellowx text-center justify-center font-bold text-black text-[7px]
              [clip-path:polygon(100%_0,_100%_100%,_35%_100%,_0_65%,_0_0)]
              "
                  >
                    !
                  </div>
                  <div className="flex gap-px">
                    <div
                      className=" bg-redx/50 h-full w-1.5
                p-px [clip-path:polygon(0_50%,_0_0,_100%_0,_100%_100%,_0_100%,_0_80%,_20%_80%,_20%_50%)]
                "
                    >
                      <div
                        className=" bg-darkbluex/80 h-full w-full 
                p-px [clip-path:polygon(0_50%,_0_0,_100%_0,_100%_100%,_0_100%,_0_80%,_20%_80%,_20%_50%)]
                "
                      ></div>
                    </div>
                    <div
                      className="flex bg-redx/50 text-start w-[147px] h-full font-semibold flex-col
                [clip-path:polygon(17%_0%,_20%_5%,_100%_5%,_100%_87%,_97%_100%,_0_100%,_0_0)] p-px
                "
                    >
                      <div
                        className=" w-full h-full bg-darkbluex/80 [clip-path:polygon(17%_0%,_20%_5%,_100%_5%,_100%_87%,_97%_100%,_0_100%,_0_0)] p-px
                "
                      >
                        <div className="text-[10px]">{app.name}</div>
                        <div className="text-[5px]">{app.category}</div>
                        <div className="text-[5px]">{app.type}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LauncherPanel;
