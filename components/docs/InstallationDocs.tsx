"use client";

import React, { useRef, useState } from "react";
import TitleDoc from "../common/TitleDoc";
import DocRequirement from "../common/DocRequirement";

const packages = [
  {
    id: "quickshell",
    title: "Quickshell",
    desc: "building blocks for your desktop",
    installCommand: "sudo pacman -S quickshell",
    versionCommand: "quickshell --version",
  },
  {
    id: "hyprland",
    title: "Hyprland",
    desc: "Modern compositor with the looks",
    installCommand: "sudo pacman -S hyprland",
    versionCommand: "hyprland --version",
  },
  {
    id: "kitty",
    title: "Kitty",
    desc: "GPU based terminal emulator",
    installCommand: "sudo pacman -S kitty",
    versionCommand: "kitty --version",
  },
  {
    id: "rofi",
    title: "Rofi",
    desc: "Application launcher & window switcher",
    installCommand: "sudo pacman -S rofi",
    versionCommand: "rofi -version",
  },
  {
    id: "ncmpcpp",
    title: "Ncmpcpp",
    desc: "NCurses Music Player Client",
    installCommand: "sudo pacman -S ncmpcpp",
    versionCommand: "ncmpcpp --version",
  },
];

const InstallationDocs = () => {
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    sectionRefs.current[id]?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);

    setTimeout(() => {
      setCopiedId(null);
    }, 1500);
  };

  return (
    <div className="flex tracking-wider flex-row gap-1 size-full">
      {/* MAIN CONTENT */}
      <div
        className="flex w-full flex-col overflow-x-hidden overflow-y-auto journal-list px-4 gap-6"
        style={{ height: "300px" }}
      >
        <TitleDoc text="Install Requirement Packages" />

        {packages.map((pkg) => (
          <div
            key={pkg.id}
            ref={(el) => {
              sectionRefs.current[pkg.id] = el;
            }}
            className="flex flex-col gap-3"
          >
            <DocRequirement
              title={pkg.title}
              desc={pkg.desc}
              command={pkg.installCommand}
              label="Install Command :"
            />

            {/* VERSION CHECK */}
            <div className="flex flex-col gap-1">
              <div className="text-redx font-medium">Version Check :</div>

              <div className="relative w-full border border-redx/30 px-2 py-2 flex items-center gap-2">
                <span className="text-redx">$</span>
                <span className="text-redx/80 font-semibold pr-14">
                  {pkg.versionCommand}
                </span>

                <button
                  onClick={() => handleCopy(pkg.versionCommand, pkg.id)}
                  className="absolute right-2 text-[10px] text-redx hover:opacity-70 transition font-nerdfonts"
                >
                  {copiedId === pkg.id ? "󰄬" : ""}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* SIDEBAR TOC */}
      <div className="w-48 flex flex-col gap-3 pl-3">
        <div className="text-xs font-bold uppercase text-greyx">Packages</div>

        {packages.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => scrollToSection(pkg.id)}
            className="text-left text-[11px] uppercase hover:text-white transition"
          >
            {pkg.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default InstallationDocs;
