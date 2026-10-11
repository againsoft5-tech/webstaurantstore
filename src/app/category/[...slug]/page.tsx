import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs, { type Crumb } from "@/components/category/Breadcrumbs";
import CategoryTiles from "@/components/category/CategoryTiles";
import FeaturedItems from "@/components/category/FeaturedItems";
import HubHero from "@/components/category/HubHero";
import SeoText from "@/components/category/SeoText";
import ProductStrip from "@/components/home/ProductStrip";
import SectionTitle from "@/components/ui/SectionTitle";
import { categoryHubs, getHub } from "@/data/categoryHubs";

type Params = { slug: string[] };

export const dynamicParams = false;

/** /category/<department>  and  /category/<department>/<sub-category> */
export function generateStaticParams(): Params[] {
  return categoryHubs.flatMap((h) => [
    { slug: [h.slug] },
    ...h.tiles.map((t) => ({ slug: [h.slug, t.href.split("/").pop() as string] })),
  ]);
}

function resolve(slug: string[]) {
  const hub = getHub(slug[0]);
  if (!hub || slug.length > 2) return null;
  if (slug.length === 1) return { hub, tile: null };
  const tile = hub.tiles.find((t) => t.href === `/category/${slug.join("/")}`);
  return tile ? { hub, tile } : null;
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) return {};
  const { hub, tile } = found;
  const name = tile ? tile.name : hub.title;
  const desc = tile
    ? tile.description || `Shop ${tile.name} at ExtraMile Trading.`
    : [hub.headline, hub.seo.paragraphs[0]].filter(Boolean).join(". ").slice(0, 158);
  const url = `/category/${slug.join("/")}`;
  return {
    title: `${name} | ExtraMile Trading`,
    description: desc,
    alternates: { canonical: url },
    openGraph: { title: name, description: desc, url, type: "website", images: hub.hero ? [{ url: hub.hero }] : undefined },
  };
}

export default async function CategoryPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const found = resolve(slug);
  if (!found) notFound();
  const { hub, tile } = found;

  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];
  if (tile) {
    crumbs.push({ name: hub.name, href: `/category/${hub.slug}` }, { name: tile.name });
  } else {
    crumbs.push({ name: hub.name });
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      ...(c.href && { item: c.href }),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Breadcrumbs items={crumbs} />

      {tile ? (
        <>
          <HubHero title={tile.name} headline={tile.description} image={hub.hero} />

          <section aria-label={`${tile.name} categories`} className="container py-8">
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 desk:grid-cols-3">
              {tile.children.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="block rounded border border-neutral-300 bg-white px-4 py-3 text-sm font-medium text-brand hover:border-brand hover:underline"
                  >
                    {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section aria-label={`Other ${hub.name}`} className="container pb-12">
            <h2 className="mb-3 text-lg font-semibold text-ink">Other {hub.name}</h2>
            <ul className="flex flex-wrap gap-2">
              {hub.tiles
                .filter((t) => t.href !== tile.href)
                .map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className="block rounded-full border border-neutral-300 px-4 py-1.5 text-sm text-ink hover:border-brand hover:text-brand"
                    >
                      {t.name}
                    </Link>
                  </li>
                ))}
            </ul>
          </section>
        </>
      ) : (
        <>
          <HubHero title={hub.title} headline={hub.headline} image={hub.hero} />
          <CategoryTiles tiles={hub.tiles} />
          {/* Promoted items have no catalogue entry (no price data), so they point at this department. */}
          <FeaturedItems items={hub.featured.map((f) => ({ ...f, href: `/category/${hub.slug}` }))} />
          {hub.top.length > 0 && (
            <div className="pb-4">
              <div className="container">
                <SectionTitle>Top Products</SectionTitle>
              </div>
              <ProductStrip
                products={hub.top.map((p) => ({
                  id: p.id,
                  name: p.title,
                  image: p.image,
                  price: p.price,
                  unit: p.unit,
                  rating: p.rating,
                  plus: p.plus,
                  href: `/product/${p.slug}`,
                }))}
              />
            </div>
          )}
          <SeoText heading={hub.seo.heading} paragraphs={hub.seo.paragraphs} />
        </>
      )}
    </>
  );
}
