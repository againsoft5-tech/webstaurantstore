"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = {
  id: string; // item number / sku — one line per id
  slug: string;
  title: string;
  image: string;
  price: number;
  unit: string;
  qty: number;
};

type CartValue = {
  items: CartItem[];
  /** Total number of units (sum of quantities). 0 until the stored cart has loaded. */
  count: number;
  subtotal: number;
  ready: boolean;
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void;
  setQty: (id: string, qty: number) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};

const STORAGE_KEY = "extramile-cart-v1";
const MAX_QTY = 999;

const CartContext = createContext<CartValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [ready, setReady] = useState(false);

  // Load once on the client (avoids a server/client markup mismatch).
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      /* storage blocked or corrupted — start with an empty cart */
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      /* ignore quota / private-mode errors */
    }
  }, [items, ready]);

  // Keep several open tabs in sync.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY || !e.newValue) return;
      try {
        setItems(JSON.parse(e.newValue));
      } catch {
        /* ignore */
      }
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback<CartValue["addItem"]>((item, qty = 1) => {
    setItems((cur) => {
      const found = cur.find((i) => i.id === item.id);
      if (found) {
        return cur.map((i) => (i.id === item.id ? { ...i, qty: Math.min(MAX_QTY, i.qty + qty) } : i));
      }
      return [...cur, { ...item, qty: Math.min(MAX_QTY, qty) }];
    });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    setItems((cur) =>
      qty <= 0
        ? cur.filter((i) => i.id !== id)
        : cur.map((i) => (i.id === id ? { ...i, qty: Math.min(MAX_QTY, Math.floor(qty)) } : i)),
    );
  }, []);

  const removeItem = useCallback((id: string) => setItems((cur) => cur.filter((i) => i.id !== id)), []);
  const clear = useCallback(() => setItems([]), []);

  const value = useMemo<CartValue>(() => {
    const count = items.reduce((n, i) => n + i.qty, 0);
    const subtotal = items.reduce((n, i) => n + i.qty * i.price, 0);
    return { items, count, subtotal, ready, addItem, setQty, removeItem, clear };
  }, [items, ready, addItem, setQty, removeItem, clear]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
}
