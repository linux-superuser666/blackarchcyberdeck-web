"use client";
import React, { useEffect, useState } from "react";

const KittyFolder: React.FC = () => {
  const [items, setItems] = useState<{ name: string; type: string }[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(
        "https://api.github.com/repos/linux-superuser666/BlackArchCyberpunk2077/contents/kitty"
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
          className="flex flex-col size-full hover:bg-redx/50 rounded-sm items-center p-1"
        >
          <div className="grid grid-cols-[56px] grid-rows-[64px_1fr] h-20 w-14 gap-0 relative p-px">
            {item.type === "dir" ? (
              // 🔥 FOLDER UI (clip-path kamu)
              <div className="size-full bg-redx/30 p-px [clip-path:polygon(0_0,_45%_0,_55%_10%,_100%_11%,_100%_90%,_90%_100%,_0_100%)]">
                <div className="size-full bg-darkbluex/95 [clip-path:polygon(0_0,_45%_0,_55%_10%,_100%_11%,_100%_90%,_90%_100%,_0_100%)] px-px pb-px pt-2">
                  <div className="bg-redx/30 size-full [clip-path:polygon(0_25%,_5%_20%,_5%_0%,_95%_0%,_95%_20%,_100%_25%,_100%_65%,_95%_75%,_95%_100%,_5%_100%,_5%_75%,_0_65%)] p-px">
                    <div className="bg-darkbluex/90 size-full [clip-path:polygon(0_25%,_5%_20%,_5%_0%,_95%_0%,_95%_20%,_100%_25%,_100%_65%,_95%_75%,_95%_100%,_5%_100%,_5%_75%,_0_65%)]" />
                  </div>
                </div>
              </div>
            ) : (
              // 🔥 FILE UI (beda bentuk)
              <div className="size-full bg-redx/30 p-px [clip-path:polygon(9%_36%,_52%_10%,_36%_14%,_45%_5%,_34%_8%,_43%_0,_0_0,_0_50%,_49%_21%,_0_56%,_27%_41%,_0_63%,_0_100%,_16%_100%,_71%_47%,_23%_100%,_56%_100%,_84%_69%,_60%_100%,_83%_100%,_100%_83%,_100%_0,_75%_0)]">
                <div className="size-full bg-darkbluex/95 [clip-path:polygon(9%_36%,_52%_10%,_36%_14%,_45%_5%,_34%_8%,_43%_0,_0_0,_0_50%,_49%_21%,_0_56%,_27%_41%,_0_63%,_0_100%,_16%_100%,_71%_47%,_23%_100%,_56%_100%,_84%_69%,_60%_100%,_83%_100%,_100%_83%,_100%_0,_75%_0)] p-px"></div>
              </div>
            )}

            <p className="mt-1 text-[9px] text-center truncate w-16">
              {item.name}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default KittyFolder;
