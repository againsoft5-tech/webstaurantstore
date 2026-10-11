import SectionTitle from "@/components/ui/SectionTitle";
import { bestSelling } from "@/data/home";
import ProductStrip from "./ProductStrip";

export default function BestSelling() {
  return (
    <div className="pb-2">
      <div className="container">
        <SectionTitle>Best Selling Products</SectionTitle>
      </div>
      <ProductStrip products={bestSelling} />
    </div>
  );
}
