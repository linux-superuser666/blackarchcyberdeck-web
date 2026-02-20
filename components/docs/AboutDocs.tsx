"use client";

import React, { useRef } from "react";
import TitleDoc from "../common/TitleDoc";
import SubtitleDoc from "../common/SubtitleDocs";

const sections = [
  {
    id: "inspiration",
    title: "Inspiration",
    content: (
      <>
        <SubtitleDoc text="Inspiration" />
        <p>
          I was inspired by the aesthetics of <strong>Cyberpunk 2077</strong>{" "}
          and wanted to bring that futuristic vibe into my desktop environment.
          That’s why I chose <strong>Quickshell</strong>.
        </p>
      </>
    ),
  },
  {
    id: "what-is-quickshell",
    title: "What is Quickshell?",
    content: (
      <>
        <SubtitleDoc text="What is Quickshell?" />
        <p>
          Quickshell is a toolkit for building a desktop shell — meaning you can
          create and customize components such as bars, widgets, lock screens,
          display managers, and more.
        </p>
        <p>It gives full control over how your desktop looks and behaves.</p>
      </>
    ),
  },
  {
    id: "why-quickshell",
    title: "Why I Chose Quickshell",
    content: (
      <>
        <SubtitleDoc text="Why I Chose Quickshell" />
        <ul className="list-disc pl-5 space-y-1">
          <li>Wayland and X11 for windowing</li>
          <li>Wayland for window management and screen recording</li>
          <li>Workspace management for Hyprland, i3, and Sway</li>
          <li>PipeWire for audio controls</li>
          <li>BlueZ for Bluetooth</li>
          <li>PAM for authentication and lockscreen development</li>
          <li>Greetd for building a display manager</li>
          <li>UPower for battery monitoring</li>
          <li>Power Profiles Daemon for power management</li>
          <li>MPRIS-compatible media players</li>
          <li>StatusNotifierItem-compatible system tray clients</li>
        </ul>
      </>
    ),
  },
  {
    id: "conclusion",
    title: "Conclusion",
    content: (
      <>
        <SubtitleDoc text="Conclusion" />
        <p>
          With these integrations, Quickshell makes it possible to build a fully
          customized, modern, and responsive desktop experience while keeping
          everything modular and efficient.
        </p>
      </>
    ),
  },
];

const AboutDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex tracking-wider gap-1 justify-between">
      <div
        className="flex w-full flex-col px-4 gap-4"
        style={{ height: "320px" }}
      >
        <TitleDoc text="About BlackArch Cyberdeck" />
        <div className="flex overflow-x-hidden overflow-y-auto radio-list flex-col gap-6 text-[12px] font-medium leading-relaxed">
          {sections.map((section) => (
            <div
              key={section.id}
              ref={(el) => {
                sectionRefs.current[section.id] = el;
              }}
              className="scroll-mt-4"
            >
              {section.content}
            </div>
          ))}
        </div>
      </div>
      <div className="w-48 flex flex-col gap-3">
        <TitleDoc text="Table of Contents" />
        <div className="flex flex-col gap-2 text-greenx font-medium text-[10px]">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-left uppercase hover:text-redx transition-all"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutDocs;
