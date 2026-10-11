import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { HubTile } from "@/data/categoryHubs";

const MAX_CHILDREN = 6;

export default function CategoryTiles({ tiles }: { tiles: HubTile[] }) {
  return (
    <section aria-label="Shop by category" className="container py-8">
      <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 desk:grid-cols-3 2xl:grid-cols-4">
        {tiles.map((t) => (
          <li
            key={t.href}
            className="flex flex-col overflow-hidden rounded-md border border-neutral-300 bg-white transition-shadow hover:shadow-lg"
          >
            <Link href={t.href} className="group relative block aspect-[16/10] bg-neutral-100">
              {t.image && (
                <Image
                  src={t.image}
                  alt=""
                  fill
                  sizes="(min-width:1536px) 25vw, (min-width:1025px) 33vw, (min-width:640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              )}
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-3 pt-8 text-sm font-semibold text-white">
                Shop {t.name}
              </span>
            </Link>

            <div className="flex flex-1 flex-col p-4">
              <Link href={t.href} className="group">
                <h2 className="text-lg font-semibold text-brand group-hover:underline">{t.name}</h2>
                {t.count && (
                  <p className="mt-0.5 flex items-center gap-1 text-xs font-medium text-ink/70">
                    Shop {t.count} <ChevronRight size={12} />
                  </p>
                )}
              </Link>

              {t.description && <p className="mt-2 text-sm leading-snug text-ink/80">{t.description}</p>}

              {t.children.length > 0 && (
                <ul className="mt-3 flex flex-col gap-1 border-t border-neutral-200 pt-3 text-sm">
                  {t.children.slice(0, MAX_CHILDREN).map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className="text-brand hover:underline">
                        {c.name}
                      </Link>
                    </li>
                  ))}
                  {t.children.length > MAX_CHILDREN && (
                    <li>
                      <Link href={t.href} className="font-semibold text-ink hover:underline">
                        See all {t.children.length}+ ›
                      </Link>
                    </li>
                  )}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
