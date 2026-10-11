"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, CircleHelp, Package, ShoppingCart, X } from "lucide-react";
import { megaMenu } from "@/data/megaMenu";
import { useCart } from "@/context/CartContext";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const quickLinks = [
  { name: "ExtraMile Plus", href: "/plus" },
  { name: "Rewards", href: "/rewards" },
  { name: "Get the App", href: "/app" },
  { name: "Weekly Sales", href: "/sales" },
  { name: "Coupons", href: "/coupons" },
];

export default function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  // Stop the page behind the menu from scrolling while it is open.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const { count: cartCount } = useCart();
  const [sub, setSub] = useState<number | null>(null);
  const category = sub === null ? null : megaMenu[sub];

  // Always reopen on the main list.
  useEffect(() => {
    if (!open) setSub(null);
  }, [open]);

  return (
    <div
      className={`fixed inset-0 z-50 desk:hidden ${open ? "" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-black/50 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
      />

      <aside
        className={`absolute left-0 top-0 flex h-full w-full max-w-[420px] flex-col overflow-y-auto bg-white shadow-xl transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Green header */}
        <div className="bg-brand pb-3">
          <div className="flex items-center gap-3 px-4 py-3">
            <button onClick={onClose} aria-label="Close menu" className="flex items-center gap-2 text-white">
              <X size={24} />
              <span className="text-base font-semibold">Menu</span>
            </button>

            <Logo className="mx-auto" />

            <Link
              href="/cart"
              onClick={onClose}
              aria-label="Cart"
              className="flex h-10 overflow-hidden rounded-sm bg-brand-dark text-white"
            >
              <span className="flex w-[40px] items-center justify-center">
                <ShoppingCart size={20} />
              </span>
              <span className="flex w-[32px] items-center justify-center bg-white text-base font-bold text-ink">
                {cartCount}
              </span>
            </Link>
          </div>

          <div className="px-4">
            <SearchBar className="h-11 border-0" />
          </div>
        </div>

        {category ? (
          <div className="flex-1">
            <button
              onClick={() => setSub(null)}
              className="flex w-full items-center gap-1 border-b border-neutral-200 px-3 py-4 text-left text-lg font-semibold text-ink"
            >
              <ChevronLeft size={20} /> Back to Main Menu
            </button>

            <div className="flex items-center justify-between px-4 pb-1 pt-5">
              <Link href={category.href} onClick={onClose} className="text-sm font-bold text-ink">
                {category.name}
              </Link>
              <Link href={category.href} onClick={onClose} className="text-sm font-semibold text-brand underline">
                Shop All
              </Link>
            </div>

            <ul className="pb-4">
              {category.featured.map((f) => (
                <li key={f.href}>
                  <Link href={f.href} onClick={onClose} className="block px-4 py-3 text-sm text-ink hover:bg-neutral-50">
                    {f.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="px-4 pb-1 pt-3 text-sm font-bold text-ink">More in {category.moreIn}</h3>
            <ul className="pb-8">
              {category.more.map((m) => (
                <li key={m.href}>
                  <Link href={m.href} onClick={onClose} className="block px-4 py-3 text-sm text-ink hover:bg-neutral-50">
                    {m.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <>
        {/* Account shortcuts */}
        <div className="grid grid-cols-2 gap-3 px-4 pt-4">
          <Link
            href="/login"
            onClick={onClose}
            className="rounded border border-neutral-300 py-3.5 text-center text-sm font-semibold text-ink hover:bg-neutral-50"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            onClick={onClose}
            className="rounded border border-neutral-300 py-3.5 text-center text-sm font-semibold text-ink hover:bg-neutral-50"
          >
            Create Account
          </Link>
          <Link
            href="/account/orders"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded border border-neutral-300 py-3.5 text-sm font-semibold text-ink hover:bg-neutral-50"
          >
            <Package size={16} /> Returns &amp; Orders
          </Link>
          <Link
            href="/help"
            onClick={onClose}
            className="flex items-center justify-center gap-2 rounded border border-neutral-300 py-3.5 text-sm font-semibold text-ink hover:bg-neutral-50"
          >
            <CircleHelp size={16} /> Help Center
          </Link>
        </div>

        {/* Departments */}
        <h2 className="px-4 pb-1 pt-6 text-lg font-bold text-ink">Departments</h2>
        <ul>
          {megaMenu.map((item, i) => (
            <li key={item.href}>
              <button
                onClick={() => setSub(i)}
                className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-ink hover:bg-neutral-50"
              >
                {item.name}
                <ChevronRight size={16} className="text-ink/70" />
              </button>
            </li>
          ))}
        </ul>

        {/* Quick links */}
        <h2 className="px-4 pb-1 pt-6 text-lg font-bold text-ink">Quick Links</h2>
        <ul className="pb-8">
          {quickLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onClose}
                className="block px-4 py-3 text-sm text-ink hover:bg-neutral-50"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
          </>
        )}
      </aside>
    </div>
  );
}
