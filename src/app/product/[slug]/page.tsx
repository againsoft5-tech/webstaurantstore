import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs, { type Crumb } from "@/components/category/Breadcrumbs";
import PricePanel from "@/components/product/BuyBox";
import GalleryCard from "@/components/product/Gallery";
import { CompactCarousel, type RelatedItem } from "@/components/product/ProductCards";
import ReviewList from "@/components/product/ReviewList";
import { LineSection, MainCard, RelatedSection } from "@/components/product/Sections";
import {
  BrandCard,
  KitCard,
  OverviewCard,
  PartsCard,
  ResourcesCard,
  SpecsCard,
  VariantCard,
} from "@/components/product/SideCards";
import StickyBar from "@/components/product/StickyBar";
import Stars from "@/components/ui/Stars";
import { allProducts, getProduct, type CatalogProduct } from "@/data/catalog";
import { getHub } from "@/data/categoryHubs";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return allProducts.map((p) => ({ slug: p.slug }));
}

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function describe(p: CatalogProduct) {
  const first = p.detail?.description[0] ?? p.detail?.overview[0];
  return (first ? `${p.title}. ${first}` : `Buy ${p.title} for $${p.price.toFixed(2)} per ${p.unit} at ExtraMile Trading.`).slice(0, 158);
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  const url = `/product/${p.slug}`;
  return {
    title: `${p.title} | ExtraMile Trading`,
    description: describe(p),
    alternates: { canonical: url },
    openGraph: { title: p.title, description: describe(p), url, type: "website", images: [{ url: p.image }] },
  };
}

export default async function ProductPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) notFound();

  const d = p.detail;
  const line = (d?.line ?? []).map((s) => getProduct(s)).filter((x): x is CatalogProduct => !!x);

  // Breadcrumb trail: Home > department > ... > this product
  const trail: string[] = d?.breadcrumb ?? [];
  const crumbs: Crumb[] = [{ name: "Home", href: "/" }];
  let path = "/category";
  trail.forEach((name) => {
    path += `/${slugify(name)}`;
    crumbs.push({ name, href: path });
  });
  crumbs.push({ name: p.title });
  const lastHub = crumbs.length > 2 ? (crumbs[crumbs.length - 2].href as string) : "/";

  const gallery = d?.gallery ?? [{ src: p.image, zoom: p.image }];

  // "Related Items": sibling categories from the same department
  const hub = getHub(trail[0] ? slugify(trail[0]) : "");
  const related: RelatedItem[] = (hub?.tiles ?? []).map((t) => ({
    name: t.name,
    href: t.href,
    image: t.image,
    count: t.count,
  }));

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        ...(c.href && { item: c.href }),
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: p.title,
      sku: p.sku,
      image: gallery.map((g) => g.zoom),
      description: describe(p),
      ...(p.brand && { brand: { "@type": "Brand", name: p.brand } }),
      ...(d?.upc && { gtin: d.upc }),
      offers: {
        "@type": "Offer",
        url: `/product/${p.slug}`,
        price: p.price.toFixed(2),
        priceCurrency: "USD",
        itemCondition: "https://schema.org/NewCondition",
        availability: "https://schema.org/InStock",
      },
      ...(p.rating > 0 &&
        p.reviewCount && {
          aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: p.reviewCount },
        }),
      ...(d?.reviews.length && {
        review: d.reviews.map((r) => ({
          "@type": "Review",
          author: { "@type": "Person", name: r.author },
          reviewRating: { "@type": "Rating", ratingValue: r.rating },
          reviewBody: r.body,
          ...(r.date && { datePublished: r.date }),
        })),
      }),
    },
    ...(d?.videos ?? []).map((v) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: v.title,
      description: v.description,
      thumbnailUrl: v.poster,
      contentUrl: v.src,
      uploadDate: "2016-08-02",
    })),
  ];

  const works = d?.works ?? [];
  const mightLike = d?.mightLike ?? [];

  return (
    <div className="bg-headerbar pb-10">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <StickyBar product={p} />

      <div className="border-b border-neutral-300 max-desk:hidden">
        <Breadcrumbs items={crumbs} />
      </div>
      {/* Phones show just a back link to the parent category */}
      {crumbs.length > 2 && (
        <Link href={lastHub} className="container flex items-center gap-1 pt-3 text-sm text-brand desk:hidden">
          ‹ {crumbs[crumbs.length - 2].name}
        </Link>
      )}

      {/* Title */}
      <div className="container pb-3 pt-2 desk:pb-4 desk:pt-5">
        <h1 className="text-xl font-medium leading-snug text-ink sm:text-[32px] sm:font-normal sm:leading-tight">{p.title}</h1>
        <p className="mt-1.5 text-sm text-ink/80 desk:hidden">Item #: {p.sku}</p>
        <p className="mt-2 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px] sm:gap-x-3 sm:text-sm">
          {p.rating > 0 && <Stars value={p.rating} size={15} />}
          {p.reviewCount ? (
            <a href="#reviews" className="font-semibold text-brand hover:underline">
              Read {p.reviewCount} {p.reviewCount === 1 ? "review" : "reviews"}
            </a>
          ) : null}
          {d?.questionCount ? (
            <>
              <span aria-hidden className="h-4 w-px bg-neutral-400" />
              <a href="#questions" className="font-semibold text-brand hover:underline">
                {d.questionCount} answered questions
              </a>
            </>
          ) : null}
          <span className="text-ink/80 max-desk:hidden">Item #: {p.sku}</span>
        </p>
      </div>

      {/* Two columns on desktop. On phones the order is: gallery, buy box, rest of the page, side cards. */}
      <div className="container flex flex-col gap-2.5 max-desk:px-0 desk:gap-4 desk:grid desk:grid-cols-[minmax(0,1fr)_340px] desk:items-start desk:gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
        <div className="contents desk:flex desk:min-w-0 desk:flex-col desk:gap-5">
          <div className="order-1 space-y-2.5 desk:space-y-5">
            <GalleryCard title={p.title} images={gallery} videos={d?.videos} model={d?.model} hasWorksWith={works.length > 0}>
              {works.length > 0 && (
                <div className="max-desk:hidden">
                  <CompactCarousel items={works} />
                </div>
              )}
            </GalleryCard>

          </div>

          <div className="order-3 space-y-2.5 desk:space-y-5">
            {mightLike.length > 0 && (
              <section className="max-desk:hidden">
                <h2 className="mb-3 flex items-center gap-2 text-xl font-medium text-ink max-desk:px-4 sm:font-normal">Items You Might Like</h2>
                <div className="overflow-hidden rounded border border-neutral-200 max-desk:rounded-none max-desk:border-x-0">
                  <CompactCarousel items={mightLike} />
                </div>
              </section>
            )}
            <MainCard p={p} line={line} />
            <LineSection line={line} />
            <RelatedSection items={related} />
          </div>
        </div>

        <aside className="contents desk:flex desk:flex-col desk:gap-4">
          <div className="order-2 space-y-2.5 desk:space-y-3">
            <PricePanel product={p} />
            <VariantCard p={p} />
            <OverviewCard p={p} />
          </div>

          <div className="order-4 space-y-2.5 desk:space-y-4">
            <BrandCard p={p} hubHref={lastHub} />
            {/* Phones: Works With and Items You Might Like sit beside the brand card, as on the source store */}
            {(works.length > 0 || mightLike.length > 0) && (
              <div className="space-y-2.5 desk:hidden">
                {works.length > 0 && (
                  <section className="bg-white py-5">
                    <h2 className="mb-3 px-4 text-xl font-medium text-ink">Works With</h2>
                    <CompactCarousel items={works} />
                  </section>
                )}
                {mightLike.length > 0 && (
                  <section className="bg-white py-5">
                    <h2 className="mb-3 px-4 text-xl font-medium text-ink">Items You Might Like</h2>
                    <CompactCarousel items={mightLike} />
                  </section>
                )}
              </div>
            )}
            <PartsCard href="/category/restaurant-equipment/equipment-parts" />
            <ResourcesCard p={p} />
            <SpecsCard p={p} />
            <KitCard p={p} />
          </div>
        </aside>
      </div>

      {/* Reviews */}
      {d && d.reviews.length > 0 && (
        <section id="reviews" className="container scroll-mt-24 pt-6 max-desk:px-0 desk:pt-10">
          <h2 className="mb-3 text-xl font-normal text-ink max-desk:mb-2.5 max-desk:bg-white max-desk:px-4 max-desk:py-4 max-desk:font-medium">Customer Reviews</h2>
          <div className="grid gap-2.5 desk:gap-6 desk:grid-cols-[minmax(0,1fr)_340px] desk:items-start xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="order-2 min-w-0 desk:order-1">
              <ReviewList reviews={d.reviews} mentioned={d.mentioned} />
            </div>
            <div className="order-1 rounded border border-neutral-200 bg-white p-5 max-desk:rounded-none max-desk:border-x-0 desk:order-2">
              <h3 className="text-xl font-normal text-ink">Leave a review of this product!</h3>
              <p className="mt-3 text-base text-ink/80">Customers can receive promotional credit when they post reviews.</p>
              <Link
                href="/login"
                className="mt-4 block rounded bg-brand py-2.5 text-center text-sm font-bold text-white hover:bg-brand-dark"
              >
                Login or Register
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
