import React from "react";
import HyprPanel from "./panel/HyprPanel";
import ChronoPanel from "./panel/ChronoPanel";
import ControlPanel from "./panel/ControlPanel";
import LauncherPanel from "./panel/LauncherPanel";
import LevelPanel from "./panel/LevelPanel";
import NetworkPanel from "./panel/NetworkPanel";
import Framex from "./layer-one/Framex";
import TodoPanel from "./panel/TodoPanel";
import Notify from "./panel/Notify";
import Appframe from "./layer-one/Appframe";
import SystemPanel from "./panel/SystemPanel";
import WinSwitch from "./widget/WinSwitch";
import Radiostation from "./widget/Radiostation";
import SessionPanel from "./panel/SessionPanel";

const Cyberdeck = () => {
  return (
    <div className="relative size-full">
      <Framex />
      <Appframe />
      <SystemPanel />
      <Notify />
      <LauncherPanel />
      <NetworkPanel />
      <LevelPanel />
      <HyprPanel />
      <ChronoPanel />
      <WinSwitch />
      <Radiostation />
      <TodoPanel />
      <ControlPanel />
      <SessionPanel />
    </div>
  );
};

export default Cyberdeck;
