import { megaMenu } from "./megaMenu";

export type NavItem = { name: string; href: string };

export const SITE_NAME = { primary: "ExtraMile", secondary: "Trading" };

export const mainNav: NavItem[] = megaMenu.map(({ name, href }) => ({ name, href }));

export const utilityLinks: NavItem[] = [
  { name: "Help Center", href: "/help" },
  { name: "Get the App", href: "/app" },
];

export const promoLinks: NavItem[] = [
  { name: "FREE Trial Available! Unlock Free Shipping", href: "/plus" },
  { name: "Earn 3% Back & Save on Plus", href: "/plus/card" },
];
