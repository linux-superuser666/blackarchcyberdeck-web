"use client";
import React, { useState } from "react";

import HyprFolder from "../repo/HyprFolder";
import QuickshellFolder from "../repo/QuickshellFolder";
import KittyFolder from "../repo/KittyFolder";
import RofiFolder from "../repo/RofiFolder";
import ThemesFolder from "../repo/ThemesFolder";
import IconsFolder from "../repo/IconsFolder";

interface FolderItem {
  name: string;
  component?: React.ReactNode;
  children?: FolderItem[];
}

interface Section {
  title: string;
  items: (FolderItem | string)[];
}

const Inventory: React.FC = () => {
  const [activeFolder, setActiveFolder] = useState<string | null>(null);

  const sections: Section[] = [
    {
      title: "Places",
      items: [
        {
          name: ".config",
          children: [
            { name: "quickshell", component: <QuickshellFolder /> },
            {
              name: "hypr",
              component: (
                <HyprFolder githubRepo="linux-superuser666/BlackArchCyberpunk2077" />
              ),
            },
            { name: "kitty", component: <KittyFolder /> },
            { name: "rofi", component: <RofiFolder /> },
          ],
        },
        {
          name: ".themes",
          children: [
            { name: "Cyberdeck-Blackarch", component: <ThemesFolder /> },
          ],
        },
        {
          name: ".icons",
          children: [
            { name: "BlackArch-Cyberdeck", component: <IconsFolder /> },
          ],
        },
      ],
    },
    { title: "Devices", items: ["File System"] },
    { title: "Network", items: ["Browse Network"] },
  ];

  const renderTree = (items: (FolderItem | string)[]) => {
    return items.map((item, idx) => {
      if (typeof item === "string") {
        return (
          <p key={idx} className="p-1">
            {item}
          </p>
        );
      } else {
        return (
          <div key={idx} className="flex flex-col gap-1">
            <p
              className={`cursor-pointer hover:font-bold hover:bg-greyx/70 p-1 ${
                activeFolder === item.name ? "bg-greyx/50 font-bold" : ""
              }`}
              onClick={() => setActiveFolder(item.name)}
            >
              {item.name}
            </p>
            {item.children && (
              <div className="pl-4 border-l border-redx/30">
                {renderTree(item.children)}
              </div>
            )}
          </div>
        );
      }
    });
  };

  const findComponent = (items: (FolderItem | string)[]): React.ReactNode => {
    for (const item of items) {
      if (typeof item !== "string") {
        if (item.name === activeFolder && item.component) return item.component;
        if (item.children) {
          const comp = findComponent(item.children);
          if (comp) return comp;
        }
      }
    }
    return (
      <div className="flex text-greyx text-base font-medium w-full flex-col gap-1">
        <div>Strucktur Folder When you must put the dotfiles</div>
      </div>
    );
  };

  return (
    <div className="absolute bg-black/70 text-[10px] size-full grid grid-rows-[30px_1fr]">
      {/* Top bar */}
      <div className="border-b size-full font-medium items-center border-redx/30 flex flex-row gap-3.5 p-0.5 text-redx/50">
        <div className="font-nerdfonts text-lg pl-2">󰇙</div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="size-full border-redx/50 pl-1 pr-2 items-center border flex-row flex gap-3">
          <div className="font-nerdfonts text-xs"></div>
          <div className="w-full">/root</div>
          <div className="font-nerdfonts text-sm"></div>
        </div>
      </div>

      <div className="grid grid-cols-[150px_1fr] size-full">
        {/* Sidebar */}
        <div className="border-r border-redx/30 p-2">
          {sections.map((section, i) => (
            <div key={i} className="mb-2">
              <div className="font-bold">{section.title}</div>
              <div className="pl-2">{renderTree(section.items)}</div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-4">
          {findComponent(sections.flatMap((s) => s.items))}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
