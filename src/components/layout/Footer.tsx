import Link from "next/link";
import { MessageSquare, Truck } from "lucide-react";
import { footerColumns, legalLinks } from "@/data/home";
import { SITE_NAME } from "@/data/navigation";
import SignupBar from "./SignupBar";

const socials = ["IG", "YT", "f", "TT", "P"];

export default function Footer() {
  return (
    <footer>
      <SignupBar />

      <div className="bg-[#1d4d0c] text-white">
        <div className="container grid grid-cols-2 gap-8 pb-8 pt-10 desk:grid-cols-[1.6fr_1fr_1fr_1fr_1.2fr]">
          <div className="col-span-2 desk:col-span-1">
            <p className="flex items-baseline text-3xl leading-none">
              <span className="font-extrabold">{SITE_NAME.primary}</span>
              <span className="font-light">{SITE_NAME.secondary}</span>
            </p>
            <p className="mt-5 max-w-xs text-xs leading-relaxed">
              The largest online restaurant supply store in the region. We offer the best selection, best
              prices, and fast shipping to keep your business functioning at its best.
            </p>
            <ul className="mt-5 flex gap-3">
              {socials.map((s) => (
                <li key={s}>
                  <a
                    href="#"
                    aria-label={s}
                    className="flex size-7 items-center justify-center rounded-full bg-[#2f6a18] text-[10px] font-bold hover:bg-[#3b7d20]"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-bold">{col.title}</h3>
              <ul className="space-y-2.5 text-xs">
                {col.links.map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:underline">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 desk:col-span-1">
            <h3 className="mb-4 text-sm font-bold">Get Quick Help</h3>
            <div className="space-y-3 text-sm">
              <Link
                href="/help"
                className="block rounded bg-white py-2 text-center font-semibold text-[#1d4d0c] hover:bg-neutral-100"
              >
                Help Center
              </Link>
              <Link
                href="/order-track"
                className="block rounded border border-white py-2 text-center font-semibold hover:bg-white/10"
              >
                Track my Order
              </Link>
              <ul className="space-y-3 pt-1 text-xs">
                <li>
                  <Link href="/chat" className="inline-flex items-center gap-2 hover:underline">
                    <MessageSquare size={14} /> Chat Online
                  </Link>
                </li>
                <li>
                  <Link href="/shipping" className="inline-flex items-center gap-2 hover:underline">
                    <Truck size={14} /> Shipping &amp; Delivery
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container flex flex-col gap-3 pb-8 pt-4 text-[11px] desk:flex-row desk:items-center desk:justify-between">
          <p>
            © {new Date().getFullYear()} {SITE_NAME.primary} {SITE_NAME.secondary} - All Rights Reserved.
          </p>
          <ul className="flex flex-wrap gap-x-3 gap-y-1">
            {legalLinks.map(([label, href], i) => (
              <li key={href} className="flex gap-3">
                {i > 0 && <span className="text-white/40">|</span>}
                <Link href={href} className="hover:underline">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
