"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Check, HelpCircle, Heart } from "lucide-react";
import AddToCart from "@/components/cart/AddToCart";
import type { CatalogProduct } from "@/data/catalog";

const WISH_KEY = "extramile-wishlist-v1";

/** Top-right card: free-shipping tags, price, quantity + Add to Cart, then the wish-list bar. */
export default function PricePanel({ product: p }: { product: CatalogProduct }) {
  const d = p.detail;
  const [added, setAdded] = useState<number | null>(null);
  const [wished, setWished] = useState(false);

  useEffect(() => {
    try {
      setWished((JSON.parse(localStorage.getItem(WISH_KEY) ?? "[]") as string[]).includes(p.slug));
    } catch {
      /* ignore */
    }
  }, [p.slug]);

  const toggleWish = () => {
    try {
      const list = new Set<string>(JSON.parse(localStorage.getItem(WISH_KEY) ?? "[]"));
      if (list.has(p.slug)) list.delete(p.slug);
      else list.add(p.slug);
      localStorage.setItem(WISH_KEY, JSON.stringify([...list]));
      setWished(list.has(p.slug));
    } catch {
      setWished((w) => !w);
    }
  };

  const freeShip = d?.freeShipping ?? p.plus;

  return (
    <>
      <div id="buy-box" className="rounded border border-neutral-200 bg-white p-4 max-desk:rounded-none max-desk:border-x-0">
        {freeShip && (
          <div className="-ml-1 mb-3 flex flex-wrap gap-1.5 max-desk:-ml-4">
            <span className="inline-flex -skew-x-6 items-center gap-1.5 rounded-sm bg-[#0a5c8f] px-3 py-1 text-xs font-semibold text-white">
              Ships free with
              <span className="rounded-sm bg-accent px-1.5 text-[10px] font-bold italic">plus</span>
            </span>
            <span className="inline-flex -skew-x-6 items-center gap-1.5 rounded-sm bg-[#0a5c8f] px-3 py-1 text-xs font-semibold text-white">
              Free Shipping <HelpCircle size={13} />
            </span>
          </div>
        )}

        <p className="text-sm text-ink/80">Only</p>
        <p className="text-[#c23b0a]">
          <span className="text-[44px] font-bold leading-none">${p.price.toFixed(2)}</span>
          <span className="text-xl text-ink/70">/{p.unit}</span>
        </p>

        <AddToCart
          size="md"
          className="mt-4 [&_button]:h-14 [&_button]:text-lg [&_input]:h-14"
          item={{ id: p.sku, slug: p.slug, title: p.title, image: p.image, price: p.price, unit: p.unit }}
          onAdded={(q) => setAdded(q)}
        />

        {added !== null && (
          <div role="status" className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 rounded bg-green-50 px-3 py-2 text-sm text-green-800">
            <Check size={16} />
            <span>
              {added} {added === 1 ? "item" : "items"} added to your cart
            </span>
            <Link href="/cart" className="ml-auto font-semibold underline">
              View Cart
            </Link>
            <Link href="/checkout" className="font-semibold underline">
              Checkout
            </Link>
          </div>
        )}
      </div>

      <div className="max-desk:bg-headerbar max-desk:px-4 max-desk:py-3">
        <button
          onClick={toggleWish}
          aria-pressed={wished}
          className="flex w-full items-center justify-center gap-2 rounded border border-neutral-300 bg-neutral-50 py-2 text-xs font-semibold text-ink hover:bg-white"
        >
          <Heart size={14} className={wished ? "fill-current text-brand" : ""} />
          {wished ? "In Wish List" : "Add to Wish List"}
        </button>
      </div>
    </>
  );
}
