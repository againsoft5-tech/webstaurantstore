export type Promo = {
  image: string;
  alt: string;
  title: string;
  subtitle: string;
  href: string;
  badge?: string; // e.g. "10% OFF" — shown top-right on the image
  code?: string; // coupon code shown on the image
  plus?: boolean;
};

/**
 * Replace the files in /public/promos with real photos (same file names,
 * ~852x554) or point `image` at your own paths.
 */
export const promos: Promo[] = [
  {
    image: "/promos/promo-1.jpg",
    alt: "Breakfast essentials",
    title: "10% Off Breakfast Must-Haves",
    subtitle: "Own the Early Hours",
    href: "/offers/10-off-breakfast-must-haves",
    code: "WAKEUP",
  },
  {
    image: "/promos/promo-2.jpg",
    alt: "Energy drinks",
    title: "Energy Drinks",
    subtitle: "Score Big Every Game",
    href: "/offers/energy-drinks",
    code: "BOOST",
  },
  {
    image: "/promos/promo-3.jpg",
    alt: "Coffee station",
    title: "Coffee Station Staples",
    subtitle: "Stay Organized in Style",
    href: "/offers/coffee-station-staples",
  },
  {
    image: "/promos/promo-4.jpg",
    alt: "Classic favorites",
    title: "10% Off Classic Favorites",
    subtitle: "Craveable Comfort",
    href: "/offers/10-off-classic-favorites",
    code: "COZYBITES",
  },
];
