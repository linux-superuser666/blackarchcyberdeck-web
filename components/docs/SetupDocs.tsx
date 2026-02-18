"use client";

import React, { useRef, useState } from "react";
import TitleDoc from "../common/TitleDoc";

const CommandBlock = ({ command }: { command: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="bg-black border border-redx/30 px-3 py-2 font-mono text-[11px] text-redx mt-2 flex justify-between items-center">
      <span>{command}</span>
      <button
        onClick={handleCopy}
        className="text-[10px] ml-3 px-2 hover:bg-redx hover:text-black transition-all font-nerdfonts"
      >
        {copied ? "󰄬" : ""}
      </button>
    </div>
  );
};

const sections = [
  {
    id: "clone",
    title: "Clone Repository",
    content: (
      <>
        <p>Clone repository to local machine:</p>
        <CommandBlock command="git clone https://github.com/linux-superuser666/BlackArchCyberpunk2077.git" />
      </>
    ),
  },
  {
    id: "copy-config",
    title: "Copy Config Folders",
    content: (
      <>
        <p>
          Move this folder to <b>.config</b> directory:
        </p>
        <ul className="list-disc ml-5 mt-2">
          <li>quickshell</li>
          <li>rofi</li>
          <li>hypr</li>
          <li>kitty</li>
        </ul>

        <CommandBlock command="mv quickshell rofi hypr kitty ~/.config/" />
      </>
    ),
  },
  {
    id: "themes",
    title: "Install Theme",
    content: (
      <>
        <p>
          Move theme folder to <b>.themes</b> directory:
        </p>

        <CommandBlock command="cd dotThemes" />
        <CommandBlock command="mv Cyberdeck-Blackarch ~/.themes/" />
      </>
    ),
  },
  {
    id: "icons",
    title: "Install Icons",
    content: (
      <>
        <p>
          Move icon folder to <b>.icons</b> directory:
        </p>

        <CommandBlock command="cd dotIcons" />
        <CommandBlock command="mv Blackarch-Cyberdeck ~/.icons/" />
      </>
    ),
  },
  {
    id: "restart",
    title: "Restart System",
    content: (
      <>
        <p>After all setup done, restart:</p>

        <CommandBlock command="reboot" />
      </>
    ),
  },
];

const SetupDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="flex flex-row tracking-wider gap-1 size-full">
      {/* MAIN CONTENT */}
      <div
        className="flex w-full flex-col overflow-x-hidden overflow-y-auto radio-list px-4 gap-8"
        style={{ height: "320px" }}
      >
        <TitleDoc text="Setup Guide" />

        {sections.map((section) => (
          <div
            key={section.id}
            ref={(el) => {
              sectionRefs.current[section.id] = el;
            }}
            className="scroll-mt-4"
          >
            <h2 className="text-redx text-[13px] mb-2 uppercase tracking-widest">
              {section.title}
            </h2>
            <div className="text-greyx text-[12px] leading-relaxed">
              {section.content}
            </div>
          </div>
        ))}
      </div>

      {/* SIDEBAR TOC */}
      <div className="w-48 border-l border-redx/10 pl-3 text-[11px]">
        <p className="text-redx mb-3 uppercase tracking-widest">On This Page</p>

        <div className="flex flex-col gap-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-left uppercase text-greyx hover:text-redx transition-all"
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetupDocs;
