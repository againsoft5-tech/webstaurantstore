import Image from "next/image";
import Link from "next/link";
import { AlertTriangle, ChevronRight } from "lucide-react";
import PlusBadge from "@/components/ui/PlusBadge";
import Stars from "@/components/ui/Stars";
import type { CatalogProduct } from "@/data/catalog";
import AskBox from "./AskBox";
import { ProductRow, RelatedRow, type RelatedItem, type RowProduct } from "./ProductCards";
import VideoSection from "./VideoSection";

const FreeShipTag = () => (
  <span className="inline-flex -skew-x-6 items-center rounded-sm bg-[#0a5c8f] px-2 py-0.5 text-[10px] font-semibold text-white">
    Free Shipping
  </span>
);

/* ---------- Big white card: description, Q&A, video, compare ---------- */
export function MainCard({ p, line }: { p: CatalogProduct; line: CatalogProduct[] }) {
  const d = p.detail;
  if (!d) return null;
  const imgs = d.gallery;
  const leadImg = imgs[1] ?? imgs[0];
  const [lead, ...rest] = d.description;
  const featureImages = [imgs[0], null, imgs[2] ?? imgs[0]];

  return (
    <div className="overflow-hidden rounded border border-neutral-200 bg-white max-desk:rounded-none max-desk:border-x-0">
      {/* Lead headline + intro */}
      {(lead || rest.length > 0) && (
        <section id="description" className="px-5 pb-8 pt-10 sm:px-8">
          {lead && (
            <h2 className="mx-auto max-w-3xl text-left text-[23px] font-normal leading-[1.2] text-ink sm:text-center sm:text-[32px] sm:leading-snug">{lead}</h2>
          )}
          <div className="mt-4 grid items-center gap-4 sm:mt-8 sm:grid-cols-[1fr_1.1fr] sm:gap-8">
            {leadImg && (
              <span className="relative mx-auto block aspect-square w-full max-w-[380px] max-sm:order-2">
                <Image src={leadImg.zoom} alt="" fill sizes="380px" className="object-contain" />
              </span>
            )}
            <div className="max-sm:order-1">
              {rest.map((t) => (
                <p key={t.slice(0, 40)} className="text-base leading-7 text-ink/90 sm:text-lg sm:leading-8">
                  {t}
                </p>
              ))}
            </div>
          </div>

          {d.certs.length > 0 && (
            <ul className="mx-auto mt-8 grid max-w-3xl divide-neutral-200 overflow-hidden rounded border border-neutral-200 shadow-md sm:grid-cols-2 sm:divide-x">
              {d.certs.map((c) => (
                <li key={c.name} className="flex items-center gap-4 p-4">
                  <span className="relative size-14 shrink-0">
                    <Image src={c.image} alt={c.name} fill sizes="56px" className="object-contain" />
                  </span>
                  <span>
                    <h3 className="text-sm font-semibold text-ink">{c.name}</h3>
                    <p className="text-xs text-ink/70">{c.text}</p>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}

      {/* Featured review */}
      {d.featuredReview && (
        <section className="bg-gradient-to-b from-neutral-100 to-white px-5 py-8 text-left sm:px-8 sm:py-10 sm:text-center">
          <div className="flex sm:justify-center">
            <Stars value={5} size={20} />
          </div>
          <p className="mx-auto mt-3 max-w-3xl text-lg leading-relaxed text-ink/90 sm:text-2xl">
            &ldquo;{d.featuredReview}&rdquo;
          </p>
          <a
            href="#reviews"
            className="mt-5 inline-block rounded border border-neutral-400 px-4 py-1.5 text-xs font-semibold text-ink hover:bg-white"
          >
            Read More Reviews
          </a>
        </section>
      )}

      {/* Feature blocks */}
      {d.features.length > 0 && (
        <div>
          {d.features.slice(0, 3).map((f, i) => {
            const img = featureImages[i];
            return (
              <section key={f.title} className="border-t border-neutral-200 px-5 py-8 sm:px-8">
                <div className={`items-center gap-8 max-sm:flex max-sm:flex-col-reverse max-sm:gap-4 sm:grid ${img ? "sm:grid-cols-[1fr_330px]" : ""}`}>
                  <div className={img ? "" : "mx-auto max-w-3xl"}>
                    <h3 className="mb-2 text-xl font-semibold text-ink">{f.title}</h3>
                    <p className="text-base leading-8 text-ink/85">{f.text}</p>
                  </div>
                  {img && (
                    <span className="relative block aspect-square w-full overflow-hidden rounded-md">
                      <Image src={img.zoom} alt="" fill sizes="330px" className="object-cover" />
                    </span>
                  )}
                </div>
              </section>
            );
          })}
          {d.features.length > 3 && (
            <section className="grid gap-8 border-t border-neutral-200 px-5 py-8 sm:grid-cols-2 sm:px-12">
              {d.features.slice(3).map((f) => (
                <div key={f.title}>
                  <h3 className="mb-2 text-xl font-semibold text-ink">{f.title}</h3>
                  <p className="text-base leading-8 text-ink/85">{f.text}</p>
                </div>
              ))}
            </section>
          )}
        </div>
      )}

      {/* Questions & Answers */}
      <section id="questions" className="scroll-mt-24 border-t border-neutral-200 px-5 py-8 sm:px-8">
        <h2 className="mb-4 text-2xl font-medium text-ink sm:mb-5 sm:text-3xl sm:font-normal">Questions &amp; Answers</h2>
        <AskBox slug={p.slug} suggestions={d.faq.slice(0, 3).map((f) => f.q)} />

        {d.faq.length > 0 && (
          <div className="mt-8">
            <h3 className="mb-3 text-lg font-medium text-ink sm:text-xl">Frequently Asked Questions From Customers</h3>
            <div className="divide-y divide-neutral-200 overflow-hidden rounded border border-neutral-200">
              {d.faq.map((f, i) => (
                <details key={f.q} open={i === 0} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-base text-ink">
                    {f.q}
                    <ChevronRight size={18} className="shrink-0 rotate-90 transition-transform group-open:-rotate-90" />
                  </summary>
                  <p className="px-5 pb-5 text-sm leading-relaxed text-ink/85">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Videos */}
      {d.videos && d.videos.length > 0 && <VideoSection videos={d.videos} />}

      {/* Compare */}
      {d.compare && d.compare.length > 0 && <Compare p={p} />}

      {/* Dimensions + Prop 65 */}
      {d.dimensions && (
        <section className="border-t border-neutral-200 px-5 py-8 text-center sm:px-8">
          <DimTable title="Overall Dimensions:" rows={d.dimensions.overall} />
          {d.dimensions.board && <DimTable title="Cutting Board Dimensions:" rows={d.dimensions.board} />}
        </section>
      )}

      <section className="border-t border-neutral-200 px-5 py-6 text-left text-sm text-ink sm:text-center">
        <span className="inline-flex flex-wrap items-center gap-2 sm:justify-center">
          {d.prop65Icon ? (
            <Image src={d.prop65Icon} alt="" width={18} height={16} />
          ) : (
            <AlertTriangle size={16} />
          )}
          <strong>Attention CA Residents:</strong>
          <Link href="/prop-65" className="font-semibold text-brand hover:underline">
            Prop 65 Warning ›
          </Link>
        </span>
      </section>

      {/* kept to avoid an unused-prop lint when no sibling data exists */}
      {line.length === 0 && null}
    </div>
  );
}

function DimTable({ title, rows }: { title: string; rows: [string, string][] }) {
  return (
    <div className="mb-6 last:mb-0">
      <h3 className="mb-2 text-xl font-medium text-ink">{title}</h3>
      <dl className="mx-auto max-w-[390px] overflow-hidden rounded border border-neutral-200 text-left text-sm shadow-sm">
        {rows.map(([k, v], i) => (
          <div key={k} className={`flex justify-between px-4 py-2 ${i % 2 ? "bg-neutral-50" : ""}`}>
            <dt className="font-semibold text-ink">{k}:</dt>
            <dd className="text-ink/80">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/* ---------- Compare table ---------- */
function Compare({ p }: { p: CatalogProduct }) {
  const cols = p.detail?.compare ?? [];
  const labels = ["Voltage", "Wattage", "Base Material", "Control Type", "Number of Bulbs", "Style"];
  return (
    <section id="compare" className="border-t border-neutral-200">
      <h2 className="px-5 py-8 text-center text-3xl font-normal text-ink">Compare to Other Products</h2>
      <div className="overflow-x-auto border-t border-neutral-200">
        <table className="w-full min-w-[760px] table-fixed border-collapse text-center">
          <colgroup>
            <col className="w-[110px]" />
            {cols.map((c) => (
              <col key={c.sku} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <td />
              {cols.map((c, i) => (
                <th key={c.sku} className={`px-3 pb-4 pt-5 align-top font-normal ${i === 0 ? "bg-[#f1f8fd]" : ""}`}>
                  <span className="relative mx-auto block size-20">
                    <Image src={c.image} alt="" fill sizes="80px" className="object-contain" />
                  </span>
                  <span className="mt-3 block text-[10px] uppercase text-ink/60">Item #: {c.sku}</span>
                  {i === 0 ? (
                    <span className="mt-1 block text-[13px] font-medium leading-snug text-brand">{c.title}</span>
                  ) : (
                    <Link href={`/product/${c.slug}`} className="mt-1 line-clamp-4 block text-[13px] font-medium leading-snug text-brand hover:underline">
                      {c.title}
                    </Link>
                  )}
                  <span className="mt-2 flex justify-center gap-1">
                    {c.plus && <PlusBadge className="text-[10px]" />}
                    {c.freeShipping && <FreeShipTag />}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr className="bg-neutral-50">
              <th className="px-3 py-6 text-left text-[11px] font-bold uppercase text-ink">Price</th>
              {cols.map((c, i) => (
                <td key={c.sku} className={`py-6 ${i === 0 ? "bg-[#eaf3fa]" : ""}`}>
                  <span className="text-2xl font-bold text-[#c23b0a]">
                    ${c.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                  </span>
                  <span className="text-xs text-ink/70">/{c.unit}</span>
                </td>
              ))}
            </tr>
            {labels.map((l, ri) => (
              <tr key={l} className={ri % 2 === 0 ? "" : "bg-neutral-50"}>
                <th className="px-3 py-6 text-left text-[11px] font-bold uppercase text-ink">{l}</th>
                {cols.map((c, i) => (
                  <td key={c.sku} className={`py-6 text-lg text-ink/85 ${i === 0 ? (ri % 2 === 0 ? "bg-[#f8fbfe]" : "bg-[#eef6fb]") : ""}`}>
                    {c.attrs[l] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

/* ---------- Under the main card ---------- */
export function LineSection({ line }: { line: CatalogProduct[] }) {
  if (line.length === 0) return null;
  const rows: RowProduct[] = line.map((c) => ({
    slug: c.slug,
    title: c.title,
    image: c.image,
    price: c.price,
    unit: c.unit,
    rating: c.rating,
    plus: c.plus,
  }));
  return (
    <section id="line" className="max-desk:bg-white max-desk:pt-5">
      <h2 className="mb-3 text-xl font-medium text-ink max-desk:px-4 sm:font-normal">Other Products from this Line</h2>
      <ProductRow products={rows} />
    </section>
  );
}

export function RelatedSection({ items }: { items: RelatedItem[] }) {
  if (items.length === 0) return null;
  return (
    <section id="related" className="max-desk:bg-white max-desk:py-5">
      <h2 className="mb-3 text-xl font-medium text-ink max-desk:px-4 sm:font-normal">Related Items</h2>
      <RelatedRow items={items} />
    </section>
  );
}
