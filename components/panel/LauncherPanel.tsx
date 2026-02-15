"use client";
import Image from "next/image";
import react, { useState } from "react";
import BinLogo from "../common/BinLogo";
import appsData from "../../api/appdata.json";
import { useUIStore } from "@/state/widgetState";
import ImageType from "../common/ImageType";
import BottomPanelButton from "../Box/BottomPanelButton";
import BinTitle from "../common/BinTitle";

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
    <div className="ml-3 absolute z-[999] top-14 w-[280px] flex flex-row gap-1">
      <BinLogo iconSrc="/icons/control-dbus-alt.png" />

      <div className="flex flex-col leading-none gap-0">
        <BinTitle text="connection_dbus 1.001.1" />
        <div className="text-redx border-b border-redx/50 h-52 w-48 flex flex-row gap-1 uppercase text-xs">
          <div className="flex flex-col gap-1 h-full w-full">
            {/* INPUT */}
            <div className="bg-black border border-redx/50 h-fit pl-1 items-center p-0.5 w-full gap-0 flex flex-row">
              <div className="w-fit text-[9px]">sequences:</div>
              <input
                type="text"
                placeholder=". . . . . . . "
                className="w-full bg-transparent border-none outline-none ring-0 focus:ring-0 focus:outline-none shadow-none text-inherit placeholder:text-current"
                value={filterText}
                onChange={(e) => setFilterText(e.target.value)}
              />
            </div>

            {/* LIST */}
            <div className="h-full w-full overflow-hidden mb-1 pr-1 hover:overflow-y-auto radio-list">
              {filteredApps.map((app) => {
                const isMatched =
                  filterText.length > 0 &&
                  (app.name.toLowerCase().includes(filterText.toLowerCase()) ||
                    app.category
                      .toLowerCase()
                      .includes(filterText.toLowerCase()) ||
                    app.type.toLowerCase().includes(filterText.toLowerCase()));

                return (
                  <div
                    key={app.id}
                    className="group flex h-7 w-full flex-row gap-0.5"
                  >
                    <Image
                      src="/icons/package.png"
                      alt=""
                      width={23}
                      height={10}
                      className="object-contain"
                    />

                    {/* WARNING ICON */}
                    <div
                      className={`
                        flex w-2 h-[9px] text-center justify-center font-bold text-[6px] p-px
                        [clip-path:polygon(100%_0,_100%_100%,_35%_100%,_0_65%,_0_0)]
                        ${
                          isMatched
                            ? "bg-yellowx text-black"
                            : "bg-redx/40 text-transparent group-hover:bg-yellowx group-hover:text-black"
                        }
                      `}
                    >
                      <div
                        className={`
                          size-full [clip-path:polygon(100%_0,_100%_100%,_35%_100%,_0_65%,_0_0)]
                          ${
                            isMatched
                              ? "bg-yellowx"
                              : "bg-darkbluex/80 group-hover:bg-yellowx"
                          }
                        `}
                      >
                        !
                      </div>
                    </div>

                    <div className="flex gap-px">
                      {/* BAR */}
                      <div
                        className=" bg-redx/50 h-full w-1.5
                        p-px [clip-path:polygon(0_50%,_0_0,_100%_0,_100%_100%,_0_100%,_0_80%,_20%_80%,_20%_50%)]"
                      >
                        <div
                          className={`
                            h-full w-full p-px
                            [clip-path:polygon(0_50%,_0_0,_100%_0,_100%_100%,_0_100%,_0_80%,_20%_80%,_20%_50%)]
                            ${
                              isMatched
                                ? "bg-redx/50"
                                : "bg-darkbluex/80 group-hover:bg-redx/50"
                            }
                          `}
                        />
                      </div>

                      {/* TEXT PANEL */}
                      <div
                        className={`
                          flex bg-redx/50 text-start w-[147px] h-full font-semibold flex-col
                          [clip-path:polygon(17%_0%,_20%_5%,_100%_5%,_100%_87%,_97%_100%,_0_100%,_0_0)] p-px
                          ${
                            isMatched
                              ? "text-greyx"
                              : "text-redx group-hover:text-greyx"
                          }
                        `}
                      >
                        <div
                          className={`
                            w-full h-full p-px
                            [clip-path:polygon(17%_0%,_20%_5%,_100%_5%,_100%_87%,_97%_100%,_0_100%,_0_0)]
                            ${
                              isMatched
                                ? "bg-redx/50"
                                : "bg-darkbluex/80 group-hover:bg-redx/50"
                            }
                          `}
                        >
                          <div className="text-[10px]">{app.name}</div>
                          <div className="text-[5px]">{app.category}</div>
                          <div className="text-[5px]">{app.type}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex w-full flex-row justify-between ">
          <ImageType />
          <div className="flex flex-row gap-1">
            <BottomPanelButton icon="/options/confirms.png" label="launch" />
            <BottomPanelButton
              onClick={() => toggleWidget("launcherPanel")}
              icon="/options/close.png"
              label="Clode"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LauncherPanel;
