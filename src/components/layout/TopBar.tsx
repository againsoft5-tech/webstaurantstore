import Link from "next/link";
import { ChevronRight, CircleHelp, CreditCard, Smartphone } from "lucide-react";
import { promoLinks, utilityLinks } from "@/data/navigation";

export default function TopBar() {
  return (
    <div className="hidden desk:block bg-topbar border-t-2 border-[#8b1c3a] text-[13px] 2xl:text-sm text-ink">
      <div className="container flex h-10 items-center justify-between">
        <div className="flex items-center gap-5 2xl:gap-8">
          <Link href={utilityLinks[0].href} className="flex items-center gap-2 hover:text-brand">
            <CircleHelp size={17} className="text-brand" />
            {utilityLinks[0].name}
            <ChevronRight size={14} />
          </Link>
          <Link href={utilityLinks[1].href} className="flex items-center gap-2 hover:text-brand">
            <Smartphone size={17} className="text-brand" />
            {utilityLinks[1].name}
            <ChevronRight size={14} />
          </Link>
        </div>

        <div className="flex items-center gap-6 2xl:gap-10">
          <Link href={promoLinks[0].href} className="flex items-center gap-3 hover:text-brand">
            <span className="-skew-x-6 rounded-sm bg-accent px-2 py-0.5 text-sm font-bold italic text-white">
              plus
            </span>
            {promoLinks[0].name}
            <ChevronRight size={14} />
          </Link>
          <Link href={promoLinks[1].href} className="flex items-center gap-3 hover:text-brand">
            <CreditCard size={19} />
            {promoLinks[1].name}
            <ChevronRight size={14} />
          </Link>
        </div>
      </div>
    </div>
  );
}

/** White strip under the green mobile header. */
export function MobilePromoStrip() {
  return (
    <div className="desk:hidden border-b border-neutral-200 bg-white text-xs text-ink">
      <div className="container flex h-10 items-center justify-between gap-3">
        <Link href={promoLinks[0].href} className="flex items-center gap-2 whitespace-nowrap">
          <span className="-skew-x-6 rounded-sm bg-accent px-1.5 py-0.5 text-[11px] font-bold italic text-white">
            plus
          </span>
          FREE Trial Available!
          <ChevronRight size={12} />
        </Link>
        <Link href={promoLinks[1].href} className="flex items-center gap-2 whitespace-nowrap">
          <CreditCard size={18} />
          Earn 3% Back*
          <ChevronRight size={12} />
        </Link>
      </div>
    </div>
  );
}
