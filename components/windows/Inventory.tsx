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
    { title: "Computer", items: [] },
    {
      title: "mrnngstr666",
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
          component: <ThemesFolder />,
          children: [
            { name: "Cyberdeck-Blackarch", component: <ThemesFolder /> },
          ],
        },
        {
          name: ".icons",
          component: <IconsFolder />,
          children: [
            { name: "BlackArch-Cyberdeck", component: <IconsFolder /> },
          ],
        },
      ],
    },
    { title: "Recent", items: [] },
    { title: "Trash", items: [] },
    { title: "File System", items: [] },
    { title: "Network", items: [] },
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
              onClick={() => {
                // ✅ hanya set active jika punya component
                if (item.component) {
                  setActiveFolder(item.name);
                }
              }}
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
        if (item.name === activeFolder && item.component) {
          return item.component;
        }
        if (item.children) {
          const comp = findComponent(item.children);
          if (comp) return comp;
        }
      }
    }

    // ✅ hanya tampil fallback kalau benar-benar tidak ada yang match
    if (!activeFolder) {
      return (
        <div className="flex text-redx font-medium w-full flex-col gap-1 text-xs">
          <div>Select The Folder to Show List . . . . . .</div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="absolute bg-black/70 text-[10px] size-full grid grid-rows-[30px_1fr] border-redx/30 border">
      {/* Top bar */}
      <div className="border-b size-full font-medium items-center border-redx/30 flex flex-row gap-3.5 p-0.5 text-redx/50">
        <div className="font-nerdfonts text-lg text-greyx pl-px">󰇙</div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm"></div>
        <div className="font-nerdfonts text-sm text-greyx"></div>
        <div className="size-full border-redx/50 pl-1 pr-2 items-center border flex-row flex gap-2">
          <div className="font-nerdfonts text-xs"></div>
          <div className="w-full text-greyx">/home/mrnngstr666/</div>
        </div>
        <div className="font-nerdfonts w-3 pr-2 items-center text-greyx justify-center flex text-sm">
          
        </div>
      </div>

      <div className="grid grid-cols-[150px_1fr] size-full relative">
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
