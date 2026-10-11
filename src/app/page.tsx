import BestSelling from "@/components/home/BestSelling";
import FeatureTiles from "@/components/home/FeatureTiles";
import FeaturedCategories from "@/components/home/FeaturedCategories";
import PlusBanner from "@/components/home/PlusBanner";
import PopularBrands from "@/components/home/PopularBrands";
import ProductCarousel from "@/components/home/ProductCarousel";
import ProductStrip from "@/components/home/ProductStrip";
import PromoCards from "@/components/home/PromoCards";
import QuoteBanner from "@/components/home/QuoteBanner";
import Resources from "@/components/home/Resources";
import { featuredCarousel, stripProducts } from "@/data/products";

export default function HomePage() {
  return (
    <>
      <PromoCards />
      <ProductStrip products={stripProducts} />
      <PlusBanner />
      <ProductCarousel {...featuredCarousel} />
      <FeatureTiles />
      <FeaturedCategories />
      <BestSelling />
      <QuoteBanner />
      <PopularBrands />
      <Resources />
    </>
  );
}
