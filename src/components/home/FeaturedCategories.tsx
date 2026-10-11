import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { featuredCategories } from "@/data/home";

export default function FeaturedCategories() {
  return (
    <section aria-label="Featured categories" className="container pb-12">
      <SectionTitle>Featured Categories</SectionTitle>
      <ul className="grid grid-cols-3 gap-x-2 gap-y-6 sm:grid-cols-4 desk:grid-cols-6">
        {featuredCategories.map((c) => (
          <li key={c.href}>
            <Link href={c.href} className="group flex flex-col items-center gap-3 text-center">
              <span className="relative block size-24 overflow-hidden rounded-full bg-neutral-100 sm:size-28 desk:size-[96px] 2xl:size-[110px]">
                <Image
                  src={c.image}
                  alt=""
                  fill
                  sizes="120px"
                  className="object-cover transition-opacity group-hover:opacity-75"
                />
              </span>
              <span className="text-[11px] text-ink group-hover:text-brand sm:text-xs">{c.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
