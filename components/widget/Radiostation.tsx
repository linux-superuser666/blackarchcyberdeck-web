import Image from "next/image";
import React from "react";
import { useUIStore } from "@/state/widgetState";
import { radioSongs } from "@/api/radioSongs";

const Radiostation = () => {
  const [volume, setVolume] = React.useState(0.1);
  const activeWidget = useUIStore((s) => s.activeWidget);
  const toggleWidget = useUIStore((s) => s.toggleWidget);
  React.useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);
  const increaseVolume = () => {
    setVolume((prev) => {
      const newVolume = Math.min(prev + 0.1, 1);
      return Number(newVolume.toFixed(2));
    });
  };

  const decreaseVolume = () => {
    setVolume((prev) => {
      const newVolume = Math.max(prev - 0.1, 0);
      return Number(newVolume.toFixed(2));
    });
  };

  const [currentSong, setCurrentSong] = React.useState(radioSongs[0]);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playSong = (song: (typeof radioSongs)[0]) => {
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.play();
    }
  };

  if (activeWidget !== "radioStation") return null;
  return (
    <div className="absolute inset-0 z-[999] w-full h-full bg-black/70 flex justify-center items-center leading-none">
      <div className="flex flex-col w-[250px] h-[320px]">
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
          <div className="flex w-[250px] h-[18px] ">
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
        <div className="flex text-center text-redx uppercase text-[5px] font-bold w-[250px] justify-center ">
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
              <div className="text-[8px] font-bold text-redx">control</div>
              <div className="flex gap-px text-[9px] text-greyx flex-row items-center">
                <div
                  onClick={decreaseVolume}
                  className="font-nerdfonts mr-px cursor-pointer hover:text-redx"
                >
                  
                </div>

                <div className="font-bold w-[29px] text-center">
                  {Math.round(volume * 100)}%
                </div>

                <div
                  onClick={increaseVolume}
                  className="font-nerdfonts w-fit cursor-pointer hover:text-redx"
                >
                  󰜄
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-[180px] overflow-hidden hover:overflow-y-auto flex-row text-[9px] radio-list">
          <div className="flex "></div>
          <div className="flex flex-col overflow-x-hidden hover:overflow-y-auto h-56 radio-list pr-3">
            {radioSongs.map((song, index) => (
              <button
                key={index}
                onClick={() => playSong(song)}
                className="group w-[240px] gap-0.5 p-1 h-[19px] items-center flex flex-row relative"
              >
                <div className="w-4 h-4 items-center hidden relative group-hover:flex">
                  <div className="flex gap-[1px] pb-1 pl-[4px] flex-row absolute items-end bottom-0 ">
                    <div className="w-[1px] h-1 animate-h-2 bg-greyx"></div>
                    <div className="animate-h-4 w-[1px] h-3 bg-greyx"></div>
                    <div className="animate-h-3 w-[1px] h-2 bg-greyx"></div>
                    <div className="animate-h-2 w-[1px] h-1 bg-greyx "></div>
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
                <div className="absolute flex tracking-wider gap-1 uppercase top-2 left-5">
                  <p> {song.artist}</p>
                  <p>{song.title}</p>
                </div>
              </button>
            ))}
            <audio
              // controller
              ref={audioRef}
              controls
              className="w-full  appearance-none hidden mt-2"
            >
              <source src={currentSong.src} type="audio/mpeg" />
            </audio>
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
