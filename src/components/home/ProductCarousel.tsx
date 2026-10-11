import Image from "next/image";
import Link from "next/link";
import LoopTrack from "@/components/ui/LoopTrack";
import PlusBadge from "@/components/ui/PlusBadge";
import Stars from "@/components/ui/Stars";
import type { Product } from "@/data/products";

type Props = {
  title: string;
  href: string;
  image: string;
  products: Product[];
};

export default function ProductCarousel({ title, href, image, products }: Props) {
  return (
    <section aria-label={title} className="container pb-10">
      <div className="flex flex-col overflow-hidden rounded-md border border-neutral-300 bg-white desk:flex-row">
        <Link
          href={href}
          className="relative block aspect-[4/3] shrink-0 desk:aspect-[510/397] desk:w-[25%]"
        >
          <Image
            src={image}
            alt={title}
            fill
            sizes="(min-width:1025px) 28vw, 100vw"
            className="object-cover"
          />
        </Link>

        <LoopTrack
          className="min-w-0 flex-1"
          perClass="[--per:2] sm:[--per:3] desk:[--per:5]"
          items={products.map((p) => (
            <Link
              key={p.id}
              href={p.href}
              className="group my-4 flex w-full flex-col items-center px-4 text-center"
            >
              <div className="relative h-[110px] w-full">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(min-width:1025px) 15vw, 40vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-4 flex items-center gap-1.5">
                {p.plus && <PlusBadge className="text-[11px]" />}
                <Stars value={p.rating} size={15} />
              </div>

              <h3 className="mt-2 line-clamp-3 text-[13px] font-medium leading-snug text-brand group-hover:underline">
                {p.name}
              </h3>

              <p className="mt-auto pt-3 text-[#c23b0a]">
                <span className="text-xl font-bold">${p.price.toFixed(2)}</span>
                <span className="text-xs text-ink/70">/{p.unit}</span>
              </p>
            </Link>
          ))}
        />
      </div>
    </section>
  );
}
