import React from "react";

const DotThemesFolder = () => {
  return (
    <div className="p-2 grid grid-cols-8 gap-2 grid-rows-5">
      <div className="flex flex-col size-full hover:bg-redx/50 rounded-sm items-center p-1">
        <div className="grid grid-cols-[56px] grid-rows-[64px_1fr] h-20 w-14 gap-0 relative p-px">
          <div className="size-full bg-redx/30 p-px [clip-path:polygon(0_0,_45%_0,_55%_10%,_100%_11%,_100%_90%,_90%_100%,_0_100%)]">
            <div className="size-full bg-darkbluex/95 [clip-path:polygon(0_0,_45%_0,_55%_10%,_100%_11%,_100%_90%,_90%_100%,_0_100%)] px-px pb-px pt-2">
              <div className="bg-redx/30 size-full [clip-path:polygon(0_25%,_5%_20%,_5%_0%,_95%_0%,_95%_20%,_100%_25%,_100%_65%,_95%_75%,_95%_100%,_5%_100%,_5%_75%,_0_65%)] p-px">
                <div className="bg-darkbluex/90 size-full [clip-path:polygon(0_25%,_5%_20%,_5%_0%,_95%_0%,_95%_20%,_100%_25%,_100%_65%,_95%_75%,_95%_100%,_5%_100%,_5%_75%,_0_65%)]" />
              </div>
            </div>
          </div>
          <p className="mt-1 text-[9px] text-center truncate w-16">
            Cyberdeck-BlackArch
          </p>
        </div>
      </div>
    </div>
  );
};

export default DotThemesFolder;
