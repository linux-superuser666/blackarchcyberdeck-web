"use client";

import React, { useRef } from "react";
import TitleDoc from "../common/TitleDoc";
import SubtitleDoc from "../common/SubtitleDocs";

const changelogData = [
  {
    id: "new-features",
    title: "New Features",
    items: [
      "Added Quickhack Panel (for BlackArch Linux Only)",
      "Added App Launcher Panel",
      "Added System Panel",
      "Added Hypr Panel",
      "Added Chrono Panel",
      "Added Control Panel",
      "Added Level Panel",
      "Added Network Panel",
      "Added Notification Service Panel",
      "Added Xwindow App Focus Title",
    ],
  },
  {
    id: "other-changes",
    title: "Other Changes",
    items: [
      "Improved overall performance",
      "Change Animation on Notification",
      "Change Animation on Launcher Panel",
      "Change Animation on Level Panel",
    ],
  },
  {
    id: "bug-fixes",
    title: "Bug Fixes",
    items: [
      "Fixed Chrono Panel Event Click",
      "Fixed workspace crash on reload",
      "Fixed Slider Level",
      "Fixed Network Ecg Animation",
      "Fixed Level Toggle",
      "Fixed Radiostation Hover Effect",
      "Fixed Quickhack Hover Effect",
      "Fixed WinSwitch Animation",
    ],
  },
];

const ChangelogDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex gap-1 tracking-wider justify-between">
      {/* MAIN CONTENT */}
      <div
        className="flex w-full flex-col px-4 gap-4"
        style={{ height: "320px" }}
      >
        <TitleDoc text="Changelog" />

        <div className="flex flex-col overflow-y-auto pr-1 journal-list gap-3 flex-1 min-h-0">
          {changelogData.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="flex flex-col gap-1"
            >
              <SubtitleDoc text={section.title} />

              <div className="flex flex-col gap-1">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex w-full flex-row gap-2 items-start"
                  >
                    <div
                      className="size-1 mt-1 rounded-full bg-greyx"
                      style={{
                        boxShadow: "0 0 6px rgba(255, 255, 255, 0.3)",
                      }}
                    />

                    <div
                      className="text-[10px] "
                      style={{
                        textShadow: "0 0 6px rgba(255, 255, 255, 0.7)",
                      }}
                    >
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 SIDEBAR TOC */}
      <div className="w-48 flex flex-col gap-3 pl-3">
        <TitleDoc text="Table of Contents" />

        {changelogData.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="text-left text-[11px] uppercase hover:text-greyx transition"
          >
            {section.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChangelogDocs;
