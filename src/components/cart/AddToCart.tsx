"use client";

import { useState } from "react";
import { useCart, type CartItem } from "@/context/CartContext";

type Props = {
  item: Omit<CartItem, "qty">;
  /** Called after the item was added, with the quantity that went in. */
  onAdded?: (qty: number) => void;
  className?: string;
  /** Button text; defaults to "Add to Cart". */
  label?: string;
  size?: "sm" | "md";
};

/** Quantity box + Add to Cart button wired to the cart. */
export default function AddToCart({ item, onAdded, className = "", label = "Add to Cart", size = "sm" }: Props) {
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  const height = size === "md" ? "h-11" : "h-9";

  const add = () => {
    addItem(item, qty);
    onAdded?.(qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div className={`flex ${className}`}>
      <input
        type="number"
        min={1}
        max={999}
        value={qty}
        onChange={(e) => setQty(Math.min(999, Math.max(1, Number(e.target.value) || 1)))}
        aria-label={`Quantity for ${item.title}`}
        className={`${height} w-14 rounded-l border border-neutral-300 text-center text-sm outline-none focus:border-brand`}
      />
      <button
        onClick={add}
        className={`${height} flex-1 rounded-r bg-brand px-4 text-xs font-bold text-white hover:bg-brand-dark sm:text-sm`}
      >
        {added ? "Added ✓" : label}
      </button>
    </div>
  );
}
