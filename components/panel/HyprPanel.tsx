"use client";

import React, { JSX } from "react";
import BinLogo from "../common/BinLogo";
import Cyberware from "../windows/Cyberware";
import WorkspaceSlider from "../windows/WorkspaceSlider";
import Inventory from "../windows/Inventory";
import Crafting from "../windows/Crafting";
import Machine from "../windows/Machine";
import Media from "../windows/Media";
import Net from "../windows/Net";
import Journal from "../windows/Journal";
import Codex from "../windows/Codex";
import Message from "../windows/Message";
import { useUIStore } from "@/state/widgetState";

type Workspace = {
  label: string;
  icons: {
    idle: string;
    occupied: string;
    active: string;
  };
};

const HyprPanel = () => {
  const workspaces: Workspace[] = [
    {
      label: "cyberware",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "inventory",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "crafting",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "net",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "journal",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "media",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "codex",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "message",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
    {
      label: "machine",
      icons: {
        idle: "/ws/ws-idle.png",
        occupied: "/ws/ws-occupied.png",
        active: "/ws/ws-active.png",
      },
    },
  ];

  const active = useUIStore((s) => s.activeWorkspace);
  const occupied = useUIStore((s) => s.occupiedWorkspaces);
  const setActive = useUIStore((s) => s.setActiveWorkspace);
  const setOccupied = useUIStore((s) => s.setOccupiedWorkspaces);

  // Klik workspace
  const handleWorkspaceClick = (label: string) => {
    setActive(label);

    const newOccupied = occupied.includes(label)
      ? occupied
      : [...occupied, label];
    setOccupied(newOccupied);
  };

  const getIconSrc = (ws: Workspace) => {
    if (active === ws.label) return ws.icons.active;
    if (occupied.includes(ws.label)) return ws.icons.occupied;
    return ws.icons.idle;
  };

  const workspaceViews: Record<string, JSX.Element> = {
    cyberware: <Cyberware />,
    inventory: <Inventory />,
    crafting: <Crafting />,
    net: <Net />,
    journal: <Journal />,
    media: <Media />,
    codex: <Codex />,
    message: <Message />,
    machine: <Machine />,
  };

  const xwindowNames: Record<string, string> = {
    cyberware: "kitty",
    inventory: "thunar",
    crafting: "code-oss",
    net: "firefox",
    journal: "pdf-reader",
    media: "obs-studio",
    codex: "_",
    message: "_",
    machine: "_",
  };

  const activeXWindow = xwindowNames[active] || "";

  return (
    <div className="absolute z-50 right-0 top-0 mr-[12px] mt-1 w-full h-full flex flex-row gap-1 justify-end">
      <div className="flex flex-col gap-0 leading-none">
        <p className="text-[5px] flex justify-end text-redx/80 uppercase font-orbitron">
          connection-dbus 1.001.1
        </p>

        <div className="text-redx w-full uppercase justify-end flex">
          {/* WORKSPACES */}
          <div className="flex font-semibold flex-row gap-0.5 items-center justify-center">
            {workspaces.map((ws) => {
              const isActive = active === ws.label;
              return (
                <div
                  key={ws.label}
                  onClick={() => handleWorkspaceClick(ws.label)}
                  className={`flex flex-row gap-0.5 text-[9px] items-center pointer transition-all ${
                    isActive ? "text-whitex" : "text-redx/60 hover:text-redx"
                  }`}
                >
                  <img
                    src={getIconSrc(ws)}
                    alt={ws.label}
                    className={`size-3 object-contain transition-all ${
                      isActive
                        ? "drop-shadow-[0_0_6px_#ff003c]"
                        : occupied.includes(ws.label)
                        ? "drop-shadow-[0_0_4px_#ff003c66]"
                        : "opacity-60"
                    }`}
                  />
                  <p>{ws.label}</p>
                </div>
              );
            })}
          </div>
        </div>

        <p className="text-[7px] flex justify-end text-greyx uppercase">
          {activeXWindow && `${activeXWindow}`}
        </p>

        <div className="mt-1 p-1 relative w-[879px] h-[411px]">
          <WorkspaceSlider active={active} views={workspaceViews} />
        </div>
      </div>

      <BinLogo iconSrc="/icons/hypr-dbus.png" />
    </div>
  );
};

export default HyprPanel;
