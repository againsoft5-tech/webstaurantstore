import type { Product } from "./products";

export const featuredCategories = [
  { name: "Restaurant Equipment", image: "/categories/rest-equip.png", href: "/category/restaurant-equipment" },
  { name: "Commercial Refrigeration", image: "/categories/refrigeration.png", href: "/category/refrigeration" },
  { name: "Smallwares", image: "/categories/smallwares.png", href: "/category/smallwares" },
  { name: "Storage & Transport", image: "/categories/storage.png", href: "/category/storage-transport" },
  { name: "Dinnerware & Tabletop", image: "/categories/dinnerware-tabletop.png", href: "/category/tabletop" },
  { name: "Disposables", image: "/categories/disposables.png", href: "/category/disposables" },
  { name: "Furniture", image: "/categories/furniture.png", href: "/category/furniture" },
  { name: "Industrial Supplies", image: "/categories/industrials.png", href: "/category/industrial" },
  { name: "Food & Beverage", image: "/categories/food-beverage.png", href: "/category/food-beverage" },
  { name: "Janitorial Supplies", image: "/categories/janitorial.png", href: "/category/janitorial" },
  { name: "Parts & Accessories", image: "/categories/parts.png", href: "/category/parts" },
  { name: "Event Furniture", image: "/categories/event-furniture.png", href: "/category/event-furniture" },
  { name: "Coffee and Espresso", image: "/categories/coffee-espresso.png", href: "/category/coffee-espresso" },
  { name: "Cooking Utensils", image: "/categories/cooking-utensils.png", href: "/category/cooking-utensils" },
  { name: "Plastic Cups and Lids", image: "/categories/plastic-cups-lids.png", href: "/category/plastic-cups-lids" },
  { name: "Retail Shelving", image: "/categories/retail-shelving.png", href: "/category/retail-shelving" },
  { name: "Business Type", image: "/categories/business-types.png", href: "/business-type" },
  { name: "New Items", image: "/categories/business-types-1.png", href: "/new" },
];

const best: Omit<Product, "image" | "plus" | "href">[] = [
  { id: "b1", name: "Choice Clear PET Customizable Plastic Cold Cup - 16 oz. - 1,000/Case", price: 57.99, unit: "Case", rating: 4.5 },
  { id: "b2", name: "Noble Powder-Free Disposable Clear 3 Mil Thick Vinyl Gloves for Foodservice - Large - 1,000/Case", price: 24.49, unit: "Case", rating: 4.8 },
  { id: "b3", name: "Choice 9-24 oz. Clear Flat Lid with Straw Slot - 1,000/Case", price: 31.99, unit: "Case", rating: 4.3 },
  { id: "b4", name: "Lotus Biscoff Creamy Cookie Butter Spread Pail 17.64 lb.", price: 132.49, unit: "Each", rating: 4.4 },
  { id: "b5", name: "Oatly Barista Edition Oat Milk 32 fl. oz. - 12/Case", price: 39.99, unit: "Case", rating: 4.7 },
  { id: "b6", name: "Domino Pure Cane Extra Fine Granulated Sugar - 50 lb.", price: 50.49, unit: "Each", rating: 4.8 },
  { id: "b7", name: 'Lavex Li\'l Herc 55-60 Gallon 1.2 Mil 38" x 58" Low-Density Black Trash Bag - 100/Case', price: 27.99, unit: "Case", rating: 4.7 },
  { id: "b8", name: 'Lavex 8" Natural Kraft Hardwound Paper Towel, 800 Feet / Roll - 6/Case', price: 25.49, unit: "Case", rating: 4.7 },
  { id: "b9", name: 'Lavex 3 1/2" x 4 1/4" Individually Wrapped 2-Ply Toilet Paper Roll - 96/Case', price: 46.99, unit: "Case", rating: 4.3 },
  { id: "b10", name: "Lavex Linen-Feel White Customizable 1/6 Fold Guest Towel - 500/Case", price: 52.99, unit: "Case", rating: 4.6 },
];

export const bestSelling: Product[] = best.map((p) => ({
  ...p,
  image: `/products/${p.id}.jpg`,
  plus: p.id !== "b6",
  href: `/product/${p.id}`,
}));

export const popularBrands = [
  { name: "Rubbermaid Commercial Products", image: "/brands/rubbermaid.jpg", href: "/brands/rubbermaid" },
  { name: "Edlund", image: "/brands/edlund.jpg", href: "/brands/edlund" },
  { name: "San Jamar", image: "/brands/san-jamar.svg", href: "/brands/san-jamar" },
  { name: "Vollrath", image: "/brands/vollrath.jpg", href: "/brands/vollrath" },
  { name: "Mercer Culinary", image: "/brands/mercer.jpg", href: "/brands/mercer" },
  { name: "Cambro", image: "/brands/cambro.jpg", href: "/brands/cambro" },
  { name: "Carlisle", image: "/brands/carlisle.jpg", href: "/brands/carlisle" },
  { name: "Amana Commercial", image: "/brands/amana.jpg", href: "/brands/amana" },
  { name: "True", image: "/brands/true.jpg", href: "/brands/true" },
];

export const resources = [
  {
    title: "Offering Smaller Portion Sizes in Restaurants: Benefits and Tips",
    image: "/resources/small-portions.jpg",
    href: "/resources/smaller-portion-sizes",
  },
  {
    title: "Best Commercial Espresso Machines",
    image: "/resources/espresso.jpg",
    href: "/resources/espresso-machines",
  },
  {
    title: "A Complete Guide to Restaurant Branding",
    image: "/resources/branding.jpg",
    href: "/resources/restaurant-branding",
  },
];

export const footerColumns = [
  {
    title: "Services",
    links: [
      ["ExtraMile Plus", "/plus"],
      ["ExtraMile Rewards", "/rewards"],
      ["ExtraMile App", "/app"],
      ["Customize Your Supplies", "/customize"],
      ["Recipe Resizer", "/recipe-resizer"],
      ["Partners & Integrations", "/partners"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Scratch & Dent Outlet", "/outlet"],
      ["Weekly Sales", "/sales"],
      ["Coupons", "/coupons"],
      ["Food Service Resources", "/resources"],
      ["ExtraMile Reviews", "/reviews"],
      ["Safety Recall", "/safety-recall"],
    ],
  },
  {
    title: "About",
    links: [
      ["About Us", "/about-us"],
      ["Our Brands", "/brands"],
      ["Careers", "/careers"],
      ["Financing & Payments", "/financing"],
      ["Scholarship", "/scholarship"],
      ["Sell on ExtraMile", "/sell"],
      ["Return Policy", "/return-policy"],
    ],
  },
] as const;

export const legalLinks = [
  ["Terms of Sale", "/terms-of-sale"],
  ["Privacy Policy", "/privacy-policy"],
  ["Terms of Use", "/terms-of-use"],
  ["Accessibility Policy", "/accessibility"],
  ["Do Not Sell or Share My Personal Information", "/do-not-sell"],
] as const;
