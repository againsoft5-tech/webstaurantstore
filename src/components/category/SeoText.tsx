"use client";

import { useState } from "react";

export default function SeoText({ heading, paragraphs }: { heading: string; paragraphs: string[] }) {
  const [open, setOpen] = useState(false);
  if (!heading && paragraphs.length === 0) return null;

  const [first, ...rest] = paragraphs;

  return (
    <section className="container pb-12">
      <div className="max-w-4xl text-sm leading-relaxed text-ink/85">
        {heading && <h3 className="mb-3 text-xl font-semibold text-ink">{heading}</h3>}
        {first && <p>{first}</p>}
        {open && rest.map((p) => <p key={p.slice(0, 40)} className="mt-3">{p}</p>)}
        {rest.length > 0 && (
          <button
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            className="mt-3 font-semibold text-accent hover:underline"
          >
            {open ? "Read less" : "Read more"}
          </button>
        )}
      </div>
    </section>
  );
}
