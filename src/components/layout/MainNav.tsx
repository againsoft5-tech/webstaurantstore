"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { megaMenu } from "@/data/megaMenu";

/**
 * Green category bar. Hovering (or focusing) an item opens its mega menu under
 * the bar. A short delay on open/close stops the panel flickering while the
 * pointer travels from the bar down into the panel.
 */
export default function MainNav() {
  const [active, setActive] = useState<number | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const schedule = (next: number | null, delay: number) => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setActive(next), delay);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  const current = active === null ? null : megaMenu[active];

  return (
    <nav
      aria-label="Main categories"
      className="hidden desk:block container"
      onMouseLeave={() => schedule(null, 120)}
    >
      <div className="relative">
        <ul className="flex h-[48px] items-center justify-between rounded-sm bg-brand px-2 text-[13px] 2xl:text-[14px] font-semibold text-white">
          {megaMenu.map((item, i) => (
            <li key={item.href} onMouseEnter={() => schedule(i, active === null ? 80 : 0)}>
              <Link
                href={item.href}
                onFocus={() => schedule(i, 0)}
                aria-expanded={active === i}
                className={`block whitespace-nowrap rounded px-1.5 py-2 2xl:px-2.5 ${
                  active === i ? "bg-black/30" : "hover:bg-brand-dark"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {current && (
          <div
            className="absolute left-0 right-0 top-full z-50 grid grid-cols-[1.2fr_1fr] gap-8 rounded-b-md bg-white p-6 shadow-[0_12px_24px_rgba(0,0,0,0.18)]"
            onMouseEnter={() => schedule(active, 0)}
          >
            <div>
              <div className="mb-5 flex items-baseline gap-4 border-b border-neutral-200 pb-3">
                <Link href={current.href} onClick={() => setActive(null)} className="text-2xl text-ink hover:text-brand">
                  {current.name}
                </Link>
                <Link
                  href={current.href}
                  onClick={() => setActive(null)}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Shop All
                </Link>
              </div>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {current.featured.map((f) => (
                  <li key={f.href}>
                    <Link
                      href={f.href}
                      onClick={() => setActive(null)}
                      className="group flex items-center gap-4"
                    >
                      <span className="relative size-[76px] shrink-0 overflow-hidden rounded border border-neutral-200 bg-white">
                        <Image src={f.image} alt="" fill sizes="80px" className="object-contain p-1" />
                      </span>
                      <span className="text-base font-medium leading-snug text-brand group-hover:underline">
                        {f.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-md bg-neutral-100 p-6">
              <h3 className="mb-4 text-lg font-medium text-ink">More in {current.moreIn}</h3>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 text-sm">
                {current.more.map((m) => (
                  <li key={m.href}>
                    <Link
                      href={m.href}
                      onClick={() => setActive(null)}
                      className="text-ink/90 hover:text-brand hover:underline"
                    >
                      {m.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
