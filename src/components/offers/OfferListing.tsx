"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, List, SlidersHorizontal } from "lucide-react";
import type { Offer } from "@/data/offers";
import OfferProductCard from "./OfferProductCard";

const PER_PAGE = 24;

const SORTS = [
  { value: "popular", label: "Most Popular" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating-asc", label: "Rating: Low to High" },
  { value: "rating-desc", label: "Rating: High to Low" },
] as const;
type SortKey = (typeof SORTS)[number]["value"];

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

export default function OfferListing({ offer }: { offer: Offer }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [sort, setSort] = useState<SortKey>("popular");
  const [page, setPage] = useState(1);
  const [plusOnly, setPlusOnly] = useState(false);
  const [brands, setBrands] = useState<string[]>([]);
  const [q, setQ] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  const brandCounts = useMemo(() => {
    const m = new Map<string, number>();
    offer.products.forEach((p) => m.set(p.brand, (m.get(p.brand) ?? 0) + 1));
    return [...m.entries()].sort((a, b) => a[0].localeCompare(b[0]));
  }, [offer.products]);

  const plusCount = offer.products.filter((p) => p.plus).length;

  const visible = useMemo(() => {
    const term = q.trim().toLowerCase();
    let list = offer.products.filter(
      (p) =>
        (!plusOnly || p.plus) &&
        (brands.length === 0 || brands.includes(p.brand)) &&
        (!term || p.title.toLowerCase().includes(term)),
    );
    if (sort !== "popular") {
      const [key, dir] = sort.split("-") as ["price" | "rating", "asc" | "desc"];
      list = [...list].sort((a, b) => (dir === "asc" ? a[key] - b[key] : b[key] - a[key]));
    }
    return list;
  }, [offer.products, plusOnly, brands, q, sort]);

  const pages = Math.max(1, Math.ceil(visible.length / PER_PAGE));
  const current = Math.min(page, pages);
  const slice = visible.slice((current - 1) * PER_PAGE, current * PER_PAGE);

  const reset = () => {
    setPlusOnly(false);
    setBrands([]);
    setQ("");
    setPage(1);
  };
  const filtersActive = plusOnly || brands.length > 0 || q.trim() !== "";

  const toggleBrand = (b: string) => {
    setBrands((cur) => (cur.includes(b) ? cur.filter((x) => x !== b) : [...cur, b]));
    setPage(1);
  };

  const sidebar = (
    <aside className="text-sm text-ink">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {filtersActive && (
          <button onClick={reset} className="text-xs font-semibold text-accent hover:underline">
            Clear Filters
          </button>
        )}
      </div>

      {offer.categories.length > 0 && (
        <section className="border-t border-neutral-200 py-4">
          <h3 className="mb-2 font-semibold">{offer.categories[0]}</h3>
          <ul className="space-y-2">
            {offer.categories.slice(1).map((c) => (
              <li key={c}>
                <Link href={`/category/${slugify(c)}`} className="text-brand hover:underline">
                  {c}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-t border-neutral-200 py-4">
        <h3 className="mb-2 font-semibold">ExtraMile Plus</h3>
        <label className="flex cursor-pointer items-center gap-2">
          <input
            type="checkbox"
            checked={plusOnly}
            onChange={(e) => {
              setPlusOnly(e.target.checked);
              setPage(1);
            }}
            className="size-4 accent-[#E67E22]"
          />
          <span className="rounded-sm bg-accent px-1.5 text-[10px] font-bold italic text-white">plus</span>
          Eligible
          <span className="ml-auto text-xs text-ink/60">{plusCount}</span>
        </label>
      </section>

      {brandCounts.length > 1 && (
        <section className="border-t border-neutral-200 py-4">
          <h3 className="mb-2 font-semibold">Brand</h3>
          <ul className="space-y-2">
            {brandCounts.map(([name, count]) => (
              <li key={name}>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={brands.includes(name)}
                    onChange={() => toggleBrand(name)}
                    className="size-4 accent-[#E67E22]"
                  />
                  {name}
                  <span className="ml-auto text-xs text-ink/60">{count}</span>
                </label>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="border-t border-neutral-200 py-4">
        <h3 className="mb-2 font-semibold">Search within results</h3>
        <input
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setPage(1);
          }}
          aria-label="Search within results"
          className="h-9 w-full rounded border border-neutral-300 px-3 outline-none focus:border-brand"
        />
      </section>
    </aside>
  );

  return (
    <div className="container grid gap-6 py-6 desk:grid-cols-[230px_1fr]">
      {/* Filters: always visible on desktop, toggled on mobile */}
      <div className={`${showFilters ? "block" : "hidden"} desk:block`}>{sidebar}</div>

      <div className="min-w-0">
        {/* Toolbar */}
        <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
          <button
            onClick={() => setShowFilters((s) => !s)}
            className="flex items-center gap-2 rounded border border-neutral-300 px-3 py-2 font-semibold desk:hidden"
          >
            <SlidersHorizontal size={16} /> Filters
          </button>

          <p className="text-ink/70">
            {visible.length} {visible.length === 1 ? "product" : "products"}
          </p>

          <div className="ml-auto flex items-center gap-3">
            <div className="flex overflow-hidden rounded border border-neutral-300">
              {(["grid", "list"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  aria-label={`${v} view`}
                  aria-pressed={view === v}
                  className={`flex items-center gap-1.5 px-3 py-2 font-medium ${
                    view === v ? "bg-brand text-white" : "bg-white text-ink hover:bg-neutral-50"
                  }`}
                >
                  {v === "grid" ? <LayoutGrid size={15} /> : <List size={15} />}
                  <span className="hidden sm:inline">{v === "grid" ? "Grid" : "List"}</span>
                </button>
              ))}
            </div>

            <label className="flex items-center gap-2">
              <span className="hidden sm:inline">Sort by</span>
              <select
                value={sort}
                onChange={(e) => {
                  setSort(e.target.value as SortKey);
                  setPage(1);
                }}
                className="h-9 rounded border border-neutral-300 bg-white px-2 outline-none focus:border-brand"
              >
                {SORTS.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        {/* Products */}
        {slice.length === 0 ? (
          <p className="rounded border border-neutral-200 p-10 text-center text-ink/70">
            No products match your filters.
          </p>
        ) : view === "grid" ? (
          <ul className="grid grid-cols-2 gap-px overflow-hidden rounded border border-neutral-200 bg-neutral-200 sm:grid-cols-3 desk:grid-cols-4">
            {slice.map((p) => (
              <li key={p.id} className="flex bg-white [&>article]:w-full">
                <OfferProductCard product={p} />
              </li>
            ))}
          </ul>
        ) : (
          <ul className="divide-y divide-neutral-200 overflow-hidden rounded border border-neutral-200">
            {slice.map((p) => (
              <li key={p.id}>
                <OfferProductCard product={p} list />
              </li>
            ))}
          </ul>
        )}

        {/* Pagination */}
        {pages > 1 && (
          <nav aria-label="Pagination" className="mt-6 flex items-center justify-center gap-1 text-sm">
            <button
              onClick={() => setPage(current - 1)}
              disabled={current === 1}
              aria-label="Previous page"
              className="flex size-9 items-center justify-center rounded border border-neutral-300 disabled:opacity-40"
            >
              <ChevronLeft size={16} />
            </button>
            {Array.from({ length: pages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                aria-current={n === current ? "page" : undefined}
                className={`size-9 rounded border ${
                  n === current
                    ? "border-brand bg-brand font-bold text-white"
                    : "border-neutral-300 hover:bg-neutral-50"
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage(current + 1)}
              disabled={current === pages}
              aria-label="Next page"
              className="flex size-9 items-center justify-center rounded border border-neutral-300 disabled:opacity-40"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        )}
      </div>
    </div>
  );
}
