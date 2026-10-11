"use client";

import { createElement, useEffect, useState } from "react";
import { Box, X } from "lucide-react";

type ModalProps = { open: boolean; onClose: () => void; src: string; alt: string; poster?: string };

/**
 * Full-screen 3D viewer. The <model-viewer> web component (and the .glb) only
 * load once the shopper opens it.
 */
export function ModelViewerModal({ open, onClose, src, alt, poster }: ModalProps) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    import("@google/model-viewer").then(() => !cancelled && setReady(true));
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      cancelled = true;
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="3D viewer"
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <div
        className="relative h-[80vh] w-full max-w-4xl overflow-hidden rounded-lg bg-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close 3D viewer"
          className="absolute right-3 top-3 z-10 flex size-9 items-center justify-center rounded-full bg-white shadow hover:bg-neutral-100"
        >
          <X size={18} />
        </button>

        {ready ? (
          createElement("model-viewer", {
            src,
            alt,
            poster,
            "camera-controls": true,
            "auto-rotate": true,
            "shadow-intensity": "1",
            ar: true,
            "ar-modes": "webxr scene-viewer quick-look",
            style: { width: "100%", height: "100%", background: "#f5f5f3" },
          })
        ) : (
          <div className="flex size-full items-center justify-center text-ink/60">Loading 3D model…</div>
        )}

        <p className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded bg-black/60 px-3 py-1 text-xs text-white">
          Drag to rotate · scroll or pinch to zoom
        </p>
      </div>
    </div>
  );
}

/** Stand-alone "View in 3D" button (kept for pages that don't use the gallery tile). */
export default function ModelViewer({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-2 rounded border border-neutral-300 bg-white px-3 py-2 text-sm font-semibold text-ink hover:border-brand hover:text-brand"
      >
        <Box size={16} /> View in 3D
      </button>
      <ModelViewerModal open={open} onClose={() => setOpen(false)} src={src} alt={alt} poster={poster} />
    </>
  );
}

/** 3D viewer that fills its parent (used inside the gallery's main image area). */
export function ModelStage({ src, alt, poster }: { src: string; alt: string; poster?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    import("@google/model-viewer").then(() => !cancelled && setReady(true));
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="relative size-full bg-[#f5f5f3]">
      {ready ? (
        createElement("model-viewer", {
          src,
          alt,
          poster,
          "camera-controls": true,
          "auto-rotate": true,
          "shadow-intensity": "1",
          ar: true,
          "ar-modes": "webxr scene-viewer quick-look",
          style: { width: "100%", height: "100%" },
        })
      ) : (
        <div className="flex size-full items-center justify-center text-ink/60">Loading 3D model…</div>
      )}
      <p className="pointer-events-none absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-black/60 px-3 py-1 text-xs text-white">
        Drag to rotate · scroll or pinch to zoom
      </p>
    </div>
  );
}
