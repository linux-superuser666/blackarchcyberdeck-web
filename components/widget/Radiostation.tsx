import Image from "next/image";
import React from "react";
import { useUIStore } from "@/state/widgetState";

const Radiostation = () => {
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  if (activeWidget !== "radioStation") return null;
  const songs = [
    { title: "Duality", artist: "Slipknot" },
    { title: "Psychosocial", artist: "Slipknot" },
    { title: "Before I Forget", artist: "Slipknot" },
    { title: "Wait and Bleed", artist: "Slipknot" },
    { title: "Snuff", artist: "Slipknot" },
  ];
  return (
    <div className="absolute inset-0 z-50 w-full h-full bg-black/70 flex justify-center items-center leading-none">
      <div className="flex flex-col w-[300px] h-[320px]">
        <div className="flex flex-row text-redx text-[7px] text-shadow-redx/40 text-shadow-[0px_0px_3px] font-bold  justify-between">
          <div>TRN_TCLASS_B000095</div>
          <div>RADIO STATION DATABASE</div>
        </div>
        <div className="flex  flex-row gap-[2px]">
          <div className="flex flex-col">
            <div className="bg-redx rounded-tl-[3px] w-1.5 h-1"></div>
            <div className="bg-redx w-[5px] h-2"></div>
            <div className="bg-redx rounded-bl-[3px] w-1.5 h-1"></div>
          </div>
          <div className="flex w-[300px] h-[18px] ">
            <Image
              priority
              width={389}
              height={32}
              className="w-[300px] h-[18px]"
              src="/radiostation/radio-head.png"
              alt=""
            />
            <div className="uppercase text-xs absolute pl-2 pt-0.5 text-start flex items-center text-shadow-white text-shadow-2xs/50">
              RADIOSTATION
            </div>
          </div>
        </div>
        <div className="flex text-center text-redx uppercase text-[5px] font-bold w-[300px] justify-center ">
          <div>now playing</div>
        </div>
        <div className="flex flex-row gap-[2px]">
          <div className="flex flex-col">
            <div className="bg-redx rounded-tl-[3px] w-1.5 h-1"></div>
            <div className="bg-redx w-[5px] h-[80px]"></div>
            <div className="bg-redx rounded-bl-[3px] w-1.5 h-1"></div>
          </div>
          <div className="flex relative w-[140px] h-[90px]">
            <Image
              priority
              width={152}
              height={152}
              className="size-[88px]"
              src="/radiostation/cover-bg.png"
              alt=""
            />
            <Image
              priority
              width={144}
              height={145}
              className="absolute top-1 size-[88px] left-1 "
              src="/radiostation/cover-fg.png"
              alt=""
            />
            <div className="absolute text-[4px] bottom-1 left-1 text-redx/40 font-bold">
              <p className="leading-none">
                IMAGE_NAME:BlackArch_Linux <br />
                IMAGE_ID:blackarch-linux-slim <br />
                IMAGE_VERSION:2023.05.01 <br />
                ANSI_COLOR:0;34
              </p>
            </div>
            <div className="absolute size-[88px] inset-0 flex justify-center items-center">
              <Image
                priority
                width={70}
                height={70}
                className="object-contain"
                src="/radiostation/cover-music.png"
                alt=""
              />
            </div>
          </div>
          <div className="flex ml-1 text-xs border-redx/50 border-y flex-col justify-between w-full">
            <div className="flex text-[8px] text-start flex-col text-redx font-bold uppercase">
              <p>SNUFF</p>
              <p>SLIPKNOT</p>
            </div>
            <div className="uppercase flex justify-between w-full flex-row">
              <div className="font-bold text-[7px] text-redx">control</div>
              <div className="flex">
                <div className="text-white">x</div>
                <div className="text-white">x</div>
                <div className="text-white">x</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[180px] flex-row text-[9px]">
          <div className="flex "></div>
          <div className="flex flex-col overflow-x-hidden hover:overflow-y-auto h-56 radio-list pr-3">
            {songs.map((song, index) => (
              <button
                key={index}
                className="group w-[290px] gap-0.5 p-1 h-[19px] items-center flex flex-row relative"
              >
                <div className="w-4  h-4 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[1px] pb-px pl-[4px] flex-row absolute items-end bottom-0 ">
                    <div className="w-[1px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[1px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[1px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[1px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-4 h-4  pl-1 items-center tracking-wide leading-[3px] text-[2px] pt-1 group-hover:hidden flex ">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={300}
                  height={37}
                  className="opacity-0 w-[290px] h-[18px] absolute inzet-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute flex gap-1 uppercase top-2 left-5">
                  <p> {song.artist}</p>
                  <p>{song.title}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-row border-t justify-between border-redx/50 pt-1">
          <div className="flex flex-col leading-none text-[4px] text-redx font-bold">
            <p>CUSTOM GLITCHES ON UI MAY APPEAR BASES ON ANALISE</p>
            <p>DOCUMENTATION/JOURNAL/SYNTAX/COMMENT/HACK & CODE</p>
            <p>TYPE: CYBERSPACE</p>
          </div>
          <div className="flex cursor-pointer flex-row gap-4">
            <div className="flex items-center gap-1 flex-row text-[8px]">
              <Image
                priority
                width={8}
                height={6}
                src="/options/confirm.png"
                alt=""
              />
              <p>SELECT</p>
            </div>
            <div
              onClick={() => toggleWidget("radioStation")}
              className="flex items-center gap-1 flex-row text-[8px]"
            >
              <Image
                priority
                width={15}
                height={20}
                src="/options/close.png"
                alt=""
              />
              <p>CLOSE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Radiostation;
