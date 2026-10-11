"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronRight, Copy, Play } from "lucide-react";
import VideoPlayer from "./VideoPlayer";

export type VideoItem = {
  id: string;
  src: string;
  poster: string;
  title: string;
  description: string;
  transcript?: string;
};

/** Main player, "Watch More Videos" thumbnails, title + description, and a Transcript / Embed box. */
export default function VideoSection({ videos }: { videos: VideoItem[] }) {
  const [i, setI] = useState(0);
  const [tab, setTab] = useState<"transcript" | "embed">("transcript");
  const [copied, setCopied] = useState(false);
  const v = videos[i];
  if (!v) return null;

  const embed = `<video controls preload="none" width="640" src="${v.src}" poster="${v.poster}"></video>`;
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(embed);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };

  return (
    <section id="videos" className="border-t border-neutral-200 px-5 py-8 sm:px-8">
      <div className="grid gap-6 sm:grid-cols-[1fr_1fr]">
        <div>
          <div className="aspect-video overflow-hidden rounded-md bg-black">
            <VideoPlayer key={v.id} src={v.src} poster={v.poster} title={v.title} />
          </div>

          {videos.length > 1 && (
            <>
              <h3 className="mb-2 mt-4 text-lg font-medium text-ink">Watch More Videos</h3>
              <ul className="grid grid-cols-3 gap-2">
                {videos.map((x, idx) => (
                  <li key={x.id}>
                    <button
                      onClick={() => setI(idx)}
                      aria-label={`Play video: ${x.title}`}
                      aria-current={idx === i}
                      className={`relative block aspect-video w-full overflow-hidden rounded border bg-black ${
                        idx === i ? "border-brand ring-1 ring-brand" : "border-neutral-300"
                      }`}
                    >
                      <Image src={x.poster} alt="" fill sizes="160px" className="object-cover opacity-80" />
                      <span className="absolute inset-0 flex items-center justify-center text-white">
                        <Play size={20} className="fill-current" />
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        <div className="min-w-0">
          <h2 className="text-2xl font-normal leading-snug text-ink sm:text-[28px]">{v.title}</h2>
          <p className="mt-2 text-base leading-relaxed text-ink/85">{v.description}</p>
          <Link href="/resources" className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline">
            More Video Resources <ChevronRight size={14} />
          </Link>

          <div className="mt-4 rounded border border-neutral-200 p-3">
            <div className="mb-2 inline-flex overflow-hidden rounded border border-neutral-400 text-xs font-semibold">
              {(["transcript", "embed"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  aria-pressed={tab === t}
                  className={`px-3 py-1 capitalize ${tab === t ? "bg-neutral-200 text-ink" : "bg-white text-ink/80 hover:bg-neutral-50"}`}
                >
                  {t}
                </button>
              ))}
            </div>

            {tab === "transcript" ? (
              <p className="max-h-40 overflow-y-auto whitespace-pre-line pr-1 text-sm leading-7 text-ink/85">
                {v.transcript || "A transcript is not available for this video."}
              </p>
            ) : (
              <div>
                <textarea
                  readOnly
                  value={embed}
                  aria-label="Embed code"
                  className="h-28 w-full resize-none rounded border border-neutral-300 bg-neutral-50 p-2 font-mono text-xs text-ink/80"
                />
                <button onClick={copy} className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:underline">
                  <Copy size={13} /> {copied ? "Copied" : "Copy code"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
