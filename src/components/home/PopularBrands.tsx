import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { popularBrands } from "@/data/home";

export default function PopularBrands() {
  return (
    <section aria-label="Popular brands" className="container pb-14">
      <SectionTitle>Shop Popular Brands</SectionTitle>
      <ul className="grid grid-cols-3 gap-2 sm:grid-cols-5 desk:grid-cols-9">
        {popularBrands.map((b) => (
          <li key={b.href}>
            <Link
              href={b.href}
              className="relative flex h-[82px] items-center justify-center bg-neutral-100 p-3 transition-opacity hover:opacity-80"
            >
              <Image
                src={b.image}
                alt={b.name}
                fill
                sizes="12vw"
                className="object-contain p-3 mix-blend-multiply"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
