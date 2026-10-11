"use client";

import Image from "next/image";
import Link from "next/link";
import { DollarSign } from "lucide-react";
import AddToCart from "@/components/cart/AddToCart";
import PlusBadge from "@/components/ui/PlusBadge";
import Stars from "@/components/ui/Stars";
import type { OfferProduct } from "@/data/offers";

export const productHref = (p: OfferProduct) => `/product/${p.slug}`;

export default function OfferProductCard({
  product: p,
  list = false,
}: {
  product: OfferProduct;
  list?: boolean;
}) {
  return (
    <article
      className={`flex bg-white p-3 sm:p-4 ${list ? "flex-row items-center gap-5" : "flex-col"}`}
      data-item-number={p.id}
    >
      <Link
        href={productHref(p)}
        className={`group block ${list ? "flex w-1/2 items-center gap-5" : ""}`}
      >
        <div className={`relative ${list ? "size-28 shrink-0 sm:size-36" : "mx-auto aspect-square w-[88%]"}`}>
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes={list ? "150px" : "(min-width:1025px) 20vw, 45vw"}
            className="object-contain"
          />
        </div>
        <h3
          className={`line-clamp-3 text-[13px] font-medium leading-snug text-brand group-hover:underline sm:text-sm ${list ? "text-left" : "mt-3 text-center"}`}
        >
          {p.title}
        </h3>
      </Link>

      <div className={`flex flex-col ${list ? "flex-1 items-start" : "mt-2 flex-1"}`}>
        <div className={`flex items-center gap-1.5 ${list ? "" : "justify-center"}`}>
          {p.plus && <PlusBadge className="text-[10px]" />}
          {p.rating > 0 && <Stars value={p.rating} size={13} />}
        </div>

        <p className="relative mt-3 w-full border-b border-neutral-200 text-center text-[10px] uppercase leading-4 text-neutral-400">
          <span className="relative top-2 bg-white px-1">
            <span className="sr-only">Item number</span>#{p.id}
          </span>
        </p>

        <div className={`mt-4 flex flex-col ${list ? "items-start" : "items-center"} text-center`}>
          <p className="text-[#c23b0a]">
            <span className="text-xl font-bold sm:text-2xl">${p.price.toFixed(2)}</span>
            <span className="text-xs text-ink/70">/{p.unit}</span>
          </p>
          {p.perPrice !== null && p.perUnit && (
            <p className="text-xs text-ink/70">
              ${p.perPrice.toFixed(2)}/{p.perUnit}
            </p>
          )}
          {p.saveMore && (
            <span className="mt-2 inline-flex items-center gap-1 rounded border border-dashed border-neutral-300 bg-neutral-50 px-2 py-1 text-[11px] font-semibold text-ink/80">
              <DollarSign size={12} className="text-brand" /> Buy More, Save More
            </span>
          )}
        </div>

        <AddToCart
          className={`mt-auto pt-4 ${list ? "" : "w-full"}`}
          item={{ id: p.id, slug: p.slug, title: p.title, image: p.image, price: p.price, unit: p.unit }}
        />
      </div>
    </article>
  );
}
