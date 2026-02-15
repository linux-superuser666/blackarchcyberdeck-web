import Image from "next/image";
import React from "react";
import { useUIStore } from "@/state/widgetState";
import { radioSongs } from "@/api/radioSongs";
import ImageType from "../common/ImageType";
import CoverGridLine from "../multimedia/CoverGridLine";

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

  const [currentSong, setCurrentSong] = React.useState<
    (typeof radioSongs)[0] | null
  >(null);

  const audioRef = React.useRef<HTMLAudioElement>(null);

  const playSong = (song: (typeof radioSongs)[0]) => {
    setCurrentSong(song);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = song.src;
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const stopSong = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setCurrentSong(null);
  };

  const playNextSong = () => {
    if (!currentSong) return;

    const currentIndex = radioSongs.findIndex(
      (song) => song.src === currentSong.src
    );

    const nextIndex =
      currentIndex === radioSongs.length - 1
        ? 0 // balik ke awal kalau sudah terakhir
        : currentIndex + 1;

    const nextSong = radioSongs[nextIndex];

    setCurrentSong(nextSong);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = nextSong.src;
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  return (
    <>
      <audio ref={audioRef} onEnded={playNextSong} className="hidden" />

      {activeWidget === "radioStation" && (
        <div className="absolute inset-0 z-[999] w-full h-full bg-black/70 flex justify-center items-center leading-none">
          <div className="flex flex-col w-[234px] h-[320px]">
            <div className="flex flex-row text-redx text-[5px] text-shadow-redx/40 text-shadow-[0px_0px_3px] font-medium tracking-wide justify-between">
              <div>TRN_TCLASS_B000095</div>
              <div>RADIO STATION DATABASE</div>
            </div>
            <div className="flex  flex-row gap-[2px]">
              <div className="flex flex-col">
                <div className="bg-redx rounded-tl-[3px] w-1.5 h-1"></div>
                <div className="bg-redx w-[5px] h-2"></div>
                <div className="bg-redx rounded-bl-[3px] w-1.5 h-1"></div>
              </div>
              <div className="flex w-[250px] h-4.5 bg-redx/30 [clip-path:polygon(0%_0%,_100%_0,_100%_56%,_96%_100%,_0%_100%)] p-px">
                <div className="uppercase  [clip-path:polygon(0%_0%,_100%_0,_100%_56%,_96%_100%,_0%_100%)] bg-black/90 size-full text-[10px] pl-2 pt-0.5 text-start flex items-center text-shadow-white text-shadow-2xs/50">
                  RADIOSTATION
                </div>
              </div>
            </div>
            <div className="flex text-center text-redx uppercase text-[5px] font-bold w-[250px] justify-start pl-[96px]">
              <div>now playing</div>
            </div>
            <div className="flex flex-row gap-[2px]">
              <div className="flex flex-col">
                <div className="bg-redx rounded-tl-[3px] w-1.5 h-1"></div>
                <div className="bg-redx w-[5px] h-[80px]"></div>
                <div className="bg-redx rounded-bl-[3px] w-1.5 h-1"></div>
              </div>
              <div className="flex relative w-[140px] h-[90px] bg-redx/30 [clip-path:polygon(0%_0%,_100%_0,_100%_88%,_87%_100%,_0%_100%)] p-px ">
                <div className="bg-black/90 p-1 [clip-path:polygon(0%_0%,_100%_0,_100%_88%,_87%_100%,_0%_100%)] size-full">
                  <div className="size-full items-end flex">
                    <ImageType />
                  </div>
                  <div className="absolute z-0 size-full inset-0 flex justify-center items-center">
                    <Image
                      priority
                      width={70}
                      height={70}
                      className="object-contain size-full"
                      src="/music/slipknot-logo.png"
                      alt=""
                    />
                  </div>
                  <CoverGridLine />
                </div>
              </div>
              <div className="flex ml-1 text-xs border-redx/50 border-y flex-col justify-between w-full">
                <div className="flex text-[8px] text-start flex-col text-redx font-bold uppercase">
                  {currentSong && (
                    <>
                      <p>{currentSong.title}</p>
                      <p>{currentSong.artist}</p>
                    </>
                  )}
                </div>
                <div className="uppercase flex justify-between w-full flex-row pr-2">
                  <div className="text-[8px] font-bold text-redx">VOLUME</div>
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
            <div className="p-l py-1 w-full h-[180px]">
              <div className="flex size-full flex-col overflow-x-hidden overflow-y-scroll radio-list pl-1 pr-0.5 gap-0.5">
                {radioSongs.map((song, index) => {
                  return (
                    <button
                      key={index}
                      onClick={() => playSong(song)}
                      className="group size-full gap-0.5 h-4.5 items-center flex flex-row p-px hover:bg-greyx/70 hover:[clip-path:polygon(0%_0%,_100%_0,_100%_56%,_96%_100%,_0%_100%)]"
                    >
                      <div className="size-full p-1 flex flex-row gap-1 [clip-path:polygon(0%_0%,_100%_0,_100%_56%,_96%_100%,_0%_100%)] group-hover:bg-darkbluex/50">
                        <div className="w-4 h-full items-end justify-center hidden group-hover:flex flex-row gap-[1px]">
                          <div className="w-[1px] h-1 bg-greyx/50 origin-bottom animate-equalizer"></div>
                          <div className="w-[1px] h-1.5 bg-greyx/50 origin-bottom animate-equalizer [animation-delay:0.1s]"></div>
                          <div className="w-[1px] h-1 bg-greyx/50 origin-bottom animate-equalizer [animation-delay:0.2s]"></div>
                          <div className="w-[1px] h-2 bg-greyx/50 origin-bottom animate-equalizer [animation-delay:0.3s]"></div>
                        </div>

                        {/* Dummy Code Text (hilang saat hover) */}
                        <div className="w-4 h-full pl-1 items-center tracking-wide justify-center leading-[2px] text-greyx/70 text-[1px] flex group-hover:hidden">
                          531343244123 <br />
                          512334343336 <br />
                          123124352324 <br />
                          124353442355 <br />
                        </div>

                        {/* Song Info */}
                        <div className="flex flex-row size-full items-center justify-start group-hover:text-greyx tracking-wider gap-1 text-[8px] uppercase text-greyx/50">
                          <p>{song.artist}</p>
                          <p>{song.title}</p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-row border-t justify-between border-redx/50 pt-1">
              <div className="flex flex-col leading-none text-[4px] text-redx font-bold">
                <p>CUSTOM GLITCHES ON UI MAY APPEAR BASES ON ANALISE</p>
                <p>DOCUMENTATION/JOURNAL/SYNTAX/COMMENT/HACK & CODE</p>
                <p>TYPE: CYBERSPACE</p>
              </div>
              <div className="flex cursor-pointer flex-row gap-4">
                <div
                  onClick={stopSong}
                  className="flex items-center gap-1 flex-row text-[8px]"
                >
                  <Image
                    priority
                    width={8}
                    height={6}
                    src="/options/confirm.png"
                    alt=""
                  />
                  <p>STOP</p>
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
      )}
    </>
  );
};

export default Radiostation;
