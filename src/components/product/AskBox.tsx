"use client";

import { useState } from "react";
import { Loader2, MessageSquareText } from "lucide-react";

type State =
  | { kind: "idle" }
  | { kind: "loading" }
  | { kind: "answer"; question: string; text: string }
  | { kind: "error"; message: string };

/**
 * "Ask about this product" box. Posts to /api/ask, which answers from this product's
 * data with the Claude API. Without an API key the route replies "not_configured" and
 * the box says so instead of failing.
 */
export default function AskBox({ slug, suggestions = [] }: { slug: string; suggestions?: string[] }) {
  const [q, setQ] = useState("");
  const [state, setState] = useState<State>({ kind: "idle" });

  const ask = async (question: string) => {
    const text = question.trim();
    if (text.length < 3) return;
    setQ(text);
    setState({ kind: "loading" });
    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, question: text }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.answer) {
        setState({ kind: "answer", question: text, text: data.answer });
      } else if (data.error === "not_configured") {
        setState({ kind: "error", message: "AI answers are not switched on yet. Please check back soon, or contact support." });
      } else if (res.status === 429) {
        setState({ kind: "error", message: "You are asking too fast. Please wait a minute and try again." });
      } else {
        setState({ kind: "error", message: data.message ?? "Sorry, we could not answer that right now." });
      }
    } catch {
      setState({ kind: "error", message: "Network problem. Please try again." });
    }
  };

  return (
    <div>
      <div className="rounded-lg bg-[#dfeedc] p-2">
        <p className="px-3 py-2 text-sm text-ink">
          <strong>Looking For Specific Info?</strong> Get quick answers to product questions with our AI-powered search.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            ask(q);
          }}
          className="flex items-center gap-2 rounded border border-neutral-300 bg-white p-1.5 pl-3"
        >
          <MessageSquareText size={26} className="shrink-0 text-brand" strokeWidth={1.5} />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            maxLength={300}
            placeholder="Ask about this product"
            aria-label="Ask about this product"
            className="h-10 min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-ink/70 sm:text-base"
          />
          <button
            type="submit"
            disabled={state.kind === "loading" || q.trim().length < 3}
            className="h-10 rounded bg-brand px-4 text-sm font-bold text-white hover:bg-brand-dark disabled:opacity-50 sm:px-6"
          >
            Ask
          </button>
        </form>
      </div>

      <p className="mt-2 text-center text-xs text-ink/70">
        By using this AI-powered search, you agree to our{" "}
        <a href="/terms-of-use" className="text-brand underline">
          Terms of Use
        </a>{" "}
        and{" "}
        <a href="/privacy-policy" className="text-brand underline">
          Privacy Policy
        </a>
        .
      </p>

      {suggestions.length > 0 && state.kind === "idle" && (
        <ul className="mt-3 flex flex-wrap justify-center gap-2">
          {suggestions.map((s) => (
            <li key={s}>
              <button
                onClick={() => ask(s)}
                className="rounded-full border border-neutral-300 bg-white px-3 py-1 text-xs text-ink/80 hover:border-brand hover:text-brand"
              >
                {s}
              </button>
            </li>
          ))}
        </ul>
      )}

      <div aria-live="polite" className="mt-4">
        {state.kind === "loading" && (
          <p className="flex items-center gap-2 text-sm text-ink/70">
            <Loader2 size={16} className="animate-spin" /> Looking through this product&apos;s details…
          </p>
        )}
        {state.kind === "answer" && (
          <div className="rounded border border-neutral-200 bg-white p-4 text-sm">
            <p className="font-semibold text-ink">{state.question}</p>
            <p className="mt-2 whitespace-pre-line leading-relaxed text-ink/90">{state.text}</p>
            <p className="mt-3 text-xs text-ink/50">
              AI-generated from this product&apos;s listing. Check the specs before ordering.
            </p>
          </div>
        )}
        {state.kind === "error" && <p className="text-sm text-[#b3261e]">{state.message}</p>}
      </div>
    </div>
  );
}
