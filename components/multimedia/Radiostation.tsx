import Image from "next/image";
import React from "react";

const Radiostation = () => {
  return (
    <div className="realtive z-50 w-full h-full bg-black/70 flex justify-center items-center">
      <div className="absolute top-24">
        <div className="flex flex-col">
          <div className="flex flex-row text-redx text-[7px] text-shadow-redx/40 text-shadow-[0px_0px_3px] font-bold  justify-between">
            <div>TRN_TCLASS_B000095</div>
            <div>RADIO STATION DATABASE</div>
          </div>
          <div className="flex flex-row gap-[2px]">
            <div className="flex flex-col">
              <div className="bg-redx rounded-tl-[3px] w-2 h-2"></div>
              <div className="bg-redx w-[7px] h-4"></div>
              <div className="bg-redx rounded-bl-[3px] w-2 h-2"></div>
            </div>
            <div className="flex w-[389px] relative h-8 ">
              <Image
                priority
                width={389}
                height={32}
                src="/radiostation/radio-head.png"
                alt=""
              />
              <div className="uppercase absolute pl-2 pt-1 text-start flex items-center text-shadow-white text-shadow-2xs/50">
                RADIOSTATION
              </div>
            </div>
          </div>
          <div className="flex text-center text-redx uppercase text-[9px] font-bold w-[389px] justify-center ">
            <p>now playing</p>
          </div>
          <div className="flex flex-row gap-[2px]">
            <div className="flex flex-col">
              <div className="bg-redx rounded-tl-[3px] w-2 h-2"></div>
              <div className="bg-redx w-[7px] h-34"></div>
              <div className="bg-redx rounded-bl-[3px] w-2 h-2"></div>
            </div>
            <div className="flex relative">
              <Image
                priority
                width={152}
                height={152}
                src="/radiostation/cover-bg.png"
                alt=""
              />
              <Image
                priority
                width={144}
                height={145}
                className="absolute top-1 left-1 "
                src="/radiostation/cover-fg.png"
                alt=""
              />
              <div className="absolute text-[7px] bottom-1 left-1 text-redx/40 font-bold">
                <p className="leading-2">
                  IMAGE_NAME:BlackArch_Linux <br />
                  IMAGE_ID:blackarch-linux-slim <br />
                  IMAGE_VERSION:2023.05.01 <br />
                  ANSI_COLOR:0;34
                </p>
              </div>
              <div className="absolute inset-8">
                <Image
                  priority
                  width={100}
                  height={100}
                  src="/radiostation/cover-music.png"
                  alt=""
                />
              </div>
            </div>
            <div className="flex ml-1 border-redx/50 border-y flex-col justify-between">
              <div className="flex flex-col text-redx font-bold">
                <p className="uppercase">TITLE</p>
                <p className="uppercase">ARTIS</p>
              </div>
              <div className="uppercase flex justify-between w-[225px] flex-row">
                <div className="font-bold text-redx">control</div>
                <div className="flex">
                  <div className="text-white">x</div>
                  <div className="text-white">x</div>
                  <div className="text-white">x</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            <div className="flex "></div>
            <div className="flex flex-col overflow-x-hidden hover:overflow-y-auto h-56 radio-list pr-3">
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
              <button className="group w-[372px] gap-1 p-1 h-[37px] flex flex-row relative">
                <div className="w-12 h-8 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[2px] flex-row absolute items-end bottom-0 pb-2 pl-3">
                    <div className="w-[2px] h-1 animate-h-1 bg-whitex/60"></div>
                    <div className="animate-h-4 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-3 w-[2px] h-1 bg-whitex/60"></div>
                    <div className="animate-h-2 w-[2px] h-1 bg-whitex/60 "></div>
                  </div>
                </div>
                <div className="w-12 items-center tracking-wide leading-[4px] text-[3px] group-hover:hidden flex  pl-3">
                  531343123 <br />
                  512334336 <br />
                  123124354 <br />
                  124353455 <br />
                </div>
                <Image
                  priority
                  width={400}
                  height={37}
                  className="opacity-0  group-hover:opacity-100"
                  src="/radiostation/radio-select.png"
                  alt=""
                />
                <div className="absolute text-base uppercase top-2 left-10">
                  <p>SLIPKNOT -DUALITY</p>
                </div>
              </button>
            </div>
          </div>
          <div className="flex flex-row border-t justify-between border-redx/50 pt-1">
            <div className="flex flex-col leading-2 text-[6px] text-redx font-bold">
              <p>CUSTOM GLITCHES ON UI MAY APPEAR BASES ON ANALISE</p>
              <p>DOCUMENTATION/JOURNAL/SYNTAX/COMMENT/HACK & CODE</p>
              <p>TYPE: CYBERSPACE</p>
            </div>
            <div className="flex flex-row gap-4">
              <div className="flex items-center gap-1 flex-row text-xs">
                <Image
                  priority
                  width={14}
                  height={6}
                  src="/options/confirm.png"
                  alt=""
                />
                <p>SELECT</p>
              </div>
              <div className="flex items-center gap-1 flex-row text-xs">
                <Image
                  priority
                  width={23}
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
    </div>
  );
};

export default Radiostation;
