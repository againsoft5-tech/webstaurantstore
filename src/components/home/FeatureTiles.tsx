import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

type Tile = {
  href: string;
  bg: string;
  caption: string;
  cta: string;
  content: React.ReactNode;
};

const tiles: Tile[] = [
  {
    href: "/outlet",
    bg: "/tiles/scratch-and-dent_bg.png",
    caption: "Shop like-new items for less",
    cta: "Shop Outlet",
    content: (
      <Image
        src="/tiles/scratch-and-dent_logo.png"
        alt="Scratch & Dent"
        width={340}
        height={190}
        className="h-[62%] w-auto"
      />
    ),
  },
  {
    href: "/customize",
    bg: "/tiles/customizable_bg.png",
    caption: "Add your logo and make it personal",
    cta: "Customizable Supplies",
    content: (
      <div className="text-center text-white">
        <p className="text-lg">Add Your Logo</p>
        <p className="text-[28px] font-extrabold leading-[1.05]">
          Customizable
          <br />
          Supplies
        </p>
      </div>
    ),
  },
  {
    href: "/sales",
    bg: "/tiles/limited-time-deals-bg.jpg",
    caption: "Discover new sales daily",
    cta: "Shop Sales",
    content: (
      <div className="text-center text-ink">
        <p className="text-xl">Limited Time</p>
        <p className="text-5xl font-extrabold leading-none">Sales</p>
      </div>
    ),
  },
  {
    href: "/rewards",
    bg: "/tiles/rewards_bg.png",
    caption: "Earn 3% back* per $1 spent at ExtraMile Trading",
    cta: "Learn More",
    content: (
      <p className="text-[34px] font-extrabold italic tracking-tight text-white">
        <span className="text-accent">✓</span>Rewards
      </p>
    ),
  },
];

export default function FeatureTiles() {
  return (
    <section aria-label="Programs" className="container pb-12">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 desk:grid-cols-4">
        {tiles.map((t) => (
          <Link
            key={t.href}
            href={t.href}
            className="group overflow-hidden rounded bg-[#f5f5f3] transition-shadow hover:shadow-lg"
          >
            <div className="relative flex h-[97px] items-center justify-center sm:h-[120px] desk:h-[130px]">
              <Image src={t.bg} alt="" fill sizes="25vw" className="object-cover" />
              <div className="relative flex h-full items-center justify-center">{t.content}</div>
            </div>
            <div className="px-3 py-3 text-center">
              <p className="text-sm text-ink/80">{t.caption}</p>
              <p className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-brand group-hover:underline">
                {t.cta} <ChevronRight size={12} />
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
