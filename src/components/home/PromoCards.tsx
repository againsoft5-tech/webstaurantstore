import Image from "next/image";
import Link from "next/link";
import { promos } from "@/data/promos";

export default function PromoCards() {
  return (
    <section
      aria-label="Featured promotions"
      className="pt-4 pb-8 desk:pb-10"
      style={{
        background:
          "linear-gradient(to bottom, var(--color-headerbar) 204px, #fff 204px)",
      }}
    >
      <div className="container grid grid-cols-2 gap-3 sm:gap-6 desk:grid-cols-4">
        {promos.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group flex flex-col overflow-hidden rounded-md border border-neutral-300 bg-[#f7f7f5] transition-shadow hover:shadow-lg"
          >
            <div className="relative aspect-[570/370] overflow-hidden">
              <Image
                src={p.image}
                alt={p.alt}
                fill
                sizes="(min-width:1025px) 25vw, (min-width:640px) 50vw, 100vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {p.badge && (
                <span className="absolute right-4 top-4 rounded-lg bg-black/75 px-3 py-2 text-xl font-extrabold leading-tight text-white">
                  {p.badge}
                </span>
              )}

              {p.code && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-t-md bg-white px-2.5 py-1.5 text-[11px] font-medium text-ink sm:px-4 sm:py-2 sm:text-sm">
                  Use Code: <span className="font-semibold text-brand">{p.code}</span>
                </span>
              )}

              {p.plus && (
                <span className="absolute bottom-1.5 right-2 -skew-x-6 scale-90 sm:scale-100 rounded-sm bg-accent px-2 py-0.5 text-xs font-bold italic text-white">
                  plus
                </span>
              )}
            </div>

            <div className="px-2 py-4 text-center sm:px-4 sm:py-5">
              <h3 className="text-sm font-bold leading-snug text-ink sm:text-base">{p.title}</h3>
              <p className="mt-1.5 text-xs text-ink/80 sm:mt-1.5 sm:text-sm">{p.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
