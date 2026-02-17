import React from "react";
import TitleDoc from "../common/TitleDoc";
import Image from "next/image";
import DocRequirement from "../common/DocRequirement";

const InstallationDocs = () => {
  return (
    <div
      className="flex w-full flex-col overflow-x-hidden overflow-y-auto radio-list px-4 gap-4"
      style={{ height: "320px" }}
    >
      <TitleDoc text="Install Requirement packages" />
      <DocRequirement
        title="Quickshell"
        desc="building blocks for your desktop"
        command="sudo pacman -S quickshell"
      />
      <DocRequirement
        title="Hyprland"
        desc="Modern compositor with the looks"
        command="sudo pacman -S hyprland"
      />
      <DocRequirement
        title="Kitty"
        desc="The fast, feature-rich, GPU based terminal emulator."
        command="sudo pacman -S kitty"
      />
      <DocRequirement
        title="Rofi"
        desc="A window switcher, application launcher, ssh dialog, dmenu replacement and more"
        command="sudo pacman -S rofi"
      />
      <DocRequirement
        title="Ncmpcpp"
        desc="NCurses Music Player Client Plus Plus"
        command="sudo pacman -S ncmpcpp"
      />
    </div>
  );
};

export default InstallationDocs;
