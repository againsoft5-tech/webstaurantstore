"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import AddToCart from "@/components/cart/AddToCart";
import Stars from "@/components/ui/Stars";
import type { CatalogProduct } from "@/data/catalog";

/** Compact add-to-cart bar that slides in once the main buy box has scrolled away. */
export default function StickyBar({ product: p }: { product: CatalogProduct }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const target = document.getElementById("buy-box");
    if (!target) return;
    const io = new IntersectionObserver(([entry]) => setShow(!entry.isIntersecting && entry.boundingClientRect.top < 0), {
      threshold: 0,
    });
    io.observe(target);
    return () => io.disconnect();
  }, []);

  return (
    <div
      aria-hidden={!show}
      className={`fixed inset-x-0 top-0 z-30 border-b border-neutral-200 bg-white shadow-md transition-transform duration-200 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container flex items-center gap-4 py-2">
        <span className="relative hidden size-12 shrink-0 sm:block">
          <Image src={p.image} alt="" fill sizes="48px" className="object-contain" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-ink">{p.title}</p>
          {p.rating > 0 && <Stars value={p.rating} size={12} />}
        </div>
        <p className="whitespace-nowrap text-[#c23b0a]">
          <span className="text-xl font-bold">${p.price.toFixed(2)}</span>
          <span className="text-xs text-ink/70">/{p.unit}</span>
        </p>
        <AddToCart
          className="w-44 shrink-0"
          item={{ id: p.sku, slug: p.slug, title: p.title, image: p.image, price: p.price, unit: p.unit }}
        />
      </div>
    </div>
  );
}
