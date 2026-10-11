import type { MetadataRoute } from "next";
import { allProducts } from "@/data/catalog";
import { categoryHubs } from "@/data/categoryHubs";
import { offers } from "@/data/offers";

const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, changeFrequency: "daily", priority: 1 },
    ...categoryHubs.flatMap((h) => [
      { url: `${base}/category/${h.slug}`, changeFrequency: "weekly" as const, priority: 0.9 },
      ...h.tiles.map((t) => ({ url: `${base}${t.href}`, changeFrequency: "weekly" as const, priority: 0.7 })),
    ]),
    ...allProducts
      .filter((p) => p.detail || p.slug.length > 6)
      .map((p) => ({ url: `${base}/product/${p.slug}`, changeFrequency: "weekly" as const, priority: 0.6 })),
    ...offers.map((o) => ({
      url: `${base}/offers/${o.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
