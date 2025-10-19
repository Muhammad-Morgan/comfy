import SectionTitle from "./SectionTitle";
import { useLoaderData } from "react-router-dom";
import ProductsGrid from "./ProductsGrid";
const FeaturedProducts = () => {

  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid />
    </section>
  );
};

export default FeaturedProducts;
