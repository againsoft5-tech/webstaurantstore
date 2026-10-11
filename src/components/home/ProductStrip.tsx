import Image from "next/image";
import Link from "next/link";
import LoopTrack from "@/components/ui/LoopTrack";
import PlusBadge from "@/components/ui/PlusBadge";
import Stars from "@/components/ui/Stars";
import type { Product } from "@/data/products";

export default function ProductStrip({ products }: { products: Product[] }) {
  return (
    <section aria-label="Recommended products" className="container pb-8">
      <LoopTrack
        className="overflow-hidden rounded-md border border-neutral-300 bg-white"
        perClass="[--per:2] sm:[--per:3] desk:[--per:6]"
        items={products.map((p) => (
          <Link
            key={p.id}
            href={p.href}
            className="group my-2.5 flex w-full flex-col items-center px-3 text-center"
          >
            <div className="relative h-[86px] w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                sizes="(min-width:1025px) 15vw, 40vw"
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex h-5 items-center gap-1">
              {p.plus && <PlusBadge className="text-[10px]" />}
              {p.rating > 0 && <Stars value={p.rating} size={12} />}
            </div>

            <h3 className="mt-2 line-clamp-3 text-xs font-medium leading-snug text-brand group-hover:underline">
              {p.name}
            </h3>

            <p className="mt-auto pt-2 text-[#c23b0a]">
              <span className="text-base font-bold">${p.price.toFixed(2)}</span>
              <span className="text-[10px] text-ink/70">/{p.unit}</span>
            </p>
          </Link>
        ))}
      />
    </section>
  );
}
