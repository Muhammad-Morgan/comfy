import { formatPrice } from "../utiles";
import { Link, useLoaderData } from "react-router-dom";
const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <article className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-6">
      {products?.map((product) => {
        const { title, image, price } = product.attributes;
        const dollarAmount = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/products/singleProduct/${product.id}`}
            className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body items-center">
              <h2 className="card-title text-xl tracking-wide font-medium my-3">
                {title}
              </h2>
              <p className="font-medium text-secondary tracking-wide">
                {dollarAmount}
              </p>
            </div>
          </Link>
        );
      })}
    </article>
  );
};

export default ProductsGrid;
