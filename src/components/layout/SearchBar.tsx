"use client";

import { useRouter } from "next/navigation";
import { ScanSearch, Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ className = "" }: { className?: string }) {
  const router = useRouter();
  const [q, setQ] = useState("");

  return (
    <form
      role="search"
      onSubmit={(e) => {
        e.preventDefault();
        const term = q.trim();
        if (term) router.push(`/search?q=${encodeURIComponent(term)}`);
      }}
      className={`flex overflow-hidden rounded-md border border-neutral-400 bg-white ${className}`}
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="What are you looking for?"
        aria-label="Search products"
        className="min-w-0 flex-1 bg-transparent px-4 text-base outline-none placeholder:text-neutral-500"
      />
      <button
        type="button"
        aria-label="Search by image"
        className="px-3 text-brand hover:text-brand-dark"
      >
        <ScanSearch size={24} strokeWidth={1.75} />
      </button>
      <button
        type="submit"
        aria-label="Search"
        className="flex w-[64px] items-center justify-center bg-accent text-white hover:bg-accent-dark"
      >
        <Search size={22} />
      </button>
    </form>
  );
}
