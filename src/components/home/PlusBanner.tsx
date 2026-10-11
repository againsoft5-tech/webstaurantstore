import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function PlusBanner() {
  return (
    <section aria-label="Plus membership" className="container pt-1 pb-8">
      <Link
        href="/plus"
        className="relative flex items-center gap-4 overflow-hidden rounded-lg bg-[#dcf3fd] px-4 py-5 sm:gap-6 sm:px-8 sm:py-0 sm:h-[112px]"
      >
        <span className="-skew-x-6 shrink-0 rounded-xl bg-accent px-4 py-1.5 text-2xl font-bold italic leading-none text-white sm:px-5 sm:py-2 sm:text-4xl">
          plus
        </span>

        <div className="min-w-0 flex-1">
          <h2 className="text-lg font-bold text-ink sm:text-[22px] sm:leading-tight">
            Unlock FREE &amp; Priority Shipping with Plus!
          </h2>
          <p className="mt-1 text-sm text-ink/80 sm:text-base">
            Get free shipping, member discounts, guaranteed savings, &amp; more.
          </p>
        </div>

        {/* Right-hand "Try it for FREE" block with a lighter swoosh behind it */}
        <div className="relative ml-auto hidden h-full shrink-0 items-center gap-4 pl-16 pr-2 sm:flex">
          <span
            aria-hidden
            className="absolute inset-y-0 right-0 left-0 -skew-x-[18deg] rounded-l-3xl bg-white/60"
          />
          <span className="relative text-center font-extrabold leading-none text-[#123a5c]">
            <span className="block text-lg tracking-wide">Try it for</span>
            <span className="block text-[40px] tracking-tight">FREE</span>
            <span className="mt-1 inline-block rounded bg-[#123a5c] px-2.5 py-0.5 text-xs font-bold tracking-wide text-white">
              30-DAY TRIAL
            </span>
          </span>
          <ChevronRight className="relative text-ink" size={22} />
        </div>
      </Link>
    </section>
  );
}
