"use client";

import React, { useRef } from "react";
import TitleDoc from "../common/TitleDoc";
import SubtitleDoc from "../common/SubtitleDocs";

const keybindData = [
  {
    id: "general",
    title: "General Keybind",
    bindings: [
      { key: "SUPER", action: "Open Launcher App" },
      { key: "SUPER + W", action: "Open WinSwitch" },
      { key: "SUPER + ENTER", action: "Open Terminal" },
      { key: "SUPER + X", action: "open Session Panel" },
      { key: "SUPER + D", action: "open Screen Recorder" },
      { key: "SUPER + A", action: "open Screen Capture" },
      { key: "SUPER + M", action: "open Radiostation/Mpd/ncmpcpp" },
    ],
  },
  {
    id: "system",
    title: "System Controls",
    bindings: [
      { key: "SUPER + L", action: "Open Level Panel" },
      { key: "SUPER + N", action: "Open Network Panel" }, 
      { key: "SUPER + C", action: "Close Active Window" },
      { key: "SUPER + X", action: "open Session Panel" },
    ],
  },
];

const KeybindDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex gap-1 justify-between">
      <div
        className="flex w-full flex-col tracking-wider px-4 gap-4"
        style={{ height: "320px" }}
      >
        <TitleDoc text="Keybind" />
        <div className="flex flex-col overflow-y-auto pr-1 journal-list gap-5 flex-1 min-h-0">
          {keybindData.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="flex flex-col gap-2"
            >
              <SubtitleDoc text={section.title} />
              <div className="flex text-[10px] uppercase font-bold text-redx border-b border-redx/20 pb-1">
                <div className="w-32">Key</div>
                <div className="flex-1">Action</div>
              </div>
              {section.bindings.map((bind, index) => (
                <div
                  key={index}
                  className="flex text-[10px] py-1 border-b border-redx/5"
                >
                  <div
                    className="w-32 font-semibold text-redx"
                    style={{
                      textShadow: "0 0 6px rgba(247, 80, 73, 0.7)",
                    }}
                  >
                    {bind.key}
                  </div>
                  <div
                    className="flex-1 text-greyx"
                    style={{
                      textShadow: "0 0 6px rgba(255, 255, 255, 0.4)",
                    }}
                  >
                    {bind.action}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="w-48 flex flex-col gap-3">
        <TitleDoc text="Table of Contents" />
        {keybindData.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-left text-[10px] text-greenx uppercase hover:text-redx transition"
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default KeybindDocs;
