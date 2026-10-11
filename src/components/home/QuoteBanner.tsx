import Image from "next/image";
import Link from "next/link";

export default function QuoteBanner() {
  return (
    <section aria-label="Request a quote" className="container pb-14">
      <div className="relative flex h-[72px] items-center overflow-hidden rounded border border-neutral-300 bg-[#f5f5f3] pr-5 sm:h-[72px]">
        <div className="relative hidden h-full w-[170px] shrink-0 sm:block">
          <Image
            src="/tiles/request-a-quote-desktop.png"
            alt=""
            fill
            sizes="170px"
            className="object-cover object-left-top"
          />
        </div>
        <div className="min-w-0 flex-1 px-4 sm:px-6">
          <p className="text-xs text-ink/80 sm:text-sm">Have a large list of items?</p>
          <p className="text-base font-bold text-ink sm:text-xl">Get a personalized quote just for you.</p>
        </div>
        <Link
          href="/request-a-quote"
          className="shrink-0 rounded bg-brand px-4 py-2 text-xs font-semibold text-white hover:bg-brand-dark sm:text-sm"
        >
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
