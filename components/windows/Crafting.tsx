import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";

interface GitHubItem {
  name: string;
  type: "file" | "dir";
  [key: string]: any;
}

const Crafting = () => {
  const [items, setItems] = useState<GitHubItem[]>([]);
  const [shellContent, setShellContent] = useState<string>("");

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/contents/quickshell/shell.qml"
    )
      .then((res) => res.json())
      .then((data: any) => {
        if (data.content) {
          // Decode base64
          const decoded = atob(data.content.replace(/\n/g, ""));
          setShellContent(decoded);
        }
      });
  }, []);

  useEffect(() => {
    fetch(
      "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/contents/quickshell"
    )
      .then((res) => res.json())
      .then((data: GitHubItem[]) => {
        setItems(data);
      });
  }, []);

  return (
    <div className="absolute border border-redx/50 h-full w-full ">
      <div className="bg-black/50 text-redx size-full grid grid-cols-[200px_10px_60px_1fr_115px] text-[9px] grid-rows-[20px_1fr_15px] gap-0">
        <div className="col-span-2 px-2.5 border-b h-full border-redx/30 w-full items-center flex gap-1.5 text-greyx justify-between">
          <div className="font-nerdfonts w-8">󰇘</div>
          <div className="font-nerdfonts"></div>
          <p>Bash</p>
          <div className="font-nerdfonts">󰅀</div>
          <div className="font-nerdfonts"></div>
          <div className="text-transparent text-[3px]">x</div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts">󰇘</div>
          <p className="text-xs">|</p>
          <div className="font-nerdfonts">󱏘</div>
          <div className="text-transparent text-[8px]">x</div>
          <div className="font-nerdfonts"></div>
        </div>
        <div className="col-span-2 col-start-3 border-b border-x border-redx/30 flex items-center gap-1 pl-3">
          <div>Shell.qml</div>
          <div>Shell.qml</div>
        </div>
        <div className="col-start-5 border-b flex justify-between border-redx/30 px-2.5 items-center">
          <div className="uppercase">QUICKS..</div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts"></div>
          <div className="font-nerdfonts">󰇘</div>
        </div>
        <div className="row-start-2 ">
          <div className="row-start-2 py-1 pl-2 text-[8px] gap-1 font-mono flex flex-col">
            <div className="flex">
              <p className="text-bluex">[</p>
              <p>BlackArch</p>
              <p className="text-transparent">x</p>
              <p className="text-greyx/40">~/.config/quickshell</p>
              <p className="text-bluex">]</p>
            </div>
            <p className="text-bluex">$</p>
          </div>
        </div>
        <div className="row-start-2 border-x border-redx/30"></div>
        <div className="row-start-2 flex size-full">
          <div className="flex flex-col w-[80px] text-[3px] p-1 overflow-hidden pointer-event-none">
            {shellContent.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>
          <div
            id="line number"
            className="flex text-center w-8 flex-col border-r border-redx/30 gap-1 text-yellowx "
          >
            {shellContent.split("\n").map((_, idx) => (
              <p key={idx}>{idx + 1}</p>
            ))}
          </div>
          <div className="flex w-full"></div>
        </div>
        <div className="row-start-2 border-x border-redx/30 overflow-auto scrollbar-hidden">
          {shellContent.split("\n").map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
        <div className="row-start-2 pl-3 py-1 grid w-full grid-cols-1 grid-rows-[10px_10px_10px_10px_10px_10px_10px_10px_10px_10px_10px]">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="grid grid-cols-[10px_1fr] grid-rows-1 items-center"
            >
              <div className="text-greyx text-[8px] font-nerdfonts flex items-center">
                {item.type === "dir" ? "" : ""}
              </div>
              <div className="w-full flex justify-start font-bold tracking-wider truncate">
                {item.name}
              </div>
            </div>
          ))}
        </div>
        <div className="col-span-5 border-t items-center flex-row px-1 border-redx/30 flex">
          <div className="flex flex-row gap-1 5">
            <div className="font-nerdfonts "></div>
            <p>0</p>
            <div className="font-nerdfonts "></div>
            <p>0</p>
          </div>
          <div className="w-full"></div>
          <div className="font-nerdfonts"></div>
        </div>
      </div>
    </div>
  );
};

export default Crafting;
