import React from "react";
import YoutubeShortEmbed from "./YoutubeShortEmbed";
import Link from "next/link";
import GlitchText from "../multimedia/GlitchText";

const SocialContent = () => {
  return (
    <div className="border border-redx/30 size-full flex flex-col gap-1">
      <div className="text-redx font-medium font-orbitron text-[9px] text-center tracking-widest flex items-center justify-center pt-1 uppercase">
        <GlitchText
          text="linux.superuser"
          className="uppercase text-center"
          layers={9}
          fontSize={9}
        />
      </div>
      <div className="size-full">
        <div className="flex size-full min-h-full min-w-full border border-redx/30">
          <Link href="https://www.tiktok.com/@linux.superuser" target="_blank">
            <YoutubeShortEmbed
              videoUrl="https://www.youtube.com/shorts/fkcA8UJ3Cbo"
              width={145}
              scale={1.3}
              offsetY={-40}
              offsetX={-10}
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SocialContent;
