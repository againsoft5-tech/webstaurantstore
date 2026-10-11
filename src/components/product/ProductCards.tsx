import Image from "next/image";
import Link from "next/link";
import AddToCart from "@/components/cart/AddToCart";
import LoopTrack from "@/components/ui/LoopTrack";
import PlusBadge from "@/components/ui/PlusBadge";
import Stars from "@/components/ui/Stars";

export type MiniItem = { title: string; slug: string; image: string; price: number; unit: string; sku?: string };

/** "Works With" / "Items You Might Like": image + title + price, with quantity and Add to Cart. */
export function CompactCarousel({ items }: { items: MiniItem[] }) {
  return (
    <LoopTrack
      className="overflow-hidden border-t border-neutral-200 bg-white"
      overlayArrows
      perClass="[--per:1.7] sm:[--per:2] desk:[--per:3] 2xl:[--per:4]"
      items={items.map((i) => (
        <div key={i.slug} className="relative flex w-full flex-col p-3 pt-7">
          <span className="absolute left-0 top-0 -skew-x-6 rounded-br-sm bg-accent px-2 py-0.5 text-[11px] font-bold italic text-white">
            plus
          </span>
          <Link href={`/product/${i.slug}`} className="group flex gap-3 pb-3">
            <span className="relative size-16 shrink-0">
              <Image src={i.image} alt="" fill sizes="64px" className="object-contain" />
            </span>
            <span className="min-w-0">
              <span className="line-clamp-4 text-[13px] font-medium leading-snug text-brand group-hover:underline">
                {i.title}
              </span>
              <span className="mt-1 block text-[#c23b0a]">
                <span className="text-lg font-bold">
                  ${i.price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
                </span>
                <span className="text-xs text-ink/70">/{i.unit}</span>
              </span>
            </span>
          </Link>
          <AddToCart
            className="mt-auto border-t border-neutral-200 pt-3"
            item={{ id: i.sku ?? i.slug, slug: i.slug, title: i.title, image: i.image, price: i.price, unit: i.unit }}
          />
        </div>
      ))}
    />
  );
}

export type RowProduct = {
  slug: string;
  title: string;
  image: string;
  price: number;
  unit: string;
  rating: number;
  plus: boolean;
};

/** "Other Products from this Line": centred cards with stars and price. */
export function ProductRow({ products }: { products: RowProduct[] }) {
  return (
    <LoopTrack
      className="overflow-hidden border border-neutral-200 bg-white max-desk:border-x-0 desk:rounded"
      overlayArrows
      perClass="[--per:2.4] sm:[--per:3] desk:[--per:4] 2xl:[--per:5]"
      items={products.map((p) => (
        <Link key={p.slug} href={`/product/${p.slug}`} className="group my-4 flex w-full flex-col items-center px-3 text-center">
          <span className="relative block h-[110px] w-full">
            <Image src={p.image} alt="" fill sizes="140px" className="object-contain" />
          </span>
          <span className="mt-3 flex h-5 items-center gap-1">
            {p.plus && <PlusBadge className="text-[10px]" />}
            {p.rating > 0 && <Stars value={p.rating} size={13} />}
          </span>
          <span className="mt-2 line-clamp-3 text-[13px] font-medium leading-snug text-brand group-hover:underline">
            {p.title}
          </span>
          <span className="mt-auto pt-2 text-[#c23b0a]">
            <span className="text-lg font-bold">${p.price.toFixed(2)}</span>
            <span className="text-xs text-ink/70">/{p.unit}</span>
          </span>
        </Link>
      ))}
    />
  );
}

export type RelatedItem = { name: string; href: string; image: string | null; count: string };

/** "Related Items": category tiles with a product count. */
export function RelatedRow({ items }: { items: RelatedItem[] }) {
  return (
    <LoopTrack
      className="overflow-hidden border border-neutral-200 bg-white max-desk:border-x-0 desk:rounded"
      overlayArrows
      perClass="[--per:2.4] sm:[--per:3] desk:[--per:4] 2xl:[--per:5]"
      items={items.map((r) => (
        <Link key={r.href} href={r.href} className="group my-4 flex w-full flex-col items-center px-3 text-center">
          <span className="relative block size-[110px]">
            {r.image && <Image src={r.image} alt="" fill sizes="110px" className="object-cover" />}
          </span>
          <span className="mt-3 line-clamp-2 text-[13px] font-medium leading-snug text-brand group-hover:underline">
            {r.name}
          </span>
          <span className="mt-auto pt-3 text-xs font-semibold text-ink">{r.count}</span>
        </Link>
      ))}
    />
  );
}
