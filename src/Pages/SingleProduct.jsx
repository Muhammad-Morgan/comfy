import { useDispatch } from "react-redux";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../utiles";
import { useState } from "react";
import { addItem } from "../Features/Cart/cartSlice";

const getSingleQuery = (id) => {
  return {
    queryKey: ["singleproduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

// Loader
export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      getSingleQuery(params.id)
    );
    return { product: response.data.data };
  };

// Main component
const SingleProduct = () => {
  // Create dispatch instanse
  const dispatch = useDispatch();
  // Loader Hook
  const { product } = useLoaderData();
  const { title, image, price, company, description, colors } =
    product.attributes;
  // States
  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);
  // Aside function to change price
  const dollarAmount = formatPrice(price);
  // Handling function(s)
  const handleAmount = (e) => {
    const amount = Number(e.target.value);
    setAmount(amount);
  };
  const cartItem = {
    cartID: product.id + productColor,
    productID: product.id,
    title,
    image,
    price,
    company,
    amount,
    productColor,
  };

  return (
    <>
      <div className="breadcrumbs mb-8">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      <section className="grid gap-16 lg:grid-cols-2">
        <div className="card">
          <figure>
            <img
              src={image}
              className="rounded-2xl mr-auto w-96 lg:w-full object-cover h-full"
              alt={title}
            />
          </figure>
        </div>
        <div className="grid gap-y-4">
          <div className="grid gap-2">
            <h2 className="text-3xl font-bold tracking-wide">{title}</h2>
            <h4 className="text-xl text-base-content font-bold tracking-wide">
              {company}
            </h4>
            <h4 className="text-xl text-secondary">{dollarAmount}</h4>
          </div>
          <p className="leading-8">{description}</p>
          <div>
            <h5 className="text-lg tracking-wider mb-3">Colors</h5>
            <ul>
              {colors.map((color) => {
                return (
                  <button
                    type="button"
                    className={`transition duration-200 badge w-6 h-6 mr-2 border-2 cursor-pointer ${
                      color === productColor && "border-secondary"
                    }`}
                    key={color}
                    style={{
                      backgroundColor: `${color}`,
                    }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </ul>
          </div>
          <label htmlFor="amount">Amount</label>
          <select
            value={amount}
            onChange={handleAmount}
            id="amount"
            className="select select-secondary select-bordered select-md cursor-pointer"
          >
            {Array.from({ length: 20 }, (_, index) => {
              const amount = index + 1;

              return (
                <option key={index} value={amount}>
                  {amount}
                </option>
              );
            })}
          </select>
          <button
            type="button"
            className="mt-8 btn btn-secondary btn-md uppercase w-fit py-6"
            onClick={() => dispatch(addItem({ product: cartItem }))}
          >
            add to bag
          </button>
        </div>
      </section>
    </>
  );
};

export default SingleProduct;
