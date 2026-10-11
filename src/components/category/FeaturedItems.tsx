import Image from "next/image";
import Link from "next/link";
import LoopTrack from "@/components/ui/LoopTrack";
import SectionTitle from "@/components/ui/SectionTitle";
import type { HubFeatured } from "@/data/categoryHubs";

export default function FeaturedItems({ items }: { items: HubFeatured[] }) {
  if (items.length < 2) return null;
  return (
    <section aria-label="Featured items" className="container pb-10">
      <SectionTitle>Featured Items</SectionTitle>
      <LoopTrack
        className="overflow-hidden rounded-md border border-neutral-300 bg-neutral-50"
        perClass="[--per:2] sm:[--per:3] desk:[--per:5]"
        items={items.map((f) => (
          <Link key={f.href} href={f.href} className="group my-3 flex w-full flex-col items-center px-3 text-center">
            <span className="relative block aspect-[4/3] w-full overflow-hidden rounded bg-white">
              <Image
                src={f.image}
                alt=""
                fill
                sizes="(min-width:1025px) 15vw, 40vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute left-1.5 top-1.5 rounded-sm bg-white/90 px-1.5 text-[10px] font-semibold uppercase text-ink/70">
                Promoted
              </span>
            </span>
            <span className="mt-2 line-clamp-2 text-[13px] font-medium leading-snug text-brand group-hover:underline">
              {f.name}
            </span>
          </Link>
        ))}
      />
    </section>
  );
}
