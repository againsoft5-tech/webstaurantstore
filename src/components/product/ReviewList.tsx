"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { HelpCircle, ShieldCheck, Star } from "lucide-react";
import Stars from "@/components/ui/Stars";
import type { Review } from "@/data/catalog";

type Props = { reviews: Review[]; mentioned: string[] };

const selectCls =
  "h-10 w-full rounded border border-neutral-400 bg-white px-2 text-sm text-ink outline-none focus:border-brand";

const toTime = (d?: string) => {
  const t = d ? new Date(d).getTime() : 0;
  return Number.isNaN(t) ? 0 : t;
};

/** Summary card, sort / filter bar and review cards. */
export default function ReviewList({ reviews, mentioned }: Props) {
  const [sort, setSort] = useState("helpful");
  const [option, setOption] = useState("all");
  const [rating, setRating] = useState("all");

  const total = reviews.length;
  const avg = total ? reviews.reduce((n, r) => n + r.rating, 0) / total : 0;
  const counts = [5, 4, 3, 2, 1].map((s) => reviews.filter((r) => Math.round(r.rating) === s).length);
  const options = useMemo(
    () => [...new Set(reviews.flatMap((r) => [r.style, r.finish].filter(Boolean) as string[]))],
    [reviews],
  );

  const shown = useMemo(() => {
    let list = reviews.filter(
      (r) =>
        (rating === "all" || Math.round(r.rating) === Number(rating)) &&
        (option === "all" || r.style === option || r.finish === option),
    );
    if (sort === "newest") list = [...list].sort((a, b) => toTime(b.date) - toTime(a.date));
    if (sort === "highest") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "lowest") list = [...list].sort((a, b) => a.rating - b.rating);
    return list;
  }, [reviews, sort, option, rating]);

  return (
    <div className="space-y-4">
      {/* Summary */}
      <div className="rounded border border-neutral-200 bg-white max-desk:rounded-none max-desk:border-x-0">
        <div className="grid sm:grid-cols-2 sm:divide-x sm:divide-neutral-200">
          <div className="flex flex-col items-center justify-center px-6 pb-4 pt-8 sm:py-8">
            <p className="text-6xl font-bold text-ink">{avg.toFixed(1)}</p>
            <div className="mt-2">
              <Stars value={avg} size={30} />
            </div>
            <p className="mt-3 text-base text-ink">
              {total} Customer {total === 1 ? "Review" : "Reviews"}
            </p>
            <Link href="/help" className="mt-1 flex items-center gap-1.5 text-sm text-ink/60 hover:underline">
              How item reviews work <HelpCircle size={14} />
            </Link>
          </div>

          <ul className="flex flex-col justify-center gap-2 px-6 pb-8 pt-2 text-sm sm:py-8">
            {counts.map((c, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="flex w-9 items-center gap-1 underline">
                  {5 - i}
                  <Star size={13} className="fill-[#f5b301] text-[#f5b301]" />
                </span>
                <span className="h-3 flex-1 overflow-hidden rounded-full border border-neutral-300 bg-neutral-100">
                  <span
                    className="block h-full rounded-full bg-brand"
                    style={{ width: total ? `${(c / total) * 100}%` : 0 }}
                  />
                </span>
                <span className="w-4 text-right underline">{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {mentioned.length > 0 && (
          <div className="border-t border-neutral-200 px-6 py-6 text-center">
            <h3 className="mb-3 text-xl font-medium text-ink">Frequently Mentioned</h3>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-lg text-ink/70">
              {mentioned.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Sort / filter */}
      <div className="grid gap-4 rounded border border-neutral-200 bg-white p-4 max-desk:rounded-none max-desk:border-x-0 sm:grid-cols-3">
        <label className="text-sm text-ink">
          <span className="mb-1 block">Sort By</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} className={selectCls}>
            <option value="helpful">Most Helpful</option>
            <option value="newest">Newest</option>
            <option value="highest">Highest Rating</option>
            <option value="lowest">Lowest Rating</option>
          </select>
        </label>
        <label className="text-sm text-ink">
          <span className="mb-1 block">Filter By</span>
          <select value={option} onChange={(e) => setOption(e.target.value)} className={selectCls}>
            <option value="all">All Options</option>
            {options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </label>
        <label className="text-sm text-ink">
          <span className="mb-1 block">Filter By Rating</span>
          <select value={rating} onChange={(e) => setRating(e.target.value)} className={selectCls}>
            <option value="all">All Ratings</option>
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "Star" : "Stars"}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="px-4 text-sm text-ink/80 desk:px-1">
        Showing {shown.length} of {total} reviews
      </p>

      {/* Cards */}
      <ul className="space-y-4">
        {shown.map((r) => (
          <li key={r.author + r.body.slice(0, 24)} className="grid gap-3 rounded border border-neutral-200 bg-white p-5 max-desk:rounded-none max-desk:border-x-0 sm:grid-cols-[210px_1fr]">
            <div>
              <p className="text-lg text-ink">
                <strong>{r.author}</strong>
                {r.business && (
                  <>
                    {" "}
                    from <strong>{r.business}</strong>
                  </>
                )}
              </p>
              {r.date && <p className="mt-1 text-sm text-ink/80">Posted on {r.date}</p>}
              {r.verified && (
                <p className="mt-2 flex items-center gap-1.5 text-sm text-ink/80">
                  <ShieldCheck size={16} className="fill-brand text-white" /> Verified Purchase
                </p>
              )}
            </div>
            <div>
              <Stars value={r.rating} size={16} />
              {(r.style || r.finish) && (
                <p className="mt-3 text-sm text-ink/70">
                  {r.style && (
                    <span className="block">
                      <strong>Style:</strong> {r.style}
                    </span>
                  )}
                  {r.finish && (
                    <span className="block">
                      <strong>Finish:</strong> {r.finish}
                    </span>
                  )}
                </p>
              )}
              <p className="mt-3 text-base leading-relaxed text-ink/90">{r.body}</p>
            </div>
          </li>
        ))}
        {shown.length === 0 && (
          <li className="rounded border border-neutral-200 bg-white p-8 text-center text-ink/70 max-desk:rounded-none max-desk:border-x-0">
            No reviews match these filters.
          </li>
        )}
      </ul>
    </div>
  );
}
