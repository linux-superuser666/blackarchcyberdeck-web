"use client";

interface Props {
  videoUrl: string;
  width?: number;
  scale?: number;
  offsetY?: number;
  offsetX?: number; // 🔥 tambah ini
}

export default function YoutubeShortEmbed({
  videoUrl,
  width = 220,
  scale = 1,
  offsetY = 0,
  offsetX = 0,
}: Props) {
  const getYoutubeId = (url: string) => {
    const regExp =
      /(?:youtube\.com\/(?:watch\?v=|shorts\/|embed\/)|youtu\.be\/)([^&?/]+)/;
    const match = url.match(regExp);
    return match ? match[1] : "";
  };

  const videoId = getYoutubeId(videoUrl);

  const height = width * (16 / 9);

  return (
    <div
      className="relative overflow-hidden"
      style={{
        width,
        height,
      }}
    >
      <div
        style={{
          transform: `scale(${scale}) translate(${offsetX}px, ${offsetY}px)`,
          transformOrigin: "top center",
          width: "100%",
          height: "100%",
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&rel=0&modestbranding=1`}
          title="YouTube Shorts"
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="border-none pointer-events-none"
        />
      </div>
    </div>
  );
}
