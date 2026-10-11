export type Product = {
  id: string;
  name: string;
  image: string;
  price: number;
  unit: string; // "Each" | "Case"
  rating: number; // 0-5, halves allowed
  plus?: boolean;
  href: string;
};

export const featuredCarousel = {
  title: "Thanksgiving Essentials",
  href: "/offers/thanksgiving",
  image: "/promos/thanksgiving.jpg",
  products: <Product[]>[
    {
      id: "p1",
      name: 'Avantco Carving Station Kit with 24" Black Heat Lamp, Cutting Board, and Drip Pan',
      image: "/products/p1.jpg",
      price: 164.99,
      unit: "Each",
      rating: 5,
      plus: true,
      href: "/product/p1",
    },
    {
      id: "p2",
      name: "Choice 16 oz. Autumn Print PET Plastic Cold Cup - 1,000/Case",
      image: "/products/p2.jpg",
      price: 88.49,
      unit: "Case",
      rating: 4.5,
      plus: true,
      href: "/product/p2",
    },
    {
      id: "p3",
      name: "Backyard Pro BP30-ALKIT 30 Qt. Deluxe Aluminum Turkey Fryer / Seafood Boiler Kit",
      image: "/products/p3.jpg",
      price: 94.99,
      unit: "Each",
      rating: 4.6,
      plus: true,
      href: "/product/p3",
    },
    {
      id: "p4",
      name: "Adourne Expressions Autumn Sprinkles 10 lb.",
      image: "/products/p4.jpg",
      price: 23.99,
      unit: "Case",
      rating: 4.8,
      plus: true,
      href: "/product/p4",
    },
    {
      id: "p5",
      name: 'AvaTek 5" Probe Dial Meat Thermometer',
      image: "/products/p5.jpg",
      price: 3.29,
      unit: "Each",
      rating: 4.9,
      plus: true,
      href: "/product/p5",
    },
    {
      id: "p6",
      name: "Choice 24-Ply Butcher Sausage Twine 2 lb. Spool",
      image: "/products/p6.jpg",
      price: 11.49,
      unit: "Each",
      rating: 4.9,
      plus: true,
      href: "/product/p6",
    },
    {
      id: "p7",
      name: "Choice 24-Ply Butcher Sausage Twine 1/2 lb. Ball",
      image: "/products/p7.jpg",
      price: 4.49,
      unit: "Each",
      rating: 4.9,
      plus: true,
      href: "/product/p7",
    },
    {
      id: "p8",
      name: "Beef Soup Base - 25 lb.",
      image: "/products/p8.jpg",
      price: 50.49,
      unit: "Each",
      rating: 4.5,
      plus: true,
      href: "/product/p8",
    },
    {
      id: "p9",
      name: "Chicken Soup Base - 25 lb.",
      image: "/products/p9.jpg",
      price: 59.99,
      unit: "Each",
      rating: 4.9,
      plus: true,
      href: "/product/p9",
    },
    {
      id: "p10",
      name: "Bob's Red Mill 25 lb. Potato Flakes",
      image: "/products/p10.jpg",
      price: 102.99,
      unit: "Case",
      rating: 3.7,
      plus: true,
      href: "/product/p10",
    },
  ],
};

const strip: Omit<Product, "image" | "plus" | "href">[] = [
  { id: "s1", name: 'Avantco Carving Station Kit with 24" Black Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 164.99, unit: "Each", rating: 5 },
  { id: "s2", name: 'Avantco Carving Station Kit with 24" Dual Arm Heat Lamp, Cutting Board, and Drip Pan - 120V, 500W', price: 209.99, unit: "Each", rating: 5 },
  { id: "s3", name: 'Avantco Carving Station Kit with 24" Dual Arm Gold Heat Lamp, Cutting Board, and Drip Pan - 120V, 500W', price: 209.99, unit: "Each", rating: 0 },
  { id: "s4", name: 'Avantco Carving Station Kit with 24" Stainless Steel Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 164.99, unit: "Each", rating: 5 },
  { id: "s5", name: 'Avantco Carving Station Kit with 24" Gold Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 164.99, unit: "Each", rating: 0 },
  { id: "s6", name: 'Avantco Carving Station Kit with 24" Black Dual Arm Heat Lamp, Cutting Board, and Drip Pan - 120V, 500W', price: 202.49, unit: "Each", rating: 5 },
  { id: "s7", name: 'Avantco Carving Station Kit with 39" Black Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 174.49, unit: "Each", rating: 0 },
  { id: "s8", name: 'Avantco Carving Station Kit with 39" Stainless Steel Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 182.99, unit: "Each", rating: 5 },
  { id: "s9", name: 'Avantco HLDBL24BK 24" Black Dual Arm Stainless Steel Heat Lamp - 120V, 500W', price: 169.99, unit: "Each", rating: 4.5 },
  { id: "s10", name: 'Avantco Carving Station Kit with 39" Gold Heat Lamp, Cutting Board, and Drip Pan - 120V, 250W', price: 182.99, unit: "Each", rating: 0 },
];

/** Real URL slugs for the carving-station line (also used by the product page variants). */
export const stripSlugs: Record<string, string> = {
  s1: "avantco-carving-station-kit-with-24-black-heat-lamp-cutting-board-and-drip-pan-120v-250w",
  s2: "avantco-4-dbl-ss-kit-24-stainless-steel-double-arm-heat-lamp-with-cutting-board-and-drip-pan",
  s3: "avantco-4-dbl-gd-kit-24-gold-double-arm-heat-lamp-with-cutting-board-and-drip-pan",
  s4: "avantco-24-ss-kit-24-stainless-steel-heat-lamp-with-cutting-board-and-drip-pan",
  s5: "avantco-24-gd-kit-24-gold-heat-lamp-with-cutting-board-and-drip-pan",
  s6: "avantco-4-dbl-bk-kit-24-black-double-arm-heat-lamp-with-cutting-board-and-drip-pan",
  s7: "avantco-carving-station-kit-with-39-black-heat-lamp-cutting-board-and-drip-pan-120v-250w",
  s8: "avantco-cst39ss-39-sterling-silver-heat-lamp-with-wood-cutting-board-and-drip-pan-120v",
  s9: "avantco-hldbl24bk-24-black-double-arm-stainless-steel-heat-lamp",
  s10: "avantco-carving-station-kit-with-39-gold-heat-lamp-cutting-board-and-drip-pan-120v-250w",
};

export const stripProducts: Product[] = strip.map((p) => ({
  ...p,
  image: `/products/${p.id}.jpg`,
  plus: true,
  href: `/product/${stripSlugs[p.id]}`,
}));
