"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export default function CouponCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard unavailable — the code is still visible to copy by hand */
    }
  };

  return (
    <div className="inline-flex items-stretch overflow-hidden rounded bg-white text-ink shadow-sm">
      <span className="px-4 py-2 text-sm sm:text-base">
        Use Code: <span className="font-bold text-brand">{code}</span>
      </span>
      <button
        onClick={copy}
        aria-label={`Copy code ${code}`}
        className="flex items-center gap-1.5 border-l border-neutral-200 px-3 text-xs font-semibold text-accent hover:bg-neutral-50"
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
