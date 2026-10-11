"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";

type Props = { src: string; poster: string; title: string };

/** Click-to-play product video. The file only starts loading once played. */
export default function VideoPlayer({ src, poster, title }: Props) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const start = () => {
    setPlaying(true);
    // Wait a tick so the controls render before play() is called.
    requestAnimationFrame(() => ref.current?.play().catch(() => {}));
  };

  return (
    <div className="relative size-full bg-black">
      <video
        ref={ref}
        src={playing ? src : undefined}
        poster={poster}
        controls={playing}
        playsInline
        preload="none"
        aria-label={title}
        className="size-full object-contain"
      />
      {!playing && (
        <button
          onClick={start}
          aria-label={`Play video: ${title}`}
          className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-brand shadow-lg">
            <Play size={28} className="ml-1 fill-current" />
          </span>
        </button>
      )}
    </div>
  );
}
