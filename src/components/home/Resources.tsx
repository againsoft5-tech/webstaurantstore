import Image from "next/image";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import { resources } from "@/data/home";

export default function Resources() {
  return (
    <section aria-label="Foodservice resources" className="container pb-14">
      <SectionTitle more={{ label: "View More", href: "/resources" }}>
        Foodservice Resources
      </SectionTitle>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 desk:grid-cols-3">
        {resources.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group overflow-hidden rounded border border-neutral-300 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[2.6/1] overflow-hidden">
              <Image
                src={r.image}
                alt=""
                fill
                sizes="(min-width:1025px) 33vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-semibold leading-snug text-ink">{r.title}</h3>
              <p className="mt-4 text-sm font-medium text-brand group-hover:underline">Read More</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
