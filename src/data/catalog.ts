import bk from "./variants/177CST24BK.json";
import dbk from "./variants/177CST24DBK.json";
import dgd from "./variants/177CST24DGD.json";
import dss from "./variants/177CST24DSS.json";
import gd from "./variants/177CST24GD.json";
import ss from "./variants/177CST24SS.json";
import { categoryHubs } from "./categoryHubs";
import { bestSelling } from "./home";
import { offers } from "./offers";
import { featuredCarousel, stripProducts, stripSlugs } from "./products";

/* ---------- Types ---------- */

export type Review = {
  author: string;
  business?: string | null;
  rating: number;
  date?: string;
  style?: string;
  finish?: string;
  verified?: boolean;
  body: string;
};
export type Cert = { name: string; text: string; image: string };
export type WorksWith = { title: string; image: string; price: number; unit: string; slug: string };

export type ProductVariants = {
  styles: string[];
  finishes: string[];
  /** "Style|Finish" -> product slug */
  matrix: Record<string, string>;
  current: { style: string; finish: string };
  /** Thumbnail shown on each Style button. */
  styleImages?: Record<string, string>;
};

/** Full product page content. Optional on every product; only some have it. */
export type ProductDetail = {
  upc?: string;
  questionCount?: number;
  shipsIn?: string;
  freeShipping?: boolean;
  breadcrumb?: string[];
  gallery: { src: string; zoom: string }[];
  overview: string[];
  description: string[];
  features: { title: string; text: string }[];
  certs: Cert[];
  faq: { q: string; a: string }[];
  specs: [string, string][];
  kit: { qty: string; name: string; sku: string }[];
  works: WorksWith[];
  reviews: Review[];
  mentioned: string[];
  videos?: { id: string; src: string; poster: string; title: string; description: string; transcript?: string; href?: string }[];
  model?: { src: string; alt: string };
  variants?: ProductVariants;
  /** Slugs of sibling products from the same line (for "Other Products"). */
  line?: string[];
  brandInfo?: { name: string; logo: string; linkLabel: string };
  resources?: { label: string; image: string; href?: string }[];
  dimensions?: { overall: [string, string][]; board?: [string, string][] };
  compare?: {
    sku: string;
    slug: string;
    title: string;
    image: string;
    price: number;
    unit: string;
    freeShipping: boolean;
    plus: boolean;
    attrs: Record<string, string>;
  }[];
  mightLike?: { title: string; slug: string; image: string; price: number; unit: string }[];
  featuredReview?: string;
  prop65Icon?: string;
};

export type CatalogProduct = {
  slug: string;
  sku: string;
  title: string;
  brand?: string;
  image: string;
  price: number;
  unit: string;
  rating: number;
  reviewCount?: number;
  plus: boolean;
  detail?: ProductDetail;
};

/* ---------- Full-detail products: the six carving-station variants (scraped) ---------- */

type VariantJson = Omit<ProductDetail, "variants" | "line"> & {
  sku: string;
  slug: string;
  title: string;
  brand: string;
  rating: number;
  reviewCount: number;
  price: number;
  unit: string;
  plus: boolean;
  variantsNav: { head: string; items: { name: string; href: string; current: boolean }[] }[];
};

const variantFiles = [bk, dbk, gd, dgd, ss, dss] as unknown as VariantJson[];

/** Every Style x Finish combination is its own product page (same as the source store). */
const matrix: Record<string, string> = {
  "Single Arm|Black": stripSlugs.s1,
  "Dual Arm|Black": stripSlugs.s6,
  "Single Arm|Gold": stripSlugs.s5,
  "Dual Arm|Gold": stripSlugs.s3,
  "Single Arm|Stainless Steel": stripSlugs.s4,
  "Dual Arm|Stainless Steel": stripSlugs.s2,
};
const styleImages = { "Single Arm": "/products/s1.jpg", "Dual Arm": "/products/s6.jpg" };

/** Order used for "Other Products from this Line" (the current product is skipped). */
const lineOrder = [stripSlugs.s3, stripSlugs.s2, stripSlugs.s5, stripSlugs.s6, stripSlugs.s4, stripSlugs.s1, stripSlugs.s10, stripSlugs.s7, stripSlugs.s8];

const headValue = (v: VariantJson, label: string) =>
  v.variantsNav.find((n) => n.head.startsWith(label))?.head.replace(/^[^:]+:\s*/, "") ?? "";

const fullProducts: CatalogProduct[] = variantFiles.map((g) => ({
  slug: g.slug,
  sku: g.sku,
  title: g.title,
  brand: g.brand,
  // Cards, carts and carousels show the clean product-on-white shot, not the lifestyle gallery photo.
  image: stripProducts.find((sp) => stripSlugs[sp.id] === g.slug)?.image ?? g.gallery[0].src,
  price: g.price,
  unit: g.unit,
  rating: g.rating,
  reviewCount: g.reviewCount,
  plus: g.plus,
  detail: {
    upc: g.upc,
    questionCount: g.questionCount,
    shipsIn: g.shipsIn,
    freeShipping: g.freeShipping,
    breadcrumb: g.breadcrumb,
    gallery: g.gallery,
    overview: g.overview,
    description: g.description,
    features: g.features,
    certs: g.certs,
    faq: g.faq,
    specs: g.specs,
    kit: g.kit,
    works: g.works,
    reviews: g.reviews,
    mentioned: g.mentioned,
    videos: g.videos,
    model: g.model,
    brandInfo: g.brandInfo,
    resources: g.resources,
    dimensions: g.dimensions,
    compare: g.compare && g.compare.length > 0 ? g.compare : undefined,
    mightLike: g.mightLike,
    featuredReview: g.featuredReview,
    prop65Icon: g.prop65Icon,
    variants: {
      styles: ["Single Arm", "Dual Arm"],
      finishes: ["Black", "Gold", "Stainless Steel"],
      matrix,
      current: { style: headValue(g, "Style"), finish: headValue(g, "Finish") },
      styleImages,
    },
    line: lineOrder.filter((s) => s !== g.slug).slice(0, 5),
  },
}));

/* ---------- Basic products (name, price, image, rating only) ---------- */

const basics: CatalogProduct[] = [
  // Items referenced by the compare tables / "Items You Might Like" / "Works With".
  ...variantFiles.flatMap((g) => [
    ...(g.compare ?? []).filter((c) => c.slug !== g.slug).map((c) => ({ slug: c.slug, sku: c.sku, title: c.title, image: c.image, price: c.price, unit: c.unit })),
    ...(g.mightLike ?? []).map((m) => ({ slug: m.slug, sku: m.slug.slice(0, 24).toUpperCase(), title: m.title, image: m.image, price: m.price, unit: m.unit })),
    ...g.works.map((w) => ({ slug: w.slug, sku: w.slug.slice(0, 24).toUpperCase(), title: w.title, image: w.image, price: w.price, unit: w.unit })),
  ]).map((x) => ({ ...x, rating: 0, plus: true })),
  ...offers.flatMap((o) =>
    o.products.map((p) => ({
      slug: p.slug,
      sku: p.id,
      title: p.title,
      brand: p.brand,
      image: p.image,
      price: p.price,
      unit: p.unit,
      rating: p.rating,
      plus: p.plus,
    })),
  ),
  ...categoryHubs.flatMap((h) =>
    h.top.map((p) => ({
      slug: p.slug,
      sku: p.id,
      title: p.title,
      image: p.image,
      price: p.price,
      unit: p.unit,
      rating: p.rating,
      plus: p.plus,
    })),
  ),
  ...stripProducts.map((p) => ({
    slug: stripSlugs[p.id],
    sku: p.id.toUpperCase(),
    title: p.name,
    brand: "Avantco Equipment",
    image: p.image,
    price: p.price,
    unit: p.unit,
    rating: p.rating,
    plus: !!p.plus,
  })),
  ...[...featuredCarousel.products, ...bestSelling].map((p) => ({
    slug: p.id,
    sku: p.id.toUpperCase(),
    title: p.name,
    image: p.image,
    price: p.price,
    unit: p.unit,
    rating: p.rating,
    plus: !!p.plus,
  })),
];

const bySlug = new Map<string, CatalogProduct>();
for (const p of basics) if (!bySlug.has(p.slug)) bySlug.set(p.slug, p);
for (const fp of fullProducts) bySlug.set(fp.slug, fp); // full detail wins

export const allProducts = [...bySlug.values()];
export const getProduct = (slug: string) => bySlug.get(slug);
