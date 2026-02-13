import React from "react";
import Image from "next/image";

const Inventory = () => {
  const sections = [
    {
      title: "Places",
      items: [
        "Computer",
        "Desktop",
        "Recent",
        "Trash",
        "Documents",
        "Music",
        "Pictures",
        "Videos",
        "Downloads",
      ],
    },
    {
      title: "Devices",
      items: ["File System"],
    },
    {
      title: "Network",
      items: ["Browse Network"],
    },
  ];

  return (
    <div className="absolute bg-black/70 text-[9px] border text-greyx/80 border-redx/50 size-full grid grid-cols-1 grid-rows-[30px_1fr]">
      <div className="border-b size-full font-medium items-center border-redx/30 flex flex-row gap-3.5 p-0.5">
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
      <div className="grid grid-cols-[150px_1fr] grid-rows-1 size-full">
        {/* Sidebar */}
        <div className="pl-2 pt-1 pr-1 w-full border-r flex flex-col gap-2 border-redx/30">
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-1">
              <div className="w-full h-4 font-bold">{section.title}</div>

              <div className="flex flex-col pl-2">
                {section.items.map((item, idx) => (
                  <p
                    key={idx}
                    className="h-4 w-full flex items-center cursor-pointer hover:text-black font-medium hover:font-bold hover:bg-greyx/70 p-1"
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div className="p-2 grid grid-cols-8 gap-2 grid-rows-5">
          <div className="border border-redx/30 size-full"></div>
          <div className="border border-redx/30 size-full"></div>
          <div className="border border-redx/30 size-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
