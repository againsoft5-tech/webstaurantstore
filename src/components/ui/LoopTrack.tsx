"use client";

import { useCallback, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DURATION = 450;

type Props = {
  items: ReactNode[];
  /** Tailwind classes that set the --per variable (items visible at once; may be fractional). */
  perClass: string;
  className?: string;
  /**
   * Phones: drop the left arrow and float the right one over the track
   * (like the source store's mobile carousels) so cells get the full width.
   */
  overlayArrows?: boolean;
};

/**
 * Endless carousel. The items are rendered three times and the track slides one
 * item at a time; once it lands in the first or last copy it silently jumps back
 * into the middle copy, so it appears to loop forever. Arrows, swipe and
 * horizontal wheel/trackpad scroll all move it.
 */
export default function LoopTrack({ items, perClass, className = "", overlayArrows = false }: Props) {
  const n = items.length;
  const all = [...items, ...items, ...items];

  const [index, setIndex] = useState(n);
  const [animate, setAnimate] = useState(true);
  const busy = useRef(false);
  const touchX = useRef<number | null>(null);

  const move = useCallback((dir: 1 | -1) => {
    if (busy.current) return;
    busy.current = true;
    setAnimate(true);
    setIndex((i) => i + dir);
  }, []);

  const onTransitionEnd = (e: React.TransitionEvent) => {
    if (e.target !== e.currentTarget) return;
    if (index >= 2 * n || index < n) {
      setAnimate(false);
      setIndex((i) => (i >= 2 * n ? i - n : i + n));
    }
    busy.current = false;
  };

  return (
    <div className={`flex ${overlayArrows ? "relative" : ""} ${className}`}>
      <button
        onClick={() => move(-1)}
        aria-label="Previous"
        className={`flex w-9 shrink-0 items-center justify-center border-r border-neutral-200 text-brand hover:text-brand-dark ${
          overlayArrows ? "max-sm:hidden" : ""
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      <div
        className={`min-w-0 flex-1 overflow-hidden ${perClass}`}
        onWheel={(e) => {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY) && Math.abs(e.deltaX) > 20) {
            move(e.deltaX > 0 ? 1 : -1);
          }
        }}
        onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
        onTouchEnd={(e) => {
          if (touchX.current === null) return;
          const dx = e.changedTouches[0].clientX - touchX.current;
          touchX.current = null;
          if (Math.abs(dx) > 40) move(dx < 0 ? 1 : -1);
        }}
      >
        <ul
          className="flex h-full"
          style={{
            transform: `translateX(calc(${index} * -100% / var(--per)))`,
            transition: animate ? `transform ${DURATION}ms ease` : "none",
          }}
          onTransitionEnd={onTransitionEnd}
        >
          {all.map((node, i) => (
            <li
              key={i}
              className="flex shrink-0 border-r border-neutral-200"
              style={{ width: "calc(100% / var(--per))" }}
            >
              {node}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => move(1)}
        aria-label="Next"
        className={`flex w-9 shrink-0 items-center justify-center border-l border-neutral-200 text-brand hover:text-brand-dark ${
          overlayArrows ? "max-sm:absolute max-sm:inset-y-0 max-sm:right-0 max-sm:w-8 max-sm:border-0 max-sm:bg-gradient-to-l max-sm:from-white max-sm:via-white/90 max-sm:to-transparent" : ""
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
