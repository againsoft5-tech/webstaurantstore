import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Checkout | ExtraMile Trading",
  robots: { index: false, follow: false },
};

export default function CheckoutPage() {
  return (
    <div className="container py-16 text-center">
      <h1 className="text-2xl font-semibold text-ink">Checkout is coming soon</h1>
      <p className="mt-2 text-ink/70">Your cart is saved. Online checkout will be available shortly.</p>
      <Link
        href="/cart"
        className="mt-6 inline-block rounded bg-brand px-6 py-3 text-sm font-bold text-white hover:bg-brand-dark"
      >
        Back to Cart
      </Link>
    </div>
  );
}
