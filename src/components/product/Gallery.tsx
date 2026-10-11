"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import { HelpCircle, MessageSquareText, Play, Share2 } from "lucide-react";
import { ModelStage } from "./ModelViewer";
import VideoPlayer from "./VideoPlayer";

type Video = { id: string; src: string; poster: string; title: string };

type Props = {
  title: string;
  images: { src: string; zoom: string }[];
  videos?: Video[];
  model?: { src: string; alt: string };
  /** Rendered under the toolbar (the "Works With" carousel). */
  children?: ReactNode;
  hasWorksWith?: boolean;
};

type Active = { kind: "photo"; i: number } | { kind: "video"; i: number } | { kind: "3d" };

/** White card: big stage + thumbnail grid (photos, videos, 3D), then a "Works With" toolbar and its carousel. */
export default function GalleryCard({ title, images, videos = [], model, children, hasWorksWith }: Props) {
  const [active, setActive] = useState<Active>({ kind: "photo", i: 0 });
  const [zoom, setZoom] = useState<{ x: number; y: number } | null>(null);
  const [shared, setShared] = useState(false);

  const photo = active.kind === "photo" ? images[active.i] : null;
  const video = active.kind === "video" ? videos[active.i] : null;

  const share = async () => {
    const url = window.location.href;
    try {
      if (navigator.share) await navigator.share({ title, url });
      else {
        await navigator.clipboard.writeText(url);
        setShared(true);
        setTimeout(() => setShared(false), 1800);
      }
    } catch {
      /* cancelled */
    }
  };

  const tile = "relative aspect-square overflow-hidden rounded border bg-white sm:aspect-[1.2/1]";
  const tileState = (on: boolean) => (on ? "border-brand ring-1 ring-brand" : "border-neutral-300 hover:border-neutral-400");

  const threeDIcon = (cls: string) => (
    <svg viewBox="0 0 64 64" className={cls} fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6v10M26 10l6-6 6 6M32 58V48M26 54l6 6 6-6M6 32h10M10 26l-6 6 6 6M58 32H48M54 26l6 6-6 6" />
      <text x="32" y="39" textAnchor="middle" fontSize="20" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Arial, sans-serif">
        3D
      </text>
    </svg>
  );

  return (
    <div className="overflow-hidden rounded border border-neutral-200 bg-white max-desk:rounded-none max-desk:border-x-0">
      <div className="flex flex-col gap-3 p-4 sm:flex-row sm:gap-4 sm:p-5">
        {/* Main stage */}
        <div className="min-w-0 flex-1">
          <div
            className="relative aspect-square w-full overflow-hidden rounded bg-white"
            onMouseMove={(e) => {
              if (!photo) return;
              const r = e.currentTarget.getBoundingClientRect();
              setZoom({ x: ((e.clientX - r.left) / r.width) * 100, y: ((e.clientY - r.top) / r.height) * 100 });
            }}
            onMouseLeave={() => setZoom(null)}
          >
            {photo ? (
              <>
                <Image
                  src={photo.zoom}
                  alt={title}
                  fill
                  priority
                  sizes="(min-width:1025px) 40vw, 100vw"
                  className="rounded object-contain"
                />
                {zoom && (
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 hidden bg-white desk:block"
                    style={{
                      backgroundImage: `url(${photo.zoom})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "220%",
                      backgroundPosition: `${zoom.x}% ${zoom.y}%`,
                    }}
                  />
                )}
              </>
            ) : active.kind === "3d" && model ? (
              <ModelStage src={model.src} alt={model.alt} poster={images[0]?.src} />
            ) : (
              video && <VideoPlayer key={video.id} src={video.src} poster={video.poster} title={video.title} />
            )}
          </div>
        </div>

        {/* Thumbnails: one row on phones, two columns on desktop */}
        <ul className="grid grid-cols-6 gap-1.5 sm:w-[190px] sm:grid-cols-2 sm:content-start sm:gap-2 xl:w-[216px]">
          {images.map((img, i) => {
            const on = active.kind === "photo" && active.i === i;
            return (
              <li key={img.src}>
                <button
                  onClick={() => setActive({ kind: "photo", i })}
                  aria-label={`Show image ${i + 1}`}
                  aria-current={on}
                  className={`${tile} block w-full ${tileState(on)}`}
                >
                  <Image src={img.src} alt="" fill sizes="110px" className="object-cover" />
                </button>
              </li>
            );
          })}

          {model && (
            <li className="max-sm:hidden">
              <button
                onClick={() => setActive({ kind: "3d" })}
                aria-label="View in 3D"
                aria-current={active.kind === "3d"}
                className={`${tile} flex w-full items-center justify-center ${tileState(active.kind === "3d")}`}
              >
                {threeDIcon("size-12 text-ink")}
              </button>
            </li>
          )}

          {videos.map((v, i) => {
            const on = active.kind === "video" && active.i === i;
            return (
              <li key={v.id}>
                <button
                  onClick={() => setActive({ kind: "video", i })}
                  aria-label={`Play video: ${v.title}`}
                  aria-current={on}
                  className={`${tile} block w-full bg-black ${tileState(on)}`}
                >
                  <Image src={v.poster} alt="" fill sizes="110px" className="object-cover opacity-80" />
                  <span className="absolute inset-0 flex items-center justify-center text-white">
                    <Play size={22} className="fill-current" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

        {/* Phones: full-width 3D button instead of the 3D tile */}
        {model && (
          <button
            onClick={() => setActive({ kind: "3d" })}
            className="mt-1 hidden w-full items-center justify-center gap-3 rounded border border-neutral-300 bg-white py-3 text-lg text-ink max-sm:flex"
          >
            {threeDIcon("size-9 text-brand")}
            <span className="min-[380px]:hidden">View in 3D</span>
            <span className="max-[379px]:hidden">See it in your space in 3D</span>
          </button>
        )}
      </div>

      {/* Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-neutral-100 px-4 py-4 max-sm:hidden sm:px-5">
        <h2 className="flex items-center gap-2 text-lg font-semibold text-ink max-sm:hidden">
          {hasWorksWith ? "Works With" : "Share this product"}
          {hasWorksWith && <HelpCircle size={16} className="text-brand" />}
        </h2>
        <div className="flex gap-2 max-sm:hidden">
          <button
            onClick={share}
            className="flex items-center gap-1.5 rounded border border-neutral-400 px-3 py-1.5 text-sm font-semibold text-ink hover:bg-neutral-50"
          >
            <Share2 size={14} /> {shared ? "Link copied" : "Share"}
          </button>
          <a
            href="#questions"
            className="flex items-center gap-1.5 rounded bg-brand px-3 py-1.5 text-sm font-bold text-white hover:bg-brand-dark"
          >
            <MessageSquareText size={15} /> Ask a Question
          </a>
        </div>
      </div>

      {children}
    </div>
  );
}
