"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Minus, Plus, ShoppingCart, Trash2, Truck } from "lucide-react";
import { useCart } from "@/context/CartContext";
import PlusBadge from "@/components/ui/PlusBadge";

const money = (n: number) => `$${n.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

export default function CartView() {
  const { items, count, subtotal, ready, setQty, removeItem, clear } = useCart();
  const [code, setCode] = useState("");
  const [codeMsg, setCodeMsg] = useState<string | null>(null);

  // The cart is read from the browser, so wait for it before drawing anything.
  if (!ready) {
    return (
      <div className="container py-16 text-center text-ink/60" aria-busy="true">
        Loading your cart…
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container py-16 text-center">
        <ShoppingCart size={56} className="mx-auto text-neutral-300" strokeWidth={1.25} />
        <h1 className="mt-4 text-2xl font-semibold text-ink">Your cart is empty</h1>
        <p className="mt-2 text-ink/70">Looks like you haven&apos;t added anything yet.</p>
        <Link
          href="/"
          className="mt-6 inline-block rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container py-6 sm:py-8">
      <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
        <h1 className="text-2xl font-semibold text-ink">
          Your Cart <span className="text-base font-normal text-ink/60">({count} {count === 1 ? "item" : "items"})</span>
        </h1>
        <button onClick={clear} className="text-sm text-accent hover:underline">
          Remove all items
        </button>
      </div>

      <div className="grid gap-8 desk:grid-cols-[1fr_340px]">
        {/* Line items */}
        <ul className="divide-y divide-neutral-200 rounded border border-neutral-200">
          {items.map((i) => (
            <li key={i.id} className="flex gap-4 p-4">
              <Link href={`/product/${i.slug}`} className="relative size-20 shrink-0 sm:size-28">
                <Image src={i.image} alt={i.title} fill sizes="112px" className="object-contain" />
              </Link>

              <div className="min-w-0 flex-1">
                <Link
                  href={`/product/${i.slug}`}
                  className="line-clamp-3 text-sm font-medium leading-snug text-brand hover:underline sm:text-base"
                >
                  {i.title}
                </Link>
                <p className="mt-1 text-xs uppercase text-ink/50">Item #: {i.id}</p>
                <p className="mt-1 flex items-center gap-2 text-xs text-ink/70">
                  <PlusBadge className="text-[10px]" /> Eligible for free shipping
                </p>

                <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-3">
                  <div className="flex items-center">
                    <button
                      onClick={() => setQty(i.id, i.qty - 1)}
                      aria-label={`Decrease quantity of ${i.title}`}
                      className="flex size-9 items-center justify-center rounded-l border border-neutral-300 hover:bg-neutral-50"
                    >
                      <Minus size={14} />
                    </button>
                    <input
                      type="number"
                      min={1}
                      max={999}
                      value={i.qty}
                      onChange={(e) => setQty(i.id, Number(e.target.value) || 1)}
                      aria-label={`Quantity of ${i.title}`}
                      className="h-9 w-14 border-y border-neutral-300 text-center text-sm outline-none focus:border-brand"
                    />
                    <button
                      onClick={() => setQty(i.id, i.qty + 1)}
                      aria-label={`Increase quantity of ${i.title}`}
                      className="flex size-9 items-center justify-center rounded-r border border-neutral-300 hover:bg-neutral-50"
                    >
                      <Plus size={14} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(i.id)}
                    className="flex items-center gap-1 text-sm text-accent hover:underline"
                  >
                    <Trash2 size={14} /> Remove
                  </button>
                </div>
              </div>

              <div className="shrink-0 text-right">
                <p className="text-lg font-bold text-[#c23b0a]">{money(i.qty * i.price)}</p>
                <p className="text-xs text-ink/60">
                  {money(i.price)}/{i.unit}
                </p>
              </div>
            </li>
          ))}
        </ul>

        {/* Summary */}
        <aside className="h-fit rounded border border-neutral-200 bg-neutral-50 p-5 desk:sticky desk:top-4">
          <h2 className="text-lg font-semibold text-ink">Order Summary</h2>

          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-ink/80">Subtotal ({count} {count === 1 ? "item" : "items"})</dt>
              <dd className="font-semibold text-ink">{money(subtotal)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="flex items-center gap-1.5 text-ink/80">
                <Truck size={14} /> Shipping
              </dt>
              <dd className="text-ink/70">Calculated at checkout</dd>
            </div>
            <div className="flex justify-between border-t border-neutral-300 pt-3 text-base">
              <dt className="font-semibold text-ink">Estimated Total</dt>
              <dd className="font-bold text-ink">{money(subtotal)}</dd>
            </div>
          </dl>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setCodeMsg(code.trim() ? "Promo codes are applied at checkout." : null);
            }}
            className="mt-5"
          >
            <label htmlFor="promo" className="mb-1 block text-xs font-semibold text-ink/70">
              Promo code
            </label>
            <div className="flex">
              <input
                id="promo"
                value={code}
                onChange={(e) => setCode(e.target.value.toUpperCase())}
                className="h-10 min-w-0 flex-1 rounded-l border border-neutral-300 px-3 text-sm uppercase outline-none focus:border-brand"
              />
              <button type="submit" className="h-10 rounded-r bg-ink px-4 text-sm font-semibold text-white hover:bg-black">
                Apply
              </button>
            </div>
            {codeMsg && <p className="mt-1 text-xs text-ink/70">{codeMsg}</p>}
          </form>

          <Link
            href="/checkout"
            className="mt-5 block rounded bg-brand py-3 text-center text-sm font-bold text-white hover:bg-brand-dark"
          >
            Checkout
          </Link>
          <Link href="/" className="mt-3 block text-center text-sm text-accent hover:underline">
            Continue Shopping
          </Link>
        </aside>
      </div>
    </div>
  );
}
