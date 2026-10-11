import Image from "next/image";
import Link from "next/link";
import { Check, HelpCircle, Truck, Wrench } from "lucide-react";
import type { CatalogProduct } from "@/data/catalog";

const Card = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`rounded border border-neutral-200 bg-white max-desk:rounded-none max-desk:border-x-0 ${className}`}>
    {children}
  </section>
);

/* ---------- Style / Finish picker ---------- */
export function VariantCard({ p }: { p: CatalogProduct }) {
  const v = p.detail?.variants;
  if (!v) return null;
  const href = (style: string, finish: string) => v.matrix[`${style}|${finish}`];

  return (
    <Card className="p-4">
      <p className="mb-2 text-sm text-ink">
        Style: <span className="text-ink/80">{v.current.style}</span>
      </p>
      <div className="flex gap-2">
        {v.styles.map((s) => {
          const slug = href(s, v.current.finish);
          const isCurrent = s === v.current.style;
          const cls = `flex w-[92px] flex-col items-center gap-1 rounded border p-1.5 text-xs text-ink ${
            isCurrent ? "border-2 border-brand" : "border-neutral-300 hover:border-brand"
          } ${!slug ? "opacity-40" : ""}`;
          const body = (
            <>
              <span className="relative block size-16">
                {v.styleImages?.[s] && <Image src={v.styleImages[s]} alt="" fill sizes="64px" className="object-contain" />}
              </span>
              {s}
            </>
          );
          return slug && !isCurrent ? (
            <Link key={s} href={`/product/${slug}`} className={cls}>
              {body}
            </Link>
          ) : (
            <span key={s} className={cls} aria-current={isCurrent}>
              {body}
            </span>
          );
        })}
      </div>

      <p className="mb-2 mt-5 text-sm text-ink">
        Finish: <span className="text-ink/80">{v.current.finish}</span>
      </p>
      <div className="grid grid-cols-3 gap-2">
        {v.finishes.map((f) => {
          const slug = href(v.current.style, f);
          const isCurrent = f === v.current.finish;
          const cls = `rounded border px-2 py-2 text-center text-xs text-ink ${
            isCurrent ? "border-2 border-brand font-semibold" : "border-neutral-300 hover:border-brand"
          } ${!slug ? "opacity-40" : ""}`;
          return slug && !isCurrent ? (
            <Link key={f} href={`/product/${slug}`} className={cls}>
              {f}
            </Link>
          ) : (
            <span key={f} className={cls} aria-current={isCurrent}>
              {f}
            </span>
          );
        })}
      </div>
    </Card>
  );
}

/* ---------- Quick shipping + product overview ---------- */
export function OverviewCard({ p }: { p: CatalogProduct }) {
  const d = p.detail;
  if (!d) return null;
  return (
    <Card className="p-4">
      {d.shipsIn && (
        <div className="flex items-center gap-3">
          <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-[#dff1f5] text-brand">
            <Truck size={22} />
          </span>
          <div>
            <p className="text-base font-semibold text-ink">Quick Shipping</p>
            <p className="flex items-center gap-1.5 text-sm text-ink/80">
              Usually ships in <strong className="text-ink">{d.shipsIn.replace(/^1 /, "1 ")}</strong>
              <HelpCircle size={14} className="text-brand" />
            </p>
          </div>
        </div>
      )}

      {d.overview.length > 0 && (
        <>
          <h2 className="mt-5 text-sm font-semibold text-ink">Product Overview</h2>
          <ul className="mt-2 space-y-2.5 text-sm text-ink/90">
            {d.overview.map((o) => (
              <li key={o} className="flex gap-3">
                <Check size={16} className="mt-0.5 shrink-0 text-brand" />
                {o}
              </li>
            ))}
          </ul>
        </>
      )}

      {d.upc && (
        <p className="mt-4 flex justify-between border-t border-neutral-200 pt-3 text-sm">
          <span className="text-ink">UPC Code:</span>
          <span className="text-ink/80">{d.upc}</span>
        </p>
      )}
    </Card>
  );
}

/* ---------- Brand ---------- */
export function BrandCard({ p, hubHref }: { p: CatalogProduct; hubHref: string }) {
  const b = p.detail?.brandInfo;
  if (!b) return null;
  const [first, ...rest] = b.linkLabel.replace("View all ", "").split(/ (?=Carving)/);
  return (
    <Card className="px-4 py-8 text-center max-desk:flex max-desk:items-center max-desk:gap-5 max-desk:py-5 max-desk:text-left">
      <div className="relative mx-auto h-24 w-64 max-w-full max-desk:mx-0 max-desk:h-[84px] max-desk:w-[150px] max-desk:shrink-0 max-desk:rounded max-desk:border max-desk:border-neutral-200">
        <Image src={b.logo} alt={b.name} fill sizes="260px" className="object-contain" />
      </div>
      <Link href={hubHref} className="mt-6 block text-sm leading-snug text-brand hover:underline max-desk:mt-0 max-desk:text-lg max-desk:font-medium">
        View all {first}
        {rest.length > 0 && (
          <>
            <br className="max-desk:hidden" /> 
            {rest.join(" ")}
          </>
        )}
      </Link>
    </Card>
  );
}

/* ---------- Parts banner ---------- */
export function PartsCard({ href }: { href: string }) {
  return (
    <div className="max-desk:bg-white max-desk:p-4">
    <section className="rounded bg-[#3c4438] p-5 text-white">
      <div className="flex items-center gap-4">
        <span className="flex size-20 shrink-0 items-center justify-center rounded-full bg-white/15">
          <Wrench size={38} strokeWidth={1.4} />
        </span>
        <div>
          <h2 className="text-2xl font-bold leading-tight">
            Need Parts &amp; <br />
            Accessories?
          </h2>
          <p className="mt-2 text-sm">
            Shop replacement parts and accessories for this item today!
          </p>
        </div>
      </div>
      <Link
        href={href}
        className="mt-4 block rounded bg-brand py-2.5 text-center text-sm font-semibold text-white hover:bg-brand-dark"
      >
        Find Parts for this Item
      </Link>
    </section>
    </div>
  );
}

/* ---------- Resources and downloads ---------- */
export function ResourcesCard({ p }: { p: CatalogProduct }) {
  const r = p.detail?.resources;
  if (!r || r.length === 0) return null;
  return (
    <Card className="p-5">
      <h2 className="mb-4 text-lg font-semibold text-ink">Resources and Downloads</h2>
      <ul className="grid grid-cols-3 gap-3 text-center text-sm">
        {r.map((x) => {
          const inner = (
            <>
              <span className="relative mb-2 block aspect-[3/4] overflow-hidden border border-neutral-200 bg-white">
                <Image src={x.image} alt="" fill sizes="110px" className="object-cover object-top" />
              </span>
              <span className="text-brand group-hover:underline">{x.label}</span>
            </>
          );
          return (
            <li key={x.label}>
              {x.href ? (
                <a href={x.href} target="_blank" rel="noopener noreferrer" className="group block">
                  {inner}
                </a>
              ) : (
                <span className="block opacity-60">{inner}</span>
              )}
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-ink/80">A PDF viewer is required to view this product&apos;s information.</p>
      <a href="https://get.adobe.com/reader/" target="_blank" rel="noopener noreferrer" className="text-sm text-brand underline">
        Download Adobe Acrobat software
      </a>
    </Card>
  );
}

/* ---------- Specs ---------- */
export function SpecsCard({ p }: { p: CatalogProduct }) {
  const d = p.detail;
  if (!d || d.specs.length === 0) return null;
  return (
    <Card id="specs">
      <h2 className="px-4 pb-2 pt-4 text-lg font-semibold text-ink">Specs</h2>
      <dl className="border-t border-neutral-200 text-sm">
        {d.specs.map(([k, v]) => (
          <div key={k} className="flex border-b border-neutral-200 last:border-b-0">
            <dt className="w-[44%] bg-neutral-50 px-4 py-2.5 font-medium text-ink">{k}</dt>
            <dd className="w-[56%] whitespace-pre-line border-l border-neutral-200 px-4 py-2.5 text-ink/85">{v}</dd>
          </div>
        ))}
      </dl>
    </Card>
  );
}

/* ---------- Included in this kit ---------- */
export function KitCard({ p }: { p: CatalogProduct }) {
  const d = p.detail;
  if (!d || d.kit.length === 0) return null;
  return (
    <Card>
      <h2 className="px-4 py-3 text-base font-semibold text-ink">Included In this Kit</h2>
      <ul className="border-t border-neutral-200 text-sm">
        {d.kit.map((k) => (
          <li key={k.sku} className="flex border-b border-neutral-200 last:border-b-0">
            <span className="flex w-14 shrink-0 items-center justify-center bg-neutral-50 font-medium text-ink">{k.qty}</span>
            <span className="border-l border-neutral-200 px-3 py-3">
              <span className="block text-ink">{k.name}</span>
              <span className="text-xs text-ink/60">#{k.sku}</span>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
