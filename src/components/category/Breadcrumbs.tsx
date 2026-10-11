import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = { name: string; href?: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container py-3 text-xs text-ink/70">
      <ol className="flex flex-wrap items-center gap-1">
        {items.map((c, i) => (
          <li key={c.name} className="flex items-center gap-1">
            {c.href ? (
              <Link href={c.href} className="hover:underline">
                {c.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink">
                {c.name}
              </span>
            )}
            {i < items.length - 1 && <ChevronRight size={12} />}
          </li>
        ))}
      </ol>
    </nav>
  );
}
