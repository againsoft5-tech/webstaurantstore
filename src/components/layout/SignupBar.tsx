"use client";

import Link from "next/link";
import { useState } from "react";
import { Smartphone } from "lucide-react";
import PlusBadge from "@/components/ui/PlusBadge";

export default function SignupBar() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section aria-label="Newsletter and apps" className="border-t border-neutral-300 bg-[#f5f5f3]">
      <div className="container grid grid-cols-1 divide-neutral-300 desk:grid-cols-[1.25fr_1fr_1fr] desk:divide-x">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.trim()) setDone(true);
          }}
          className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:gap-5 desk:pr-8"
        >
          <p className="shrink-0 whitespace-nowrap text-lg font-medium leading-tight text-ink">
            Enter your email to get
            <br />
            latest deals &amp; more!
          </p>
          <div className="flex flex-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Email address"
              className="h-10 min-w-0 flex-1 border border-neutral-400 bg-white px-3 outline-none focus:border-brand"
            />
            <button
              type="submit"
              className="h-10 bg-accent px-5 text-sm font-bold text-white hover:bg-accent-dark"
            >
              {done ? "Thanks!" : "Sign Up"}
            </button>
          </div>
        </form>

        <div className="flex items-center gap-4 border-t border-neutral-300 py-5 desk:border-t-0 desk:px-8">
          <PlusBadge className="text-lg" />
          <div className="min-w-0 text-xs leading-relaxed text-ink">
            <p className="text-sm">Unlock Savings with FREE Shipping</p>
            <p className="text-ink/70">No commitment, cancel at anytime.</p>
            <Link href="/plus" className="text-accent underline">
              Start saving with Plus
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-neutral-300 py-5 desk:border-t-0 desk:pl-8">
          <Smartphone size={40} className="text-brand" strokeWidth={1.25} />
          <div className="min-w-0 text-xs leading-relaxed text-ink">
            <p className="text-sm">ExtraMile App</p>
            <p className="text-ink/70">It&apos;s faster &amp; easier in the app.</p>
            <Link href="/app" className="text-accent underline">
              Learn more about our App
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
