"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, Package, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import Logo from "./Logo";
import MainNav from "./MainNav";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import TopBar, { MobilePromoStrip } from "./TopBar";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count: cartCount } = useCart();

  return (
    <header className="sticky top-0 z-40 bg-headerbar desk:static">
      <TopBar />

      {/* Green block on mobile, plain header bar on desktop */}
      <div className="bg-brand desk:bg-transparent">
        <div className="container flex items-center gap-3 py-3 desk:gap-4 desk:py-5">
          <button
            className="flex items-center gap-2 text-white desk:hidden"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={24} />
            <span className="text-base font-semibold">Menu</span>
          </button>

          <Logo className="mx-auto desk:mx-0" />

          <SearchBar className="hidden desk:flex desk:ml-8 h-[48px] flex-1 max-w-[560px]" />

          <div className="flex items-center gap-6 desk:ml-auto">
            <Link href="/login" className="hidden desk:flex items-center gap-2 text-ink hover:text-brand">
              <User size={22} strokeWidth={1.5} />
              <span className="leading-tight text-[13px]">
                Sign In
                <span className="flex items-center gap-1 text-[16px] font-medium">
                  Account <ChevronDown size={16} />
                </span>
              </span>
            </Link>

            <Link href="/account/orders" className="hidden desk:flex items-center gap-2 text-ink hover:text-brand">
              <Package size={22} strokeWidth={1.5} />
              <span className="leading-tight text-[13px]">
                Returns &amp;
                <span className="block text-[16px] font-medium">Orders</span>
              </span>
            </Link>

            <Link
              href="/cart"
              aria-label="Cart"
              className="flex h-10 overflow-hidden rounded-sm bg-brand-dark text-white desk:h-[48px] desk:bg-brand"
            >
              <span className="flex w-[40px] items-center justify-center hover:bg-black/10 desk:w-[44px] desk:hover:bg-brand-dark">
                <ShoppingCart size={20} />
              </span>
              <span className="flex w-[32px] items-center justify-center bg-white text-base font-bold text-ink desk:w-[36px] desk:border desk:border-l-0 desk:border-brand">
                {cartCount}
              </span>
            </Link>
          </div>
        </div>

        <div className="container pb-3 desk:hidden">
          <SearchBar className="h-11 border-0" />
        </div>
      </div>

      <MobilePromoStrip />

      <div className="desk:pb-3">
        <MainNav />
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
