import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight } from "lucide-react";
import CouponCode from "@/components/offers/CouponCode";
import OfferListing from "@/components/offers/OfferListing";
import { getOffer, offers } from "@/data/offers";

type Params = { slug: string };

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return offers.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) return {};
  const url = `/offers/${offer.slug}`;
  return {
    title: `${offer.title} | ExtraMile Trading`,
    description: offer.description,
    alternates: { canonical: url },
    openGraph: {
      title: offer.title,
      description: offer.description,
      url,
      type: "website",
      images: offer.products[0] ? [{ url: offer.products[0].image }] : undefined,
    },
  };
}

export default async function OfferPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const offer = getOffer(slug);
  if (!offer) notFound();

  const [from, to] = offer.gradient.length === 2 ? offer.gradient : ["#234858", "#4e6c7a"];

  // Structured data so search engines can read the product list.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: offer.title,
    description: offer.description,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: offer.products.slice(0, 24).map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Product",
          name: p.title,
          sku: p.id,
          image: p.image,
          url: `/product/${p.slug}`,
          ...(p.rating > 0 && { aggregateRating: { "@type": "AggregateRating", ratingValue: p.rating, reviewCount: 1 } }),
          offers: { "@type": "Offer", price: p.price.toFixed(2), priceCurrency: "USD", availability: "https://schema.org/InStock" },
        },
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav aria-label="Breadcrumb" className="container py-3 text-xs text-ink/70">
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <ChevronRight size={12} />
          <li aria-current="page" className="text-ink">
            {offer.title}
          </li>
        </ol>
      </nav>

      <header style={{ backgroundImage: `linear-gradient(to bottom, ${from}, ${to})` }}>
        <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between desk:py-10">
          <div>
            <h1
              className="text-3xl leading-tight text-white sm:text-4xl desk:text-[42px]"
              style={{ textShadow: "0 2px 3px rgba(0,0,0,.5)" }}
            >
              {offer.title}
            </h1>
            <h2
              className="mt-1 text-base font-normal text-white sm:text-lg"
              style={{ textShadow: "0 2px 3px rgba(0,0,0,.5)" }}
            >
              {offer.subtitle}
            </h2>
          </div>
          {offer.code && <CouponCode code={offer.code} />}
        </div>
      </header>

      <OfferListing offer={offer} />
    </>
  );
}
