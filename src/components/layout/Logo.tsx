import Link from "next/link";
import { SITE_NAME } from "@/data/navigation";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={`${SITE_NAME.primary}${SITE_NAME.secondary} home`}
      className={`flex items-baseline leading-none select-none ${className}`}
    >
      <span className="text-[24px] sm:text-[28px] desk:text-[34px] font-extrabold tracking-tight text-white desk:text-brand">
        {SITE_NAME.primary}
      </span>
      <span className="text-[24px] sm:text-[28px] desk:text-[34px] font-light tracking-tight text-white/90 desk:text-neutral-500">
        {SITE_NAME.secondary}
      </span>
    </Link>
  );
}
