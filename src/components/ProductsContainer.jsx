import { useLoaderData } from "react-router-dom";
import { ProductsGrid, ProductsList } from "./index";
import { useState } from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = () => {
  const { meta } = useLoaderData();
  const total = meta.pagination.total;
  const [layout, setLayout] = useState("grid");

  const updateLayout = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      layout === pattern
        ? "btn-primary text-primary-content"
        : "btn-ghost text-based-content"
    }`;
  };

  if (total < 1) {
    return (
      <h2 className="text-2xl capitalize font-bold tracking-wide">
        no products found...
      </h2>
    );
  }

  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <div className="font-medium text-md">
          {total} product{total.length > 0 && "s"}
        </div>
        <div className="flex gap-x-2">
          <button
            onClick={() => setLayout("grid")}
            className={updateLayout("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            onClick={() => setLayout("list")}
            className={updateLayout("list")}
          >
            <BsList />
          </button>
        </div>
      </div>
      {layout === "list" ? <ProductsList /> : <ProductsGrid />}
    </>
  );
};

export default ProductsContainer;
