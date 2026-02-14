"use client";
import React, { useEffect, useState } from "react";

const IconsFolder: React.FC = () => {
  const [items, setItems] = useState<{ name: string; type: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/contents/dotIcons/BlackArch-Cyberdeck"
      );
      const data = await res.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="p-2 grid grid-cols-8 gap-2 grid-rows-5">
      {items.map((item) => (
        <div
          key={item.name}
          className="flex flex-col items-center cursor-pointer group"
        >
          <div className="flex flex-row h-16 w-16 gap-px">
            <div className="h-full w-2.5 bg-redx/30 p-px [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%,_0_80%,_25%_80%,_25%_60%,_0_60%)]">
              <div className="size-full bg-black/90 [clip-path:polygon(0_0,_100%_0,_100%_100%,_0_100%,_0_82%,_28%_82%,_28%_59%,_0_59%)]"></div>
            </div>
            <div className="size-full bg-redx/30 p-px [clip-path:polygon(0%_0%,_100%_0,_100%_75%,_75%_100%,_0%_100%)]">
              <div className="size-full [clip-path:polygon(0%_0%,_100%_0,_100%_75%,_75%_100%,_0%_100%)] bg-black/90 group-hover:bg-darkbluex/45 font-nerdfonts font-thin text-xs flex items-center justify-center text-redx/30">
                {item.type === "dir" ? " " : " "}
              </div>
            </div>
          </div>

          <p className="mt-1 text-xs text-center truncate w-16">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default IconsFolder;
